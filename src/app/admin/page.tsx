import { redirect } from 'next/navigation'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import StatCard from '@/components/admin/StatCard'
import DashboardCard from '@/components/admin/DashboardCard'
import ClicksTable from '@/components/admin/ClicksTable'
import { formatCurrency } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Dashboard' }

async function getDashboardData() {
  const now = new Date()
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  const [
    clicksToday,
    clicksMonth,
    humanClicksMonth,
    activeOffers,
    pendingConversions,
    approvedRevenue,
    recentClicks,
    topOffers,
  ] = await Promise.all([
    prisma.affiliateClick.count({ where: { createdAt: { gte: startOfDay } } }),
    prisma.affiliateClick.count({ where: { createdAt: { gte: startOfMonth } } }),
    prisma.affiliateClick.count({ where: { createdAt: { gte: startOfMonth }, isLikelyBot: false } }),
    prisma.offer.count({ where: { status: 'active' } }),
    prisma.conversion.count({ where: { status: 'pending' } }),
    prisma.conversion.aggregate({
      where: { status: { in: ['approved', 'paid'] } },
      _sum: { payoutAmount: true },
    }),
    prisma.affiliateClick.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: { offer: { select: { name: true, slug: true } } },
    }),
    prisma.affiliateClick.groupBy({
      by: ['offerId'],
      where: { createdAt: { gte: startOfMonth }, isLikelyBot: false },
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
      take: 5,
    }),
  ])

  return {
    clicksToday,
    clicksMonth,
    humanClicksMonth,
    activeOffers,
    pendingConversions,
    approvedRevenue: approvedRevenue._sum.payoutAmount ?? 0,
    recentClicks,
    topOffers,
  }
}

export default async function AdminDashboardPage() {
  try {
    await requireAuth()
  } catch {
    redirect('/admin/login')
  }

  const data = await getDashboardData()

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Clicks Today" value={data.clicksToday} color="blue" />
        <StatCard
          label="Human Clicks (MTD)"
          value={data.humanClicksMonth}
          sub={`${data.clicksMonth} total incl. bots`}
          color="green"
        />
        <StatCard label="Active Offers" value={data.activeOffers} color="purple" />
        <StatCard
          label="Est. Revenue"
          value={formatCurrency(data.approvedRevenue)}
          sub={`${data.pendingConversions} pending`}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <DashboardCard title="Recent Clicks (last 10)">
          <ClicksTable clicks={data.recentClicks} />
        </DashboardCard>
      </div>
    </div>
  )
}
