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

/** Percorso con base e prefisso di lingua: l'italiano sta alla radice. */
export function lp(lang: Lang, path = '/'): string {
  return href((lang === 'it' ? '' : `/${lang}`) + path);
}
