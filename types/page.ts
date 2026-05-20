export type SectionType =
  | "hero"
  | "featureGrid"
  | "testimonial"
  | "cta"

export interface HeroSection {
  id: string
  type: "hero"
  props: {
    heading: string
    subheading: string
    ctaLabel: string
    ctaUrl: string
  }
}

export interface CTASection {
  id: string
  type: "cta"
  props: {
    label: string
    url: string
  }
}

export interface TestimonialSection {
  id: string
  type: "testimonial"
  props: {
    quote: string
    author: string
  }
}

export interface FeatureGridSection {
  id: string
  type: "featureGrid"
  props: {
    title: string
  }
}

export type Section =
  | HeroSection
  | CTASection
  | TestimonialSection
  | FeatureGridSection

export interface Page {
  pageId: string
  slug: string
  title: string
  sections: Section[]
}