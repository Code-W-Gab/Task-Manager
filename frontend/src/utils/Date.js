export const formatDate = (iso) => {
  if (!iso) return ""
  return new Date(iso)
    .toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    .replace(/, /g, "-")   // "Jan 30, 2026" -> "Jan-30-2026"
    .replace(" ", "-")     // "Jan 30-2026" -> "Jan-30-2026"
}