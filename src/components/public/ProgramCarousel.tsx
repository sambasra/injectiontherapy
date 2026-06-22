'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  EnergyIcon, WeightScaleIcon, Brain01Icon, BodyPartMuscleIcon,
  DnaIcon, ShieldEnergyIcon,
} from 'hugeicons-react'

const ITEMS = [
  {
    title: 'B12 Injection Programs',
    desc: 'Well-established, affordable therapy for deficiency, nerve health, and metabolism. Strong evidence base — get your levels checked first.',
    cta: 'View B12 Programs',
    href: '/b12-injections/',
    Icon: EnergyIcon,
    gradFrom: '#eefab3',
    gradTo: '#bde6af',
    stat: '4.8★ evidence',
  },
  {
    title: 'GLP-1 Weight Management',
    desc: 'FDA-approved semaglutide & tirzepatide programs prescribed through telehealth. The strongest evidence for medically supervised weight loss.',
    cta: 'Compare GLP-1 Plans',
    href: '/glp1-injections/',
    Icon: WeightScaleIcon,
    gradFrom: '#bde6af',
    gradTo: '#599bd1',
    stat: '5.0★ evidence',
  },
  {
    title: 'NAD+ Cellular Therapy',
    desc: 'Emerging coenzyme therapy targeting cellular energy and longevity. Early-stage evidence — understand the limitations before starting.',
    cta: 'Explore NAD+ Therapy',
    href: '/nad-injections/',
    Icon: Brain01Icon,
    gradFrom: '#599bd1',
    gradTo: '#bde6af',
    stat: '4.2★ evidence',
  },
  {
    title: 'Testosterone Replacement',
    desc: 'Hormone optimization therapy for diagnosed low testosterone. Requires blood work, Rx, and ongoing monitoring by a licensed provider.',
    cta: 'See Testosterone Guides',
    href: '/testosterone-injections/',
    Icon: BodyPartMuscleIcon,
    gradFrom: '#bde6af',
    gradTo: '#eefab3',
    stat: '4.6★ evidence',
  },
  {
    title: 'Sermorelin Peptide',
    desc: 'Growth hormone-releasing peptide used in anti-aging clinics. Promotes natural GH production — requires prescription and monitoring.',
    cta: 'Read Sermorelin Guide',
    href: '/sermorelin-injections/',
    Icon: DnaIcon,
    gradFrom: '#eefab3',
    gradTo: '#599bd1',
    stat: '3.9★ evidence',
  },
  {
    title: 'Glutathione Therapy',
    desc: 'Master antioxidant administered IV or IM for detox support and skin brightening. Understand what the evidence actually says.',
    cta: 'Explore Glutathione',
    href: '/glutathione-injections/',
    Icon: ShieldEnergyIcon,
    gradFrom: '#bde6af',
    gradTo: '#eefab3',
    stat: '3.7★ evidence',
  },
]

export default function ProgramCarousel() {
  const [idx, setIdx] = useState(0)
  const total = ITEMS.length
  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)
  const item = ITEMS[idx]

  return (
    <div className="relative">
      {/* Prev */}
      <button onClick={prev} aria-label="Previous"
        className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
        <ChevronLeft className="w-5 h-5 text-black" />
      </button>

      {/* Viewport */}
      <div className="overflow-hidden rounded-[2rem] border border-[#e0e0d8] bg-white shadow-sm">
        <div className="carousel-track flex" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {ITEMS.map((it, i) => (
            <div key={i} className="w-full flex-shrink-0 flex flex-col md:flex-row min-h-[420px]">
              {/* Visual half */}
              <div className="w-full md:w-3/5 relative flex items-center justify-center p-12"
                style={{ background: `linear-gradient(135deg, ${it.gradFrom}, ${it.gradTo})`, minHeight: 280 }}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-3xl bg-white/60 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <it.Icon size={48} color="#000" strokeWidth={1.2} />
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 text-black text-sm font-600">
                    {it.stat}
                  </div>
                </div>
              </div>
              {/* Text half */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 leading-tight">{it.title}</h3>
                <p className="text-[#555] text-base leading-relaxed mb-8">{it.desc}</p>
                <Link href={it.href}
                  className="inline-flex items-center justify-center self-start px-6 py-3 rounded-full font-semibold text-black text-sm transition-opacity hover:opacity-80"
                  style={{ background: 'linear-gradient(135deg, #bde6af, #599bd1)' }}>
                  {it.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next */}
      <button onClick={next} aria-label="Next"
        className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
        <ChevronRight className="w-5 h-5 text-black" />
      </button>

      {/* Dots */}
      <div className="flex justify-center items-center mt-6 gap-2">
        {ITEMS.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
            className="w-2.5 h-2.5 rounded-full transition-all"
            style={{ background: i === idx ? '#000' : '#e0e0d8', transform: i === idx ? 'scale(1.2)' : 'scale(1)' }} />
        ))}
      </div>
    </div>
  )
}
