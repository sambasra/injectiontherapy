import type { Metadata } from 'next'
import Link from 'next/link'
import CategoryCard from '@/components/public/CategoryCard'
import DisclaimerBox from '@/components/public/DisclaimerBox'
import SourceCitation from '@/components/public/SourceCitation'
import { injectionCategories } from '@/data/pages'

export const metadata: Metadata = {
  title: 'Types of Injection Therapy: Complete Comparison Guide',
  description:
    'Compare all major injection therapy types: B12, GLP-1, NAD+, Sermorelin, Glutathione, Lipotropic, and Testosterone. Learn what each does, costs, and where to get them.',
  alternates: { canonical: '/injection-types/' },
}

const sources = [
  { name: 'NIH — Vitamin B12 Fact Sheet for Health Professionals', url: 'https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/' },
  { name: 'FDA — GLP-1 Receptor Agonist Medications for Weight Loss', url: 'https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-weight-management' },
  { name: 'NIH — NAD+ and Aging: Role in Metabolism and Disease', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5789847/' },
]

export default function InjectionTypesPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Injection Types</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-normal text-[#172026] mb-4">
          Types of Injection Therapy: A Complete Comparison
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-[780px]">
          Injection therapy covers a wide range of treatments — from nutritional support like B12,
          to medically supervised weight management (GLP-1), to anti-aging and performance programs
          (NAD+, Sermorelin, Testosterone). Here is what makes each type distinct.
        </p>
      </div>

      {/* Disclaimer before any affiliate CTAs */}
      <DisclaimerBox type="both" className="mb-10" />

      {/* Category cards grid */}
      <section className="mb-12">
        <h2 className="text-xl font-medium text-[#172026] mb-6">Compare All Injection Types</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {injectionCategories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Comparison prose */}
      <section className="max-w-[780px] space-y-8 mb-12">
        <div>
          <h2 className="text-xl font-medium text-[#172026] mb-3">How to Choose the Right Type</h2>
          <p className="text-gray-600 leading-relaxed">
            The right injection type depends entirely on your health goal, medical history, and what
            a qualified provider recommends after evaluation. There is no one-size-fits-all answer.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> <span><strong>Nutritional deficiency or low energy:</strong> B12 injections are often the starting point and require a simple blood test to confirm deficiency.</span></li>
            <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> <span><strong>Medical weight loss:</strong> GLP-1 programs require a provider evaluation and are typically ongoing prescriptions.</span></li>
            <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> <span><strong>Cellular energy and longevity:</strong> NAD+ is used by wellness clinics — evidence is early-stage; discuss realistic expectations with a provider.</span></li>
            <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> <span><strong>Hormone optimization:</strong> Sermorelin and Testosterone require lab work and ongoing medical supervision.</span></li>
            <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> <span><strong>Fat metabolism support:</strong> Lipotropic (MIC) shots are typically paired with diet programs — not a standalone solution.</span></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#172026] mb-3">What These Programs Have in Common</h2>
          <p className="text-gray-600 leading-relaxed">
            All of the programs linked on this site operate through licensed healthcare providers —
            either in-clinic or via telehealth. None should be obtained without a provider evaluation.
            Injection therapy sold without a prescription or provider oversight is a red flag.
          </p>
        </div>
      </section>

      <SourceCitation sources={sources} />
    </div>
  )
}
