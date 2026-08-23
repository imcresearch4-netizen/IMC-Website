export function highlightAuthors(authors: string): string {
  return authors.replace(
    /(J\s*Ahmad|Ahmad\s*Jalal|Jalal,\s*A\.?)/g,
    '<span class="highlight-author">$1*</span>'
  );
}

export function doiString(link: string): string {
  const hasDoi = link.indexOf("doi") !== -1;
  const doiMatch = link.match(/doi\.org\/(10\.\S+)/);
  return hasDoi && doiMatch ? "DOI: " + doiMatch[1].substring(0, 30) : "";
}