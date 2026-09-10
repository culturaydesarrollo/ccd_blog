import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: image().optional(),
    author: z.string(),
    authorImage: z.string().default('/images/author-default.svg'),
    authorBio: z.string().default('Biografía del autor próximamente.'),
    shareImage: z.boolean().default(false),
    category: z.array(z.string()),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
