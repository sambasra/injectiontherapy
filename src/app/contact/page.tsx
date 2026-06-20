import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact | InjectionTherapy.org',
  description:
    'Get in touch with the InjectionTherapy.org team. For educational and editorial questions only — we are not a healthcare provider.',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Contact</span>
      </nav>

      <div className="max-w-[680px]">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-900">
          <strong>Important:</strong> We are not a healthcare provider and cannot give medical
          advice or answer questions about whether a specific treatment is right for you.
          For medical questions, please consult a qualified healthcare professional.
        </div>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Use the form below for editorial questions, content corrections, affiliate partnership
          inquiries, or general site feedback.
        </p>

        {/* Static contact form — no health data collected per Section 9.3 */}
        <form
          action="mailto:contact@injectiontherapy.org"
          method="get"
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            >
              <option value="">Select a topic</option>
              <option value="content-correction">Content correction or error</option>
              <option value="affiliate">Affiliate or partnership inquiry</option>
              <option value="general">General feedback</option>
              <option value="other">Other (editorial only)</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="body"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              placeholder="Your message here. Please do not include personal health information."
            />
          </div>

          <p className="text-xs text-gray-400">
            Do not include personal health details, medications, or diagnoses in your message.
            We cannot respond to medical questions and any such information is not processed or stored.
          </p>

          <button
            type="submit"
            className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
