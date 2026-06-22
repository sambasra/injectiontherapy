'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { mainNav, type NavItem } from '@/data/navigation'
import {
  WeightScaleIcon,
  FireIcon,
  EnergyIcon,
  Brain01Icon,
  ShieldEnergyIcon,
  BodyPartMuscleIcon,
  DnaIcon,
  CheckListIcon,
  AiBookIcon,
  ClinicIcon,
} from 'hugeicons-react'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  WeightScaleIcon,
  FireIcon,
  EnergyIcon,
  Brain01Icon,
  ShieldEnergyIcon,
  BodyPartMuscleIcon,
  DnaIcon,
  CheckListIcon,
  AiBookIcon,
  ClinicIcon,
}

function NavIcon({ name, size = 20, color = '#087E8B' }: { name: string; size?: number; color?: string }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon size={size} color={color} strokeWidth={1.5} />
}

function MegaMenu({ item, onClose }: { item: NavItem; onClose: () => void }) {
  if (!item.megaMenu) return null
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#fff',
        border: '1px solid #E4EDF1',
        borderRadius: 16,
        boxShadow: '0 16px 48px rgba(23,32,38,0.12)',
        padding: '1.5rem',
        display: 'grid',
        gridTemplateColumns: `repeat(${item.megaMenu.length}, minmax(0,1fr))`,
        gap: '1.5rem',
        width: 760,
        zIndex: 100,
        marginTop: 8,
      }}
    >
      {item.megaMenu.map((col) => (
        <div key={col.heading}>
          <div style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#087E8B',
            marginBottom: '0.75rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid #E4EDF1',
          }}>
            {col.heading}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {col.items.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                    padding: '0.5rem 0.625rem',
                    borderRadius: 10,
                    transition: 'background 0.15s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#F0F7F8')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'rgba(8,126,139,0.08)',
                    border: '1px solid rgba(8,126,139,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <NavIcon name={child.icon} size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 500, color: '#172026', lineHeight: 1.3 }}>
                      {child.label}
                    </div>
                    <div style={{ fontSize: 12, color: '#61707A', marginTop: 2, lineHeight: 1.4 }}>
                      {child.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setOpen(true)
  }
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  if (!item.megaMenu) {
    return (
      <Link
        href={item.href}
        style={{ color: '#61707A', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '0.25rem 0' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#172026')}
        onMouseLeave={e => (e.currentTarget.style.color = '#61707A')}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div
      ref={ref}
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: 14,
          fontWeight: 500,
          color: open ? '#172026' : '#61707A',
          padding: '0.25rem 0',
          transition: 'color 0.15s',
        }}
      >
        {item.label}
        <svg
          style={{ width: 14, height: 14, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <MegaMenu item={item} onClose={() => setOpen(false)} />}
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(247,250,252,0.95)',
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
          <nav className="header-nav" style={{ display: 'none', alignItems: 'center', gap: '1.5rem' }}>
            {mainNav.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link href="/injection-types/"
              className="hidden sm:inline-flex"
              style={{ minHeight: 44, alignItems: 'center', gap: '0.5rem', padding: '0 0.875rem', borderRadius: 8, border: '1px solid #D8E3E8', background: '#fff', color: '#172026', fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-flex' }}>
              <CheckListIcon size={15} color="#172026" strokeWidth={1.5} /> Compare
            </Link>
            <Link href="/b12-injections/"
              style={{ minHeight: 44, alignItems: 'center', gap: '0.5rem', padding: '0 0.875rem', borderRadius: 8, border: '1px solid #087E8B', background: '#087E8B', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-flex' }}>
              <StarIcon size={15} color="#fff" strokeWidth={1.5} /> Best Picks
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
        <div style={{ borderTop: '1px solid #E4EDF1', background: '#fff', padding: '0.75rem 1.25rem 1.25rem' }}>
          {mainNav.map((item) =>
            item.megaMenu ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.625rem 0.75rem', fontSize: 14, fontWeight: 500, color: '#172026',
                    background: 'none', border: 'none', cursor: 'pointer', borderRadius: 8,
                  }}
                >
                  {item.label}
                  <svg style={{ width: 14, height: 14, transition: 'transform 0.2s', transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === item.label && (
                  <div style={{ paddingLeft: '0.75rem', marginBottom: '0.5rem' }}>
                    {item.megaMenu.map((col) => (
                      <div key={col.heading} style={{ marginBottom: '0.75rem' }}>
                        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#087E8B', padding: '0.25rem 0.5rem', marginBottom: '0.25rem' }}>
                          {col.heading}
                        </div>
                        {col.items.map((child) => (
                          <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.4rem 0.5rem', fontSize: 13.5, color: '#172026', textDecoration: 'none', borderRadius: 8 }}
                          >
                            <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(8,126,139,0.08)', border: '1px solid rgba(8,126,139,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <NavIcon name={child.icon} size={14} />
                            </div>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '0.625rem 0.75rem', fontSize: 14, fontWeight: 500, color: '#172026', textDecoration: 'none', borderRadius: 8 }}>
                {item.label}
              </Link>
            )
          )}
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) { .header-nav { display: flex !important; } }
      `}</style>
    </header>
  )
}

function StarIcon({ size = 20, color = 'currentColor', strokeWidth = 1.5 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}
