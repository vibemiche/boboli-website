import type { CollectionEntry } from 'astro:content';

type Hours = CollectionEntry<'locali'>['data']['hours'];
type Day = Hours[number]['from'];

const DAYS: Day[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const SHORT: Record<Day, string> = { Mo: 'Lun', Tu: 'Mar', We: 'Mer', Th: 'Gio', Fr: 'Ven', Sa: 'Sab', Su: 'Dom' };
const LONG: Record<Day, string> = { Mo: 'Lunedì', Tu: 'Martedì', We: 'Mercoledì', Th: 'Giovedì', Fr: 'Venerdì', Sa: 'Sabato', Su: 'Domenica' };
const SCHEMA: Record<Day, string> = { Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday' };

export function telHref(phone: string): string {
  return 'tel:' + phone.replace(/[^\d+]/g, '');
}

function range(from: Day, to: Day): Day[] {
  const a = DAYS.indexOf(from);
  const b = DAYS.indexOf(to);
  return b >= a ? DAYS.slice(a, b + 1) : [...DAYS.slice(a), ...DAYS.slice(0, b + 1)];
}

const time = (t: string) => t.replace(/^0/, '').replace(/:00$/, '');

/** Righe leggibili: `Tutti i giorni 12–22`, `Mar–Dom 9–16`, `Lunedì chiuso`. */
export function formatHours(hours: Hours): string[] {
  const lines = hours.map((h) => {
    const days = range(h.from, h.to);
    const label = days.length === 7 ? 'Tutti i giorni' : h.from === h.to ? SHORT[h.from] : `${SHORT[h.from]}–${SHORT[h.to]}`;
    return `${label} ${time(h.opens)}–${time(h.closes)}`;
  });
  const open = new Set(hours.flatMap((h) => range(h.from, h.to)));
  const closed = DAYS.filter((d) => !open.has(d)).map((d) => LONG[d]);
  if (hours.length && closed.length) lines.push(`${closed.join(', ')} chiuso`);
  return lines;
}

export function openingHoursSpecification(hours: Hours) {
  return hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: range(h.from, h.to).map((d) => SCHEMA[d]),
    opens: h.opens,
    closes: h.closes,
  }));
}
