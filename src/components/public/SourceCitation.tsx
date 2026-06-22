interface Source {
  name: string
  url: string
}

interface SourceCitationProps {
  sources: Source[]
}

export default function SourceCitation({ sources }: SourceCitationProps) {
  if (!sources || sources.length === 0) return null

  return (
    <div className="mt-8 pt-6 border-t border-[#E7EEF2]">
      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Sources & References</h3>
      <ul className="space-y-1">
        {sources.map((source, i) => (
          <li key={i} className="text-xs text-gray-500">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:text-brand-500 underline transition-colors"
            >
              {source.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
