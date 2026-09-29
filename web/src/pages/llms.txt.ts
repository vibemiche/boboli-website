import type { APIRoute } from 'astro';
import { TRANSLATED, lp } from '../lib/i18n';
import { getLocali } from '../lib/locali';
import { ui } from '../lib/ui';
import { formatHours } from '../lib/contact';

/**
 * Indice in chiaro per i motori generativi: fatti autosufficienti, senza
 * markup da interpretare. Gli stessi dati della collection, così non possono
 * divergere dal sito.
 */
export const GET: APIRoute = async ({ site }) => {
  const locali = await getLocali('it');
  const url = (path: string, lang: 'it' | (typeof TRANSLATED)[number] = 'it') => new URL(lp(lang, path), site).href;

  const schede = locali
    .map((l) =>
      [
        `### ${l.nameLegal}`,
        `- Indirizzo: ${l.street}, ${l.postalCode} ${l.city} (${l.zone})`,
        l.phone ? `- Telefono: ${l.phone}` : null,
        l.hours.length ? `- Orari: ${formatHours(l.hours, ui.it.hours).join('; ')}` : null,
        l.bookingUrl ? `- Prenotazione online: ${l.bookingUrl}` : null,
        `- Cosa offre: ${l.blurb}`,
        `- Pagina: ${url(`/locali/${l.id}/`)}`,
        `- Menu: ${url(l.id === 'to-go' ? '/menu/#to-go' : '/menu/')}`,
        l.smartboxUrl ? `- Smartbox: si usa qui; il codice si inserisce da ${url('/smartbox/')}` : null,
      ]
        .filter(Boolean)
        .join('\n'),
    )
    .join('\n\n');

  const body = `# Trattoria Boboli — 100% gluten free, Firenze

> Gruppo di ristorazione fiorentino attivo dal 1978 con quattro locali e un
> laboratorio di produzione proprio. Tutta la cucina è senza glutine: non un
> menu alternativo, ma il punto di partenza di ogni piatto.

## In sintesi

- Tutto il menu è senza glutine, in tutti i locali.
- Pasta, pane, panini, sughi e dolci sono prodotti nel laboratorio di proprietà.
- Cucina toscana tradizionale, con ricette legate alla storia del marchio.
- Quattro indirizzi a Firenze, tre dei quali in Via Romana, nell'Oltrarno.

## I locali

${schede}

## Altre lingue

${TRANSLATED.map((l) => `- ${l.toUpperCase()}: ${url('/', l)}`).join('\n')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
