import { redirect } from 'next/navigation'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Campaigns' }

export default async function CampaignsPage() {
  try {
    await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  const campaigns = await prisma.campaign.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Campaigns</h1>

      {campaigns.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-[10px] p-10 text-center text-gray-400">
          <p className="text-sm">No campaigns yet. Campaigns track UTM-tagged traffic sources.</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Name</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Source</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Medium</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Campaign</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {campaigns.map((c) => (
                <tr key={c.id}>
                  <td className="py-3 px-4 font-medium text-gray-900">{c.name}</td>
                  <td className="py-3 px-4 text-gray-500">{c.source ?? '—'}</td>
                  <td className="py-3 px-4 text-gray-500">{c.medium ?? '—'}</td>
                  <td className="py-3 px-4 text-gray-500">{c.campaign ?? '—'}</td>
                  <td className="py-3 px-4 text-xs text-gray-400">{formatDate(c.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
