import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog: Injection Therapy News & Guides',
  description:
    'In-depth articles on injection therapy costs, programs, research, and comparisons. Educational content only.',
  alternates: { canonical: '/blog/' },
}

export default function BlogPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Blog</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-gray-600 mb-10 max-w-[680px]">
        Educational articles on injection therapy options, costs, program comparisons, and what
        the research shows. New articles published regularly.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-[10px] p-10 text-center text-gray-500">
        <div className="text-4xl mb-4">📝</div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Articles Coming Soon</h2>
        <p className="text-sm max-w-md mx-auto">
          We are building out the blog with thoroughly researched, cited articles on injection
          therapy topics. Check back soon, or explore our current category pages:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/b12-injections/" className="text-sm text-brand-600 hover:underline">B12 Injections</Link>
          <Link href="/glp1-injections/" className="text-sm text-brand-600 hover:underline">GLP-1 Injections</Link>
          <Link href="/nad-injections/" className="text-sm text-brand-600 hover:underline">NAD+ Injections</Link>
          <Link href="/injection-types/" className="text-sm text-brand-600 hover:underline">All Injection Types</Link>
        </div>
      </div>
    </div>
  )
}
