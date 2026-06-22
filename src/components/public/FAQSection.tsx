'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
}

export default function FAQSection({ items, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-8">
      <h2 className="text-2xl font-medium text-[#172026] mb-6">{title}</h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="bg-white border border-[#E7EEF2] rounded-lg overflow-hidden">
            <button
              className="w-full text-left px-5 py-4 font-medium text-[#172026] hover:bg-[#F7FAFC] flex justify-between items-center transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="text-sm">{item.question}</span>
              <svg
                className={`w-4 h-4 text-gray-400 flex-shrink-0 ml-4 transition-transform ${open === i ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-[#E7EEF2] pt-3">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
