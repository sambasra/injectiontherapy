import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Injection Therapy Guide: B12, GLP-1, NAD & More | InjectionTherapy.org',
    template: '%s | InjectionTherapy.org',
  },
  description:
    'Educational guide to injection therapy options including B12, GLP-1, NAD+, Sermorelin, Glutathione, Lipotropic, and Testosterone. Compare programs and costs.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://injectiontherapy.org'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
