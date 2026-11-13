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
  // Gli articoli del vecchio sito stavano sotto /it/blog/: chi arriva da Google o
  // da un link salvato finisce sull'articolo nuovo, con lo stesso nome.
  // Qui sono pagine di rimando; su Vercel valgono i 301 veri di vercel.json.
  redirects: {
    '/it/blog/[slug]': '/blog/[slug]',
    '/it/blog': '/blog',
  },
  integrations: [
    sitemap({
      // Gli indirizzi corti per i QR code rimandano alla home: fuori dalla sitemap.
      // Fuori anche le pagine di ringraziamento dopo la prenotazione.
      filter: (page) => !/\/(locali|restaurants|restaurantes)\/$/.test(page) && !/\/(grazie|prova-modulo)\//.test(page),
    }),
  ],
});
