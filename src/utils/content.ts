export function getCollectionSlug(entry: { id: string }): string {
  return entry.id.replace(/\.(md|mdx)$/i, "");
}
