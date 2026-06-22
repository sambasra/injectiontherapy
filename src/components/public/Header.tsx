'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { label: 'Injection types', href: '/injection-types/' },
  { label: 'Evidence guide', href: '/#evidence' },
  { label: 'Safety checklist', href: '/#questions' },
  { label: 'About', href: '/about/' },
  { label: 'Articles', href: '/blog/' },
]

function Mark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 42" fill="none" className="h-9 w-9 shrink-0">
      <rect x="1" y="1" width="40" height="40" rx="8" fill="#E9F7F5" stroke="#A9D9D4" />
      <path d="M9 23h7l4-9 6 17 4-10h4" stroke="#087E8B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="bg-[#172026] text-white">
        <div className="site-shell flex min-h-9 items-center justify-between gap-4 py-2 text-xs text-white/75">
          <span>Independent education about injection therapy</span>
          <span className="hidden sm:inline">Not a clinic. Not personal medical advice.</span>
        </div>
      </div>

      <div className="bg-white">
        <div className="site-shell flex min-h-[72px] items-center justify-between gap-5">
          <Link href="/" className="flex min-w-0 items-center gap-3 text-[#172026] no-underline" onClick={() => setMobileOpen(false)}>
            <Mark />
            <span className="min-w-0 text-lg font-semibold leading-none sm:text-xl">
              InjectionTherapy<span className="text-[#087e8b]">.org</span>
              <small className="mt-1 hidden text-xs font-normal text-[#61707a] sm:block">Evidence before treatment</small>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm text-[#43525a] lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="header-link">{item.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/injection-types/" className="desktop-compare-button button button-primary min-h-10 px-4">
              Compare guides
            </Link>
            <button
              type="button"
              className="icon-button lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                {mobileOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[#dce5e8] bg-white lg:hidden">
          <div className="site-shell grid py-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="mobile-nav-link">
                {item.label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
            <Link href="/injection-types/" onClick={() => setMobileOpen(false)} className="button button-primary mt-3 sm:hidden">
              Compare guides
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
