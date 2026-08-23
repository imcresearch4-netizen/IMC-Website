import { externalMedia } from "@/lib/data/externalMedia";

export function mediaUrl(path: string | null | undefined): string {
  if (!path) return "";
  return externalMedia[path] || path;
}

export function mediaUrlList(path: string | null | undefined): string {
  if (!path) return "";
  return path
    .split(",")
    .map((p) => mediaUrl(p.trim()))
    .join(",");
}