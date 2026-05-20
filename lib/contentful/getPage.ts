import { getContentfulClient }
from "./contentfulClient"

import { PageSchema }
from "@/schemas/page.schema"

export async function getPageBySlug(
  slug: string,
  preview = false
) {

  const client =
    getContentfulClient(preview)

  const response =
    await client.getEntries({
      content_type: "page",
      "fields.slug": slug,
      include: 2,
    })

  const item = response.items[0]

  if (!item) {
    return null
  }

  const rawPage = {
    pageId: item.sys.id,

    slug:
      item.fields.slug,

    title:
      item.fields.title,

    sections:
        (
          item.fields.sections as Array<{
            sys: { id: string }
            fields: {
              type: string
              props: Record<string, unknown>
            }
          }>
        )?.map(
        (section) => ({
          id: section.sys.id,
          type: section.fields.type,
          props: section.fields.props,
        })
      ) ?? [],
  }

  return PageSchema.parse(rawPage)
}