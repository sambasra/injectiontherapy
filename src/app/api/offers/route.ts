import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'
import { z } from 'zod'

const OfferSchema = z.object({
  siteId: z.string(),
  name: z.string().min(1),
  category: z.string().min(1),
  brand: z.string().optional(),
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with dashes'),
  destinationUrl: z.string().url(),
  fallbackUrl: z.string().optional(),
  payoutAmount: z.number().nullable().optional(),
  status: z.enum(['active', 'paused', 'placeholder', 'archived']).default('active'),
  subIdParamName: z.string().optional(),
  appendClickId: z.boolean().default(true),
  notes: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const parsed = OfferSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' }, { status: 400 })
  }

  try {
    const offer = await prisma.offer.create({ data: parsed.data })
    return NextResponse.json(offer, { status: 201 })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error'
    if (msg.includes('Unique constraint')) {
      return NextResponse.json({ error: 'An offer with that slug already exists.' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Failed to create offer.' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const offers = await prisma.offer.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(offers)
}
