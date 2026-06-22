interface DashboardCardProps {
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}

export default function DashboardCard({ title, children, action }: DashboardCardProps) {
  return (
    <div className="bg-white border border-[#E7EEF2] rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E7EEF2]">
        <h2 className="font-medium text-[#172026] text-sm">{title}</h2>
        {action && <div>{action}</div>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}
