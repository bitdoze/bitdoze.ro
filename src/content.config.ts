import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.date().optional(),
      image: z.string().optional(),
      author: z.string().default("BitDoze"),
      categories: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      series: z.tuple([z.string(), z.string()]).optional(),
      canonical: z.string().optional(),
      draft: z.boolean().default(false),
    }),
  }),
  portofoliu: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/portofoliu" }),
    schema: z.object({
      title: z.string(),
      descriere: z.string(),
      imagine: z.string(),
      url: z.string(),
      stack: z.array(z.string()),
      servicii: z.array(z.string()),
      data: z.date(),
      draft: z.boolean().default(false),
    }),
  }),
  servicii: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/servicii" }),
    schema: z.object({
      title: z.string(),
      descriere: z.string(),
      icon: z.string(),
      imagine: z.string().optional(),
      pret: z.string().optional(),
      durata: z.string().optional(),
      caracteristici: z.array(z.string()).optional(),
      beneficii: z.array(z.string()).optional(),
      intrebari_frecvente: z
        .array(
          z.object({
            intrebare: z.string(),
            raspuns: z.string(),
          })
        )
        .optional(),
      seo: z.object({
        title: z.string(),
        description: z.string(),
        keywords: z.array(z.string()),
      }),
      draft: z.boolean().default(false),
      ordine: z.number().default(99),
    }),
  }),
};
