import fs from "fs"
import path from "path"

export async function saveRelease({
  slug,
  version,
  data,
}: {
  slug: string
  version: string
  data: unknown
}) {

  const releaseDir = path.join(
    process.cwd(),
    "releases",
    slug
  )

  if (!fs.existsSync(releaseDir)) {
    fs.mkdirSync(releaseDir, {
      recursive: true,
    })
  }

  const filePath = path.join(
    releaseDir,
    `${version}.json`
  )

  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2)
  )

  return filePath
}