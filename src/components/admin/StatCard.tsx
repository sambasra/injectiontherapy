interface StatCardProps {
  label: string
  value: string | number
  sub?: string
  color?: 'blue' | 'green' | 'purple' | 'orange'
}

const colorMap = {
  blue: 'bg-blue-50 border-blue-100 text-blue-800',
  green: 'bg-green-50 border-green-100 text-green-800',
  purple: 'bg-purple-50 border-purple-100 text-purple-800',
  orange: 'bg-orange-50 border-orange-100 text-orange-800',
}

export default function StatCard({ label, value, sub, color = 'blue' }: StatCardProps) {
  return (
    <div className={`border rounded-[10px] p-5 ${colorMap[color]}`}>
      <p className="text-xs font-semibold uppercase tracking-wide opacity-70 mb-1">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
      {sub && <p className="text-xs opacity-60 mt-1">{sub}</p>}
    </div>
  )
}
