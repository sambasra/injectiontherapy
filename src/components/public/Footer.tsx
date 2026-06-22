import Link from 'next/link'
import { footerNav } from '@/data/navigation'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#000', color: '#aaa', marginTop: '3rem' }}>
      {/* Medical disclaimer strip */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0.875rem 1rem' }}>
          <p style={{ fontSize: 12, lineHeight: 1.6, color: '#888', margin: 0 }}>
            <strong style={{ color: '#bbb' }}>Medical Disclaimer:</strong> This website is for educational
            purposes only and does not provide medical advice. Always consult a qualified healthcare
            provider before starting any injection therapy or treatment program. Some links on this site
            may be affiliate links — we may earn a commission if you choose to purchase through them.{' '}
            <Link href="/medical-disclaimer/" style={{ color: '#999', textDecoration: 'underline' }}>
              Full Medical Disclaimer
            </Link>
            {' | '}
            <Link href="/affiliate-disclosure/" style={{ color: '#999', textDecoration: 'underline' }}>
              Affiliate Disclosure
            </Link>
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(135deg, #bde6af, #599bd1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg viewBox="0 0 64 64" fill="none" style={{ width: 18, height: 18 }}>
                  <path d="M12 35H22L28 22L35 42L41 30H52" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: 15 }}>InjectionTherapy.org</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: '#888', margin: 0, maxWidth: '30ch' }}>
              An educational resource for injection therapy information, programs, and costs. Not a medical provider.
            </p>
            {/* Gradient accent line */}
            <div style={{ height: 3, width: 48, borderRadius: 999, background: 'linear-gradient(135deg, #bde6af, #599bd1)', marginTop: '1rem' }} />
          </div>

          {/* Categories */}
          <div>
            <h3 style={{ fontSize: 11, fontWeight: 700, color: '#eefab3', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '1rem', marginTop: 0 }}>Injection Types</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.625rem' }}>
              {footerNav.categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontSize: 11, fontWeight: 700, color: '#eefab3', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '1rem', marginTop: 0 }}>Company</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.625rem' }}>
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ fontSize: 11, fontWeight: 700, color: '#eefab3', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '1rem', marginTop: 0 }}>Legal</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.625rem' }}>
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '2.5rem', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <p style={{ fontSize: 12, color: '#555', margin: 0 }}>
            &copy; {year} InjectionTherapy.org. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: '#555', margin: 0 }}>
            Educational purposes only. Not medical advice.
          </p>
        </div>
      </div>

      <style>{`
        .footer-link { font-size: 13px; color: #888; text-decoration: none; transition: color 0.12s; }
        .footer-link:hover { color: #fff; }
        @media (min-width: 640px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
