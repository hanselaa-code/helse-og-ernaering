import type { HealthNodeData } from './types';

export const TRENING_NODES: HealthNodeData[] = [
  {
    id: 'tren-1-respons',
    stepNumber: 1,
    title: 'Kroppens respons på trening',
    shortLabel: 'Belastning',
    subtitleTag: 'Akutt stress som setter i gang tilpasning',
    eraLabel: 'Fase 1: Økten',
    primaryBadge: 'Puls & pust øker',
    secondaryBadge: 'Mikroskader & tømte lagre',
    traceBadge: 'KM1 + KM2: Trening',
    competenceGoals: ['KM1', 'KM2'],
    summaryTitle: 'Hva skjer i kroppen mens du trener?',
    whatHappens:
      'Når du trener, bryter du faktisk kroppen litt ned der og da: glykogenlagrene tappes, væske svettes ut, og muskelfibre får mikroskopiske rifter. Hjertet pumper raskere for å levere oksygen, og hormoner som adrenalin og veksthormon skilles ut. Denne midlertidige forstyrrelsen av kroppens likevekt er selve signalet som forteller cellene at de må bygge seg sterkere til neste gang.',
    classroomTest:
      'Mål hvilepulsen din i 15 sekunder (× 4) mens du sitter stille. Gjør 20 spensthopp og mål på nytt. Hvor mye steg pulsen på bare 30 sekunder?',
    keyTraits: [
      {
        icon: 'heart',
        title: 'Hjertefrekvens og slagvolum',
        description:
          'Hjertet øker både antall slag per minutt og mengden blod per slag for å øke O₂-leveransen.',
      },
      {
        icon: 'activity',
        title: 'Nedbrytning før oppbygging',
        description:
          'Selve prestasjonsnivået ditt er faktisk *lavere* rett etter en hard økt – fremgangen skjer i hvilefasen etterpå.',
      },
    ],
    terms: ['VO₂-maks', 'Restitusjon'],
    discussionQuestion:
      'Hvorfor blir man ikke sterkere eller raskere *under* selve treningsøkten, men *mellom* øktene?',
    accentColor: '#F43F5E',
  },
  {
    id: 'tren-2-superkompensasjon',
    stepNumber: 2,
    title: 'Superkompensasjon & restitusjon',
    shortLabel: 'Superkompensasjon',
    subtitleTag: 'Kunsten å trene hardt nok og hvile lenge nok',
    eraLabel: 'Fase 2–3: Hvile & topp',
    primaryBadge: 'Belastning + Hvile = Fremgang',
    secondaryBadge: 'For lite hvile = Overtrening',
    competenceGoals: ['KM1', 'KM2'],
    summaryTitle: 'Hvorfor kurven går opp etter hvile',
    whatHappens:
      'Etter trening trenger kroppen søvn, vann, karbohydrater og proteiner for å reparere muskelfibre og fylle opp glykogenlagrene. Hvis den får riktig restitusjon, stopper den ikke bare på det gamle nivået – den bygger seg litt høyere opp (superkompensasjon) for å tåle neste økt bedre. Trener du hardt igjen før kroppen har hentet seg inn, synker formen i stedet.',
    classroomTest:
      'Se for deg tre scenarioer: (1) Trener på toppen av superkompensasjonen → jevn fremgang. (2) Venter 2 uker → formen faller tilbake. (3) Trener hardt hver dag uten hvile → overbelastning.',
    keyTraits: [
      {
        icon: 'trending',
        title: 'Timingen mellom øktene',
        description:
          'Lettere økter krever ~24 t restitusjon; veldig harde styrke- eller intervalløkter kan kreve 48–72 t.',
      },
      {
        icon: 'utensils',
        title: 'Mat etter trening',
        description:
          'Karbohydrater fyller glykogenlagrene, mens proteiner gir aminosyrer til muskelreparasjon.',
      },
    ],
    terms: ['Superkompensasjon', 'Restitusjon', 'Essensiell aminosyre'],
    discussionQuestion:
      'Hva er faresignalene på at noen trener for mye og restituerer for lite?',
    accentColor: '#10B981',
  },
  {
    id: 'tren-3-utholdenhet',
    stepNumber: 3,
    title: 'Utholdenhetstrening & VO₂-maks',
    shortLabel: 'Utholdenhet',
    subtitleTag: 'Sterkere hjerte, flere kapillærer og flere mitokondrier',
    eraLabel: 'Aerob tilpasning',
    primaryBadge: 'Større slagvolum',
    secondaryBadge: 'Flere mitokondrier',
    competenceGoals: ['KM1'],
    summaryTitle: 'Hva skjer i kroppen etter måneder med kondisjonstrening?',
    whatHappens:
      'Regelmessig utholdenhetstrening (løping, sykling, ski, svømming, fotball) gir fantastiske tilpasninger: hjertemuskelen blir sterkere og pumper mer blod per slag (lavere hvilepuls!), det vokser ut flere bittesmå blodårer (kapillærer) rundt muskelfibrene, og inne i muskelcellene blir det både flere og større mitokondrier. Dermed øker ditt maksimale oksygenopptak (VO₂-maks).',
    classroomTest:
      'En utrent person har gjerne hvilepuls rundt 70–80 slag/min, mens en godt trent langrennsløper kan ha hvilepuls under 40 fordi hvert hjerteslag pumper så mye mer blod!',
    keyTraits: [
      {
        icon: 'heart',
        title: 'Hjertets slagvolum øker',
        description:
          'Mer blod og oksygen ut til musklene for hvert eneste hjerteslag.',
      },
      {
        icon: 'zap',
        title: 'Mitokondrie-tetthet i musklene',
        description:
          'Flere kraftverk i cellene betyr at du kan produsere mer aerob ATP og tåler høyere fart før melkesyren tar deg.',
      },
    ],
    terms: ['VO₂-maks', 'Mitokondrie', 'Aerob forbrenning'],
    discussionQuestion:
      'Hvorfor er god kondisjon (høy VO₂-maks) ikke bare viktig i idrett, men også en av de sterkeste faktorene for lang og god helse?',
    accentColor: '#38BDF8',
  },
  {
    id: 'tren-4-styrke',
    stepNumber: 4,
    title: 'Styrketrening, skjelett & muskler',
    shortLabel: 'Styrke',
    subtitleTag: 'Nevral tilpasning, muskelvekst og sterkere bein',
    eraLabel: 'Mekanisk belastning',
    primaryBadge: 'Sterkere muskler & sener',
    secondaryBadge: 'Økt beintetthet',
    competenceGoals: ['KM1', 'KM2'],
    summaryTitle: 'Fra bedre nervesignaler til større muskelfibre',
    whatHappens:
      'De første ukene med styrketrening blir du sterkere først og fremst fordi nervesystemet blir flinkere til å aktivere flere muskelfibre samtidig. Etter hvert øker også tverrsnittet av muskelfibrene (hypertrofi) fordi kroppen danner mer aktin og myosin. I tillegg stimulerer mekanisk belastning skjelettet til å lagre mer kalsium og bli tettere – utrolig viktig forebygging mot beinskjørhet senere i livet.',
    classroomTest:
      'Visste du at skjelettet bygges opp til sitt sterkeste nivå før du fyller 25–30 år? Styrke og hopp/løping i ungdomstiden er som å sette inn penger på «skjelett-kontoen»!',
    keyTraits: [
      {
        icon: 'dumbbell',
        title: 'Nervesystem + muskelfibre',
        description:
          'Først bedre teknikk og rekruttering av motoriske enheter, deretter økt muskelmasse.',
      },
      {
        icon: 'bone',
        title: 'Skjelett og bindevev',
        description:
          'Sener, leddbånd og knokler tilpasser seg gradvis belastning – derfor bør du øke vektene rolig over tid.',
      },
    ],
    terms: ['Essensiell aminosyre', 'Superkompensasjon'],
    discussionQuestion:
      'Hvorfor er teknikk og gradvis progresjon viktigere enn å løfte tyngst mulig når man begynner med styrketrening?',
    accentColor: '#F59E0B',
  },
  {
    id: 'tren-5-sovn',
    stepNumber: 5,
    title: 'Søvn, mental helse & balanse',
    shortLabel: 'Søvn & balanse',
    subtitleTag: 'Usynlig superkraft for prestasjon, konsentrasjon og humør',
    eraLabel: 'Helhetlig helse',
    primaryBadge: '8–9 t søvn for ungdom',
    secondaryBadge: 'Endorfiner & stressmestring',
    traceBadge: 'KM2: Livsstil',
    competenceGoals: ['KM2'],
    summaryTitle: 'Hvorfor trening og søvn påvirker psyken like mye som kroppen',
    whatHappens:
      'Under dyp søvn skilles mesteparten av kroppens veksthormon ut for å reparere vev, samtidig som hjernen rydder opp avfallsstoffer og fester det du har lært på skolen. Fysisk aktivitet senker stresshormonet kortisol over tid, frigjør endorfiner og serotonin, og gir bedre søvnkvalitet. Samtidig er det viktig med et sunt forhold til trening uten kroppspress.',
    classroomTest:
      'Forskning viser at ungdom som sover under 6 timer har betydelig høyere risiko for idrettsskader, dårligere reaksjonstid og svekket immunforsvar enn de som sover 8+ timer.',
    keyTraits: [
      {
        icon: 'moon',
        title: 'Søvn er gratis restitusjon',
        description:
          'Ingen kosttilskudd kan erstatte 8–9 timers god søvn for hormonbalanse, læring og muskeloppbygging.',
      },
      {
        icon: 'smile',
        title: 'Bevegelsesglede fremfor perfeksjon',
        description:
          'Litt hverdagsaktivitet hver dag (gå, sykle, leke, trene med venner) gir enorm helsegevinst.',
      },
    ],
    terms: ['Restitusjon', 'Superkompensasjon'],
    discussionQuestion:
      'Hvordan kan sosiale medier skape urealistisk kropps- og treningspress, og hva kan vi gjøre for å bevare treningsgleden?',
    accentColor: '#A855F7',
  },
];

export const TRENING_MAIN_STEP_IDS = TRENING_NODES.map((n) => n.id);
export const TRENING_NODE_MAP = Object.fromEntries(
  TRENING_NODES.map((n) => [n.id, n]),
);
