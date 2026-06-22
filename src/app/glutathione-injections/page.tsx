import type { Metadata } from 'next'
import Link from 'next/link'
import DisclaimerBox from '@/components/public/DisclaimerBox'
import CTASection from '@/components/public/CTASection'
import QuickFactsBox from '@/components/public/QuickFactsBox'
import SourceCitation from '@/components/public/SourceCitation'

export const metadata: Metadata = {
  title: 'Glutathione Injections: Benefits, Cost & Programs',
  description:
    'Glutathione injection therapy for antioxidant support: what it is, typical costs, and how to find a provider or online program.',
  alternates: { canonical: '/glutathione-injections/' },
}

const sources = [
  { name: 'NIH — Glutathione: Overview (MedlinePlus)', url: 'https://medlineplus.gov/druginfo/natural/717.html' },
  { name: 'PubMed — Glutathione Supplementation and Health', url: 'https://pubmed.ncbi.nlm.nih.gov/31145205/' },
]

const facts = [
  { label: 'Compound', value: 'Reduced glutathione (GSH)' },
  { label: 'Delivery', value: 'IV infusion or intramuscular/subcutaneous injection' },
  { label: 'Prescription required', value: 'Yes (injectable form)' },
  { label: 'Primary use', value: 'Antioxidant support, detox programs, skin health' },
  { label: 'Evidence level', value: 'Limited clinical trials for wellness use' },
  { label: 'Typical cost', value: '$75–$200/session; programs vary' },
]

export default function GlutathionePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/injection-types/" className="hover:text-gray-600">Injection Types</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Glutathione Injections</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-normal text-[#172026] mb-4">
            Glutathione Injections: What the Evidence Shows
          </h1>
          <p className="text-lg text-gray-500 mb-2">Last updated: June 2025</p>

          <DisclaimerBox type="both" className="my-6" />

          <div className="prose-content space-y-6 text-gray-700 leading-relaxed">
            <p>
              Glutathione is often called the body&apos;s &ldquo;master antioxidant.&rdquo; It is a tripeptide
              (glycine, cysteine, glutamic acid) produced naturally in the liver and found in
              virtually every cell. It plays a central role in neutralizing free radicals and
              supporting detoxification.
            </p>

            <h2 className="text-xl font-medium text-[#172026] pt-2">Why Injections Instead of Oral?</h2>
            <p>
              Oral glutathione is largely broken down in the digestive tract before reaching the
              bloodstream. Injection delivery bypasses this, achieving higher plasma levels.
              However, whether those higher plasma levels translate to meaningful clinical benefits
              in healthy individuals is still under study.
            </p>

            <h2 className="text-xl font-medium text-[#172026] pt-2">What the Evidence Shows</h2>
            <p>
              Evidence is strongest for glutathione in medical contexts (certain poisonings, some
              chemotherapy protocols). For wellness applications — energy, skin brightening, general
              detox — the clinical evidence is limited. Most wellness use is driven by practitioner
              experience and patient-reported outcomes rather than large clinical trials.
            </p>

            <h2 className="text-xl font-medium text-[#172026] pt-2">Cost</h2>
            <p>
              IV glutathione infusions at wellness clinics typically cost $75–$200 per session.
              At-home injection programs (subcutaneous or IM) through telehealth are generally
              lower cost but require a provider evaluation.
            </p>
          </div>

          <div className="mt-10">
            <CTASection
              offerSlug="glutathione"
              heading="Find a Glutathione Program"
              subheading="Explore programs with provider oversight and prescription management."
              buttonLabel="View Glutathione Programs"
            />
          </div>

          <SourceCitation sources={sources} />
        </div>

        <aside className="mt-8 lg:mt-0 space-y-6">
          <QuickFactsBox facts={facts} title="Glutathione Quick Facts" />
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Related Injection Types</h3>
            <ul className="space-y-2">
              <li><Link href="/b12-injections/" className="text-sm text-brand-500 hover:underline">B12 Injections</Link></li>
              <li><Link href="/nad-injections/" className="text-sm text-brand-500 hover:underline">NAD+ Injections</Link></li>
              <li><Link href="/lipotropic-injections/" className="text-sm text-brand-500 hover:underline">Lipotropic Injections</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
