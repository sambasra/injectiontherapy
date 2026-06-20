import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://injectiontherapy.org'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'InjectionTherapy.org'

interface SeoProps {
  title: string
  description: string
  path?: string
  noIndex?: boolean
}

export function buildMetadata({ title, description, path = '', noIndex = false }: SeoProps): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  }
}
