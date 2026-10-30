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

export interface Tone { dark: boolean; reverse: boolean; feature: boolean }

/** Il carattere di ogni locale, uguale in home e nella sua pagina: il Bargello è la
 *  sera (fondo scuro, foto a destra), il To-Go ha la carta a quadretti e il bollino. */
export function toneOf(id: string): Tone {
  return {
    dark: id === 'al-bargello',
    reverse: id === 'al-bargello',
    feature: id === 'to-go',
  };
}
