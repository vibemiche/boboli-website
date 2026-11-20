import type { Lang } from './i18n';

// La pagina «Chi siamo». Il testo italiano e quello inglese sono ripresi alla
// lettera dalla prima pagina del menu dei ristoranti; spagnolo, tedesco e
// francese sono la traduzione fedele dello stesso testo.
export interface AboutText {
  title: string;
  desc: string;
  label: string;
  kicker: string;
  h1: string;
  body: string[];
  alt: { family: string; rufina: string; yard: string };
  archive: string;
}

export const ABOUT: Record<Lang, AboutText> = {
  it: {
    title: 'Chi siamo · La storia di Trattoria Boboli a Firenze',
    desc: 'La storia di Trattoria Boboli: la famiglia Florestani, Luciano e Clara, Michael, le ricette storiche e la Rinomata Ditta Bellini. Firenze, dal 1978.',
    label: 'Chi siamo',
    kicker: 'Chi siamo',
    h1: 'Una storia di famiglia, dal 1978.',
    body: [
      'Trattoria Boboli nasce da una storia di famiglia e da una visione che guarda al futuro senza perdere il valore delle proprie radici.',
      "Le sue origini si intrecciano con il percorso di Luciano e Clara, genitori di Michael: lui prima macellaio, poi ristoratore; lei figura centrale di un cammino costruito sul lavoro, sull'accoglienza e su una profonda cultura della tavola.",
      "Al centro di questo progetto ci sono le ricette storiche della famiglia Florestani, custodite nel tempo come patrimonio di gusto, memoria e tradizione toscana. Alcuni dei piatti che oggi arrivano in tavola si ispirano ai primi assaggi di Michael nell'osteria dei suoi genitori, sapori che ancora oggi desidera celebrare con rispetto e sensibilità contemporanea.",
      "A dare nuova forza a questa eredità è stato l'ingresso del nuovo socio della Rinomata Ditta Bellini, che ha portato al progetto competenze organizzative e produttive decisive. Grazie a questo contributo, le ricette di famiglia trovano oggi continuità attraverso produttori selezionati e un laboratorio in cui tradizione e ricerca si incontrano ogni giorno.",
    ],
    alt: {
      family: 'Michael di Trattoria Boboli, con la giacca da cuoco, in una foto di famiglia',
      rufina: 'Foto d\'archivio: una festa di paese con lo striscione «Fattoria Rufina, proprietà F. Bellini»',
      yard: "Foto d'archivio: un gruppo di lavoranti in posa in un cortile",
    },
    archive: "Dall'archivio di famiglia",
  },
  en: {
    title: 'About us · The story of Trattoria Boboli, Florence',
    desc: 'The story of Trattoria Boboli: the Florestani family, Luciano and Clara, Michael, the historic family recipes and Rinomata Ditta Bellini. Florence, since 1978.',
    label: 'About us',
    kicker: 'About us',
    h1: 'A family story, since 1978.',
    body: [
      'Trattoria Boboli is rooted in a family story and in a vision that looks ahead without losing touch with its origins.',
      "Its beginnings are tied to Luciano and Clara, Michael's parents: he was first a butcher, then a restaurateur; she was a key part of a journey built on hard work, hospitality and a deep culture of the table.",
      "At the heart of this project are the historic recipes of the Florestani family, preserved over time as a heritage of flavour, memory and Tuscan tradition. Some of the dishes served today are inspired by Michael's earliest tastes in his parents' osteria, flavours he still chooses to honour with respect and a contemporary sensibility.",
      'This legacy has been strengthened by the arrival of the new partner from Rinomata Ditta Bellini, whose organisational and production expertise has given the project greater structure and continuity. Thanks to this contribution, the family recipes now live on through selected producers and a laboratory where tradition and research meet every day.',
    ],
    alt: {
      family: "Michael of Trattoria Boboli, in his chef's jacket, in a family photo",
      rufina: 'Archive photo: a village festival with the banner «Fattoria Rufina, property of F. Bellini»',
      yard: 'Archive photo: a group of workers posing in a courtyard',
    },
    archive: 'From the family archive',
  },
  es: {
    title: 'Quiénes somos · La historia de Trattoria Boboli, Florencia',
    desc: 'La historia de Trattoria Boboli: la familia Florestani, Luciano y Clara, Michael, las recetas históricas y la Rinomata Ditta Bellini. Florencia, desde 1978.',
    label: 'Quiénes somos',
    kicker: 'Quiénes somos',
    h1: 'Una historia de familia, desde 1978.',
    body: [
      'Trattoria Boboli nace de una historia de familia y de una visión que mira al futuro sin perder el valor de sus raíces.',
      'Sus orígenes se entrelazan con el camino de Luciano y Clara, padres de Michael: él, primero carnicero y luego restaurador; ella, figura central de un recorrido construido sobre el trabajo, la hospitalidad y una profunda cultura de la mesa.',
      'En el centro de este proyecto están las recetas históricas de la familia Florestani, custodiadas con el tiempo como un patrimonio de sabor, memoria y tradición toscana. Algunos de los platos que hoy llegan a la mesa se inspiran en los primeros sabores que Michael probó en la osteria de sus padres, sabores que todavía hoy quiere celebrar con respeto y sensibilidad contemporánea.',
      'Esta herencia ha cobrado nueva fuerza con la llegada del nuevo socio de la Rinomata Ditta Bellini, que ha aportado al proyecto competencias organizativas y productivas decisivas. Gracias a esta aportación, las recetas de familia encuentran hoy continuidad a través de productores seleccionados y un obrador donde la tradición y la investigación se encuentran cada día.',
    ],
    alt: {
      family: 'Michael de Trattoria Boboli, con la chaqueta de cocinero, en una foto de familia',
      rufina: 'Foto de archivo: una fiesta de pueblo con la pancarta «Fattoria Rufina, propiedad de F. Bellini»',
      yard: 'Foto de archivo: un grupo de trabajadores posando en un patio',
    },
    archive: 'Del archivo de la familia',
  },
  de: {
    title: 'Über uns · Die Geschichte der Trattoria Boboli, Florenz',
    desc: 'Die Geschichte der Trattoria Boboli: Familie Florestani, Luciano und Clara, Michael, die historischen Rezepte und die Rinomata Ditta Bellini. Florenz, seit 1978.',
    label: 'Über uns',
    kicker: 'Über uns',
    h1: 'Eine Familiengeschichte, seit 1978.',
    body: [
      'Die Trattoria Boboli entsteht aus einer Familiengeschichte und aus einer Vision, die nach vorn blickt, ohne den Wert der eigenen Wurzeln zu verlieren.',
      'Ihre Anfänge sind eng mit dem Weg von Luciano und Clara verbunden, den Eltern von Michael: er zuerst Metzger, dann Gastwirt; sie die zentrale Figur eines Weges, der auf Arbeit, Gastfreundschaft und einer tiefen Kultur des Essens aufgebaut ist.',
      'Im Mittelpunkt dieses Projekts stehen die historischen Rezepte der Familie Florestani, über die Zeit bewahrt als Erbe aus Geschmack, Erinnerung und toskanischer Tradition. Einige der Gerichte, die heute auf den Tisch kommen, sind von Michaels ersten Kostproben in der Osteria seiner Eltern inspiriert – Aromen, die er bis heute mit Respekt und zeitgemäßem Gespür feiern möchte.',
      'Neue Kraft bekam dieses Erbe durch den Einstieg des neuen Partners der Rinomata Ditta Bellini, der entscheidende Kompetenzen in Organisation und Produktion in das Projekt eingebracht hat. Dank dieses Beitrags finden die Familienrezepte heute ihre Fortsetzung durch ausgewählte Erzeuger und eine Manufaktur, in der sich Tradition und Forschung jeden Tag begegnen.',
    ],
    alt: {
      family: 'Michael von der Trattoria Boboli, in Kochjacke, auf einem Familienfoto',
      rufina: 'Archivfoto: ein Dorffest mit dem Transparent «Fattoria Rufina, Eigentum F. Bellini»',
      yard: 'Archivfoto: eine Gruppe von Arbeitern, die in einem Hof posieren',
    },
    archive: 'Aus dem Familienarchiv',
  },
  fr: {
    title: 'Qui sommes-nous · L’histoire de Trattoria Boboli, Florence',
    desc: 'L’histoire de Trattoria Boboli : la famille Florestani, Luciano et Clara, Michael, les recettes historiques et la Rinomata Ditta Bellini. Florence, depuis 1978.',
    label: 'Qui sommes-nous',
    kicker: 'Qui sommes-nous',
    h1: 'Une histoire de famille, depuis 1978.',
    body: [
      'Trattoria Boboli naît d’une histoire de famille et d’une vision tournée vers l’avenir, sans perdre la valeur de ses racines.',
      'Ses origines se mêlent au parcours de Luciano et Clara, les parents de Michael : lui d’abord boucher, puis restaurateur ; elle, figure centrale d’un chemin bâti sur le travail, l’accueil et une profonde culture de la table.',
      'Au cœur de ce projet se trouvent les recettes historiques de la famille Florestani, préservées au fil du temps comme un patrimoine de goût, de mémoire et de tradition toscane. Certains des plats servis aujourd’hui s’inspirent des premières dégustations de Michael dans l’osteria de ses parents, des saveurs qu’il souhaite encore célébrer avec respect et une sensibilité contemporaine.',
      'Cet héritage a trouvé une force nouvelle avec l’arrivée du nouvel associé de la Rinomata Ditta Bellini, qui a apporté au projet des compétences d’organisation et de production décisives. Grâce à cette contribution, les recettes de famille trouvent aujourd’hui leur continuité à travers des producteurs sélectionnés et un atelier où tradition et recherche se rencontrent chaque jour.',
    ],
    alt: {
      family: 'Michael de Trattoria Boboli, en veste de cuisinier, sur une photo de famille',
      rufina: 'Photo d’archive : une fête de village avec la banderole «Fattoria Rufina, propriété de F. Bellini»',
      yard: 'Photo d’archive : un groupe de travailleurs posant dans une cour',
    },
    archive: 'Des archives de la famille',
  },
};
