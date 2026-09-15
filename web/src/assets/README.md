# Le foto del sito

Il **nome del file è il posto in cui la foto finisce**. Carichi un file con il nome giusto e
quel riquadro grigio diventa una foto; i riquadri senza file restano grigi e non rompono
niente. Non serve toccare il codice, mai.

Astro genera da solo AVIF e WebP in tutte le misure e scrive `srcset`: tu carichi **un** file,
il sito serve la versione giusta a ogni schermo.

## Cosa caricare, e dove

| File | Dove appare | Taglio | Cosa inquadra |
| --- | --- | --- | --- |
| `hero.jpg` | Hero, a tutto schermo | orizzontale 3:2 o 16:9 | La tavola dall'alto, piena di piatti diversi. È l'abbondanza, non l'atmosfera |
| `hero-mobile.jpg` | Hero su telefono *(facoltativo)* | verticale 4:5 | Stessa scena in verticale. Se manca si usa `hero.jpg`, ritagliato dal CSS |
| `locali/trattoria-1978.jpg` | Blocco 01 + pagina del locale | orizzontale | Sala piena, gente a tavola, luce di pranzo. **Aria a sinistra**: lì ci va «45/R» |
| `locali/al-bargello.jpg` | Blocco 02 + pagina del locale | orizzontale | Sera, vino, due coperti. Sta su fondo nero: servono ombre profonde |
| `locali/to-go.jpg` | Blocco 03 + pagina del locale | orizzontale, più alto | Il panino in mano, per strada. Questo blocco sfonda: la foto è grande |
| `locali/la-cantina.jpg` | Pagina della Cantina | orizzontale | Bottiglie, la selezione |
| `laboratorio.jpg` | Sezione «Fatto da noi» | orizzontale | Mani, impasto, la stanza |
| `menu/pane.jpg` | Striscia del menu | **quadrata 1:1** | Il pane |
| `menu/pasta-fresca.jpg` | Striscia del menu | quadrata 1:1 | La pasta fresca |
| `menu/sughi.jpg` | Striscia del menu | quadrata 1:1 | I sughi |
| `menu/dolci.jpg` | Striscia del menu | quadrata 1:1 | I dolci |
| `mappa.png` | Sezione dei locali | orizzontale ~1:1 | I 4 pin con i civici |

`hero.jpg` serve anche come anteprima quando il link viene condiviso su WhatsApp o per mail:
viene ritagliata a 1200×630 in automatico.

## Prima di caricare

- **Ridimensiona**: lato lungo 2400–3000px, JPG qualità ~80, sRGB, sotto 1,5 MB a file.
  Git conserva ogni versione per sempre: un originale da 8 MB resta nel repo anche dopo
  averlo sostituito.
- **I nomi devono essere esatti**, minuscoli, senza spazi né accenti. Un nome sbagliato non
  rompe niente: quel riquadro resta grigio. Rinomini e ricarichi.
- **Le quadrate del menu ritagliale davvero 1:1** prima di caricarle.
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
