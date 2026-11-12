import type { Lang } from './i18n';

/**
 * Le pagine guida: rispondono alle ricerche che contano («ristorante senza
 * glutine a Firenze», «dove mangiare vicino a Palazzo Pitti») con contenuto
 * proprio, nelle cinque lingue. Indirizzi, orari e distanze non stanno qui:
 * li aggiunge la pagina dai dati dei locali, così non possono invecchiare.
 *
 * Nei paragrafi `[testo](/percorso/)` diventa un link interno nella lingua
 * della pagina.
 */
export interface GuideText {
  /** Titolo per Google, entro 60 caratteri. */
  title: string;
  /** Descrizione per Google, entro 155 caratteri. */
  desc: string;
  /** Sopratitolo, briciole di pane e voce nel footer. */
  label: string;
  h1: string;
  lead: string;
  sections: { h2: string; p: string[] }[];
  /** Titolo del blocco con i locali. */
  placesTitle: string;
  faq: [string, string][];
}

export interface Guide {
  /** Il percorso senza lingua, uguale in tutte le lingue. */
  path: string;
  /** La foto di apertura (slot delle immagini). */
  image: string;
  imageAlt: Record<Lang, string>;
  /** I locali di cui parla, nell'ordine in cui compaiono. */
  locali: string[];
  /** I luoghi da cui si misura la strada a piedi. */
  landmarks: LandmarkKey[];
  tr: Record<Lang, GuideText>;
}

export type LandmarkKey = keyof typeof LANDMARKS;

/** I riferimenti di Firenze, con il nome nelle cinque lingue. */
export const LANDMARKS = {
  pitti: { lat: 43.76502, lng: 11.25002, name: { it: 'Palazzo Pitti', en: 'Pitti Palace', es: 'Palacio Pitti', de: 'Palazzo Pitti', fr: 'Palais Pitti' } },
  ponte: { lat: 43.76797, lng: 11.25315, name: { it: 'Ponte Vecchio', en: 'Ponte Vecchio', es: 'Ponte Vecchio', de: 'Ponte Vecchio', fr: 'Ponte Vecchio' } },
  spirito: { lat: 43.7671, lng: 11.2478, name: { it: 'Santo Spirito', en: 'Santo Spirito', es: 'Santo Spirito', de: 'Santo Spirito', fr: 'Santo Spirito' } },
  uffizi: { lat: 43.7678, lng: 11.2553, name: { it: 'Uffizi', en: 'Uffizi Gallery', es: 'Galería Uffizi', de: 'Uffizien', fr: 'Galerie des Offices' } },
  bargello: { lat: 43.7704, lng: 11.258, name: { it: 'Museo del Bargello', en: 'Bargello Museum', es: 'Museo del Bargello', de: 'Bargello-Museum', fr: 'Musée du Bargello' } },
  croce: { lat: 43.76858, lng: 11.26222, name: { it: 'Santa Croce', en: 'Santa Croce', es: 'Santa Croce', de: 'Santa Croce', fr: 'Santa Croce' } },
  duomo: { lat: 43.77314, lng: 11.2559, name: { it: 'Duomo', en: 'Duomo', es: 'Duomo', de: 'Dom', fr: 'Duomo' } },
} as const;

/** «circa 5 min a piedi», nelle cinque lingue. */
export const WALK: Record<Lang, (min: number, from: string) => string> = {
  it: (m, f) => `${f}: circa ${m} min a piedi`,
  en: (m, f) => `${f}: about ${m} min on foot`,
  es: (m, f) => `${f}: unos ${m} min a pie`,
  de: (m, f) => `${f}: etwa ${m} Min. zu Fuß`,
  fr: (m, f) => `${f} : environ ${m} min à pied`,
};

/** I minuti a piedi tra due punti: linea d'aria allungata del 30% per le strade, a passo tranquillo. */
export function walkMinutes(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLng = (b.lng - a.lng) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  const metres = 2 * 6371000 * Math.asin(Math.sqrt(h));
  return Math.max(1, Math.round((metres * 1.3) / 75));
}

