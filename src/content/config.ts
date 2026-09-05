// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    author: z.string().default('Corporación Cultura y Desarrollo'),
    
    // AHORA SÍ: Acepta cualquier categoría variada que escribas en tus .md
    category: z.string().default('Gestión Cultural'), 
    
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };

