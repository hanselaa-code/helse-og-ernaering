import type { HealthNodeData } from './types';

export const VAESKEBALANSE_NODES: HealthNodeData[] = [
  {
    id: 'vaesk-1-vann',
    stepNumber: 1,
    title: 'Vann – kroppens viktigste transportmiddel',
    shortLabel: 'Væskebalanse',
    subtitleTag: '60 % av kroppen består av vann',
    eraLabel: 'Væskebalanse',
    primaryBadge: 'Ca. 2–2,5 L inn/ut per dag',
    secondaryBadge: 'Blod, celler & mellomrom',
    traceBadge: 'KM1: Kroppens kjemi',
    competenceGoals: ['KM1'],
    summaryTitle: 'Løsemiddel, transport og støtdemper',
    whatHappens:
      'Vann utgjør omtrent 60 % av kroppsvekten hos voksne og enda litt mer hos ungdom. Det er løsemiddelet der alle biokjemiske reaksjoner skjer, og utgjør hoveddelen av blodplasmaet som frakter glukose, oksygen, hormoner og avfallsstoffer. I tillegg beskytter vann hjernen og leddene mot støt.',
    classroomTest:
      'Hvor mye væske mister du på et vanlig døgn uten trening? Ca. 1,5 L via urin, 0,5 L via svette/hud og 0,4 L som vanndamp i utpusten!',
    keyTraits: [
      {
        icon: 'droplets',
        title: 'Væskebalansen styres av hjernen og nyrene',
        description:
          'Når blodet blir litt mer konsentrert, utløses tørste og hormonet ADH gjør at nyrene holder på mer vann.',
      },
      {
        icon: 'activity',
        title: 'Dehydrering senker prestasjonen',
        description:
          'Allerede ved 1–2 % væsketap faller blodvolumet, pulsen stiger og konsentrasjon og utholdenhet svekkes.',
      },
    ],
    terms: ['Osmose', 'Elektrolytter'],
    discussionQuestion:
      'Hvorfor er urinfargen en enkel og nyttig indikator på om du har fått i deg nok væske?',
    accentColor: '#06B6D4',
  },
  {
    id: 'vaesk-2-termo',
    stepNumber: 2,
    title: 'Termoregulering & svette',
    shortLabel: 'Termoregulering',
    subtitleTag: 'Hvordan kroppen kvitter seg med overskuddsvarme',
    eraLabel: 'Væskebalanse',
    primaryBadge: 'Kjernetemp: ~37 °C',
    secondaryBadge: 'Fordamping kjøler huden',
    competenceGoals: ['KM1'],
    summaryTitle: 'Blodårer i huden + svettekjertler',
    whatHappens:
      'Under fysisk aktivitet produserer musklene enorme mengder varme (rundt 75–80 % av energien blir varme). For at enzymer og hjerne ikke skal overopphetes, utvider blodårene i huden seg (du blir rød i ansiktet), og svettekjertlene skiller ut vann og salter. Når svetten fordamper fra huden, trekker den med seg varmeenergi og kjøler ned blodet.',
    classroomTest:
      'Merk: Det er selve *fordampingen* av svette som kjøler deg ned. Hvis svetten bare drypper av deg i veldig fuktig luft, får du mye mindre kjøleeffekt!',
    keyTraits: [
      {
        icon: 'thermometer',
        title: 'Hypothalamus – kroppens termostat',
        description:
          'Registrerer blodtemperaturen og skrur automatisk opp svetting og hudblodstrøm ved behov.',
      },
      {
        icon: 'droplets',
        title: 'Store svettetap på varme dager',
        description:
          'Under hard trening i varme kan du miste 1–2 liter svette i timen – da må væsken erstattes jevnlig.',
      },
    ],
    terms: ['Termoregulering', 'Elektrolytter'],
    discussionQuestion:
      'Hvorfor blir det mye tyngre å løpe i 30 °C og høy luftfuktighet enn i 15 °C og tørr luft?',
    accentColor: '#38BDF8',
  },
  {
    id: 'vaesk-3-elektrolytter',
    stepNumber: 3,
    title: 'Elektrolytter, osmose & sportsdrikke',
    shortLabel: 'Elektrolytter',
    subtitleTag: 'Hvorfor bare vann noen ganger ikke er nok',
    eraLabel: 'Væskebalanse',
    primaryBadge: 'Na⁺, K⁺, Cl⁻',
    secondaryBadge: 'Osmose i cellene',
    competenceGoals: ['KM1', 'KM2'],
    summaryTitle: 'Salter styrer væsketrykk og nervesignaler',
    whatHappens:
      'Svette består ikke bare av rent vann – den smaker salt fordi den inneholder elektrolytter som natrium (Na⁺) og klorid (Cl⁻). Disse ionene er avgjørende for osmose (at vannet fordeler seg riktig inni og utenfor cellene) og for at nerveimpulser og muskelsammentrekninger skal fungere. Drikker du enorme mengder rent vann uten salt etter ekstrem svetting, kan natriumnivået i blodet bli farlig lavt.',
    classroomTest:
      'Når trenger man egentlig sportsdrikke? Ved vanlig trening under 60 min holder rent vann i massevis. Sportsdrikke med litt salt og karbohydrat er nyttig ved hard økt over 60–90 min.',
    keyTraits: [
      {
        icon: 'flask',
        title: 'Osmose og konsentrasjon',
        description:
          'Vann følger alltid saltene. Riktig saltkonsentrasjon holder blodvolumet stabilt.',
      },
      {
        icon: 'zap',
        title: 'Nerver og muskelkramper',
        description:
          'Natrium og kalium lager de elektriske spenningsforskjellene som får muskler til å trekke seg sammen.',
      },
    ],
    terms: ['Elektrolytter', 'Osmose'],
    discussionQuestion:
      'Markedsføring får det ofte til å virke som om vi trenger dyre elektrolytt-tilskudd hver dag. Når er det egentlig nødvendig?',
    accentColor: '#10B981',
  },
];

export const VAESKEBALANSE_MAIN_STEP_IDS = VAESKEBALANSE_NODES.map((n) => n.id);
export const VAESKEBALANSE_NODE_MAP = Object.fromEntries(
  VAESKEBALANSE_NODES.map((n) => [n.id, n]),
);
