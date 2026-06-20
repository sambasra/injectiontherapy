import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | InjectionTherapy.org',
  description: 'Terms of use for InjectionTherapy.org.',
  alternates: { canonical: '/terms/' },
}

export default function TermsPage() {
  return (
    <div className="max-w-[780px] mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">← Home</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Use</h1>
      <div className="space-y-5 text-gray-700 leading-relaxed text-sm">
        <p><strong>Last updated: June 2025</strong></p>
        <p>
          By using InjectionTherapy.org, you agree to these terms. If you do not agree,
          do not use this site.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Educational Use Only</h2>
        <p>
          All content is provided for educational purposes only. This site does not provide
          medical advice. See our <Link href="/medical-disclaimer/" className="text-brand-600 underline">Medical Disclaimer</Link>.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">No Warranties</h2>
        <p>
          We make no warranties, express or implied, regarding the accuracy, completeness, or
          fitness for a particular purpose of any information on this site. Use at your own risk.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Affiliate Links</h2>
        <p>
          Some links are affiliate links. See our <Link href="/affiliate-disclosure/" className="text-brand-600 underline">Affiliate Disclosure</Link>.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Intellectual Property</h2>
        <p>
          Content on this site is owned by InjectionTherapy.org unless otherwise noted.
          Do not reproduce without permission.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Changes</h2>
        <p>
          We may update these terms at any time. Continued use of the site constitutes
          acceptance of the updated terms.
        </p>
      </div>
    </div>
  )
}
