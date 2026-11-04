import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Gli articoli, dal più recente. */
export async function getPosts(): Promise<Post[]> {
  return (await getCollection('blog')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Parole del testo, per il tempo di lettura e per i dati strutturati. */
export const wordsOf = (p: Post) => (p.body ?? '').replace(/[#*_>\[\]()`-]/g, ' ').split(/\s+/).filter(Boolean).length;

/** Minuti di lettura, a 200 parole al minuto. */
export const minutesOf = (p: Post) => Math.max(1, Math.round(wordsOf(p) / 200));

const fmt = new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Rome' });
export const dateIt = (d: Date) => fmt.format(d);
export const isoDay = (d: Date) => d.toISOString().slice(0, 10);
