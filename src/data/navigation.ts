export type NavChild = {
  label: string
  href: string
  icon: string
  description: string
}

export type NavColumn = {
  heading: string
  items: NavChild[]
}

export type NavItem = {
  label: string
  href: string
  megaMenu?: NavColumn[]
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Injection Types',
    href: '/injection-types/',
    megaMenu: [
      {
        heading: 'Weight Management',
        items: [
          {
            label: 'GLP-1 Injections',
            href: '/glp1-injections/',
            icon: 'WeightScaleIcon',
            description: 'Semaglutide & Tirzepatide',
          },
          {
            label: 'Lipotropic',
            href: '/lipotropic-injections/',
            icon: 'FireIcon',
            description: 'Fat-burning compounds',
          },
        ],
      },
      {
        heading: 'Wellness & Longevity',
        items: [
          {
            label: 'B12 Injections',
            href: '/b12-injections/',
            icon: 'EnergyIcon',
            description: 'Energy & metabolism boost',
          },
          {
            label: 'NAD+ Injections',
            href: '/nad-injections/',
            icon: 'Brain01Icon',
            description: 'Cellular energy & longevity',
          },
          {
            label: 'Glutathione',
            href: '/glutathione-injections/',
            icon: 'ShieldEnergyIcon',
            description: 'Master antioxidant therapy',
          },
        ],
      },
      {
        heading: 'Hormones & Performance',
        items: [
          {
            label: 'Testosterone',
            href: '/testosterone-injections/',
            icon: 'BodyPartMuscleIcon',
            description: 'Hormone optimization',
          },
          {
            label: 'Sermorelin',
            href: '/sermorelin-injections/',
            icon: 'DnaIcon',
            description: 'Growth hormone peptide',
          },
        ],
      },
      {
        heading: 'Explore',
        items: [
          {
            label: 'Compare All Types',
            href: '/injection-types/',
            icon: 'CheckListIcon',
            description: 'Side-by-side comparison',
          },
          {
            label: 'Read Our Blog',
            href: '/blog/',
            icon: 'AiBookIcon',
            description: 'Research & guides',
          },
          {
            label: 'Contact a Clinic',
            href: '/contact/',
            icon: 'ClinicIcon',
            description: 'Find local providers',
          },
        ],
      },
    ],
  },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
]

export const footerNav = {
  categories: [
    { label: 'B12 Injections', href: '/b12-injections/' },
    { label: 'GLP-1 Injections', href: '/glp1-injections/' },
    { label: 'NAD+ Injections', href: '/nad-injections/' },
    { label: 'Sermorelin', href: '/sermorelin-injections/' },
    { label: 'Glutathione', href: '/glutathione-injections/' },
    { label: 'Lipotropic', href: '/lipotropic-injections/' },
    { label: 'Testosterone', href: '/testosterone-injections/' },
  ],
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Injection Types', href: '/injection-types/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Use', href: '/terms/' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
    { label: 'Medical Disclaimer', href: '/medical-disclaimer/' },
  ],
}
