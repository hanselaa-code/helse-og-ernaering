import type { HealthNodeData } from './types';

export const CELLEANDING_NODES: HealthNodeData[] = [
  {
    id: 'celle-1-atp',
    stepNumber: 1,
    title: 'Hva er ATP? – Cellens energivaluta',
    shortLabel: 'ATP (Energi)',
    subtitleTag: 'Det oppladbare batteriet som driver alt liv i cellen',
    eraLabel: 'Startpunkt',
    primaryBadge: 'ATP → ADP + P + energi',
    secondaryBadge: 'Karb • Fett • Protein',
    traceBadge: 'KM1: Celleånding',
    competenceGoals: ['KM1'],
    summaryTitle: 'Maten må veksles inn i ATP før cellen kan bruke energien',
    whatHappens:
      'Cellene våre kan ikke bruke energi direkte fra brødskive, smør eller biff. Først må kjemisk energi i karbohydrater, fett og proteiner brukes til å lade opp molekylet ATP (adenosintrifosfat). ATP fungerer som cellens universelle, oppladbare batteri: når cellen skal trekke sammen en muskel, sende et nervesignal eller bygge et protein, klipper den av det ytterste fosfatet på ATP. Da blir ATP til ADP + P og energi frigjøres. Etterpå lades ADP opp til ATP igjen ved celleånding!',
    classroomTest:
      'Du lager og bruker omtrent din egen kroppsvekt i ATP hver eneste dag! Det går an fordi hvert ATP-molekyl lades opp og brukes om igjen tusenvis av ganger i døgnet.',
    keyTraits: [
      {
        icon: 'zap',
        title: 'Oppladbart batteri (ATP ↔ ADP + P)',
        description:
          'ADP + P er det utladede batteriet. Celleånding bruker energi fra maten til å sette på det tredje fosfatet igjen.',
      },
      {
        icon: 'flame',
        title: 'Tre næringsstoffer kan lage ATP',
        description:
          'Herfra deler omsetningen seg i tre grener: karbohydrater (raskest), fett (størst lager) og proteiner (nødreserve).',
      },
      {
        icon: 'thermometer',
        title: 'Varme holder oss på 37 °C',
        description:
          'Rundt 60 % av energien fra maten blir til kroppsvarme, mens ca. 40 % fanges i ATP.',
      },
    ],
    terms: ['ATP', 'Celleånding', 'Mitokondrie'],
    discussionQuestion:
      'Hvorfor slipper ikke cellen ut all energien i glukose i ett eneste stort smell, slik som når sukker brenner på et bål?',
    accentColor: '#F59E0B',
  },
  {
    id: 'celle-2-glykolyse',
    stepNumber: 2,
    title: 'Karbohydrater: Glykolyse (felles start)',
    shortLabel: 'Karb: Glykolyse',
    subtitleTag: 'Glukose (6 C) klippes i to pyruvat (3 C) i cytoplasma',
    eraLabel: 'Karbohydrat-gren',
    primaryBadge: 'Netto: 2 ATP + 2 NADH',
    secondaryBadge: 'Skjer i cytoplasma',
    competenceGoals: ['KM1'],
    summaryTitle: 'Første steg for alle karbohydrater – krever ikke oksygen',
    whatHappens:
      'Når du spiser karbohydrater, brytes de ned til glukose som fraktes inn i cellene. Første steg skjer ute i cellevæsken (cytoplasma) og kalles glykolyse. Ett glukosemolekyl med 6 karbonatomer klippes gjennom 10 trinn i to molekyler pyruvat (3 karbonatomer hver). Dette krever IKKE oksygen og gir 2 netto ATP samt 2 ladede elektronbærere (NADH). Herfra tar glukosen én av to veier – avhengig av om cellen har nok oksygen eller ikke!',
    classroomTest:
      'Glykolysen bruker 2 ATP for å komme i gang og produserer 4 ATP tilbake – akkurat som å investere 2 kroner og få 4 kroner igjen: netto gevinst er 2 ATP.',
    keyTraits: [
      {
        icon: 'scissors',
        title: 'Glukose (6 C) → 2 Pyruvat (3 C)',
        description:
          'Skjer raskt i cytoplasma uten mitokondrier og uten oksygen.',
      },
      {
        icon: 'wind',
        title: 'Veiskille: Med eller uten O₂',
        description:
          'Med oksygen går pyruvat inn i mitokondriet (aerobt). Uten nok oksygen gjøres pyruvat om til laktat (anaerobt).',
      },
    ],
    terms: ['Glykolyse', 'ATP'],
    discussionQuestion:
      'Hva avgjør om pyruvat fra glykolysen går videre til aerob eller anaerob celleånding?',
    accentColor: '#F59E0B',
  },
  {
    id: 'celle-3-aerob',
    stepNumber: 3,
    title: 'Aerob celleånding (med oksygen)',
    shortLabel: 'Aerob (med O₂)',
    subtitleTag: 'Sitronsyresyklus + elektrontransportkjede i mitokondriet',
    eraLabel: 'Karbohydrat • Aerob',
    primaryBadge: 'Totalt ~30–32 ATP',
    secondaryBadge: 'CO₂ + H₂O som avfall',
    traceBadge: 'KM1: Aerob vs. anaerob',
    competenceGoals: ['KM1'],
    summaryTitle: 'Fullstendig forbrenning gir 15 ganger mer ATP enn anaerobt',
    whatHappens:
      'Når musklene får nok oksygen (f.eks. ved jogging eller rolig sykling), fraktes pyruvat inn i mitokondriet og blir til acetyl-CoA (2 C). Der går det gjennom to hovedsteg:\n1) Sitronsyresyklus: Karbonatomene brytes helt ned til CO₂ (som vi puster ut), og vi får 2 ATP + masse ladede elektronbærere (NADH og FADH₂).\n2) Elektrontransportkjeden: Elektronene driver protonpumper gjennom enzymturbinen ATP-syntase og gir ca. 26–28 ATP. Oksygen tar imot elektronene til slutt og danner vann (H₂O).',
    classroomTest:
      'Snakketesten: Klarer du å snakke i hele setninger mens du trener, leverer hjerte og lunger nok O₂ til at celleåndingen går aerobt!',
    keyTraits: [
      {
        icon: 'refresh',
        title: 'Sitronsyresyklus → 2 ATP + CO₂',
        description:
          'Karbonatomene fra maten slippes ut som CO₂ og lader opp NADH og FADH₂ med elektroner.',
      },
      {
        icon: 'zap',
        title: 'Elektronkjede → ~26–28 ATP + H₂O',
        description:
          'Oksygen er sluttmottaker for elektronene. Totalt per glukose: 2 + 2 + 26–28 = ~30–32 ATP!',
      },
    ],
    terms: ['Aerob forbrenning', 'Sitronsyresyklus', 'Elektrontransportkjeden'],
    discussionQuestion:
      'Hvorfor stopper hele elektrontransportkjeden opp hvis cellen går tom for oksygen?',
    accentColor: '#10B981',
  },
  {
    id: 'celle-4-anaerob',
    stepNumber: 4,
    title: 'Anaerob celleånding & melkesyre',
    shortLabel: 'Anaerob (uten O₂)',
    subtitleTag: 'Lynrask nødløsning uten oksygen i cytoplasma',
    eraLabel: 'Karbohydrat • Anaerob',
    primaryBadge: 'Totalt: bare 2 ATP',
    secondaryBadge: 'Danner melkesyre (laktat)',
    competenceGoals: ['KM1'],
    summaryTitle: 'Høy fart i kort tid – lavt ATP-utbytte og sure muskler',
    whatHappens:
      'Når du spurter alt du kan på 400 meter eller løfter tungt, trenger musklene ATP raskere enn blodet rekker å levere oksygen. Da stanser mitokondriet opp, og cellen må stole på glykolysen alene. For at glykolysen skal kunne fortsette, gjøres pyruvat om til melkesyre (laktat). Det gir bare 2 ATP per glukose, men leverer dem lynraskt! Bakdelen er at melkesyre og H⁺-ioner gjør muskelen stiv og sliten etter 10–90 sekunder.',
    classroomTest:
      'Hvorfor peser du lenge *etter* en 60-meter sprint? Du betaler tilbake «oksygen-gjelden» ved å frakte laktat til leveren og bygge det om til glukose igjen!',
    keyTraits: [
      {
        icon: 'zap',
        title: '2 ATP på rekordtid',
        description:
          'Gir 15 ganger mindre ATP per glukose enn aerob forbrenning, men kan skru opp farten umiddelbart uten å vente på O₂.',
      },
      {
        icon: 'alert',
        title: 'Kun karbohydrater kan brukes anaerobt',
        description:
          'Verken fett eller protein kan gi ATP uten oksygen – ved maks spurt er kroppen helt avhengig av glykogenlagrene!',
      },
    ],
    terms: ['Anaerob forbrenning', 'Melkesyre (laktat)', 'Glykolyse'],
    discussionQuestion:
      'Hvorfor kan du ikke spurte en hel maraton i 100-meterstempo?',
    accentColor: '#F43F5E',
  },
  {
    id: 'celle-5-fett',
    stepNumber: 5,
    title: 'Fettforbrenning (Beta-oksidasjon)',
    shortLabel: 'Fettforbrenning',
    subtitleTag: 'Fettsyrer klippes i 2-karbonbiter og går inn i mitokondriet',
    eraLabel: 'Fett-gren (kun aerob)',
    primaryBadge: '~106 ATP per fettsyre!',
    secondaryBadge: 'Krever alltid O₂',
    competenceGoals: ['KM1'],
    summaryTitle: 'Enorm energitetthet for hvile og langvarig arbeid',
    whatHappens:
      'Fett lagres som triglyserider i fettvev og muskler. Når kroppen trenger energi over tid, spaltes triglyserider til glyserol og lange fettsyrer. Inne i mitokondriet skjer beta-oksidasjon: fettsyrene klippes opp bit for bit til 2-karbonmolekyler (acetyl-CoA). Disse går rett inn i sitronsyresyklus og elektrontransportkjeden. Fordi en fettsyre har mange karbonatomer (f.eks. 16 C i palmitinsyre), gir én eneste fettsyre rundt 106 ATP!',
    classroomTest:
      'Fett gir over dobbelt så mye energi per gram som karbohydrat (38 kJ/g vs. 17 kJ/g), men det krever mer oksygen per ATP – derfor går fettforbrenningen saktere enn karbohydratforbrenningen.',
    keyTraits: [
      {
        icon: 'flame',
        title: 'Beta-oksidasjon → Acetyl-CoA',
        description:
          'En 16-karbon fettsyre klippes til 8 acetyl-CoA som alle driver sitronsyresyklus og elektronkjeden.',
      },
      {
        icon: 'heart',
        title: 'Bare aerobt – aldri anaerobt',
        description:
          'Fettforbrenning foregår kun i mitokondriet og krever rikelig med oksygen.',
      },
    ],
    terms: ['Aerob forbrenning', 'Mitokondrie', 'ATP'],
    discussionQuestion:
      'Hvorfor forbrenner du høyest andel fett når du går en rolig tur, men mer karbohydrat når du løper fort?',
    accentColor: '#38BDF8',
  },
  {
    id: 'celle-6-protein',
    stepNumber: 6,
    title: 'Omdanning av proteiner',
    shortLabel: 'Proteiner',
    subtitleTag: 'Byggesteiner først – nødbrensel med nitrogenspalting',
    eraLabel: 'Protein-gren',
    primaryBadge: '~15–30 ATP per aminosyre',
    secondaryBadge: 'Nitrogen → Urea (urin)',
    competenceGoals: ['KM1'],
    summaryTitle: 'Deaminering i leveren før karbonskjelettet brennes',
    whatHappens:
      'Kroppen vil helst spare proteiner til å bygge muskler, enzymer, hormoner og antistoffer. Men hvis du spiser mer protein enn du trenger, eller hvis karbohydratlagrene er tomme under langvarig faste/hard trening, kan aminosyrer brytes ned til ATP. Først må aminogruppen (NH₂) fjernes i leveren – dette kalles deaminering. Nitrogenet blir til urea som skilles ut i urinen, mens resten (karbonskjelettet) kobles inn i pyruvat, acetyl-CoA eller sitronsyresyklus.',
    classroomTest:
      'Hvorfor lukter det noen ganger svakt av ammoniakk av svetten etter en veldig lang og hard økt på tom mage? Kroppen har begynt å bryte ned aminosyrer til energi!',
    keyTraits: [
      {
        icon: 'scissors',
        title: 'Deaminering: Fjerner nitrogen (NH₂)',
        description:
          'Ammoniakk er giftig for hjernen, så leveren omdanner det raskt til ufarlig urea som nyrene filtrerer ut.',
      },
      {
        icon: 'layers',
        title: 'Kobles inn på flere steder',
        description:
          'Ulike aminosyrer går inn som pyruvat, acetyl-CoA eller rett i sitronsyresyklus og gir typisk ~15–30 ATP (minus energikostnaden for urea).',
      },
    ],
    terms: ['Essensiell aminosyre', 'Glykogen', 'ATP'],
    discussionQuestion:
      'Hvorfor er det ugunstig at kroppen må bruke mye muskelprotein som drivstoff under slanking eller ekstrem trening?',
    accentColor: '#A855F7',
  },
  {
    id: 'celle-7-oversikt',
    stepNumber: 7,
    title: 'Når bruker kroppen hva?',
    shortLabel: 'Når brukes hva?',
    subtitleTag: 'Slik kombinerer kroppen karbohydrat, fett og protein',
    eraLabel: 'Samlet oversikt',
    primaryBadge: 'Intensitet + O₂ styrer valget',
    secondaryBadge: 'Hvile vs. Jogg vs. Spurt',
    competenceGoals: ['KM1'],
    summaryTitle: 'Intensitet, varighet og oksygentilgang avgjør drivstoffmiksen',
    whatHappens:
      'I virkeligheten bruker kroppen nesten alltid en blanding av drivstoff, men fordelingen endrer seg hele tiden etter intensitet og varighet:\n• Hvile & rolig gange: Mest fett (~60–70 %) + litt karbohydrat aerobt. God tid og nok O₂!\n• Moderat–hard utholdenhet (jogging, fotball): Karbohydrat og fett aerobt sammen. Jo høyere tempo, desto større andel karbohydrat fordi det gir ATP raskere.\n• Maksimal spurt / tunge løft (10–90 sek): Nesten bare anaerob karbohydrat (2 ATP lynraskt + laktat).\n• Protein: Normalt bare 5–10 %, men øker ved faste eller tomme glykogenlagre.',
    classroomTest:
      '«Å møte veggen» i et maraton skjer når glykogenlagrene (karbohydrat) tar slutt! Da må kroppen stole nesten bare på fett – som gir masse ATP, men leverer energien mye saktere så farten faller bratt.',
    keyTraits: [
      {
        icon: 'activity',
        title: 'Lav intensitet → Fett dominerer',
        description:
          'Uuttømmelige fettlagre (~106 ATP/fettsyre) passer perfekt når det er nok oksygen.',
      },
      {
        icon: 'zap',
        title: 'Høy intensitet → Karbohydrat dominerer',
        description:
          'Aerobt (~30–32 ATP) ved hard løping, og anaerobt (2 ATP + laktat) når O₂ ikke strekker til.',
      },
      {
        icon: 'shield',
        title: 'Protein spares til bygging',
        description:
          'Nok karbohydrater i kosten beskytter muskelproteinene mot å bli brent opp som energi.',
      },
    ],
    terms: ['Aerob forbrenning', 'Anaerob forbrenning', 'ATP'],
    discussionQuestion:
      'Hvorfor anbefales utholdenhetsutøvere å fylle opp karbohydratlagrene (glykogen) før en lang konkurranse, selv om alle har nok fett på kroppen?',
    accentColor: '#22C55E',
  },
];

export const CELLEANDING_MAIN_STEP_IDS = CELLEANDING_NODES.map((n) => n.id);
export const CELLEANDING_NODE_MAP = Object.fromEntries(
  CELLEANDING_NODES.map((n) => [n.id, n]),
);
