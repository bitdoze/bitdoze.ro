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
  'servicii': defineCollection({
    schema: z.object({
      title: z.string(),
      descriere: z.string(),
      icon: z.string(),
      imagine: z.string().optional(),
      pret: z.string().optional(),
      durata: z.string().optional(),
      caracteristici: z.array(z.string()).optional(),
      beneficii: z.array(z.string()).optional(),
      intrebari_frecvente: z.array(z.object({
        intrebare: z.string(),
        raspuns: z.string(),
      })).optional(),
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