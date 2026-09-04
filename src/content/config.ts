// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    // Nuevos campos institucionales obligatorios
    author: z.string().default('Corporación Cultura y Desarrollo'),
    category: z.enum(['Gestión Cultural', 'Comunidad', 'Proyectos', 'Patrimonio']), 
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };