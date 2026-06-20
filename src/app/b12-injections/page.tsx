import type { Metadata } from 'next'
import Link from 'next/link'
import DisclaimerBox from '@/components/public/DisclaimerBox'
import CTASection from '@/components/public/CTASection'
import QuickFactsBox from '@/components/public/QuickFactsBox'
import FAQSection from '@/components/public/FAQSection'
import SourceCitation from '@/components/public/SourceCitation'

export const metadata: Metadata = {
  title: 'B12 Injections: What They Are, Benefits & Cost',
  description:
    'Learn about B12 injection therapy: what vitamin B12 shots do, who may benefit, what they cost, and how to find a provider or online program.',
  alternates: { canonical: '/b12-injections/' },
}

const sources = [
  { name: 'NIH — Vitamin B12 Fact Sheet for Health Professionals', url: 'https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/' },
  { name: 'Mayo Clinic — Vitamin Deficiency Anemia', url: 'https://www.mayoclinic.org/diseases-conditions/vitamin-deficiency-anemia/symptoms-causes/syc-20355025' },
  { name: 'NIH — Vitamin B12 and Neurological Function', url: 'https://www.ncbi.nlm.nih.gov/books/NBK441923/' },
]

const faqs = [
  {
    question: 'What is a B12 injection?',
    answer: 'A B12 injection delivers cyanocobalamin or methylcobalamin directly into muscle tissue (intramuscular) or under the skin (subcutaneous), bypassing the digestive system entirely. This is useful for people whose gut absorption is impaired.',
  },
  {
    question: 'Who typically needs B12 injections?',
    answer: 'B12 injections are most often used for people with pernicious anemia, those who have had gastrointestinal surgery, vegans and vegetarians with confirmed deficiency, and people taking metformin or proton pump inhibitors long-term. A simple blood test can confirm deficiency.',
  },
  {
    question: 'How much do B12 injections cost?',
    answer: 'In-office B12 injections typically range from $20–$75 per shot depending on the provider and location. Online telehealth programs that ship self-injection supplies typically range from $30–$80/month. Insurance may cover them when medically necessary.',
  },
  {
    question: 'Are B12 injections safe?',
    answer: 'B12 is water-soluble and excess is excreted through urine, making toxicity very rare. Side effects are generally mild (injection site discomfort, itching). Serious allergic reactions are rare. As with any injection, proper technique and sterile supplies matter — work with a qualified provider.',
  },
  {
    question: 'Can I get B12 injections online?',
    answer: 'Yes — several telehealth platforms offer B12 injection programs that include a provider consultation, prescription, and shipped supplies. These programs typically require a brief intake form and sometimes lab results before prescribing.',
  },
]

const facts = [
  { label: 'Delivery method', value: 'Intramuscular or subcutaneous injection' },
  { label: 'Common form', value: 'Cyanocobalamin or methylcobalamin' },
  { label: 'Typical frequency', value: 'Weekly to monthly depending on indication' },
  { label: 'Cost range', value: '$20–$75/shot in-office; $30–$80/mo online programs' },
  { label: 'Prescription required', value: 'Yes, in most jurisdictions' },
  { label: 'Evidence level', value: 'Well-established for deficiency; mixed for wellness use' },
]

export default function B12InjectionsPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/injection-types/" className="hover:text-gray-600">Injection Types</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">B12 Injections</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
        {/* Main content */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            B12 Injections: What They Are, Who Needs Them, and What They Cost
          </h1>
          <p className="text-lg text-gray-500 mb-2">Last updated: June 2025</p>

          {/* FTC-compliant disclosure before first affiliate CTA (Section 9.1) */}
          <DisclaimerBox type="both" className="my-6" />

          <div className="prose-content space-y-6 text-gray-700 leading-relaxed">
            <p>
              Vitamin B12 injections are one of the most commonly prescribed injection therapies —
              with a well-established evidence base for treating deficiency. But they are also
              widely marketed as wellness shots, where the evidence is thinner.
            </p>
            <p>
              This page covers what the research actually supports, who is most likely to benefit,
              realistic cost ranges, and what to look for in a provider or online program.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">What Is Vitamin B12 and Why Inject It?</h2>
            <p>
              Vitamin B12 (cobalamin) is an essential nutrient involved in red blood cell formation,
              neurological function, and DNA synthesis. According to the{' '}
              <a href="https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">
                National Institutes of Health
              </a>
              , the average adult needs about 2.4 mcg daily — an amount most people get through diet.
            </p>
            <p>
              The reason injections are sometimes preferred over oral supplements is absorption.
              B12 requires intrinsic factor (a protein produced in the stomach) for absorption
              through the gut. People who lack intrinsic factor — or who have conditions that
              impair its production — cannot absorb enough B12 orally, no matter how much they take.
              An injection bypasses this entirely.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">Who May Benefit From B12 Injections?</h2>
            <p>
              B12 deficiency is more common than many people realize. The following groups are at
              higher risk, according to NIH and Mayo Clinic:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>People with pernicious anemia (autoimmune condition affecting intrinsic factor)</li>
              <li>Those who have had gastric bypass or bowel resection surgery</li>
              <li>Vegans and vegetarians (B12 is found almost exclusively in animal products)</li>
              <li>People over 50, whose stomach acid production naturally declines</li>
              <li>Long-term users of metformin (for diabetes) or proton pump inhibitors</li>
            </ul>
            <p>
              Wellness B12 shots — marketed for energy boosts in people without documented
              deficiency — have a much weaker evidence base. If your B12 levels are already
              normal, there is limited published evidence that injections will meaningfully
              change how you feel. A blood test is the logical first step before starting
              any B12 program.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">B12 Injection Cost: What to Expect</h2>
            <p>
              Cost varies significantly depending on whether you go in-office or use an online
              telehealth program:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li><strong>In-office injections:</strong> Typically $20–$75 per injection. Frequency depends on indication.</li>
              <li><strong>Telehealth programs:</strong> Usually $30–$80/month and include a provider consultation and shipped supplies for self-administration.</li>
              <li><strong>With insurance:</strong> Often covered when deficiency is medically documented. Check your plan.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 pt-2">What to Ask Your Provider</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Should I get a blood test first to confirm deficiency?</li>
              <li>Which form of B12 is best for my situation — cyanocobalamin or methylcobalamin?</li>
              <li>How often would I need injections, and for how long?</li>
              <li>Would oral high-dose B12 be sufficient in my case?</li>
            </ul>
          </div>

          {/* CTA after educational content */}
          <div className="mt-10">
            <CTASection
              offerSlug="b12"
              heading="Find a B12 Injection Program"
              subheading="Compare telehealth programs that include a provider consultation and at-home supplies."
              buttonLabel="View B12 Programs"
            />
          </div>

          <FAQSection items={faqs} />
          <SourceCitation sources={sources} />
        </div>

        {/* Sidebar */}
        <aside className="mt-8 lg:mt-0 space-y-6">
          <QuickFactsBox facts={facts} title="B12 Injection Quick Facts" />

          <div className="bg-gray-50 border border-gray-200 rounded-[10px] p-5">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Related Injection Types</h3>
            <ul className="space-y-2">
              <li><Link href="/glp1-injections/" className="text-sm text-brand-600 hover:underline">GLP-1 Injections</Link></li>
              <li><Link href="/nad-injections/" className="text-sm text-brand-600 hover:underline">NAD+ Injections</Link></li>
              <li><Link href="/lipotropic-injections/" className="text-sm text-brand-600 hover:underline">Lipotropic (MIC) Injections</Link></li>
              <li><Link href="/glutathione-injections/" className="text-sm text-brand-600 hover:underline">Glutathione Injections</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
