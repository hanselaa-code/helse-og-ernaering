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
  {
    id: 'vaesk-4-aerob',
    stepNumber: 4,
    title: 'Aerob energifrigjøring',
    shortLabel: 'Aerob',
    subtitleTag: 'Utholdende motor med nok oksygen',
    eraLabel: 'Lav–moderat intensitet',
    primaryBadge: 'O₂ tilgjengelig',
    secondaryBadge: 'Karbohydrat + Fett → ~30–32 ATP',
    traceBadge: 'KM1: Aerob vs. anaerob',
    competenceGoals: ['KM1'],
    summaryTitle: 'Langvarig arbeid uten opphopning av melkesyre',
    whatHappens:
      'Ved rolig til moderat intensitet (som jogging, sykling i pratefart eller langrenn) rekker hjerte og lunger å levere nok oksygen til muskelcellenes mitokondrier. Da går celleåndingen aerobt: både glukose og fettsyrer forbrennes fullstendig til CO₂ og vann. Dette gir masse ATP og gjør at du kan holde på i timer.',
    classroomTest:
      'Snakketesten: Klarer du å snakke i hele setninger mens du beveger deg, jobber musklene dine hovedsakelig aerobt!',
    keyTraits: [
      {
        icon: 'heart',
        title: 'Hjerte og kapillærer leverer nok O₂',
        description:
          'Avfallsstoffene CO₂ og H₂O er lette å kvitte seg med gjennom pust og svette.',
      },
      {
        icon: 'flame',
        title: 'Blander fett og karbohydrat',
        description:
          'Jo lavere intensitet, desto større andel av energien kommer fra fettforbrenning.',
      },
    ],
    terms: ['Aerob forbrenning', 'Celleånding', 'VO₂-maks'],
    discussionQuestion:
      'Hvorfor er aerob trening i sone 1–2 grunnmuren i nesten alle utholdenhetsidretter?',
    accentColor: '#22C55E',
  },
  {
    id: 'vaesk-5-anaerob',
    stepNumber: 5,
    title: 'Anaerob energifrigjøring & laktat',
    shortLabel: 'Anaerob',
    subtitleTag: 'Turbo-gir uten nok oksygen',
    eraLabel: 'Høy intensitet',
    primaryBadge: 'O₂-mangel i muskelen',
    secondaryBadge: '2 ATP + Melkesyre (laktat)',
    competenceGoals: ['KM1'],
    summaryTitle: 'Lynrask ATP, men kort varighet',
    whatHappens:
      'Når du spurter alt du kan på 400 meter, løper opp en bratt bakke eller løfter tunge vekter, trenger musklene ATP raskere enn blodet klarer å levere oksygen. Da må musklene skaffe energi anaerobt: glykolysen går på høygir uten O₂, gir 2 ATP per glukose i lynfart, og pyruvat gjøres om til melkesyre (laktat). pH i muskelen synker, og du kjenner at beina blir «sure» og stive.',
    classroomTest:
      'Hvorfor må du pese lenge *etter* en 60-meter sprint? Du betaler tilbake «oksygen-gjelden» ved å frakte laktat til leveren og gjøre det om til glukose igjen!',
    keyTraits: [
      {
        icon: 'zap',
        title: 'Ekstrem effekt i 10–90 sekunder',
        description:
          'Anaerob glykolyse leverer ATP svært raskt per sekund, men tømmer glykogenlagrene fort.',
      },
      {
        icon: 'alert',
        title: 'Anaerob terskel',
        description:
          'Grensen der kroppen produserer mer laktat enn den klarer å rydde unna. God trening flytter denne terskelen oppover!',
      },
    ],
    terms: ['Anaerob forbrenning', 'Melkesyre (laktat)', 'Glykolyse'],
    discussionQuestion:
      'Hva er forskjellen på å trene 4×4-intervaller nær anaerob terskel sammenlignet med en rolig langtur?',
    accentColor: '#F43F5E',
  },
];

export const VAESKEBALANSE_MAIN_STEP_IDS = VAESKEBALANSE_NODES.map((n) => n.id);
export const VAESKEBALANSE_NODE_MAP = Object.fromEntries(
  VAESKEBALANSE_NODES.map((n) => [n.id, n]),
);
