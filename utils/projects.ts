export function projectCoverUrl(image: string | null): string {
  return image ? image.replace("/flow/", "/cover/") : "";
}