interface Props {
  heading: string
  subheading: string
  ctaLabel: string
  ctaUrl: string
}

export default function HeroSection({
  heading,
  subheading,
  ctaLabel,
  ctaUrl,
}: Props) {
  return (
    <section className="py-20 text-center border-b">
      <h1 className="text-5xl font-bold">{heading}</h1>

      <p className="mt-4 text-lg text-gray-600">
        {subheading}
      </p>

      <a
        href={ctaUrl}
        className="inline-block mt-6 px-6 py-3 bg-black text-white rounded"
      >
        {ctaLabel}
      </a>
    </section>
  )
}