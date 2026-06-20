import type { Metadata } from 'next'
import AdminLayoutClient from '@/components/admin/AdminLayout'

export const metadata: Metadata = {
  title: {
    default: 'Admin — InjectionTherapy.org',
    template: '%s | Admin',
  },
  robots: { index: false, follow: false },
}

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}
