# Le immagini del sito

Il **nome del file è il posto in cui l'immagine finisce**. Carichi un file con il nome giusto e
quel riquadro grigio diventa una foto; i riquadri senza file restano grigi e non rompono
niente. Non serve toccare il codice, mai.

Astro genera da solo AVIF e WebP in tutte le misure e scrive `srcset`: tu carichi **un** file
(`.jpg`, `.png` o `.webp`), il sito serve la versione giusta a ogni schermo.

## Foto

| File | Dove appare | Taglio | Cosa inquadra |
| --- | --- | --- | --- |
| `hero.webp` | Hero, a tutto schermo | orizzontale 3:2 o 16:9 | *(già caricata)* |
| `firenze.webp` | Sezione dei locali, sotto la mappa | orizzontale | *(già caricata)* |
| `locali/trattoria-1978.jpg` | Blocco 45/R + pagina del locale | orizzontale | *(caricata: la sala con la boiserie)* |
| `locali/al-bargello.jpg` | Blocco 147/R + pagina del locale | orizzontale | *(caricata: la sala con i mattoni)* |
| `locali/to-go.jpg` | Blocco 52 + pagina del locale | orizzontale, più alto | *(caricata: il panino in mano)* |
| `locali/la-cantina.jpg` | Pagina della Cantina | orizzontale | *(caricata: la sala sotto le volte)* |
| `laboratorio.jpg` | Sezione «Fatto da noi» | verticale 4:5 | *(caricata: lo chef al tagliere)* |
| `eventi.jpg` | Pagina «Gruppi ed eventi», sotto il titolo | orizzontale | *(caricata: burrata e melanzane servite)* |

### Altre foto di un locale

La pagina di un locale mostra, sotto orari e indirizzo, le foto numerate con il suo nome:
`locali/<locale>-2-….jpg`, `locali/<locale>-3-….jpg`, in ordine di numero, tagliate in verticale 4:5.
Ora ci sono `locali/trattoria-1978-2-tagliere.jpg` e `locali/to-go-2-ingresso.jpg`.
Il testo alternativo di ognuna va nel campo `galleryAlt` di `src/content/locali/<locale>.json`
(uno per foto, nello stesso ordine, in tutte le lingue).

### Inquadratura

Le foto riempiono riquadri con proporzioni fisse, quindi vengono ritagliate. Se in un riquadro si
perde il soggetto, il punto da tenere al centro si regola in `src/styles/global.css`, sezione
«inquadrature» (per esempio `[data-slot="laboratorio"] img{object-position:50% 25%}`).

`hero.webp` serve anche come anteprima quando il link viene condiviso su WhatsApp o per mail:
viene ritagliata a 1200×630 in automatico.

La mappa dei locali non è un'immagine: è interattiva, e prende le coordinate dai file in
`src/content/locali/`.

## I menu (`menu/`)

La pagina `/menu/` mostra due menu, e anche qui **il nome del file è il posto**:

| File | Menu |
| --- | --- |
| `menu/ristoranti.pdf` | Trattoria, Bargello e Cantina |
| `menu/to-go-1-panini.jpg`, `menu/to-go-2-pasta.jpg` | To-Go |

Un menu può essere **un PDF** (`<nome>.pdf`) oppure **una serie di immagini**
(`<nome>-1-….jpg`, `<nome>-2-….jpg`: escono nell'ordine dei numeri).

**Per aggiornare il menu** carica il nuovo file **con lo stesso nome**: GitHub sostituisce il
vecchio e dopo ~2 minuti il sito mostra quello nuovo. Se il file ha un altro nome (per esempio
`boboli v6 ita eng.pdf`) rinominalo prima di caricarlo, oppure dopo, da GitHub: un nome diverso
non rompe niente, ma il sito continua a mostrare il menu vecchio.

Del PDF il sito legge anche il testo, che diventa la versione «solo testo» per screen reader e
motori di ricerca: esporta il PDF con il testo selezionabile, non come immagine.

## Marchi senza glutine (`marchi/`)

`marchi/aic.png` (AIC Alimentazione Fuori Casa) e `marchi/gluten-free.png` (100% Gluten Free)
compaiono nella fascia verde «100% gluten free» della home e nel footer di ogni pagina. Sono PNG
**con lo sfondo trasparente**: un marchio nuovo va caricato così, non su fondo bianco.

## Logo e illustrazioni

- `logo.svg` — il marchio, in header e footer. Il nero della scritta segue il contesto (inchiostro
  su crema, crema su nero); il fregio resta bordeaux sul chiaro e diventa terracotta sul nero.
- `illustrazioni/` — i tondi incisi, 1:1. Sono a **nome**, e ogni nome ha un posto:

| File | Dove appare |
| --- | --- |
| `illustrazioni/vetrina.jpg` | Indice delle scelte: «Mangia in trattoria» |
| `illustrazioni/carne.jpg` | Indice: «Cena al Bargello» · striscia del menu |
| `illustrazioni/cantina.jpg` | Indice: «Bevi in cantina» |
| `illustrazioni/antipasti.jpg` | Indice: «Prendi un panino to go» · striscia del menu |
| `illustrazioni/pasta.jpg` | Indice: «Porta Boboli a casa» · striscia del menu |
| `illustrazioni/dolci.jpg` | Striscia del menu |
| `illustrazioni/menu.jpg`, `recensioni.jpg`, `staff.jpg`, `social.jpg` | Non ancora usate |

Quale illustrazione va accanto a quale locale si decide nel campo `seal` di
`src/content/locali/<locale>.json`.

## Prima di caricare

- **Ridimensiona**: lato lungo 2400–3000px, qualità ~80, sRGB, sotto 1,5 MB a file.
  Git conserva ogni versione per sempre: un originale da 8 MB resta nel repo anche dopo
  averlo sostituito.
- **I nomi devono essere esatti**, minuscoli, senza spazi né accenti. Un nome sbagliato non
  rompe niente: quel riquadro resta grigio. Rinomini e ricarichi.
- **Niente desaturazione**: sul cibo saturazione e contrasto restano pieni.
- **Lo stesso tono per tutte**: le foto caricate finora hanno un bilanciamento del bianco verso un
  neutro caldo, una leggera curva a S e i neri verso l'inchiostro del sito. Una foto nuova va
  trattata allo stesso modo, così resta coerente con le altre.
- Per un brand 100% gluten free: controlla che nell'inquadratura non ci sia niente che legga
  come *grano* — un sacco di farina con la spiga, un pacco di semola.

## Come si carica da github.com

1. Apri `github.com/vibemiche/boboli-website`
2. Entra in `web` → `src` → `assets` — **la cartella in cui ti trovi è quella in cui finiscono
   i file**, quindi per le foto dei locali entra prima in `assets/locali`
3. **Add file** → **Upload files**, trascina, controlla i nomi
4. **Commit changes** sul ramo `main`
5. Dopo ~2 minuti il sito è aggiornato. Lo stato è nella tab **Actions**

Limiti di GitHub via browser: 25 MB per file, 100 file per commit.
