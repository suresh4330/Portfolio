import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://suresh4330.github.io',
  base: process.env.ASTRO_BASE !== undefined ? process.env.ASTRO_BASE : '/Portfolio',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});
