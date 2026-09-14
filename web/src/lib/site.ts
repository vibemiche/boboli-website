const base = import.meta.env.BASE_URL;

/** Prefissa i link interni con la base, che in staging è /boboli-website/. */
export function href(path: string): string {
  return (base.replace(/\/$/, '') + '/' + path.replace(/^\//, '')).replace(/\/+/g, '/');
}

/** Finché il sito vive sull'URL provvisorio resta fuori dall'indice. */
export const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';

export const brand = {
  name: 'Trattoria Boboli',
  claim: 'La libertà di scegliere',
  city: 'Firenze',
};
