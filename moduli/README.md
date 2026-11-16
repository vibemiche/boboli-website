# Moduli del sito e FormSubmit

Il sito non ha un server: i moduli «Gruppi ed eventi» e «Lavora con noi» li inoltra per email
**FormSubmit** (formsubmit.co), un servizio gratuito.

## Quali moduli, a quale casella

| Modulo | Pagina | Casella |
| --- | --- | --- |
| Eventi, Trattoria Boboli 1978 | `/eventi/` (e `/en/events/`, ecc.) | boboli.trattoria@gmail.com |
| Eventi, Al Bargello | `/eventi/` (e traduzioni) | osteriagv@gmail.com |
| Candidature, con CV | `/lavora-con-noi/` (e traduzioni) | boboli.trattoria@gmail.com |

Le caselle stanno in `web/src/lib/forms.ts` (`JOBS_EMAIL`, `EVENTS_EMAIL`).

## Come si attiva una casella

FormSubmit non consegna niente finché la casella non conferma di voler ricevere i moduli.

1. Arriva una richiesta da un modulo del sito.
2. FormSubmit **trattiene la richiesta** e manda alla casella una mail dal titolo simile a
   «Action Required: Activate FormSubmit…», con il pulsante **«Activate Form»**.
   Spesso finisce in **Spam** o in **Promozioni**.
3. Si clicca **«Activate Form»**. Da quel momento:
   - le richieste trattenute vengono consegnate (fino a 30 giorni), **ma senza gli allegati**:
     i CV inviati prima dell'attivazione sono persi;
   - le nuove richieste arrivano subito, con gli allegati;
   - chi compila torna sul sito e vede la conferma.
4. La mail di attivazione contiene anche un **codice casuale** (alias): si può mettere al posto
   dell'indirizzo in `forms.ts`, così l'indirizzo non si legge più nel codice della pagina.

Prima dell'attivazione chi compila il modulo vede una pagina di FormSubmit in inglese, «Check Your
Email», invece della conferma del sito.

Se si cambia una casella in `forms.ts`, va attivata di nuovo.

## Cronologia

| Data | Cosa |
| --- | --- |
| 13/11/2026 | Collaudo senza invii (richieste intercettate): validazione, oggetto, trappola per bot, conferma, conteggio `form_sent`. Corretti «Rispondi» (`_replyto`) e i valori in italiano. |
| 13/11/2026 | Prova vera su una pagina temporanea verso una casella di prova: prima richiesta trattenuta e arrivata senza PDF dopo l'attivazione; seconda richiesta arrivata con PDF, «Rispondi» al candidato, codice HTML mostrato come testo. Pagina di prova tolta. |
| 16/11/2026 | Inviate 3 richieste «TEST DEL SITO» dai moduli veri: eventi 1978 e candidature → boboli.trattoria@gmail.com, eventi Bargello → osteriagv@gmail.com. Esito per tutte: **«This form needs Activation»**, cioè caselle non ancora attive. Mail di attivazione partite. |

## Cosa sapere

- Reply-To: il campo nascosto `_replyto` viene riempito con l'email del modulo, quindi «Rispondi» va a chi ha scritto.
- Allegati: massimo 10 MB in totale per FormSubmit; il sito blocca prima i file oltre 5 MB.
- Spam: c'è la trappola nascosta `_honey`; il reCAPTCHA è spento (`_captcha=false`). Se arriva spam,
  si può riaccendere o aggiungere `_blacklist` con le parole da scartare.
- Le richieste di prova del 16/11 hanno nome «TEST Attivazione sito» ed email test.sito@example.com: si possono cancellare.
- Per disattivare un modulo: formsubmit.co/help → «Request Deactivation».
