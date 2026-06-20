import type { Metadata } from 'next'
import Link from 'next/link'
import DisclaimerBox from '@/components/public/DisclaimerBox'
import CTASection from '@/components/public/CTASection'
import QuickFactsBox from '@/components/public/QuickFactsBox'
import SourceCitation from '@/components/public/SourceCitation'

export const metadata: Metadata = {
  title: 'Sermorelin Injections: How It Works, Cost & Programs',
  description:
    'Sermorelin injection therapy for growth hormone support: how it works, what to expect, typical costs, and how to access online programs.',
  alternates: { canonical: '/sermorelin-injections/' },
}

const sources = [
  { name: 'NIH — Sermorelin Acetate (MedlinePlus)', url: 'https://medlineplus.gov/druginfo/meds/a604029.html' },
  { name: 'FDA — Drug Database: Sermorelin', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm' },
]

const facts = [
  { label: 'Drug class', value: 'GHRH analog (growth hormone-releasing hormone)' },
  { label: 'Delivery', value: 'Subcutaneous injection' },
  { label: 'Prescription required', value: 'Yes' },
  { label: 'Primary use', value: 'Growth hormone deficiency (diagnosed), anti-aging programs' },
  { label: 'Typical cost', value: '$200–$500/month (telehealth programs)' },
  { label: 'Monitoring', value: 'Lab work required before and during treatment' },
]

export default function SermorelinPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/injection-types/" className="hover:text-gray-600">Injection Types</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Sermorelin Injections</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sermorelin Injections: What They Are and What to Expect
          </h1>
          <p className="text-lg text-gray-500 mb-2">Last updated: June 2025</p>

          <DisclaimerBox type="both" className="my-6" />

          <div className="prose-content space-y-6 text-gray-700 leading-relaxed">
            <p>
              Sermorelin is a synthetic peptide analog of growth hormone-releasing hormone (GHRH).
              Unlike direct growth hormone injections, sermorelin stimulates the pituitary gland
              to produce its own growth hormone — a more physiologic approach used in both
              diagnosed GH deficiency and anti-aging programs.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">How Sermorelin Works</h2>
            <p>
              Sermorelin binds to GHRH receptors in the pituitary gland, stimulating the pulsatile
              release of growth hormone. This mimics the body&apos;s natural GH release pattern more
              closely than exogenous HGH injections.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">Who Is a Candidate?</h2>
            <p>
              Sermorelin is FDA-approved for diagnosed growth hormone deficiency in children.
              In adults, its use is off-label and typically involves hormone optimization programs.
              A provider evaluation and lab work are required before any prescription is issued.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">Sermorelin Cost</h2>
            <p>
              Telehealth sermorelin programs typically range from $200–$500/month, depending on
              protocol and provider. In-clinic programs may be higher. Lab work adds to initial costs.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">Important Considerations</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Requires lab work before and during treatment</li>
              <li>Results develop over weeks to months, not days</li>
              <li>Must be obtained through a licensed prescriber — not available without a prescription</li>
              <li>Adult off-label use means limited long-term clinical trial data</li>
            </ul>
          </div>

          <div className="mt-10">
            <CTASection
              offerSlug="sermorelin"
              heading="Find a Sermorelin Program"
              subheading="Compare programs that include provider evaluation, lab work, and ongoing monitoring."
              buttonLabel="View Sermorelin Programs"
            />
          </div>

          <SourceCitation sources={sources} />
        </div>

        <aside className="mt-8 lg:mt-0 space-y-6">
          <QuickFactsBox facts={facts} title="Sermorelin Quick Facts" />
          <div className="bg-gray-50 border border-gray-200 rounded-[10px] p-5">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Related Injection Types</h3>
            <ul className="space-y-2">
              <li><Link href="/testosterone-injections/" className="text-sm text-brand-600 hover:underline">Testosterone Injections</Link></li>
              <li><Link href="/nad-injections/" className="text-sm text-brand-600 hover:underline">NAD+ Injections</Link></li>
              <li><Link href="/glp1-injections/" className="text-sm text-brand-600 hover:underline">GLP-1 Injections</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
