export function generateChangelog(
  bump: string
) {

  if (bump === "major") {
    return "Breaking structural changes"
  }

  if (bump === "minor") {
    return "New sections added"
  }

  return "Content updates"
}