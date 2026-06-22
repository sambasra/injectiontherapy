import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, HelpCircle } from 'lucide-react'
import MarqueeTicker from '@/components/public/MarqueeTicker'
import ProgramCarousel from '@/components/public/ProgramCarousel'
import InjectionFilter from '@/components/public/InjectionFilter'

export const metadata: Metadata = {
  title: 'Injection Therapy Guide: B12, GLP-1, NAD & More',
  description:
    'Compare B12, GLP-1, NAD+, Sermorelin, Glutathione and Lipotropic injection programs. Educational reviews, cost comparisons and provider guides.',
  alternates: { canonical: '/' },
}

const JUMP_LINKS = [
  { label: 'Browse Injection Types', id: 'browse' },
  { label: 'Top Programs',           id: 'top-programs' },
  { label: 'Resources',              id: 'resources' },
  { label: 'All Injection Types',    id: 'all-types' },
]

const SMALL_CARDS = [
  { title: 'Compare All Types',   href: '/injection-types/', grad: 'linear-gradient(135deg,#eefab3,#bde6af)' },
  { title: 'GLP-1 Weight Loss',   href: '/glp1-injections/', grad: 'linear-gradient(135deg,#bde6af,#599bd1)' },
  { title: 'Medical Disclaimer',  href: '/medical-disclaimer/', grad: 'linear-gradient(135deg,#f6f6f1,#eefab3)' },
  { title: 'Find a Provider',     href: '/contact/', grad: 'linear-gradient(135deg,#599bd1,#bde6af)' },
]

const SPLASH_TILES = [
  {
    eyebrow: 'B12 Injections',
    title: 'Well-studied therapy for deficiency, nerve health, and energy. Affordable and widely available.',
    href: '/b12-injections/',
    grad: 'linear-gradient(135deg,#eefab3 0%,#bde6af 100%)',
    isLarge: true,
  },
  {
    eyebrow: 'GLP-1 Programs',
    title: 'FDA-approved weight management with semaglutide & tirzepatide — the strongest clinical evidence.',
    href: '/glp1-injections/',
    grad: 'linear-gradient(135deg,#bde6af 0%,#599bd1 100%)',
    isLarge: false,
  },
  {
    eyebrow: 'How Programs Work',
    title: 'Get the details on how we rate programs — from evidence quality to cost transparency.',
    href: '/injection-types/',
    grad: 'linear-gradient(135deg,#f6f6f1 0%,#eefab3 100%)',
    isLarge: false,
  },
  {
    eyebrow: 'NAD+ Therapy',
    title: 'Emerging cellular energy and longevity research. Understand the evidence before you start.',
    href: '/nad-injections/',
    grad: 'linear-gradient(135deg,#599bd1 0%,#bde6af 100%)',
    isLarge: true,
  },
]

const RESOURCE_CARDS = [
  {
    title: 'Educational Blog',
    desc: 'Research-backed articles on injection therapy, costs, and what the science actually says.',
    href: '/blog/',
    cta: 'Read the blog',
    grad: 'linear-gradient(135deg,#eefab3,#bde6af)',
  },
  {
    title: 'Medical Safety Guide',
    desc: 'Everything you need to know before starting any injection program — risks, red flags, and when to see a doctor.',
    href: '/medical-disclaimer/',
    cta: 'Stay informed',
    grad: 'linear-gradient(135deg,#bde6af,#599bd1)',
  },
  {
    title: 'About This Site',
    desc: 'How we select programs, how affiliate links work, and the editorial standards we hold ourselves to.',
    href: '/about/',
    cta: 'Our approach',
    grad: 'linear-gradient(135deg,#599bd1,#eefab3)',
  },
]

