import { VersionType }
from "./diff"

export function incrementVersion(
  version: string,
  bump: VersionType
) {

  const [major, minor, patch] =
    version.split(".").map(Number)

  if (bump === "major") {
    return `${major + 1}.0.0`
  }

  if (bump === "minor") {
    return `${major}.${minor + 1}.0`
  }

  return `${major}.${minor}.${patch + 1}`
}