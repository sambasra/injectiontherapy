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
    <div className="bg-white border border-[#E7EEF2] rounded-lg px-6 py-10 text-center">
      <h2 className="text-2xl font-semibold text-[#172026] mb-3">{heading}</h2>
      <p className="text-gray-500 mb-6 max-w-prose mx-auto">{subheading}</p>
      <Link
        href={`/go/${offerSlug}`}
        className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
        rel="sponsored nofollow"
      >
        {buttonLabel}
      </Link>
      <p className="mt-4 text-xs text-gray-400">
        Affiliate link — we may earn a commission.{' '}
        <Link href="/affiliate-disclosure/" className="underline hover:text-gray-600">
          Disclosure
        </Link>
      </p>
    </div>
  )
}
