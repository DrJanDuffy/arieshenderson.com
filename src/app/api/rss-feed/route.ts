import { NextResponse } from 'next/server'

type RSSItem = {
  title: string
  link: string
  description: string
  pubDate: string
  category: string[]
  image?: string
}

export async function GET() {
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
    const items: RSSItem[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match

    while ((match = itemRegex.exec(xmlText)) !== null && items.length < 12) {
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
      const image = imageMatch ? imageMatch[1] : ''

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
          title,
          link,
          description: cleanDesc || 'Read more about this real estate market insight.',
          pubDate,
          category: categories.length > 0 ? categories : ['Market News'],
          image,
        })
      }
    }

    return NextResponse.json({ items })
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed', items: [] },
      { status: 500 }
    )
  }
}
