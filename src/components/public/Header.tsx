'use client'

import Link from 'next/link'
import { useState } from 'react'
import { mainNav } from '@/data/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E7EEF2]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-semibold text-[#172026] text-lg tracking-tight">
            <span className="text-brand-500">Injection</span>Therapy.org
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setMoreOpen((v) => !v)}
                    className="px-3 py-2 text-sm font-medium text-[#172026] hover:text-brand-500 rounded flex items-center gap-1 transition-colors"
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {moreOpen && (
                    <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg border border-[#E7EEF2] py-1 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#172026] hover:text-brand-500 hover:bg-[#F7FAFC] transition-colors"
                          onClick={() => setMoreOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-[#172026] hover:text-brand-500 rounded transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded text-[#172026] hover:bg-[#F7FAFC] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E7EEF2] bg-white px-4 py-3 space-y-1">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">{item.label}</div>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-5 py-2 text-sm text-[#172026] hover:text-brand-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-[#172026] hover:text-brand-500 rounded hover:bg-[#F7FAFC]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  )
}
