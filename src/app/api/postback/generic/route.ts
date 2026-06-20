import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const token = searchParams.get('token')
  const clickId = searchParams.get('clickid')
  const payoutStr = searchParams.get('payout')
  const transactionId = searchParams.get('txid') ?? searchParams.get('transaction_id')
  const network = searchParams.get('network') ?? 'generic'

  // Validate secret token
  if (!token || token !== process.env.POSTBACK_SECRET_TOKEN) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  if (!clickId) {
    return NextResponse.json({ error: 'clickid required' }, { status: 400 })
  }

  let rawPayload: Record<string, string> = {}
  try {
    const body = await request.text()
    if (body) rawPayload = Object.fromEntries(new URLSearchParams(body))
  } catch {}

  const click = await prisma.affiliateClick.findUnique({
    where: { clickId },
    include: { offer: true },
  })

  if (!click) {
    return NextResponse.json({ error: 'Click ID not found', clickId }, { status: 404 })
  }

  const payout = payoutStr ? parseFloat(payoutStr) : click.offer?.payoutAmount ?? null

  await prisma.conversion.create({
    data: {
      clickId: click.clickId,
      offerId: click.offerId,
      siteId: click.siteId,
      payoutAmount: payout,
      currency: 'USD',
      network,
      transactionId: transactionId ?? null,
      status: 'pending',
      rawPayload: { ...rawPayload, ...Object.fromEntries(searchParams) },
    },
  })

  return NextResponse.json({ ok: true })
}

export async function GET(request: NextRequest) {
  return POST(request)
}
