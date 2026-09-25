import { lp } from './i18n';
import type { Lang } from './i18n';
import type { Locale } from './locali';
import { ui } from './ui';
import { formatHours } from './contact';

/** Le domande fisse più quella sugli orari, scritta dai dati: non può invecchiare. */
export function buildFaq(lang: Lang, locali: Locale[]): [string, string][] {
  const d = ui[lang];
  const hours = locali.map((l) => `${l.nameShort}: ${formatHours(l.hours, d.hours).join(', ')}`).join('. ') + '.';
  return [...d.seo.faq, [d.seo.hoursQ, hours]];
}

/** I link interni del testo SEO, nella lingua della pagina. */
export function seoLink(lang: Lang) {
  return (key: string, text: string) => {
    const path = key === 'lab' ? '/#laboratorio' : `/locali/${key}/`;
    return `<a href="${lp(lang, path)}">${text}</a>`;
  };
}
