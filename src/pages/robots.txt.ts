import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap.xml', site ?? 'https://blog.culturaydesarrollo.org');

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl.href}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
