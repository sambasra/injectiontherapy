import { redirect } from 'next/navigation'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Pages' }

const statusColors: Record<string, string> = {
  published: 'bg-green-100 text-green-700',
  draft: 'bg-gray-100 text-gray-600',
  needs_update: 'bg-yellow-100 text-yellow-700',
  archived: 'bg-red-100 text-red-500',
}

export default async function PagesPage() {
  try {
    await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  const pages = await prisma.page.findMany({
    orderBy: { updatedAt: 'desc' },
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Pages</h1>

      <div className="bg-white border border-gray-200 rounded-[10px] overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="border-b border-gray-100 bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Title</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">URL</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Type</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Status</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Sources</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Reviewer</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {pages.map((page) => {
              const hasSources = Array.isArray(page.citedSources) && (page.citedSources as unknown[]).length > 0
              return (
                <tr key={page.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{page.title}</td>
                  <td className="py-3 px-4 text-gray-500 text-xs font-mono">{page.url}</td>
                  <td className="py-3 px-4 text-gray-500 capitalize text-xs">{page.pageType.replace('_', ' ')}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[page.status] ?? ''}`}>
                      {page.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {hasSources ? (
                      <span className="inline-block bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded">yes</span>
                    ) : (
                      <span className="inline-block bg-red-50 text-red-400 text-xs px-1.5 py-0.5 rounded">none</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-xs text-gray-500">
                    {page.medicallyReviewedBy ? (
                      <span className="text-green-700">{page.medicallyReviewedBy}</span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-xs text-gray-400">{formatDate(page.updatedAt)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
