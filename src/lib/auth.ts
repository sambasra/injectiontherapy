import { getIronSession, IronSession } from 'iron-session'
import { cookies } from 'next/headers'

export interface SessionData {
  userId: string
  email: string
  role: string
  isLoggedIn: boolean
}

const sessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: 'it_admin_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 8, // 8 hours
  },
}

export async function getSession(): Promise<IronSession<SessionData>> {
  const cookieStore = await cookies()
  return getIronSession<SessionData>(cookieStore, sessionOptions)
}

export async function requireAuth(): Promise<SessionData> {
  const session = await getSession()
  if (!session.isLoggedIn) {
    throw new Error('UNAUTHORIZED')
  }
  return session as SessionData
}
