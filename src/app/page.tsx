import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Injection Therapy Guide: Evidence, Costs & Safety',
  description:
    'Understand B12, GLP-1, NAD+, Sermorelin, Glutathione, Lipotropic, and Testosterone injections before comparing treatment programs.',
  alternates: { canonical: '/' },
}

const treatments = [
  {
    href: '/b12-injections/',
    name: 'B12 injections',
    label: 'Established use',
    tone: 'strong',
    description: 'A well-established treatment for diagnosed vitamin B12 deficiency and related absorption problems.',
    detail: 'Usually guided by symptoms, medical history, and blood testing.',
  },
  {
    href: '/glp1-injections/',
    name: 'GLP-1 medications',
    label: 'Prescription treatment',
    tone: 'strong',
    description: 'Evidence-based prescription options for diabetes and chronic weight management in eligible patients.',
    detail: 'Requires screening, a prescription, dose monitoring, and ongoing care.',
  },
  {
    href: '/testosterone-injections/',
    name: 'Testosterone therapy',
    label: 'Diagnosis required',
    tone: 'specific',
    description: 'A hormone treatment for clinically confirmed hypogonadism, not a general-purpose wellness injection.',
    detail: 'Diagnosis and laboratory monitoring are essential.',
  },
  {
    href: '/sermorelin-injections/',
    name: 'Sermorelin',
    label: 'Condition specific',
    tone: 'specific',
    description: 'A growth hormone-releasing peptide with narrower medical uses and variable clinic protocols.',
    detail: 'Ask why it is being recommended and what outcomes will be monitored.',
  },
  {
    href: '/nad-injections/',
    name: 'NAD+ injections',
    label: 'Emerging evidence',
    tone: 'emerging',
    description: 'Promoted for energy, recovery, and longevity, but human evidence for many claims remains limited.',
    detail: 'Treat broad anti-aging promises with caution.',
  },
  {
    href: '/glutathione-injections/',
    name: 'Glutathione injections',
    label: 'Limited evidence',
    tone: 'emerging',
    description: 'An antioxidant treatment marketed for several wellness and cosmetic goals with uneven supporting evidence.',
    detail: 'Benefits, route, product quality, and risks need careful review.',
  },
  {
    href: '/lipotropic-injections/',
    name: 'Lipotropic injections',
    label: 'Adjunctive use',
    tone: 'emerging',
    description: 'Often sold alongside weight management programs, without strong evidence as a standalone treatment.',
    detail: 'A credible provider should not promise independent fat loss.',
  },
]

