import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// In staging il sito vive su GitHub Pages sotto /boboli-website/; al lancio
// basta togliere le due variabili dal workflow e resta il dominio definitivo.
const SITE = process.env.SITE_URL ?? 'https://www.trattoriaboboli.it';
const BASE = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
