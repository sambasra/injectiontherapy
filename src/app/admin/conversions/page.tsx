import { redirect } from 'next/navigation'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import DashboardCard from '@/components/admin/DashboardCard'
import { formatCurrency, formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Conversions' }

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  approved: 'bg-green-100 text-green-700',
  rejected: 'bg-red-100 text-red-600',
  paid: 'bg-blue-100 text-blue-700',
}

export default async function ConversionsPage() {
  try {
    await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  const conversions = await prisma.conversion.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100,
    include: {
      offer: { select: { name: true, slug: true } },
    },
  })

  const totals = await prisma.conversion.groupBy({
    by: ['status'],
    _sum: { payoutAmount: true },
    _count: { id: true },
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Conversions</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {['pending', 'approved', 'rejected', 'paid'].map((status) => {
          const stat = totals.find((t) => t.status === status)
          return (
            <div key={status} className={`border rounded-[10px] p-4 ${statusColors[status]} bg-opacity-30`}>
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70 mb-1 capitalize">{status}</p>
              <p className="text-2xl font-bold">{stat?._count.id ?? 0}</p>
              <p className="text-xs opacity-60">{formatCurrency(stat?._sum.payoutAmount ?? 0)}</p>
            </div>
          )
        })}
      </div>

      <DashboardCard title="Conversion History">
        {conversions.length === 0 ? (
          <p className="text-sm text-gray-400 py-4">No conversions yet. Configure your postback endpoint to receive them.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-400 uppercase">Date</th>
                  <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-400 uppercase">Offer</th>
                  <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-400 uppercase">Amount</th>
                  <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-400 uppercase">Network</th>
                  <th className="text-left py-2 text-xs font-semibold text-gray-400 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {conversions.map((conv) => (
                  <tr key={conv.id}>
                    <td className="py-2 pr-4 text-gray-500 whitespace-nowrap">{formatDate(conv.createdAt)}</td>
                    <td className="py-2 pr-4 font-medium text-gray-800">{conv.offer?.slug ?? '—'}</td>
                    <td className="py-2 pr-4 text-gray-700">{conv.payoutAmount ? formatCurrency(conv.payoutAmount) : '—'}</td>
                    <td className="py-2 pr-4 text-gray-500">{conv.network ?? '—'}</td>
                    <td className="py-2">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[conv.status] ?? ''}`}>
                        {conv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </DashboardCard>
    </div>
  )
}
