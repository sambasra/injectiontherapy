import { formatDate } from '@/lib/utils'

interface ReviewerBadgeProps {
  name: string
  credentials?: string | null
  licenseState?: string | null
  reviewedDate?: Date | string | null
}

export default function ReviewerBadge({ name, credentials, licenseState, reviewedDate }: ReviewerBadgeProps) {
  return (
    <div className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg px-4 py-3 text-sm">
      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <div>
        <p className="font-medium text-green-800">
          Medically reviewed by {name}
          {credentials && <span className="text-green-700">, {credentials}</span>}
          {licenseState && <span className="text-green-600"> ({licenseState})</span>}
        </p>
        {reviewedDate && (
          <p className="text-xs text-green-600 mt-0.5">Last reviewed {formatDate(reviewedDate)}</p>
        )}
      </div>
    </div>
  )
}
