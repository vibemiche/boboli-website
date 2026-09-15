import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const day = z.enum(['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']);

const locali = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/locali' }),
  schema: z.object({
    // `nameLegal` deve restare identico alla scheda Google Business: è la
    // corrispondenza esatta che regge il posizionamento locale.
    nameLegal: z.string(),
    nameShort: z.string(),
    kicker: z.string(),
    title: z.string(),
    blurb: z.string(),
    insight: z.string().nullable().default(null),
    // Il verbo con cui il locale compare nell'indice delle scelte in home.
    choiceVerb: z.string(),
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
    bookingUrl: z.string().url().nullable().default(null),
    geo: z.object({ lat: z.number(), lng: z.number() }).nullable().default(null),
    // Una riga per fascia; i giorni non coperti risultano chiusi.
    hours: z.array(z.object({ from: day, to: day, opens: z.string(), closes: z.string() })).default([]),
    sameAs: z.array(z.string().url()).default([]),
    ctaLabel: z.string(),
    formatOrder: z.number().nullable().default(null),
    listOrder: z.number(),
    imageAlt: z.string(),
  }),
});

export const collections = { locali };
