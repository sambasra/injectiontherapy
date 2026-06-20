import { redirect } from 'next/navigation'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import DashboardCard from '@/components/admin/DashboardCard'
import ClicksTable from '@/components/admin/ClicksTable'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Clicks' }

export default async function ClicksPage({
  searchParams,
}: {
  searchParams: Promise<{ offer?: string; bot?: string; page?: string }>
}) {
  try {
    await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  const params = await searchParams
  const pageNum = parseInt(params.page ?? '1', 10)
  const limit = 50

  const where: Record<string, unknown> = {}
  if (params.offer) where.offer = { slug: params.offer }
  if (params.bot === 'false') where.isLikelyBot = false
  if (params.bot === 'true') where.isLikelyBot = true

  const [clicks, total] = await Promise.all([
    prisma.affiliateClick.findMany({
      where,
      take: limit,
      skip: (pageNum - 1) * limit,
      orderBy: { createdAt: 'desc' },
      include: { offer: { select: { name: true, slug: true } } },
    }),
    prisma.affiliateClick.count({ where }),
  ])

  const totalPages = Math.ceil(total / limit)

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Click Log</h1>

      <div className="flex flex-wrap gap-3 mb-4 text-sm">
        <a href="/admin/clicks" className="px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand-300 text-gray-600">
          All
        </a>
        <a href="/admin/clicks?bot=false" className="px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand-300 text-gray-600">
          Human only
        </a>
        <a href="/admin/clicks?bot=true" className="px-3 py-1.5 rounded-full border border-gray-200 hover:border-brand-300 text-gray-600">
          Bots only
        </a>
      </div>

      <DashboardCard title={`${total} total clicks (page ${pageNum} of ${totalPages})`}>
        <ClicksTable clicks={clicks} />

        {totalPages > 1 && (
          <div className="flex gap-2 mt-4 text-sm">
            {pageNum > 1 && (
              <a href={`/admin/clicks?page=${pageNum - 1}`} className="px-3 py-1.5 border border-gray-200 rounded-lg hover:border-brand-300">
                ← Prev
              </a>
            )}
            {pageNum < totalPages && (
              <a href={`/admin/clicks?page=${pageNum + 1}`} className="px-3 py-1.5 border border-gray-200 rounded-lg hover:border-brand-300">
                Next →
              </a>
            )}
          </div>
        )}
      </DashboardCard>
    </div>
  )
}
