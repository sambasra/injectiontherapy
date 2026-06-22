'use client'

import { useState } from 'react'
import { Play, Pause } from 'lucide-react'
import {
  InjectionIcon, WeightScaleIcon, Brain01Icon, EnergyIcon, DnaIcon,
  ShieldEnergyIcon, FireIcon, BodyPartMuscleIcon, HeartCheckIcon,
  ClinicIcon, PillIcon, BloodIcon, TestTube01Icon, Doctor01Icon,
} from 'hugeicons-react'

const ICONS = [
  { Icon: InjectionIcon,      label: 'Injection' },
  { Icon: WeightScaleIcon,    label: 'GLP-1' },
  { Icon: Brain01Icon,        label: 'NAD+' },
  { Icon: EnergyIcon,         label: 'B12' },
  { Icon: DnaIcon,            label: 'Sermorelin' },
  { Icon: ShieldEnergyIcon,   label: 'Glutathione' },
  { Icon: FireIcon,           label: 'Lipotropic' },
  { Icon: BodyPartMuscleIcon, label: 'Testosterone' },
  { Icon: HeartCheckIcon,     label: 'Wellness' },
  { Icon: ClinicIcon,         label: 'Clinic' },
  { Icon: PillIcon,           label: 'Peptides' },
  { Icon: BloodIcon,          label: 'Blood Labs' },
  { Icon: TestTube01Icon,     label: 'Research' },
  { Icon: Doctor01Icon,       label: 'Providers' },
]

const DOUBLE = [...ICONS, ...ICONS]

export default function MarqueeTicker() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="py-10 overflow-hidden relative group">
      {/* Pause/play button */}
      <button
        onClick={() => setPaused(p => !p)}
        aria-label={paused ? 'Play' : 'Pause'}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md"
      >
        {paused
          ? <Play className="w-4 h-4 fill-current text-black" />
          : <Pause className="w-4 h-4 fill-current text-black" />}
      </button>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10" style={{ background: 'linear-gradient(to right, #fff, transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10" style={{ background: 'linear-gradient(to left, #fff, transparent)' }} />

      <div className={`flex w-[200%] animate-marquee${paused ? ' paused' : ''}`}>
        {DOUBLE.map(({ Icon, label }, idx) => (
          <div key={idx} className="w-[7.14%] flex-shrink-0 flex flex-col items-center justify-center gap-2">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: idx % 3 === 0 ? '#eefab3' : idx % 3 === 1 ? '#f6f6f1' : 'linear-gradient(135deg,#bde6af,#599bd1)' }}>
              <Icon size={26} color="#000" strokeWidth={1.5} />
            </div>
            <span className="text-xs text-[#555] font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
