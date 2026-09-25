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
