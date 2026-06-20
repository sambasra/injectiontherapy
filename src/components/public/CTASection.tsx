import Link from 'next/link'

interface CTASectionProps {
  offerSlug: string
  heading?: string
  subheading?: string
  buttonLabel?: string
}

export default function CTASection({
  offerSlug,
  heading = 'Ready to Explore Your Options?',
  subheading = 'Compare programs and find a provider that fits your needs.',
  buttonLabel = 'View Programs',
}: CTASectionProps) {
  return (
    <div className="bg-brand-50 border border-brand-100 rounded-[10px] px-6 py-10 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{heading}</h2>
      <p className="text-gray-600 mb-6 max-w-prose mx-auto">{subheading}</p>
      <Link
        href={`/go/${offerSlug}`}
        className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        rel="sponsored nofollow"
      >
        {buttonLabel}
      </Link>
      <p className="mt-4 text-xs text-gray-400">
        Affiliate link — we may earn a commission.{' '}
        <Link href="/affiliate-disclosure/" className="underline">
          Disclosure
        </Link>
      </p>
    </div>
  )
}
