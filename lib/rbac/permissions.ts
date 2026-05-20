export type Role =
  | "viewer"
  | "editor"
  | "publisher"

export function canEdit(
  role: Role
) {
  return (
    role === "editor" ||
    role === "publisher"
  )
}

export function canPublish(
  role: Role
) {
  return role === "publisher"
}