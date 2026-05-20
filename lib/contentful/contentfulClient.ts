import { createClient } from "contentful"

export function getContentfulClient(
  preview = false
) {
  return createClient({
    space:
      process.env
        .CONTENTFUL_SPACE_ID!,

    accessToken: preview
      ? process.env
          .CONTENTFUL_PREVIEW_TOKEN!
      : process.env
          .CONTENTFUL_ACCESS_TOKEN!,

    environment:
      process.env
        .CONTENTFUL_ENVIRONMENT,

    host: preview
      ? "preview.contentful.com"
      : "cdn.contentful.com",
  })
}