import type { HealthNodeData } from './types';

export const FORDOYELSEN_NODES: HealthNodeData[] = [
  {
    id: 'ford-1-munn',
    stepNumber: 1,
    title: 'Munnhulen & spyttkjertlene',
    shortLabel: 'Munnhule',
    subtitleTag: 'Mekanisk knusing og første enzymatiske klipp',
    eraLabel: 'Starten av kanalen',
    primaryBadge: 'pH ~6,8 (nøytral)',
    secondaryBadge: 'Enzym: Spyttamylase',
    traceBadge: 'KM1: Fordøyelse',
    competenceGoals: ['KM1'],
    summaryTitle: 'Tenner, tunge og spyttamylase',
    whatHappens:
      'Fordøyelsen starter allerede før maten når magen. Tennene knuser maten mekanisk slik at overflaten blir mye større for enzymene. Spyttkjertlene skiller ut spytt som fukter maten og inneholder enzymet amylase, som begynner å spalte lange stivelseskjeder til kortere sukkerarter (maltose).',
    classroomTest:
      'Hvorfor sier vi «tygg maten godt»? Jo mindre biter maten deles i, desto større overflate får enzymene å jobbe på i hele fordøyelseskanalen.',
    keyTraits: [
      {
        icon: 'utensils',
        title: 'Mekanisk nedbrytning',
        description:
          'Fortenner biter av, jeksler maler maten, og tungen former en svelgeklar «bolus».',
      },
      {
        icon: 'flask',
        title: 'Kjemisk nedbrytning av stivelse',
        description:
          'Spyttamylase klipper polysakkaridet stivelse til disakkarider.',
      },
      {
        icon: 'shield',
        title: 'Strupelokket beskytter luftveiene',
        description:
          'Når du svelger, legger strupelokket seg over luftrøret så maten går ned i spiserøret.',
      },
    ],
    terms: ['Amylase', 'Enzym', 'Polysakkarid'],
    discussionQuestion:
      'Hvorfor slutter spyttamylasen å virke så snart maten kommer ned i magesekken?',
    accentColor: '#F59E0B',
  },
  {
    id: 'ford-2-spiseror',
    stepNumber: 2,
    title: 'Spiserøret & peristaltikk',
    shortLabel: 'Spiserør',
    subtitleTag: 'Aktiv muskeltransport mot magesekken',
    eraLabel: 'Transport',
    primaryBadge: 'Ca. 25 cm langt',
    secondaryBadge: 'Peristaltiske bølger',
    competenceGoals: ['KM1'],
    summaryTitle: 'Ikke bare tyngdekraft – glatt muskulatur',
    whatHappens:
      'Maten faller ikke passivt ned i magen. Spiserøret består av ringer og lengdelag med glatt muskulatur som trekker seg sammen i koordinerte bølger bak matbiten – dette kalles peristaltikk. Nederst sitter en lukkemuskel (mavemunnen) som slipper maten inn i magesekken og hindrer sur magesaft i å komme opp igjen.',
    classroomTest:
      'Tankeeksperiment: En astronaut på den internasjonale romstasjonen (vektløs!) kan fortsatt spise og svelge helt fint takket være peristaltikken.',
    keyTraits: [
      {
        icon: 'activity',
        title: 'Uviljestyrt glatt muskulatur',
        description:
          'Når du først har svelget, overtar det autonome nervesystemet automatisk.',
      },
      {
        icon: 'lock',
        title: 'Lukkemuskelen mot sure oppstøt',
        description:
          'Hindre magesyre fra å skade slimhinnen i spiserøret (halsbrann oppstår hvis den lekker).',
      },
    ],
    terms: ['Peristaltikk'],
    discussionQuestion:
      'Hva ville skjedd med spiserøret hvis lukkemuskelen ned mot magesekken ikke klarte å lukke skikkelig?',
    accentColor: '#FB923C',
  },
  {
    id: 'ford-3-magesekk',
    stepNumber: 3,
    title: 'Magesekken & magesaften',
    shortLabel: 'Magesekk',
    subtitleTag: 'Syrebad, bakteriedrep og proteinnedbrytning',
    eraLabel: 'Sur fase',
    primaryBadge: 'pH 1,5–2,0 (saltsyre)',
    secondaryBadge: 'Enzym: Pepsin',
    competenceGoals: ['KM1'],
    summaryTitle: 'Elting, saltsyre (HCl) og pepsin',
    whatHappens:
      'Magesekken er en muskuløs sekk som elter maten i 2–4 timer til en tykk velling. Kjertler i veggen skiller ut saltsyre (HCl) som dreper de fleste bakterier og denaturerer (folder ut) proteiner. Syren aktiverer enzymet pepsin, som klipper store proteiner til kortere peptidkjeder. Et tykt slimlag beskytter magesekken mot å fordøye seg selv.',
    classroomTest:
      'Hvorfor etser ikke magesyren hull i magen? Epitelcellene produserer et beskyttende slimlag med bikarbonat som nøytraliserer syren helt inntil veggen.',
    keyTraits: [
      {
        icon: 'flask',
        title: 'Saltsyre (HCl) – pH 1,5–2',
        description:
          'Dreper mikroorganismer fra maten og bretter ut proteinene så enzymene kommer til.',
      },
      {
        icon: 'scissors',
        title: 'Pepsin spalter proteiner',
        description:
          'Trives best i ekstremt surt miljø og klipper lange proteinkjeder i mindre biter.',
      },
      {
        icon: 'shield',
        title: 'Beskyttende slimlag',
        description:
          'Hindre magesår og selvfordøyelse. Portnermuskelen slipper porsjoner videre til tolvfingertarmen.',
      },
    ],
    terms: ['Pepsin', 'Enzym'],
    discussionQuestion:
      'Hva skjer med fordøyelsen av proteiner hvis noen tar sterke syrenøytraliserende medisiner hele tiden?',
    accentColor: '#F43F5E',
  },
  {
    id: 'ford-lever',
    stepNumber: 4,
    title: 'Leveren & galleblæren',
    shortLabel: 'Lever & galle',
    subtitleTag: 'Kroppens kjemiske fabrikk, lager og rensestasjon',
    eraLabel: 'Stoffskifte & galle',
    primaryBadge: 'Over 500 funksjoner',
    secondaryBadge: 'Galle + avgiftning + lager',
    competenceGoals: ['KM1'],
    summaryTitle: 'Produksjon av galle, blodsukkerkontroll og avgiftning',
    whatHappens:
      'Leveren er kroppens største indre organ og mottar alt næringsrikt blod fra tarmen gjennom portvenen. Den produserer galle som lagres i galleblæren og sendes ut i tolvfingertarmen for å finfordele fett. I tillegg regulerer leveren blodsukkeret ved å lagre overflødig glukose som glykogen, bryter ned alkohol, medisiner og giftstoffer (avgiftning), omdanner ammoniakk til urea, lagrer jern og vitaminer (A, D, E, K, B12), og lager livsviktige blodproteiner.',
    classroomTest:
      'Hvorfor går blodet fra tynntarmen først til leveren via portvenen før det når resten av kroppen? Leveren fungerer som en tollstasjon som justerer næringsmengden og fjerner skadelige stoffer før blodet sendes ut i kretsløpet!',
    keyTraits: [
      {
        icon: 'droplets',
        title: 'Galleproduksjon (emulgerer fett)',
        description:
          'Gallesalter fra leveren deles ut via galleblæren til tolvfingertarmen og splitter store fettklumper til mikrodråper.',
      },
      {
        icon: 'activity',
        title: 'Blodsukker & glykogenlager',
        description:
          'Lagrer glukose som glykogen etter måltider og frigjør glukose til blodet mellom måltider og under trening.',
      },
      {
        icon: 'shield',
        title: 'Avgiftning & rensing av blodet',
        description:
          'Bryter ned alkohol, legemidler og avfallsstoffer, og omdanner giftig ammoniakk fra proteinnedbrytning til urea.',
      },
      {
        icon: 'layers',
        title: 'Lager for vitaminer, jern & proteiner',
        description:
          'Lagrer fettløselige vitaminer (A, D, E, K), B12 og jern, og produserer plasmaproteiner og koagulasjonsfaktorer.',
      },
    ],
    terms: ['Galle', 'Glykogen', 'Portvenen'],
    discussionQuestion:
      'Hva skjer med både fettfordøyelsen og blodsukkerreguleringen hvis leveren blir alvorlig skadet?',
    accentColor: '#10B981',
  },
  {
    id: 'ford-4-tolvfingertarm',
    stepNumber: 5,
    title: 'Tolvfingertarmen & bukspyttkjertelen',
    shortLabel: 'Tolvfingertarm',
    subtitleTag: 'Nøytralisering av syre og enzym-kraftpakke',
    eraLabel: 'Kjemisk hovedstasjon',
    primaryBadge: 'pH ~7,5–8,0 (svakt basisk)',
    secondaryBadge: 'Bikarbonat + Lipase + Trypsin',
    competenceGoals: ['KM1'],
    summaryTitle: 'Sur matvelling nøytraliseres og alle makronæringsstoffer spaltes',
    whatHappens:
      'Når den sure matvellingen kommer ut av magesekken inn i tolvfingertarmen (de første ca. 25 cm av tynntarmen), skiller bukspyttkjertelen ut bikarbonat som nøytraliserer magesyren, pluss enzymer for alle næringsstoffer: amylase (stivelse), trypsin (protein) og lipase (fett). Samtidig tømmes galle fra lever/galleblære hit for å emulgere fettet.',
    classroomTest:
      'Galle fungerer akkurat som oppvaskmiddel (Zalo) på fett i en stekepanne: det løser ikke fettet kjemisk, men deler store fettklumper i bittesmå dråper så lipase får stor angrepsflate!',
    keyTraits: [
      {
        icon: 'sparkles',
        title: 'Bikarbonat beskytter tarmen',
        description:
          'Hevder pH fra 2 til ca. 8, som er nødvendig for at tarmenzymene skal virke uten at tarmveggen etses.',
      },
      {
        icon: 'flask',
        title: 'Bukspyttkjertelens enzymer',
        description:
          'Lipase (fett → fettsyrer + glyserol), trypsin (protein → peptider) og amylase (stivelse → sukker).',
      },
      {
        icon: 'droplets',
        title: 'Møtepunkt for galle og bukspytt',
        description:
          'Fettet emulgeres av galle fra leveren rett før bukspyttkjertelens lipase klipper fettsyrene løs.',
      },
    ],
    terms: ['Galle', 'Enzym', 'Amylase'],
    discussionQuestion:
      'Hva skjer med fettfordøyelsen hvis galleblæren blir fjernet eller gallegangen blokkeres?',
    accentColor: '#10B981',
  },
  {
    id: 'ford-5-tynntarm',
    stepNumber: 6,
    title: 'Tynntarmen & tarmtottene',
    shortLabel: 'Tynntarm',
    subtitleTag: 'Enorm overflate for opptak til blod og lymfe',
    eraLabel: 'Opptak',
    primaryBadge: '5–6 meter lang',
    secondaryBadge: 'Overflate ~100–200 m²',
    competenceGoals: ['KM1'],
    summaryTitle: 'Monosakkarider, aminosyrer og fettsyrer tas opp',
    whatHappens:
      'I tynntarmen fullføres nedbrytningen til de minste byggesteinene: monosakkarider (glukose), aminosyrer, fettsyrer og glyserol. Tarmveggen er foldet i millioner av tarmtotter (villi) og mikrototter, som øker overflaten enormt. Glukose, aminosyrer, vannløselige vitaminer og mineraler går inn i blodårene, mens fettsyrer pakkes inn og går via lymfesystemet.',
    classroomTest:
      'Tenk deg et flatt rør vs. et frottéhåndkle: Tarmtottene gjør at tynntarmen har en sugeflate på størrelse med en liten leilighet eller en halv tennisbane!',
    keyTraits: [
      {
        icon: 'layers',
        title: 'Tarmtotter og mikrototter',
        description:
          'Tynn cellevegg (ett cellelag) og tett nettverk av kapillærer gir lynraskt opptak.',
      },
      {
        icon: 'heart',
        title: 'Blodbanen vs. lymfebanen',
        description:
          'Glukose og aminosyrer går via portvenen rett til leveren; store fettsyrer går via lymfen til blodet.',
      },
    ],
    terms: ['Tarmtotter', 'Monosakkarid', 'Essensiell aminosyre'],
    discussionQuestion:
      'Ved sykdommen cøliaki skades tarmtottene av gluten. Hvorfor fører det til slapphet, vekttap og jernmangel?',
    accentColor: '#38BDF8',
  },
  {
    id: 'ford-6-tykktarm',
    stepNumber: 7,
    title: 'Tykktarmen & tarmfloraen',
    shortLabel: 'Tykktarm',
    subtitleTag: 'Vannopptak, salter og milliarder av nyttige bakterier',
    eraLabel: 'Sluttfase',
    primaryBadge: 'Ca. 1,5 meter lang',
    secondaryBadge: 'Opptak av vann + vitamin K',
    competenceGoals: ['KM1'],
    summaryTitle: 'Resirkulering av vann og samarbeid med mikrobiomet',
    whatHappens:
      'Det som er igjen når maten når tykktarmen er mest vann, salter og ufordøyelig kostfiber. Tykktarmens hovedjobb er å suge tilbake vann og mineraler til blodet, slik at kroppen ikke tørker ut. Samtidig lever billioner av nyttige tarmbakterier (tarmflora/mikrobiom) av kostfiberen og produserer vitamin K, noen B-vitaminer og stoffer som styrker tarmveggen og immunforsvaret.',
    classroomTest:
      'Når du får diaré, passerer innholdet for raskt gjennom tykktarmen til at vannet rekker å bli sugd opp – derfor er væske og salt livsviktig ved omgangssyke.',
    keyTraits: [
      {
        icon: 'droplets',
        title: 'Vann- og saltbalanse',
        description:
          'Rundt 8–9 liter væske (mat, drikke og fordøyelsessafter) suges tilbake i løpet av et døgn.',
      },
      {
        icon: 'sparkles',
        title: 'Mikrobiomet (tarmfloraen)',
        description:
          'Fiberrik og variert plantekost gir mangfoldig tarmflora som beskytter mot sykdomsfremkallende bakterier.',
      },
    ],
    terms: ['Tarmflora (mikrobiom)', 'Kostfiber', 'Osmose'],
    discussionQuestion:
      'Hvordan kan en antibiotikakur påvirke tarmfloraen, og hva kan hjelpe den å komme seg igjen?',
    accentColor: '#22C55E',
  },
];

export const FORDOYELSEN_MAIN_STEP_IDS = FORDOYELSEN_NODES.map((n) => n.id);
export const FORDOYELSEN_NODE_MAP = Object.fromEntries(
  FORDOYELSEN_NODES.map((n) => [n.id, n]),
);
