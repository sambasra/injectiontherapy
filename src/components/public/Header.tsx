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

function NavIcon({ name, size = 18, color = '#000' }: { name: string; size?: number; color?: string }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon size={size} color={color} strokeWidth={1.5} />
}

function MegaMenu({ item, onClose }: { item: NavItem; onClose: () => void }) {
  if (!item.megaMenu) return null
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#fff',
      border: '1px solid #e0e0d8',
      borderRadius: 16,
      boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
      padding: '1.5rem',
      display: 'grid',
      gridTemplateColumns: `repeat(${item.megaMenu.length}, minmax(0,1fr))`,
      gap: '1.5rem',
      width: 780,
      zIndex: 100,
      marginTop: 10,
    }}>
      {item.megaMenu.map((col) => (
        <div key={col.heading}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#000',
            marginBottom: '0.75rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #eefab3',
          }}>
            {col.heading}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {col.items.map((child) => (
              <Link key={child.href} href={child.href} onClick={onClose} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                    padding: '0.5rem 0.625rem',
                    borderRadius: 10,
                    transition: 'background 0.12s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f6f6f1')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: '#eefab3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <NavIcon name={child.icon} size={16} color="#000" />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: '#000', lineHeight: 1.3 }}>
                      {child.label}
                    </div>
                    <div style={{ fontSize: 11.5, color: '#666', marginTop: 2, lineHeight: 1.4 }}>
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
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open_ = () => { if (timerRef.current) clearTimeout(timerRef.current); setOpen(true) }
  const close_ = () => { timerRef.current = setTimeout(() => setOpen(false), 120) }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  if (!item.megaMenu) {
    return (
      <Link href={item.href}
        style={{ color: '#555', textDecoration: 'none', fontSize: 14, fontWeight: 500, padding: '0.25rem 0', transition: 'color 0.12s' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#000')}
        onMouseLeave={e => (e.currentTarget.style.color = '#555')}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div style={{ position: 'relative' }} onMouseEnter={open_} onMouseLeave={close_}>
      <button style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '0.3rem',
        fontSize: 14, fontWeight: 500,
        color: open ? '#000' : '#555',
        padding: '0.25rem 0',
        transition: 'color 0.12s',
      }}>
        {item.label}
        <svg style={{ width: 13, height: 13, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
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
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e0e0d8',
    }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ minHeight: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

          {/* Brand */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#000', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, #bde6af, #599bd1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg viewBox="0 0 64 64" fill="none" style={{ width: 22, height: 22 }}>
                <path d="M12 35H22L28 22L35 42L41 30H52" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontSize: 15 }}>
              InjectionTherapy.org
              <small style={{ display: 'block', color: '#888', fontSize: 11, fontWeight: 400 }}>Medical injection therapy guides</small>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav" style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }}>
            {mainNav.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <Link href="/injection-types/"
              className="hidden sm:inline-flex"
              style={{ minHeight: 40, alignItems: 'center', gap: '0.4rem', padding: '0 0.875rem', borderRadius: 8, border: '1px solid #e0e0d8', background: '#f6f6f1', color: '#000', fontSize: 13, fontWeight: 500, textDecoration: 'none', display: 'inline-flex' }}>
              <CheckListIcon size={14} color="#000" strokeWidth={1.5} /> Compare
            </Link>
            <Link href="/b12-injections/"
              style={{ minHeight: 40, alignItems: 'center', gap: '0.4rem', padding: '0 0.875rem', borderRadius: 8, background: 'linear-gradient(135deg, #bde6af, #599bd1)', color: '#000', fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', border: 'none' }}>
              Best Picks
            </Link>
            <button
              onClick={() => setMobileOpen(v => !v)}
              style={{ minHeight: 40, width: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, border: '1px solid #e0e0d8', background: '#f6f6f1', cursor: 'pointer' }}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              <svg style={{ width: 18, height: 18, color: '#000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div style={{ borderTop: '1px solid #e0e0d8', background: '#fff', padding: '0.75rem 1rem 1.25rem' }}>
          {mainNav.map((item) =>
            item.megaMenu ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0.75rem', fontSize: 14, fontWeight: 500, color: '#000', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 8 }}>
                  {item.label}
                  <svg style={{ width: 13, height: 13, transition: 'transform 0.2s', transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileExpanded === item.label && (
                  <div style={{ paddingLeft: '0.75rem', marginBottom: '0.5rem' }}>
                    {item.megaMenu.map((col) => (
                      <div key={col.heading} style={{ marginBottom: '0.875rem' }}>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#000', padding: '0.25rem 0.5rem', marginBottom: '0.25rem', background: '#eefab3', borderRadius: 6, display: 'inline-block' }}>
                          {col.heading}
                        </div>
                        <div style={{ marginTop: '0.375rem' }}>
                          {col.items.map((child) => (
                            <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                              style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.4rem 0.5rem', fontSize: 13.5, color: '#000', textDecoration: 'none', borderRadius: 8 }}>
                              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#eefab3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <NavIcon name={child.icon} size={14} color="#000" />
                              </div>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '0.625rem 0.75rem', fontSize: 14, fontWeight: 500, color: '#000', textDecoration: 'none', borderRadius: 8 }}>
                {item.label}
              </Link>
            )
          )}
        </div>
      )}

      <style>{`@media (min-width: 1024px) { .header-nav { display: flex !important; } }`}</style>
    </header>
  )
}
