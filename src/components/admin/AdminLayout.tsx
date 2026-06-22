'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Dashboard',   href: '/admin',              icon: '▣' },
  { label: 'Offers',      href: '/admin/offers',        icon: '⊞' },
  { label: 'Clicks',      href: '/admin/clicks',        icon: '↗' },
  { label: 'Conversions', href: '/admin/conversions',   icon: '$' },
  { label: 'Pages',       href: '/admin/pages',         icon: '≡' },
  { label: 'Campaigns',   href: '/admin/campaigns',     icon: '◎' },
  { label: 'Sites',       href: '/admin/sites',         icon: '⊕' },
  { label: 'Settings',    href: '/admin/settings',      icon: '⚙' },
]

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-[#E7EEF2] flex flex-col fixed top-0 left-0 bottom-0 z-40">
        <div className="h-14 flex items-center px-5 border-b border-[#E7EEF2]">
          <Link href="/admin" className="font-medium text-[#172026] text-sm">
            <span className="text-brand-500">IT</span> Admin
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-brand-50 text-brand-600 font-medium'
                    : 'text-gray-500 hover:text-[#172026] hover:bg-[#F7FAFC]'
                )}
              >
                <span className="text-xs w-4 text-center">{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="p-3 border-t border-[#E7EEF2]">
          <form action="/api/auth/logout" method="post">
            <button
              type="submit"
              className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-[#172026] rounded-lg hover:bg-[#F7FAFC] flex items-center gap-2 transition-colors"
            >
              <span className="text-xs w-4 text-center">←</span> Log out
            </button>
          </form>
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-[#172026] rounded-lg hover:bg-[#F7FAFC] mt-0.5 transition-colors"
            target="_blank"
          >
            <span className="text-xs w-4 text-center">↗</span> View Site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-56 flex flex-col min-h-screen">
        <main className="flex-1 p-6 max-w-[1200px]">{children}</main>
      </div>
    </div>
  )
}
