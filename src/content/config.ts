import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    author: z.string().default('Corporación Cultura y Desarrollo'),
    
    // CAMBIO TOTAL: Acepta cualquier categoría en texto plano
    category: z.string().default('Gestión Cultural'), 
    
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
