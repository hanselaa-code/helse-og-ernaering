import type { HealthNodeData } from './types';

export const NAERINGSSTOFFER_NODES: HealthNodeData[] = [
  {
    id: 'naer-1-oversikt',
    stepNumber: 1,
    title: 'Makro- og mikronæringsstoffer',
    shortLabel: 'Oversikt',
    subtitleTag: 'Kroppens drivstoff, byggesteiner og hjelpestoffer',
    eraLabel: 'Grunnlaget',
    primaryBadge: '6 hovedgrupper',
    secondaryBadge: 'Energi + Byggesteiner',
    traceBadge: 'KM1: Næringsstoffer',
    competenceGoals: ['KM1'],
    summaryTitle: 'Hva trenger kroppen fra maten?',
    whatHappens:
      'Maten vi spiser inneholder seks hovedgrupper av næringsstoffer. Karbohydrater, proteiner og fett kalles makronæringsstoffer fordi kroppen trenger dem i store mengder – de gir både energi og byggesteiner. Vitaminer, mineraler og vann gir ikke energi i seg selv, men er helt nødvendige for at kjemiske reaksjoner, immunforsvar og transport i kroppen skal fungere.',
    classroomTest:
      'Klasseromssjekk: Se på innholdsfortegnelsen på en matvare dere har i sekken (f.eks. en yoghurt, nøttepose eller brødskive). Hvor mye energi kommer fra karbohydrater, fett og protein per 100 g?',
    keyTraits: [
      {
        icon: 'flame',
        title: 'Energigivende næringsstoffer',
        description:
          'Karbohydrat (~17 kJ/g / 4 kcal/g), protein (~17 kJ/g / 4 kcal/g) og fett (~38 kJ/g / 9 kcal/g).',
      },
      {
        icon: 'dna',
        title: 'Ikke-energigivende hjelpere',
        description:
          'Vitaminer, mineraler og vann gir 0 kcal, men uten dem stopper enzymer, nerveimpulser og oksygentransport opp.',
      },
      {
        icon: 'sparkles',
        title: 'Essensielle stoffer',
        description:
          'Stoffer kroppen ikke klarer å lage selv (f.eks. vitamin C, omega-3 og 9 aminosyrer) må tilføres gjennom variert kost.',
      },
    ],
    terms: ['Makronæringsstoffer', 'Mikronæringsstoffer', 'Energibalanse'],
    discussionQuestion:
      'Hvorfor holder det ikke å bare spise nok kalorier hvis kostholdet er ensidig?',
    accentColor: '#10B981',
  },
  {
    id: 'naer-2-karbohydrater',
    stepNumber: 2,
    title: 'Karbohydrater og kostfiber',
    shortLabel: 'Karbohydrat',
    subtitleTag: 'Rask og langvarig energi til hjerne og muskler',
    eraLabel: 'Makronæringsstoff',
    primaryBadge: '17 kJ / 4 kcal per g',
    secondaryBadge: 'Glukose = hoveddrivstoff',
    competenceGoals: ['KM1'],
    summaryTitle: 'Sukkerarter, stivelse og fiber',
    whatHappens:
      'Karbohydrater består av karbon, hydrogen og oksygen. Enkle sukkerarter (monosakkarider som glukose og fruktose, og disakkarider som sukrose) gir rask blodsukkerstigning. Stivelse er et polysakkarid som tar lengre tid å bryte ned og gir jevn energi. Kostfiber er også polysakkarider, men våre enzymer klarer ikke å spalte dem – likevel er de gull verdt for tarmhelsen.',
    classroomTest:
      'Tygg en bit usøtet knekkebrød eller loff i 60 sekunder uten å svelge. Merker du at smaken blir søtere? Det er spyttamylasen som klipper stivelse til kortere sukkerarter!',
    keyTraits: [
      {
        icon: 'zap',
        title: 'Hjernens favorittdrivstoff',
        description:
          'Hjernen bruker hovedsakelig glukose som energikilde, rundt 120 gram hver eneste dag.',
      },
      {
        icon: 'layers',
        title: 'Glykogenlagre i lever og muskler',
        description:
          'Overskudd av glukose lagres som glykogen i muskler (til trening) og lever (for å holde blodsukkeret stabilt).',
      },
      {
        icon: 'leaf',
        title: 'Kostfiber holder tarmen i gang',
        description:
          'Grovt korn, grønnsaker og belgfrukter gir metthet, stabilt blodsukker og næring til gode tarmbakterier.',
      },
    ],
    terms: ['Monosakkarid', 'Polysakkarid', 'Kostfiber', 'Amylase'],
    discussionQuestion:
      'Hva er forskjellen på å få i seg 30 g karbohydrat fra brus sammenlignet med 30 g fra havregryn?',
    accentColor: '#F59E0B',
  },
  {
    id: 'naer-3-proteiner',
    stepNumber: 3,
    title: 'Proteiner og aminosyrer',
    shortLabel: 'Protein',
    subtitleTag: 'Kroppens byggesteiner, enzymer og forsvar',
    eraLabel: 'Makronæringsstoff',
    primaryBadge: '17 kJ / 4 kcal per g',
    secondaryBadge: '20 aminosyrer (9 essensielle)',
    competenceGoals: ['KM1'],
    summaryTitle: 'Fra aminosyrer til muskler og enzymer',
    whatHappens:
      'Proteiner er bygget opp av lange kjeder av aminosyrer som folder seg til unike 3D-former. De danner muskelfibre, hud, hår, transportproteiner (som hemoglobin), antistoffer i immunforsvaret og alle kroppens enzymer. Når vi spiser protein, brytes det ned til frie aminosyrer som cellene setter sammen til nye proteiner etter oppskriften i DNA.',
    classroomTest:
      'Tenk over protein-komplementering: Planter har ofte mindre av én essensiell aminosyre, men hvis du kombinerer bønner/linser med ris eller brød, får du alle 9 essensielle aminosyrene!',
    keyTraits: [
      {
        icon: 'dumbbell',
        title: 'Vekst og reparasjon',
        description:
          'Nødvendig for å bygge og vedlikeholde muskler, skjelett og bindevev – spesielt i vekst og etter trening.',
      },
      {
        icon: 'flask',
        title: 'Enzymer og hormoner',
        description:
          'Nesten alle kjemiske reaksjoner i kroppen styres av enzymer, som er spesialiserte proteiner.',
      },
      {
        icon: 'shield',
        title: 'Komplette vs. planteproteiner',
        description:
          'Fisk, kjøtt, egg, melk og soya inneholder alle essensielle aminosyrer; belgfrukter + korn utfyller hverandre.',
      },
    ],
    terms: ['Essensiell aminosyre', 'Enzym', 'Makronæringsstoffer'],
    discussionQuestion:
      'Trenger en vanlig ungdom dyre proteinshaker, eller dekkes behovet lett gjennom vanlig mat?',
    accentColor: '#F43F5E',
  },
  {
    id: 'naer-4-fett',
    stepNumber: 4,
    title: 'Fett og fettsyrer',
    shortLabel: 'Fett',
    subtitleTag: 'Tett energilager, cellemembraner og hormoner',
    eraLabel: 'Makronæringsstoff',
    primaryBadge: '38 kJ / 9 kcal per g',
    secondaryBadge: 'Umettet vs. mettet',
    competenceGoals: ['KM1'],
    summaryTitle: 'Hvorfor kroppen faktisk trenger fett',
    whatHappens:
      'Fett gir mer enn dobbelt så mye energi per gram som karbohydrat og protein. I tillegg er fett nødvendig for å bygge cellemembraner, beskytte indre organer, isolere mot kulde, produsere kjønnshormoner og ta opp de fettløselige vitaminene A, D, E og K. Kvaliteten på fettet betyr mye: umettet fett fra fisk og planter er gunstigere for hjertet enn mye mettet fett.',
    classroomTest:
      'Sammenlign rapsolje (flytende) og meierismør (fast) i romtemperatur. Hvorfor er oljen flytende? Dobbeltbindingene i umettet fett gir en «knekk» på molekylet så det ikke pakkes like tett!',
    keyTraits: [
      {
        icon: 'heart',
        title: 'Umettet fett (planteoljer, fisk, nøtter)',
        description:
          'Inneholder viktige omega-3- og omega-6-fettsyrer som demper betennelse og beskytter hjerte og hjerne.',
      },
      {
        icon: 'alert',
        title: 'Mettet fett & transfett',
        description:
          'For mye mettet fett kan øke LDL-kolesterol og risiko for hjerte- og karsykdom over tid.',
      },
      {
        icon: 'sun',
        title: 'Fettløselige vitaminer (A, D, E, K)',
        description:
          'Gulrot (vitamin A-forløper) tas mye bedre opp når den spises sammen med litt fett.',
      },
    ],
    terms: ['Umettet fett', 'Mettet fett', 'Makronæringsstoffer'],
    discussionQuestion:
      'Hvorfor er det uheldig å kutte ut alt fett fra kostholdet?',
    accentColor: '#EAB308',
  },
  {
    id: 'naer-5-vitaminer',
    stepNumber: 5,
    title: 'Vitaminer',
    shortLabel: 'Vitaminer',
    subtitleTag: 'Små organiske molekyler med store oppgaver',
    eraLabel: 'Mikronæringsstoff',
    primaryBadge: '13 livsviktige vitaminer',
    secondaryBadge: 'Vann- vs. fettløselige',
    competenceGoals: ['KM1'],
    summaryTitle: 'A, D, E, K vs. B-gruppen og C',
    whatHappens:
      'Vitaminer er organiske forbindelser kroppen trenger i mikrogram eller milligram. De deles i fettløselige (A, D, E, K – kan lagres i lever og fettvev) og vannløselige (B-vitaminer og vitamin C – overskudd skilles stort sett ut med urinen). I Norge er vitamin D ekstra viktig om vinteren fordi lite sollys gir lav egenproduksjon i huden.',
    classroomTest:
      'Hva skjer hvis en sjømann på 1700-tallet bare spiste salt kjøtt og skipskjeks? Mangel på vitamin C ga skjørbuk – bindevevet og tannkjøttet sviktet fordi kollagen ikke kunne lages.',
    keyTraits: [
      {
        icon: 'sun',
        title: 'Vitamin D & kalsiumopptak',
        description:
          'Lages i huden av UV-stråler, finnes i fet fisk og tran. Nødvendig for sterke bein og immunforsvar.',
      },
      {
        icon: 'shield',
        title: 'Vitamin C & B-vitaminer',
        description:
          'Vitamin C styrker bindevev og øker jernopptak; B-vitaminer er koenzymer i celleåndingen.',
      },
      {
        icon: 'eye',
        title: 'Vitamin A, E & K',
        description:
          'Vitamin A er viktig for synet, E beskytter celler mot oksidasjon, og K trengs for at blodet skal koagulere.',
      },
    ],
    terms: ['Mikronæringsstoffer', 'Enzym'],
    discussionQuestion:
      'Hvorfor er det større risiko for å få farlig overdose av fettløselige vitaminer enn vannløselige?',
    accentColor: '#38BDF8',
  },
  {
    id: 'naer-6-mineraler',
    stepNumber: 6,
    title: 'Mineraler og sporstoffer',
    shortLabel: 'Mineraler',
    subtitleTag: 'Uorganiske grunnstoffer i skjelett, blod og nerver',
    eraLabel: 'Mikronæringsstoff',
    primaryBadge: 'Kalsium, Jern, Jod, Natrium',
    secondaryBadge: 'Grunnstoffer fra naturen',
    competenceGoals: ['KM1'],
    summaryTitle: 'Kalsium, jern, jod og kalium',
    whatHappens:
      'Mineraler er uorganiske grunnstoffer som ikke kan lages eller ødelegges ved koking – vi får dem fra jordsmonn via planter og dyr, eller fra sjømat. Kalsium bygger skjelettet, jern binder oksygen i hemoglobinet, jod styrer stoffskiftehormoner fra skjoldbruskkjertelen, og natrium/kalium styrer nerveimpulser og væskebalanse.',
    classroomTest:
      'Tips: Drikk et glass appelsinjuice (vitamin C) til grovbrød med leverpostei eller linsepålegg – vitamin C gjør at tarmen tar opp mye mer jern!',
    keyTraits: [
      {
        icon: 'bone',
        title: 'Kalsium (Ca)',
        description:
          'Bygger beinvev og tenner, og er nødvendig for at muskler skal trekke seg sammen.',
      },
      {
        icon: 'droplets',
        title: 'Jern (Fe)',
        description:
          'Sitter i midten av hemoglobin-molekylet i røde blodceller og frakter O₂ fra lungene til musklene.',
      },
      {
        icon: 'activity',
        title: 'Jod (I), Natrium (Na) & Kalium (K)',
        description:
          'Jod (hvit fisk, meieri) styrer stoffskiftet; Na⁺ og K⁺ driver nervesignaler og væskebalanse.',
      },
    ],
    terms: ['Mikronæringsstoffer', 'Elektrolytter'],
    discussionQuestion:
      'Hvorfor er unge jenter og vegetarianere/veganere spesielt anbefalt å følge med på jern, jod og vitamin B12?',
    accentColor: '#A855F7',
  },
];

export const NAERINGSSTOFFER_MAIN_STEP_IDS = NAERINGSSTOFFER_NODES.map((n) => n.id);
export const NAERINGSSTOFFER_NODE_MAP = Object.fromEntries(
  NAERINGSSTOFFER_NODES.map((n) => [n.id, n]),
);
