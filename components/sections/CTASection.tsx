interface Props {
  label: string
  url: string
}

export default function CTASection({
  label,
  url,
}: Props) {
  return (
    <section className="py-20 text-center">
      <a
        href={url}
        className="
          inline-block
          px-6
          py-3
          rounded
          bg-blue-600
          text-white
          focus-visible:outline
          focus-visible:outline-2
        "
      >
        {label}
      </a>
    </section>
  )
}