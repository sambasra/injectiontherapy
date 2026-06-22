import type { Metadata } from 'next'
import Link from 'next/link'
import DisclaimerBox from '@/components/public/DisclaimerBox'
import CTASection from '@/components/public/CTASection'
import QuickFactsBox from '@/components/public/QuickFactsBox'
import SourceCitation from '@/components/public/SourceCitation'

export const metadata: Metadata = {
  title: 'Lipotropic MIC Injections: What They Are, Cost & Programs',
  description:
    'Lipotropic injection therapy: what MIC shots contain, what the evidence says, typical costs, and where to find programs online.',
  alternates: { canonical: '/lipotropic-injections/' },
}

const sources = [
  { name: 'NIH — Methionine, Inositol, Choline Overview', url: 'https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/' },
  { name: 'PubMed — Lipotropic Compounds and Liver Function', url: 'https://pubmed.ncbi.nlm.nih.gov/29559050/' },
]

const facts = [
  { label: 'Common formulation', value: 'Methionine, Inositol, Choline (MIC) ± B12, B-complex' },
  { label: 'Delivery', value: 'Intramuscular injection' },
  { label: 'Prescription required', value: 'Yes' },
  { label: 'Primary use', value: 'Fat metabolism support, paired with diet programs' },
  { label: 'Evidence level', value: 'Limited for standalone weight loss; used adjunctively' },
  { label: 'Typical cost', value: '$15–$50/injection; program pricing varies' },
]

export default function LipotropicPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/injection-types/" className="hover:text-gray-600">Injection Types</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Lipotropic Injections</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-normal text-[#172026] mb-4">
            Lipotropic (MIC) Injections: What They Contain and What the Evidence Shows
          </h1>
          <p className="text-lg text-gray-500 mb-2">Last updated: June 2025</p>

          <DisclaimerBox type="both" className="my-6" />

          <div className="prose-content space-y-6 text-gray-700 leading-relaxed">
            <p>
              Lipotropic injections — commonly called MIC shots — contain a combination of compounds
              involved in fat metabolism: methionine, inositol, and choline. They are often bundled
              with B12 or B-complex vitamins and marketed as a supplement to weight loss programs.
            </p>

            <h2 className="text-xl font-medium text-[#172026] pt-2">What&apos;s in a Lipotropic Injection?</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li><strong>Methionine:</strong> An essential amino acid involved in fat processing and detoxification</li>
              <li><strong>Inositol:</strong> A type of sugar involved in fat transport and insulin signaling</li>
              <li><strong>Choline:</strong> A nutrient essential for liver function and fat metabolism</li>
              <li><strong>B12 (often added):</strong> For energy support</li>
            </ul>

            <h2 className="text-xl font-medium text-[#172026] pt-2">What the Evidence Shows</h2>
            <p>
              The individual components have established biological roles in fat metabolism.
              However, clinical evidence that lipotropic injections as a combined formulation
              produce meaningful standalone weight loss in humans is limited. They are most
              commonly used as adjuncts to calorie-controlled diet programs, not as standalone
              weight loss interventions.
            </p>

            <h2 className="text-xl font-medium text-[#172026] pt-2">Cost</h2>
            <p>
              Lipotropic injections are typically one of the more affordable injection therapies:
              $15–$50 per injection in medical weight loss clinics. Online programs offering
              at-home MIC shots with provider oversight vary but are generally in this range
              or slightly higher when provider fees are included.
            </p>
          </div>

          <div className="mt-10">
            <CTASection
              offerSlug="lipotropic"
              heading="Find a Lipotropic Injection Program"
              subheading="Compare MIC shot programs with provider oversight and clear pricing."
              buttonLabel="View Lipotropic Programs"
            />
          </div>

          <SourceCitation sources={sources} />
        </div>

        <aside className="mt-8 lg:mt-0 space-y-6">
          <QuickFactsBox facts={facts} title="Lipotropic Quick Facts" />
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Related Injection Types</h3>
            <ul className="space-y-2">
              <li><Link href="/b12-injections/" className="text-sm text-brand-500 hover:underline">B12 Injections</Link></li>
              <li><Link href="/glp1-injections/" className="text-sm text-brand-500 hover:underline">GLP-1 Injections</Link></li>
              <li><Link href="/glutathione-injections/" className="text-sm text-brand-500 hover:underline">Glutathione Injections</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
