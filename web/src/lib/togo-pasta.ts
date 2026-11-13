import type { Lang } from './i18n';

// La pasta fresca da portare via del To-Go: una foto per ricetta in
// src/assets/to-go-pasta/<n>-<nome>.jpg. Una ricetta senza foto non compare:
// basta caricare il file con il nome giusto (es. 6-mezzi-paccheri-in-verde.jpg).
export const TOGO_DISHES: { slot: string; name: string; dessert?: boolean }[] = [
  { slot: 'to-go-pasta/1-pici-alla-mario', name: 'Pici alla Mario' },
  { slot: 'to-go-pasta/2-pici-al-peposo', name: 'Pici al peposo' },
  { slot: 'to-go-pasta/3-pici-carbonara', name: 'Pici carbonara' },
  { slot: 'to-go-pasta/4-pici-mantecati', name: 'Pici mantecati' },
  { slot: 'to-go-pasta/5-mezze-maniche-mantecate', name: 'Mezze maniche mantecate' },
  { slot: 'to-go-pasta/6-mezzi-paccheri-in-verde', name: 'Mezzi paccheri in verde' },
  { slot: 'to-go-pasta/7-tiramisu', name: 'Tiramisù', dessert: true },
];

export const TOGO_PASTA: Record<Lang, { kicker: string; title: string; lead: string; tag: string; dessert: string; alt: (n: string) => string }> = {
  it: {
    kicker: 'Pasta fresca to go',
    title: 'Pasta fresca 100% senza glutine, da portare via.',
    lead: 'La pasta di Boboli, fatta da noi nel nostro laboratorio, ora puoi portarla con te. 6 ricette diverse, preparate con la nostra pasta fresca 100% senza glutine.',
    tag: '100% senza glutine',
    dessert: 'E per finire',
    alt: (n) => `${n} senza glutine da asporto, nella vaschetta di Boboli To-Go a Firenze`,
  },
  en: {
    kicker: 'Fresh pasta to go',
    title: '100% gluten-free fresh pasta, to take away.',
    lead: 'Boboli pasta, made by us in our own workshop, now comes with you. 6 different recipes, made with our 100% gluten-free fresh pasta.',
    tag: '100% gluten free',
    dessert: 'To finish',
    alt: (n) => `Gluten-free ${n} to take away, in a Boboli To-Go bowl in Florence`,
  },
  es: {
    kicker: 'Pasta fresca para llevar',
    title: 'Pasta fresca 100% sin gluten, para llevar.',
    lead: 'La pasta de Boboli, hecha por nosotros en nuestro obrador, ahora puedes llevártela. 6 recetas distintas, preparadas con nuestra pasta fresca 100% sin gluten.',
    tag: '100% sin gluten',
    dessert: 'Y para terminar',
    alt: (n) => `${n} sin gluten para llevar, en un envase de Boboli To-Go en Florencia`,
  },
  de: {
    kicker: 'Frische Pasta to go',
    title: 'Frische Pasta, 100 % glutenfrei, zum Mitnehmen.',
    lead: 'Die Pasta von Boboli, von uns in unserer eigenen Manufaktur gemacht, kannst du jetzt mitnehmen. 6 verschiedene Rezepte, mit unserer 100 % glutenfreien frischen Pasta zubereitet.',
    tag: '100 % glutenfrei',
    dessert: 'Zum Abschluss',
    alt: (n) => `Glutenfreie ${n} zum Mitnehmen, in einer Schale von Boboli To-Go in Florenz`,
  },
  fr: {
    kicker: 'Pâtes fraîches à emporter',
    title: 'Pâtes fraîches 100 % sans gluten, à emporter.',
    lead: 'Les pâtes de Boboli, faites par nous dans notre atelier, tu peux maintenant les emporter. 6 recettes différentes, préparées avec nos pâtes fraîches 100 % sans gluten.',
    tag: '100 % sans gluten',
    dessert: 'Pour finir',
    alt: (n) => `${n} sans gluten à emporter, dans un bol de Boboli To-Go à Florence`,
  },
};