const glutenFree: Guide = {
  path: '/senza-glutine-firenze/',
  image: 'laboratorio',
  imageAlt: {
    it: 'Il laboratorio di Trattoria Boboli a Firenze, dove nascono pane e pasta fresca senza glutine',
    en: 'The Trattoria Boboli workshop in Florence, where gluten-free bread and fresh pasta are made',
    es: 'El obrador de Trattoria Boboli en Florencia, donde nacen el pan y la pasta fresca sin gluten',
    de: 'Die Manufaktur der Trattoria Boboli in Florenz, in der glutenfreies Brot und frische Pasta entstehen',
    fr: "L'atelier de la Trattoria Boboli à Florence, où naissent le pain et les pâtes fraîches sans gluten",
  },
  locali: ['trattoria-1978', 'al-bargello', 'la-cantina', 'to-go'],
  landmarks: ['pitti', 'duomo'],
  tr: {
    it: {
      title: 'Ristorante senza glutine a Firenze per celiaci · Boboli',
      desc: 'Quattro ristoranti a Firenze dove tutto il menu è senza glutine, nel programma AIC Alimentazione Fuori Casa: cucina toscana, pasta fresca, bistecca e panini.',
      label: 'Senza glutine a Firenze',
      h1: 'Mangiare senza glutine a Firenze, senza pensieri.',
      lead: 'Da Boboli non esiste un menu «a parte» per celiaci: tutta la cucina è senza glutine, in quattro locali tra Oltrarno e Santa Croce. Così a tavola ordinano tutti dallo stesso menu.',
      sections: [
        {
          h2: 'Perché tutto il menu è senza glutine',
          p: [
            'In molti ristoranti il senza glutine è una riga in fondo al menu: due piatti adattati, preparati accanto a tutto il resto. Noi abbiamo fatto la scelta opposta. Il senza glutine è il punto di partenza di ogni ricetta, dagli antipasti al dolce, pane compreso.',
            'Vuol dire che chi è celiaco non deve fare domande, controllare gli ingredienti o rinunciare ai piatti più buoni. E chi non lo è mangia la stessa cucina toscana, senza accorgersi della differenza.',
          ],
        },
        {
          h2: 'Nel programma AIC Alimentazione Fuori Casa',
          p: [
            "I nostri locali fanno parte di Alimentazione Fuori Casa, il programma dell'Associazione Italiana Celiachia (AIC) per chi mangia fuori casa. È il riferimento che i celiaci italiani cercano prima di prenotare.",
          ],
        },
        {
          h2: 'Pane e pasta fresca dal nostro laboratorio',
          p: [
            'Pane, panini, pasta fresca, sughi e dolci nascono nel nostro laboratorio, a pochi passi da Porta Romana. Con anni di prove abbiamo messo a punto una pasta fresca senza glutine che tiene la cottura e il sugo come quella tradizionale: pici, pappardelle, mezze maniche.',
            'È per questo che da noi la ribollita resta ribollita, con il suo pane raffermo, e i pici al peposo sono quelli della ricetta di famiglia.',
          ],
        },
        {
          h2: 'Cosa si mangia',
          p: [
            'La cucina è quella toscana: tagliere di salumi e crostini, ribollita, pici al peposo, pappardelle al sugo di nana, bistecca con l\'osso alla brace, peposo con le patate, e i dolci del laboratorio. Trovi tutti i piatti nel [menu](/menu/), e la loro storia nella nostra [guida alla cucina fiorentina](/blog/cucina-fiorentina-guida-completa-ai-piatti-tipici/).',
          ],
        },
        {
          h2: 'Quale locale scegliere',
          p: [
            'Per un pranzo o una cena in trattoria, a due passi da Palazzo Pitti, c\'è [Trattoria Boboli 1978](/locali/trattoria-1978/). Per una cena con calma tra il Bargello e Santa Croce, [Al Bargello](/locali/al-bargello/). Se parti dal vino, [La Cantina](/locali/la-cantina/). E se vuoi un panino da mangiare camminando, [To-Go](/locali/to-go/).',
            'Se non sai in che zona sarai, guarda [dove mangiare vicino a Palazzo Pitti](/dove-mangiare/oltrarno-palazzo-pitti/) e [vicino a Santa Croce](/dove-mangiare/santa-croce-bargello/).',
          ],
        },
      ],
      placesTitle: 'I quattro locali, tutti 100% senza glutine',
      faq: [
        ['C\'è un ristorante interamente senza glutine a Firenze?', 'Sì. Nei quattro locali di Trattoria Boboli tutto il menu è senza glutine: non c\'è un menu separato, e pane, pasta fresca e dolci sono prodotti nel nostro laboratorio.'],
        ['I locali Boboli sono adatti ai celiaci?', "Sì. Tutta la cucina è senza glutine e i locali fanno parte del programma Alimentazione Fuori Casa dell'Associazione Italiana Celiachia (AIC). Se hai altre allergie o intolleranze, dillo al personale quando ordini."],
        ['Si può mangiare la bistecca alla fiorentina senza glutine?', 'Sì. La bistecca alla brace è senza glutine di suo; da noi lo sono anche il pane, i contorni e tutto quello che arriva in tavola con lei.'],
        ['Serve prenotare?', 'Per la cena e nel fine settimana è meglio. Puoi prenotare online dalla pagina di ogni locale; il To-Go non ha bisogno di prenotazione.'],
      ],
    },
    en: {
      title: 'Gluten-free restaurant in Florence for coeliacs · Boboli',
      desc: 'Four restaurants in Florence where the whole menu is gluten free, part of the Italian Coeliac Association eating-out programme: Tuscan food, fresh pasta, steak.',
      label: 'Gluten free in Florence',
      h1: 'Eating gluten free in Florence, without a worry.',
      lead: 'At Boboli there is no separate menu for coeliacs: the whole kitchen is gluten free, in four places between the Oltrarno and Santa Croce. Everyone at the table orders from the same menu.',
      sections: [
        {
          h2: 'Why the whole menu is gluten free',
          p: [
            'In many restaurants gluten free is a line at the bottom of the menu: a couple of adapted dishes, cooked next to everything else. We made the opposite choice. Gluten free is where every recipe starts, from starters to dessert, bread included.',
            "It means that if you are coeliac you don't have to ask questions, check ingredients or skip the best dishes. And if you are not, you eat the same Tuscan food without noticing the difference.",
          ],
        },
        {
          h2: 'Part of the AIC eating-out programme',
          p: [
            'Our restaurants are part of Alimentazione Fuori Casa, the eating-out programme run by AIC, the Italian Coeliac Association. It is the reference Italian coeliacs look for before booking.',
          ],
        },
        {
          h2: 'Bread and fresh pasta from our own workshop',
          p: [
            'Bread, sandwiches, fresh pasta, sauces and desserts are made in our own workshop, a few steps from Porta Romana. After years of trials we developed a gluten-free fresh pasta that holds its bite and its sauce like the traditional one: pici, pappardelle, mezze maniche.',
            'That is why our ribollita is still ribollita, with its stale bread, and our pici al peposo follow the family recipe.',
          ],
        },
        {
          h2: 'What you can eat',
          p: [
            'The cooking is Tuscan: a board of cured meats and crostini, ribollita soup, pici with peposo, pappardelle with duck ragù, T-bone steak on the grill, slow-cooked peposo beef with potatoes, and desserts from the workshop. See all the dishes on the [menu](/menu/).',
          ],
        },
        {
          h2: 'Which one to choose',
          p: [
            'For lunch or dinner in a trattoria, a short walk from the Pitti Palace, go to [Trattoria Boboli 1978](/locali/trattoria-1978/). For a relaxed dinner between the Bargello and Santa Croce, [Al Bargello](/locali/al-bargello/). If you start from the wine, [La Cantina](/locali/la-cantina/). And for a sandwich to eat on the go, [To-Go](/locali/to-go/).',
            'Not sure where you will be? See [where to eat near the Pitti Palace](/dove-mangiare/oltrarno-palazzo-pitti/) and [near Santa Croce](/dove-mangiare/santa-croce-bargello/).',
          ],
        },
      ],
      placesTitle: 'Four places, all 100% gluten free',
      faq: [
        ['Is there a fully gluten-free restaurant in Florence?', 'Yes. At the four Trattoria Boboli restaurants the whole menu is gluten free: there is no separate menu, and bread, fresh pasta and desserts are made in our own workshop.'],
        ['Are Boboli restaurants suitable for coeliacs?', 'Yes. The whole kitchen is gluten free and the restaurants are part of the eating-out programme of AIC, the Italian Coeliac Association. If you have other allergies or intolerances, tell the staff when you order.'],
        ['Can I eat Florentine steak gluten free?', 'Yes. Grilled steak is naturally gluten free; with us so are the bread, the sides and everything else that comes to the table with it.'],
        ['Do I need to book?', 'For dinner and at weekends it is a good idea. You can book online from each restaurant page; To-Go needs no booking.'],
      ],
    },
    es: {
      title: 'Restaurante sin gluten en Florencia para celíacos · Boboli',
      desc: 'Cuatro restaurantes en Florencia con toda la carta sin gluten, dentro del programa de la Asociación Italiana de Celiaquía: cocina toscana, pasta fresca y bistec.',
      label: 'Sin gluten en Florencia',
      h1: 'Comer sin gluten en Florencia, sin preocupaciones.',
      lead: 'En Boboli no hay una carta «aparte» para celíacos: toda la cocina es sin gluten, en cuatro locales entre el Oltrarno y Santa Croce. En la mesa todos piden de la misma carta.',
      sections: [
        {
          h2: 'Por qué toda la carta es sin gluten',
          p: [
            'En muchos restaurantes el sin gluten es una línea al final de la carta: un par de platos adaptados, cocinados junto a todo lo demás. Nosotros hicimos lo contrario. El sin gluten es el punto de partida de cada receta, de los entrantes al postre, pan incluido.',
            'Así, quien es celíaco no tiene que preguntar, revisar ingredientes ni renunciar a los mejores platos. Y quien no lo es come la misma cocina toscana sin notar la diferencia.',
          ],
        },
        {
          h2: 'En el programa AIC Alimentazione Fuori Casa',
          p: [
            'Nuestros locales forman parte de Alimentazione Fuori Casa, el programa de la Asociación Italiana de Celiaquía (AIC) para comer fuera de casa. Es la referencia que los celíacos italianos buscan antes de reservar.',
          ],
        },
        {
          h2: 'Pan y pasta fresca de nuestro obrador',
          p: [
            'El pan, los bocadillos, la pasta fresca, las salsas y los postres nacen en nuestro obrador, a pocos pasos de Porta Romana. Tras años de pruebas conseguimos una pasta fresca sin gluten que aguanta la cocción y la salsa como la tradicional: pici, pappardelle, mezze maniche.',
            'Por eso nuestra ribollita sigue siendo ribollita, con su pan del día anterior, y los pici al peposo son los de la receta de familia.',
          ],
        },
        {
          h2: 'Qué se come',
          p: [
            'La cocina es toscana: tabla de embutidos y crostini, sopa ribollita, pici al peposo, pappardelle con ragú de pato, chuletón a la brasa, peposo de ternera con patatas y los postres del obrador. Todos los platos están en la [carta](/menu/).',
          ],
        },
        {
          h2: 'Qué local elegir',
          p: [
            'Para comer o cenar en una trattoria, a un paseo del Palacio Pitti, [Trattoria Boboli 1978](/locali/trattoria-1978/). Para una cena tranquila entre el Bargello y Santa Croce, [Al Bargello](/locali/al-bargello/). Si empiezas por el vino, [La Cantina](/locali/la-cantina/). Y para un bocadillo para llevar, [To-Go](/locali/to-go/).',
            '¿No sabes en qué zona estarás? Mira [dónde comer cerca del Palacio Pitti](/dove-mangiare/oltrarno-palazzo-pitti/) y [cerca de Santa Croce](/dove-mangiare/santa-croce-bargello/).',
          ],
        },
      ],
      placesTitle: 'Los cuatro locales, todos 100% sin gluten',
      faq: [
        ['¿Hay un restaurante totalmente sin gluten en Florencia?', 'Sí. En los cuatro locales de Trattoria Boboli toda la carta es sin gluten: no hay carta aparte, y el pan, la pasta fresca y los postres se elaboran en nuestro obrador.'],
        ['¿Los locales Boboli son aptos para celíacos?', 'Sí. Toda la cocina es sin gluten y los locales forman parte del programa Alimentazione Fuori Casa de la Asociación Italiana de Celiaquía (AIC). Si tienes otras alergias o intolerancias, díselo al personal al pedir.'],
        ['¿Se puede comer el chuletón a la florentina sin gluten?', 'Sí. La carne a la brasa no lleva gluten; con nosotros tampoco el pan, las guarniciones ni nada de lo que llega a la mesa.'],
        ['¿Hace falta reservar?', 'Para cenar y en fin de semana es mejor. Puedes reservar online desde la página de cada local; el To-Go no necesita reserva.'],
      ],
    },
    de: {
      title: 'Glutenfreies Restaurant in Florenz bei Zöliakie · Boboli',
      desc: 'Vier Restaurants in Florenz mit komplett glutenfreier Karte, Teil des Programms der italienischen Zöliakie-Gesellschaft: toskanische Küche, frische Pasta, Steak.',
      label: 'Glutenfrei in Florenz',
      h1: 'Glutenfrei essen in Florenz, ganz ohne Sorgen.',
      lead: 'Bei Boboli gibt es keine Extra-Karte für Menschen mit Zöliakie: Die ganze Küche ist glutenfrei, in vier Lokalen zwischen Oltrarno und Santa Croce. Am Tisch bestellen alle von derselben Karte.',
      sections: [
        {
          h2: 'Warum die ganze Karte glutenfrei ist',
          p: [
            'In vielen Restaurants ist glutenfrei eine Zeile am Ende der Karte: ein paar angepasste Gerichte, zubereitet neben allem anderen. Wir haben uns für das Gegenteil entschieden. Glutenfrei ist der Ausgangspunkt jedes Rezepts, von der Vorspeise bis zum Dessert, das Brot eingeschlossen.',
            'Wer Zöliakie hat, muss also nicht nachfragen, Zutaten prüfen oder auf die besten Gerichte verzichten. Und wer keine hat, isst dieselbe toskanische Küche, ohne einen Unterschied zu merken.',
          ],
        },
        {
          h2: 'Teil des AIC-Programms Alimentazione Fuori Casa',
          p: [
            'Unsere Lokale gehören zu Alimentazione Fuori Casa, dem Programm der italienischen Zöliakie-Gesellschaft AIC für das Essen außer Haus. Danach suchen Betroffene in Italien, bevor sie reservieren.',
          ],
        },
        {
          h2: 'Brot und frische Pasta aus eigener Manufaktur',
          p: [
            'Brot, Panini, frische Pasta, Saucen und Desserts entstehen in unserer eigenen Manufaktur, wenige Schritte von der Porta Romana. Nach Jahren des Ausprobierens haben wir eine glutenfreie frische Pasta entwickelt, die Biss und Sauce hält wie die traditionelle: Pici, Pappardelle, Mezze Maniche.',
            'Deshalb bleibt unsere Ribollita eine Ribollita, mit ihrem altbackenen Brot, und die Pici al Peposo folgen dem Familienrezept.',
          ],
        },
        {
          h2: 'Was es zu essen gibt',
          p: [
            'Die Küche ist toskanisch: Brett mit Wurst und Crostini, Ribollita-Suppe, Pici mit Peposo, Pappardelle mit Entenragout, T-Bone-Steak vom Grill, geschmortes Peposo-Rind mit Kartoffeln und Desserts aus der Manufaktur. Alle Gerichte stehen auf der [Speisekarte](/menu/).',
          ],
        },
        {
          h2: 'Welches Lokal passt',
          p: [
            'Für Mittag- oder Abendessen in der Trattoria, nahe dem Palazzo Pitti: [Trattoria Boboli 1978](/locali/trattoria-1978/). Für ein entspanntes Abendessen zwischen Bargello und Santa Croce: [Al Bargello](/locali/al-bargello/). Wenn du beim Wein anfängst: [La Cantina](/locali/la-cantina/). Und für ein Panino auf die Hand: [To-Go](/locali/to-go/).',
            'Noch unsicher, wo du unterwegs bist? Schau bei [Essen nahe dem Palazzo Pitti](/dove-mangiare/oltrarno-palazzo-pitti/) und [nahe Santa Croce](/dove-mangiare/santa-croce-bargello/).',
          ],
        },
      ],
      placesTitle: 'Vier Lokale, alle 100 % glutenfrei',
      faq: [
        ['Gibt es in Florenz ein komplett glutenfreies Restaurant?', 'Ja. In den vier Lokalen der Trattoria Boboli ist die ganze Karte glutenfrei: Es gibt keine getrennte Karte, und Brot, frische Pasta und Desserts kommen aus unserer eigenen Manufaktur.'],
        ['Sind die Boboli-Lokale bei Zöliakie geeignet?', 'Ja. Die ganze Küche ist glutenfrei und die Lokale gehören zum Programm Alimentazione Fuori Casa der italienischen Zöliakie-Gesellschaft AIC. Bei anderen Allergien oder Unverträglichkeiten sag bitte beim Bestellen Bescheid.'],
        ['Kann man das Florentiner Steak glutenfrei essen?', 'Ja. Gegrilltes Steak ist von Natur aus glutenfrei; bei uns sind es auch das Brot, die Beilagen und alles, was mit auf den Tisch kommt.'],
        ['Muss man reservieren?', 'Abends und am Wochenende ist es besser. Du kannst online auf der Seite jedes Lokals reservieren; das To-Go braucht keine Reservierung.'],
      ],
    },
    fr: {
      title: 'Restaurant sans gluten à Florence pour cœliaques · Boboli',
      desc: "Quatre restaurants à Florence où toute la carte est sans gluten, dans le programme de l'Association italienne des cœliaques : cuisine toscane, pâtes fraîches.",
      label: 'Sans gluten à Florence',
      h1: 'Manger sans gluten à Florence, sans y penser.',
      lead: "Chez Boboli, il n'y a pas de carte « à part » pour les cœliaques : toute la cuisine est sans gluten, dans quatre adresses entre l'Oltrarno et Santa Croce. À table, tout le monde commande sur la même carte.",
      sections: [
        {
          h2: 'Pourquoi toute la carte est sans gluten',
          p: [
            "Dans beaucoup de restaurants, le sans gluten est une ligne en bas de la carte : deux plats adaptés, préparés à côté de tout le reste. Nous avons fait le choix inverse. Le sans gluten est le point de départ de chaque recette, de l'entrée au dessert, pain compris.",
            "Si vous êtes cœliaque, vous n'avez donc pas à poser de questions, à vérifier les ingrédients ni à renoncer aux meilleurs plats. Et si vous ne l'êtes pas, vous mangez la même cuisine toscane sans voir la différence.",
          ],
        },
        {
          h2: 'Dans le programme AIC Alimentazione Fuori Casa',
          p: [
            "Nos adresses font partie d'Alimentazione Fuori Casa, le programme de l'Association italienne des cœliaques (AIC) pour les repas à l'extérieur. C'est la référence que les cœliaques italiens cherchent avant de réserver.",
          ],
        },
        {
          h2: 'Pain et pâtes fraîches de notre atelier',
          p: [
            'Le pain, les sandwichs, les pâtes fraîches, les sauces et les desserts naissent dans notre atelier, à quelques pas de la Porta Romana. Après des années d\'essais, nous avons mis au point des pâtes fraîches sans gluten qui tiennent la cuisson et la sauce comme les pâtes traditionnelles : pici, pappardelle, mezze maniche.',
            "C'est pour cela que notre ribollita reste une ribollita, avec son pain rassis, et que les pici al peposo suivent la recette de famille.",
          ],
        },
        {
          h2: "Ce que l'on mange",
          p: [
            "La cuisine est toscane : planche de charcuterie et crostini, soupe ribollita, pici au peposo, pappardelle au ragoût de canard, côte de bœuf à la braise, peposo de bœuf mijoté avec des pommes de terre, et les desserts de l'atelier. Tous les plats sont sur la [carte](/menu/).",
          ],
        },
        {
          h2: 'Quelle adresse choisir',
          p: [
            'Pour déjeuner ou dîner dans une trattoria, à deux pas du palais Pitti : [Trattoria Boboli 1978](/locali/trattoria-1978/). Pour un dîner tranquille entre le Bargello et Santa Croce : [Al Bargello](/locali/al-bargello/). Si vous partez du vin : [La Cantina](/locali/la-cantina/). Et pour un sandwich à emporter : [To-Go](/locali/to-go/).',
            'Vous ne savez pas encore où vous serez ? Voyez [où manger près du palais Pitti](/dove-mangiare/oltrarno-palazzo-pitti/) et [près de Santa Croce](/dove-mangiare/santa-croce-bargello/).',
          ],
        },
      ],
      placesTitle: 'Quatre adresses, toutes 100 % sans gluten',
      faq: [
        ['Y a-t-il un restaurant entièrement sans gluten à Florence ?', "Oui. Dans les quatre adresses de la Trattoria Boboli, toute la carte est sans gluten : il n'y a pas de carte séparée, et le pain, les pâtes fraîches et les desserts sont faits dans notre atelier."],
        ['Les adresses Boboli conviennent-elles aux cœliaques ?', "Oui. Toute la cuisine est sans gluten et les restaurants font partie du programme Alimentazione Fuori Casa de l'Association italienne des cœliaques (AIC). En cas d'autres allergies ou intolérances, prévenez le personnel à la commande."],
        ['Peut-on manger la bistecca alla fiorentina sans gluten ?', 'Oui. La viande à la braise est naturellement sans gluten ; chez nous, le pain, les accompagnements et tout ce qui arrive à table le sont aussi.'],
        ['Faut-il réserver ?', "Pour le dîner et le week-end, c'est préférable. Vous pouvez réserver en ligne depuis la page de chaque adresse ; le To-Go ne demande pas de réservation."],
      ],
    },
  },
};

