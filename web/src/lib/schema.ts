import { getImage } from 'astro:assets';
import type { Lang } from './i18n';
import { lp } from './i18n';
import type { Locale } from './locali';
import type { Dict } from './ui';
import { findImage } from './images';
import { openingHoursSpecification } from './contact';

const abs = (path: string, site: URL) => new URL(path, site).href;
const orgId = (site: URL) => abs(lp('it', '/'), site) + '#organization';

/** Il ritaglio 1200×630 della foto: anteprima social e `image` dei dati strutturati. */
export async function socialImage(slot: string, site: URL): Promise<string | null> {
  const img = findImage(slot) ?? findImage('hero');
  if (!img) return null;
  const { src } = await getImage({ src: img, width: 1200, height: 630, fit: 'cover', format: 'jpg' });
  return abs(src, site);
}

/**
 * I dati strutturati servono due volte: i rich result di Google e i motori
 * generativi, che da qui estraggono indirizzi e orari senza doverli indovinare
 * dal testo. L'`@id` è lo stesso in ogni lingua: è un solo ristorante.
 */
export function restaurantSchema(l: Locale, lang: Lang, t: Dict, site: URL, image: string | null) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': abs(lp('it', `/locali/${l.id}/`), site) + '#restaurant',
    name: l.nameLegal,
    alternateName: l.nameShort,
    description: l.blurb,
    url: abs(lp(lang, `/locali/${l.id}/`), site),
    ...(image ? { image } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: l.street,
      postalCode: l.postalCode,
      addressLocality: l.city,
      addressRegion: 'FI',
      addressCountry: 'IT',
    },
    ...(l.geo ? { geo: { '@type': 'GeoCoordinates', latitude: l.geo.lat, longitude: l.geo.lng } } : {}),
    ...(l.phone ? { telephone: l.phone } : {}),
    ...(l.hours.length ? { openingHoursSpecification: openingHoursSpecification(l.hours) } : {}),
    servesCuisine: t.meta.cuisine,
    acceptsReservations: l.bookingUrl ?? false,
    // La dieta sta sui piatti, dove schema.org la prevede: è la promessa del brand
    // detta a una macchina.
    hasMenu: {
      '@type': 'Menu',
      name: t.meta.menuName,
      hasMenuSection: {
        '@type': 'MenuSection',
        name: t.meta.menuName,
        hasMenuItem: t.manifesto.items.map((name) => ({
          '@type': 'MenuItem',
          name,
          suitableForDiet: 'https://schema.org/GlutenFreeDiet',
        })),
      },
    },
    ...(l.sameAs.length ? { sameAs: l.sameAs } : {}),
    parentOrganization: { '@id': orgId(site) },
  };
}

export function organizationSchema(t: Dict, lang: Lang, site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId(site),
    name: 'Trattoria Boboli',
    url: abs(lp(lang, '/'), site),
    slogan: t.footer.tagline[0].replace(/\.$/, ''),
    description: t.meta.orgDesc,
    foundingDate: '1978',
  };
}

export function faqSchema(items: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[], site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, n) => ({
      '@type': 'ListItem',
      position: n + 1,
      name: i.name,
      item: abs(i.url, site),
    })),
  };
}
