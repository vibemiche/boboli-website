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
| `locali/trattoria-1978.jpg` | Blocco 45/R + pagina del locale | orizzontale | Sala piena, gente a tavola, luce di pranzo. **Aria a sinistra**: lì ci va «45/R» |
| `locali/al-bargello.jpg` | Blocco 147/R + pagina del locale | orizzontale | Sera, vino, due coperti. Sta su fondo nero: servono ombre profonde |
| `locali/to-go.jpg` | Blocco 52 + pagina del locale | orizzontale, più alto | Il panino in mano, per strada. Questo blocco sfonda: la foto è grande |
| `locali/la-cantina.jpg` | Pagina della Cantina | orizzontale | Bottiglie, la selezione |
| `laboratorio.jpg` | Sezione «Fatto da noi» | orizzontale | Mani, impasto, la stanza |

`hero.webp` serve anche come anteprima quando il link viene condiviso su WhatsApp o per mail:
viene ritagliata a 1200×630 in automatico.

La mappa dei locali non è un'immagine: è interattiva, e prende le coordinate dai file in
`src/content/locali/`.

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
- **Niente desaturazione**: sul cibo saturazione e contrasto restano pieni. L'eventuale
  trattamento si fa in CSS, così si cambia idea senza riesportare l'archivio.
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
