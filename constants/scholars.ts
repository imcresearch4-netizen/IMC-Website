const SCHOLAR_BASE = "https://scholar.google.com/citations?user=";

export function scholarProfileUrl(userId: string, region?: "pk"): string {
  const base = region === "pk" ? "https://scholar.google.com.pk/citations?user=" : SCHOLAR_BASE;
  return base + encodeURIComponent(userId) + "&hl=en";
}

export const SCHOLAR_IDS = {
  jalal: "BIRC9XEAAAAJ",
  najam: "knkMZhQAAAAJ",
  najamAlternate: "kQxo9CYAAAAJ",
  rafique: "o5UkbAQAAAAJ",
} as const;

export const SCHOLAR_STATS_CACHE_TTL = 30 * 60 * 1000;

export function scholarStatsUrl(userId: string): string {
  return (
    "https://scholar.google.com/citations?hl=en&user=" +
    encodeURIComponent(userId) +
    "&view_op=list_works&sortby=pubdate"
  );
}

export const SCHOLAR_STATS_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml",
  "Accept-Language": "en-US,en;q=0.9",
} as const;