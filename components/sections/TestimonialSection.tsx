interface Props {
  quote: string
  author: string
}

export default function TestimonialSection({
  quote,
  author,
}: Props) {
  return (
    <section className="py-16 text-center">
      <blockquote className="text-2xl italic">
        "{quote}"
      </blockquote>

      <p className="mt-4 font-semibold">
        — {author}
      </p>
    </section>
  )
}