import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isVercel = Boolean(process.env.VERCEL);

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || (isVercel ? 'https://portfolio-suresh.vercel.app' : 'https://suresh4330.github.io'),
  base: process.env.ASTRO_BASE !== undefined ? process.env.ASTRO_BASE : (isVercel ? '/' : '/Portfolio'),
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});
