import Link from 'next/link'

interface DisclaimerBoxProps {
  type?: 'affiliate' | 'medical' | 'both'
  className?: string
}

export default function DisclaimerBox({ type = 'both', className = '' }: DisclaimerBoxProps) {
  return (
    <div className={`bg-white border border-[#E7EEF2] border-l-4 border-l-brand-500 rounded-lg px-5 py-4 text-sm text-[#172026] leading-relaxed ${className}`}>
      {(type === 'affiliate' || type === 'both') && (
        <p className="mb-1">
          <strong className="font-medium">Affiliate Disclosure:</strong> Some links on this page are affiliate links. If you click and
          purchase through them, we may earn a commission at no additional cost to you.{' '}
          <Link href="/affiliate-disclosure/" className="text-brand-500 underline hover:text-brand-600">
            Learn more
          </Link>
          .
        </p>
      )}
      {(type === 'medical' || type === 'both') && (
        <p>
          <strong className="font-medium">Medical Disclaimer:</strong> This content is for educational purposes only and does not
          constitute medical advice. Consult a qualified healthcare provider before beginning any treatment.{' '}
          <Link href="/medical-disclaimer/" className="text-brand-500 underline hover:text-brand-600">
            Full disclaimer
          </Link>
          .
        </p>
      )}
    </div>
  )
}
