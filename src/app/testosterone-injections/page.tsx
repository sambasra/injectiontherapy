import type { Metadata } from 'next'
import Link from 'next/link'
import DisclaimerBox from '@/components/public/DisclaimerBox'
import CTASection from '@/components/public/CTASection'
import QuickFactsBox from '@/components/public/QuickFactsBox'
import SourceCitation from '@/components/public/SourceCitation'

export const metadata: Metadata = {
  title: 'Testosterone Injections (TRT): What to Know, Cost & Programs',
  description:
    'Testosterone injection therapy and TRT programs: who qualifies, what it costs, and how to find a qualified provider or telehealth program.',
  alternates: { canonical: '/testosterone-injections/' },
}

const sources = [
  { name: 'FDA — Testosterone: Safety Labeling Updates', url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-cautions-about-using-testosterone-products-low-testosterone-due' },
  { name: 'NIH — Testosterone and Hypogonadism Treatment', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4391003/' },
  { name: 'Mayo Clinic — Testosterone Therapy: Potential Benefits and Risks', url: 'https://www.mayoclinic.org/healthy-lifestyle/sexual-health/in-depth/testosterone-therapy/art-20045728' },
]

const facts = [
  { label: 'Drug class', value: 'Androgen hormone replacement' },
  { label: 'Common forms', value: 'Testosterone cypionate, enanthate, propionate' },
  { label: 'Delivery', value: 'Intramuscular or subcutaneous injection' },
  { label: 'Prescription required', value: 'Yes — Schedule III controlled substance' },
  { label: 'Indication', value: 'Clinically diagnosed hypogonadism; lab confirmation required' },
  { label: 'Typical cost', value: '$150–$400/month (telehealth TRT programs)' },
]

export default function TestosteronePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/injection-types/" className="hover:text-gray-600">Injection Types</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Testosterone Injections</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-normal text-[#172026] mb-4">
            Testosterone Injections (TRT): Who Qualifies, What It Costs, and What to Expect
          </h1>
          <p className="text-lg text-gray-500 mb-2">Last updated: June 2025</p>

          <DisclaimerBox type="both" className="my-6" />

          <div className="prose-content space-y-6 text-gray-700 leading-relaxed">
            <p>
              Testosterone replacement therapy (TRT) via injection is used under medical supervision
              for individuals with clinically diagnosed low testosterone (hypogonadism). It is a
              Schedule III controlled substance requiring a prescription and documented lab work
              confirming deficiency.
            </p>

            <h2 className="text-xl font-medium text-[#172026] pt-2">Who Qualifies?</h2>
            <p>
              The{' '}
              <a href="https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-cautions-about-using-testosterone-products-low-testosterone-due" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">
                FDA guidance
              </a>{' '}
              specifies that testosterone therapy is approved for men with low testosterone caused
              by certain medical conditions — not solely due to aging. Two lab measurements on
              separate occasions are typically required to confirm diagnosis. A provider evaluation
              is mandatory.
            </p>

            <h2 className="text-xl font-medium text-[#172026] pt-2">Common Injection Formulations</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li><strong>Testosterone cypionate:</strong> Most common injectable form; typically weekly or biweekly administration</li>
              <li><strong>Testosterone enanthate:</strong> Similar profile to cypionate; slightly different half-life</li>
              <li><strong>Testosterone propionate:</strong> Shorter-acting; requires more frequent injections</li>
            </ul>

            <h2 className="text-xl font-medium text-[#172026] pt-2">TRT Cost</h2>
            <p>
              Telehealth TRT programs typically range from $150–$400/month including provider
              oversight, lab work, and medication. Generic testosterone injections themselves are
              inexpensive — the bulk of cost in programs is provider management and convenience.
              Insurance coverage for diagnosed hypogonadism varies by plan.
            </p>

            <h2 className="text-xl font-medium text-[#172026] pt-2">Risks to Discuss With Your Provider</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Polycythemia (elevated red blood cell count) requiring monitoring</li>
              <li>Suppression of natural testosterone production and fertility effects</li>
              <li>Cardiovascular risk — subject of ongoing research</li>
              <li>Sleep apnea exacerbation</li>
            </ul>
            <p>
              Per{' '}
              <a href="https://www.mayoclinic.org/healthy-lifestyle/sexual-health/in-depth/testosterone-therapy/art-20045728" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">
                Mayo Clinic
              </a>
              , ongoing lab monitoring during TRT is standard of care.
            </p>
          </div>

          <div className="mt-10">
            <CTASection
              offerSlug="testosterone"
              heading="Find a TRT Program"
              subheading="Compare testosterone therapy programs that include lab work, provider evaluation, and ongoing monitoring."
              buttonLabel="View TRT Programs"
            />
          </div>

          <SourceCitation sources={sources} />
        </div>

        <aside className="mt-8 lg:mt-0 space-y-6">
          <QuickFactsBox facts={facts} title="Testosterone TRT Quick Facts" />
          <div className="bg-red-50 border border-red-100 rounded-lg p-5">
            <h3 className="font-semibold text-red-700 mb-2 text-sm">Controlled Substance Notice</h3>
            <p className="text-xs text-red-600 leading-relaxed">
              Testosterone is a Schedule III controlled substance. It is illegal to obtain
              without a valid prescription from a licensed provider. Any program offering
              testosterone without a proper medical evaluation is operating outside the law.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Related Injection Types</h3>
            <ul className="space-y-2">
              <li><Link href="/sermorelin-injections/" className="text-sm text-brand-500 hover:underline">Sermorelin Injections</Link></li>
              <li><Link href="/glp1-injections/" className="text-sm text-brand-500 hover:underline">GLP-1 Injections</Link></li>
              <li><Link href="/nad-injections/" className="text-sm text-brand-500 hover:underline">NAD+ Injections</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
