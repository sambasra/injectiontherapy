import { redirect } from 'next/navigation'
import Link from 'next/link'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import OfferForm from '@/components/admin/OfferForm'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'New Offer' }

export default async function NewOfferPage() {
  try {
    await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  const site = await prisma.site.findFirst()
  if (!site) redirect('/admin/sites')

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/offers" className="text-sm text-gray-400 hover:text-gray-600">← Offers</Link>
        <h1 className="text-2xl font-bold text-gray-900">New Offer</h1>
      </div>
      <OfferForm siteId={site.id} />
    </div>
  )
}
