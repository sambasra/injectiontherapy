import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | InjectionTherapy.org',
  description: 'How InjectionTherapy.org uses affiliate links and earns commissions.',
  alternates: { canonical: '/affiliate-disclosure/' },
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-[780px] mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">← Home</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Affiliate Disclosure</h1>
      <div className="space-y-5 text-gray-700 leading-relaxed text-sm">
        <p>
          <strong>Last updated: June 2025</strong>
        </p>
        <p>
          InjectionTherapy.org participates in affiliate marketing programs. This means some links
          on this site — specifically, links to telehealth programs, wellness services, and
          injection therapy providers — are affiliate links.
        </p>
        <p>
          When you click an affiliate link and make a purchase, we may receive a commission from
          the company at no additional cost to you. The commission does not affect the price
          you pay.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">How We Handle Affiliate Relationships</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Affiliate links are marked with <code className="bg-gray-100 px-1 rounded">rel=&quot;sponsored nofollow&quot;</code> in our HTML.</li>
          <li>We disclose affiliate relationships on every page before the first affiliate call-to-action, not just in the footer.</li>
          <li>Our editorial content is not influenced by which companies pay commissions. We cover programs and topics based on reader relevance and research.</li>
          <li>We do not promote programs we would not recommend to a family member in the same situation.</li>
        </ul>
        <h2 className="text-lg font-bold text-gray-900 mt-6">FTC Compliance</h2>
        <p>
          This disclosure is made in accordance with the Federal Trade Commission&apos;s guidelines
          on endorsements and testimonials in advertising (16 CFR Part 255). If you have
          questions, <Link href="/contact/" className="text-brand-600 underline">contact us</Link>.
        </p>
      </div>
    </div>
  )
}
