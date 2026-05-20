export type VersionType =
  | "major"
  | "minor"
  | "patch"

export function determineVersionBump(
  previousSections: unknown[],
  currentSections: unknown[]
): VersionType {

  if (
    currentSections.length <
    previousSections.length
  ) {
    return "major"
  }

  if (
    currentSections.length >
    previousSections.length
  ) {
    return "minor"
  }

  return "patch"
}