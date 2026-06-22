import type { Metadata } from 'next'
import Link from 'next/link'
import CategoryCard from '@/components/public/CategoryCard'
import DisclaimerBox from '@/components/public/DisclaimerBox'
import { injectionCategories } from '@/data/pages'

export const metadata: Metadata = {
  title: 'Injection Therapy Guide: B12, GLP-1, NAD & More',
  description:
    'Educational guide to injection therapy options including B12, GLP-1, NAD+, Sermorelin, Glutathione, Lipotropic, and Testosterone. Compare programs and costs.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-[#E7EEF2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-[680px]">
            <span className="inline-block bg-brand-50 text-brand-600 text-xs font-medium px-3 py-1 rounded mb-4 uppercase tracking-wide">
              Educational Resource
            </span>
            <h1 className="text-4xl sm:text-5xl font-normal text-[#172026] leading-tight mb-5">
              Injection Therapy:{' '}
              <span className="text-brand-500">What You Need to Know</span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Compare B12, GLP-1, NAD+, Sermorelin, Glutathione, Lipotropic, and Testosterone
              injection programs. Understand what each treatment involves, what it typically costs,
              and how to find a qualified provider or telehealth option.
            </p>

            {/* Affiliate disclosure before first CTA — FTC requirement */}
            <DisclaimerBox type="both" className="mb-6" />

            <div className="flex flex-wrap gap-3">
              <Link
                href="/injection-types/"
                className="bg-brand-500 hover:bg-brand-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Compare Injection Types
              </Link>
              <Link
                href="/b12-injections/"
                className="bg-white border border-[#E7EEF2] hover:border-brand-300 text-[#172026] font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Start with B12
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-medium text-[#172026] mb-2">
          Explore Injection Therapy Types
        </h2>
        <p className="text-gray-500 mb-8 text-sm">
          Each category has its own use case, evidence base, and typical cost range. Click any card
          to read our educational overview.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {injectionCategories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Why this site */}
      <section className="bg-white border-y border-[#E7EEF2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-[780px]">
            <h2 className="text-2xl font-medium text-[#172026] mb-4">
              How We Approach This Topic
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                Injection therapy is a medical-adjacent topic where misinformation is common.
                Our goal is to provide balanced, cited information that helps you ask better
                questions of your provider — not to replace that conversation.
              </p>
              <p>
                Every factual claim on this site is linked to its source: NIH, FDA, Mayo Clinic,
                PubMed, or peer-reviewed research. We do not make guarantees about outcomes,
                recommend specific treatments for individuals, or promote off-label uses.
              </p>
              <p>
                Some pages link to telehealth and wellness programs. Where they do, those are
                affiliate links — disclosed clearly on every page before any CTA.
              </p>
            </div>
            <div className="mt-6 flex gap-4 flex-wrap">
              <Link href="/about/" className="text-brand-500 font-medium hover:underline text-sm">
                About this site →
              </Link>
              <Link href="/medical-disclaimer/" className="text-gray-400 hover:underline text-sm">
                Medical disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl font-medium text-[#172026] mb-6">Popular Starting Points</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/b12-injections/"
            className="p-5 bg-white border border-[#E7EEF2] rounded-lg hover:border-brand-300 transition-colors"
          >
            <div className="text-2xl mb-2">💉</div>
            <div className="font-medium text-[#172026] mb-1">B12 Injections</div>
            <div className="text-sm text-gray-500">Energy, nerve health, and absorption</div>
          </Link>
          <Link
            href="/glp1-injections/"
            className="p-5 bg-white border border-[#E7EEF2] rounded-lg hover:border-brand-300 transition-colors"
          >
            <div className="text-2xl mb-2">⚕️</div>
            <div className="font-medium text-[#172026] mb-1">GLP-1 Injections</div>
            <div className="text-sm text-gray-500">Medical weight management programs</div>
          </Link>
          <Link
            href="/nad-injections/"
            className="p-5 bg-white border border-[#E7EEF2] rounded-lg hover:border-brand-300 transition-colors"
          >
            <div className="text-2xl mb-2">🔬</div>
            <div className="font-medium text-[#172026] mb-1">NAD+ Injections</div>
            <div className="text-sm text-gray-500">Cellular energy and recovery</div>
          </Link>
        </div>
      </section>
    </>
  )
}