const oltrarno: Guide = {
  path: '/dove-mangiare/oltrarno-palazzo-pitti/',
  image: 'locali/trattoria-1978',
  imageAlt: {
    it: 'La sala di Trattoria Boboli 1978 in Via Romana, a pochi minuti da Palazzo Pitti',
    en: 'The dining room of Trattoria Boboli 1978 on Via Romana, a few minutes from the Pitti Palace',
    es: 'La sala de Trattoria Boboli 1978 en Via Romana, a pocos minutos del Palacio Pitti',
    de: 'Der Gastraum der Trattoria Boboli 1978 in der Via Romana, wenige Minuten vom Palazzo Pitti',
    fr: 'La salle de la Trattoria Boboli 1978, via Romana, à quelques minutes du palais Pitti',
  },
  locali: ['trattoria-1978', 'la-cantina', 'to-go'],
  landmarks: ['pitti', 'spirito', 'ponte'],
  tr: {
    it: {
      title: 'Dove mangiare vicino a Palazzo Pitti e Boboli · Oltrarno',
      desc: 'Dove mangiare vicino a Palazzo Pitti e al Giardino di Boboli: tre locali in Via Romana, in Oltrarno, con cucina toscana tutta senza glutine. Orari e distanze.',
      label: 'Mangiare vicino a Palazzo Pitti',
      h1: 'Dove mangiare vicino a Palazzo Pitti e al Giardino di Boboli.',
      lead: 'Da Piazza Pitti parte Via Romana, la strada che costeggia il Giardino di Boboli fino a Porta Romana. È lì che ci trovi: una trattoria, una cantina e un banco di panini, a pochi minuti a piedi dal museo.',
      sections: [
        {
          h2: 'Via Romana, la strada dietro Palazzo Pitti',
          p: [
            "L'Oltrarno è la Firenze delle botteghe artigiane e delle piazze dove i fiorentini vivono ancora. Via Romana ne è una delle strade più antiche: lascia Piazza Pitti e in pochi minuti ti porta lontano dalla folla del Ponte Vecchio, tra il Giardino di Boboli e Santo Spirito.",
            'Qui si mangia ancora come una volta: menu corti, piatti di stagione, tavoli dove a pranzo siedono anche i fiorentini.',
          ],
        },
        {
          h2: 'Un pranzo dopo il museo, o una cena con calma',
          p: [
            'Dopo la Galleria Palatina o una mattina nel Giardino di Boboli, [Trattoria Boboli 1978](/locali/trattoria-1978/) è aperta con orario continuato: ribollita, pasta fresca del nostro laboratorio, carne alla brace e un bicchiere di rosso toscano.',
            'Se preferisci partire dal vino, pochi numeri più avanti c\'è [La Cantina](/locali/la-cantina/), con abbinamenti e degustazioni. E se hai i biglietti per il museo e poco tempo, il [To-Go](/locali/to-go/) prepara panini con il pane del laboratorio, da mangiare in giardino.',
          ],
        },
        {
          h2: 'Tutto senza glutine, anche per chi non è celiaco',
          p: [
            'In tutti e tre i locali il menu è interamente senza glutine e fa parte del programma AIC Alimentazione Fuori Casa. Non è una cucina «alternativa»: è cucina toscana fatta bene, che può mangiare tutta la tavola. Scopri di più su [come mangiamo senza glutine a Firenze](/senza-glutine-firenze/) o guarda il [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'I locali in Via Romana',
      faq: [
        ['Dove mangiare vicino a Palazzo Pitti?', 'In Via Romana, la strada che parte da Piazza Pitti: Trattoria Boboli 1978 Gluten Free al 45/R, Trattoria Boboli La Cantina Gluten Free al 60/R e Trattoria Boboli To-Go Gluten Free al 52. Sono a pochi minuti a piedi dal palazzo.'],
        ['C\'è un posto dove mangiare vicino al Giardino di Boboli?', 'Sì. Via Romana costeggia il giardino: i nostri tre locali sono lungo la strada, tra Piazza Pitti e Porta Romana.'],
        ['Dove mangiare un panino veloce in Oltrarno?', 'Da Trattoria Boboli To-Go Gluten Free, in Via Romana 52: panini con il pane del nostro laboratorio, da portare via. Si può ordinare anche a domicilio.'],
        ['Si può mangiare senza glutine vicino a Palazzo Pitti?', 'Sì: in tutti e tre i locali Boboli di Via Romana il menu è interamente senza glutine.'],
      ],
    },
    en: {
      title: 'Where to eat near the Pitti Palace & Boboli Gardens',
      desc: 'Where to eat near the Pitti Palace and the Boboli Gardens: three places on Via Romana, in the Oltrarno, with fully gluten-free Tuscan food. Hours and distances.',
      label: 'Eating near the Pitti Palace',
      h1: 'Where to eat near the Pitti Palace and the Boboli Gardens.',
      lead: 'Via Romana starts at Piazza Pitti and runs along the Boboli Gardens down to Porta Romana. That is where you will find us: a trattoria, a wine cellar and a sandwich counter, a few minutes on foot from the museum.',
      sections: [
        {
          h2: 'Via Romana, the street behind the Pitti Palace',
          p: [
            'The Oltrarno is the Florence of craft workshops and squares where locals still live. Via Romana is one of its oldest streets: it leaves Piazza Pitti and within minutes takes you away from the Ponte Vecchio crowds, between the Boboli Gardens and Santo Spirito.',
            'Here people still eat the old way: short menus, seasonal dishes, and tables where Florentines sit down for lunch too.',
          ],
        },
        {
          h2: 'Lunch after the museum, or an unhurried dinner',
          p: [
            'After the Palatine Gallery or a morning in the Boboli Gardens, [Trattoria Boboli 1978](/locali/trattoria-1978/) is open all day: ribollita, fresh pasta from our workshop, grilled meat and a glass of Tuscan red.',
            'If you would rather start from the wine, a few doors down is [La Cantina](/locali/la-cantina/), with pairings and tastings. And if you have museum tickets and little time, [To-Go](/locali/to-go/) makes sandwiches with bread from our workshop, to eat in the gardens.',
          ],
        },
        {
          h2: 'All gluten free, also for those who are not coeliac',
          p: [
            'At all three the menu is entirely gluten free and part of the Italian Coeliac Association eating-out programme. It is not an "alternative" kitchen: it is proper Tuscan cooking the whole table can share. Read more about [eating gluten free in Florence](/senza-glutine-firenze/) or see the [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'Our places on Via Romana',
      faq: [
        ['Where can I eat near the Pitti Palace?', 'On Via Romana, the street that starts at Piazza Pitti: Trattoria Boboli 1978 Gluten Free at 45/R, Trattoria Boboli La Cantina Gluten Free at 60/R and Trattoria Boboli To-Go Gluten Free at 52. All a few minutes on foot from the palace.'],
        ['Is there somewhere to eat near the Boboli Gardens?', 'Yes. Via Romana runs along the gardens: our three places are on the street, between Piazza Pitti and Porta Romana.'],
        ['Where can I get a quick sandwich in the Oltrarno?', 'At Trattoria Boboli To-Go Gluten Free, Via Romana 52: sandwiches made with bread from our own workshop, to take away. Delivery is available too.'],
        ['Can I eat gluten free near the Pitti Palace?', 'Yes: at all three Boboli places on Via Romana the whole menu is gluten free.'],
      ],
    },
    es: {
      title: 'Dónde comer cerca del Palacio Pitti y el Jardín de Bóboli',
      desc: 'Dónde comer cerca del Palacio Pitti y del Jardín de Bóboli: tres locales en Via Romana, en el Oltrarno, con cocina toscana toda sin gluten. Horarios y distancias.',
      label: 'Comer cerca del Palacio Pitti',
      h1: 'Dónde comer cerca del Palacio Pitti y del Jardín de Bóboli.',
      lead: 'De la Piazza Pitti sale Via Romana, la calle que bordea el Jardín de Bóboli hasta Porta Romana. Ahí nos encuentras: una trattoria, una bodega y un mostrador de bocadillos, a pocos minutos a pie del museo.',
      sections: [
        {
          h2: 'Via Romana, la calle detrás del Palacio Pitti',
          p: [
            'El Oltrarno es la Florencia de los talleres artesanos y de las plazas donde todavía viven los florentinos. Via Romana es una de sus calles más antiguas: sale de la Piazza Pitti y en pocos minutos te aleja del gentío del Ponte Vecchio, entre el Jardín de Bóboli y Santo Spirito.',
            'Aquí se sigue comiendo como antes: cartas cortas, platos de temporada y mesas donde también se sientan los florentinos a mediodía.',
          ],
        },
        {
          h2: 'Una comida después del museo o una cena sin prisa',
          p: [
            'Después de la Galería Palatina o de una mañana en el Jardín de Bóboli, [Trattoria Boboli 1978](/locali/trattoria-1978/) abre con horario continuado: ribollita, pasta fresca de nuestro obrador, carne a la brasa y una copa de tinto toscano.',
            'Si prefieres empezar por el vino, unos números más allá está [La Cantina](/locali/la-cantina/), con maridajes y catas. Y si tienes entradas para el museo y poco tiempo, el [To-Go](/locali/to-go/) prepara bocadillos con el pan del obrador, para comer en el jardín.',
          ],
        },
        {
          h2: 'Todo sin gluten, también para quien no es celíaco',
          p: [
            'En los tres locales la carta es íntegramente sin gluten y forma parte del programa AIC Alimentazione Fuori Casa. No es una cocina «alternativa»: es cocina toscana bien hecha, para toda la mesa. Lee más sobre [comer sin gluten en Florencia](/senza-glutine-firenze/) o mira la [carta](/menu/).',
          ],
        },
      ],
      placesTitle: 'Los locales en Via Romana',
      faq: [
        ['¿Dónde comer cerca del Palacio Pitti?', 'En Via Romana, la calle que sale de la Piazza Pitti: Trattoria Boboli 1978 Gluten Free en el 45/R, Trattoria Boboli La Cantina Gluten Free en el 60/R y Trattoria Boboli To-Go Gluten Free en el 52. Están a pocos minutos a pie del palacio.'],
        ['¿Hay algún sitio para comer cerca del Jardín de Bóboli?', 'Sí. Via Romana bordea el jardín: nuestros tres locales están en la calle, entre la Piazza Pitti y Porta Romana.'],
        ['¿Dónde tomar un bocadillo rápido en el Oltrarno?', 'En Trattoria Boboli To-Go Gluten Free, Via Romana 52: bocadillos con el pan de nuestro obrador, para llevar. También hay reparto a domicilio.'],
        ['¿Se puede comer sin gluten cerca del Palacio Pitti?', 'Sí: en los tres locales Boboli de Via Romana toda la carta es sin gluten.'],
      ],
    },
    de: {
      title: 'Essen nahe Palazzo Pitti & Boboli-Garten · Oltrarno',
      desc: 'Essen nahe Palazzo Pitti und Boboli-Garten: drei Lokale in der Via Romana im Oltrarno, toskanische Küche, komplett glutenfrei. Öffnungszeiten und Wege.',
      label: 'Essen nahe dem Palazzo Pitti',
      h1: 'Essen in der Nähe von Palazzo Pitti und Boboli-Garten.',
      lead: 'An der Piazza Pitti beginnt die Via Romana, die am Boboli-Garten entlang bis zur Porta Romana führt. Dort findest du uns: eine Trattoria, eine Weinstube und eine Panini-Theke, wenige Gehminuten vom Museum.',
      sections: [
        {
          h2: 'Via Romana, die Straße hinter dem Palazzo Pitti',
          p: [
            'Der Oltrarno ist das Florenz der Handwerksbetriebe und der Plätze, an denen noch Florentiner leben. Die Via Romana ist eine seiner ältesten Straßen: Sie verlässt die Piazza Pitti und bringt dich in wenigen Minuten weg vom Gedränge am Ponte Vecchio, zwischen Boboli-Garten und Santo Spirito.',
            'Hier isst man noch wie früher: kurze Karten, Gerichte der Saison und Tische, an denen mittags auch Florentiner sitzen.',
          ],
        },
        {
          h2: 'Mittagessen nach dem Museum oder ein Abendessen in Ruhe',
          p: [
            'Nach der Galleria Palatina oder einem Vormittag im Boboli-Garten hat die [Trattoria Boboli 1978](/locali/trattoria-1978/) durchgehend geöffnet: Ribollita, frische Pasta aus unserer Manufaktur, Fleisch vom Grill und ein Glas toskanischer Rotwein.',
            'Wenn du lieber beim Wein anfängst, liegt ein paar Hausnummern weiter [La Cantina](/locali/la-cantina/), mit Weinbegleitung und Verkostungen. Und wenn du Museumstickets und wenig Zeit hast, macht das [To-Go](/locali/to-go/) Panini mit Brot aus der Manufaktur, zum Essen im Garten.',
          ],
        },
        {
          h2: 'Alles glutenfrei, auch für alle ohne Zöliakie',
          p: [
            'In allen drei Lokalen ist die Karte vollständig glutenfrei und Teil des AIC-Programms Alimentazione Fuori Casa. Das ist keine „Ersatzküche“, sondern gut gemachte toskanische Küche für den ganzen Tisch. Mehr dazu unter [glutenfrei essen in Florenz](/senza-glutine-firenze/) oder auf der [Speisekarte](/menu/).',
          ],
        },
      ],
      placesTitle: 'Unsere Lokale in der Via Romana',
      faq: [
        ['Wo kann man nahe dem Palazzo Pitti essen?', 'In der Via Romana, die an der Piazza Pitti beginnt: Trattoria Boboli 1978 Gluten Free in Nr. 45/R, Trattoria Boboli La Cantina Gluten Free in Nr. 60/R und Trattoria Boboli To-Go Gluten Free in Nr. 52. Alle wenige Gehminuten vom Palast.'],
        ['Gibt es ein Lokal in der Nähe des Boboli-Gartens?', 'Ja. Die Via Romana führt am Garten entlang: Unsere drei Lokale liegen an der Straße, zwischen Piazza Pitti und Porta Romana.'],
        ['Wo bekommt man im Oltrarno ein schnelles Panino?', 'Bei Trattoria Boboli To-Go Gluten Free, Via Romana 52: Panini mit Brot aus unserer Manufaktur, zum Mitnehmen. Lieferung ist ebenfalls möglich.'],
        ['Kann man nahe dem Palazzo Pitti glutenfrei essen?', 'Ja: In allen drei Boboli-Lokalen in der Via Romana ist die ganze Karte glutenfrei.'],
      ],
    },
    fr: {
      title: 'Où manger près du palais Pitti et du jardin de Boboli',
      desc: "Où manger près du palais Pitti et du jardin de Boboli : trois adresses via Romana, dans l'Oltrarno, cuisine toscane entièrement sans gluten. Horaires et distances.",
      label: 'Manger près du palais Pitti',
      h1: 'Où manger près du palais Pitti et du jardin de Boboli.',
      lead: "De la piazza Pitti part la via Romana, la rue qui longe le jardin de Boboli jusqu'à la Porta Romana. C'est là que vous nous trouverez : une trattoria, une cave et un comptoir à sandwichs, à quelques minutes à pied du musée.",
      sections: [
        {
          h2: 'Via Romana, la rue derrière le palais Pitti',
          p: [
            "L'Oltrarno est la Florence des ateliers d'artisans et des places où vivent encore les Florentins. La via Romana est l'une de ses plus anciennes rues : elle quitte la piazza Pitti et, en quelques minutes, vous éloigne de la foule du Ponte Vecchio, entre le jardin de Boboli et Santo Spirito.",
            "Ici, on mange encore comme autrefois : des cartes courtes, des plats de saison et des tables où les Florentins s'assoient aussi à midi.",
          ],
        },
        {
          h2: 'Un déjeuner après le musée, ou un dîner sans se presser',
          p: [
            'Après la galerie Palatine ou une matinée au jardin de Boboli, la [Trattoria Boboli 1978](/locali/trattoria-1978/) est ouverte en continu : ribollita, pâtes fraîches de notre atelier, viande à la braise et un verre de rouge toscan.',
            "Si vous préférez partir du vin, quelques numéros plus loin se trouve [La Cantina](/locali/la-cantina/), avec accords et dégustations. Et si vous avez des billets pour le musée et peu de temps, le [To-Go](/locali/to-go/) prépare des sandwichs avec le pain de l'atelier, à manger au jardin.",
          ],
        },
        {
          h2: 'Tout sans gluten, même pour ceux qui ne sont pas cœliaques',
          p: [
            "Dans les trois adresses, la carte est entièrement sans gluten et fait partie du programme AIC Alimentazione Fuori Casa. Ce n'est pas une cuisine « de remplacement » : c'est une cuisine toscane bien faite, pour toute la table. En savoir plus sur [manger sans gluten à Florence](/senza-glutine-firenze/) ou voir la [carte](/menu/).",
          ],
        },
      ],
      placesTitle: 'Nos adresses via Romana',
      faq: [
        ['Où manger près du palais Pitti ?', 'Via Romana, la rue qui part de la piazza Pitti : Trattoria Boboli 1978 Gluten Free au 45/R, Trattoria Boboli La Cantina Gluten Free au 60/R et Trattoria Boboli To-Go Gluten Free au 52. Toutes à quelques minutes à pied du palais.'],
        ['Y a-t-il un endroit où manger près du jardin de Boboli ?', 'Oui. La via Romana longe le jardin : nos trois adresses sont dans la rue, entre la piazza Pitti et la Porta Romana.'],
        ["Où prendre un sandwich rapide dans l'Oltrarno ?", 'À la Trattoria Boboli To-Go Gluten Free, via Romana 52 : des sandwichs au pain de notre atelier, à emporter. La livraison est aussi possible.'],
        ['Peut-on manger sans gluten près du palais Pitti ?', 'Oui : dans les trois adresses Boboli de la via Romana, toute la carte est sans gluten.'],
      ],
    },
  },
};

const santaCroce: Guide = {
  path: '/dove-mangiare/santa-croce-bargello/',
  image: 'locali/al-bargello',
  imageAlt: {
    it: 'La sala con i mattoni a vista di Trattoria Boboli Al Bargello, in Via Ghibellina a Firenze',
    en: 'The brick-walled dining room of Trattoria Boboli Al Bargello, on Via Ghibellina in Florence',
    es: 'La sala de ladrillo visto de Trattoria Boboli Al Bargello, en Via Ghibellina, Florencia',
    de: 'Der Gastraum mit Sichtziegeln der Trattoria Boboli Al Bargello in der Via Ghibellina, Florenz',
    fr: 'La salle aux briques apparentes de la Trattoria Boboli Al Bargello, via Ghibellina à Florence',
  },
  locali: ['al-bargello'],
  landmarks: ['bargello', 'croce', 'uffizi', 'duomo'],
  tr: {
    it: {
      title: 'Dove mangiare vicino a Santa Croce e al Bargello',
      desc: 'Dove mangiare vicino a Santa Croce, al Bargello e agli Uffizi: Trattoria Boboli Al Bargello, in Via Ghibellina, cucina toscana tutta senza glutine. Orari.',
      label: 'Mangiare vicino a Santa Croce',
      h1: 'Dove mangiare vicino a Santa Croce e al Bargello.',
      lead: 'Via Ghibellina attraversa il quartiere di Santa Croce, dal Museo del Bargello a Casa Buonarroti. A metà strada c\'è la nostra osteria: mattoni a vista, tavoli vicini e una cena che prende il suo tempo.',
      sections: [
        {
          h2: 'Tra il Bargello e Santa Croce',
          p: [
            'È la Firenze di Michelangelo: le sue sculture sono al Bargello, la sua tomba in Santa Croce, la casa di famiglia in Via Ghibellina. Tra un museo e l\'altro bastano pochi minuti a piedi, e gli Uffizi e il Duomo sono poco più in là.',
            '[Trattoria Boboli Al Bargello](/locali/al-bargello/) è lungo questa strada, lontana quanto basta dalle vie più affollate per mangiare con calma.',
          ],
        },
        {
          h2: 'Cosa si mangia',
          p: [
            'Cucina toscana schietta: tagliere di salumi e crostini, pasta fresca del nostro laboratorio, bistecca con l\'osso alla brace, peposo cotto nel Chianti, e un buon bicchiere di vino. È aperta a pranzo e a cena, tutti i giorni. I piatti sono nel [menu](/menu/).',
          ],
        },
        {
          h2: 'Tutto senza glutine',
          p: [
            'Come in tutti i locali Boboli, il menu è interamente senza glutine e fa parte del programma AIC Alimentazione Fuori Casa: pane, pasta e dolci compresi. Scopri di più su [come mangiamo senza glutine a Firenze](/senza-glutine-firenze/).',
            'Se invece sei dall\'altra parte dell\'Arno, guarda [dove mangiare vicino a Palazzo Pitti](/dove-mangiare/oltrarno-palazzo-pitti/).',
          ],
        },
      ],
      placesTitle: 'Il locale in Via Ghibellina',
      faq: [
        ['Dove mangiare vicino a Santa Croce?', 'In Via Ghibellina 147/R, tra il Museo del Bargello e la Basilica di Santa Croce, c\'è Trattoria Boboli Al Bargello Gluten Free: cucina toscana, vino e cena con calma.'],
        ['Dove mangiare vicino agli Uffizi senza glutine?', 'Trattoria Boboli Al Bargello Gluten Free è a pochi minuti a piedi dagli Uffizi, in Via Ghibellina: tutto il menu è senza glutine.'],
        ['Serve prenotare per cena?', 'È consigliato, soprattutto nel fine settimana: si prenota online dalla pagina del locale.'],
      ],
    },
    en: {
      title: 'Where to eat near Santa Croce and the Bargello',
      desc: 'Where to eat near Santa Croce, the Bargello and the Uffizi: Trattoria Boboli Al Bargello, on Via Ghibellina, with fully gluten-free Tuscan food. Opening hours.',
      label: 'Eating near Santa Croce',
      h1: 'Where to eat near Santa Croce and the Bargello.',
      lead: 'Via Ghibellina crosses the Santa Croce district, from the Bargello Museum to Casa Buonarroti. Halfway along is our osteria: bare brick, close tables and a dinner that takes its time.',
      sections: [
        {
          h2: 'Between the Bargello and Santa Croce',
          p: [
            "This is Michelangelo's Florence: his sculptures are in the Bargello, his tomb in Santa Croce, the family house on Via Ghibellina. It is a few minutes on foot from one museum to the next, and the Uffizi and the Duomo are just a little further.",
            '[Trattoria Boboli Al Bargello](/locali/al-bargello/) is on this street, just far enough from the busiest lanes to eat in peace.',
          ],
        },
        {
          h2: 'What you can eat',
          p: [
            'Straightforward Tuscan cooking: a board of cured meats and crostini, fresh pasta from our workshop, T-bone steak on the grill, peposo beef slow-cooked in Chianti, and a good glass of wine. Open for lunch and dinner, every day. See the dishes on the [menu](/menu/).',
          ],
        },
        {
          h2: 'All gluten free',
          p: [
            'As in every Boboli restaurant, the menu is entirely gluten free and part of the Italian Coeliac Association eating-out programme: bread, pasta and desserts included. Read more about [eating gluten free in Florence](/senza-glutine-firenze/).',
            'If you are on the other side of the Arno instead, see [where to eat near the Pitti Palace](/dove-mangiare/oltrarno-palazzo-pitti/).',
          ],
        },
      ],
      placesTitle: 'Our place on Via Ghibellina',
      faq: [
        ['Where can I eat near Santa Croce?', 'At Via Ghibellina 147/R, between the Bargello Museum and the Basilica of Santa Croce, is Trattoria Boboli Al Bargello Gluten Free: Tuscan food, wine and an unhurried dinner.'],
        ['Where can I eat gluten free near the Uffizi?', 'Trattoria Boboli Al Bargello Gluten Free is a few minutes on foot from the Uffizi, on Via Ghibellina: the whole menu is gluten free.'],
        ['Do I need to book for dinner?', 'It is recommended, especially at weekends: you can book online from the restaurant page.'],
      ],
    },
    es: {
      title: 'Dónde comer cerca de Santa Croce y el Bargello',
      desc: 'Dónde comer cerca de Santa Croce, el Bargello y los Uffizi: Trattoria Boboli Al Bargello, en Via Ghibellina, cocina toscana toda sin gluten. Horarios.',
      label: 'Comer cerca de Santa Croce',
      h1: 'Dónde comer cerca de Santa Croce y del Bargello.',
      lead: 'Via Ghibellina atraviesa el barrio de Santa Croce, del Museo del Bargello a la Casa Buonarroti. A mitad de camino está nuestra osteria: ladrillo visto, mesas juntas y una cena que se toma su tiempo.',
      sections: [
        {
          h2: 'Entre el Bargello y Santa Croce',
          p: [
            'Es la Florencia de Miguel Ángel: sus esculturas están en el Bargello, su tumba en Santa Croce, la casa familiar en Via Ghibellina. De un museo a otro hay pocos minutos a pie, y los Uffizi y el Duomo quedan un poco más allá.',
            '[Trattoria Boboli Al Bargello](/locali/al-bargello/) está en esta calle, lo bastante lejos de las vías más concurridas para comer con calma.',
          ],
        },
        {
          h2: 'Qué se come',
          p: [
            'Cocina toscana sin adornos: tabla de embutidos y crostini, pasta fresca de nuestro obrador, chuletón a la brasa, peposo de ternera cocinado en Chianti y una buena copa de vino. Abre a mediodía y por la noche, todos los días. Los platos están en la [carta](/menu/).',
          ],
        },
        {
          h2: 'Todo sin gluten',
          p: [
            'Como en todos los locales Boboli, la carta es íntegramente sin gluten y forma parte del programa AIC Alimentazione Fuori Casa: pan, pasta y postres incluidos. Lee más sobre [comer sin gluten en Florencia](/senza-glutine-firenze/).',
            'Si estás al otro lado del Arno, mira [dónde comer cerca del Palacio Pitti](/dove-mangiare/oltrarno-palazzo-pitti/).',
          ],
        },
      ],
      placesTitle: 'El local en Via Ghibellina',
      faq: [
        ['¿Dónde comer cerca de Santa Croce?', 'En Via Ghibellina 147/R, entre el Museo del Bargello y la Basílica de Santa Croce, está Trattoria Boboli Al Bargello Gluten Free: cocina toscana, vino y una cena tranquila.'],
        ['¿Dónde comer sin gluten cerca de los Uffizi?', 'Trattoria Boboli Al Bargello Gluten Free está a pocos minutos a pie de los Uffizi, en Via Ghibellina: toda la carta es sin gluten.'],
        ['¿Hace falta reservar para cenar?', 'Es recomendable, sobre todo en fin de semana: se reserva online desde la página del local.'],
      ],
    },
    de: {
      title: 'Essen nahe Santa Croce und Bargello in Florenz',
      desc: 'Essen nahe Santa Croce, Bargello und Uffizien: Trattoria Boboli Al Bargello in der Via Ghibellina, toskanische Küche, komplett glutenfrei. Öffnungszeiten.',
      label: 'Essen nahe Santa Croce',
      h1: 'Essen in der Nähe von Santa Croce und Bargello.',
      lead: 'Die Via Ghibellina durchquert das Viertel Santa Croce, vom Bargello-Museum bis zur Casa Buonarroti. Auf halbem Weg liegt unsere Osteria: Sichtziegel, eng gestellte Tische und ein Abendessen, das sich Zeit nimmt.',
      sections: [
        {
          h2: 'Zwischen Bargello und Santa Croce',
          p: [
            'Das ist das Florenz Michelangelos: Seine Skulpturen stehen im Bargello, sein Grab liegt in Santa Croce, das Haus der Familie in der Via Ghibellina. Von einem Museum zum nächsten sind es wenige Gehminuten, Uffizien und Dom liegen nur etwas weiter.',
            'Die [Trattoria Boboli Al Bargello](/locali/al-bargello/) liegt an dieser Straße, gerade weit genug von den vollsten Gassen, um in Ruhe zu essen.',
          ],
        },
        {
          h2: 'Was es zu essen gibt',
          p: [
            'Geradlinige toskanische Küche: Brett mit Wurst und Crostini, frische Pasta aus unserer Manufaktur, T-Bone-Steak vom Grill, in Chianti geschmortes Peposo-Rind und ein gutes Glas Wein. Mittags und abends geöffnet, jeden Tag. Die Gerichte stehen auf der [Speisekarte](/menu/).',
          ],
        },
        {
          h2: 'Alles glutenfrei',
          p: [
            'Wie in allen Boboli-Lokalen ist die Karte vollständig glutenfrei und Teil des AIC-Programms Alimentazione Fuori Casa: Brot, Pasta und Desserts eingeschlossen. Mehr unter [glutenfrei essen in Florenz](/senza-glutine-firenze/).',
            'Bist du auf der anderen Seite des Arno, schau bei [Essen nahe dem Palazzo Pitti](/dove-mangiare/oltrarno-palazzo-pitti/).',
          ],
        },
      ],
      placesTitle: 'Unser Lokal in der Via Ghibellina',
      faq: [
        ['Wo kann man nahe Santa Croce essen?', 'In der Via Ghibellina 147/R, zwischen Bargello-Museum und Basilika Santa Croce, liegt die Trattoria Boboli Al Bargello Gluten Free: toskanische Küche, Wein und ein Abendessen in Ruhe.'],
        ['Wo kann man nahe den Uffizien glutenfrei essen?', 'Die Trattoria Boboli Al Bargello Gluten Free liegt wenige Gehminuten von den Uffizien, in der Via Ghibellina: Die ganze Karte ist glutenfrei.'],
        ['Muss man für abends reservieren?', 'Es ist empfehlenswert, besonders am Wochenende: Reservieren kannst du online auf der Seite des Lokals.'],
      ],
    },
    fr: {
      title: 'Où manger près de Santa Croce et du Bargello',
      desc: 'Où manger près de Santa Croce, du Bargello et des Offices : Trattoria Boboli Al Bargello, via Ghibellina, cuisine toscane entièrement sans gluten. Horaires.',
      label: 'Manger près de Santa Croce',
      h1: 'Où manger près de Santa Croce et du Bargello.',
      lead: 'La via Ghibellina traverse le quartier de Santa Croce, du musée du Bargello à la Casa Buonarroti. À mi-chemin se trouve notre osteria : briques apparentes, tables rapprochées et un dîner qui prend son temps.',
      sections: [
        {
          h2: 'Entre le Bargello et Santa Croce',
          p: [
            "C'est la Florence de Michel-Ange : ses sculptures sont au Bargello, son tombeau à Santa Croce, la maison de famille via Ghibellina. D'un musée à l'autre, il n'y a que quelques minutes à pied, et les Offices et le Duomo sont à peine plus loin.",
            'La [Trattoria Boboli Al Bargello](/locali/al-bargello/) est dans cette rue, juste assez loin des ruelles les plus fréquentées pour manger tranquillement.',
          ],
        },
        {
          h2: "Ce que l'on mange",
          p: [
            'Une cuisine toscane franche : planche de charcuterie et crostini, pâtes fraîches de notre atelier, côte de bœuf à la braise, peposo de bœuf mijoté au Chianti, et un bon verre de vin. Ouvert midi et soir, tous les jours. Les plats sont sur la [carte](/menu/).',
          ],
        },
        {
          h2: 'Tout sans gluten',
          p: [
            'Comme dans toutes les adresses Boboli, la carte est entièrement sans gluten et fait partie du programme AIC Alimentazione Fuori Casa : pain, pâtes et desserts compris. En savoir plus sur [manger sans gluten à Florence](/senza-glutine-firenze/).',
            "Si vous êtes de l'autre côté de l'Arno, voyez [où manger près du palais Pitti](/dove-mangiare/oltrarno-palazzo-pitti/).",
          ],
        },
      ],
      placesTitle: 'Notre adresse via Ghibellina',
      faq: [
        ['Où manger près de Santa Croce ?', 'Au 147/R via Ghibellina, entre le musée du Bargello et la basilique Santa Croce, se trouve la Trattoria Boboli Al Bargello Gluten Free : cuisine toscane, vin et dîner sans se presser.'],
        ['Où manger sans gluten près des Offices ?', 'La Trattoria Boboli Al Bargello Gluten Free est à quelques minutes à pied des Offices, via Ghibellina : toute la carte est sans gluten.'],
        ['Faut-il réserver pour le dîner ?', "C'est conseillé, surtout le week-end : la réservation se fait en ligne depuis la page du restaurant."],
      ],
    },
  },
};

export const GUIDES: Guide[] = [glutenFree, oltrarno, santaCroce];

/** La guida di zona di un locale, per il link «nei dintorni» dalla sua pagina. */
export const guideOfLocale = (id: string): Guide | undefined => [oltrarno, santaCroce].find((g) => g.locali.includes(id));
export const GLUTEN_FREE_GUIDE = glutenFree;
