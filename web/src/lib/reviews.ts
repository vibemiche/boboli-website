// Le recensioni dei locali, copiate a mano dalle schede pubbliche. Si aggiornano
// solo qui: totali e medie si calcolano da soli, sempre arrotondati per difetto,
// così il sito non dice mai più di quello che un cliente può verificare.

/** Il mese a cui si riferiscono i numeri qui sotto (anno, mese da 1 a 12). */
export const REVIEWS_AS_OF = { year: 2026, month: 10 };

interface Platform {
  name: string;
  /** Il massimo della scala del voto: 5 su Google, 10 su TheFork. */
  scale: number;
  /** Voto e numero di recensioni di ogni locale presente sulla piattaforma. */
  locali: Record<string, { rating: number; count: number }>;
}

// Per aggiungere Tripadvisor basta un altro oggetto come questi.
const PLATFORMS: Platform[] = [
  {
    name: 'Google',
    scale: 5,
    locali: {
      'trattoria-1978': { rating: 4.7, count: 10048 },
      'al-bargello': { rating: 4.5, count: 4624 },
      'la-cantina': { rating: 4.9, count: 72 },
      'to-go': { rating: 4.9, count: 22 },
    },
  },
  {
    name: 'TheFork',
    scale: 10,
    locali: {
      'trattoria-1978': { rating: 8.9, count: 7685 },
      'al-bargello': { rating: 8.8, count: 6635 },
      'la-cantina': { rating: 8.5, count: 294 },
    },
  },
];

export interface PlatformSummary { name: string; scale: number; rating: number; count: number; locali: number }

/** Una riga per piattaforma: recensioni sommate e media pesata, troncata al decimale. */
export const platforms: PlatformSummary[] = PLATFORMS.map(({ name, scale, locali }) => {
  const rows = Object.values(locali);
  const count = rows.reduce((n, r) => n + r.count, 0);
  const weighted = rows.reduce((n, r) => n + r.rating * r.count, 0) / count;
  return { name, scale, count, locali: rows.length, rating: Math.floor(weighted * 10 + 1e-9) / 10 };
});

/** Tutte le recensioni, e lo stesso numero arrotondato per difetto alle migliaia per il titolo. */
export const totalReviews = platforms.reduce((n, p) => n + p.count, 0);
export const totalReviewsFloor = Math.floor(totalReviews / 1000) * 1000;
