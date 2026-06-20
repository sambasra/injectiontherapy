import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medical Disclaimer | InjectionTherapy.org',
  description: 'Medical disclaimer for InjectionTherapy.org. This site is for educational purposes only.',
  alternates: { canonical: '/medical-disclaimer/' },
}

export default function MedicalDisclaimerPage() {
  return (
    <div className="max-w-[780px] mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">← Home</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Medical Disclaimer</h1>
      <div className="space-y-5 text-gray-700 leading-relaxed text-sm">
        <p><strong>Last updated: June 2025</strong></p>
        <p>
          This website is for educational purposes only and does not provide medical advice.
          The information on this site is not intended to diagnose, treat, cure, or prevent
          any disease or health condition.
        </p>
        <p>
          Always consult a qualified healthcare provider — such as a physician, nurse practitioner,
          or pharmacist — before starting any new treatment, supplement, or injection therapy
          program. Never disregard professional medical advice or delay seeking it because of
          something you have read on this website.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">No Provider-Patient Relationship</h2>
        <p>
          Use of this website does not create a provider-patient or pharmacist-patient relationship.
          We are an independent educational publisher, not a healthcare provider.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">Individual Results Vary</h2>
        <p>
          Injection therapy outcomes vary by individual, medical history, adherence, and many
          other factors. No content on this site guarantees, promises, or implies specific outcomes
          from any therapy.
        </p>
        <h2 className="text-lg font-bold text-gray-900 mt-6">External Links</h2>
        <p>
          Links to external programs and providers are provided for informational purposes only.
          We do not endorse the clinical practices of any linked provider and encourage you to
          conduct your own due diligence.
        </p>
        <p>
          Questions? <Link href="/contact/" className="text-brand-600 underline">Contact us</Link>.
        </p>
      </div>
    </div>
  )
}
