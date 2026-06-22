interface StatCardProps {
  label: string
  value: string | number
  sub?: string
  color?: 'blue' | 'green' | 'purple' | 'orange'
}

const colorMap = {
  blue:   'bg-brand-50 border-brand-100 text-brand-700',
  green:  'bg-green-50 border-green-100 text-green-800',
  purple: 'bg-secondary-50 border-secondary-100 text-secondary-700',
  orange: 'bg-accent-50 border-accent-100 text-accent-700',
}

export default function StatCard({ label, value, sub, color = 'blue' }: StatCardProps) {
  return (
    <div className={`border rounded-lg p-5 ${colorMap[color]}`}>
      <p className="text-xs font-medium uppercase tracking-wide opacity-70 mb-1">{label}</p>
      <p className="text-3xl font-medium">{value}</p>
      {sub && <p className="text-xs opacity-60 mt-1">{sub}</p>}
    </div>
  )
}
