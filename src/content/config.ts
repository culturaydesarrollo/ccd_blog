// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content', // Define que la colección procesa archivos Markdown/MDX nativos
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    author: z.string().default('Corporación Cultura y Desarrollo'),
    
    // CAMBIO CLAVE: Ahora acepta cualquier texto o categoría que decidas inventar
    category: z.string().default('Gestión Cultural'), 
    
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
