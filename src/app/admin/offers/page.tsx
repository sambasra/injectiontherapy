import { redirect } from 'next/navigation'
import Link from 'next/link'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Offers' }

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  paused: 'bg-yellow-100 text-yellow-700',
  placeholder: 'bg-gray-100 text-gray-500',
  archived: 'bg-red-100 text-red-500',
}

export default async function OffersPage() {
  try {
    await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  const offers = await prisma.offer.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      _count: { select: { clicks: true } },
    },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium text-[#172026]">Offers</h1>
        <Link
          href="/admin/offers/new"
          className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          + New Offer
        </Link>
      </div>

      <div className="bg-white border border-[#E7EEF2] rounded-lg overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="border-b border-[#E7EEF2] bg-[#F7FAFC]">
            <tr>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Name</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Slug</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Category</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Status</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Clicks</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Payout</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E7EEF2]">
            {offers.map((offer) => (
              <tr key={offer.id} className="hover:bg-[#F7FAFC]">
                <td className="py-3 px-4 font-medium text-gray-900">{offer.name}</td>
                <td className="py-3 px-4 text-gray-500 font-mono text-xs">/go/{offer.slug}</td>
                <td className="py-3 px-4 text-gray-500 capitalize">{offer.category}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[offer.status] ?? 'bg-gray-100 text-gray-500'}`}>
                    {offer.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">{offer._count.clicks}</td>
                <td className="py-3 px-4 text-gray-500">
                  {offer.payoutAmount ? `$${offer.payoutAmount}` : '—'}
                </td>
                <td className="py-3 px-4">
                  <Link
                    href={`/admin/offers/${offer.id}/edit`}
                    className="text-brand-500 hover:underline text-xs font-medium"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
            {offers.length === 0 && (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-400 text-sm">
                  No offers yet.{' '}
                  <Link href="/admin/offers/new" className="text-brand-500 hover:underline">
                    Create your first offer
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
