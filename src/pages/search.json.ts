import { getCollection } from "astro:content";
import { formatDate } from "../utils/date";
import { getPostSlug, normalizeSearchContent } from "../utils/blog";

export async function GET() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  const searchData = posts.map((post) => ({
    slug: getPostSlug(post),
    title: post.data.title,
    description: post.data.description || "",
    date: post.data.date ? formatDate(post.data.date) : "",
    image: post.data.image || null,
    categories: post.data.categories || [],
    tags: post.data.tags || [],
    content: normalizeSearchContent(post.body ?? ""),
  }));

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
