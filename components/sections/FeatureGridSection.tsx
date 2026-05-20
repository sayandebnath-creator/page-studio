interface Props {
  title: string
}

export default function FeatureGridSection({
  title,
}: Props) {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">
        {title}
      </h2>
    </section>
  )
}