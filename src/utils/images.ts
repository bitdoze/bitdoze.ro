import type { ImageMetadata } from "astro";

// Toate rasterele din src/assets/images, indexate după URL-ul public vechi
// (ex. "/images/portofolio/x.webp"). Frontmatter-ul din colecții păstrează
// stringuri de tip URL, iar componentele rezolvă modulul ESM pentru
// optimizare via astro:assets. Ce nu se găsește (ex. SVG din public/)
// se întoarce ca string pentru fallback <img>.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

export function resolveImage(src: string): ImageMetadata | string {
  if (!src.startsWith("/images/")) return src;
  const key = `../assets${src}`;
  return modules[key]?.default ?? src;
}

export function isOptimizable(src: string): boolean {
  return typeof resolveImage(src) !== "string";
}
