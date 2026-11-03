import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

type Data = CollectionEntry<'locali'>['data'];
export type Locale = Omit<Data, 'tr'> & { id: string; bookable: boolean };

export async function getLocali(lang: Lang): Promise<Locale[]> {
  const all = await getCollection('locali');
  return all
    .sort((a, b) => a.data.listOrder - b.data.listOrder)
    .map(({ id, data: { tr, ...d } }) => ({
      id,
      ...d,
      ...(lang === 'it' ? {} : tr[lang]),
      bookable: d.bookingUrl !== null,
    }));
}

export interface Tone { dark: boolean; wine: boolean; reverse: boolean; feature: boolean }

/** Il carattere di ogni locale, uguale in home e nella sua pagina: il Bargello è la
 *  sera (fondo scuro), la Cantina il vino (fondo bordeaux), il To-Go ha la carta a
 *  quadretti e il bollino. In home le foto si alternano a sinistra e a destra. */
export function toneOf(id: string): Tone {
  return {
    dark: id === 'al-bargello' || id === 'la-cantina',
    wine: id === 'la-cantina',
    reverse: id === 'al-bargello' || id === 'to-go',
    feature: id === 'to-go',
  };
}
