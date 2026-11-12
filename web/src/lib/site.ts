const base = import.meta.env.BASE_URL;

/** Prefissa i link interni con la base, che in staging è /boboli-website/. */
export function href(path: string): string {
  return (base.replace(/\/$/, '') + '/' + path.replace(/^\//, '')).replace(/\/+/g, '/');
}

/**
 * Il sito si fa trovare da Google solo sul dominio definitivo: cioè nella
 * pubblicazione di produzione su Vercel (VERCEL_ENV lo dice da solo, senza
 * impostare nulla), oppure dove PUBLIC_INDEXABLE è 'true'. Le anteprime e la
 * copia di prova su GitHub Pages restano fuori dall'indice.
 */
export const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true' || process.env.VERCEL_ENV === 'production';
