import type { HealthNodeData } from './types';

export const KOSTHOLD_NODES: HealthNodeData[] = [
  {
    id: 'kost-1-energibalanse',
    stepNumber: 1,
    title: 'Energibalanse & hvileforbrenning',
    shortLabel: 'Energibalanse',
    subtitleTag: 'Energi inn vs. energi ut i løpet av døgnet',
    eraLabel: 'Energi',
    primaryBadge: '1 kcal ≈ 4,18 kJ',
    secondaryBadge: 'BMR = 60–70 % av forbruket',
    traceBadge: 'KM1: Kosthold',
    competenceGoals: ['KM1'],
    summaryTitle: 'Hva bruker kroppen energi på når du ligger helt stille?',
    whatHappens:
      'Kroppen trenger energi døgnet rundt. Mesteparten (60–70 %) går faktisk til hvileforbrenningen (BMR): å holde hjertet i gang, puste, drive hjernen, opprettholde 37 °C og fornye celler. Resten går til fysisk aktivitet og litt til å fordøye maten. Når energi inn gjennom mat og drikke tilsvarer energi ut, er kroppen i energibalanse.',
    classroomTest:
      'En aktiv ungdom trenger ofte 9 000–12 000 kJ (ca. 2 200–2 900 kcal) per dag, men behovet varierer stort med kroppsstørrelse, vekst og aktivitetsnivå.',
    keyTraits: [
      {
        icon: 'scale',
        title: 'BMR + Fysisk aktivitet',
        description:
          'Muskelmasse øker hvileforbrenningen noe, men hverdagsbevegelse og trening utgjør den store fleksible delen.',
      },
      {
        icon: 'zap',
        title: 'Energitetthet vs. næringstetthet',
        description:
          'Brus og godteri har høy energitetthet og lav næringstetthet («tomme kalorier»), mens grønnsaker, fisk og grovt brød gir mye næring per kalori.',
      },
    ],
    terms: ['Energibalanse', 'BMR (Hvileforbrenning)', 'Makronæringsstoffer'],
    discussionQuestion:
      'Hvorfor er det uheldig å bare telle kalorier uten å se på hvilke næringsstoffer maten inneholder?',
    accentColor: '#22C55E',
  },
  {
    id: 'kost-2-tallerken',
    stepNumber: 2,
    title: 'Tallerkenmodellen i praksis',
    shortLabel: 'Tallerkenmodell',
    subtitleTag: 'En enkel visuell huskeregel for balanserte måltider',
    eraLabel: 'Måltidsbygging',
    primaryBadge: '1/3–1/2 Grønnsaker',
    secondaryBadge: 'Grove karbohydrater + Protein',
    competenceGoals: ['KM1'],
    summaryTitle: 'Slik komponerer du et næringsrikt måltid',
    whatHappens:
      'Du trenger ikke kjøkkenvekt eller avanserte apper for å spise sunt. Tallerkenmodellen deler middagstallerkenen i tre: Én stor del (1/3 til 1/2) med grønnsaker for vitaminer, mineraler, antioksidanter og fiber; én del med grove karbohydrater (potet, fullkornspasta, naturris, grovt brød) for jevn energi; og én del med god proteinkilde (fisk, bønner, linser, kylling, egg eller magert kjøtt).',
    classroomTest:
      'Tilpass etter aktivitet: Skal du løpe en lang kamp eller trene hardt samme dag, kan andelen karbohydrater være litt større; trener du mindre, kan grønnsaksdelen være halvparten.',
    keyTraits: [
      {
        icon: 'utensils',
        title: 'Grønnsaksdelen (fargerik)',
        description:
          'Ulike farger på grønnsaker betyr ulike vitaminer og plantestoffer.',
      },
      {
        icon: 'layers',
        title: 'Grovt og variert',
        description:
          'Fullkorn gir mer fiber, jern og B-vitaminer enn siktet hvitt mel.',
      },
    ],
    terms: ['Tallerkenmodellen', 'Kostfiber', 'Makronæringsstoffer'],
    discussionQuestion:
      'Hvordan kan en vanlig norsk taco eller pasta-rett enkelt gjøres mer balansert med tallerkenmodellen?',
    accentColor: '#10B981',
  },
  {
    id: 'kost-3-kostrad',
    stepNumber: 3,
    title: 'Offentlige kostråd (Helsedirektoratet)',
    shortLabel: 'Kostråd',
    subtitleTag: 'Hva sier forskningen om helsefremmende kosthold?',
    eraLabel: 'Nasjonale råd',
    primaryBadge: '5–8 om dagen',
    secondaryBadge: 'Fisk, fullkorn & planteoljer',
    traceBadge: 'KM1 + KM2: Kostråd',
    competenceGoals: ['KM1', 'KM2'],
    summaryTitle: 'Hovedlinjene i de nordiske og norske kostrådene',
    whatHappens:
      'Helsedirektoratets kostråd bygger på omfattende forskning (NNR – Nordiske ernæringsanbefalinger) på hvordan mat påvirker risikoen for hjerte- og karsykdom, diabetes type 2 og kreft. Hovedbudskapet er enkelt: Spis variert, mest mat fra planteriket (grønnsaker, frukt, bær, fullkorn, nøtter, belgfrukter), spis fisk 2–3 ganger i uken, velg magre meieriprodukter, begrens rødt og bearbeidet kjøtt, og drikk vann som tørstedrikk.',
    classroomTest:
      'Nøkkelhullet i butikken: Matvarer med Nøkkelhullet inneholder mindre mettet fett, sukker og salt, og mer fiber/fullkorn enn tilsvarende produkter i samme kategori.',
    keyTraits: [
      {
        icon: 'apple',
        title: 'Mer frukt, bær, grønt og fullkorn',
        description:
          'Anbefalingen er minst 500–800 g frukt, bær og grønnsaker daglig, og minst 90 g fullkorn.',
      },
      {
        icon: 'alert',
        title: 'Begrens ultraprosessert snacks, sukker og salt',
        description:
          'Mye tilsatt sukker og salt øker risiko for overvekt, hull i tennene og høyt blodtrykk.',
      },
    ],
    terms: ['Umettet fett', 'Mettet fett', 'Kostfiber'],
    discussionQuestion:
      'Hvorfor legger kostrådene så stor vekt på «helheten over tid» fremfor å forby enkeltmatvarer?',
    accentColor: '#38BDF8',
  },
  {
    id: 'kost-4-variasjon',
    stepNumber: 4,
    title: 'Variert kosthold & mangelsykdommer',
    shortLabel: 'Variasjon',
    subtitleTag: 'Hvorfor ingen enkelt matvare inneholder alt du trenger',
    eraLabel: 'Helseperspektiv',
    primaryBadge: 'Ingen «supermat» alene',
    secondaryBadge: 'Forebygger mangler',
    competenceGoals: ['KM1'],
    summaryTitle: 'Samspill mellom ulike matvaregrupper',
    whatHappens:
      'Ingen enkelt matvare – ikke engang avokado, laks eller blåbær – inneholder alle næringsstoffene kroppen trenger i riktige mengder. Hvis du spiser ensidig, kan du få mangler over tid: for lite jern gir anemi (trøtthet), for lite vitamin D og kalsium svekker skjelettet, og for lite jod påvirker stoffskiftet. Et variert kosthold fordeler også eventuelle uønskede stoffer (som tungmetaller eller sprøytemiddelrester) slik at ingen blir skadelige.',
    classroomTest:
      'Tenk på et puslespill: Meieriprodukter/beriket plantedrikk gir kalsium og jod; fet fisk gir vitamin D og omega-3; frukt/grønt gir vitamin C og fiber; korn/belgfrukter gir B-vitaminer og jern.',
    keyTraits: [
      {
        icon: 'sparkles',
        title: 'Synergi mellom næringsstoffer',
        description:
          'Vitamin C hjelper jernopptaket, vitamin D hjelper kalsiumopptaket, og fett hjelper opptak av vitamin A.',
      },
      {
        icon: 'shield',
        title: 'Tryggere mattrygghet',
        description:
          'Variasjon reduserer risikoen for å få i seg for mye av ett enkelt fremmedstoff.',
      },
    ],
    terms: ['Mikronæringsstoffer', 'Makronæringsstoffer'],
    discussionQuestion:
      'Hva må man være ekstra oppmerksom på hvis man velger et helt vegansk eller melkefritt kosthold?',
    accentColor: '#F59E0B',
  },
  {
    id: 'kost-5-baerekraft',
    stepNumber: 5,
    title: 'Bærekraft & matens klimaavtrykk',
    shortLabel: 'Bærekraft',
    subtitleTag: 'Hva er sammenhengen mellom et sunt kosthold og kloden?',
    eraLabel: 'Bærekraftsperspektiv',
    primaryBadge: 'Mat = ~25–30 % av globale utslipp',
    secondaryBadge: 'Lavere avtrykk med mer plantekost',
    traceBadge: 'KM1: Bærekraft',
    competenceGoals: ['KM1'],
    summaryTitle: 'Klimaavtrykk, arealbruk, vann og matsvinn',
    whatHappens:
      'Kompetansemålet ber oss diskutere hvorfor et variert kosthold er viktig i både et helse- og bærekraftsperspektiv. Matproduksjon står for rundt en fjerdedel av verdens klimagassutslipp og bruker enorme landarealer. Drøvtyggere som storfe og sau slipper ut metan og krever mye fôr og areal per gram protein, mens belgvekster, korn, grønnsaker og bærekraftig fisk har langt lavere klimaavtrykk. Heldigvis er maten som er best for helsa ofte også best for klimaet!',
    classroomTest:
      'Sammenlign klimaavtrykk per kg matvare: Storfekjøtt (~25–35 kg CO₂e/kg) vs. kylling/laks (~3–5 kg CO₂e/kg) vs. linser/bønner/potet (~0,5–1,5 kg CO₂e/kg).',
    keyTraits: [
      {
        icon: 'globe',
        title: 'Arealbruk & biologisk mangfold',
        description:
          'Mindre behov for dyrefôr betyr mindre avskoging og mer plass til natur.',
      },
      {
        icon: 'leaf',
        title: 'Kutt matsvinn!',
        description:
          'Rundt 1/3 av all mat i verden kastes. Å planlegge innkjøp og spise opp rester er det enkleste klimatiltaket.',
      },
    ],
    terms: ['Klimaavtrykk (CO₂e)', 'Tallerkenmodellen'],
    discussionQuestion:
      'Hvordan kan norsk landbruk (gress på utmark der det ikke kan dyrkes korn) spille inn i diskusjonen om bærekraftig kjøttproduksjon?',
    accentColor: '#10B981',
  },
  {
    id: 'kost-6-praksis',
    stepNumber: 6,
    title: 'Hverdagsvalg & matglede',
    shortLabel: 'Hverdagsvalg',
    subtitleTag: 'Små grep som varer i et travelt ungdomsliv',
    eraLabel: 'Praksis',
    primaryBadge: 'Regelmessige måltider',
    secondaryBadge: 'Sosialt & bærekraftig',
    competenceGoals: ['KM1', 'KM2'],
    summaryTitle: 'Fra teori til matpakke og middagsbord',
    whatHappens:
      'Et godt kosthold handler ikke om å være perfekt, men om gode vaner 80–90 % av tiden. Å spise frokost eller ha med en skikkelig matpakke gir jevnt blodsukker, bedre konsentrasjon i timene og mindre søtsug på ettermiddagen. Mat handler også om kultur, fellesskap og glede – det skal være plass til både lørdagskos og bursdagskake uten dårlig samvittighet.',
    classroomTest:
      'Lag en «10-minutters studentvennlig middag»-idé som oppfyller både tallerkenmodellen, studentbudsjett og lavt klimaavtrykk (f.eks. linsegryte, fiskewrap eller egg/grønnsakswok).',
    keyTraits: [
      {
        icon: 'smile',
        title: 'Psykisk helse og matglede',
        description:
          'Mat er mer enn bare kjemi – måltider sammen med andre styrker trivsel og mental helse.',
      },
      {
        icon: 'droplets',
        title: 'Vann som standarddrikke',
        description:
          'Å bytte ut daglig sukkerbrus/energidrikk med vann er ett av de enkleste grepene for både tenner, lommebok og helse.',
      },
    ],
    terms: ['Energibalanse', 'Tallerkenmodellen'],
    discussionQuestion:
      'Hva gjør det lett – og hva gjør det vanskelig – for ungdom å spise sunt og bærekraftig i hverdagen?',
    accentColor: '#38BDF8',
  },
];

export const KOSTHOLD_MAIN_STEP_IDS = KOSTHOLD_NODES.map((n) => n.id);
export const KOSTHOLD_NODE_MAP = Object.fromEntries(
  KOSTHOLD_NODES.map((n) => [n.id, n]),
);
