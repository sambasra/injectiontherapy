import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Admin Login',
  robots: { index: false, follow: false },
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const session = await getSession()
  if (session.isLoggedIn) redirect('/admin')

  const { error } = await searchParams

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center px-4">
      <div className="bg-white border border-[#E7EEF2] rounded-lg p-8 w-full max-w-sm">
        <div className="mb-6">
          <div className="text-lg font-medium text-[#172026] mb-1">
            <span className="text-brand-500">IT</span> Admin
          </div>
          <p className="text-sm text-gray-400">Sign in to your account</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2.5 rounded-lg mb-4">
            {error === 'invalid' ? 'Invalid email or password.' : 'An error occurred. Please try again.'}
          </div>
        )}

        <form action="/api/auth/login" method="post" className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#172026] mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#172026] mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full bg-[#F7FAFC] border border-[#E7EEF2] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
