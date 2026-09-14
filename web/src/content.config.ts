import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
    blurbShort: z.string(),
    street: z.string(),
    postalCode: z.string(),
    city: z.string().default('Firenze'),
    zone: z.string(),
    phone: z.string().nullable().default(null),
    geo: z.object({ lat: z.number(), lng: z.number() }).nullable().default(null),
    openingHours: z.array(z.string()).default([]),
    sameAs: z.array(z.string().url()).default([]),
    ctaLabel: z.string(),
    formatNumber: z.string().nullable().default(null),
    formatOrder: z.number().nullable().default(null),
    listOrder: z.number(),
    imageAlt: z.string(),
  }),
});

export const collections = { locali };
