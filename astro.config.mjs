import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://culturaydesarrollo.org',
  base: '/blog', // Crucial para que GitHub Pages lo monte en la subcarpeta correcta
});