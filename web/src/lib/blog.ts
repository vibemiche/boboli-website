import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type Post = CollectionEntry<'blog'>;

/**
 * Gli articoli in italiano stanno in `content/blog/<nome>.md`; le traduzioni in
 * `content/blog/<lingua>/<nome>.md`, con lo stesso nome dell'italiano. Il nome
 * italiano è la chiave dell'articolo: l'indirizzo tradotto lo dà `lp()`.
 */
export const keyOf = (p: Post) => p.id.split('/').pop()!;
const langOf = (p: Post): Lang => (p.id.includes('/') ? (p.id.split('/')[0] as Lang) : 'it');

/** Gli articoli di una lingua, dal più recente. */
export async function getPosts(lang: Lang = 'it'): Promise<Post[]> {
  return (await getCollection('blog')).filter((p) => langOf(p) === lang).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Parole del testo, per il tempo di lettura e per i dati strutturati. */
export const wordsOf = (p: Post) => (p.body ?? '').replace(/[#*_>\[\]()`-]/g, ' ').split(/\s+/).filter(Boolean).length;

/** Minuti di lettura, a 200 parole al minuto. */
export const minutesOf = (p: Post) => Math.max(1, Math.round(wordsOf(p) / 200));

const LOCALE: Record<Lang, string> = { it: 'it-IT', en: 'en-GB', es: 'es-ES', de: 'de-DE', fr: 'fr-FR' };
export const dateOf = (d: Date, lang: Lang = 'it') =>
  new Intl.DateTimeFormat(LOCALE[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Rome' }).format(d);
export const dateIt = (d: Date) => dateOf(d, 'it');
export const isoDay = (d: Date) => d.toISOString().slice(0, 10);

/** I testi fissi del blog, nelle cinque lingue. */
export const BLOG: Record<Lang, {
  title: string; desc: string; kicker: string; h1: string; lead: string; name: string;
  updated: string; minutes: (n: number) => string; toc: string; faq: string; more: string;
  ctaText: string; guides: string; guide: string;
}> = {
  it: {
    title: 'Blog di Trattoria Boboli: cucina fiorentina senza glutine',
    desc: 'Piatti tipici fiorentini, ricette storiche di famiglia e itinerari tra arte e sapori: il blog di Trattoria Boboli, a Firenze, dove tutta la cucina è senza glutine.',
    kicker: 'Il blog', h1: 'Storie da tavola.',
    lead: 'Piatti tipici fiorentini, ricette di famiglia e Firenze da girare a piedi, con le soste giuste per mangiare. Tutto senza glutine.',
    name: 'Il blog di Trattoria Boboli',
    updated: 'Aggiornato il', minutes: (n) => `${n} min di lettura`, toc: 'In questo articolo', faq: 'Domande frequenti', more: 'Continua a leggere',
    ctaText: 'Quattro locali a Firenze, tutta la cucina 100% senza glutine.', guides: 'Guide · Dove mangiare a Firenze', guide: 'Guida',
  },
  en: {
    title: 'Trattoria Boboli blog: gluten-free Florentine food',
    desc: 'Typical Florentine dishes, family recipes and itineraries between art and food: the blog of Trattoria Boboli in Florence, where the whole kitchen is gluten free.',
    kicker: 'The blog', h1: 'Stories from the table.',
    lead: 'Typical Florentine dishes, family recipes and Florence on foot, with the right stops to eat. All gluten free.',
    name: 'The Trattoria Boboli blog',
    updated: 'Updated on', minutes: (n) => `${n} min read`, toc: 'In this article', faq: 'Frequently asked questions', more: 'Keep reading',
    ctaText: 'Four places in Florence, a 100% gluten-free kitchen.', guides: 'Guides · Where to eat in Florence', guide: 'Guide',
  },
  es: {
    title: 'Blog de Trattoria Boboli: cocina florentina sin gluten',
    desc: 'Platos típicos florentinos, recetas de familia e itinerarios entre arte y sabores: el blog de Trattoria Boboli, en Florencia, donde toda la cocina es sin gluten.',
    kicker: 'El blog', h1: 'Historias de mesa.',
    lead: 'Platos típicos florentinos, recetas de familia y Florencia a pie, con las paradas justas para comer. Todo sin gluten.',
    name: 'El blog de Trattoria Boboli',
    updated: 'Actualizado el', minutes: (n) => `${n} min de lectura`, toc: 'En este artículo', faq: 'Preguntas frecuentes', more: 'Sigue leyendo',
    ctaText: 'Cuatro locales en Florencia, toda la cocina 100% sin gluten.', guides: 'Guías · Dónde comer en Florencia', guide: 'Guía',
  },
  de: {
    title: 'Blog der Trattoria Boboli: Florentiner Küche glutenfrei',
    desc: 'Typische Florentiner Gerichte, Familienrezepte und Routen zwischen Kunst und Küche: der Blog der Trattoria Boboli in Florenz, wo die ganze Küche glutenfrei ist.',
    kicker: 'Der Blog', h1: 'Geschichten vom Tisch.',
    lead: 'Typische Florentiner Gerichte, Familienrezepte und Florenz zu Fuß, mit den richtigen Stopps zum Essen. Alles glutenfrei.',
    name: 'Der Blog der Trattoria Boboli',
    updated: 'Aktualisiert am', minutes: (n) => `${n} Min. Lesezeit`, toc: 'In diesem Artikel', faq: 'Häufige Fragen', more: 'Weiterlesen',
    ctaText: 'Vier Lokale in Florenz, die ganze Küche 100 % glutenfrei.', guides: 'Guides · Essen in Florenz', guide: 'Guide',
  },
  fr: {
    title: 'Blog de la Trattoria Boboli : cuisine florentine sans gluten',
    desc: 'Plats typiques florentins, recettes de famille et itinéraires entre art et saveurs : le blog de la Trattoria Boboli, à Florence, où toute la cuisine est sans gluten.',
    kicker: 'Le blog', h1: 'Histoires de table.',
    lead: 'Plats typiques florentins, recettes de famille et Florence à pied, avec les bonnes haltes pour manger. Tout sans gluten.',
    name: 'Le blog de la Trattoria Boboli',
    updated: 'Mis à jour le', minutes: (n) => `${n} min de lecture`, toc: 'Dans cet article', faq: 'Questions fréquentes', more: 'À lire aussi',
    ctaText: 'Quatre adresses à Florence, toute la cuisine 100 % sans gluten.', guides: 'Guides · Où manger à Florence', guide: 'Guide',
  },
};
