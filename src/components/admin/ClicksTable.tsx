import { formatDate } from '@/lib/utils'

interface Click {
  id: string
  clickId: string
  createdAt: Date
  offer: { name: string; slug: string } | null
  pageUrl: string | null
  device: string | null
  utmSource: string | null
  isLikelyBot: boolean
  status: string
}

interface ClicksTableProps {
  clicks: Click[]
}

export default function ClicksTable({ clicks }: ClicksTableProps) {
  if (clicks.length === 0) {
    return <p className="text-sm text-gray-400 py-4">No clicks recorded yet.</p>
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Time</th>
            <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Offer</th>
            <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Source</th>
            <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Device</th>
            <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-400 uppercase tracking-wide">Page</th>
            <th className="text-left py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">Bot?</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {clicks.map((click) => (
            <tr key={click.id} className={click.isLikelyBot ? 'opacity-40' : ''}>
              <td className="py-2 pr-4 text-gray-500 whitespace-nowrap">{formatDate(click.createdAt)}</td>
              <td className="py-2 pr-4 font-medium text-gray-800">{click.offer?.slug ?? '—'}</td>
              <td className="py-2 pr-4 text-gray-500">{click.utmSource ?? 'direct'}</td>
              <td className="py-2 pr-4 text-gray-500 capitalize">{click.device ?? '—'}</td>
              <td className="py-2 pr-4 text-gray-400 text-xs truncate max-w-[200px]">{click.pageUrl ?? '—'}</td>
              <td className="py-2">
                {click.isLikelyBot && (
                  <span className="inline-block bg-red-100 text-red-600 text-xs px-1.5 py-0.5 rounded">bot</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
