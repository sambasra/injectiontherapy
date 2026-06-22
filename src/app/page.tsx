import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Injection Therapy Guide: B12, GLP-1, NAD & More',
  description:
    'Compare B12, GLP-1, NAD+, Sermorelin, Glutathione and Lipotropic injection programs. Educational reviews, cost comparisons and provider guides.',
  alternates: { canonical: '/' },
}

const s = {
  container: { maxWidth: 1220, margin: '0 auto', padding: '0 1rem' } as React.CSSProperties,
  card: { background: '#fff', border: '1px solid #e0e0d8', borderRadius: 12 } as React.CSSProperties,
  chip: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: 12, padding: '0.3rem 0.65rem', borderRadius: 999, fontWeight: 500, background: '#eefab3', color: '#000' } as React.CSSProperties,
  btn: {
    primary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', minHeight: 44, padding: '0 1.25rem', borderRadius: 10, background: 'linear-gradient(135deg, #bde6af, #599bd1)', color: '#000', border: 'none', fontSize: 14, fontWeight: 600, textDecoration: 'none', cursor: 'pointer' } as React.CSSProperties,
    secondary: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', minHeight: 44, padding: '0 1.25rem', borderRadius: 10, background: '#f6f6f1', color: '#000', border: '1px solid #e0e0d8', fontSize: 14, fontWeight: 500, textDecoration: 'none', cursor: 'pointer' } as React.CSSProperties,
  },
  h2: { margin: 0, fontSize: 'clamp(20px, 3vw, 26px)', lineHeight: 1.25, fontWeight: 700, color: '#000' } as React.CSSProperties,
  h3: { margin: 0, fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.4, fontWeight: 600, color: '#000' } as React.CSSProperties,
  p: { margin: 0, color: '#555', fontSize: 14, lineHeight: 1.6 } as React.CSSProperties,
  section: { padding: '2.5rem 0 0' } as React.CSSProperties,
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ padding: '2rem 0 1.5rem', background: '#fff' }}>
        <div style={{ ...s.container, display: 'grid', gap: '1.5rem', alignItems: 'start' }} className="hero-grid">

          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: 12, fontWeight: 500, color: '#000', background: '#eefab3', padding: '0.35rem 0.875rem', borderRadius: 999, marginBottom: '1.25rem' }}>
              <i className="fa-regular fa-circle-check"></i>
              Research-based educational content
            </div>
            <h1 style={{ margin: 0, fontSize: 'clamp(28px, 5vw, 46px)', lineHeight: 1.15, fontWeight: 700, color: '#000', maxWidth: '15ch' }}>
              Injection Therapy Programs That Are{' '}
              <span className="gradient-text">Worth Knowing About</span>
            </h1>
            <p style={{ ...s.p, marginTop: '1rem', maxWidth: '58ch', fontSize: 15 }}>
              Compare B12, GLP-1, NAD+, Sermorelin, Glutathione, and Lipotropic injection programs. We explain what each does, what the evidence says, typical costs, and how to find a qualified provider.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
              <Link href="/injection-types/" style={s.btn.primary}>
                <i className="fa-regular fa-star" style={{ fontSize: 13 }}></i> See All Types
              </Link>
              <Link href="/glp1-injections/" style={s.btn.secondary}>
                <i className="fa-regular fa-table-columns" style={{ fontSize: 13 }}></i> GLP-1 Guide
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginTop: '1.25rem' }}>
              <span style={s.chip}><i className="fa-regular fa-shield-heart"></i> Trust-first content</span>
              <span style={s.chip}><i className="fa-solid fa-laptop-medical"></i> Medical education</span>
              <span style={s.chip}><i className="fa-regular fa-circle-info"></i> FTC disclosed</span>
            </div>

            {/* Disclosure */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 1rem', marginTop: '1.25rem', background: '#f6f6f1', border: '1px solid #e0e0d8', borderRadius: 10 }}>
              <i className="fa-regular fa-circle-info" style={{ color: '#599bd1', marginTop: 2, flexShrink: 0 }}></i>
              <div>
                <strong style={{ fontSize: 13, color: '#000' }}>Affiliate disclosure:</strong>
                <p style={{ ...s.p, marginTop: '0.2rem', fontSize: 13 }}>
                  Some links earn a commission at no extra cost to you. Our educational content stays independent.{' '}
                  <Link href="/affiliate-disclosure/" style={{ color: '#599bd1', textDecoration: 'underline' }}>Full disclosure →</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right — featured card */}
          <article style={{ ...s.card, overflow: 'hidden' }}>
            <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #bde6af 0%, #599bd1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', color: '#000' }}>
                <i className="fa-regular fa-syringe" style={{ fontSize: 48, marginBottom: 12, opacity: 0.7 }}></i>
                <div style={{ fontSize: 14, fontWeight: 500 }}>GLP-1 Weight Loss Programs</div>
              </div>
            </div>
            <div style={{ padding: '1.25rem', display: 'grid', gap: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div style={{ flex: 1 }}>
                  <span style={s.chip}><i className="fa-regular fa-award"></i> Editor&apos;s choice</span>
                  <h3 style={{ ...s.h3, marginTop: '0.625rem' }}>Best GLP-1 program for medical weight management</h3>
                  <p style={{ ...s.p, marginTop: '0.4rem', fontSize: 13 }}>Clinically supervised, telehealth-accessible, includes provider consultation and ongoing monitoring.</p>
                </div>
                <div style={{ minWidth: 80, textAlign: 'center', padding: '0.65rem 0.75rem', borderRadius: 10, background: '#eefab3', color: '#000', flexShrink: 0 }}>
                  <strong style={{ display: 'block', fontSize: 24, lineHeight: 1, fontWeight: 700 }}>9.4</strong>
                  <span style={{ fontSize: 11, color: '#555' }}>overall</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem' }}>
                {[['Safety', '9.5'], ['Efficacy', '9.3'], ['Value', '8.9']].map(([k, v]) => (
                  <div key={k} style={{ background: '#f6f6f1', border: '1px solid #e0e0d8', borderRadius: 8, padding: '0.625rem', textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: '#888' }}>{k}</div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: '#000' }}>{v}</div>
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
      <section style={{ ...s.section, background: '#f6f6f1', padding: '2.5rem 0' }}>
        <div style={s.container}>
          <div style={{ marginBottom: '1.5rem', display: 'grid', gap: '0.875rem' }} className="topbar-row">
            <div>
              <h2 style={s.h2}>Browse by injection type</h2>
              <p style={{ ...s.p, marginTop: '0.5rem', maxWidth: '60ch' }}>Each injection category has its own evidence base, cost range, and provider type.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <span style={s.chip}><i className="fa-regular fa-heart"></i> Deficiency treatment</span>
              <span style={s.chip}><i className="fa-solid fa-weight-scale"></i> Weight management</span>
              <span style={s.chip}><i className="fa-regular fa-flask"></i> Wellness & longevity</span>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }} className="category-grid">
            {[
              { href: '/b12-injections/',          icon: 'fa-regular fa-droplet',          title: 'B12 Injections',      desc: 'For deficiency, nerve health and energy. Well-studied and widely available.' },
              { href: '/glp1-injections/',         icon: 'fa-solid fa-weight-scale',        title: 'GLP-1 Injections',    desc: 'FDA-approved for weight management. Requires medical supervision.' },
              { href: '/nad-injections/',          icon: 'fa-regular fa-atom',              title: 'NAD+ Injections',     desc: 'Cellular energy and aging research. Early-stage evidence.' },
              { href: '/sermorelin-injections/',   icon: 'fa-regular fa-chart-line-up',     title: 'Sermorelin',          desc: 'Growth hormone-releasing peptide. Used in anti-aging clinics.' },
              { href: '/glutathione-injections/',  icon: 'fa-regular fa-shield-virus',      title: 'Glutathione',         desc: 'Antioxidant therapy for skin brightening and detox support.' },
              { href: '/lipotropic-injections/',   icon: 'fa-regular fa-fire-flame-curved', title: 'Lipotropic (MIC)',    desc: 'Fat-metabolism injections often paired with weight loss programs.' },
              { href: '/testosterone-injections/', icon: 'fa-regular fa-person-running',    title: 'Testosterone',        desc: 'Hormone replacement therapy. Requires diagnosis and monitoring.' },
            ].map(cat => (
              <Link key={cat.href} href={cat.href}
                style={{ ...s.card, padding: '1.125rem', textDecoration: 'none', display: 'block', background: '#fff' }}
                className="category-card-link">
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: '#eefab3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={cat.icon} style={{ fontSize: 18, color: '#000' }}></i>
                  </div>
                  <h3 style={{ ...s.h3, fontSize: 15 }}>{cat.title}</h3>
                  <p style={{ ...s.p, fontSize: 13 }}>{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP PICKS ────────────────────────────────────────────── */}
      <section style={{ ...s.section, background: '#fff' }} id="top-picks">
        <div style={s.container}>
          <div style={{ display: 'grid', gap: '0.625rem', marginBottom: '1.5rem' }}>
            <h2 style={s.h2}>Top picks by injection category</h2>
            <p style={{ ...s.p, maxWidth: '68ch' }}>Our most-read guides, ranked by evidence quality, provider access, and typical cost. Starting points — not medical recommendations.</p>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }} className="grid-3">
            {/* B12 */}
            <article style={{ ...s.card, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #eefab3, #bde6af)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-regular fa-droplet" style={{ fontSize: 48, color: '#000', opacity: 0.4 }}></i>
              </div>
              <div style={{ padding: '1.125rem', display: 'grid', gap: '0.75rem', flex: 1 }}>
                <span style={s.chip}><i className="fa-regular fa-award"></i> Best for deficiency</span>
                <h3 style={s.h3}>B12 Injection Programs</h3>
                <p style={s.p}>Well-established therapy for pernicious anemia, vegans and people with absorption issues. Get a blood test first.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#000', fontSize: 13 }}>
                  <i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star-half-stroke" style={{ color: '#bde6af' }}></i>
                  <span style={{ color: '#555', fontSize: 12 }}>4.8 evidence rating</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <strong style={{ fontSize: 13, color: '#000' }}>Pros</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#555', fontSize: 13 }}>
                      <li>Strong evidence</li><li>Affordable $20–$80/mo</li><li>Telehealth available</li>
                    </ul>
                  </div>
                  <div>
                    <strong style={{ fontSize: 13, color: '#000' }}>Cons</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#555', fontSize: 13 }}>
                      <li>Narrow if replete</li><li>Test first needed</li>
                    </ul>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  <Link href="/go/b12" rel="sponsored nofollow" style={s.btn.primary}>View deal</Link>
                  <Link href="/b12-injections/" style={s.btn.secondary}>Read guide</Link>
                </div>
              </div>
            </article>

            {/* GLP-1 */}
            <article style={{ ...s.card, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #bde6af, #599bd1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-weight-scale" style={{ fontSize: 48, color: '#000', opacity: 0.35 }}></i>
              </div>
              <div style={{ padding: '1.125rem', display: 'grid', gap: '0.75rem', flex: 1 }}>
                <span style={s.chip}><i className="fa-solid fa-trophy"></i> Best for weight loss</span>
                <h3 style={s.h3}>GLP-1 Telehealth Programs</h3>
                <p style={s.p}>FDA-approved medications (semaglutide, tirzepatide) prescribed through telehealth. Strong clinical evidence for obesity management.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#000', fontSize: 13 }}>
                  <i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i>
                  <span style={{ color: '#555', fontSize: 12 }}>5.0 evidence rating</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <strong style={{ fontSize: 13, color: '#000' }}>Pros</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#555', fontSize: 13 }}>
                      <li>FDA-approved</li><li>Proven outcomes</li><li>Remote prescribing</li>
                    </ul>
                  </div>
                  <div>
                    <strong style={{ fontSize: 13, color: '#000' }}>Cons</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#555', fontSize: 13 }}>
                      <li>Higher monthly cost</li><li>Ongoing Rx needed</li>
                    </ul>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  <Link href="/go/glp1" rel="sponsored nofollow" style={s.btn.primary}>Check price</Link>
                  <Link href="/glp1-injections/" style={s.btn.secondary}>Read guide</Link>
                </div>
              </div>
            </article>

            {/* NAD+ */}
            <article style={{ ...s.card, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #599bd1, #bde6af)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-regular fa-atom" style={{ fontSize: 48, color: '#000', opacity: 0.35 }}></i>
              </div>
              <div style={{ padding: '1.125rem', display: 'grid', gap: '0.75rem', flex: 1 }}>
                <span style={s.chip}><i className="fa-regular fa-wallet"></i> Best emerging therapy</span>
                <h3 style={s.h3}>NAD+ Injection Programs</h3>
                <p style={s.p}>Cellular energy coenzyme used in anti-aging and recovery clinics. Evidence is early-stage — understand limitations before starting.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#000', fontSize: 13 }}>
                  <i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-solid fa-star" style={{ color: '#bde6af' }}></i><i className="fa-regular fa-star" style={{ color: '#bde6af' }}></i>
                  <span style={{ color: '#555', fontSize: 12 }}>4.2 evidence rating</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <strong style={{ fontSize: 13, color: '#000' }}>Pros</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#555', fontSize: 13 }}>
                      <li>Growing research</li><li>Wellness clinic access</li>
                    </ul>
                  </div>
                  <div>
                    <strong style={{ fontSize: 13, color: '#000' }}>Cons</strong>
                    <ul style={{ margin: '0.375rem 0 0', paddingLeft: '1rem', color: '#555', fontSize: 13 }}>
                      <li>Limited RCT data</li><li>Higher cost</li>
                    </ul>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  <Link href="/go/nad" rel="sponsored nofollow" style={s.btn.primary}>See offers</Link>
                  <Link href="/nad-injections/" style={s.btn.secondary}>Read guide</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
      <section style={{ ...s.section, background: '#f6f6f1', padding: '2.5rem 0' }} id="comparison">
        <div style={{ ...s.container, display: 'grid', gap: '1.5rem', alignItems: 'start' }} className="comparison-grid">
          <div>
            <div style={{ display: 'grid', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <h2 style={s.h2}>Side-by-side comparison</h2>
              <p style={{ ...s.p, maxWidth: '68ch' }}>Quick reference for how the major injection therapy categories compare on evidence, cost, and access type.</p>
            </div>
            <div style={{ ...s.card, overflow: 'hidden', background: '#fff' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.9fr 0.8fr 1fr', alignItems: 'center', padding: '0.875rem 1rem', background: '#eefab3', borderBottom: '1px solid #e0e0d8', gap: '0.75rem' }}>
                {['Program', 'Rating', 'Best For', 'Rx Req.', 'Action'].map(h => (
                  <span key={h} style={{ fontSize: 11, color: '#000', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>{h}</span>
                ))}
              </div>
              {[
                { name: 'GLP-1 Programs',   desc: 'Weight management',    rating: '9.4', best: 'Obesity / BMI',   rx: 'Yes', href: '/go/glp1',      guide: '/glp1-injections/' },
                { name: 'B12 Programs',     desc: 'Deficiency treatment', rating: '8.8', best: 'Deficiency',      rx: 'Yes', href: '/go/b12',       guide: '/b12-injections/' },
                { name: 'Sermorelin',       desc: 'Hormone optimization', rating: '8.3', best: 'Anti-aging',      rx: 'Yes', href: '/go/sermorelin', guide: '/sermorelin-injections/' },
                { name: 'NAD+ Programs',    desc: 'Cellular energy',      rating: '7.9', best: 'Wellness',        rx: 'No',  href: '/go/nad',       guide: '/nad-injections/' },
                { name: 'Lipotropic (MIC)', desc: 'Fat metabolism',       rating: '7.5', best: 'Weight support',  rx: 'No',  href: '/go/lipotropic', guide: '/lipotropic-injections/' },
              ].map((row, i) => (
                <div key={row.name} style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.9fr 0.8fr 1fr', alignItems: 'center', padding: '0.875rem 1rem', borderBottom: i < 4 ? '1px solid #e0e0d8' : 'none', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#000' }}>{row.name}</div>
                    <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{row.desc}</div>
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 700, color: '#000' }}>{row.rating}</span>
                  <span style={{ fontSize: 13, color: '#555' }}>{row.best}</span>
                  <span style={{ fontSize: 13, color: '#555' }}>{row.rx}</span>
                  <Link href={row.href} rel="sponsored nofollow" style={{ ...s.btn.primary, minHeight: 36, padding: '0 0.75rem', fontSize: 13 }}>
                    View deal
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ ...s.card, padding: '1.25rem', background: '#fff' }}>
            <h3 style={s.h3}>How we rate programs</h3>
            <p style={{ ...s.p, marginTop: '0.5rem' }}>Ratings reflect clinical evidence strength, real-world provider access, cost-to-benefit, and transparency — not commission size.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              <span style={s.chip}><i className="fa-regular fa-square-check"></i> Evidence quality</span>
              <span style={s.chip}><i className="fa-regular fa-square-check"></i> Cost transparency</span>
              <span style={s.chip}><i className="fa-regular fa-square-check"></i> Provider access</span>
              <span style={s.chip}><i className="fa-regular fa-triangle-exclamation"></i> Caveats noted</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 1rem', marginTop: '1rem', background: '#f6f6f1', border: '1px solid #e0e0d8', borderRadius: 10 }}>
              <i className="fa-regular fa-stethoscope" style={{ color: '#599bd1', marginTop: 2, flexShrink: 0 }}></i>
              <div>
                <strong style={{ fontSize: 13, color: '#000' }}>Medical note:</strong>
                <p style={{ ...s.p, marginTop: '0.25rem', fontSize: 13 }}>These are educational ratings. Always consult a qualified healthcare provider before starting any injection program.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── EDITORIAL TRUST ──────────────────────────────────────── */}
      <section style={{ ...s.section, background: '#fff' }} id="editorial">
        <div style={s.container}>
          <div style={{ display: 'grid', gap: '0.625rem', marginBottom: '1.5rem' }}>
            <h2 style={s.h2}>Editorial approach</h2>
            <p style={{ ...s.p, maxWidth: '68ch' }}>We explain how programs are evaluated, how affiliate links work, and when you should consult a professional instead of relying on a website.</p>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="grid-3">
            {[
              { icon: 'fa-regular fa-shield-check', label: 'Editorial process', title: 'How programs get shortlisted', body: 'We look at clinical evidence, provider licensing, cost transparency, and what the FDA and NIH say — not which program has the best commission rate.' },
              { icon: 'fa-regular fa-circle-info',  label: 'Disclosure',        title: 'How affiliate links work',     body: 'If you click a link and enroll in a program, we may earn a commission. This never raises your cost and does not change our evaluation criteria.' },
              { icon: 'fa-regular fa-triangle-exclamation', label: 'Health reminder', title: 'When to consult a professional', body: 'Injection therapy is a medical intervention. This site is for education — not diagnosis or treatment. Always work with a licensed provider.' },
            ].map(({ icon, label, title, body }) => (
              <article key={title} style={{ ...s.card, overflow: 'hidden', background: '#fff' }}>
                <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #eefab3 0%, #bde6af 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={icon} style={{ fontSize: 36, color: '#000', opacity: 0.4 }}></i>
                </div>
                <div style={{ padding: '1rem', display: 'grid', gap: '0.625rem' }}>
                  <span style={s.chip}><i className={icon}></i> {label}</span>
                  <h3 style={{ ...s.h3, fontSize: 15 }}>{title}</h3>
                  <p style={{ ...s.p, fontSize: 13 }}>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 0 0', background: '#fff' }} id="newsletter">
        <div style={s.container}>
          <div style={{ borderRadius: 16, background: 'linear-gradient(135deg, #bde6af 0%, #599bd1 100%)', padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'grid', gap: '1.25rem' }}>
            <div>
              <h2 style={{ ...s.h2, color: '#000' }}>Stay updated on injection therapy</h2>
              <p style={{ marginTop: '0.5rem', color: '#1a1a1a', fontSize: 14, lineHeight: 1.6 }}>New program reviews, cost changes, and FDA updates — delivered to your inbox when it matters.</p>
            </div>
            <form style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <input
                type="email"
                placeholder="Enter your email for program updates"
                aria-label="Email address"
                style={{ flex: '1 1 240px', minHeight: 50, borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', padding: '0 1rem', background: 'rgba(255,255,255,0.85)', color: '#000', fontSize: 14 }}
              />
              <button type="submit" style={{ ...s.btn.primary, background: '#000', color: '#eefab3', minHeight: 50 }}>
                <i className="fa-regular fa-envelope" style={{ fontSize: 13 }}></i> Subscribe
              </button>
            </form>
            <p style={{ color: '#1a1a1a', fontSize: 12, opacity: 0.7 }}>No spam. Unsubscribe any time. See our <Link href="/privacy/" style={{ color: '#000', textDecoration: 'underline' }}>privacy policy</Link>.</p>
          </div>
        </div>
      </section>

      {/* ── MOBILE BOTTOM NAV ────────────────────────────────────── */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', padding: '0.5rem 0.25rem calc(0.5rem + env(safe-area-inset-bottom))', background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', borderTop: '1px solid #e0e0d8', zIndex: 40 }} className="lg:hidden" aria-label="Mobile navigation">
        {[
          { href: '/',                 icon: 'fa-solid fa-house',       label: 'Home' },
          { href: '/injection-types/', icon: 'fa-regular fa-star',      label: 'Types' },
          { href: '/b12-injections/',  icon: 'fa-regular fa-droplet',   label: 'B12' },
          { href: '/glp1-injections/', icon: 'fa-solid fa-weight-scale',label: 'GLP-1' },
          { href: '/blog/',            icon: 'fa-regular fa-file-lines', label: 'Blog' },
        ].map(item => (
          <Link key={item.href} href={item.href} style={{ minHeight: 48, display: 'grid', placeItems: 'center', gap: '0.2rem', borderRadius: 8, color: '#555', textDecoration: 'none', fontSize: 10, fontWeight: 500, gridTemplateRows: 'auto auto' }}>
            <i className={item.icon} style={{ fontSize: 20, color: '#000' }}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom padding on mobile so content doesn't hide behind nav */}
      <div style={{ height: '4rem' }} className="lg:hidden" />

      <style>{`
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1.05fr 0.95fr; }
          .topbar-row { grid-template-columns: 1.3fr 0.7fr; align-items: center; }
          .comparison-grid { grid-template-columns: 1.25fr 0.75fr; }
          .grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1080px) {
          .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .category-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        .category-card-link:hover { border-color: #bde6af !important; box-shadow: 0 0 0 2px rgba(189,230,175,0.4); }
      `}</style>
    </>
  )
}
