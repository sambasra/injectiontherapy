import { PrismaClient, OfferStatus, PageType, PageStatus } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Site
  const site = await prisma.site.upsert({
    where: { domain: 'injectiontherapy.org' },
    update: {},
    create: {
      name: 'InjectionTherapy.org',
      domain: 'injectiontherapy.org',
      niche: 'injection therapy',
      status: 'active',
    },
  })

  // Admin user
  const passwordHash = await bcrypt.hash(process.env.ADMIN_INITIAL_PASSWORD || 'ChangeMe123!', 12)
  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@injectiontherapy.org' },
    update: {},
    create: {
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@injectiontherapy.org',
      passwordHash,
      role: 'owner',
    },
  })

  // Seed offers
  const offersData = [
    { slug: 'b12', name: 'B12 Injections Program', category: 'b12', status: OfferStatus.active },
    { slug: 'glp1', name: 'GLP-1 Weight Loss Program', category: 'glp1', status: OfferStatus.active },
    { slug: 'nad', name: 'NAD+ Infusion / Injection Program', category: 'nad', status: OfferStatus.active },
    { slug: 'sermorelin', name: 'Sermorelin Growth Hormone Program', category: 'sermorelin', status: OfferStatus.active },
    { slug: 'glutathione', name: 'Glutathione Injection Program', category: 'glutathione', status: OfferStatus.active },
    { slug: 'lipotropic', name: 'Lipotropic MIC Injection Program', category: 'lipotropic', status: OfferStatus.active },
    { slug: 'testosterone', name: 'Testosterone Replacement Therapy', category: 'testosterone', status: OfferStatus.placeholder },
  ]

  for (const offer of offersData) {
    await prisma.offer.upsert({
      where: { slug: offer.slug },
      update: {},
      create: {
        siteId: site.id,
        name: offer.name,
        category: offer.category,
        slug: offer.slug,
        destinationUrl: process.env[`OFFER_URL_${offer.slug.toUpperCase()}`] || 'https://example.com/placeholder',
        status: offer.status,
        appendClickId: true,
        subIdParamName: 'subid',
        currency: 'USD',
      },
    })
  }

  // Seed MVP pages
  const pagesData = [
    { title: 'Home', slug: '', url: '/', pageType: PageType.home, primaryKeyword: 'injection therapy', metaTitle: 'Injection Therapy Guide: B12, GLP-1, NAD & More | InjectionTherapy.org', metaDescription: 'Educational guide to injection therapy options including B12, GLP-1, NAD, Sermorelin, Glutathione, Lipotropic, and Testosterone. Find programs and pricing.' },
    { title: 'Injection Types', slug: 'injection-types', url: '/injection-types/', pageType: PageType.injection_types, primaryKeyword: 'types of injection therapy', metaTitle: 'Types of Injection Therapy: Complete Guide | InjectionTherapy.org', metaDescription: 'Compare all major injection therapy types: B12, GLP-1, NAD+, Sermorelin, Glutathione, Lipotropic, and Testosterone. Learn what each does, costs, and where to get them.' },
    { title: 'B12 Injections', slug: 'b12-injections', url: '/b12-injections/', pageType: PageType.category, category: 'b12', primaryKeyword: 'b12 injections', metaTitle: 'B12 Injections: What They Are, Benefits & Cost | InjectionTherapy.org', metaDescription: 'Learn about B12 injection therapy: what vitamin B12 shots do, who may benefit, what they cost, and how to find a provider or online program.' },
    { title: 'GLP-1 Injections', slug: 'glp1-injections', url: '/glp1-injections/', pageType: PageType.category, category: 'glp1', primaryKeyword: 'glp-1 injections', metaTitle: 'GLP-1 Injections: Weight Loss Options, Cost & Programs | InjectionTherapy.org', metaDescription: 'GLP-1 receptor agonist injections for weight management: how they work, what programs are available online, and what you can expect to pay.' },
    { title: 'NAD+ Injections', slug: 'nad-injections', url: '/nad-injections/', pageType: PageType.category, category: 'nad', primaryKeyword: 'nad injections', metaTitle: 'NAD+ Injections: Benefits, Cost & Online Programs | InjectionTherapy.org', metaDescription: 'NAD+ injection therapy for energy, recovery, and cellular health: what the research says, typical costs, and how to access programs online.' },
    { title: 'About', slug: 'about', url: '/about/', pageType: PageType.static, metaTitle: 'About InjectionTherapy.org', metaDescription: 'About InjectionTherapy.org — an educational resource for injection therapy information, costs, and programs.' },
    { title: 'Contact', slug: 'contact', url: '/contact/', pageType: PageType.static, metaTitle: 'Contact | InjectionTherapy.org', metaDescription: 'Get in touch with the InjectionTherapy.org team.' },
  ]

  for (const page of pagesData) {
    await prisma.page.upsert({
      where: { id: `seed-${page.slug || 'home'}` },
      update: {},
      create: {
        id: `seed-${page.slug || 'home'}`,
        siteId: site.id,
        title: page.title,
        slug: page.slug,
        url: page.url,
        pageType: page.pageType,
        category: page.category ?? null,
        primaryKeyword: page.primaryKeyword ?? null,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        status: PageStatus.published,
      },
    })
  }

  console.log('Seed complete.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
