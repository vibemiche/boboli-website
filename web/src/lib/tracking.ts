import { indexable } from './site';

/** Il contenitore Google Tag Manager del sito (Google Ads, Analytics). */
export const GTM_ID = 'GTM-T2WDP2HV';

/**
 * Il tracciamento è acceso solo sul sito vero (produzione su Vercel), così le
 * prove sulla copia di staging non sporcano i dati delle campagne.
 * PUBLIC_TRACKING=true lo accende a mano per i collaudi.
 */
export const tracking = indexable || import.meta.env.PUBLIC_TRACKING === 'true';

/**
 * Le pagine del vecchio sito a cui TheFork rimandava dopo una prenotazione:
 * ora portano alla pagina di ringraziamento del locale (vedi vercel.json).
 */
export const THANKS_PATH = (id: string) => `/grazie/${id}/`;
