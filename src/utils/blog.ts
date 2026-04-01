import type { CollectionEntry } from "astro:content";

export function buildPostPath(slug: string): string {
  return `/blog/${slug}/`;
}

export function getPostSlug(post: { id: string }): string {
  return post.id.replace(/\.(md|mdx)$/i, "");
}

function getMatchCount(source: string[] = [], target: string[] = []): number {
  const sourceSet = new Set(source);
  return target.reduce((count, value) => count + Number(sourceSet.has(value)), 0);
}

export function getSortedPosts(posts: CollectionEntry<"posts">[]) {
  return [...posts].sort((left, right) => {
    const leftTime = left.data.date ? new Date(left.data.date).getTime() : 0;
    const rightTime = right.data.date ? new Date(right.data.date).getTime() : 0;
    return rightTime - leftTime;
  });
}

export function getRelatedPosts(
  currentPost: CollectionEntry<"posts">,
  otherPosts: CollectionEntry<"posts">[],
  limit = 3,
): CollectionEntry<"posts">[] {
  const currentTags = currentPost.data.tags || [];
  const currentCategories = currentPost.data.categories || [];

  return [...otherPosts]
    .map((post) => ({
      post,
      tagMatches: getMatchCount(currentTags, post.data.tags || []),
      categoryMatches: getMatchCount(
        currentCategories,
        post.data.categories || [],
      ),
      timestamp: post.data.date ? new Date(post.data.date).getTime() : 0,
    }))
    .filter(({ tagMatches, categoryMatches }) => tagMatches > 0 || categoryMatches > 0)
    .sort((left, right) => {
      if (right.tagMatches !== left.tagMatches) {
        return right.tagMatches - left.tagMatches;
      }

      if (right.categoryMatches !== left.categoryMatches) {
        return right.categoryMatches - left.categoryMatches;
      }

      return right.timestamp - left.timestamp;
    })
    .map(({ post }) => post)
    .slice(0, limit);
}

export function normalizeSearchContent(input: string): string {
  return input
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 450);
}
