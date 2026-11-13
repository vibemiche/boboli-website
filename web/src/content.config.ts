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
  // Le foto in più della pagina del locale (`locali/<id>-2-….jpg`, …): un alt per foto, in ordine.
  galleryAlt: z.array(z.string()).default([]),
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
    // Il locale accetta la Smartbox: il voucher si registra sul sito Smartbox (lib/forms.ts).
    smartbox: z.boolean().default(false),
    // Dove si ordina a domicilio (Glovo): se c'è, accanto a «Chiama» compare «Ordina».
    orderUrl: z.string().url().nullable().default(null),
    geo: z.object({ lat: z.number(), lng: z.number() }).nullable().default(null),
    // Una riga per fascia; i giorni non coperti risultano chiusi.
    hours: z.array(z.object({ from: day, to: day, opens: z.string(), closes: z.string() })).default([]),
    /** La fascia di prezzo a persona, come su Google: «20–30 €». */
    priceRange: z.string().nullable().default(null),
    /** La scheda Google del locale: «Come arrivare» apre quella, cioè il posto esatto. */
    googleUrl: z.string().url().nullable().default(null),
    sameAs: z.array(z.string().url()).default([]),
    formatOrder: z.number().nullable().default(null),
    listOrder: z.number(),
    tr: z.object({ en: text, es: text, de: text, fr: text }),
  }),
});

// Il blog. Un file Markdown per articolo: il nome del file è l'indirizzo
// (/blog/<nome>/), uguale a quello del vecchio sito senza /it/. Le traduzioni
// stanno in <lingua>/<stesso nome>.md; l'indirizzo tradotto è in SLUGS (lib/i18n.ts).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // il titolo in pagina (h1) e quello per Google (<title>, ≤ 60 caratteri)
    title: z.string(),
    seoTitle: z.string().max(62),
    // la descrizione per Google, 120–160 caratteri
    description: z.string().min(110).max(165),
    // l'apertura sotto il titolo: risponde subito alla domanda di chi cerca
    lead: z.string(),
    kicker: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // la foto: un file in src/assets/ (vedi assets/README.md)
    image: z.string(),
    imageAlt: z.string(),
    // il gruppo di parole chiave dell'articolo: la prima è quella principale
    keywords: z.array(z.string()).min(1),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { locali, blog };
