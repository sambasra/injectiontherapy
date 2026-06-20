import Link from 'next/link'
import type { InjectionCategory } from '@/data/pages'

interface CategoryCardProps {
  category: InjectionCategory
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/${category.slug}/`}
      className="group block bg-white border border-gray-200 rounded-[10px] p-6 hover:shadow-md hover:border-brand-200 transition-all duration-200"
    >
      <div className="text-3xl mb-3">{category.icon}</div>
      <h3 className="font-semibold text-gray-900 group-hover:text-brand-700 mb-2 text-lg">
        {category.name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{category.tagline}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 group-hover:text-brand-800">
        Learn more
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
