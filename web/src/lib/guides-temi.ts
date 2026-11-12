import type { Guide } from './guides';

// Le pagine sui piatti e sui momenti: bistecca, ribollita, pasta fresca, panini,
// vino. Stessa forma delle guide di zona (vedi guides.ts).

const RISTORANTI = ['trattoria-1978', 'al-bargello', 'la-cantina'];

const bistecca: Guide = {
  path: '/bistecca-fiorentina-senza-glutine/',
  image: 'piatti/1-bistecca',
  imageAlt: {
    it: "Bistecca alla fiorentina con l'osso, cotta alla brace e servita da Trattoria Boboli a Firenze",
    en: 'Florentine T-bone steak, grilled over embers and served at Trattoria Boboli in Florence',
    es: 'Bistec a la florentina con hueso, hecho a la brasa y servido en Trattoria Boboli, Florencia',
    de: 'Bistecca alla fiorentina mit Knochen, über Glut gegrillt, in der Trattoria Boboli in Florenz',
    fr: 'Bistecca alla fiorentina avec os, cuite à la braise et servie à la Trattoria Boboli à Florence',
  },
  locali: RISTORANTI,
  landmarks: [],
  tr: {
    it: {
      title: 'Bistecca alla fiorentina senza glutine a Firenze · Boboli',
      desc: 'Dove mangiare la bistecca alla fiorentina a Firenze, alla brace e al sangue, in tre ristoranti dove anche pane e contorni sono senza glutine. Prenota online.',
      label: 'Bistecca alla fiorentina',
      h1: 'La bistecca alla fiorentina, alla brace. E tutto il resto senza glutine.',
      lead: "Alta, con l'osso, cotta sulla brace e servita al sangue: la fiorentina è la regina della tavola toscana. Da noi arriva con pane e contorni che può mangiare tutta la tavola, celiaci compresi.",
      sections: [
        {
          h2: 'Come si riconosce una vera fiorentina',
          p: [
            "Si taglia dalla lombata, con l'osso a T in mezzo: da una parte il filetto, dall'altra il controfiletto. È alta almeno tre dita e si cuoce sulla brace viva pochi minuti per lato, poi in piedi sull'osso. Sale e olio arrivano dopo, a cottura finita.",
            'Si serve al sangue: è così che la carne resta morbida e saporita. Di solito si vende a peso e si divide in due o più persone.',
          ],
        },
        {
          h2: 'La bistecca da Boboli',
          p: [
            "La carne la sceglie il nostro chef e la cuociamo alla brace. Se sei da solo c'è anche la bistecca con l'osso per una persona, circa mezzo chilo. Accanto: patate al forno, verdure di stagione e un rosso toscano scelto dalla [nostra cantina](/vino-degustazioni-firenze/).",
          ],
        },
        {
          h2: 'Senza glutine, dal pane al dolce',
          p: [
            'La carne alla brace è senza glutine di suo. Il problema, per chi è celiaco, è quasi sempre tutto il resto: il pane in tavola, la griglia condivisa, i contorni. Nei nostri locali tutta la cucina è senza glutine e fa parte del programma AIC Alimentazione Fuori Casa. Scopri [come mangiamo senza glutine a Firenze](/senza-glutine-firenze/) o guarda il [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'Dove mangiare la bistecca',
      faq: [
        ['La bistecca alla fiorentina è senza glutine?', 'La carne sì. Bisogna fare attenzione a pane, contorni e a come viene usata la griglia: da Trattoria Boboli tutta la cucina è senza glutine, quindi anche quello che accompagna la bistecca.'],
        ['Per quante persone è una fiorentina?', "Una fiorentina classica supera spesso il chilo e si divide in due o più persone. Da noi c'è anche la bistecca con l'osso per una persona, di circa mezzo chilo."],
        ['Si può chiedere ben cotta?', 'La tradizione la vuole al sangue, ed è così che dà il meglio. Dicci come la preferisci quando ordini.'],
      ],
    },
    en: {
      title: 'Gluten-free Florentine steak in Florence · Boboli',
      desc: 'Where to eat bistecca alla fiorentina in Florence, grilled over embers and served rare, in three restaurants where bread and sides are gluten free too.',
      label: 'Florentine steak',
      h1: 'Florentine steak, grilled over embers. And everything else gluten free.',
      lead: 'Thick, on the bone, grilled over embers and served rare: the fiorentina is the queen of the Tuscan table. With us it comes with bread and sides the whole table can eat, coeliacs included.',
      sections: [
        {
          h2: 'How to recognise a real fiorentina',
          p: [
            'It is cut from the loin, with the T-shaped bone in the middle: fillet on one side, sirloin on the other. It is at least three fingers thick and cooks over live embers for a few minutes per side, then standing on the bone. Salt and oil come afterwards.',
            'It is served rare: that is how the meat stays tender and full of flavour. It is usually sold by weight and shared between two or more people.',
          ],
        },
        {
          h2: 'The steak at Boboli',
          p: [
            'Our chef chooses the meat and we grill it over embers. If you are on your own there is also a T-bone for one, about half a kilo. Alongside: roast potatoes, seasonal vegetables and a Tuscan red from [our cellar](/vino-degustazioni-firenze/).',
          ],
        },
        {
          h2: 'Gluten free, from bread to dessert',
          p: [
            'Grilled meat is naturally gluten free. The problem for coeliacs is almost always everything else: the bread on the table, a shared grill, the sides. In our restaurants the whole kitchen is gluten free and part of the Italian Coeliac Association eating-out programme. Read about [eating gluten free in Florence](/senza-glutine-firenze/) or see the [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'Where to eat the steak',
      faq: [
        ['Is Florentine steak gluten free?', 'The meat is. What needs care is the bread, the sides and how the grill is used: at Trattoria Boboli the whole kitchen is gluten free, so everything that comes with the steak is too.'],
        ['How many people does a fiorentina serve?', 'A classic fiorentina often weighs over a kilo and is shared between two or more. We also have a T-bone for one, about half a kilo.'],
        ['Can I ask for it well done?', 'Tradition wants it rare, and that is how it is at its best. Tell us how you like it when you order.'],
      ],
    },
    es: {
      title: 'Bistec a la florentina sin gluten en Florencia · Boboli',
      desc: 'Dónde comer la bistecca alla fiorentina en Florencia, a la brasa y poco hecha, en tres restaurantes donde el pan y las guarniciones también son sin gluten.',
      label: 'Bistec a la florentina',
      h1: 'El bistec a la florentina, a la brasa. Y todo lo demás sin gluten.',
      lead: 'Alto, con hueso, hecho a la brasa y servido poco hecho: la fiorentina es la reina de la mesa toscana. Con nosotros llega con pan y guarniciones que puede comer toda la mesa, celíacos incluidos.',
      sections: [
        {
          h2: 'Cómo reconocer una auténtica fiorentina',
          p: [
            'Se corta del lomo, con el hueso en T en medio: a un lado el solomillo, al otro el lomo bajo. Tiene al menos tres dedos de alto y se hace sobre brasa viva unos minutos por lado, y luego de pie sobre el hueso. La sal y el aceite llegan después.',
            'Se sirve poco hecha: así la carne queda tierna y sabrosa. Normalmente se vende al peso y se comparte entre dos o más personas.',
          ],
        },
        {
          h2: 'El bistec en Boboli',
          p: [
            'La carne la elige nuestro chef y la hacemos a la brasa. Si vienes solo, hay también un bistec con hueso para una persona, de medio kilo aproximadamente. Al lado: patatas al horno, verduras de temporada y un tinto toscano de [nuestra bodega](/vino-degustazioni-firenze/).',
          ],
        },
        {
          h2: 'Sin gluten, del pan al postre',
          p: [
            'La carne a la brasa no lleva gluten. El problema para un celíaco casi siempre es todo lo demás: el pan de la mesa, la parrilla compartida, las guarniciones. En nuestros locales toda la cocina es sin gluten y forma parte del programa AIC Alimentazione Fuori Casa. Lee sobre [comer sin gluten en Florencia](/senza-glutine-firenze/) o mira la [carta](/menu/).',
          ],
        },
      ],
      placesTitle: 'Dónde comer el bistec',
      faq: [
        ['¿El bistec a la florentina lleva gluten?', 'La carne no. Hay que tener cuidado con el pan, las guarniciones y el uso de la parrilla: en Trattoria Boboli toda la cocina es sin gluten, también lo que acompaña al bistec.'],
        ['¿Para cuántas personas es una fiorentina?', 'Una fiorentina clásica suele pasar del kilo y se comparte entre dos o más. También tenemos un bistec con hueso para una persona, de medio kilo aproximadamente.'],
        ['¿Se puede pedir muy hecha?', 'La tradición la quiere poco hecha, y así está en su mejor punto. Dinos cómo la prefieres al pedir.'],
      ],
    },
    de: {
      title: 'Bistecca alla fiorentina glutenfrei in Florenz · Boboli',
      desc: 'Wo man in Florenz Bistecca alla fiorentina isst, über Glut gegrillt und blutig serviert, in drei Restaurants, in denen auch Brot und Beilagen glutenfrei sind.',
      label: 'Bistecca alla fiorentina',
      h1: 'Bistecca alla fiorentina, über Glut gegrillt. Und alles andere glutenfrei.',
      lead: 'Dick, am Knochen, über Glut gegrillt und blutig serviert: Die Fiorentina ist die Königin der toskanischen Tafel. Bei uns kommt sie mit Brot und Beilagen, die der ganze Tisch essen kann, auch bei Zöliakie.',
      sections: [
        {
          h2: 'Woran man eine echte Fiorentina erkennt',
          p: [
            'Sie wird aus dem Rücken geschnitten, mit dem T-förmigen Knochen in der Mitte: auf der einen Seite das Filet, auf der anderen das Roastbeef. Sie ist mindestens drei Finger dick und gart über lebendiger Glut wenige Minuten pro Seite, dann stehend auf dem Knochen. Salz und Öl kommen erst danach.',
            'Serviert wird sie blutig: So bleibt das Fleisch zart und aromatisch. Meist wird sie nach Gewicht verkauft und von zwei oder mehr Personen geteilt.',
          ],
        },
        {
          h2: 'Das Steak bei Boboli',
          p: [
            'Das Fleisch wählt unser Küchenchef aus, gegrillt wird über Glut. Wer allein kommt, bekommt auch ein Steak am Knochen für eine Person, etwa ein halbes Kilo. Dazu: Ofenkartoffeln, Gemüse der Saison und ein toskanischer Rotwein aus [unserer Cantina](/vino-degustazioni-firenze/).',
          ],
        },
        {
          h2: 'Glutenfrei, vom Brot bis zum Dessert',
          p: [
            'Gegrilltes Fleisch ist von Natur aus glutenfrei. Das Problem bei Zöliakie ist fast immer alles andere: das Brot auf dem Tisch, der gemeinsame Grill, die Beilagen. In unseren Lokalen ist die ganze Küche glutenfrei und Teil des AIC-Programms Alimentazione Fuori Casa. Mehr zu [glutenfrei essen in Florenz](/senza-glutine-firenze/) oder zur [Speisekarte](/menu/).',
          ],
        },
      ],
      placesTitle: 'Wo es das Steak gibt',
      faq: [
        ['Ist Bistecca alla fiorentina glutenfrei?', 'Das Fleisch ja. Aufpassen muss man bei Brot, Beilagen und der Nutzung des Grills: In der Trattoria Boboli ist die ganze Küche glutenfrei, also auch alles, was zum Steak kommt.'],
        ['Für wie viele Personen reicht eine Fiorentina?', 'Eine klassische Fiorentina wiegt oft über ein Kilo und wird von zwei oder mehr Personen geteilt. Bei uns gibt es auch ein Steak am Knochen für eine Person, etwa ein halbes Kilo.'],
        ['Kann man sie durchgebraten bestellen?', 'Die Tradition will sie blutig, und so schmeckt sie am besten. Sag uns beim Bestellen, wie du sie magst.'],
      ],
    },
    fr: {
      title: 'Bistecca alla fiorentina sans gluten à Florence · Boboli',
      desc: 'Où manger la bistecca alla fiorentina à Florence, cuite à la braise et servie saignante, dans trois restaurants où pain et accompagnements sont sans gluten.',
      label: 'Bistecca alla fiorentina',
      h1: 'La bistecca alla fiorentina, à la braise. Et tout le reste sans gluten.',
      lead: 'Épaisse, avec son os, cuite à la braise et servie saignante : la fiorentina est la reine de la table toscane. Chez nous, elle arrive avec un pain et des accompagnements que toute la table peut manger, cœliaques compris.',
      sections: [
        {
          h2: 'Comment reconnaître une vraie fiorentina',
          p: [
            "Elle est taillée dans l'aloyau, avec l'os en T au milieu : le filet d'un côté, le faux-filet de l'autre. Elle fait au moins trois doigts d'épaisseur et cuit sur la braise vive quelques minutes par face, puis debout sur l'os. Le sel et l'huile viennent après.",
            "Elle se sert saignante : c'est ainsi que la viande reste tendre et savoureuse. Elle est en général vendue au poids et partagée à deux ou plus.",
          ],
        },
        {
          h2: 'La bistecca chez Boboli',
          p: [
            "La viande est choisie par notre chef et cuite à la braise. Si vous êtes seul, il y a aussi une bistecca avec os pour une personne, d'environ un demi-kilo. À côté : pommes de terre au four, légumes de saison et un rouge toscan de [notre cave](/vino-degustazioni-firenze/).",
          ],
        },
        {
          h2: 'Sans gluten, du pain au dessert',
          p: [
            "La viande à la braise est naturellement sans gluten. Le problème, pour un cœliaque, c'est presque toujours tout le reste : le pain sur la table, le gril partagé, les accompagnements. Dans nos restaurants, toute la cuisine est sans gluten et fait partie du programme AIC Alimentazione Fuori Casa. En savoir plus sur [manger sans gluten à Florence](/senza-glutine-firenze/) ou voir la [carte](/menu/).",
          ],
        },
      ],
      placesTitle: 'Où manger la bistecca',
      faq: [
        ['La bistecca alla fiorentina est-elle sans gluten ?', "La viande, oui. Il faut faire attention au pain, aux accompagnements et à l'usage du gril : à la Trattoria Boboli, toute la cuisine est sans gluten, donc aussi ce qui accompagne la bistecca."],
        ['Pour combien de personnes est une fiorentina ?', "Une fiorentina classique dépasse souvent le kilo et se partage à deux ou plus. Nous avons aussi une bistecca avec os pour une personne, d'environ un demi-kilo."],
        ['Peut-on la demander bien cuite ?', "La tradition la veut saignante, et c'est ainsi qu'elle est la meilleure. Dites-nous votre préférence à la commande."],
      ],
    },
  },
};

const ribollita: Guide = {
  path: '/ribollita-senza-glutine/',
  image: 'laboratorio',
  imageAlt: {
    it: 'Il laboratorio di Trattoria Boboli, dove si fa il pane senza glutine che finisce nella ribollita',
    en: 'The Trattoria Boboli workshop, where the gluten-free bread for the ribollita is baked',
    es: 'El obrador de Trattoria Boboli, donde se hace el pan sin gluten que va en la ribollita',
    de: 'Die Manufaktur der Trattoria Boboli, in der das glutenfreie Brot für die Ribollita gebacken wird',
    fr: "L'atelier de la Trattoria Boboli, où l'on fait le pain sans gluten de la ribollita",
  },
  locali: RISTORANTI,
  landmarks: [],
  tr: {
    it: {
      title: 'Ribollita senza glutine a Firenze: dove mangiarla · Boboli',
      desc: 'La ribollita toscana senza glutine: cavolo nero, fagioli cannellini e pane raffermo senza glutine del nostro laboratorio. Dove mangiarla a Firenze.',
      label: 'Ribollita senza glutine',
      h1: 'La ribollita, quella vera. Con il pane senza glutine.',
      lead: 'La ribollita è fatta di pane: per chi è celiaco, a Firenze, è il piatto proibito per eccellenza. Noi la facciamo come sempre, cambiando una cosa sola: il pane, che nasce nel nostro laboratorio.',
      sections: [
        {
          h2: "Che cos'è la ribollita",
          p: [
            "È la zuppa d'inverno della cucina fiorentina: cavolo nero, fagioli cannellini, verdure e pane toscano raffermo. Il nome dice come si fa: si prepara il giorno prima e si «ribolle» il giorno dopo, quando i sapori si sono legati ed è ancora più buona.",
            'Nasce nelle case contadine, dove il pane avanzato non si buttava mai. Si serve densa, con un filo di olio extravergine a crudo.',
          ],
        },
        {
          h2: 'La nostra ribollita senza glutine',
          p: [
            'La ricetta è quella di sempre. Il pane raffermo, però, è senza glutine ed è fatto nel nostro laboratorio, a pochi passi da Porta Romana: è lui che dà alla zuppa la consistenza giusta. Così la ribollita resta ribollita, e la mangia tutta la tavola.',
            "Nel laboratorio si possono anche acquistare alcune delle nostre specialità, come la ribollita e il peposo in barattolo: chiedi al personale cosa c'è.",
          ],
        },
        {
          h2: 'Cosa mangiare insieme',
          p: [
            'Prima un tagliere toscano con i crostini, dopo un peposo o una [bistecca alla brace](/bistecca-fiorentina-senza-glutine/). La storia dei nostri piatti di famiglia è in [Le ricette storiche di Casa Boboli](/blog/le-ricette-storiche-di-casa-boboli/); tutti i piatti sono nel [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'Dove mangiare la ribollita',
      faq: [
        ['La ribollita contiene glutine?', 'Quella tradizionale sì, perché è fatta con il pane. Da Trattoria Boboli la prepariamo con pane raffermo senza glutine del nostro laboratorio.'],
        ['Che differenza c\'è tra ribollita e pappa al pomodoro?', 'Sono due zuppe di pane. La ribollita è invernale, con cavolo nero, fagioli e verdure; la pappa al pomodoro è estiva, con pomodori maturi, aglio e basilico.'],
        ['Dove mangiare la ribollita senza glutine a Firenze?', 'Nei ristoranti Boboli in Via Romana, in Oltrarno, e in Via Ghibellina, a Santa Croce: tutto il menu è senza glutine.'],
      ],
    },
    en: {
      title: 'Gluten-free ribollita in Florence: where to eat it',
      desc: 'Tuscan ribollita made gluten free: black kale, cannellini beans and gluten-free stale bread from our own workshop. Where to eat it in Florence.',
      label: 'Gluten-free ribollita',
      h1: 'Real ribollita. Made with gluten-free bread.',
      lead: 'Ribollita is made of bread: for coeliacs in Florence it is the forbidden dish par excellence. We make it the way it has always been made, changing one thing only: the bread, baked in our own workshop.',
      sections: [
        {
          h2: 'What ribollita is',
          p: [
            'It is the winter soup of Florentine cooking: black kale, cannellini beans, vegetables and stale Tuscan bread. The name says how it is made: cooked the day before and "re-boiled" the next day, when the flavours have come together and it tastes even better.',
            'It was born in farmhouses, where leftover bread was never thrown away. It is served thick, with a drizzle of raw extra-virgin olive oil.',
          ],
        },
        {
          h2: 'Our gluten-free ribollita',
          p: [
            'The recipe is the usual one. The stale bread, though, is gluten free and made in our workshop, a few steps from Porta Romana: it is what gives the soup the right texture. So the ribollita stays ribollita, and the whole table can eat it.',
            'At the workshop you can also buy some of our specialities, such as ribollita and jarred peposo: ask the staff what is available.',
          ],
        },
        {
          h2: 'What to eat with it',
          p: [
            'A Tuscan board with crostini first, then peposo or a [grilled steak](/bistecca-fiorentina-senza-glutine/). All the dishes are on the [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'Where to eat ribollita',
      faq: [
        ['Does ribollita contain gluten?', 'The traditional one does, because it is made with bread. At Trattoria Boboli we make it with gluten-free stale bread from our own workshop.'],
        ['What is the difference between ribollita and pappa al pomodoro?', 'Both are bread soups. Ribollita is a winter dish with black kale, beans and vegetables; pappa al pomodoro is a summer one, with ripe tomatoes, garlic and basil.'],
        ['Where can I eat gluten-free ribollita in Florence?', 'At the Boboli restaurants on Via Romana, in the Oltrarno, and on Via Ghibellina, in Santa Croce: the whole menu is gluten free.'],
      ],
    },
    es: {
      title: 'Ribollita sin gluten en Florencia: dónde comerla',
      desc: 'La ribollita toscana sin gluten: col negra, alubias cannellini y pan del día anterior sin gluten de nuestro obrador. Dónde comerla en Florencia.',
      label: 'Ribollita sin gluten',
      h1: 'La ribollita de verdad. Con pan sin gluten.',
      lead: 'La ribollita está hecha de pan: para un celíaco, en Florencia, es el plato prohibido por excelencia. Nosotros la hacemos como siempre, cambiando una sola cosa: el pan, que nace en nuestro obrador.',
      sections: [
        {
          h2: 'Qué es la ribollita',
          p: [
            'Es la sopa de invierno de la cocina florentina: col negra, alubias cannellini, verduras y pan toscano del día anterior. El nombre dice cómo se hace: se prepara la víspera y se «vuelve a hervir» al día siguiente, cuando los sabores se han unido y está aún más rica.',
            'Nace en las casas campesinas, donde el pan sobrante nunca se tiraba. Se sirve espesa, con un hilo de aceite de oliva virgen extra en crudo.',
          ],
        },
        {
          h2: 'Nuestra ribollita sin gluten',
          p: [
            'La receta es la de siempre. Pero el pan es sin gluten y se hace en nuestro obrador, a pocos pasos de Porta Romana: es lo que da a la sopa su textura. Así la ribollita sigue siendo ribollita, y la come toda la mesa.',
            'En el obrador también se pueden comprar algunas de nuestras especialidades, como la ribollita y el peposo en tarro: pregunta al personal qué hay.',
          ],
        },
        {
          h2: 'Con qué acompañarla',
          p: [
            'Antes, una tabla toscana con crostini; después, un peposo o un [bistec a la brasa](/bistecca-fiorentina-senza-glutine/). Todos los platos están en la [carta](/menu/).',
          ],
        },
      ],
      placesTitle: 'Dónde comer la ribollita',
      faq: [
        ['¿La ribollita lleva gluten?', 'La tradicional sí, porque se hace con pan. En Trattoria Boboli la preparamos con pan sin gluten de nuestro obrador.'],
        ['¿Qué diferencia hay entre ribollita y pappa al pomodoro?', 'Son dos sopas de pan. La ribollita es de invierno, con col negra, alubias y verduras; la pappa al pomodoro es de verano, con tomates maduros, ajo y albahaca.'],
        ['¿Dónde comer ribollita sin gluten en Florencia?', 'En los restaurantes Boboli de Via Romana, en el Oltrarno, y de Via Ghibellina, en Santa Croce: toda la carta es sin gluten.'],
      ],
    },
    de: {
      title: 'Ribollita glutenfrei in Florenz: wo man sie isst',
      desc: 'Toskanische Ribollita, glutenfrei: Schwarzkohl, Cannellini-Bohnen und altbackenes glutenfreies Brot aus unserer Manufaktur. Wo man sie in Florenz isst.',
      label: 'Ribollita glutenfrei',
      h1: 'Echte Ribollita. Mit glutenfreiem Brot.',
      lead: 'Ribollita besteht aus Brot: Bei Zöliakie ist sie in Florenz das verbotene Gericht schlechthin. Wir kochen sie wie immer und ändern nur eines: das Brot, das aus unserer eigenen Manufaktur kommt.',
      sections: [
        {
          h2: 'Was Ribollita ist',
          p: [
            'Sie ist die Wintersuppe der Florentiner Küche: Schwarzkohl, Cannellini-Bohnen, Gemüse und altbackenes toskanisches Brot. Der Name verrät die Zubereitung: Sie wird am Vortag gekocht und am nächsten Tag „wieder aufgekocht“, wenn sich die Aromen verbunden haben.',
            'Entstanden ist sie in Bauernhäusern, wo altes Brot nie weggeworfen wurde. Serviert wird sie dick, mit einem Faden rohem Olivenöl extra vergine.',
          ],
        },
        {
          h2: 'Unsere glutenfreie Ribollita',
          p: [
            'Das Rezept ist das übliche. Das altbackene Brot aber ist glutenfrei und kommt aus unserer Manufaktur, wenige Schritte von der Porta Romana: Es gibt der Suppe die richtige Konsistenz. So bleibt die Ribollita eine Ribollita, und der ganze Tisch kann sie essen.',
            'In der Manufaktur kann man auch einige unserer Spezialitäten kaufen, etwa Ribollita und Peposo im Glas: Frag das Personal, was es gerade gibt.',
          ],
        },
        {
          h2: 'Was dazu passt',
          p: [
            'Vorher ein toskanisches Brett mit Crostini, danach Peposo oder ein [Steak vom Grill](/bistecca-fiorentina-senza-glutine/). Alle Gerichte stehen auf der [Speisekarte](/menu/).',
          ],
        },
      ],
      placesTitle: 'Wo es die Ribollita gibt',
      faq: [
        ['Enthält Ribollita Gluten?', 'Die traditionelle ja, weil sie mit Brot gemacht wird. In der Trattoria Boboli kochen wir sie mit glutenfreiem Brot aus unserer eigenen Manufaktur.'],
        ['Was ist der Unterschied zwischen Ribollita und Pappa al Pomodoro?', 'Beides sind Brotsuppen. Ribollita ist ein Wintergericht mit Schwarzkohl, Bohnen und Gemüse; Pappa al Pomodoro ein Sommergericht mit reifen Tomaten, Knoblauch und Basilikum.'],
        ['Wo isst man in Florenz glutenfreie Ribollita?', 'In den Boboli-Restaurants in der Via Romana im Oltrarno und in der Via Ghibellina in Santa Croce: Die ganze Karte ist glutenfrei.'],
      ],
    },
    fr: {
      title: 'Ribollita sans gluten à Florence : où la manger',
      desc: 'La ribollita toscane sans gluten : chou noir, haricots cannellini et pain rassis sans gluten de notre atelier. Où la manger à Florence.',
      label: 'Ribollita sans gluten',
      h1: 'La vraie ribollita. Avec du pain sans gluten.',
      lead: "La ribollita est faite de pain : pour un cœliaque, à Florence, c'est le plat interdit par excellence. Nous la préparons comme toujours, en ne changeant qu'une chose : le pain, qui vient de notre atelier.",
      sections: [
        {
          h2: "Qu'est-ce que la ribollita",
          p: [
            "C'est la soupe d'hiver de la cuisine florentine : chou noir, haricots cannellini, légumes et pain toscan rassis. Son nom dit comment on la fait : on la prépare la veille et on la « refait bouillir » le lendemain, quand les saveurs se sont liées.",
            "Elle est née dans les fermes, où l'on ne jetait jamais le pain. Elle se sert épaisse, avec un filet d'huile d'olive vierge extra crue.",
          ],
        },
        {
          h2: 'Notre ribollita sans gluten',
          p: [
            "La recette est celle de toujours. Mais le pain rassis est sans gluten et fait dans notre atelier, à quelques pas de la Porta Romana : c'est lui qui donne à la soupe sa texture. La ribollita reste donc une ribollita, et toute la table peut en manger.",
            "À l'atelier, on peut aussi acheter certaines de nos spécialités, comme la ribollita et le peposo en bocal : demandez au personnel ce qui est disponible.",
          ],
        },
        {
          h2: 'Avec quoi la manger',
          p: [
            "D'abord une planche toscane avec des crostini, ensuite un peposo ou une [bistecca à la braise](/bistecca-fiorentina-senza-glutine/). Tous les plats sont sur la [carte](/menu/).",
          ],
        },
      ],
      placesTitle: 'Où manger la ribollita',
      faq: [
        ['La ribollita contient-elle du gluten ?', "La recette traditionnelle, oui, car elle est faite avec du pain. À la Trattoria Boboli, nous la préparons avec du pain sans gluten de notre atelier."],
        ['Quelle différence entre ribollita et pappa al pomodoro ?', "Ce sont deux soupes au pain. La ribollita est un plat d'hiver, avec chou noir, haricots et légumes ; la pappa al pomodoro est un plat d'été, avec tomates mûres, ail et basilic."],
        ['Où manger une ribollita sans gluten à Florence ?', "Dans les restaurants Boboli de la via Romana, dans l'Oltrarno, et de la via Ghibellina, à Santa Croce : toute la carte est sans gluten."],
      ],
    },
  },
};

const pasta: Guide = {
  path: '/pasta-fresca-senza-glutine/',
  image: 'piatti/2-pasta',
  imageAlt: {
    it: 'Un piatto di pasta fresca senza glutine fatta nel laboratorio di Trattoria Boboli, a Firenze',
    en: 'A plate of gluten-free fresh pasta made in the Trattoria Boboli workshop in Florence',
    es: 'Un plato de pasta fresca sin gluten hecha en el obrador de Trattoria Boboli, en Florencia',
    de: 'Ein Teller frische glutenfreie Pasta aus der Manufaktur der Trattoria Boboli in Florenz',
    fr: "Une assiette de pâtes fraîches sans gluten faites dans l'atelier de la Trattoria Boboli, à Florence",
  },
  locali: RISTORANTI,
  landmarks: [],
  tr: {
    it: {
      title: 'Pasta fresca senza glutine a Firenze · Trattoria Boboli',
      desc: 'Pici, pappardelle e mezze maniche senza glutine, fatti ogni giorno nel nostro laboratorio a Firenze. Pici al peposo, pappardelle al sugo di nana e altro.',
      label: 'Pasta fresca senza glutine',
      h1: 'Pasta fresca senza glutine, fatta da noi.',
      lead: 'Pici, pappardelle, mezze maniche: tutta la nostra pasta nasce nel laboratorio, a pochi passi da Porta Romana, con una ricetta senza glutine che abbiamo messo a punto in anni di prove.',
      sections: [
        {
          h2: 'Una ricetta nostra',
          p: [
            'Fare una buona pasta fresca senza glutine è difficile: deve tenere la cottura, restare elastica e trattenere il sugo. Con lo studio e la ricerca abbiamo messo a punto una ricetta esclusiva, pensata per dare il gusto e la consistenza della pasta tradizionale.',
            'Ogni formato è scelto per il suo sugo: i pici, spessi e ruvidi, per i sughi di carne; le pappardelle, larghe e piatte, per i ragù; le mezze maniche per i sughi che devono entrare dentro.',
          ],
        },
        {
          h2: 'I piatti da provare',
          p: [
            'I **pici al peposo** sono la nostra ricetta storica di famiglia: pici freschi mantecati nel sugo del peposo, il manzo cotto per ore nel Chianti con aglio e pepe nero. Le **pappardelle al sugo di nana** portano in tavola il ragù d\'anatra della tradizione toscana. La storia di questi piatti è in [Le ricette storiche di Casa Boboli](/blog/le-ricette-storiche-di-casa-boboli/).',
          ],
        },
        {
          h2: 'Dal laboratorio alla tavola',
          p: [
            'Dallo stesso laboratorio arrivano il pane, i panini, i sughi e i dolci di tutti i nostri locali, che fanno parte del programma AIC Alimentazione Fuori Casa. Al [To-Go](/locali/to-go/) trovi anche la pasta fresca da portare via. Scopri [come mangiamo senza glutine a Firenze](/senza-glutine-firenze/) o guarda il [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'Dove mangiare la pasta fresca',
      faq: [
        ['Dove mangiare pasta fresca senza glutine a Firenze?', 'Nei ristoranti Boboli in Via Romana e in Via Ghibellina: tutta la pasta fresca è senza glutine ed è fatta nel nostro laboratorio.'],
        ['Cosa sono i pici?', 'Sono una pasta toscana simile a spaghetti molto spessi, tirati a mano. Da noi sono freschi e senza glutine, e li serviamo con il sugo di peposo.'],
        ['La pasta è fatta in un laboratorio senza glutine?', 'Sì: pane, pasta fresca, sughi e dolci nascono nel nostro laboratorio, dove tutta la produzione è senza glutine.'],
      ],
    },
    en: {
      title: 'Gluten-free fresh pasta in Florence · Trattoria Boboli',
      desc: 'Gluten-free pici, pappardelle and mezze maniche, made every day in our own workshop in Florence. Pici with peposo, pappardelle with duck ragù and more.',
      label: 'Gluten-free fresh pasta',
      h1: 'Gluten-free fresh pasta, made by us.',
      lead: 'Pici, pappardelle, mezze maniche: all our pasta is made in our workshop, a few steps from Porta Romana, with a gluten-free recipe we developed over years of trials.',
      sections: [
        {
          h2: 'A recipe of our own',
          p: [
            'Making good gluten-free fresh pasta is hard: it has to hold its bite, stay springy and carry the sauce. Through study and research we developed our own recipe, designed to give the taste and texture of traditional pasta.',
            'Each shape is chosen for its sauce: thick, rough pici for meat sauces; wide, flat pappardelle for ragù; mezze maniche for sauces that need to get inside.',
          ],
        },
        {
          h2: 'Dishes to try',
          p: [
            '**Pici al peposo** is our historic family recipe: fresh pici tossed in the sauce of peposo, beef slow-cooked for hours in Chianti with garlic and black pepper. **Pappardelle al sugo di nana** brings the traditional Tuscan duck ragù to the table.',
          ],
        },
        {
          h2: 'From the workshop to the table',
          p: [
            'The same workshop makes the bread, sandwiches, sauces and desserts for all our restaurants, which are part of the Italian Coeliac Association eating-out programme. At [To-Go](/locali/to-go/) you can also get fresh pasta to take away. Read about [eating gluten free in Florence](/senza-glutine-firenze/) or see the [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'Where to eat the fresh pasta',
      faq: [
        ['Where can I eat gluten-free fresh pasta in Florence?', 'At the Boboli restaurants on Via Romana and Via Ghibellina: all the fresh pasta is gluten free and made in our own workshop.'],
        ['What are pici?', 'A Tuscan pasta like very thick, hand-rolled spaghetti. Ours are fresh and gluten free, served with peposo sauce.'],
        ['Is the pasta made in a gluten-free workshop?', 'Yes: bread, fresh pasta, sauces and desserts are made in our own workshop, where everything produced is gluten free.'],
      ],
    },
    es: {
      title: 'Pasta fresca sin gluten en Florencia · Trattoria Boboli',
      desc: 'Pici, pappardelle y mezze maniche sin gluten, hechos cada día en nuestro obrador de Florencia. Pici al peposo, pappardelle con ragú de pato y más.',
      label: 'Pasta fresca sin gluten',
      h1: 'Pasta fresca sin gluten, hecha por nosotros.',
      lead: 'Pici, pappardelle, mezze maniche: toda nuestra pasta nace en el obrador, a pocos pasos de Porta Romana, con una receta sin gluten que afinamos durante años de pruebas.',
      sections: [
        {
          h2: 'Una receta propia',
          p: [
            'Hacer una buena pasta fresca sin gluten es difícil: tiene que aguantar la cocción, mantenerse elástica y retener la salsa. Con estudio e investigación conseguimos una receta propia, pensada para dar el sabor y la textura de la pasta tradicional.',
            'Cada formato se elige por su salsa: los pici, gruesos y rugosos, para las salsas de carne; las pappardelle, anchas y planas, para los ragús; las mezze maniche para las salsas que deben entrar dentro.',
          ],
        },
        {
          h2: 'Los platos que hay que probar',
          p: [
            'Los **pici al peposo** son nuestra receta histórica de familia: pici frescos ligados en la salsa del peposo, ternera cocinada durante horas en Chianti con ajo y pimienta negra. Las **pappardelle al sugo di nana** traen a la mesa el ragú de pato de la tradición toscana.',
          ],
        },
        {
          h2: 'Del obrador a la mesa',
          p: [
            'Del mismo obrador salen el pan, los bocadillos, las salsas y los postres de todos nuestros locales, que forman parte del programa AIC Alimentazione Fuori Casa. En el [To-Go](/locali/to-go/) también hay pasta fresca para llevar. Lee sobre [comer sin gluten en Florencia](/senza-glutine-firenze/) o mira la [carta](/menu/).',
          ],
        },
      ],
      placesTitle: 'Dónde comer la pasta fresca',
      faq: [
        ['¿Dónde comer pasta fresca sin gluten en Florencia?', 'En los restaurantes Boboli de Via Romana y Via Ghibellina: toda la pasta fresca es sin gluten y se hace en nuestro obrador.'],
        ['¿Qué son los pici?', 'Una pasta toscana parecida a unos espaguetis muy gruesos, hechos a mano. Los nuestros son frescos y sin gluten, y los servimos con salsa de peposo.'],
        ['¿La pasta se hace en un obrador sin gluten?', 'Sí: el pan, la pasta fresca, las salsas y los postres nacen en nuestro obrador, donde toda la producción es sin gluten.'],
      ],
    },
    de: {
      title: 'Frische glutenfreie Pasta in Florenz · Trattoria Boboli',
      desc: 'Glutenfreie Pici, Pappardelle und Mezze Maniche, täglich frisch aus unserer Manufaktur in Florenz. Pici al Peposo, Pappardelle mit Entenragout und mehr.',
      label: 'Frische Pasta, glutenfrei',
      h1: 'Frische glutenfreie Pasta, von uns gemacht.',
      lead: 'Pici, Pappardelle, Mezze Maniche: Unsere ganze Pasta entsteht in der Manufaktur, wenige Schritte von der Porta Romana, nach einem glutenfreien Rezept, das wir über Jahre entwickelt haben.',
      sections: [
        {
          h2: 'Ein eigenes Rezept',
          p: [
            'Gute frische Pasta ohne Gluten ist schwierig: Sie muss Biss behalten, elastisch bleiben und die Sauce halten. Mit viel Ausprobieren haben wir ein eigenes Rezept entwickelt, das Geschmack und Konsistenz traditioneller Pasta bringt.',
            'Jede Form ist für ihre Sauce gewählt: dicke, raue Pici für Fleischsaucen; breite, flache Pappardelle für Ragù; Mezze Maniche für Saucen, die hineinlaufen sollen.',
          ],
        },
        {
          h2: 'Was man probieren sollte',
          p: [
            '**Pici al Peposo** sind unser altes Familienrezept: frische Pici, geschwenkt in der Sauce des Peposo, Rindfleisch, das stundenlang in Chianti mit Knoblauch und schwarzem Pfeffer schmort. **Pappardelle al sugo di nana** bringen das traditionelle toskanische Entenragout auf den Tisch.',
          ],
        },
        {
          h2: 'Von der Manufaktur auf den Tisch',
          p: [
            'Aus derselben Manufaktur kommen Brot, Panini, Saucen und Desserts für alle unsere Lokale, die zum AIC-Programm Alimentazione Fuori Casa gehören. Im [To-Go](/locali/to-go/) gibt es frische Pasta auch zum Mitnehmen. Mehr zu [glutenfrei essen in Florenz](/senza-glutine-firenze/) oder zur [Speisekarte](/menu/).',
          ],
        },
      ],
      placesTitle: 'Wo es die frische Pasta gibt',
      faq: [
        ['Wo isst man in Florenz frische glutenfreie Pasta?', 'In den Boboli-Restaurants in der Via Romana und der Via Ghibellina: Die ganze frische Pasta ist glutenfrei und kommt aus unserer eigenen Manufaktur.'],
        ['Was sind Pici?', 'Eine toskanische Pasta wie sehr dicke, von Hand gerollte Spaghetti. Unsere sind frisch und glutenfrei, serviert mit Peposo-Sauce.'],
        ['Wird die Pasta in einer glutenfreien Manufaktur gemacht?', 'Ja: Brot, frische Pasta, Saucen und Desserts entstehen in unserer Manufaktur, in der alles glutenfrei produziert wird.'],
      ],
    },
    fr: {
      title: 'Pâtes fraîches sans gluten à Florence · Trattoria Boboli',
      desc: 'Pici, pappardelle et mezze maniche sans gluten, faits chaque jour dans notre atelier à Florence. Pici au peposo, pappardelle au ragoût de canard, etc.',
      label: 'Pâtes fraîches sans gluten',
      h1: 'Des pâtes fraîches sans gluten, faites par nous.',
      lead: "Pici, pappardelle, mezze maniche : toutes nos pâtes naissent dans l'atelier, à quelques pas de la Porta Romana, avec une recette sans gluten mise au point après des années d'essais.",
      sections: [
        {
          h2: 'Une recette à nous',
          p: [
            "Faire de bonnes pâtes fraîches sans gluten est difficile : elles doivent tenir la cuisson, rester élastiques et retenir la sauce. À force d'étude et de recherche, nous avons mis au point notre propre recette, pensée pour donner le goût et la texture des pâtes traditionnelles.",
            "Chaque format est choisi pour sa sauce : les pici, épais et rugueux, pour les sauces à la viande ; les pappardelle, larges et plates, pour les ragoûts ; les mezze maniche pour les sauces qui doivent entrer à l'intérieur.",
          ],
        },
        {
          h2: 'Les plats à goûter',
          p: [
            "Les **pici al peposo** sont notre recette historique de famille : des pici frais liés dans la sauce du peposo, un bœuf mijoté des heures dans le Chianti avec ail et poivre noir. Les **pappardelle al sugo di nana** apportent à table le ragoût de canard de la tradition toscane.",
          ],
        },
        {
          h2: "De l'atelier à la table",
          p: [
            "Du même atelier viennent le pain, les sandwichs, les sauces et les desserts de toutes nos adresses, qui font partie du programme AIC Alimentazione Fuori Casa. Au [To-Go](/locali/to-go/), on trouve aussi des pâtes fraîches à emporter. En savoir plus sur [manger sans gluten à Florence](/senza-glutine-firenze/) ou voir la [carte](/menu/).",
          ],
        },
      ],
      placesTitle: 'Où manger les pâtes fraîches',
      faq: [
        ['Où manger des pâtes fraîches sans gluten à Florence ?', 'Dans les restaurants Boboli de la via Romana et de la via Ghibellina : toutes les pâtes fraîches sont sans gluten et faites dans notre atelier.'],
        ['Que sont les pici ?', 'Des pâtes toscanes qui ressemblent à de très gros spaghettis roulés à la main. Les nôtres sont fraîches et sans gluten, servies avec la sauce du peposo.'],
        ['Les pâtes sont-elles faites dans un atelier sans gluten ?', "Oui : le pain, les pâtes fraîches, les sauces et les desserts naissent dans notre atelier, où toute la production est sans gluten."],
      ],
    },
  },
};

const panini: Guide = {
  path: '/panini-senza-glutine-firenze/',
  image: 'locali/to-go',
  imageAlt: {
    it: 'Il banco di Trattoria Boboli To-Go in Via Romana, a Firenze, con i panini senza glutine da asporto',
    en: 'The counter at Trattoria Boboli To-Go on Via Romana, Florence, with gluten-free sandwiches to take away',
    es: 'El mostrador de Trattoria Boboli To-Go en Via Romana, Florencia, con bocadillos sin gluten para llevar',
    de: 'Die Theke der Trattoria Boboli To-Go in der Via Romana, Florenz, mit glutenfreien Panini zum Mitnehmen',
    fr: 'Le comptoir de la Trattoria Boboli To-Go, via Romana à Florence, avec ses sandwichs sans gluten à emporter',
  },
  locali: ['to-go'],
  landmarks: ['pitti', 'spirito', 'ponte'],
  tr: {
    it: {
      title: 'Panini senza glutine da asporto a Firenze · Boboli To-Go',
      desc: 'Panini e pinse senza glutine da asporto a Firenze, con il pane del nostro laboratorio: Boboli To-Go, in Via Romana, vicino a Palazzo Pitti. Anche a domicilio.',
      label: 'Panini senza glutine',
      h1: 'Panini senza glutine da portare in giro per Firenze.',
      lead: 'Un panino vero, con il pane fatto da noi, da mangiare camminando tra Palazzo Pitti e Santo Spirito. Al To-Go è tutto senza glutine e tutto da asporto.',
      sections: [
        {
          h2: 'Il pane fa il panino',
          p: [
            'Il problema del panino senza glutine è quasi sempre il pane: secco, che si sbriciola, uguale ovunque. Il nostro lo facciamo ogni giorno nel laboratorio, a pochi passi da Porta Romana, ed è lo stesso che arriva in tavola nei ristoranti.',
            'Al banco trovi panini e pinse, e anche pasta fresca e dolci da portare via.',
          ],
        },
        {
          h2: 'La pausa giusta tra un museo e l\'altro',
          p: [
            "Il To-Go è in Via Romana, la strada che parte da Piazza Pitti e costeggia il Giardino di Boboli. È la sosta veloce prima del museo o del giardino, o il pranzo da mangiare su una panchina di Piazza Santo Spirito. Se invece vuoi sederti, a pochi numeri c'è la [trattoria](/locali/trattoria-1978/).",
          ],
        },
        {
          h2: 'Anche a casa o in albergo',
          p: [
            'I panini si possono ordinare anche a domicilio, dal pulsante «Ordina» qui sotto. Tutti i nostri locali fanno parte del programma AIC Alimentazione Fuori Casa: scopri [come mangiamo senza glutine a Firenze](/senza-glutine-firenze/) o guarda il [menu del To-Go](/menu/#to-go).',
          ],
        },
      ],
      placesTitle: 'Dove trovarli',
      faq: [
        ['Dove mangiare un panino senza glutine a Firenze?', 'Da Trattoria Boboli To-Go Gluten Free, in Via Romana 52, in Oltrarno: panini e pinse con il pane del nostro laboratorio, da asporto.'],
        ['C\'è street food senza glutine a Firenze?', 'Sì: al To-Go tutto è senza glutine e pensato per essere mangiato in giro, dai panini alle pinse ai dolci.'],
        ['Si può ordinare a domicilio?', 'Sì, dalla pagina del locale trovi il pulsante per ordinare a domicilio.'],
      ],
    },
    en: {
      title: 'Gluten-free sandwiches to go in Florence · Boboli To-Go',
      desc: 'Gluten-free sandwiches and pinsa to take away in Florence, made with bread from our own workshop: Boboli To-Go, Via Romana, near the Pitti Palace.',
      label: 'Gluten-free sandwiches',
      h1: 'Gluten-free sandwiches to carry around Florence.',
      lead: 'A proper sandwich, on bread we bake ourselves, to eat while walking between the Pitti Palace and Santo Spirito. At To-Go everything is gluten free and everything is to take away.',
      sections: [
        {
          h2: 'The bread makes the sandwich',
          p: [
            'The problem with a gluten-free sandwich is almost always the bread: dry, crumbly, the same everywhere. We bake ours every day in our workshop, a few steps from Porta Romana, and it is the same bread served in our restaurants.',
            'At the counter you will find sandwiches and pinsa, plus fresh pasta and desserts to take away.',
          ],
        },
        {
          h2: 'The right break between museums',
          p: [
            'To-Go is on Via Romana, the street that starts at Piazza Pitti and runs along the Boboli Gardens. It is the quick stop before the museum or the gardens, or lunch on a bench in Piazza Santo Spirito. If you would rather sit down, the [trattoria](/locali/trattoria-1978/) is a few doors away.',
          ],
        },
        {
          h2: 'Delivered to your home or hotel',
          p: [
            'You can also order delivery, using the "Order" button below. All our places are part of the Italian Coeliac Association eating-out programme: read about [eating gluten free in Florence](/senza-glutine-firenze/) or see the [To-Go menu](/menu/#to-go).',
          ],
        },
      ],
      placesTitle: 'Where to find them',
      faq: [
        ['Where can I get a gluten-free sandwich in Florence?', 'At Trattoria Boboli To-Go Gluten Free, Via Romana 52, in the Oltrarno: sandwiches and pinsa on bread from our own workshop, to take away.'],
        ['Is there gluten-free street food in Florence?', 'Yes: at To-Go everything is gluten free and made to be eaten on the go, from sandwiches to pinsa to desserts.'],
        ['Can I order delivery?', 'Yes, the restaurant page has a button to order delivery.'],
      ],
    },
    es: {
      title: 'Bocadillos sin gluten para llevar en Florencia · Boboli',
      desc: 'Bocadillos y pinsas sin gluten para llevar en Florencia, con el pan de nuestro obrador: Boboli To-Go, en Via Romana, cerca del Palacio Pitti.',
      label: 'Bocadillos sin gluten',
      h1: 'Bocadillos sin gluten para recorrer Florencia.',
      lead: 'Un bocadillo de verdad, con pan hecho por nosotros, para comer paseando entre el Palacio Pitti y Santo Spirito. En el To-Go todo es sin gluten y todo es para llevar.',
      sections: [
        {
          h2: 'El pan hace el bocadillo',
          p: [
            'El problema del bocadillo sin gluten casi siempre es el pan: seco, que se desmiga, igual en todas partes. El nuestro lo hacemos cada día en el obrador, a pocos pasos de Porta Romana, y es el mismo que llega a la mesa en los restaurantes.',
            'En el mostrador hay bocadillos y pinsas, y también pasta fresca y postres para llevar.',
          ],
        },
        {
          h2: 'La pausa justa entre museo y museo',
          p: [
            'El To-Go está en Via Romana, la calle que sale de la Piazza Pitti y bordea el Jardín de Bóboli. Es la parada rápida antes del museo o del jardín, o la comida en un banco de la Piazza Santo Spirito. Si prefieres sentarte, a pocos números está la [trattoria](/locali/trattoria-1978/).',
          ],
        },
        {
          h2: 'También a casa o al hotel',
          p: [
            'También se puede pedir a domicilio, con el botón «Pedir» de aquí abajo. Todos nuestros locales forman parte del programa AIC Alimentazione Fuori Casa: lee sobre [comer sin gluten en Florencia](/senza-glutine-firenze/) o mira la [carta del To-Go](/menu/#to-go).',
          ],
        },
      ],
      placesTitle: 'Dónde encontrarlos',
      faq: [
        ['¿Dónde comer un bocadillo sin gluten en Florencia?', 'En Trattoria Boboli To-Go Gluten Free, Via Romana 52, en el Oltrarno: bocadillos y pinsas con el pan de nuestro obrador, para llevar.'],
        ['¿Hay comida callejera sin gluten en Florencia?', 'Sí: en el To-Go todo es sin gluten y está pensado para comer por la calle, de los bocadillos a las pinsas y los postres.'],
        ['¿Se puede pedir a domicilio?', 'Sí, en la página del local está el botón para pedir a domicilio.'],
      ],
    },
    de: {
      title: 'Glutenfreie Panini to go in Florenz · Boboli To-Go',
      desc: 'Glutenfreie Panini und Pinse zum Mitnehmen in Florenz, mit Brot aus unserer Manufaktur: Boboli To-Go in der Via Romana, nahe dem Palazzo Pitti.',
      label: 'Glutenfreie Panini',
      h1: 'Glutenfreie Panini für unterwegs in Florenz.',
      lead: 'Ein richtiges Panino, mit selbst gebackenem Brot, zum Essen beim Spazieren zwischen Palazzo Pitti und Santo Spirito. Im To-Go ist alles glutenfrei und alles zum Mitnehmen.',
      sections: [
        {
          h2: 'Das Brot macht das Panino',
          p: [
            'Das Problem beim glutenfreien Panino ist fast immer das Brot: trocken, bröselig, überall gleich. Unseres backen wir jeden Tag in der Manufaktur, wenige Schritte von der Porta Romana, und es ist dasselbe, das in den Restaurants auf den Tisch kommt.',
            'An der Theke gibt es Panini und Pinse, dazu frische Pasta und Desserts zum Mitnehmen.',
          ],
        },
        {
          h2: 'Die richtige Pause zwischen zwei Museen',
          p: [
            'Das To-Go liegt in der Via Romana, die an der Piazza Pitti beginnt und am Boboli-Garten entlangführt. Es ist der schnelle Halt vor dem Museum oder dem Garten, oder das Mittagessen auf einer Bank an der Piazza Santo Spirito. Wer lieber sitzt, findet ein paar Hausnummern weiter die [Trattoria](/locali/trattoria-1978/).',
          ],
        },
        {
          h2: 'Auch nach Hause oder ins Hotel',
          p: [
            'Man kann auch liefern lassen, über den Button „Bestellen“ weiter unten. Alle unsere Lokale gehören zum AIC-Programm Alimentazione Fuori Casa: mehr zu [glutenfrei essen in Florenz](/senza-glutine-firenze/) oder zur [To-Go-Karte](/menu/#to-go).',
          ],
        },
      ],
      placesTitle: 'Wo es sie gibt',
      faq: [
        ['Wo bekommt man in Florenz ein glutenfreies Panino?', 'Bei Trattoria Boboli To-Go Gluten Free, Via Romana 52, im Oltrarno: Panini und Pinse mit Brot aus unserer Manufaktur, zum Mitnehmen.'],
        ['Gibt es glutenfreies Street Food in Florenz?', 'Ja: Im To-Go ist alles glutenfrei und für unterwegs gedacht, von Panini über Pinse bis zu Desserts.'],
        ['Kann man liefern lassen?', 'Ja, auf der Seite des Lokals gibt es den Button für die Lieferung.'],
      ],
    },
    fr: {
      title: 'Sandwichs sans gluten à emporter à Florence · Boboli',
      desc: 'Sandwichs et pinse sans gluten à emporter à Florence, avec le pain de notre atelier : Boboli To-Go, via Romana, près du palais Pitti.',
      label: 'Sandwichs sans gluten',
      h1: 'Des sandwichs sans gluten à emporter dans Florence.',
      lead: 'Un vrai sandwich, avec un pain que nous faisons nous-mêmes, à manger en marchant entre le palais Pitti et Santo Spirito. Au To-Go, tout est sans gluten et tout est à emporter.',
      sections: [
        {
          h2: "C'est le pain qui fait le sandwich",
          p: [
            "Le problème du sandwich sans gluten, c'est presque toujours le pain : sec, friable, partout le même. Le nôtre est fait chaque jour dans l'atelier, à quelques pas de la Porta Romana, et c'est le même qui arrive à table dans les restaurants.",
            'Au comptoir, vous trouverez des sandwichs et des pinse, ainsi que des pâtes fraîches et des desserts à emporter.',
          ],
        },
        {
          h2: 'La bonne pause entre deux musées',
          p: [
            "Le To-Go se trouve via Romana, la rue qui part de la piazza Pitti et longe le jardin de Boboli. C'est l'arrêt rapide avant le musée ou le jardin, ou le déjeuner sur un banc de la piazza Santo Spirito. Si vous préférez vous asseoir, la [trattoria](/locali/trattoria-1978/) est à quelques numéros.",
          ],
        },
        {
          h2: "Aussi chez vous ou à l'hôtel",
          p: [
            "La livraison est possible, avec le bouton « Commander » ci-dessous. Toutes nos adresses font partie du programme AIC Alimentazione Fuori Casa : en savoir plus sur [manger sans gluten à Florence](/senza-glutine-firenze/) ou voir la [carte du To-Go](/menu/#to-go).",
          ],
        },
      ],
      placesTitle: 'Où les trouver',
      faq: [
        ['Où manger un sandwich sans gluten à Florence ?', "À la Trattoria Boboli To-Go Gluten Free, via Romana 52, dans l'Oltrarno : sandwichs et pinse au pain de notre atelier, à emporter."],
        ['Y a-t-il de la street food sans gluten à Florence ?', 'Oui : au To-Go, tout est sans gluten et pensé pour être mangé en chemin, des sandwichs aux pinse et aux desserts.'],
        ['Peut-on se faire livrer ?', 'Oui, la page du restaurant propose un bouton pour commander en livraison.'],
      ],
    },
  },
};

const vino: Guide = {
  path: '/vino-degustazioni-firenze/',
  image: 'locali/la-cantina',
  imageAlt: {
    it: 'La sala di Trattoria Boboli La Cantina, in Via Romana a Firenze, tra bottiglie di vino toscano',
    en: 'The room at Trattoria Boboli La Cantina, on Via Romana in Florence, among bottles of Tuscan wine',
    es: 'La sala de Trattoria Boboli La Cantina, en Via Romana, Florencia, entre botellas de vino toscano',
    de: 'Der Raum der Trattoria Boboli La Cantina in der Via Romana, Florenz, zwischen toskanischen Weinflaschen',
    fr: 'La salle de la Trattoria Boboli La Cantina, via Romana à Florence, parmi les bouteilles de vin toscan',
  },
  locali: ['la-cantina', 'trattoria-1978', 'al-bargello'],
  landmarks: [],
  tr: {
    it: {
      title: 'Vino e degustazioni a Firenze, in Oltrarno · Boboli Cantina',
      desc: 'Vini toscani, abbinamenti e degustazioni in Oltrarno, a Firenze, con una cucina tutta senza glutine: Trattoria Boboli La Cantina, in Via Romana.',
      label: 'Vino e degustazioni',
      h1: 'Non solo cosa mangi. Anche cosa bevi.',
      lead: 'Alla Cantina si parte dal bicchiere: una selezione di vini toscani, gli abbinamenti con i piatti della nostra cucina e le degustazioni, a pochi minuti da Palazzo Pitti.',
      sections: [
        {
          h2: 'Una cantina in Via Romana',
          p: [
            'La Toscana si conosce anche dal vino: il Chianti, i rossi di carattere, i bianchi della costa. Alla [Cantina](/locali/la-cantina/) trovi una selezione scelta da noi e qualcuno che ti aiuta a decidere, senza fretta.',
            'È il posto per un calice prima di cena, per una degustazione o per una cena costruita intorno a una bottiglia.',
          ],
        },
        {
          h2: 'Il vino giusto per ogni piatto',
          p: [
            'Un rosso toscano strutturato accompagna la [bistecca alla brace](/bistecca-fiorentina-senza-glutine/) e il peposo, che cuoce per ore proprio nel Chianti. Con la [pasta fresca](/pasta-fresca-senza-glutine/) e i taglieri si può restare su qualcosa di più giovane. Chiedici un consiglio: gli abbinamenti sono il nostro mestiere.',
          ],
        },
        {
          h2: 'Si beve bene, si mangia senza glutine',
          p: [
            'Anche alla Cantina tutta la cucina è senza glutine e fa parte del programma AIC Alimentazione Fuori Casa: taglieri, crostini, primi e secondi sono quelli degli altri locali Boboli. Scopri [come mangiamo senza glutine a Firenze](/senza-glutine-firenze/) o guarda il [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'Dove bere e mangiare',
      faq: [
        ['Dove fare una degustazione di vini a Firenze?', 'In Oltrarno, da Trattoria Boboli La Cantina Gluten Free, in Via Romana 60/R: vini toscani, abbinamenti e degustazioni.'],
        ['Si può mangiare alla Cantina?', 'Sì. Si mangia la cucina toscana dei locali Boboli, tutta senza glutine, pensata per accompagnare il vino.'],
        ['Serve prenotare?', 'Per la cena e per le degustazioni è meglio: si prenota online dalla pagina del locale.'],
      ],
    },
    en: {
      title: 'Wine and tastings in Florence, Oltrarno · Boboli Cantina',
      desc: 'Tuscan wines, pairings and tastings in the Oltrarno, Florence, with a fully gluten-free kitchen: Trattoria Boboli La Cantina, on Via Romana.',
      label: 'Wine & tastings',
      h1: "Not just what you eat. Also what you drink.",
      lead: 'At La Cantina you start from the glass: a selection of Tuscan wines, pairings with dishes from our kitchen and tastings, a few minutes from the Pitti Palace.',
      sections: [
        {
          h2: 'A wine cellar on Via Romana',
          p: [
            'You get to know Tuscany through its wine too: Chianti, reds with character, whites from the coast. At [La Cantina](/locali/la-cantina/) you will find a selection chosen by us and someone to help you decide, with no rush.',
            'It is the place for a glass before dinner, for a tasting, or for a dinner built around a bottle.',
          ],
        },
        {
          h2: 'The right wine for each dish',
          p: [
            'A structured Tuscan red goes with [grilled steak](/bistecca-fiorentina-senza-glutine/) and with peposo, which cooks for hours in Chianti itself. With [fresh pasta](/pasta-fresca-senza-glutine/) and boards you can stay on something younger. Ask us: pairing is what we do.',
          ],
        },
        {
          h2: 'Drink well, eat gluten free',
          p: [
            'At La Cantina too the whole kitchen is gluten free and part of the Italian Coeliac Association eating-out programme: boards, crostini, pasta and mains are the same as in the other Boboli restaurants. Read about [eating gluten free in Florence](/senza-glutine-firenze/) or see the [menu](/menu/).',
          ],
        },
      ],
      placesTitle: 'Where to drink and eat',
      faq: [
        ['Where can I do a wine tasting in Florence?', 'In the Oltrarno, at Trattoria Boboli La Cantina Gluten Free, Via Romana 60/R: Tuscan wines, pairings and tastings.'],
        ['Can I eat at La Cantina?', 'Yes. You eat the Tuscan cooking of the Boboli restaurants, all gluten free, designed to go with the wine.'],
        ['Do I need to book?', 'For dinner and for tastings it is a good idea: you can book online from the restaurant page.'],
      ],
    },
    es: {
      title: 'Vino y catas en Florencia, Oltrarno · Boboli Cantina',
      desc: 'Vinos toscanos, maridajes y catas en el Oltrarno, Florencia, con una cocina toda sin gluten: Trattoria Boboli La Cantina, en Via Romana.',
      label: 'Vino y catas',
      h1: 'No solo lo que comes. También lo que bebes.',
      lead: 'En La Cantina se empieza por la copa: una selección de vinos toscanos, maridajes con los platos de nuestra cocina y catas, a pocos minutos del Palacio Pitti.',
      sections: [
        {
          h2: 'Una bodega en Via Romana',
          p: [
            'La Toscana también se conoce por el vino: el Chianti, los tintos con carácter, los blancos de la costa. En [La Cantina](/locali/la-cantina/) hay una selección elegida por nosotros y alguien que te ayuda a decidir, sin prisa.',
            'Es el sitio para una copa antes de cenar, para una cata o para una cena construida alrededor de una botella.',
          ],
        },
        {
          h2: 'El vino justo para cada plato',
          p: [
            'Un tinto toscano con cuerpo acompaña al [bistec a la brasa](/bistecca-fiorentina-senza-glutine/) y al peposo, que se cocina durante horas precisamente en Chianti. Con la [pasta fresca](/pasta-fresca-senza-glutine/) y las tablas puedes quedarte con algo más joven. Pídenos consejo: maridar es nuestro oficio.',
          ],
        },
        {
          h2: 'Se bebe bien, se come sin gluten',
          p: [
            'También en La Cantina toda la cocina es sin gluten y forma parte del programa AIC Alimentazione Fuori Casa: tablas, crostini, primeros y segundos son los de los demás locales Boboli. Lee sobre [comer sin gluten en Florencia](/senza-glutine-firenze/) o mira la [carta](/menu/).',
          ],
        },
      ],
      placesTitle: 'Dónde beber y comer',
      faq: [
        ['¿Dónde hacer una cata de vinos en Florencia?', 'En el Oltrarno, en Trattoria Boboli La Cantina Gluten Free, Via Romana 60/R: vinos toscanos, maridajes y catas.'],
        ['¿Se puede comer en La Cantina?', 'Sí. Se come la cocina toscana de los locales Boboli, toda sin gluten, pensada para acompañar el vino.'],
        ['¿Hace falta reservar?', 'Para cenar y para las catas es mejor: se reserva online desde la página del local.'],
      ],
    },
    de: {
      title: 'Wein & Verkostung in Florenz, Oltrarno · Boboli Cantina',
      desc: 'Toskanische Weine, Weinbegleitung und Verkostungen im Oltrarno, Florenz, mit komplett glutenfreier Küche: Trattoria Boboli La Cantina in der Via Romana.',
      label: 'Wein & Verkostungen',
      h1: 'Nicht nur, was du isst. Auch, was du trinkst.',
      lead: 'In der Cantina fängt man beim Glas an: eine Auswahl toskanischer Weine, die passende Begleitung zu unseren Gerichten und Verkostungen, wenige Minuten vom Palazzo Pitti.',
      sections: [
        {
          h2: 'Eine Weinstube in der Via Romana',
          p: [
            'Die Toskana lernt man auch über den Wein kennen: Chianti, charaktervolle Rote, Weiße von der Küste. In der [Cantina](/locali/la-cantina/) gibt es eine von uns getroffene Auswahl und jemanden, der dir ohne Eile beim Aussuchen hilft.',
            'Sie ist der Ort für ein Glas vor dem Abendessen, für eine Verkostung oder für ein Essen, das sich um eine Flasche dreht.',
          ],
        },
        {
          h2: 'Der passende Wein zu jedem Gericht',
          p: [
            'Ein kräftiger toskanischer Rotwein passt zum [Steak vom Grill](/bistecca-fiorentina-senza-glutine/) und zum Peposo, das stundenlang in Chianti schmort. Zu [frischer Pasta](/pasta-fresca-senza-glutine/) und Brettern darf es etwas Jüngeres sein. Frag uns: Die Weinbegleitung ist unser Handwerk.',
          ],
        },
        {
          h2: 'Gut trinken, glutenfrei essen',
          p: [
            'Auch in der Cantina ist die ganze Küche glutenfrei und Teil des AIC-Programms Alimentazione Fuori Casa: Bretter, Crostini, Pasta und Hauptgerichte sind dieselben wie in den anderen Boboli-Lokalen. Mehr zu [glutenfrei essen in Florenz](/senza-glutine-firenze/) oder zur [Speisekarte](/menu/).',
          ],
        },
      ],
      placesTitle: 'Wo man trinkt und isst',
      faq: [
        ['Wo kann man in Florenz Wein verkosten?', 'Im Oltrarno, in der Trattoria Boboli La Cantina Gluten Free, Via Romana 60/R: toskanische Weine, Weinbegleitung und Verkostungen.'],
        ['Kann man in der Cantina essen?', 'Ja. Es gibt die toskanische Küche der Boboli-Lokale, komplett glutenfrei und passend zum Wein.'],
        ['Muss man reservieren?', 'Für das Abendessen und für Verkostungen ist es besser: Reservieren kannst du online auf der Seite des Lokals.'],
      ],
    },
    fr: {
      title: 'Vin et dégustation à Florence, Oltrarno · Boboli Cantina',
      desc: "Vins toscans, accords et dégustations dans l'Oltrarno, à Florence, avec une cuisine entièrement sans gluten : Trattoria Boboli La Cantina, via Romana.",
      label: 'Vin et dégustations',
      h1: 'Pas seulement ce que vous mangez. Aussi ce que vous buvez.',
      lead: 'À La Cantina, on part du verre : une sélection de vins toscans, des accords avec les plats de notre cuisine et des dégustations, à quelques minutes du palais Pitti.',
      sections: [
        {
          h2: 'Une cave via Romana',
          p: [
            "La Toscane se découvre aussi par le vin : le Chianti, les rouges de caractère, les blancs de la côte. À [La Cantina](/locali/la-cantina/), vous trouverez une sélection choisie par nos soins et quelqu'un pour vous aider à décider, sans se presser.",
            "C'est l'endroit pour un verre avant le dîner, pour une dégustation ou pour un dîner construit autour d'une bouteille.",
          ],
        },
        {
          h2: 'Le bon vin pour chaque plat',
          p: [
            "Un rouge toscan charpenté accompagne la [bistecca à la braise](/bistecca-fiorentina-senza-glutine/) et le peposo, qui mijote des heures justement dans le Chianti. Avec les [pâtes fraîches](/pasta-fresca-senza-glutine/) et les planches, on peut rester sur quelque chose de plus jeune. Demandez-nous conseil : les accords, c'est notre métier.",
          ],
        },
        {
          h2: 'On boit bien, on mange sans gluten',
          p: [
            'À La Cantina aussi, toute la cuisine est sans gluten et fait partie du programme AIC Alimentazione Fuori Casa : planches, crostini, pâtes et plats sont ceux des autres adresses Boboli. En savoir plus sur [manger sans gluten à Florence](/senza-glutine-firenze/) ou voir la [carte](/menu/).',
          ],
        },
      ],
      placesTitle: 'Où boire et manger',
      faq: [
        ['Où faire une dégustation de vins à Florence ?', "Dans l'Oltrarno, à la Trattoria Boboli La Cantina Gluten Free, via Romana 60/R : vins toscans, accords et dégustations."],
        ['Peut-on manger à La Cantina ?', 'Oui. On y mange la cuisine toscane des adresses Boboli, entièrement sans gluten, pensée pour accompagner le vin.'],
        ['Faut-il réserver ?', "Pour le dîner et les dégustations, c'est préférable : la réservation se fait en ligne depuis la page du restaurant."],
      ],
    },
  },
};

export const TEMI: Guide[] = [bistecca, ribollita, pasta, panini, vino];
