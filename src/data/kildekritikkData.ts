import type { HealthNodeData } from './types';

export const KILDEKRITIKK_NODES: HealthNodeData[] = [
  {
    id: 'kilde-1-myter',
    stepNumber: 1,
    title: 'Hvorfor florerer helse- og kostholdsmyter?',
    shortLabel: 'Myter & trender',
    subtitleTag: 'TikTok, tabloidoverskrifter og raske løsninger',
    eraLabel: 'Medievirkelighet',
    primaryBadge: 'Algoritmer belønner sjokk',
    secondaryBadge: 'Forskning er nyansert',
    traceBadge: 'KM2: Kildekritikk',
    competenceGoals: ['KM2'],
    summaryTitle: 'Enkle løgnaktige svar vs. nyansert vitenskap',
    whatHappens:
      'Hver dag møter vi påstander som «Denne ene matvaren smelter magefett!», «Melk er giftig!» eller «Kutt alle karbohydrater!». Grunnen er at sosiale medier og klikkoverskrifter belønner sterke følelser, frykt og enkle «mirakelkurer», mens ekte ernæringsforskning er nyansert og sjelden gir dramatiske overskrifter.',
    classroomTest:
      'Tenk tilbake på siste uke: Hvilken helse- eller treningspåstand har du sett på TikTok, Instagram eller YouTube? Virket den for god eller for dramatisk til å være sann?',
    keyTraits: [
      {
        icon: 'alert',
        title: 'Enkeltstudier blåses opp',
        description:
          'En liten muse-studie eller en studie på 12 personer blir ofte presentert i media som «Forskere slår fast at...».',
      },
      {
        icon: 'search',
        title: 'Korrelasjon ≠ Årsakssammenheng',
        description:
          'At to ting skjer samtidig (f.eks. at folk som drikker mye kaffe også lever lenger) betyr ikke automatisk at kaffen alene er årsaken.',
      },
    ],
    terms: ['TONE-prinsippet', 'Evidenshierarkiet'],
    discussionQuestion:
      'Hvorfor er det lettere å bli overbevist av én personlig historie («Dette fungerte for meg!») enn av en stor forskningsrapport?',
    accentColor: '#A855F7',
  },
  {
    id: 'kilde-2-tone',
    stepNumber: 2,
    title: 'TONE-prinsippet i praksis',
    shortLabel: 'TONE-sjekk',
    subtitleTag: 'Fire konkrete spørsmål til enhver helsekilde',
    eraLabel: 'Verktøy',
    primaryBadge: 'Troverdighet • Objektivitet',
    secondaryBadge: 'Nøyaktighet • Egnethet',
    competenceGoals: ['KM2'],
    summaryTitle: 'Slik tester du en artikkel, video eller nettside',
    whatHappens:
      'TONE-prinsippet er en praktisk huskeliste for kildekritikk: T (Troverdighet): Hvem står bak, og har de faglig kompetanse? O (Objektivitet): Prøver de å informere nøytralt, eller selger de noe / har en sterk agenda? N (Nøyaktighet): Viser de til konkrete, etterprøvbare kilder og studier, og når ble det publisert? E (Egnethet): Passer rådet for deg (f.eks. frisk ungdom vs. eldre pasient)?',
    classroomTest:
      'Test to kilder side om side: Helsenorge.no / NHI.no mot en tilfeldig blogg som selger «detox-te». Hvordan scorer de på T, O, N og E?',
    keyTraits: [
      {
        icon: 'shield',
        title: 'T & O: Avsender og motiv',
        description:
          'Er det en offentlig helsetjeneste/universitet, eller en nettbutikk som tjener penger på at du blir usikker?',
      },
      {
        icon: 'book',
        title: 'N & E: Kilder og målgruppe',
        description:
          'Lenkes det til fagfellevurderte studier, eller bare til andre blogger?',
      },
    ],
    terms: ['TONE-prinsippet', 'Fagfellevurdert', 'Interessekonflikt'],
    discussionQuestion:
      'Hvilken av de fire bokstavene i TONE synes du oftest avslører dårlige helseråd på nett?',
    accentColor: '#38BDF8',
  },
  {
    id: 'kilde-3-evidens',
    stepNumber: 3,
    title: 'Evidenshierarkiet & fagfellevurdering',
    shortLabel: 'Evidens',
    subtitleTag: 'Ikke all forskning veier like tungt',
    eraLabel: 'Vitenskapelig metode',
    primaryBadge: 'Anekdote < RCT < Metaanalyse',
    secondaryBadge: 'Fagfellevurdering',
    competenceGoals: ['KM2'],
    summaryTitle: 'Fra personlige historier til systematiske kunnskapsoppsummeringer',
    whatHappens:
      'I vitenskapen rangerer vi dokumentasjon i et evidenshierarki. Nederst står personlige erfaringer (anekdoter) og celle-/dyrestudier (som ikke alltid gjelder mennesker). Høyere oppe står randomiserte kontrollerte studier (RCT), der én gruppe får behandling og én får placebo/kontroll. Aller øverst står systematiske kunnskapsoppsummeringer (metaanalyser), som samler resultatene fra dusinvis av fagfellevurderte studier.',
    classroomTest:
      'Hvorfor bygger kostrådene på kunnskapsoppsummeringer og ikke én enkelt studie? Fordi én studie kan ha tilfeldige feil, mens 50 studier sammenlagt viser det ekte mønsteret!',
    keyTraits: [
      {
        icon: 'layers',
        title: 'Kontrollgruppe og placebo',
        description:
          'Uten en kontrollgruppe vet man ikke om folk ble bedre av tilskuddet eller av forventning og tid.',
      },
      {
        icon: 'check',
        title: 'Fagfellevurdering (peer review)',
        description:
          'Uavhengige forskere gransker metode og tall før en artikkel får trykkes i et anerkjent tidsskrift.',
      },
    ],
    terms: ['Evidenshierarkiet', 'Fagfellevurdert'],
    discussionQuestion:
      'Hvis en forsker sier «vi kan ikke være 100 % sikre ennå, men mye tyder på...», er det et tegn på svakhet eller vitenskapelig redelighet?',
    accentColor: '#10B981',
  },
  {
    id: 'kilde-4-interesser',
    stepNumber: 4,
    title: 'Interessekonflikter & kommersiell påvirkning',
    shortLabel: 'Interesser',
    subtitleTag: 'Følg pengene bak kosttilskudd, dietter og reklame',
    eraLabel: 'Kritisk blikk',
    primaryBadge: 'Sponset innhold',
    secondaryBadge: 'Kosttilskudd-industrien',
    competenceGoals: ['KM2'],
    summaryTitle: 'Når råd egentlig er forkledd markedsføring',
    whatHappens:
      'Kosttilskudd, energidrikker og slankeprodukter er milliardindustrier. Når en influenser med millioner av følgere anbefaler et «magisk» pulver eller et nytt treningstilskudd, kan det ligge betalt samarbeid eller rabattkoder bak. Selv i forskning må forskere alltid oppgi interessekonflikter – for eksempel hvis en studie om sjokolade er betalt av en sjokoladeprodusent.',
    classroomTest:
      'Rødt flagg-jakt: «Kjøp mitt program nå!», «Det legene ikke vil at du skal vite!», eller «100 % dokumentert» uten én eneste lenke til studie.',
    keyTraits: [
      {
        icon: 'alert',
        title: 'Røde flagg i markedsføring',
        description:
          'Skremselspropaganda om vanlig mat kombinert med salg av dyre piller eller pulver.',
      },
      {
        icon: 'eye',
        title: 'Skjult og åpen reklame',
        description:
          'Se alltid etter merking som «Annonse» eller «Betalt samarbeid» – og tenk over hvem som tjener på budskapet.',
      },
    ],
    terms: ['Interessekonflikt', 'TONE-prinsippet'],
    discussionQuestion:
      'Kan et råd fra en influenser som tjener penger på produktet fortsatt være riktig – og hvordan sjekker du det?',
    accentColor: '#F43F5E',
  },
  {
    id: 'kilde-5-sjekkliste',
    stepNumber: 5,
    title: 'Sjekkliste for pålitelige kostholdsråd',
    shortLabel: 'Sjekkliste',
    subtitleTag: 'Slik navigerer du trygt i helsejungelen',
    eraLabel: 'Oppsummering',
    primaryBadge: 'Helsenorge • FHI • NNR',
    secondaryBadge: 'Faglig konsensus',
    competenceGoals: ['KM1', 'KM2'],
    summaryTitle: 'Fem tommelfingerregler før du deler eller følger et råd',
    whatHappens:
      'Når du møter et nytt kostholds- eller helseråd: (1) Sjekk om påstanden støttes av bred faglig enighet (som Helsenorge, FHI, Matportalen eller Nordiske ernæringsanbefalinger). (2) Se etter interessekonflikter. (3) Vær skeptisk til absolutte ord som «alltid», «aldri», «gift» eller «mirakelkur». (4) Sjekk om det vises til menneskestudier av god kvalitet. (5) Husk at ekstremt strenge dietter sjelden trengs for friske ungdommer.',
    classroomTest:
      'Klasseromsoppgave: Velg én aktuell helsedebatt (f.eks. energidrikk for ungdom, ultraprosessert mat, proteinpulver eller lavkarbo) og drøft argumenter fra ulike kilder!',
    keyTraits: [
      {
        icon: 'check',
        title: 'Pålitelige norske kilder',
        description:
          'Helsenorge.no, Helsedirektoratet, Folkehelseinstituttet (FHI), NHI.no og Matportalen.no.',
      },
      {
        icon: 'shield',
        title: 'Sunn skepsis – ikke kynisme',
        description:
          'Målet med kildekritikk er ikke å tro at alt er løgn, men å vite hvem og hva du kan stole på.',
      },
    ],
    terms: ['TONE-prinsippet', 'Evidenshierarkiet', 'Fagfellevurdert'],
    discussionQuestion:
      'Hva er et aktuelt helse- eller livsstilsspørsmål i din egen hverdag som det er viktig å ha pålitelig kunnskap om?',
    accentColor: '#22C55E',
  },
];

export const KILDEKRITIKK_MAIN_STEP_IDS = KILDEKRITIKK_NODES.map((n) => n.id);
export const KILDEKRITIKK_NODE_MAP = Object.fromEntries(
  KILDEKRITIKK_NODES.map((n) => [n.id, n]),
);
