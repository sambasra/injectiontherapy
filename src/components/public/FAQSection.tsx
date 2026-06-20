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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full text-left px-5 py-4 font-medium text-gray-800 hover:bg-gray-50 flex justify-between items-center"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {item.question}
              <svg
                className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform ${open === i ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
