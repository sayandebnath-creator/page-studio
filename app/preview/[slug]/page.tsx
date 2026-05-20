import { getPageBySlug }
from "@/lib/contentful/getPage"

import { sectionRegistry }
from "@/registry/sectionRegistry"

import UnsupportedSection
from "@/components/sections/UnsupportedSection"

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const page =
    await getPageBySlug(slug)

  if (!page) {
    return (
      <div className="p-10">
        Page not found
      </div>
    )
  }

  return (
    <main>
      {page.sections.map((section) => {

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
            {...(section.props as any)}
          />
        )
      })}
    </main>
  )
}