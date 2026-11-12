# Tracciamento (Google Tag Manager)

Il sito carica il contenitore `GTM-T2WDP2HV` solo in produzione (`web/src/lib/tracking.ts`)
e segnala questi eventi nel `dataLayer`:

| Evento | Quando | Dati |
| --- | --- | --- |
| `booking_open` | scelto un locale, si apre il modulo TheFork | `locale` |
| `booking_complete` | pagina `/grazie/<locale>/` dopo la prenotazione | `locale` |
| `form_sent` | modulo eventi o candidatura inviato | `form` |
| `contact_click` | clic su telefono o WhatsApp | `method`, `link_url` |
| `order_click` | clic su Glovo | `link_url` |
| `smartbox_click` | clic sulla registrazione Smartbox | `link_url` |
| `thefork_message` | messaggi del riquadro TheFork (solo diagnosi) | `tf_data` |

`GTM-T2WDP2HV_sito-nuovo.json` è il contenitore da importare in Tag Manager
(Amministrazione → Importa contenitore → Sovrascrivi): i tag di Google Ads sono
agganciati a `booking_open` e `booking_complete` invece che al testo dei pulsanti
e alle pagine `/news/…` del vecchio sito.

In TheFork Manager l'indirizzo di ritorno dopo la prenotazione va impostato su
`https://www.trattoriaboboli.it/grazie/<locale>/` (`trattoria-1978`, `al-bargello`, `la-cantina`).
I due indirizzi vecchi `/it/news/…` rimandano già lì (`web/vercel.json`).
