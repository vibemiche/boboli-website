// WhatsApp: il numero in formato internazionale, senza + né spazi.
export const WHATSAPP = '393775726708';

// La Smartbox si registra sul sito di Smartbox: controlla il codice, lo lega
// all'account di chi l'ha ricevuta e garantisce al locale il pagamento.
export const SMARTBOX_REGISTER = 'https://myaccount.smartbox.com/it/voucher/register/';

// I moduli del sito non hanno un server: li inoltra FormSubmit (formsubmit.co)
// alla casella indicata. La prima volta che arriva un modulo a una casella,
// FormSubmit manda lì una mail di attivazione da confermare con un clic.
export const formAction = (email: string) => `https://formsubmit.co/${email}`;

// Le candidature, con il CV allegato.
export const JOBS_EMAIL = 'boboli.trattoria@gmail.com';

// Le richieste per gruppi ed eventi: ogni sede ha la sua casella.
export const EVENTS_EMAIL: Record<string, string> = {
  'trattoria-1978': 'boboli.trattoria@gmail.com',
  'al-bargello': 'osteriagv@gmail.com',
};
