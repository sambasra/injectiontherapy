import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Network-specific postback handler — extend with network-specific field mappings
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ network: string }> }
) {
  const { network } = await params
  const { searchParams } = request.nextUrl
  const token = searchParams.get('token')

  if (!token || token !== process.env.POSTBACK_SECRET_TOKEN) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Network-specific field name mappings
  const fieldMaps: Record<string, { clickId: string; payout: string; txId: string }> = {
    revoffers: { clickId: 'clickid', payout: 'payout', txId: 'transaction_id' },
    shareasale: { clickId: 'clickId', payout: 'amount', txId: 'orderId' },
    cj: { clickId: 'CID', payout: 'AMOUNT', txId: 'OID' },
    // Add more networks as they're confirmed
  }

  const fieldMap = fieldMaps[network] ?? { clickId: 'clickid', payout: 'payout', txId: 'txid' }

  const clickId = searchParams.get(fieldMap.clickId)
  const payoutStr = searchParams.get(fieldMap.payout)
  const transactionId = searchParams.get(fieldMap.txId)

  if (!clickId) {
    return NextResponse.json({ error: `${fieldMap.clickId} param required` }, { status: 400 })
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

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ network: string }> }
) {
  return POST(request, context)
}
