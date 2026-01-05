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
      redirect: 'follow', // Follow redirects
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
    
    // Check if it looks like XML/RSS/Atom
    if (!xmlText.includes('<rss') && !xmlText.includes('<feed') && !xmlText.includes('<item') && !xmlText.includes('<entry')) {
      console.error('RSS feed does not appear to be valid XML/RSS/Atom')
      console.error('First 500 chars:', xmlText.substring(0, 500))
      throw new Error('RSS feed does not appear to be valid XML/RSS/Atom')
    }

    // Parse RSS XML (try both <item> for RSS and <entry> for Atom)
    const items: any[] = []
    // Try RSS format first (<item>), then Atom format (<entry>)
    const itemRegex = /<(?:item|entry)>([\s\S]*?)<\/(?:item|entry)>/g
    let match
    let index = 0
    let itemCount = 0

    while ((match = itemRegex.exec(xmlText)) !== null && items.length < 12) {
      itemCount++
      const itemContent = match[1]

      // Try CDATA format first, then fall back to plain XML
      const titleMatchCDATA = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
      const titleMatchPlain = itemContent.match(/<title>(.*?)<\/title>/)
      const titleMatch = titleMatchCDATA || titleMatchPlain
      
      // Try different link formats (RSS uses <link>, Atom uses <link href="..."/>)
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/)
      const linkAtomMatch = itemContent.match(/<link[^>]+href=["']([^"']+)["'][^>]*\/?>/)
      const link = linkMatch ? linkMatch[1].trim() : (linkAtomMatch ? linkAtomMatch[1].trim() : '')
      
      // Try CDATA format first, then fall back to plain XML
      const descMatchCDATA = itemContent.match(
        /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/
      )
      const descMatchPlain = itemContent.match(
        /<description>([\s\S]*?)<\/description>/
      )
      const descMatch = descMatchCDATA || descMatchPlain
      
      // Try to get content:encoded for better content
      const contentMatchCDATA = itemContent.match(
        /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/
      )
      const contentMatchPlain = itemContent.match(
        /<content:encoded>([\s\S]*?)<\/content:encoded>/
      )
      const contentMatch = contentMatchCDATA || contentMatchPlain
      
      // Try different date formats (RSS uses <pubDate>, Atom uses <published> or <updated>)
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/)
      const publishedMatch = itemContent.match(/<published>(.*?)<\/published>/)
      const updatedMatch = itemContent.match(/<updated>(.*?)<\/updated>/)
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : (publishedMatch ? publishedMatch[1].trim() : (updatedMatch ? updatedMatch[1].trim() : ''))
      
      // Extract categories - try both CDATA and plain formats
      const categories: string[] = []
      const categoryRegexCDATA = /<category><!\[CDATA\[(.*?)\]\]><\/category>/g
      const categoryRegexPlain = /<category>(.*?)<\/category>/g
      
      let categoryMatch
      while ((categoryMatch = categoryRegexCDATA.exec(itemContent)) !== null) {
        categories.push(categoryMatch[1].trim())
      }
      // Reset regex lastIndex and try plain format
      categoryRegexPlain.lastIndex = 0
      while ((categoryMatch = categoryRegexPlain.exec(itemContent)) !== null) {
        const cat = categoryMatch[1].trim()
        if (!categories.includes(cat)) {
          categories.push(cat)
        }
      }

      const title = titleMatch ? titleMatch[1].trim() : ''
      // Use content:encoded if available, otherwise fall back to description
      const rawContent = contentMatch ? contentMatch[1].trim() : (descMatch ? descMatch[1].trim() : '')

      // Extract image from description or content - try multiple formats
      // Try double quotes first
      let imageMatch = rawContent.match(/<img[^>]+src=["']([^"']+)["']/i)
      // If not found, try single quotes
      if (!imageMatch) {
        imageMatch = rawContent.match(/<img[^>]+src=([^\s>]+)/i)
      }
      // Also check for enclosure tag (common in RSS feeds)
      const enclosureMatch = itemContent.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]+type=["']image/i)
      // Check for media:content or media:thumbnail
      const mediaContentMatch = itemContent.match(/<media:content[^>]+url=["']([^"']+)["']/i) || itemContent.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/i)
      
      let image = '/images/blog/blog-01.jpg'
      if (enclosureMatch && enclosureMatch[1]) {
        image = enclosureMatch[1].trim()
      } else if (mediaContentMatch && mediaContentMatch[1]) {
        image = mediaContentMatch[1].trim()
      } else if (imageMatch && imageMatch[1]) {
        image = imageMatch[1].trim()
      }
      
      // Clean up image URL - remove HTML entities and ensure it's a valid URL
      if (image && image !== '/images/blog/blog-01.jpg') {
        image = image
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
        // If it's a relative URL, make sure it starts with /
        if (!image.startsWith('http') && !image.startsWith('/')) {
          image = '/' + image
        }
      }
      
      // Debug logging for first few items
      if (itemCount <= 3) {
        console.log(`Item ${itemCount} - Image URL: "${image}"`)
      }

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

      // Debug logging for first few items
      if (itemCount <= 3) {
        console.log(`Item ${itemCount} - Title: "${title}", Link: "${link}", Has title: ${!!title}, Has link: ${!!link}`)
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
                  // Handle ISO 8601 dates from Atom feeds
                  const date = new Date(pubDate)
                  if (isNaN(date.getTime())) {
                    return pubDate
                  }
                  return date.toLocaleDateString('en-US', {
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
      } else if (itemCount <= 3) {
        console.log(`Item ${itemCount} skipped - missing title or link`)
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
