import { redirect } from 'next/navigation'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Sites' }

export default async function SitesPage() {
  try {
    await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  const sites = await prisma.site.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      _count: { select: { offers: true, clicks: true, pages: true } },
    },
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Sites</h1>

      <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="border-b border-gray-100 bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Name</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Domain</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Niche</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Offers</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Clicks</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Pages</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Status</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {sites.map((site) => (
              <tr key={site.id}>
                <td className="py-3 px-4 font-medium text-gray-900">{site.name}</td>
                <td className="py-3 px-4 text-gray-500 font-mono text-xs">{site.domain}</td>
                <td className="py-3 px-4 text-gray-500">{site.niche ?? '—'}</td>
                <td className="py-3 px-4 text-gray-500">{site._count.offers}</td>
                <td className="py-3 px-4 text-gray-500">{site._count.clicks}</td>
                <td className="py-3 px-4 text-gray-500">{site._count.pages}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${site.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {site.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-xs text-gray-400">{formatDate(site.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
