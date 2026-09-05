// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // 1. Agregamos ({ image }) aquí para poder usar el validador de imágenes de Astro 👇
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    
    // 2. Cambiamos z.string() por image() para que Astro procese las rutas de tus .md 👇
    image: image().optional(),
    
    author: z.string().default('Corporación Cultura y Desarrollo'),
    
    // AHORA SÍ: Acepta cualquier categoría variada que escribas en tus .md
    category: z.string().default('Gestión Cultural'), 
    
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };

