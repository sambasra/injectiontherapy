import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | InjectionTherapy.org',
  description: 'Privacy policy for InjectionTherapy.org.',
  alternates: { canonical: '/privacy/' },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-[780px] mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">← Home</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="space-y-5 text-gray-700 leading-relaxed text-sm">
        <p><strong>Last updated: June 2025</strong></p>
        <p>
          InjectionTherapy.org takes user privacy seriously. This policy explains what data
          we collect, how we use it, and your rights.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Data We Collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Affiliate click data:</strong> When you click a link in our /go/ redirect system, we log the time, referring page, browser type, and a hashed (anonymized) IP address. We do not store raw IP addresses.</li>
          <li><strong>Contact form:</strong> If you submit a contact form, we receive your name, email, and message. We do not store health information.</li>
          <li><strong>Analytics:</strong> We may use privacy-respecting analytics to understand page popularity. No cross-site tracking.</li>
        </ul>
        <h2 className="text-lg font-bold text-gray-900 mt-6">What We Do Not Collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Personal health information or medical histories</li>
          <li>Payment or financial information</li>
          <li>Raw IP addresses (we hash and truncate before any storage)</li>
        </ul>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Third Parties</h2>
        <p>
          Affiliate programs we link to have their own privacy policies. When you click through
          to a third-party provider, that provider&apos;s privacy policy governs your interaction
          with them.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Contact</h2>
        <p>
          Privacy questions: <Link href="/contact/" className="text-brand-600 underline">contact us</Link>.
        </p>
      </div>
    </div>
  )
}
