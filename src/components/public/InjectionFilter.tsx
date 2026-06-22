'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, ChevronDown } from 'lucide-react'
import {
  InjectionIcon, WeightScaleIcon, Brain01Icon, EnergyIcon, DnaIcon,
  ShieldEnergyIcon, FireIcon, BodyPartMuscleIcon, HeartCheckIcon,
  ClinicIcon, PillIcon, BloodIcon, TestTube01Icon, Doctor01Icon,
  CheckListIcon, AiBookIcon,
} from 'hugeicons-react'

const ALL = [
  { name: 'B12 Injections',      href: '/b12-injections/',          Icon: EnergyIcon,         tags: ['featured','wellness','deficiency'] },
  { name: 'GLP-1 Programs',      href: '/glp1-injections/',         Icon: WeightScaleIcon,    tags: ['featured','weight-loss'] },
  { name: 'NAD+ Therapy',        href: '/nad-injections/',          Icon: Brain01Icon,        tags: ['featured','wellness','anti-aging'] },
  { name: 'Sermorelin',          href: '/sermorelin-injections/',   Icon: DnaIcon,            tags: ['hormone','anti-aging'] },
  { name: 'Glutathione',         href: '/glutathione-injections/',  Icon: ShieldEnergyIcon,   tags: ['wellness','anti-aging'] },
  { name: 'Lipotropic (MIC)',    href: '/lipotropic-injections/',   Icon: FireIcon,           tags: ['weight-loss'] },
  { name: 'Testosterone',        href: '/testosterone-injections/', Icon: BodyPartMuscleIcon, tags: ['featured','hormone'] },
  { name: 'Injection Types',     href: '/injection-types/',         Icon: CheckListIcon,      tags: ['featured','all'] },
  { name: 'Blog & Guides',       href: '/blog/',                    Icon: AiBookIcon,         tags: ['all'] },
  { name: 'Find a Clinic',       href: '/contact/',                 Icon: ClinicIcon,         tags: ['all'] },
  { name: 'Wellness Injections', href: '/glutathione-injections/',  Icon: HeartCheckIcon,     tags: ['wellness'] },
  { name: 'Peptide Therapy',     href: '/sermorelin-injections/',   Icon: PillIcon,           tags: ['hormone','anti-aging'] },
  { name: 'Lab Testing',         href: '/b12-injections/',          Icon: BloodIcon,          tags: ['deficiency','all'] },
  { name: 'IV Therapy',          href: '/glutathione-injections/',  Icon: InjectionIcon,      tags: ['wellness'] },
  { name: 'Research Center',     href: '/blog/',                    Icon: TestTube01Icon,     tags: ['all'] },
  { name: 'Find Providers',      href: '/contact/',                 Icon: Doctor01Icon,       tags: ['all'] },
]

const FILTERS = [
  { value: 'featured',    label: 'Featured' },
  { value: 'weight-loss', label: 'Weight Loss' },
  { value: 'wellness',    label: 'Wellness' },
  { value: 'hormone',     label: 'Hormone' },
  { value: 'anti-aging',  label: 'Anti-Aging' },
  { value: 'deficiency',  label: 'Deficiency' },
  { value: 'all',         label: 'All Resources' },
]

export default function InjectionFilter() {
  const [active, setActive] = useState('featured')
  const filtered = ALL.filter(p => p.tags.includes(active))

  return (
    <>
      {/* Filter bar */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-4 border-b border-[#e0e0d8] pb-6">
        <span className="text-lg font-semibold text-black">Filter by:</span>

        {/* Mobile: select */}
        <div className="relative sm:hidden">
          <select
            value={active}
            onChange={e => setActive(e.target.value)}
            className="appearance-none bg-white border-2 border-[#e0e0d8] text-black font-medium py-2.5 pl-4 pr-10 rounded-xl outline-none focus:border-[#bde6af] cursor-pointer text-sm"
          >
            {FILTERS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555] pointer-events-none" />
        </div>

        {/* Desktop: pill buttons */}
        <div className="hidden sm:flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={active === f.value
                ? { background: 'linear-gradient(135deg,#bde6af,#599bd1)', color: '#000', border: '1px solid transparent' }
                : { background: '#f6f6f1', color: '#555', border: '1px solid #e0e0d8' }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item, i) => (
          <Link key={i} href={item.href}
            className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#e0e0d8] hover:shadow-md hover:border-[#bde6af] transition-all">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: '#eefab3' }}>
              <item.Icon size={20} color="#000" strokeWidth={1.5} />
            </div>
            <span className="flex-1 text-sm font-medium text-black leading-tight">{item.name}</span>
            <ExternalLink className="w-4 h-4 text-[#bbb] group-hover:text-[#599bd1] transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </>
  )
}
