import Link from 'next/link'
import type { InjectionCategory } from '@/data/pages'

interface CategoryCardProps {
  category: InjectionCategory
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/${category.slug}/`}
      className="group block bg-white border border-[#E7EEF2] rounded-lg p-6 hover:border-brand-300 transition-colors duration-200"
    >
      <div className="text-3xl mb-3">{category.icon}</div>
      <h3 className="font-semibold text-[#172026] group-hover:text-brand-500 mb-2 text-lg transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{category.tagline}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-500 group-hover:text-brand-600">
        Learn more
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
