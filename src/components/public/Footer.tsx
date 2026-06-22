import Link from 'next/link'
import { footerNav } from '@/data/navigation'

export default function Footer() {
  return (
    <footer className="bg-[#172026] text-white">
      <div className="site-shell py-12 sm:py-16">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div className="max-w-[360px]">
            <Link href="/" className="text-xl font-semibold text-white no-underline">
              InjectionTherapy<span className="text-[#73d4c8]">.org</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-white/65">
              Independent educational guides to injection therapies, evidence, access, safety questions, and costs.
            </p>
            <p className="mt-4 text-sm font-medium text-white/90">Not a healthcare provider.</p>
          </div>

          <FooterColumn title="Injection types" links={footerNav.categories} />
          <FooterColumn title="About" links={footerNav.company} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>

        <div className="grid gap-6 py-8 text-xs leading-5 text-white/55 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-[850px]">
            <strong className="font-semibold text-white/80">Medical disclaimer:</strong> Content is for educational purposes only and is not medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional. Some links may be affiliate links; compensation does not change the price you pay.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
            <Link href="/medical-disclaimer/" className="footer-link">Medical disclaimer</Link>
            <Link href="/affiliate-disclosure/" className="footer-link">Affiliate disclosure</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} InjectionTherapy.org</span>
          <span>Evidence before treatment.</span>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="footer-link">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
