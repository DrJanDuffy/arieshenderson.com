export type RSSBlogItem = {
  id: number
  title: string
  paragraph: string
  image: string
  author: {
    name: string
    image: string
    designation: string
  }
  tags: string[]
  publishDate: string
  link: string
}

export async function fetchRSSFeed(): Promise<RSSBlogItem[]> {
  try {
    const feedUrl =
      'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18'

    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed')
    }

    const xmlText = await response.text()

    // Parse RSS XML
    const items: any[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match
    let index = 0

    while ((match = itemRegex.exec(xmlText)) !== null && items.length < 6) {
      const itemContent = match[1]

      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/)
      const descMatch = itemContent.match(
        /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/
      )
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/)
      const categoryMatches = itemContent.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g)

      const title = titleMatch ? titleMatch[1].trim() : ''
      const link = linkMatch ? linkMatch[1].trim() : ''
      const description = descMatch ? descMatch[1].trim() : ''
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : ''

      // Extract image from description
      const imageMatch = description.match(/<img[^>]+src="([^"]+)"/i)
      const image = imageMatch ? imageMatch[1] : '/images/blog/blog-01.jpg'

      // Extract categories
      const categories: string[] = []
      for (const catMatch of categoryMatches) {
        categories.push(catMatch[1].trim())
      }

      // Clean description (remove HTML tags, get first paragraph)
      const cleanDesc = description
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .trim()
        .substring(0, 150)

      if (title && link) {
        items.push({
          id: index + 1,
          title,
          paragraph: cleanDesc || 'Read more about this real estate market insight.',
          image,
          author: {
            name: 'KCM Crew',
            image: '/images/blog/author-03.png',
            designation: 'Real Estate Market Expert',
          },
          tags: categories.length > 0 ? categories : ['Market News'],
          publishDate: pubDate
            ? new Date(pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : 'Recent',
          link,
        })
        index++
      }
    }

    return items
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    return []
  }
}
