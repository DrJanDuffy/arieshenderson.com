import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const feedUrl =
      'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18'

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Feed Reader)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      },
      signal: controller.signal,
    }).finally(() => {
      clearTimeout(timeoutId)
    })

    const status = response.status
    const statusText = response.statusText
    const contentType = response.headers.get('content-type')
    const xmlText = await response.text()

    // Check for RSS structure
    const hasRss = xmlText.includes('<rss')
    const hasFeed = xmlText.includes('<feed')
    const hasItem = xmlText.includes('<item>')

    // Try to find items
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match
    let itemCount = 0
    const sampleItems: any[] = []

    while ((match = itemRegex.exec(xmlText)) !== null && itemCount < 3) {
      itemCount++
      const itemContent = match[1]

      // Try different title formats
      const titleCDATA = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
      const titlePlain = itemContent.match(/<title>(.*?)<\/title>/)
      const title = titleCDATA ? titleCDATA[1] : titlePlain ? titlePlain[1] : null

      // Try different link formats
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/)
      const link = linkMatch ? linkMatch[1] : null

      sampleItems.push({
        itemNumber: itemCount,
        hasTitle: !!title,
        title: title ? title.substring(0, 100) : null,
        hasLink: !!link,
        link: link ? link.substring(0, 100) : null,
        contentLength: itemContent.length,
        firstChars: itemContent.substring(0, 200),
      })
    }

    return NextResponse.json({
      success: true,
      status,
      statusText,
      contentType,
      xmlLength: xmlText.length,
      hasRss,
      hasFeed,
      hasItem,
      itemCount,
      sampleItems,
      first500Chars: xmlText.substring(0, 500),
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    )
  }
}
