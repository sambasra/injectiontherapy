import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { detectBot, parseDevice } from '@/lib/botDetection'
import { hashIp, buildDestinationUrl } from '@/lib/tracking'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const { searchParams, pathname } = request.nextUrl
  const headers = request.headers

  try {
    const offer = await prisma.offer.findUnique({
      where: { slug },
      include: { site: true },
    })

    // No offer found or inactive — redirect to fallback
    if (!offer || offer.status !== 'active') {
      const fallback = offer?.fallbackUrl ?? '/injection-types/'
      return NextResponse.redirect(new URL(fallback, request.url), { status: 302 })
    }

    const userAgent = headers.get('user-agent')
    const rawIp =
      headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      headers.get('x-real-ip') ??
      'unknown'

    const isLikelyBot = detectBot(userAgent, headers)
    const { device, browser, os } = parseDevice(userAgent)
    const ipHash = hashIp(rawIp)

    // UTM params
    const utmSource = searchParams.get('utm_source')
    const utmMedium = searchParams.get('utm_medium')
    const utmCampaign = searchParams.get('utm_campaign')
    const utmContent = searchParams.get('utm_content')
    const utmTerm = searchParams.get('utm_term')

    // Create click record
    const click = await prisma.affiliateClick.create({
      data: {
        siteId: offer.siteId,
        offerId: offer.id,
        pageUrl: searchParams.get('ref') ?? pathname,
        referrer: headers.get('referer') ?? null,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm,
        userAgent: userAgent?.slice(0, 500) ?? null,
        device,
        browser,
        os,
        ipHash,
        isLikelyBot,
        status: 'redirected',
      },
    })

    const destinationUrl = buildDestinationUrl(
      offer.destinationUrl,
      click.clickId,
      offer.subIdParamName,
      offer.appendClickId,
    )

    // Update with final destination
    await prisma.affiliateClick.update({
      where: { id: click.id },
      data: { redirectedTo: destinationUrl },
    })

    return NextResponse.redirect(destinationUrl, {
      status: 302,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    })
  } catch (error) {
    console.error('[/go/[slug]] error:', error)
    return NextResponse.redirect(new URL('/injection-types/', request.url), { status: 302 })
  }
}
