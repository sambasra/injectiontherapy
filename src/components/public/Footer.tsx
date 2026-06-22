import Link from 'next/link'
import { footerNav } from '@/data/navigation'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#172026] text-gray-400 mt-20">
      {/* Medical disclaimer */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs leading-relaxed text-gray-400">
            <strong className="text-gray-300">Medical Disclaimer:</strong> This website is for educational
            purposes only and does not provide medical advice. Always consult a qualified healthcare
            provider before starting any injection therapy or treatment program. Some links on this site
            may be affiliate links — we may earn a commission if you choose to purchase through them.{' '}
            <Link href="/medical-disclaimer/" className="underline hover:text-gray-200 transition-colors">
              Full Medical Disclaimer
            </Link>
            {' | '}
            <Link href="/affiliate-disclosure/" className="underline hover:text-gray-200 transition-colors">
              Affiliate Disclosure
            </Link>
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-semibold text-white text-lg mb-3">
              <span className="text-brand-400">Injection</span>Therapy.org
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              An educational resource for injection therapy information, programs, and costs.
              Not a medical provider.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Injection Types</h3>
            <ul className="space-y-2">
              {footerNav.categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {year} InjectionTherapy.org. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Educational purposes only. Not medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
