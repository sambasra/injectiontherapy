import type { Metadata } from 'next'
import Link from 'next/link'
import DisclaimerBox from '@/components/public/DisclaimerBox'
import CTASection from '@/components/public/CTASection'
import QuickFactsBox from '@/components/public/QuickFactsBox'
import FAQSection from '@/components/public/FAQSection'
import SourceCitation from '@/components/public/SourceCitation'

export const metadata: Metadata = {
  title: 'NAD+ Injections: Benefits, Cost & Online Programs',
  description:
    'NAD+ injection therapy for energy, recovery, and cellular health: what the research says, typical costs, and how to access programs online.',
  alternates: { canonical: '/nad-injections/' },
}

const sources = [
  { name: 'NIH — NAD+ in Metabolism, Aging, and Disease', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5789847/' },
  { name: 'NIH — Nicotinamide Riboside and NAD+ Supplementation', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6366361/' },
  { name: 'PubMed — NAD+ Precursors and Human Health', url: 'https://pubmed.ncbi.nlm.nih.gov/28825718/' },
]

const faqs = [
  {
    question: 'What is NAD+ and why inject it?',
    answer: 'NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every cell of the body, essential for energy production and DNA repair. Levels decline with age. Injection delivery is intended to raise NAD+ levels more rapidly than oral precursors, though research on injection-specific efficacy is still emerging.',
  },
  {
    question: 'What does the research say about NAD+ injections?',
    answer: 'Animal studies show compelling links between NAD+ and aging pathways. Human clinical trials on NAD+ precursors (NMN, NR) show some promise for metabolic and cardiovascular markers. Direct injection studies in healthy humans are limited. Most current evidence supports cautious optimism, not certainty.',
  },
  {
    question: 'How much do NAD+ injections cost?',
    answer: 'IV NAD+ infusions at clinics typically run $300–$1,000+ per session. Subcutaneous NAD+ injection programs (at-home, prescribed by a provider) are generally $100–$300/month. Costs vary significantly by provider and protocol.',
  },
  {
    question: 'Is NAD+ injection therapy safe?',
    answer: 'NAD+ is a naturally occurring compound in the body. Side effects are generally mild (flushing, nausea during IV infusion). Serious adverse events are rare in reported clinical use. However, long-term human safety data for high-dose injection protocols is limited. Discuss the risk/benefit with a qualified provider.',
  },
  {
    question: 'Do I need a prescription for NAD+ injections?',
    answer: 'Yes. Injectable NAD+ requires a prescription from a licensed provider. Oral NAD+ precursors (NMN, NR) are available as supplements without a prescription, though the bioavailability and equivalence to injections is not established.',
  },
]

const facts = [
  { label: 'Active compound', value: 'Nicotinamide adenine dinucleotide (NAD+)' },
  { label: 'Delivery method', value: 'IV infusion or subcutaneous injection' },
  { label: 'Evidence level', value: 'Promising animal data; early human trials' },
  { label: 'Prescription required', value: 'Yes (injectable form)' },
  { label: 'IV clinic cost', value: '$300–$1,000+/session' },
  { label: 'At-home program cost', value: '$100–$300/month' },
  { label: 'Primary use cases', value: 'Energy, recovery, anti-aging, cognitive support' },
]

export default function NADInjectionsPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/injection-types/" className="hover:text-gray-600">Injection Types</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">NAD+ Injections</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            NAD+ Injections: What the Research Shows, What It Costs, and What to Expect
          </h1>
          <p className="text-lg text-gray-500 mb-2">Last updated: June 2025</p>

          <DisclaimerBox type="both" className="my-6" />

          <div className="prose-content space-y-6 text-gray-700 leading-relaxed">
            <p>
              NAD+ therapy has expanded rapidly from IV infusion clinics into at-home injection
              programs. The science is genuinely interesting — but the marketing often runs ahead
              of the evidence. This page tries to close that gap.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">What Is NAD+ and Why Does It Matter?</h2>
            <p>
              NAD+ (nicotinamide adenine dinucleotide) is a coenzyme present in every cell of the
              body. It plays a central role in converting food into cellular energy (ATP production),
              DNA repair, and regulating cellular stress responses. Crucially, NAD+ levels decline
              significantly with age.
            </p>
            <p>
              According to research published in the{' '}
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5789847/" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">
                NIH National Library of Medicine
              </a>
              , declining NAD+ levels are associated with several age-related biological changes,
              including reduced mitochondrial function and impaired DNA repair capacity. This has
              generated interest in NAD+ supplementation and injection protocols as a potential
              intervention.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">What the Evidence Currently Shows</h2>
            <p>
              It is important to distinguish between what the research demonstrates versus what is
              being marketed:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li><strong>Animal studies:</strong> Strongly support NAD+ supplementation for metabolic health, longevity, and muscle function.</li>
              <li><strong>Human clinical trials (oral precursors NMN/NR):</strong> Modest improvements in some metabolic and cardiovascular markers. Evidence is still early-stage.</li>
              <li><strong>Human injection studies:</strong> Limited. Most NAD+ injection protocols are based on extrapolation from IV and oral data, not large injection-specific trials.</li>
            </ul>
            <p>
              The bottom line: this is a scientifically plausible area with promising preliminary data,
              but claims of dramatic benefits in healthy individuals are ahead of what current evidence
              supports. Discuss your expectations honestly with a provider.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">NAD+ Injection Cost Breakdown</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li><strong>In-clinic IV infusions:</strong> $300–$1,000+ per session, often sold in packages. Sessions typically run 2–4 hours.</li>
              <li><strong>At-home subcutaneous programs:</strong> $100–$300/month through telehealth providers, including provider evaluation and shipped supplies.</li>
              <li><strong>Oral NAD+ precursors (NMN/NR):</strong> $30–$80/month as supplements — no prescription required, but bioavailability compared to injection is not established.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 pt-2">What to Ask Your Provider</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>What protocol are you recommending, and why that dose/frequency?</li>
              <li>What outcomes should I realistically expect, and over what timeline?</li>
              <li>How will we measure whether it&apos;s working?</li>
              <li>Would an oral NAD+ precursor be a more cost-effective starting point?</li>
            </ul>
          </div>

          <div className="mt-10">
            <CTASection
              offerSlug="nad"
              heading="Find a NAD+ Injection Program"
              subheading="Compare programs that include provider oversight and at-home injection protocols."
              buttonLabel="View NAD+ Programs"
            />
          </div>

          <FAQSection items={faqs} />
          <SourceCitation sources={sources} />
        </div>

        <aside className="mt-8 lg:mt-0 space-y-6">
          <QuickFactsBox facts={facts} title="NAD+ Quick Facts" />
          <div className="bg-gray-50 border border-gray-200 rounded-[10px] p-5">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Related Injection Types</h3>
            <ul className="space-y-2">
              <li><Link href="/b12-injections/" className="text-sm text-brand-600 hover:underline">B12 Injections</Link></li>
              <li><Link href="/sermorelin-injections/" className="text-sm text-brand-600 hover:underline">Sermorelin</Link></li>
              <li><Link href="/glutathione-injections/" className="text-sm text-brand-600 hover:underline">Glutathione Injections</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
