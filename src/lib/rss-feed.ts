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

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch(feedUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Feed Reader)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      },
      signal: controller.signal,
    }).finally(() => {
      clearTimeout(timeoutId)
    })

    if (!response.ok) {
      console.error(`RSS feed fetch failed with status: ${response.status} ${response.statusText}`)
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`)
    }

    const xmlText = await response.text()
    
    // Check if we got valid XML
    if (!xmlText || xmlText.trim().length === 0) {
      console.error('RSS feed returned empty content')
      throw new Error('RSS feed returned empty content')
    }
    
    // Check if it looks like XML/RSS
    if (!xmlText.includes('<rss') && !xmlText.includes('<feed')) {
      console.error('RSS feed does not appear to be valid XML')
      throw new Error('RSS feed does not appear to be valid XML')
    }

    // Parse RSS XML
    const items: any[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match
    let index = 0
    let itemCount = 0

    while ((match = itemRegex.exec(xmlText)) !== null && items.length < 12) {
      itemCount++
      const itemContent = match[1]

      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/)
      const descMatch = itemContent.match(
        /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/
      )
      // Try to get content:encoded for better content
      const contentMatch = itemContent.match(
        /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/
      )
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/)
      
      // Extract categories using a more compatible approach
      const categories: string[] = []
      const categoryRegex = /<category><!\[CDATA\[(.*?)\]\]><\/category>/g
      let categoryMatch
      while ((categoryMatch = categoryRegex.exec(itemContent)) !== null) {
        categories.push(categoryMatch[1].trim())
      }

      const title = titleMatch ? titleMatch[1].trim() : ''
      const link = linkMatch ? linkMatch[1].trim() : ''
      // Use content:encoded if available, otherwise fall back to description
      const rawContent = contentMatch ? contentMatch[1].trim() : (descMatch ? descMatch[1].trim() : '')
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : ''

      // Extract image from description or content
      const imageMatch = rawContent.match(/<img[^>]+src="([^"]+)"/i)
      const image = imageMatch ? imageMatch[1] : '/images/blog/blog-01.jpg'

      // Clean description (remove HTML tags, get first paragraph)
      // Extract first paragraph from content
      const firstParagraphMatch = rawContent.match(/<p[^>]*>([\s\S]*?)<\/p>/i)
      let cleanDesc = ''
      
      if (firstParagraphMatch) {
        cleanDesc = firstParagraphMatch[1]
          .replace(/<[^>]+>/g, '')
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .trim()
          .substring(0, 150)
      } else {
        // Fallback to cleaning entire content
        cleanDesc = rawContent
          .replace(/<[^>]+>/g, '')
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .trim()
          .substring(0, 150)
      }

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
            ? (() => {
                try {
                  return new Date(pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                } catch {
                  return pubDate
                }
              })()
            : 'Recent',
          link,
        })
        index++
      }
    }

    if (items.length === 0 && itemCount === 0) {
      console.warn('No RSS items found in feed. XML length:', xmlText.length)
      console.warn('First 500 chars of XML:', xmlText.substring(0, 500))
    } else if (items.length === 0 && itemCount > 0) {
      console.warn(`Found ${itemCount} items but none passed validation`)
    } else {
      console.log(`Successfully parsed ${items.length} RSS items`)
    }

    return items
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    return []
  }
}
