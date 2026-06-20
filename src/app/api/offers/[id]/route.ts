import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'
import { z } from 'zod'

const UpdateOfferSchema = z.object({
  name: z.string().min(1).optional(),
  category: z.string().optional(),
  brand: z.string().optional(),
  destinationUrl: z.string().url().optional(),
  fallbackUrl: z.string().optional(),
  payoutAmount: z.number().nullable().optional(),
  status: z.enum(['active', 'paused', 'placeholder', 'archived']).optional(),
  subIdParamName: z.string().optional(),
  appendClickId: z.boolean().optional(),
  notes: z.string().optional(),
})

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json()
  const parsed = UpdateOfferSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' }, { status: 400 })
  }

  try {
    const offer = await prisma.offer.update({ where: { id }, data: parsed.data })
    return NextResponse.json(offer)
  } catch {
    return NextResponse.json({ error: 'Failed to update offer.' }, { status: 500 })
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  await prisma.offer.update({ where: { id }, data: { status: 'archived' } })
  return NextResponse.json({ ok: true })
}
