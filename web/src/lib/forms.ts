// WhatsApp: il numero in formato internazionale, senza + né spazi.
export const WHATSAPP = '393775726708';

// La Smartbox si registra sul sito di Smartbox: controlla il codice, lo lega
// all'account di chi l'ha ricevuta e garantisce al locale il pagamento.
export const SMARTBOX_REGISTER = 'https://myaccount.smartbox.com/it/voucher/register/';

// I moduli del sito non hanno un server: li inoltra FormSubmit (formsubmit.co)
// alla casella indicata. La prima volta che arriva un modulo a una casella,
// FormSubmit manda lì una mail di attivazione da confermare con un clic.
// Dopo l'attivazione FormSubmit manda anche un codice casuale (alias): usarlo
// al posto dell'indirizzo qui sotto lo toglie dal codice della pagina, dove i
// programmi che raccolgono indirizzi per lo spam lo leggerebbero.
export const formAction = (email: string) => `https://formsubmit.co/${email}`;

// Le candidature, con il CV allegato.
// Al posto degli indirizzi ci sono gli alias di FormSubmit, così le caselle non
// si leggono nel codice della pagina. Alias → casella:
//   6a07d1e1… → boboli.trattoria@gmail.com · c78be9c5… → osteriagv@gmail.com
// Cambiando casella serve un nuovo alias (e una nuova attivazione).
const BOBOLI = '6a07d1e195f0569efaee2d0bd11300f8';
const GV = 'c78be9c597519e7207153d4f3b7c4ac3';

export const JOBS_EMAIL = BOBOLI;

// Le richieste per gruppi ed eventi: ogni sede ha la sua casella.
export const EVENTS_EMAIL: Record<string, string> = {
  'trattoria-1978': BOBOLI,
  'al-bargello': GV,
};

// Le richieste che contengono una di queste parole FormSubmit le scarta in
// silenzio (`_blacklist`, massimo una ventina).
export const SPAM_WORDS = [
  'crypto', 'bitcoin', 'forex', 'viagra', 'cialis', 'porn', 'loan',
  'seo services', 'backlinks', 'web design services', 'guest post', 'rank your website',
  'telegram', 'betting', 'escort', 'payday',
];
