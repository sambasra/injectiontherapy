import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Injection Therapy Guide: B12, GLP-1, NAD & More',
  description:
    'Compare B12, GLP-1, NAD+, Sermorelin, Glutathione and Lipotropic injection programs. Educational reviews, cost comparisons and provider guides.',
  alternates: { canonical: '/' },
}

const s = {
  container: { maxWidth: 1220, margin: '0 auto', padding: '0 1.25rem' } as React.CSSProperties,
  card: { background: '#fff', border: '1px solid #D8E3E8', borderRadius: 8 } as React.CSSProperties,
  chip: (color: 'teal' | 'indigo' | 'coral' | 'gray') => {
    const map = {
      teal:   { color: '#087E8B', background: 'rgba(8,126,139,0.10)' },
      indigo: { color: '#334EAC', background: 'rgba(51,78,172,0.10)' },
      coral:  { color: '#E45A44', background: 'rgba(228,90,68,0.12)' },
      gray:   { color: '#61707A', background: '#F1F6F8' },
    }
    return {
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      fontSize: 13, padding: '0.375rem 0.625rem', borderRadius: 8, fontWeight: 500,
      ...map[color],
    } as React.CSSProperties
  },
  btn: {
    primary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', minHeight: 44, padding: '0 1.125rem', borderRadius: 8, background: '#087E8B', color: '#fff', border: '1px solid #087E8B', fontSize: 14, fontWeight: 500, textDecoration: 'none', cursor: 'pointer' } as React.CSSProperties,
    secondary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', minHeight: 44, padding: '0 1.125rem', borderRadius: 8, background: '#fff', color: '#172026', border: '1px solid #D8E3E8', fontSize: 14, fontWeight: 500, textDecoration: 'none', cursor: 'pointer' } as React.CSSProperties,
  },
  h2: { margin: 0, fontSize: 'clamp(22px,3vw,24px)', lineHeight: 1.3, fontWeight: 500, color: '#172026' } as React.CSSProperties,
  h3: { margin: 0, fontSize: 18, lineHeight: 1.4, fontWeight: 500, color: '#172026' } as React.CSSProperties,
  p:  { margin: 0, color: '#61707A', fontSize: 14 } as React.CSSProperties,
  section: { padding: '1.5rem 0 0' } as React.CSSProperties,
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ padding: '2rem 0 1.5rem' }}>
        <div style={{ ...s.container, display: 'grid', gap: '1.25rem', alignItems: 'start' }} className="hero-grid">

          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: 12, color: '#61707A', background: '#fff', border: '1px solid #D8E3E8', padding: '0.375rem 0.75rem', borderRadius: 999, marginBottom: '1rem' }}>
              <i className="fa-regular fa-circle-check" style={{ color: '#087E8B' }}></i>
              Research-based educational content
            </div>
            <h1 style={{ margin: 0, fontSize: 'clamp(30px,4vw,40px)', lineHeight: 1.2, fontWeight: 400, color: '#172026', maxWidth: '16ch' }}>
              Injection Therapy Programs That Are Worth Knowing About
            </h1>
            <p style={{ ...s.p, marginTop: '1rem', maxWidth: '62ch' }}>
              Compare B12, GLP-1, NAD+, Sermorelin, Glutathione, and Lipotropic injection programs. We explain what each does, what the evidence says, typical costs, and how to find a qualified provider.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.25rem' }}>
              <Link href="/injection-types/" style={s.btn.primary}>
                <i className="fa-regular fa-star" style={{ fontSize: 13 }}></i> See All Types
              </Link>
              <Link href="/glp1-injections/" style={s.btn.secondary}>
                <i className="fa-regular fa-table-columns" style={{ fontSize: 13 }}></i> GLP-1 Guide
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
              <span style={s.chip('teal')}><i className="fa-regular fa-shield-heart"></i> Trust-first content</span>
              <span style={s.chip('indigo')}><i className="fa-solid fa-laptop-medical"></i> Medical education</span>
              <span style={s.chip('coral')}><i className="fa-regular fa-circle-info"></i> FTC disclosed</span>
            </div>

            {/* Disclosure */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 1rem', marginTop: '1.25rem', background: 'rgba(51,78,172,0.07)', border: '1px solid #D8E3E8', borderRadius: 8 }}>
              <i className="fa-regular fa-circle-info" style={{ color: '#334EAC', marginTop: 2, flexShrink: 0 }}></i>
              <div>
                <strong style={{ fontSize: 14, color: '#172026' }}>Affiliate disclosure:</strong>
                <p style={{ ...s.p, marginTop: '0.25rem' }}>
                  Some links earn a commission at no extra cost to you. Our educational content stays independent of partnerships.{' '}
                  <Link href="/affiliate-disclosure/" style={{ color: '#334EAC', textDecoration: 'underline' }}>Full disclosure →</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right — featured card */}
          <article style={{ ...s.card, overflow: 'hidden' }}>
            <div style={{ aspectRatio: '4/3', background: '#E7EEF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: '#85929A' }}>
                <i className="fa-regular fa-syringe" style={{ fontSize: 48, marginBottom: 12 }}></i>
                <div style={{ fontSize: 14 }}>GLP-1 Weight Loss Programs</div>
              </div>
            </div>
            <div style={{ padding: '1rem', display: 'grid', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div>
                  <span style={s.chip('teal')}><i className="fa-regular fa-award"></i> Editor&apos;s choice</span>
                  <h3 style={{ ...s.h3, marginTop: '0.65rem' }}>Best GLP-1 program for medical weight management</h3>
                  <p style={{ ...s.p, marginTop: '0.5rem' }}>Clinically supervised, telehealth-accessible, includes provider consultation and ongoing monitoring.</p>
                </div>
                <div style={{ minWidth: 84, textAlign: 'center', padding: '0.65rem 0.75rem', borderRadius: 8, background: 'rgba(8,126,139,0.1)', color: '#087E8B', flexShrink: 0 }}>
                  <strong style={{ display: 'block', fontSize: 22, lineHeight: 1, fontWeight: 500 }}>9.4</strong>
                  <span style={{ fontSize: 12, color: '#61707A' }}>overall</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem' }}>
                {[['Safety', '9.5'], ['Efficacy', '9.3'], ['Value', '8.9']].map(([k, v]) => (
                  <div key={k} style={{ ...s.card, padding: '0.75rem', textAlign: 'center' }}>
                    <div style={{ fontSize: 12, color: '#85929A' }}>{k}</div>
                    <div style={{ fontSize: 20, fontWeight: 500, color: '#172026' }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link href="/go/glp1" rel="sponsored nofollow" style={s.btn.primary}>
                  <i className="fa-regular fa-bag-shopping" style={{ fontSize: 13 }}></i> View Programs
                </Link>
                <Link href="/glp1-injections/" style={s.btn.secondary}>
                  <i className="fa-regular fa-file-lines" style={{ fontSize: 13 }}></i> Read Guide
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── BROWSE CATEGORIES ────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={{ ...s.card, padding: '1rem', marginBottom: '1rem' }}>
            <div style={{ display: 'grid', gap: '0.75rem' }} className="topbar-row">
              <div>
                <h2 style={s.h2}>Browse by injection type</h2>
                <p style={{ ...s.p, marginTop: '0.5rem' }}>Each injection category has its own evidence base, cost range, and provider type. Find the one relevant to your health question.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', alignItems: 'center' }}>
                <span style={s.chip('teal')}><i className="fa-regular fa-heart"></i> Deficiency treatment</span>
                <span style={s.chip('indigo')}><i className="fa-solid fa-weight-scale"></i> Weight management</span>
                <span style={s.chip('coral')}><i className="fa-regular fa-flask"></i> Wellness & longevity</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }} className="category-grid">
            {[
              { href: '/b12-injections/',          icon: 'fa-regular fa-droplet',         title: 'B12 Injections',          desc: 'For deficiency, nerve health and energy. Well-studied and widely available.' },
              { href: '/glp1-injections/',         icon: 'fa-solid fa-weight-scale',       title: 'GLP-1 Injections',        desc: 'FDA-approved for weight management. Requires medical supervision and prescription.' },
              { href: '/nad-injections/',          icon: 'fa-regular fa-atom',             title: 'NAD+ Injections',         desc: 'Cellular energy and aging research. Early-stage evidence; emerging wellness use.' },
              { href: '/sermorelin-injections/',   icon: 'fa-regular fa-chart-line-up',    title: 'Sermorelin',              desc: 'Growth hormone-releasing peptide. Used in anti-aging and hormone clinics.' },
              { href: '/glutathione-injections/',  icon: 'fa-regular fa-shield-virus',     title: 'Glutathione',             desc: 'Antioxidant therapy used for skin brightening and detox support.' },
              { href: '/lipotropic-injections/',   icon: 'fa-regular fa-fire-flame-curved',title: 'Lipotropic (MIC)',        desc: 'Fat-metabolism injections often paired with weight loss programs.' },
              { href: '/testosterone-injections/', icon: 'fa-regular fa-person-running',   title: 'Testosterone',            desc: 'Hormone replacement therapy. Requires diagnosis and ongoing monitoring.' },
            ].map(cat => (
              <Link key={cat.href} href={cat.href} style={{ ...s.card, padding: '1rem', textDecoration: 'none', display: 'block' }}
                className="category-card-link">
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <i className={cat.icon} style={{ fontSize: 20, color: '#087E8B' }}></i>
                  <h3 style={s.h3}>{cat.title}</h3>
                  <p style={s.p}>{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP PICKS ────────────────────────────────────────────── */}
      <section style={s.section} id="top-picks">
        <div style={s.container}>
          <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
            <h2 style={s.h2}>Top picks by injection category</h2>
            <p style={{ ...s.p, maxWidth: '70ch' }}>Our most-read guides, ranked by evidence quality, provider access, and typical cost. These are starting points — not medical recommendations.</p>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }} className="grid-3">
            {/* B12 */}
            <article style={{ ...s.card, overflow: 'hidden', display: 'grid' }}>
              <div style={{ aspectRatio: '1/1', background: '#E7EEF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-regular fa-droplet" style={{ fontSize: 48, color: '#087E8B', opacity: 0.6 }}></i>
              </div>
              <div style={{ padding: '1rem', display: 'grid', gap: '0.75rem' }}>
                <span style={s.chip('teal')}><i className="fa-regular fa-award"></i> Best for deficiency</span>
                <h3 style={s.h3}>B12 Injection Programs</h3>
                <p style={s.p}>Well-established therapy for pernicious anemia, vegans and people with absorption issues. Get a blood test first.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#C27700', fontSize: 13 }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
                  <span style={{ color: '#61707A' }}>4.8 evidence rating</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <strong style={{ fontSize: 14, color: '#172026' }}>Pros</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#61707A', fontSize: 14 }}>
                      <li>Strong evidence base</li><li>Affordable $20–$80/mo</li><li>Telehealth available</li>
                    </ul>
                  </div>
                  <div>
                    <strong style={{ fontSize: 14, color: '#172026' }}>Cons</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#61707A', fontSize: 14 }}>
                      <li>Narrow benefit if replete</li><li>Test first needed</li>
                    </ul>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/go/b12" rel="sponsored nofollow" style={s.btn.primary}>View deal</Link>
                  <Link href="/b12-injections/" style={s.btn.secondary}>Read guide</Link>
                </div>
              </div>
            </article>

            {/* GLP-1 */}
            <article style={{ ...s.card, overflow: 'hidden', display: 'grid' }}>
              <div style={{ aspectRatio: '1/1', background: '#E7EEF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-weight-scale" style={{ fontSize: 48, color: '#334EAC', opacity: 0.6 }}></i>
              </div>
              <div style={{ padding: '1rem', display: 'grid', gap: '0.75rem' }}>
                <span style={s.chip('indigo')}><i className="fa-solid fa-trophy"></i> Best for weight loss</span>
                <h3 style={s.h3}>GLP-1 Telehealth Programs</h3>
                <p style={s.p}>FDA-approved medications (semaglutide, tirzepatide) prescribed through telehealth. Strong clinical evidence for obesity management.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#C27700', fontSize: 13 }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                  <span style={{ color: '#61707A' }}>5.0 evidence rating</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <strong style={{ fontSize: 14, color: '#172026' }}>Pros</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#61707A', fontSize: 14 }}>
                      <li>FDA-approved</li><li>Proven outcomes</li><li>Remote prescribing</li>
                    </ul>
                  </div>
                  <div>
                    <strong style={{ fontSize: 14, color: '#172026' }}>Cons</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#61707A', fontSize: 14 }}>
                      <li>Higher monthly cost</li><li>Ongoing Rx needed</li>
                    </ul>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/go/glp1" rel="sponsored nofollow" style={s.btn.primary}>Check price</Link>
                  <Link href="/glp1-injections/" style={s.btn.secondary}>Read guide</Link>
                </div>
              </div>
            </article>

            {/* NAD+ */}
            <article style={{ ...s.card, overflow: 'hidden', display: 'grid' }}>
              <div style={{ aspectRatio: '1/1', background: '#E7EEF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-regular fa-atom" style={{ fontSize: 48, color: '#E45A44', opacity: 0.6 }}></i>
              </div>
              <div style={{ padding: '1rem', display: 'grid', gap: '0.75rem' }}>
                <span style={s.chip('coral')}><i className="fa-regular fa-wallet"></i> Best emerging therapy</span>
                <h3 style={s.h3}>NAD+ Injection Programs</h3>
                <p style={s.p}>Cellular energy coenzyme used in anti-aging and recovery clinics. Evidence is early-stage — understand limitations before starting.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#C27700', fontSize: 13 }}>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                  <span style={{ color: '#61707A' }}>4.2 evidence rating</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <strong style={{ fontSize: 14, color: '#172026' }}>Pros</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#61707A', fontSize: 14 }}>
                      <li>Growing research base</li><li>Wellness clinic access</li>
                    </ul>
                  </div>
                  <div>
                    <strong style={{ fontSize: 14, color: '#172026' }}>Cons</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#61707A', fontSize: 14 }}>
                      <li>Limited RCT data</li><li>Higher cost</li>
                    </ul>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/go/nad" rel="sponsored nofollow" style={s.btn.primary}>See offers</Link>
                  <Link href="/nad-injections/" style={s.btn.secondary}>Read guide</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
      <section style={s.section} id="comparison">
        <div style={{ ...s.container, display: 'grid', gap: '1.25rem', alignItems: 'start' }} className="comparison-grid">
          <div>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
              <h2 style={s.h2}>Side-by-side comparison</h2>
              <p style={{ ...s.p, maxWidth: '70ch' }}>Quick reference for how the major injection therapy categories compare on evidence, cost, and access type.</p>
            </div>
            <div style={{ ...s.card, overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.9fr 0.8fr 1fr', alignItems: 'center', padding: '0.9rem 1rem', background: '#F1F6F8', borderBottom: '1px solid #E4EDF1', gap: '0.75rem' }}>
                {['Program', 'Rating', 'Best For', 'Rx Req.', 'Action'].map(h => (
                  <span key={h} style={{ fontSize: 12, color: '#85929A', textTransform: 'uppercase', letterSpacing: '0.03em', fontWeight: 500 }}>{h}</span>
                ))}
              </div>
              {[
                { name: 'GLP-1 Programs',    desc: 'Weight management',       rating: '9.4', best: 'Obesity / BMI', rx: 'Yes', href: '/go/glp1',   guide: '/glp1-injections/', primary: true },
                { name: 'B12 Programs',      desc: 'Deficiency treatment',    rating: '8.8', best: 'Deficiency',    rx: 'Yes', href: '/go/b12',    guide: '/b12-injections/' },
                { name: 'Sermorelin',        desc: 'Hormone optimization',    rating: '8.3', best: 'Anti-aging',    rx: 'Yes', href: '/go/sermorelin', guide: '/sermorelin-injections/' },
                { name: 'NAD+ Programs',     desc: 'Cellular energy',         rating: '7.9', best: 'Wellness',      rx: 'No',  href: '/go/nad',    guide: '/nad-injections/' },
                { name: 'Lipotropic (MIC)',  desc: 'Fat metabolism',          rating: '7.5', best: 'Weight support',rx: 'No',  href: '/go/lipotropic', guide: '/lipotropic-injections/' },
              ].map((row, i) => (
                <div key={row.name} style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.9fr 0.8fr 1fr', alignItems: 'center', padding: '0.875rem 1rem', borderBottom: i < 4 ? '1px solid #E4EDF1' : 'none', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 14, color: '#172026' }}>{row.name}</div>
                    <div style={{ fontSize: 12, color: '#85929A', marginTop: 2 }}>{row.desc}</div>
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 500, color: '#087E8B' }}>{row.rating}</span>
                  <span style={{ fontSize: 13, color: '#61707A' }}>{row.best}</span>
                  <span style={{ fontSize: 13, color: '#61707A' }}>{row.rx}</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Link href={row.href} rel="sponsored nofollow" style={{ ...s.btn.primary, minHeight: 36, padding: '0 0.75rem', fontSize: 13 }}>
                      View deal
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ ...s.card, padding: '1rem' }}>
            <h3 style={s.h3}>How we rate programs</h3>
            <p style={{ ...s.p, marginTop: '0.5rem' }}>Ratings reflect clinical evidence strength, real-world provider access, cost-to-benefit, and transparency of the program — not commission size.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginTop: '1rem' }}>
              <span style={s.chip('teal')}><i className="fa-regular fa-square-check"></i> Evidence quality</span>
              <span style={s.chip('teal')}><i className="fa-regular fa-square-check"></i> Cost transparency</span>
              <span style={s.chip('indigo')}><i className="fa-regular fa-square-check"></i> Provider access</span>
              <span style={s.chip('coral')}><i className="fa-regular fa-triangle-exclamation"></i> Caveats noted</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 1rem', marginTop: '1rem', background: 'rgba(51,78,172,0.07)', border: '1px solid #D8E3E8', borderRadius: 8 }}>
              <i className="fa-regular fa-stethoscope" style={{ color: '#334EAC', marginTop: 2, flexShrink: 0 }}></i>
              <div>
                <strong style={{ fontSize: 14, color: '#172026' }}>Medical note:</strong>
                <p style={{ ...s.p, marginTop: '0.25rem' }}>These are educational ratings. Always consult a qualified healthcare provider before starting any injection program.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── EDITORIAL TRUST ──────────────────────────────────────── */}
      <section style={s.section} id="editorial">
        <div style={s.container}>
          <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
            <h2 style={s.h2}>Editorial approach</h2>
            <p style={{ ...s.p, maxWidth: '70ch' }}>We explain how programs are evaluated, how affiliate links work, and when you should consult a professional instead of relying on a website.</p>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="grid-3">
            {[
              { chip: ['teal', 'fa-regular fa-shield-check', 'Editorial process'], title: 'How programs get shortlisted', body: 'We look at clinical evidence, provider licensing, cost transparency, and what the FDA and NIH say — not which program has the best commission rate.' },
              { chip: ['indigo', 'fa-regular fa-circle-info', 'Disclosure'], title: 'How affiliate links work', body: 'If you click a link and enroll in a program, we may earn a commission. This never raises your cost and does not change our evaluation criteria.' },
              { chip: ['coral', 'fa-regular fa-triangle-exclamation', 'Health reminder'], title: 'When to consult a professional', body: 'Injection therapy is a medical intervention. This site is for education — not diagnosis or treatment. Always work with a licensed provider.' },
            ].map(({ chip: [color, icon, label], title, body }) => (
              <article key={title} style={{ ...s.card, overflow: 'hidden' }}>
                <div style={{ aspectRatio: '16/10', background: '#E7EEF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={icon} style={{ fontSize: 36, color: color === 'teal' ? '#087E8B' : color === 'indigo' ? '#334EAC' : '#E45A44', opacity: 0.5 }}></i>
                </div>
                <div style={{ padding: '1rem', display: 'grid', gap: '0.65rem' }}>
                  <span style={s.chip(color as 'teal' | 'indigo' | 'coral' | 'gray')}><i className={icon}></i> {label}</span>
                  <h3 style={s.h3}>{title}</h3>
                  <p style={s.p}>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────── */}
      <section style={s.section} id="newsletter">
        <div style={s.container}>
          <div style={{ ...s.card, background: '#F1F6F8', padding: '1.5rem', display: 'grid', gap: '1rem' }}>
            <div>
              <h2 style={s.h2}>Stay updated on injection therapy</h2>
              <p style={{ ...s.p, marginTop: '0.5rem' }}>New program reviews, cost changes, and FDA updates — delivered to your inbox when it matters.</p>
            </div>
            <form style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <input
                type="email"
                placeholder="Enter your email for program updates"
                aria-label="Email address"
                style={{ flex: '1 1 260px', minHeight: 50, borderRadius: 8, border: '1px solid #D8E3E8', padding: '0 0.95rem', background: '#fff', color: '#172026', fontSize: 14 }}
              />
              <button type="submit" style={s.btn.primary}>
                <i className="fa-regular fa-envelope" style={{ fontSize: 13 }}></i> Subscribe
              </button>
            </form>
            <p style={{ ...s.p, fontSize: 12, color: '#85929A' }}>No spam. Unsubscribe any time. See our <Link href="/privacy/" style={{ color: '#334EAC', textDecoration: 'underline' }}>privacy policy</Link>.</p>
          </div>
        </div>
      </section>

      {/* ── MOBILE NAV ───────────────────────────────────────────── */}
      <nav style={{ position: 'sticky', bottom: 0, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '0.4rem', padding: '0.625rem', background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(10px)', borderTop: '1px solid #E4EDF1', marginTop: '1.5rem' }} className="lg:hidden" aria-label="Mobile navigation">
        {[
          { href: '/', icon: 'fa-solid fa-house', label: 'Home' },
          { href: '/injection-types/', icon: 'fa-regular fa-star', label: 'Types' },
          { href: '/b12-injections/', icon: 'fa-regular fa-droplet', label: 'B12' },
          { href: '/glp1-injections/', icon: 'fa-solid fa-weight-scale', label: 'GLP-1' },
          { href: '/blog/', icon: 'fa-regular fa-file-lines', label: 'Blog' },
        ].map(item => (
          <Link key={item.href} href={item.href} style={{ minHeight: 44, display: 'grid', placeItems: 'center', gap: '0.25rem', borderRadius: 8, color: '#61707A', textDecoration: 'none', fontSize: 12, gridTemplateRows: 'auto auto' }}>
            <i className={item.icon} style={{ fontSize: 18 }}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1.05fr 0.95fr; }
          .topbar-row { grid-template-columns: 1.2fr 0.8fr; align-items: center; }
          .comparison-grid { grid-template-columns: 1.2fr 0.8fr; }
          .grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1100px) {
          .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .category-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        .category-card-link:hover { border-color: rgba(8,126,139,0.4) !important; }
      `}</style>
    </>
  )
}
