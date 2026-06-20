import { redirect } from 'next/navigation'
import { requireAuth } from '@/lib/auth'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Settings' }

export default async function SettingsPage() {
  let session
  try {
    session = await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="bg-white border border-gray-200 rounded-[10px] p-6 max-w-[600px] space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Account</h2>
          <div className="space-y-1 text-sm text-gray-500">
            <p>Email: <span className="text-gray-800">{session.email}</span></p>
            <p>Role: <span className="text-gray-800 capitalize">{session.role}</span></p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Postback Configuration</h2>
          <p className="text-sm text-gray-500 mb-2">
            Your generic postback endpoint:
          </p>
          <code className="block bg-gray-50 border border-gray-200 rounded px-3 py-2 text-xs font-mono text-gray-700">
            POST /api/postback/generic?token=YOUR_POSTBACK_SECRET_TOKEN&clickid=CLICK_ID&payout=AMOUNT
          </code>
          <p className="mt-2 text-xs text-gray-400">
            Set <code className="bg-gray-100 px-1 rounded">POSTBACK_SECRET_TOKEN</code> in your environment variables.
            Never expose this token publicly.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Environment</h2>
          <div className="text-sm text-gray-500 space-y-1">
            <p>Site URL: <span className="font-mono text-gray-700">{process.env.NEXT_PUBLIC_SITE_URL ?? 'not set'}</span></p>
            <p>Database: <span className="text-gray-700">{process.env.DATABASE_URL ? 'configured' : 'not configured'}</span></p>
            <p>Session secret: <span className="text-gray-700">{process.env.SESSION_SECRET ? 'configured' : 'NOT SET — sessions will not persist'}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
