import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://injectiontherapy.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/injection-types/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/b12-injections/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/glp1-injections/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/nad-injections/`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/sermorelin-injections/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/glutathione-injections/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/lipotropic-injections/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/testosterone-injections/`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/blog/`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${BASE_URL}/about/`, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${BASE_URL}/contact/`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/affiliate-disclosure/`, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${BASE_URL}/medical-disclaimer/`, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${BASE_URL}/privacy/`, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${BASE_URL}/terms/`, changeFrequency: 'yearly' as const, priority: 0.2 },
  ]

  return staticPages.map((page) => ({
    ...page,
    lastModified: now,
  }))
}
