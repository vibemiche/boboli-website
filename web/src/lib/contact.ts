import type { Locale } from './locali';
import type { Dict } from './ui';

type Hours = Locale['hours'];
type Day = Hours[number]['from'];

const DAYS: Day[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const SCHEMA: Record<Day, string> = { Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday' };

export function telHref(phone: string): string {
  return 'tel:' + phone.replace(/[^\d+]/g, '');
}

function range(from: Day, to: Day): Day[] {
  const a = DAYS.indexOf(from);
  const b = DAYS.indexOf(to);
  return b >= a ? DAYS.slice(a, b + 1) : [...DAYS.slice(a), ...DAYS.slice(0, b + 1)];
}

/** Righe leggibili: `Tutti i giorni 12–22`, `Mar–Dom 9–16`, `Chiuso il lunedì`. */
export function formatHours(hours: Hours, t: Dict['hours']): string[] {
  const lines = hours.map((h) => {
    const days = range(h.from, h.to);
    const label = days.length === 7 ? t.everyday : h.from === h.to ? t.short[h.from] : `${t.short[h.from]}–${t.short[h.to]}`;
    return `${label} ${t.time(h.opens)}–${t.time(h.closes)}`;
  });
  const open = new Set(hours.flatMap((h) => range(h.from, h.to)));
  const closed = DAYS.filter((d) => !open.has(d)).map((d) => t.long[d]);
  if (hours.length && closed.length) lines.push(t.closed(closed.join(', ')));
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

export function directionsUrl(l: Pick<Locale, 'geo' | 'nameLegal' | 'street' | 'postalCode' | 'city'>): string {
  const dest = l.geo ? `${l.geo.lat},${l.geo.lng}` : `${l.nameLegal}, ${l.street}, ${l.postalCode} ${l.city}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`;
}
