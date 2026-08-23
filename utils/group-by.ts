export function groupBy<T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> {
  const map: Record<string, T[]> = {};
  for (const item of items) {
    const key = keyFn(item);
    (map[key] = map[key] || []).push(item);
  }
  return map;
}