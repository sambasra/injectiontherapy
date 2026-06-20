'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: '📊' },
  { label: 'Offers', href: '/admin/offers', icon: '🔗' },
  { label: 'Clicks', href: '/admin/clicks', icon: '📈' },
  { label: 'Conversions', href: '/admin/conversions', icon: '💰' },
  { label: 'Pages', href: '/admin/pages', icon: '📄' },
  { label: 'Campaigns', href: '/admin/campaigns', icon: '🎯' },
  { label: 'Sites', href: '/admin/sites', icon: '🌐' },
  { label: 'Settings', href: '/admin/settings', icon: '⚙️' },
]

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col fixed top-0 left-0 bottom-0 z-40">
        <div className="h-14 flex items-center px-5 border-b border-gray-100">
          <Link href="/admin" className="font-bold text-gray-900 text-sm">
            IT Admin
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
                    ? 'bg-brand-50 text-brand-700 font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="p-3 border-t border-gray-100">
          <form action="/api/auth/logout" method="post">
            <button
              type="submit"
              className="w-full text-left px-3 py-2 text-sm text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50 flex items-center gap-2"
            >
              <span>🚪</span> Log out
            </button>
          </form>
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50 mt-0.5"
            target="_blank"
          >
            <span>🌐</span> View Site
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
