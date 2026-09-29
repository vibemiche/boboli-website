import { findSeries } from './images';

// Come per le foto, il nome del file è lo slot. Un menu è un PDF
// (`ristoranti.pdf`) oppure una serie di immagini (`to-go-1-panini.jpg`,
// `to-go-2-pasta.jpg`…). Si sostituisce il file con lo stesso nome e il sito si
// aggiorna; l'URL porta l'hash del contenuto, così nessun browser resta con il
// menu vecchio.
const pdfs = import.meta.glob<string>('/src/assets/menu/*.pdf', { query: '?url', import: 'default', eager: true });

export const MENUS = ['ristoranti', 'to-go'] as const;
export type MenuId = (typeof MENUS)[number];

export function menuPdf(id: MenuId): string | null {
  return pdfs[`/src/assets/menu/${id}.pdf`] ?? null;
}

export function menuImages(id: MenuId) {
  return findSeries(`menu/${id}`).map(({ name, image }) => ({
    image,
    // `to-go-1-panini` → `panini`
    label: name.replace(new RegExp(`^${id}-?`), '').replace(/^\d+-?/, '').replace(/-/g, ' '),
  }));
}

/**
 * Il testo del PDF, riga per riga, per chi legge con lo screen reader e per i
 * motori. Le doppie pagine si leggono come due colonne, sinistra poi destra.
 */
export async function menuText(id: MenuId): Promise<string[][]> {
  const { existsSync, readFileSync } = await import('node:fs');
  const { join } = await import('node:path');
  const file = join(process.cwd(), 'src/assets/menu', `${id}.pdf`);
  if (!existsSync(file)) return [];
  const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const task = getDocument({ data: new Uint8Array(readFileSync(file)) });
  const doc = await task.promise;
  const pages: string[][] = [];
  for (let n = 1; n <= doc.numPages; n++) {
    const page = await doc.getPage(n);
    const { width, height } = page.getViewport({ scale: 1 });
    const spread = width > height * 1.2;
    const { items } = await page.getTextContent();
    const halves: Map<number, { x: number; s: string }[]>[] = [new Map(), new Map()];
    for (const it of items) {
      if (!('str' in it) || !it.str.trim()) continue;
      const [x, y] = [it.transform[4], Math.round(it.transform[5] / 3)];
      const lines = halves[spread && x > width / 2 ? 1 : 0];
      lines.set(y, [...(lines.get(y) ?? []), { x, s: it.str }]);
    }
    for (const lines of halves) {
      const text = [...lines.entries()]
        .sort((a, b) => b[0] - a[0])
        .map(([, parts]) => parts.sort((a, b) => a.x - b.x).map((p) => p.s).join(' ').replace(/\s+/g, ' ').trim());
      if (text.length) pages.push(text);
    }
  }
  await task.destroy();
  return pages;
}
