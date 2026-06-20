export interface InjectionCategory {
  slug: string
  name: string
  shortName: string
  offerSlug: string
  tagline: string
  description: string
  primaryKeyword: string
  metaTitle: string
  metaDescription: string
  color: string
  icon: string
}

export const injectionCategories: InjectionCategory[] = [
  {
    slug: 'b12-injections',
    name: 'B12 Injections',
    shortName: 'B12',
    offerSlug: 'b12',
    tagline: 'Energy, nerve health, and metabolic support',
    description: 'Vitamin B12 injections bypass the digestive system to deliver this essential nutrient directly into the bloodstream. Often used for energy support, nerve function, and those with absorption difficulties.',
    primaryKeyword: 'b12 injections',
    metaTitle: 'B12 Injections: What They Are, Benefits & Cost | InjectionTherapy.org',
    metaDescription: 'Learn about B12 injection therapy: what vitamin B12 shots do, who may benefit, what they cost, and how to find a provider or online program.',
    color: 'blue',
    icon: '💉',
  },
  {
    slug: 'glp1-injections',
    name: 'GLP-1 Injections',
    shortName: 'GLP-1',
    offerSlug: 'glp1',
    tagline: 'Medically supervised weight management programs',
    description: 'GLP-1 receptor agonists are injectable medications used in medically supervised weight loss programs. They work by regulating appetite signals and blood sugar levels.',
    primaryKeyword: 'glp-1 injections',
    metaTitle: 'GLP-1 Injections: Weight Loss Options, Cost & Programs | InjectionTherapy.org',
    metaDescription: 'GLP-1 receptor agonist injections for weight management: how they work, what programs are available online, and what you can expect to pay.',
    color: 'teal',
    icon: '⚕️',
  },
  {
    slug: 'nad-injections',
    name: 'NAD+ Injections',
    shortName: 'NAD+',
    offerSlug: 'nad',
    tagline: 'Cellular energy and recovery support',
    description: 'NAD+ (nicotinamide adenine dinucleotide) injection therapy is used by longevity clinics and wellness centers for cellular energy support, recovery, and overall vitality.',
    primaryKeyword: 'nad injections',
    metaTitle: 'NAD+ Injections: Benefits, Cost & Online Programs | InjectionTherapy.org',
    metaDescription: 'NAD+ injection therapy for energy, recovery, and cellular health: what the research says, typical costs, and how to access programs online.',
    color: 'purple',
    icon: '🔬',
  },
  {
    slug: 'sermorelin-injections',
    name: 'Sermorelin Injections',
    shortName: 'Sermorelin',
    offerSlug: 'sermorelin',
    tagline: 'Growth hormone secretagogue therapy',
    description: 'Sermorelin is a synthetic peptide that stimulates the pituitary gland to produce growth hormone. Used in anti-aging and hormone optimization programs.',
    primaryKeyword: 'sermorelin injections',
    metaTitle: 'Sermorelin Injections: How It Works, Cost & Programs | InjectionTherapy.org',
    metaDescription: 'Sermorelin injection therapy for growth hormone support: how it works, what to expect, typical costs, and how to access online programs.',
    color: 'green',
    icon: '🧬',
  },
  {
    slug: 'glutathione-injections',
    name: 'Glutathione Injections',
    shortName: 'Glutathione',
    offerSlug: 'glutathione',
    tagline: 'Master antioxidant for cellular detox support',
    description: 'Glutathione is the body\'s most powerful antioxidant. Injection delivery allows for higher bioavailability than oral supplementation, commonly used in IV wellness and detox programs.',
    primaryKeyword: 'glutathione injections',
    metaTitle: 'Glutathione Injections: Benefits, Cost & Programs | InjectionTherapy.org',
    metaDescription: 'Glutathione injection therapy for antioxidant support: what it is, typical costs, and how to find a provider or online program.',
    color: 'yellow',
    icon: '✨',
  },
  {
    slug: 'lipotropic-injections',
    name: 'Lipotropic Injections',
    shortName: 'Lipotropic',
    offerSlug: 'lipotropic',
    tagline: 'MIC shots for fat metabolism support',
    description: 'Lipotropic (MIC) injections contain a blend of methionine, inositol, and choline — compounds involved in fat metabolism. Often paired with a calorie-controlled diet.',
    primaryKeyword: 'lipotropic injections',
    metaTitle: 'Lipotropic MIC Injections: What They Are, Cost & Programs | InjectionTherapy.org',
    metaDescription: 'Lipotropic injection therapy: what MIC shots contain, what the evidence says, typical costs, and where to find programs online.',
    color: 'orange',
    icon: '🔥',
  },
  {
    slug: 'testosterone-injections',
    name: 'Testosterone Injections',
    shortName: 'Testosterone',
    offerSlug: 'testosterone',
    tagline: 'TRT programs for hormone optimization',
    description: 'Testosterone replacement therapy (TRT) via injection is used under medical supervision for individuals with clinically low testosterone levels. Requires a provider evaluation.',
    primaryKeyword: 'testosterone injections',
    metaTitle: 'Testosterone Injections (TRT): What to Know, Cost & Programs | InjectionTherapy.org',
    metaDescription: 'Testosterone injection therapy and TRT programs: who qualifies, what it costs, and how to find a qualified provider or telehealth program.',
    color: 'red',
    icon: '💪',
  },
]
