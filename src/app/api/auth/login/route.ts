import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import bcrypt from 'bcryptjs'

// Simple in-memory rate limiter — replace with Redis for production at scale
const attempts = new Map<string, { count: number; resetAt: number }>()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = attempts.get(ip)
  if (!entry || entry.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }
  if (entry.count >= MAX_ATTEMPTS) return false
  entry.count++
  return true
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.redirect(new URL('/admin/login?error=ratelimit', request.url), { status: 302 })
  }

  const formData = await request.formData()
  const email = (formData.get('email') as string | null)?.toLowerCase().trim()
  const password = formData.get('password') as string | null

  if (!email || !password) {
    return NextResponse.redirect(new URL('/admin/login?error=invalid', request.url), { status: 302 })
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    // Constant-time comparison even on not-found to avoid timing attacks
    await bcrypt.compare(password, '$2a$12$placeholder.hash.for.timing')
    return NextResponse.redirect(new URL('/admin/login?error=invalid', request.url), { status: 302 })
  }

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) {
    return NextResponse.redirect(new URL('/admin/login?error=invalid', request.url), { status: 302 })
  }

  const session = await getSession()
  session.isLoggedIn = true
  session.userId = user.id
  session.email = user.email
  session.role = user.role
  await session.save()

  return NextResponse.redirect(new URL('/admin', request.url), { status: 302 })
}
