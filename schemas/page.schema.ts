import { z } from "zod"

export const HeroSchema = z.object({
  id: z.string(),
  type: z.literal("hero"),
  props: z.object({
    heading: z.string(),
    subheading: z.string(),
    ctaLabel: z.string(),
    ctaUrl: z.string(),
  }),
})

export const FeatureGridSchema = z.object({
  id: z.string(),
  type: z.literal("featureGrid"),
  props: z.object({
    title: z.string(),
  }),
})

export const TestimonialSchema = z.object({
  id: z.string(),
  type: z.literal("testimonial"),
  props: z.object({
    quote: z.string(),
    author: z.string(),
  }),
})

export const CTASchema = z.object({
  id: z.string(),
  type: z.literal("cta"),
  props: z.object({
    label: z.string(),
    url: z.string(),
  }),
})

export const SectionSchema = z.discriminatedUnion("type", [
  HeroSchema,
  FeatureGridSchema,
  TestimonialSchema,
  CTASchema,
])

export const PageSchema = z.object({
  pageId: z.string(),
  slug: z.string(),
  title: z.string(),
  sections: z.array(SectionSchema),
})