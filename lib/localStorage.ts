export function loadState() {
  if (typeof window === "undefined")
    return undefined

  try {
    const serialized =
      localStorage.getItem("draft-page")

    if (!serialized)
      return undefined

    return JSON.parse(serialized)
  } catch {
    return undefined
  }
}

export function saveState(state: unknown) {
  if (typeof window === "undefined")
    return

  try {
    localStorage.setItem(
      "draft-page",
      JSON.stringify(state)
    )
  } catch {}
}