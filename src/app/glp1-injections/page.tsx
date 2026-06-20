import type { Metadata } from 'next'
import Link from 'next/link'
import DisclaimerBox from '@/components/public/DisclaimerBox'
import CTASection from '@/components/public/CTASection'
import QuickFactsBox from '@/components/public/QuickFactsBox'
import FAQSection from '@/components/public/FAQSection'
import SourceCitation from '@/components/public/SourceCitation'

export const metadata: Metadata = {
  title: 'GLP-1 Injections: Weight Loss Options, Cost & Programs',
  description:
    'GLP-1 receptor agonist injections for weight management: how they work, what programs are available online, and what you can expect to pay.',
  alternates: { canonical: '/glp1-injections/' },
}

const sources = [
  { name: 'FDA — Medications for Weight Management', url: 'https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-weight-management' },
  { name: 'NIH — GLP-1 Receptor Agonists in Obesity Treatment', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9543503/' },
  { name: 'Mayo Clinic — Obesity Treatment: GLP-1 Drugs', url: 'https://www.mayoclinic.org/diseases-conditions/obesity/in-depth/weight-loss-drugs/art-20044832' },
]

const faqs = [
  {
    question: 'What are GLP-1 injections?',
    answer: 'GLP-1 receptor agonists are a class of medications originally developed for type 2 diabetes that have been FDA-approved for chronic weight management. They work by mimicking a hormone that signals fullness to the brain and slows gastric emptying.',
  },
  {
    question: 'How much do GLP-1 injections cost?',
    answer: 'Brand-name GLP-1 medications (semaglutide, tirzepatide) can cost $900–$1,400/month without insurance. Compounded semaglutide through telehealth programs typically ranges from $150–$450/month, though availability and pricing change frequently. Always verify the pharmacy\'s licensing and compounding status.',
  },
  {
    question: 'Do I need a prescription for GLP-1 injections?',
    answer: 'Yes. GLP-1 receptor agonists are FDA-regulated prescription medications. Any program offering them requires a licensed provider evaluation — in-person or via telehealth. Be cautious of any service offering these medications without a proper medical intake.',
  },
  {
    question: 'What results can I expect from GLP-1 injections?',
    answer: 'Clinical trials show average weight loss of 10–22% of body weight over 68–72 weeks, depending on the medication. Results vary significantly by individual and require adherence to diet and lifestyle recommendations. These are not instant or guaranteed outcomes.',
  },
  {
    question: 'Are GLP-1 injections safe?',
    answer: 'GLP-1 medications have well-documented safety profiles from large clinical trials, but they do carry side effects — most commonly nausea, vomiting, diarrhea, and constipation, especially at dose initiation. Rare but serious risks include pancreatitis and thyroid C-cell tumors (seen in animal studies). Discuss your full medical history with a provider.',
  },
]

const facts = [
  { label: 'Drug class', value: 'GLP-1 receptor agonist' },
  { label: 'Common examples', value: 'Semaglutide, tirzepatide, liraglutide' },
  { label: 'FDA approval', value: 'Yes, for weight management (select medications)' },
  { label: 'Prescription required', value: 'Yes — always' },
  { label: 'Cost (brand)', value: '$900–$1,400/month without insurance' },
  { label: 'Cost (compounded)', value: '$150–$450/month (telehealth programs)' },
  { label: 'Administration', value: 'Weekly or daily subcutaneous injection' },
]

export default function GLP1InjectionsPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/injection-types/" className="hover:text-gray-600">Injection Types</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">GLP-1 Injections</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            GLP-1 Injections: How They Work, What They Cost, and How to Access Them
          </h1>
          <p className="text-lg text-gray-500 mb-2">Last updated: June 2025</p>

          <DisclaimerBox type="both" className="my-6" />

          <div className="prose-content space-y-6 text-gray-700 leading-relaxed">
            <p>
              GLP-1 receptor agonists have become one of the most prescribed drug classes in the
              United States after large clinical trials demonstrated significant, sustained weight
              loss. But the media coverage has outpaced the nuance — this page focuses on what the
              evidence actually shows and what you should know before pursuing a program.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">How GLP-1 Medications Work</h2>
            <p>
              GLP-1 (glucagon-like peptide-1) is a hormone naturally produced in the gut after
              eating. GLP-1 receptor agonists mimic this hormone, producing several effects:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Reduced appetite by signaling fullness to the brain</li>
              <li>Slowed gastric emptying (food stays in the stomach longer)</li>
              <li>Improved insulin sensitivity and blood sugar regulation</li>
            </ul>
            <p>
              The net result, in clinical trials, is meaningful caloric reduction that leads to
              sustained weight loss when combined with lifestyle modifications. The{' '}
              <a href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-weight-management" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">
                FDA has approved several GLP-1 medications
              </a>{' '}
              specifically for chronic weight management in adults with obesity or overweight with
              at least one weight-related condition.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">GLP-1 Cost: What You Can Actually Expect to Pay</h2>
            <p>
              Cost is the biggest practical barrier for most people. Here is a realistic breakdown:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li><strong>Brand-name medications (Ozempic, Wegovy, Mounjaro, Zepbound):</strong> $900–$1,400+/month without insurance. Coverage has been expanding but varies widely.</li>
              <li><strong>Compounded semaglutide via telehealth:</strong> $150–$450/month. Important: compounded medications are not FDA-approved as finished products. The FDA has issued warnings about some compounders. Verify pharmacy licensure.</li>
              <li><strong>With insurance or manufacturer coupons:</strong> Some plans cover GLP-1s for obesity; manufacturer savings programs can reduce brand-name costs significantly for commercially insured patients.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 pt-2">What to Ask Your Provider</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Am I a candidate based on my BMI and medical history?</li>
              <li>Which medication is right for my situation, and why?</li>
              <li>What side effects should I watch for at startup?</li>
              <li>What happens if I stop taking it — do I keep the weight off?</li>
              <li>Is the pharmacy a licensed 503B outsourcing facility or licensed 503A compounding pharmacy?</li>
            </ul>
          </div>

          <div className="mt-10">
            <CTASection
              offerSlug="glp1"
              heading="Find a GLP-1 Weight Loss Program"
              subheading="Compare telehealth programs that include provider consultations and prescription management."
              buttonLabel="View GLP-1 Programs"
            />
          </div>

          <FAQSection items={faqs} />
          <SourceCitation sources={sources} />
        </div>

        <aside className="mt-8 lg:mt-0 space-y-6">
          <QuickFactsBox facts={facts} title="GLP-1 Quick Facts" />
          <div className="bg-amber-50 border border-amber-200 rounded-[10px] p-5">
            <h3 className="font-semibold text-amber-800 mb-2 text-sm">Important Note on Compounded GLP-1s</h3>
            <p className="text-xs text-amber-700 leading-relaxed">
              The FDA has warned about some compounded semaglutide products. Always verify your
              pharmacy&apos;s 503B or 503A status before purchasing. A legitimate telehealth program
              will provide this information voluntarily.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-[10px] p-5">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Related Injection Types</h3>
            <ul className="space-y-2">
              <li><Link href="/b12-injections/" className="text-sm text-brand-600 hover:underline">B12 Injections</Link></li>
              <li><Link href="/lipotropic-injections/" className="text-sm text-brand-600 hover:underline">Lipotropic (MIC) Injections</Link></li>
              <li><Link href="/sermorelin-injections/" className="text-sm text-brand-600 hover:underline">Sermorelin Injections</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
