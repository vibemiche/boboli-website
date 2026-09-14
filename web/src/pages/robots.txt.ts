import type { APIRoute } from 'astro';
import { indexable } from '../lib/site';

// I crawler AI sono consentiti per scelta del cliente, ma solo dal lancio:
// finché il sito sta sull'URL provvisorio vale il blocco totale, altrimenti si
// finisce indicizzati due volte e le due copie si fanno concorrenza.
const staging = `User-agent: *
Disallow: /
`;

const live = (sitemap: string) => `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${sitemap}
`;

export const GET: APIRoute = ({ site }) => {
  const body = indexable ? live(new URL('sitemap-index.xml', site).href) : staging;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
