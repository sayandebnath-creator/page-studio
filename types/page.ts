export type SectionType =
  | "hero"
  | "featureGrid"
  | "testimonial"
  | "cta"

export interface Section {
  id: string
  type: SectionType
  props: Record<string, unknown>
}

export interface Page {
  pageId: string
  slug: string
  title: string
  sections: Section[]
}