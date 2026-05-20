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
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-white/10
        bg-black
        px-6
        py-28
        md:px-10
        md:py-36
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]
        "
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <div
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            text-zinc-300
            backdrop-blur
          "
        >
          Schema-driven landing pages
        </div>

        <h1
          className="
            mt-8
            text-5xl
            font-black
            tracking-tight
            text-white
            md:text-7xl
            md:leading-[1]
          "
        >
          {heading}
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-zinc-400
            md:text-xl
          "
        >
          {subheading}
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={ctaUrl}
            className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              bg-white
              px-8
              py-4
              text-base
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-zinc-200
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-white
            "
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}