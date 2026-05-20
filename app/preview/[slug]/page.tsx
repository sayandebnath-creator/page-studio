import { sectionRegistry } from "@/registry/sectionRegistry"
import UnsupportedSection from "@/components/sections/UnsupportedSection"

const mockPage = {
  pageId: "1",
  slug: "home",
  title: "Home",
  sections: [
    {
      id: "hero-1",
      type: "hero",
      props: {
        heading: "Welcome",
        subheading: "Build landing pages fast",
        ctaLabel: "Get Started",
        ctaUrl: "#",
      },
    },
  ],
}

export default function PreviewPage() {
  return (
    <main>
      {mockPage.sections.map((section) => {
        const Component =
          sectionRegistry[
            section.type as keyof typeof sectionRegistry
          ]

        if (!Component) {
          return (
            <UnsupportedSection
              key={section.id}
              type={section.type}
            />
          )
        }

        return (
          <Component
            key={section.id}
            {...section.props}
          />
        )
      })}
    </main>
  )
}