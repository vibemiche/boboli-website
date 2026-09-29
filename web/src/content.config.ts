import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const day = z.enum(['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']);

// I campi che cambiano con la lingua. L'italiano sta al primo livello, le
// traduzioni in `tr`: una lingua mancante fa fallire la build.
const text = z.object({
  kicker: z.string(),
  title: z.string(),
  // Sintesi per snippet, JSON-LD e llms.txt: in pagina si legge `body`.
  blurb: z.string(),
  body: z.array(z.string()).min(1),
  choiceVerb: z.string(),
  choiceSub: z.string(),
  imageAlt: z.string(),
});

const locali = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/locali' }),
  schema: text.extend({
    // `nameLegal` deve restare identico alla scheda Google Business: è la
    // corrispondenza esatta che regge il posizionamento locale.
    nameLegal: z.string(),
    nameShort: z.string(),
    // L'illustrazione tonda accanto al verbo: un file in assets/illustrazioni/.
    seal: z.string().nullable().default(null),
    street: z.string(),
    // Il numero civico è il numerale gigante dei blocchi e il pin sulla mappa.
    civic: z.string(),
    postalCode: z.string(),
    city: z.string().default('Firenze'),
    zone: z.string(),
    // Formato internazionale con spazi, com'è mostrato: "+39 055 2336401".
    phone: z.string().nullable().default(null),
    // L'indirizzo del widget TheFork: se c'è, il locale si prenota online.
    bookingUrl: z.string().url().nullable().default(null),
    geo: z.object({ lat: z.number(), lng: z.number() }).nullable().default(null),
    // Una riga per fascia; i giorni non coperti risultano chiusi.
    hours: z.array(z.object({ from: day, to: day, opens: z.string(), closes: z.string() })).default([]),
    sameAs: z.array(z.string().url()).default([]),
    formatOrder: z.number().nullable().default(null),
    listOrder: z.number(),
    tr: z.object({ en: text, es: text, de: text, fr: text }),
  }),
});

export const collections = { locali };
