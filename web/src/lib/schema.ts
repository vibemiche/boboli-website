import type { CollectionEntry } from 'astro:content';
import { href } from './site';

/**
 * I dati strutturati servono due volte: i rich result di Google e i motori
 * generativi, che da qui estraggono indirizzi e orari senza doverli indovinare
 * dal testo.
 */
export function restaurantSchema(locale: CollectionEntry<'locali'>, site: URL) {
  const d = locale.data;
  const page = new URL(href(`/locali/${locale.id}/`), site).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': page,
    name: d.nameLegal,
    alternateName: d.nameShort,
    url: page,
    address: {
      '@type': 'PostalAddress',
      streetAddress: d.street,
      postalCode: d.postalCode,
      addressLocality: d.city,
      addressRegion: 'FI',
      addressCountry: 'IT',
    },
    servesCuisine: ['Toscana', 'Italiana', 'Gluten free'],
    // Il campo previsto da schema.org per dire a una macchina esattamente ciò
    // che il brand promette a voce.
    suitableForDiet: 'https://schema.org/GlutenFreeDiet',
    ...(d.phone ? { telephone: d.phone } : {}),
    ...(d.geo ? { geo: { '@type': 'GeoCoordinates', latitude: d.geo.lat, longitude: d.geo.lng } } : {}),
    ...(d.openingHours.length ? { openingHours: d.openingHours } : {}),
    ...(d.sameAs.length ? { sameAs: d.sameAs } : {}),
  };
}

export function organizationSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trattoria Boboli',
    url: site.href,
    slogan: 'La libertà di scegliere',
    description:
      'Gruppo di ristorazione fiorentino con quattro locali e un laboratorio di produzione proprio: tutta la cucina è senza glutine.',
    foundingDate: '1978',
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[], site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, n) => ({
      '@type': 'ListItem',
      position: n + 1,
      name: i.name,
      item: new URL(href(i.path), site).href,
    })),
  };
}
