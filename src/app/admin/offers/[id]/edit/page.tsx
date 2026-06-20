import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import OfferForm from '@/components/admin/OfferForm'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Edit Offer' }

export default async function EditOfferPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  const { id } = await params
  const offer = await prisma.offer.findUnique({ where: { id } })
  if (!offer) notFound()

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/offers" className="text-sm text-gray-400 hover:text-gray-600">← Offers</Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit Offer</h1>
      </div>
      <OfferForm
        siteId={offer.siteId}
        initial={{
          id: offer.id,
          name: offer.name,
          category: offer.category,
          brand: offer.brand ?? '',
          slug: offer.slug,
          destinationUrl: offer.destinationUrl,
          fallbackUrl: offer.fallbackUrl ?? '',
          payoutAmount: offer.payoutAmount?.toString() ?? '',
          status: offer.status,
          subIdParamName: offer.subIdParamName ?? 'subid',
          appendClickId: offer.appendClickId,
          notes: offer.notes ?? '',
        }}
      />
    </div>
  )
}
