import { defineCollection, z } from 'astro:content';

export const collections = {
  'portofoliu': defineCollection({
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
};