const MORE_TILES = [
  {
    eyebrow: 'Glutathione',
    title: 'Master antioxidant therapy for skin brightening, detox support, and immune health.',
    href: '/glutathione-injections/',
    grad: 'linear-gradient(135deg,#eefab3,#bde6af)',
    isLarge: true,
  },
  {
    eyebrow: 'Lipotropic (MIC)',
    title: 'Fat-metabolism injections commonly paired with supervised weight loss programs.',
    href: '/lipotropic-injections/',
    grad: 'linear-gradient(135deg,#f6f6f1,#eefab3)',
    isLarge: false,
  },
  {
    eyebrow: 'Sermorelin',
    title: 'Growth hormone-releasing peptide therapy. Understand what it does and who it\'s for.',
    href: '/sermorelin-injections/',
    grad: 'linear-gradient(135deg,#eefab3,#f6f6f1)',
    isLarge: false,
  },
  {
    eyebrow: 'Testosterone',
    title: 'Hormone replacement therapy for diagnosed low T. Requires blood work and ongoing monitoring.',
    href: '/testosterone-injections/',
    grad: 'linear-gradient(135deg,#bde6af,#599bd1)',
    isLarge: true,
  },
]

export default function HomePage() {
  return (
    <div className="antialiased text-black bg-white">

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <MarqueeTicker />

      {/* ── HERO TITLE ───────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 text-center py-8 md:py-12">
        <h1 className="text-[clamp(28px,5vw,52px)] leading-tight font-bold text-black tracking-tight">
          Helpful injection therapy guides,{' '}
          <span className="gradient-text">built with you in mind</span>
        </h1>
        <p className="mt-4 text-[#555] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Compare B12, GLP-1, NAD+, Sermorelin, Glutathione, and Lipotropic programs. Evidence-based. Cost-transparent. Always educational.
        </p>
      </section>

      {/* ── STICKY JUMP LINKS ────────────────────────────────────── */}
      <div className="sticky top-[68px] bg-white/90 backdrop-blur-md z-30 border-b border-[#e0e0d8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <ul className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap text-sm font-medium text-[#555]">
            {JUMP_LINKS.map(({ label, id }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-black transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── HERO BANNER ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="w-full rounded-[2rem] overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#bde6af 0%,#eefab3 50%,#599bd1 100%)', minHeight: 200 }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-black mb-4">
                Research-based · FTC disclosed
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-black max-w-lg leading-tight">
                Injection therapy education you can trust
              </h2>
              <p className="mt-3 text-black/70 max-w-md text-sm md:text-base leading-relaxed">
                Every program is evaluated on evidence strength, provider access, and cost transparency — not commission size.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/injection-types/"
                className="inline-flex items-center gap-2 bg-black text-[#eefab3] px-5 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
                See All Types
              </Link>
              <Link href="/glp1-injections/"
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-semibold text-sm border border-black/10 hover:bg-[#f6f6f1] transition-colors">
                GLP-1 Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SMALL CARDS ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SMALL_CARDS.map((card, i) => (
            <Link key={i} href={card.href}
              className="group rounded-[1.5rem] overflow-hidden border border-[#e0e0d8] hover:shadow-lg transition-all block bg-white">
              <div className="h-36 md:h-44 flex items-center justify-center" style={{ background: card.grad }}>
                <ExternalLink className="w-8 h-8 text-black/40 group-hover:text-black/70 transition-colors" />
              </div>
              <div className="p-5 flex justify-between items-center bg-white">
                <span className="text-base font-medium text-black">{card.title}</span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f6f6f1] group-hover:bg-[#eefab3] transition-colors">
                  <ExternalLink className="w-4 h-4 text-black" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECTION: BROWSE INJECTION TYPES ──────────────────────── */}
      <div id="browse" className="scroll-mt-32">
        <section className="max-w-7xl mx-auto px-4 md:px-8 text-center py-10 md:py-16">
          <div className="inline-flex items-center gap-2 bg-[#eefab3] rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-black mb-5">
            7 Injection Types
          </div>
          <h2 className="text-[clamp(26px,4vw,44px)] text-black font-bold tracking-tight mb-6">Browse injection types</h2>
          <Link href="/injection-types/"
            className="inline-flex items-center gap-2 text-black font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
            style={{ background: 'linear-gradient(135deg,#bde6af,#599bd1)' }}>
            Compare all types
          </Link>
        </section>

        {/* Splash tiles */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SPLASH_TILES.map((tile, i) => (
              <Link key={i} href={tile.href}
                className="group block rounded-[2rem] overflow-hidden p-8 md:p-10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
                style={{ background: tile.grad }}>
                {/* Placeholder visual */}
                <div className={`w-full rounded-2xl mb-8 flex items-center justify-center bg-white/40 ${tile.isLarge ? 'h-48 md:h-64' : 'h-32 md:h-40'}`}>
                  <span className="text-4xl font-black text-black/20 tracking-tighter">{tile.eyebrow.split(' ')[0]}</span>
                </div>
                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-black/50 mb-3">{tile.eyebrow}</p>
                <h3 className={`${tile.isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-semibold text-black mb-6 leading-snug max-w-xs`}>
                  {tile.title}
                </h3>
                <div className="mt-auto w-11 h-11 rounded-full bg-white flex items-center justify-center text-black shadow-sm group-hover:shadow-md transition-shadow">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── SECTION: TOP PROGRAMS (CAROUSEL) ─────────────────────── */}
      <div id="top-programs" className="scroll-mt-32">
        <section className="max-w-7xl mx-auto px-4 md:px-8 text-center py-10 md:py-16">
          <div className="inline-flex items-center gap-2 bg-[#eefab3] rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-black mb-5">
            Evidence-Ranked
          </div>
          <h2 className="text-[clamp(26px,4vw,44px)] text-black font-bold tracking-tight mb-3">Top programs by category</h2>
          <p className="text-[#555] text-base max-w-xl mx-auto">Ranked by evidence quality, provider access, and cost-to-benefit — not by who pays us the most.</p>
        </section>

        <section className="py-12 px-4 md:px-20" style={{ background: 'linear-gradient(135deg,#eefab3 0%,#f6f6f1 50%,#bde6af 100%)' }}>
          <div className="max-w-5xl mx-auto">
            <ProgramCarousel />
          </div>
        </section>
      </div>

      {/* ── SECTION: TWO COLUMNS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(24px,4vw,40px)] text-black font-bold tracking-tight">Learn before you inject</h2>
          <p className="mt-3 text-[#555] max-w-xl mx-auto">Understanding the evidence behind injection therapy makes you a better patient — and a safer one.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              href: '/injection-types/',
              grad: 'linear-gradient(135deg,#eefab3,#bde6af)',
              title: 'All injection types',
              desc: 'Side-by-side evidence ratings, cost ranges, and access requirements for every major injection category.',
              cta: 'Compare types',
            },
            {
              href: '/b12-injections/',
              grad: 'linear-gradient(135deg,#bde6af,#599bd1)',
              title: 'Start with B12',
              desc: 'The most widely available injection therapy with the strongest evidence base. A great starting point.',
              cta: 'Read the B12 guide',
            },
          ].map((card, i) => (
            <Link key={i} href={card.href}
              className="group block rounded-[2rem] overflow-hidden bg-white border border-[#e0e0d8] hover:shadow-xl transition-all">
              <div className="h-48 md:h-56" style={{ background: card.grad }} />
              <div className="p-7 md:p-9">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-3">{card.title}</h3>
                <p className="text-[#555] mb-5 text-sm md:text-base leading-relaxed">{card.desc}</p>
                <span className="inline-flex items-center font-semibold text-black text-sm group-hover:gap-2 transition-all">
                  {card.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECTION: RESOURCES ───────────────────────────────────── */}
      <div id="resources" className="scroll-mt-32">
        <section className="bg-[#f6f6f1] py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#eefab3] rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-black mb-5">
              Educational Resources
            </div>
            <h2 className="text-[clamp(26px,4vw,44px)] text-black font-bold tracking-tight mb-12">Guides, safety info, and more</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
              {RESOURCE_CARDS.map((card, i) => (
                <Link key={i} href={card.href}
                  className="group block rounded-[2rem] overflow-hidden bg-white border border-[#e0e0d8] hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] flex items-center justify-center" style={{ background: card.grad }}>
                    <ExternalLink className="w-10 h-10 text-black/30 group-hover:text-black/60 transition-colors" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-black mb-2">{card.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed mb-5">{card.desc}</p>
                    <span className="inline-flex items-center gap-2 text-black font-semibold text-sm border-2 border-black rounded-full px-5 py-2 group-hover:bg-black group-hover:text-white transition-colors">
                      {card.cta} <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION: MORE INJECTION TYPES ────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <h2 className="text-[clamp(24px,4vw,40px)] text-black font-bold tracking-tight mb-4">Discover more injection therapies</h2>
        <p className="text-[#555] max-w-xl mx-auto mb-12 text-sm md:text-base">Glutathione, Lipotropic, Sermorelin, and Testosterone — each with its own evidence base and use case.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {MORE_TILES.map((tile, i) => (
            <Link key={i} href={tile.href}
              className="group block rounded-[2rem] overflow-hidden p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
              style={{ background: tile.grad }}>
              <div className={`w-full rounded-2xl mb-7 flex items-center justify-center bg-white/40 ${tile.isLarge ? 'h-44 md:h-56' : 'h-28 md:h-36'}`}>
                <span className="text-3xl font-black text-black/20 tracking-tighter">{tile.eyebrow.split(' ')[0]}</span>
              </div>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-black/50 mb-3">{tile.eyebrow}</p>
              <h3 className={`${tile.isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-semibold text-black mb-6 leading-snug max-w-xs`}>
                {tile.title}
              </h3>
              <div className="mt-auto w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <ExternalLink className="w-5 h-5 text-black" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECTION: ALL INJECTION TYPES (FILTERABLE) ────────────── */}
      <div id="all-types" className="scroll-mt-32">
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-[clamp(26px,4vw,44px)] text-center text-black font-bold tracking-tight mb-14">
            All injection therapy guides
          </h2>
          <InjectionFilter />
        </section>
      </div>

      {/* ── NEWSLETTER ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="rounded-[2rem] p-8 md:p-14 grid gap-6 md:grid-cols-2 md:items-center"
          style={{ background: 'linear-gradient(135deg,#bde6af 0%,#599bd1 100%)' }}>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Stay updated on injection therapy</h2>
            <p className="text-black/70 text-sm leading-relaxed">
              New program reviews, FDA updates, and cost changes — delivered when it matters. No spam.
            </p>
          </div>
          <form className="flex flex-wrap gap-3">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 min-w-0 min-h-[50px] rounded-xl border border-black/15 bg-white/80 px-4 text-black text-sm outline-none focus:bg-white"
            />
            <button type="submit"
              className="inline-flex items-center gap-2 min-h-[50px] px-6 rounded-xl font-semibold text-sm bg-black text-[#eefab3] hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-10">
        <div className="bg-[#f6f6f1] rounded-2xl p-5 flex items-start gap-4">
          <HelpCircle className="w-5 h-5 text-[#888] flex-shrink-0 mt-0.5" />
          <p className="text-[#555] text-sm leading-relaxed">
            This site provides educational information only — it is not medical advice. Always consult a qualified healthcare provider before starting any injection therapy program.{' '}
            <Link href="/medical-disclaimer/" className="text-black underline hover:no-underline">Medical Disclaimer</Link>{' '}·{' '}
            <Link href="/affiliate-disclosure/" className="text-black underline hover:no-underline">Affiliate Disclosure</Link>
          </p>
        </div>
      </section>

      {/* ── MOBILE BOTTOM NAV ────────────────────────────────────── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 bg-white/97 backdrop-blur-xl border-t border-[#e0e0d8]"
        style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}>
        {[
          { href: '/',                 emoji: '🏠', label: 'Home' },
          { href: '/injection-types/', emoji: '💉', label: 'Types' },
          { href: '/b12-injections/',  emoji: '⚡', label: 'B12' },
          { href: '/glp1-injections/', emoji: '⚖️', label: 'GLP-1' },
          { href: '/blog/',            emoji: '📖', label: 'Blog' },
        ].map(item => (
          <Link key={item.href} href={item.href}
            className="min-h-[52px] grid place-items-center gap-0.5 text-[10px] font-medium text-[#555] no-underline"
            style={{ gridTemplateRows: 'auto auto' }}>
            <span className="text-lg leading-none">{item.emoji}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Spacer for mobile nav */}
      <div className="h-16 lg:hidden" />
    </div>
  )
}
