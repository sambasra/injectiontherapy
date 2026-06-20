import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About InjectionTherapy.org',
  description:
    'About InjectionTherapy.org — an educational resource for injection therapy information, costs, and programs. Not a medical provider.',
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">About</span>
      </nav>

      <div className="max-w-[780px]">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          About InjectionTherapy.org
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            InjectionTherapy.org is an independent educational website focused on injection
            therapy options — including B12, GLP-1, NAD+, Sermorelin, Glutathione, Lipotropic,
            and Testosterone programs. We are not a healthcare provider, a clinic, or a pharmacy.
          </p>

          <h2 className="text-xl font-bold text-gray-900">What We Do</h2>
          <p>
            We research and publish educational content to help people understand what different
            injection therapies are, what the current evidence shows, what realistic costs look
            like, and what questions to ask a qualified provider before starting any program.
          </p>
          <p>
            Every factual claim on this site is linked to an authoritative source: NIH, FDA,
            Mayo Clinic, PubMed, or peer-reviewed research. We do not manufacture claims,
            promise outcomes, or publish content designed to inflate perceived benefits beyond
            what the evidence supports.
          </p>

          <h2 className="text-xl font-bold text-gray-900">How We Make Money</h2>
          <p>
            This site uses affiliate links. When we link to a telehealth program or clinic, and
            you choose to purchase through that link, we may earn a commission at no additional
            cost to you. These relationships do not influence which programs we cover or how we
            describe them — we cover the full landscape, not just programs we earn from.
          </p>
          <p>
            Affiliate disclosures appear before the first affiliate link or call-to-action on
            every page where they appear.
          </p>

          <h2 className="text-xl font-bold text-gray-900">Medical Disclaimer</h2>
          <p>
            This website is for educational purposes only and does not provide medical advice.
            Nothing on this site constitutes a diagnosis, treatment plan, or recommendation for
            a specific individual. Always consult a qualified healthcare provider before starting
            any injection therapy or changing your treatment plan.
          </p>

          <h2 className="text-xl font-bold text-gray-900">Content Standards</h2>
          <p>
            We aim to be an example of how a medical-adjacent affiliate site should operate:
            balanced, cited, honest about what the evidence does and does not show, and compliant
            with FTC disclosure requirements. If you find an error or have a question about our
            sourcing, use the{' '}
            <Link href="/contact/" className="text-brand-600 underline hover:text-brand-800">
              contact page
            </Link>
            .
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-4">
            <p className="text-sm text-gray-600">
              <strong>Medical Disclaimer:</strong> This website is for educational purposes only
              and does not provide medical advice. Always consult a qualified healthcare provider
              before starting any treatment.{' '}
              <Link href="/affiliate-disclosure/" className="underline text-brand-600">Affiliate Disclosure</Link>
              {' | '}
              <Link href="/medical-disclaimer/" className="underline text-brand-600">Full Medical Disclaimer</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
