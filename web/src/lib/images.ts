import type { ImageMetadata } from 'astro';

// Il nome del file è lo slot: le foto arrivano a scaglioni e chi le carica non
// deve toccare il codice. Quello che manca resta segnaposto, e la build regge.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

/** `hero`, `laboratorio`, `locali/to-go`, `menu/pane`. */
export function findImage(slot: string): ImageMetadata | null {
  const target = `/src/assets/${slot}`;
  const match = Object.keys(files).find((path) => path.replace(/\.[^./]+$/, '') === target);
  return match ? files[match].default : null;
}
