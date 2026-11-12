import { href } from './site';

export const LANGS = ['it', 'en', 'es', 'de', 'fr'] as const;
export type Lang = (typeof LANGS)[number];
export const TRANSLATED = LANGS.filter((l) => l !== 'it') as Exclude<Lang, 'it'>[];

/** Lingua servita a chi ha il browser in una lingua che non traduciamo. */
export const FALLBACK: Lang = 'en';

export const OG_LOCALE: Record<Lang, string> = {
  it: 'it_IT',
  en: 'en_GB',
  es: 'es_ES',
  de: 'de_DE',
  fr: 'fr_FR',
};

/**
 * I pezzi degli indirizzi nelle altre lingue: `/locali/` in inglese è
 * `/en/restaurants/`. Nel codice i percorsi si scrivono sempre in italiano e
 * `lp()` li traduce; i pezzi che non sono qui (i nomi dei locali, «blog»,
 * «smartbox») restano uguali in tutte le lingue.
 */
export const SLUGS: Record<string, Record<Exclude<Lang, 'it'>, string>> = {
  locali: { en: 'restaurants', es: 'restaurantes', de: 'restaurants', fr: 'restaurants' },
  menu: { en: 'menu', es: 'carta', de: 'speisekarte', fr: 'carte' },
  eventi: { en: 'events', es: 'eventos', de: 'events', fr: 'evenements' },
  'lavora-con-noi': { en: 'careers', es: 'trabaja-con-nosotros', de: 'jobs', fr: 'recrutement' },
  'senza-glutine-firenze': { en: 'gluten-free-florence', es: 'sin-gluten-florencia', de: 'glutenfrei-florenz', fr: 'sans-gluten-florence' },
  'dove-mangiare': { en: 'where-to-eat', es: 'donde-comer', de: 'essen-in-der-naehe', fr: 'ou-manger' },
  'oltrarno-palazzo-pitti': { en: 'oltrarno-pitti-palace', es: 'oltrarno-palacio-pitti', de: 'oltrarno-palazzo-pitti', fr: 'oltrarno-palais-pitti' },
  'bistecca-fiorentina-senza-glutine': { en: 'gluten-free-florentine-steak', es: 'bistec-florentino-sin-gluten', de: 'bistecca-fiorentina-glutenfrei', fr: 'bistecca-fiorentina-sans-gluten' },
  'ribollita-senza-glutine': { en: 'gluten-free-ribollita', es: 'ribollita-sin-gluten', de: 'ribollita-glutenfrei', fr: 'ribollita-sans-gluten' },
  'panini-senza-glutine-firenze': { en: 'gluten-free-sandwiches-florence', es: 'bocadillos-sin-gluten-florencia', de: 'glutenfreie-panini-florenz', fr: 'panini-sans-gluten-florence' },
  'pasta-fresca-senza-glutine': { en: 'gluten-free-fresh-pasta', es: 'pasta-fresca-sin-gluten', de: 'frische-pasta-glutenfrei', fr: 'pates-fraiches-sans-gluten' },
  'vino-degustazioni-firenze': { en: 'wine-tasting-florence', es: 'vino-catas-florencia', de: 'wein-verkostung-florenz', fr: 'vin-degustation-florence' },
  'cucina-fiorentina-guida-completa-ai-piatti-tipici': { en: 'florentine-food-guide-typical-dishes', es: 'cocina-florentina-guia-platos-tipicos', de: 'florentiner-kueche-typische-gerichte', fr: 'cuisine-florentine-guide-plats-typiques' },
  'le-ricette-storiche-di-casa-boboli': { en: 'boboli-family-recipes-peposo', es: 'recetas-historicas-de-casa-boboli', de: 'familienrezepte-von-casa-boboli', fr: 'recettes-historiques-de-casa-boboli' },
  'visitare-firenze-tra-arte-e-sapori': { en: 'visiting-florence-art-and-food', es: 'visitar-florencia-arte-y-sabores', de: 'florenz-besuchen-kunst-und-kueche', fr: 'visiter-florence-art-et-saveurs' },
};

/** Il percorso italiano nella lingua data, senza base né prefisso: `/locali/to-go/` → `/restaurants/to-go/`. */
export function localPath(lang: Lang, path = '/'): string {
  if (lang === 'it') return path;
  const [route, hash = ''] = path.split('#');
  const out = route.split('/').map((seg) => SLUGS[seg]?.[lang] ?? seg).join('/');
  return hash ? `${out}#${hash}` : out;
}

/** Percorso con base e prefisso di lingua: l'italiano sta alla radice. */
export function lp(lang: Lang, path = '/'): string {
  return href((lang === 'it' ? '' : `/${lang}`) + localPath(lang, path));
}
