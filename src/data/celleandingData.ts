import type { HealthNodeData } from './types';

export const CELLEANDING_NODES: HealthNodeData[] = [
  {
    id: 'celle-1-oversikt',
    stepNumber: 1,
    title: 'Hva er celleånding & ATP?',
    shortLabel: 'Celleånding',
    subtitleTag: 'Slik gjør cellene mat om til brukbar energi',
    eraLabel: 'Energiomsetning',
    primaryBadge: 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O',
    secondaryBadge: 'Netto: ~30–32 ATP',
    traceBadge: 'KM1: Celleånding',
    competenceGoals: ['KM1'],
    summaryTitle: 'Fra kjemisk energi i glukose til cellens batteri (ATP)',
    whatHappens:
      'Når glukose og oksygen fraktes med blodet inn til cellene, skjer celleånding. I stedet for at energien slippes ut i én eksplosjon (som et bål), skjer nedbrytningen kontrollert i mange små trinn. Energien lagres i molekylet ATP (adenosintrifosfat) – cellens universelle «batteri» som driver alt muskelarbeid, hjerneaktivitet og cellebygging.',
    classroomTest:
      'Sammenlign et bål og celleånding: Begge oksiderer karbonforbindelser med oksygen og gir CO₂ + vann + varme, men cellen fanger ~38 % av energien som ATP i stedet for å brenne opp!',
    keyTraits: [
      {
        icon: 'zap',
        title: 'ATP → ADP + P + energi',
        description:
          'Når cellen trenger energi, klipper den av det ytterste fosfatet på ATP. Etterpå «lades» ADP opp igjen i mitokondriet.',
      },
      {
        icon: 'flame',
        title: 'Restenergi blir kroppsvarme',
        description:
          'Rundt 60 % av energien fra glukose blir til varme, som holder kroppstemperaturen vår stabil på ca. 37 °C.',
      },
    ],
    terms: ['Celleånding', 'ATP', 'Mitokondrie'],
    discussionQuestion:
      'Hvorfor puster vi fortere og hjertet slår raskere når musklene jobber hardt?',
    accentColor: '#38BDF8',
  },
  {
    id: 'celle-2-glykolyse',
    stepNumber: 2,
    title: 'Trinn 1: Glykolyse (i cytoplasma)',
    shortLabel: 'Glykolyse',
    subtitleTag: 'Glukose (6 C) deles i to pyruvat (3 C) uten oksygen',
    eraLabel: 'Cytoplasma',
    primaryBadge: '2 netto ATP + 2 NADH',
    secondaryBadge: 'Krever IKKE O₂',
    competenceGoals: ['KM1'],
    summaryTitle: 'Den eldste energiprosessen på Jorda',
    whatHappens:
      'Glykolysen foregår ute i cellens væske (cytoplasma) og krever ikke oksygen. Ett glukosemolekyl med 6 karbonatomer spaltes gjennom 10 enzymstyrte steg til to molekyler pyruvat (med 3 karbonatomer hver). Netto gevinst er bare 2 ATP, pluss 2 ladede elektronbærere (NADH) som frakter høyenergetiske elektroner videre.',
    classroomTest:
      'Visste du at glykolysen finnes i nesten alle levende organismer – fra bakterier til mennesker? Den oppsto før det fantes fritt oksygen på Jorda!',
    keyTraits: [
      {
        icon: 'scissors',
        title: '6 karbon → 2 × 3 karbon',
        description:
          'Ett glukosemolekyl klippes i to pyruvatmolekyler. Det investeres 2 ATP i starten, og produseres 4 ATP (netto 2 ATP).',
      },
      {
        icon: 'zap',
        title: 'Rask nødløsning uten O₂',
        description:
          'Hvis det mangler oksygen, kan glykolysen fortsette alene (anaerobt), men da må pyruvat gjøres om til laktat.',
      },
    ],
    terms: ['Glykolyse', 'ATP', 'Anaerob forbrenning'],
    discussionQuestion:
      'Hvorfor kan muskelceller bare stole på glykolysen alene i korte perioder?',
    accentColor: '#10B981',
  },
  {
    id: 'celle-3-sitronsyre',
    stepNumber: 3,
    title: 'Trinn 2: Sitronsyresyklus (i mitokondriet)',
    shortLabel: 'Sitronsyresyklus',
    subtitleTag: 'Pyruvat brytes ned til CO₂ og lader elektronbærere',
    eraLabel: 'Mitokondriets matriks',
    primaryBadge: '2 ATP + NADH & FADH₂',
    secondaryBadge: 'CO₂ pustes ut',
    competenceGoals: ['KM1'],
    summaryTitle: 'Her dannes CO₂-en vi puster ut',
    whatHappens:
      'Når oksygen er til stede, fraktes pyruvat inn i mitokondriet. Først spaltes ett karbonatom av som CO₂ (dannelse av acetyl-CoA), før resten går inn i sitronsyresyklus (Krebs syklus). Her brytes karbonringene helt ned, vi får ut CO₂ som avfall (som blodet frakter til lungene), 2 nye ATP, og massevis av ladede elektronbærere (NADH og FADH₂).',
    classroomTest:
      'Hvert eneste CO₂-molekyl du puster ut akkurat nå, stammer fra karbonatomene i maten du har spist og som ble klippet av i mitokondriene!',
    keyTraits: [
      {
        icon: 'refresh',
        title: 'Sirkulær enzym-karusell',
        description:
          'Acetyl-CoA (2 C) kobles på et 4-karbonmolekyl og blir til sitronsyre (6 C), som gradvis oksideres tilbake til 4 C.',
      },
      {
        icon: 'battery',
        title: 'Lader «elektron-taxier»',
        description:
          'Hovedpoenget med syklusen er ikke de 2 ATP-ene, men å lade opp NADH og FADH₂ med elektroner til siste trinn.',
      },
    ],
    terms: ['Sitronsyresyklus', 'Mitokondrie', 'Celleånding'],
    discussionQuestion:
      'Hvorfor går du ned i vekt i form av masse når du trener? Hvor blir karbonatomene fra fettet og sukkeret av? (Svar: Du puster dem ut som CO₂!)',
    accentColor: '#F59E0B',
  },
  {
    id: 'celle-4-elektron',
    stepNumber: 4,
    title: 'Trinn 3: Elektrontransportkjeden',
    shortLabel: 'Elektronkjede',
    subtitleTag: 'Oksygen er sluttmottaker og gir den store ATP-gevinsten',
    eraLabel: 'Indre mitokondriemembran',
    primaryBadge: '~26–28 ATP',
    secondaryBadge: 'O₂ + H⁺ + e⁻ → H₂O',
    competenceGoals: ['KM1'],
    summaryTitle: 'Protonpumpe og ATP-syntase',
    whatHappens:
      'I den indre membranen til mitokondriet leverer NADH og FADH₂ fra seg elektronene sine til en kjede av proteinkomplekser. Energien fra elektronene brukes til å pumpe H⁺-ioner (protoner) ut i mellomrommet, slik at det oppstår et trykk. Når H⁺ strømmer tilbake gjennom enzymturbinen ATP-syntase, lages ca. 26–28 ATP. Til slutt tar oksygen (O₂) imot elektronene og H⁺ og danner vann (H₂O).',
    classroomTest:
      'Tenk på et vannkraftverk: Elektronkjeden pumper vann (H⁺-ioner) opp i et magasin, og ATP-syntase er turbinen som snurrer og produserer strøm (ATP) når vannet renner tilbake!',
    keyTraits: [
      {
        icon: 'wind',
        title: 'Derfor trenger vi oksygen',
        description:
          'Uten O₂ på slutten av kjeden stopper hele trafikken av elektroner opp – akkurat som en trafikkork.',
      },
      {
        icon: 'zap',
        title: 'ATP-syntase – naturens minste turbin',
        description:
          'Roterer tusenvis av ganger i minuttet og smir ADP + P sammen til ATP.',
      },
    ],
    terms: ['Elektrontransportkjeden', 'Mitokondrie', 'ATP'],
    discussionQuestion:
      'Hvorfor er giftstoffet cyanid så dødelig på sekunder? (Det blokkerer siste ledd i elektrontransportkjeden så O₂ ikke kan ta imot elektroner.)',
    accentColor: '#A855F7',
  },
  {
    id: 'celle-5-regnskap',
    stepNumber: 5,
    title: 'Totalregnskap & fett/protein som brensel',
    shortLabel: 'Regnskap',
    subtitleTag: '30–32 ATP per glukose, og slik kobles fett og protein på',
    eraLabel: 'Helhetsbildet',
    primaryBadge: 'Totalt ~30–32 ATP',
    secondaryBadge: 'Glukose + Fett + Protein',
    competenceGoals: ['KM1'],
    summaryTitle: 'Fett gir enda mer ATP enn glukose',
    whatHappens:
      'Til sammen gir fullstendig aerob celleånding av ett glukosemolekyl ca. 30–32 ATP (2 fra glykolyse + 2 fra sitronsyresyklus + 26–28 fra elektrontransportkjeden). Men cellene kan også brenne fettsyrer og aminosyrer! Fettsyrer klippes opp til 2-karbonbiter (acetyl-CoA) og går rett inn i sitronsyresyklus – én lang fettsyre kan gi over 100 ATP.',
    classroomTest:
      'Sammenlign: Anaerob glykolyse gir bare 2 ATP per glukose, mens aerob celleånding gir ~30–32 ATP – altså rundt 15 ganger mer energi per sukkermolekyl!',
    keyTraits: [
      {
        icon: 'layers',
        title: '15x høyere utbytte med oksygen',
        description:
          'Aerob omsetning er langt mer drivstofføkonomisk enn anaerob.',
      },
      {
        icon: 'flame',
        title: 'Fett som langdistanse-drivstoff',
        description:
          'Fett trenger mer oksygen per ATP, men gir enorme energimengder til rolig aktivitet og hvile.',
      },
    ],
    terms: ['Celleånding', 'Aerob forbrenning', 'ATP'],
    discussionQuestion:
      'Hvorfor klarer vi ikke å spurte på maksfart ved bare å forbrenne fett?',
    accentColor: '#F43F5E',
  },
];

export const CELLEANDING_MAIN_STEP_IDS = CELLEANDING_NODES.map((n) => n.id);
export const CELLEANDING_NODE_MAP = Object.fromEntries(
  CELLEANDING_NODES.map((n) => [n.id, n]),
);
