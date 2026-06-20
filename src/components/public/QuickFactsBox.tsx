interface Fact {
  label: string
  value: string
}

interface QuickFactsBoxProps {
  facts: Fact[]
  title?: string
}

export default function QuickFactsBox({ facts, title = 'Quick Facts' }: QuickFactsBoxProps) {
  return (
    <div className="bg-teal-50 border border-teal-100 rounded-[10px] p-6">
      <h3 className="font-semibold text-teal-800 mb-4 text-sm uppercase tracking-wide">{title}</h3>
      <dl className="space-y-3">
        {facts.map((fact) => (
          <div key={fact.label} className="flex gap-4">
            <dt className="text-sm font-medium text-teal-700 min-w-[120px]">{fact.label}</dt>
            <dd className="text-sm text-gray-700">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
