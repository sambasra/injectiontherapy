'use client'

import Link from 'next/link'
import { useState } from 'react'
import { mainNav } from '@/data/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(247,250,252,0.93)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #E4EDF1',
    }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{ minHeight: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

          {/* Brand */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontWeight: 500, color: '#172026', textDecoration: 'none' }}>
            <svg
              viewBox="0 0 64 64" fill="none"
              style={{ width: 40, height: 40, borderRadius: 8, padding: 7, color: '#087E8B', background: 'rgba(8,126,139,0.1)', border: '1px solid rgba(8,126,139,0.2)', flexShrink: 0 }}
            >
              <rect x="6" y="6" width="52" height="52" rx="12" stroke="currentColor" strokeWidth="3" />
              <path d="M12 35H22L28 22L35 42L41 30H52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>
              InjectionTherapy.org
              <small style={{ display: 'block', color: '#61707A', fontSize: 12, fontWeight: 400 }}>Medical injection therapy guides</small>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'none', gap: '1.25rem', color: '#61707A', fontSize: 14 }} className="header-nav">
            {mainNav.map((item) =>
              item.children ? null : (
                <Link key={item.href} href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#172026')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#61707A')}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link href="/injection-types/"
              className="hidden sm:inline-flex"
              style={{ minHeight: 44, alignItems: 'center', gap: '0.5rem', padding: '0 0.875rem', borderRadius: 8, border: '1px solid #D8E3E8', background: '#fff', color: '#172026', fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-flex' }}>
              <i className="fa-regular fa-table-columns" style={{ fontSize: 13 }}></i> Compare
            </Link>
            <Link href="/b12-injections/"
              style={{ minHeight: 44, alignItems: 'center', gap: '0.5rem', padding: '0 0.875rem', borderRadius: 8, border: '1px solid #087E8B', background: '#087E8B', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-flex' }}>
              <i className="fa-regular fa-star" style={{ fontSize: 13 }}></i> Best Picks
            </Link>
            <button
              onClick={() => setMobileOpen(v => !v)}
              style={{ minHeight: 44, width: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, border: '1px solid #D8E3E8', background: '#fff', cursor: 'pointer' }}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              <svg style={{ width: 18, height: 18, color: '#172026' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ borderTop: '1px solid #E4EDF1', background: '#fff', padding: '0.75rem 1.25rem' }}>
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <div style={{ padding: '0.5rem 0.75rem', fontSize: 11, fontWeight: 500, color: '#85929A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                {item.children.map(child => (
                  <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                    style={{ display: 'block', padding: '0.5rem 1.25rem', fontSize: 14, color: '#172026', textDecoration: 'none' }}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '0.5rem 0.75rem', fontSize: 14, color: '#172026', textDecoration: 'none', borderRadius: 8 }}>
                {item.label}
              </Link>
            )
          )}
        </div>
      )}

      <style>{`.header-nav { display: none; } @media (min-width: 1024px) { .header-nav { display: flex !important; } }`}</style>
    </header>
  )
}
