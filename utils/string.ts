export function escapeJson(input: string): string {
  return input
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t");
}

export function splitList(value: string | null | undefined, sep = ","): string[] {
  return (value || "")
    .split(sep)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function toHtml(text: string | null | undefined): string {
  return text ? text.replace(/\n/g, "<br />") : "";
}

export function photoLabel(n: number): string {
  return n + " Photo" + (n === 1 ? "" : "s");
}

export function splitVenue(venue: string | null | undefined): string {
  return venue ? venue.split("|")[0].trim() : "";
}