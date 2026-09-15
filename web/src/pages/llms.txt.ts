import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { href } from '../lib/site';
import { formatHours } from '../lib/contact';

/**
 * Indice in chiaro per i motori generativi: fatti autosufficienti, senza
 * markup da interpretare. Gli stessi dati della collection, così non possono
 * divergere dal sito.
 */
export const GET: APIRoute = async ({ site }) => {
  const locali = (await getCollection('locali')).sort((a, b) => a.data.listOrder - b.data.listOrder);

  const schede = locali
    .map((l) => {
      const d = l.data;
      const righe = [
        `### ${d.nameLegal}`,
        `- Indirizzo: ${d.street}, ${d.postalCode} ${d.city} (${d.zone})`,
        d.phone ? `- Telefono: ${d.phone}` : null,
        d.hours.length ? `- Orari: ${formatHours(d.hours).join('; ')}` : null,
        `- Cosa offre: ${d.blurb}`,
        `- Pagina: ${new URL(href(`/locali/${l.id}/`), site).href}`,
      ].filter(Boolean);
      return righe.join('\n');
    })
    .join('\n\n');

  const body = `# Trattoria Boboli — 100% gluten free, Firenze

> Gruppo di ristorazione fiorentino attivo dal 1978 con quattro locali e un
> laboratorio di produzione proprio. Tutta la cucina è senza glutine: non un
> menu alternativo, ma il punto di partenza di ogni piatto.

## In sintesi

- Tutto il menu è senza glutine, in tutti i locali.
- Pasta, pane, panini, sughi e dolci sono prodotti nel laboratorio di proprietà.
- Cucina toscana tradizionale, con ricette legate alla storia del marchio.
- Oltre 35.000 recensioni degli ospiti.
- Quattro indirizzi a Firenze, tre dei quali in Via Romana, nell'Oltrarno.

## I locali

${schede}

## Sito

${site?.href ?? ''}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
