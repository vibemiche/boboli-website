/**
 * Chi pubblica il sito: i dati che la legge chiede di mostrare.
 *
 * - art. 2250 c.c.: sede, ufficio del Registro delle imprese e numero di iscrizione,
 *   capitale sociale effettivamente versato, socio unico, eventuale liquidazione;
 * - art. 35 DPR 633/1972: la partita IVA nella home del sito;
 * - art. 7 D.Lgs. 70/2003: denominazione, sede, contatti (anche e-mail), REA, partita IVA.
 *
 * Un campo a `null` non compare sul sito: va compilato con i dati della visura
 * camerale. `missingLegal()` li elenca e la build li stampa come avviso.
 */
export const LEGAL = {
  name: 'Yana Srl',
  form: 'società a responsabilità limitata',
  vat: '06873090481',
  /** Il codice fiscale, se diverso dalla partita IVA. Per le Srl di solito coincide. */
  taxCode: '06873090481' as string | null,
  address: {
    street: "Via Duca d'Aosta",
    number: '16' as string | null,
    postalCode: '50129' as string | null,
    city: 'Firenze' as string | null,
    province: 'FI' as string | null,
  },
  /** Es. «Firenze»: l'ufficio del Registro delle imprese. */
  registry: 'Firenze' as string | null,
  /** Es. «FI-123456». */
  rea: 'FI-662858' as string | null,
  /** Es. «10.000,00 € interamente versato». */
  capital: '10.000,00 € interamente versato' as string | null,
  /** true se la società ha un solo socio: la legge chiede di scriverlo. */
  soleShareholder: false as boolean | null,
  pec: 'yanasrl@pec.it' as string | null,
  email: null as string | null,
};

/** La sede su una riga, solo se è completa: una sede a metà non vale come indicazione. */
export function legalAddress(): string | null {
  const a = LEGAL.address;
  if (!a.number || !a.postalCode || !a.city) return null;
  return `${a.street}, ${a.number} - ${a.postalCode} ${a.city}${a.province ? ` (${a.province})` : ''}`;
}

/** I dati obbligatori che mancano ancora. */
export function missingLegal(): string[] {
  const out: string[] = [];
  if (!legalAddress()) out.push('sede legale completa (civico, CAP, città)');
  if (!LEGAL.registry || !LEGAL.rea) out.push('Registro delle imprese e numero REA');
  if (!LEGAL.capital) out.push('capitale sociale versato');
  if (LEGAL.soleShareholder === null) out.push('socio unico sì/no');
  if (!LEGAL.pec && !LEGAL.email) out.push('PEC o e-mail di contatto');
  return out;
}
