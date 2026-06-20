import Link from 'next/link'

interface DisclaimerBoxProps {
  type?: 'affiliate' | 'medical' | 'both'
  className?: string
}

export default function DisclaimerBox({ type = 'both', className = '' }: DisclaimerBoxProps) {
  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 text-sm text-amber-900 leading-relaxed ${className}`}>
      {(type === 'affiliate' || type === 'both') && (
        <p className="mb-1">
          <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. If you click and
          purchase through them, we may earn a commission at no additional cost to you.{' '}
          <Link href="/affiliate-disclosure/" className="underline hover:text-amber-700">
            Learn more
          </Link>
          .
        </p>
      )}
      {(type === 'medical' || type === 'both') && (
        <p>
          <strong>Medical Disclaimer:</strong> This content is for educational purposes only and does not
          constitute medical advice. Consult a qualified healthcare provider before beginning any treatment.{' '}
          <Link href="/medical-disclaimer/" className="underline hover:text-amber-700">
            Full disclaimer
          </Link>
          .
        </p>
      )}
    </div>
  )
}
