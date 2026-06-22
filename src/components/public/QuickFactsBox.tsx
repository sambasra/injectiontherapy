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
    <div className="bg-white border border-[#E7EEF2] rounded-lg p-6">
      <h3 className="font-medium text-[#172026] mb-4 text-sm uppercase tracking-wide">{title}</h3>
      <dl className="space-y-3">
        {facts.map((fact) => (
          <div key={fact.label} className="flex gap-4">
            <dt className="text-sm font-medium text-brand-600 min-w-[120px]">{fact.label}</dt>
            <dd className="text-sm text-gray-600">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
