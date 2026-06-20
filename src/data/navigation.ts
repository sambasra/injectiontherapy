export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Injection Types', href: '/injection-types/' },
  { label: 'B12', href: '/b12-injections/' },
  { label: 'GLP-1', href: '/glp1-injections/' },
  { label: 'NAD+', href: '/nad-injections/' },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'Sermorelin', href: '/sermorelin-injections/' },
      { label: 'Glutathione', href: '/glutathione-injections/' },
      { label: 'Lipotropic', href: '/lipotropic-injections/' },
      { label: 'Testosterone', href: '/testosterone-injections/' },
    ],
  },
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