const faqs = [
  {
    question: 'How do I know whether an injection therapy is appropriate for me?',
    answer:
      'Start with a licensed healthcare professional who can review your symptoms, diagnoses, medications, laboratory results, and treatment goals. A website or sales representative cannot determine whether a therapy is appropriate for an individual.',
  },
  {
    question: 'Are online injection programs legitimate?',
    answer:
      'Some telehealth programs provide legitimate medical care. Look for a named licensed clinician, a real medical intake, clear pharmacy information, transparent pricing, follow-up care, and an easy way to report side effects. Avoid services that skip evaluation or guarantee results.',
  },
  {
    question: 'What is the difference between FDA-approved and compounded medication?',
    answer:
      'FDA-approved products have been reviewed for safety, effectiveness, and manufacturing quality for specific uses. Compounded drugs can meet individual clinical needs but are not FDA-approved as finished products. Your provider should explain why a compounded option is being considered and identify the dispensing pharmacy.',
  },
  {
    question: 'Does InjectionTherapy.org recommend a specific treatment?',
    answer:
      'No. This site provides educational comparisons and links to sources. It does not diagnose conditions, prescribe medication, or recommend a treatment for a specific person.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-[#087e8b]">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="m6.5 10 2.1 2.1 4.9-4.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="home-hero">
        <Image
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1800&q=85"
          alt="A clinical laboratory where medical testing and research are performed"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="home-hero-overlay" />
        <div className="site-shell relative z-10 flex min-h-[500px] items-end pb-8 pt-12 sm:min-h-[520px]">
          <div className="max-w-[780px] text-white">
            <p className="mb-3 text-sm font-semibold uppercase">Independent treatment education</p>
            <h1 className="max-w-[15ch] text-[40px] font-normal leading-[1.05] sm:text-[52px] lg:text-[56px]">
              Understand injection therapy before choosing a program.
            </h1>
            <p className="mt-4 max-w-[670px] text-base leading-7 text-white/90 sm:text-lg">
              Compare what each therapy is used for, how strong the evidence is, what it may cost, and which questions belong in a provider consultation.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="#guides" className="button button-light">
                Compare injection types <ArrowIcon />
              </Link>
              <Link href="#questions" className="button button-ghost-light">
                Provider safety checklist
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <span>Sources include FDA, NIH, and major clinical references</span>
              <span>Educational use only</span>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Homepage sections" className="border-b border-[#dce5e8] bg-white">
        <div className="site-shell grid grid-cols-2 sm:grid-cols-4">
          {[
            ['Treatment guides', '#guides'],
            ['Evidence levels', '#evidence'],
            ['Quick comparison', '#compare'],
            ['Questions to ask', '#questions'],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="section-link">
              <span>{label}</span>
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </nav>

      <section className="section-band bg-white" aria-labelledby="overview-heading">
        <div className="site-shell editorial-grid">
          <aside className="editorial-aside">
            <p className="eyebrow">Start here</p>
            <nav aria-label="On this page" className="mt-5 border-l border-[#cbd7db] pl-4 text-sm text-[#53636c]">
              <a href="#guides">Treatment guides</a>
              <a href="#evidence">How evidence differs</a>
              <a href="#compare">Compare options</a>
              <a href="#questions">Choose a provider</a>
              <a href="#faq">Common questions</a>
            </nav>
          </aside>
          <div className="max-w-[760px]">
            <p className="eyebrow">A better starting point</p>
            <h2 id="overview-heading" className="section-title mt-4">
              The word “injection” describes a delivery method, not a level of evidence.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#53636c]">
              <p>
                Vitamin replacement, prescription weight management, hormone therapy, and wellness-clinic injections are not interchangeable. They involve different diagnoses, benefits, risks, and monitoring requirements.
              </p>
              <p>
                This guide separates established medical uses from emerging claims so you can have a more useful conversation with a qualified provider.
              </p>
            </div>
            <div className="mt-8 grid gap-5 border-t border-[#dce5e8] pt-7 sm:grid-cols-3">
              <div>
                <strong className="block text-2xl font-normal text-[#172026]">7 focused guides</strong>
                <span className="mt-1 block text-sm text-[#61707a]">Organized by treatment type</span>
              </div>
              <div>
                <strong className="block text-2xl font-normal text-[#172026]">Source led</strong>
                <span className="mt-1 block text-sm text-[#61707a]">Claims linked to clinical references</span>
              </div>
              <div>
                <strong className="block text-2xl font-normal text-[#172026]">No diagnosis</strong>
                <span className="mt-1 block text-sm text-[#61707a]">Education, not personal medical advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guides" className="section-band bg-[#f4f7f6]" aria-labelledby="guides-heading">
        <div className="site-shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Treatment library</p>
              <h2 id="guides-heading" className="section-title mt-4">Find the guide that matches your question.</h2>
            </div>
            <p className="max-w-[520px] text-base leading-7 text-[#61707a]">
              Each guide covers common uses, evidence, safety considerations, access, and realistic cost ranges. None replaces a clinical evaluation.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment, index) => (
              <Link
                key={treatment.href}
                href={treatment.href}
                className={`treatment-card ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`evidence-label evidence-${treatment.tone}`}>{treatment.label}</span>
                  <ArrowIcon />
                </div>
                <h3 className="mt-7 text-2xl font-normal text-[#172026]">{treatment.name}</h3>
                <p className="mt-3 text-base leading-7 text-[#53636c]">{treatment.description}</p>
                <p className="mt-6 border-t border-[#dce5e8] pt-4 text-sm leading-6 text-[#61707a]">{treatment.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="evidence" className="section-band bg-white" aria-labelledby="evidence-heading">
        <div className="site-shell grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:gap-20">
          <div>
            <p className="eyebrow">How we frame evidence</p>
            <h2 id="evidence-heading" className="section-title mt-4 max-w-[760px]">
              Strong claims need strong evidence.
            </h2>
            <p className="mt-6 max-w-[700px] text-lg leading-8 text-[#53636c]">
              A therapy can be appropriate for one diagnosed condition and poorly supported for a broad wellness claim. We describe the use being discussed instead of assigning a misleading single score.
            </p>

            <div className="mt-9 divide-y divide-[#dce5e8] border-y border-[#dce5e8]">
              {[
                ['01', 'Established or approved use', 'Supported by clinical guidance, regulatory review, or a substantial evidence base for a defined use.'],
                ['02', 'Condition-specific use', 'May be reasonable in a narrower clinical situation when diagnosis and monitoring are appropriate.'],
                ['03', 'Emerging or limited evidence', 'Early research or inconsistent findings. Marketing may be more confident than the available human evidence.'],
              ].map(([number, title, description]) => (
                <div key={number} className="grid gap-3 py-6 sm:grid-cols-[56px_1fr]">
                  <span className="text-sm font-semibold text-[#087e8b]">{number}</span>
                  <div>
                    <h3 className="text-xl font-normal text-[#172026]">{title}</h3>
                    <p className="mt-2 leading-7 text-[#61707a]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <figure className="evidence-figure">
            <Image
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=85"
              alt="A patient receiving reassuring support during a healthcare conversation"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="border-t border-white/20 bg-[#172026] p-6 text-white">
              <p className="text-lg leading-7">The right decision depends on your diagnosis, goals, medications, and tolerance for risk.</p>
              <p className="mt-2 text-sm text-white/70">That context belongs in a provider consultation.</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="compare" className="section-band bg-[#eef8f7]" aria-labelledby="compare-heading">
        <div className="site-shell">
          <p className="eyebrow">Quick comparison</p>
          <div className="section-heading-row mt-4">
            <h2 id="compare-heading" className="section-title">Compare the decision, not just the price.</h2>
            <p className="max-w-[520px] text-base leading-7 text-[#53636c]">
              Availability and cost change. These stable questions are more useful when evaluating any program.
            </p>
          </div>

          <div className="comparison-table mt-10" role="table" aria-label="Injection therapy comparison questions">
            <div className="comparison-row comparison-head" role="row">
              <span role="columnheader">Treatment group</span>
              <span role="columnheader">What should establish need?</span>
              <span role="columnheader">What should care include?</span>
            </div>
            {[
              ['Vitamin replacement', 'Symptoms, history, and appropriate testing', 'Dose plan and follow-up based on the cause of deficiency'],
              ['Prescription weight care', 'Eligibility, medical history, and contraindication screening', 'Prescription oversight, titration, side-effect support, and continuity'],
              ['Hormone treatment', 'Symptoms plus repeat laboratory confirmation where appropriate', 'Ongoing labs, risk monitoring, and clear treatment targets'],
              ['Wellness injections', 'A specific rationale supported by credible evidence', 'Transparent ingredients, sourcing, risks, costs, and stopping criteria'],
            ].map((row) => (
              <div key={row[0]} className="comparison-row" role="row">
                {row.map((cell, index) => (
                  <span key={cell} role="cell" data-label={index === 0 ? 'Treatment group' : index === 1 ? 'Establishing need' : 'Care should include'}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="questions" className="section-band bg-white" aria-labelledby="questions-heading">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Provider checklist</p>
            <h2 id="questions-heading" className="section-title mt-4">
              A credible program should welcome practical questions.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#53636c]">
              Good care is easier to recognize when the clinician, medication source, monitoring plan, and total cost are visible before treatment begins.
            </p>
            <Link href="/injection-types/" className="text-link mt-7 inline-flex items-center gap-2">
              Explore all treatment guides <ArrowIcon />
            </Link>
          </div>
          <ul className="checklist">
            {[
              'Who is the licensed clinician responsible for my care?',
              'What diagnosis or clinical finding supports this treatment?',
              'Is the medication FDA-approved for this use, or is it compounded?',
              'Which pharmacy dispenses it, and can I verify that pharmacy?',
              'What side effects need urgent attention?',
              'Which follow-up visits or laboratory tests are included?',
              'What is the full monthly cost, including medication and monitoring?',
              'What is the plan if the treatment does not help or I want to stop?',
            ].map((item) => (
              <li key={item}><CheckIcon /><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="section-band bg-[#f4f7f6]" aria-labelledby="faq-heading">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-heading" className="section-title mt-4">Before you begin</h2>
            <p className="mt-5 leading-7 text-[#61707a]">Clear answers matter more than a fast checkout when healthcare is involved.</p>
          </div>
          <div className="divide-y divide-[#cbd7db] border-y border-[#cbd7db]">
            {faqs.map((item, index) => (
              <details key={item.question} className="faq-item" open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#087e8b] text-white">
        <div className="site-shell grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-16">
          <div>
            <p className="text-sm font-semibold uppercase text-white/80">Make the next conversation count</p>
            <h2 className="mt-3 max-w-[780px] text-3xl font-normal leading-tight sm:text-4xl">
              Start with the evidence, then take your questions to a qualified provider.
            </h2>
          </div>
          <Link href="/injection-types/" className="button button-dark">
            Compare the guides <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  )
}
