import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ?? new URL('https://blog.culturaydesarrollo.org');
  const posts = await getCollection('blog');
  const paths = ['', ...posts.map((post) => `/${post.id}/`), '/categorias/', '/tags/'];
  const urls = paths
    .map((path) => new URL(path, baseUrl).href)
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
