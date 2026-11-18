import type { McqQuestionItem } from './types';

export const NAERINGSSTOFFER_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'naer-q1',
    question: 'Hvilke næringsstoffer gir kroppen energi (målt i kJ/kcal)?',
    options: [
      'Vitaminer, mineraler og vann',
      'Karbohydrater, proteiner og fett',
      'Kun karbohydrater og fett',
      'Kostfiber, vitamin C og jern',
    ],
    correctIndex: 1,
    explanation:
      'Karbohydrater (~17 kJ/g), proteiner (~17 kJ/g) og fett (~38 kJ/g) er de energigivende makronæringsstoffene.',
    relatedStepId: 'naer-1-oversikt',
  },
  {
    id: 'naer-q2',
    question: 'Hvorfor smaker en brødskive søtere hvis du tygger den lenge?',
    options: [
      'Tungen produserer glukose når du tygger',
      'Spyttamylasen bryter ned stivelse til kortere sukkerarter',
      'Magesyre kommer opp og løser opp kornet',
      'Kostfiber gjøres om til fruktose i munnen',
    ],
    correctIndex: 1,
    explanation:
      'Enzymet amylase i spyttet starter nedbrytningen av polysakkaridet stivelse til søtere disakkarider.',
    relatedStepId: 'naer-2-karbohydrater',
  },
  {
    id: 'naer-q3',
    question: 'Hva menes med at en aminosyre er «essensiell»?',
    options: [
      'At den kun finnes i dyrekjøtt',
      'At den gir dobbelt så mye energi som fett',
      'At kroppen ikke klarer å lage den selv, så vi må få den gjennom maten',
      'At den brukes som hoveddrivstoff i hjernen',
    ],
    correctIndex: 2,
    explanation:
      'Kroppen trenger 20 aminosyrer for å bygge proteiner. 9 av dem er essensielle og må tilføres via kosten.',
    relatedStepId: 'naer-3-proteiner',
  },
  {
    id: 'naer-q4',
    question: 'Hvilke vitaminer er fettløselige og kan lagres i lever og fettvev?',
    options: [
      'Vitamin B og C',
      'Vitamin A, D, E og K',
      'Kun vitamin C og D',
      'Jern, kalsium og jod',
    ],
    correctIndex: 1,
    explanation:
      'Vitamin A, D, E og K er fettløselige. Derfor tas de best opp sammen med litt fett i måltidet.',
    relatedStepId: 'naer-5-vitaminer',
  },
  {
    id: 'naer-q5',
    question: 'Hvilket mineral er avgjørende for at hemoglobin skal binde oksygen?',
    options: ['Kalsium (Ca)', 'Jern (Fe)', 'Natrium (Na)', 'Jod (I)'],
    correctIndex: 1,
    explanation:
      'Jern sitter i midten av hemoglobinmolekylet i de røde blodcellene og binder O₂ fra lungene.',
    relatedStepId: 'naer-6-mineraler',
  },
];

export const FORDOYELSEN_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'ford-q1',
    question: 'Hva kalles bølgebevegelsene som skyver maten ned spiserøret?',
    options: ['Osmose', 'Peristaltikk', 'Emulgering', 'Diffusjon'],
    correctIndex: 1,
    explanation:
      'Peristaltikk er koordinerte sammentrekninger i glatt muskulatur som fører maten videre uavhengig av tyngdekraften.',
    relatedStepId: 'ford-2-spiseror',
  },
  {
    id: 'ford-q2',
    question: 'Hva er hovedoppgaven til saltsyren (HCl) i magesekken?',
    options: [
      'Å bryte ned fett til glyserol',
      'Å drepe bakterier og aktivere enzymet pepsin',
      'Å ta opp glukose rett i blodet',
      'Å nøytralisere galle fra leveren',
    ],
    correctIndex: 1,
    explanation:
      'Den sure magesaften (pH 1,5–2) dreper mikroorganismer, folder ut proteiner og aktiverer pepsin.',
    relatedStepId: 'ford-3-magesekk',
  },
  {
    id: 'ford-q3',
    question: 'Hvilken funksjon har galle i tolvfingertarmen?',
    options: [
      'Den inneholder enzymet lipase',
      'Den finfordeler (emulgerer) fett til bittesmå dråper',
      'Den bryter ned kostfiber til glukose',
      'Den produserer vitamin D',
    ],
    correctIndex: 1,
    explanation:
      'Galle fra leveren inneholder ikke enzymer, men gallesalter som emulgerer fett slik at lipase fra bukspyttkjertelen får stor overflate å jobbe på.',
    relatedStepId: 'ford-4-tolvfingertarm',
  },
  {
    id: 'ford-q4',
    question: 'Hvor tas mesteparten av næringsstoffene opp i blodet?',
    options: [
      'I magesekken',
      'I spiserøret',
      'I tynntarmen via tarmtottene',
      'I tykktarmen',
    ],
    correctIndex: 2,
    explanation:
      'Tynntarmen har millioner av tarmtotter og mikrototter som gir en enorm overflate for opptak av glukose, aminosyrer og fettsyrer.',
    relatedStepId: 'ford-5-tynntarm',
  },
  {
    id: 'ford-q5',
    question: 'Hva er tykktarmens viktigste oppgave?',
    options: [
      'Å skille ut saltsyre og pepsin',
      'Å suge tilbake vann og salter, samt huse nyttige tarmbakterier',
      'Å produsere insulin',
      'Å spalte stivelse med amylase',
    ],
    correctIndex: 1,
    explanation:
      'Tykktarmen gjenvinner vann og elektrolytter slik at vi ikke dehydrerer, og tarmfloraen lager bl.a. vitamin K.',
    relatedStepId: 'ford-6-tykktarm',
  },
  {
    id: 'ford-q6',
    question: 'Hvilken av disse oppgavene utføres IKKE av leveren?',
    options: [
      'Produksjon av galle og lagring av glykogen',
      'Avgiftning av alkohol og medisiner',
      'Produksjon av saltsyre (HCl) til magesaften',
      'Lagring av jern og fettløselige vitaminer (A, D, E, K)',
    ],
    correctIndex: 2,
    explanation:
      'Saltsyre (HCl) lages i magesekkens kjertelceller. Leveren produserer galle, lagrer glykogen og vitaminer/jern, og renser blodet fra tarmen.',
    relatedStepId: 'ford-lever',
  },
];

export const CELLEANDING_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'celle-q1',
    question: 'Hva skjer når cellen bruker energi fra molekylet ATP?',
    options: [
      'ATP spaltes til ADP + P og frigjør brukbar energi',
      'ATP gjøres om direkte til glukose i blodet',
      'ATP pustes ut som CO₂ i lungene',
      'ATP omdannes til melkesyre i magesekken',
    ],
    correctIndex: 0,
    explanation:
      'ATP fungerer som cellens oppladbare batteri: når det ytterste fosfatet klippes av (ATP → ADP + P), frigjøres energi til celleprosesser.',
    relatedStepId: 'celle-1-atp',
  },
  {
    id: 'celle-q2',
    question: 'Hvor i cellen foregår glykolysen, og hvor mye ATP gir den netto?',
    options: [
      'I mitokondriet – ca. 32 ATP',
      'I cytoplasma uten O₂ – 2 netto ATP',
      'I cellekjernen – 106 ATP',
      'I tykktarmen – 0 ATP',
    ],
    correctIndex: 1,
    explanation:
      'Glykolysen foregår i cytoplasma, krever ikke oksygen, og deler glukose (6 C) i to pyruvat (3 C) med 2 netto ATP.',
    relatedStepId: 'celle-2-glykolyse',
  },
  {
    id: 'celle-q3',
    question: 'Omtrent hvor mye ATP dannes totalt per glukosemolekyl ved aerob celleånding (med O₂)?',
    options: [
      'Bare 2 ATP',
      'Ca. 8 ATP',
      'Ca. 30–32 ATP (2 + 2 + ~26–28)',
      'Over 200 ATP',
    ],
    correctIndex: 2,
    explanation:
      'Aerob celleånding gir 2 ATP i glykolysen, 2 ATP i sitronsyresyklus og ~26–28 ATP i elektrontransportkjeden – totalt ~30–32 ATP.',
    relatedStepId: 'celle-3-aerob',
  },
  {
    id: 'celle-q4',
    question: 'Når går muskelcellene over til anaerob celleånding, og hva dannes da?',
    options: [
      'Når du sover dypt – det dannes fett',
      'Når intensiteten er så høy at O₂ ikke strekker til – det dannes 2 ATP og melkesyre (laktat)',
      'Når du drikker mye vann – det dannes urea',
      'Når du spiser grønnsaker – det dannes stivelse',
    ],
    correctIndex: 1,
    explanation:
      'Ved spurt og svært høy intensitet trengs ATP raskere enn O₂-leveransen, så glykolysen kjører anaerobt (2 ATP) og danner laktat.',
    relatedStepId: 'celle-4-anaerob',
  },
  {
    id: 'celle-q5',
    question: 'Hva kjennetegner fettforbrenning (beta-oksidasjon) sammenlignet med karbohydrater?',
    options: [
      'Fett kan forbrennes anaerobt uten oksygen',
      'Fett krever alltid O₂, men gir rundt ~106 ATP per fettsyre',
      'Fett gir mindre energi per gram enn sukker',
      'Fett må først gjennom deaminering og danne urea',
    ],
    correctIndex: 1,
    explanation:
      'Fettsyrer klippes til acetyl-CoA i mitokondriet (kun aerobt) og gir svært mye ATP (~106 ATP for en 16-karbon fettsyre).',
    relatedStepId: 'celle-5-fett',
  },
  {
    id: 'celle-q6',
    question: 'Hva må skje med aminosyrer før de kan brukes til å lage ATP?',
    options: [
      'De må emulgeres av galle i magesekken',
      'Nitrogengruppen (NH₂) må fjernes ved deaminering og gjøres om til urea',
      'De gjøres om til melkesyre i cytoplasma',
      'De lagres som glykogen i fettvevet',
    ],
    correctIndex: 1,
    explanation:
      'Ved deaminering i leveren fjernes nitrogenet og skilles ut som urea i urinen, før karbonskjelettet brennes i celleåndingen.',
    relatedStepId: 'celle-6-protein',
  },
];

export const VAESKEBALANSE_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'vaesk-q1',
    question: 'Hvor stor andel av kroppsvekten hos en voksen består omtrent av vann?',
    options: ['Ca. 15 %', 'Ca. 35 %', 'Ca. 60 %', 'Ca. 90 %'],
    correctIndex: 2,
    explanation:
      'Rundt 60 % av kroppsvekten er vann, og allerede 1–2 % væsketap merkes på konsentrasjon og fysisk prestasjon.',
    relatedStepId: 'vaesk-1-vann',
  },
  {
    id: 'vaesk-q2',
    question: 'Hvordan kjøler svette ned kroppen når du trener?',
    options: [
      'Selve vannet er kaldere enn huden',
      'Når svetten fordamper fra huden, trekker den med seg varmeenergi',
      'Svette blokkerer blodet fra å nå huden',
      'Svette inneholder enzymer som stopper celleåndingen',
    ],
    correctIndex: 1,
    explanation:
      'Fordamping av væske krever varmeenergi, som hentes fra huden og blodet rett under huden.',
    relatedStepId: 'vaesk-2-termo',
  },
  {
    id: 'vaesk-q3',
    question: 'Hva styrer osmosen av vann inn og ut av kroppens celler?',
    options: [
      'Forskjellen i konsentrasjon av oppløste salter/stoffer (elektrolytter)',
      'Mengden kostfiber i blodet',
      'Antall røde blodceller i lungene',
      'Hvor fort du puster ut CO₂',
    ],
    correctIndex: 0,
    explanation:
      'Ved osmose beveger vann seg gjennom cellemembranen fra lav til høy konsentrasjon av oppløste stoffer.',
    relatedStepId: 'vaesk-3-elektrolytter',
  },
  {
    id: 'vaesk-q4',
    question: 'Når har man vanligvis behov for sportsdrikke med salter i stedet for bare vann?',
    options: [
      'På en 20 minutters rolig gåtur',
      'Ved hard og langvarig trening over 60–90 minutter med mye svetting',
      'Til hvert eneste måltid på skolen',
      'Kun når man sitter foran PC-en',
    ],
    correctIndex: 1,
    explanation:
      'Under økter under én time holder vanlig vann. Ved langvarig hard trening i varme er salter og karbohydrat nyttig.',
    relatedStepId: 'vaesk-3-elektrolytter',
  },
];

export const TRENING_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'tren-q1',
    question: 'Hva menes med «superkompensasjon» i treningslære?',
    options: [
      'At man spiser dobbelt så mye protein etter trening',
      'At kroppen etter belastning og riktig hvile bygger seg opp til et høyere nivå enn før økten',
      'At pulsen blir høyere for hver uke du trener',
      'At du trener hardt hver eneste dag uten hvile',
    ],
    correctIndex: 1,
    explanation:
      'Superkompensasjon er kroppens overkompensering i restitusjonsfasen, som gir fremgang over tid.',
    relatedStepId: 'tren-2-superkompensasjon',
  },
  {
    id: 'tren-q2',
    question: 'Hva skjer med hjertet og muskelcellene etter flere måneder med utholdenhetstrening?',
    options: [
      'Hjertets slagvolum øker og musklene får flere mitokondrier og kapillærer',
      'Hvilepulsen øker kraftig',
      'Antall mitokondrier halveres',
      'Blodet slutter å frakte oksygen',
    ],
    correctIndex: 0,
    explanation:
      'Bedre slagvolum, flere kapillærer og flere mitokondrier øker VO₂-maks og gjør at hjertet kan slå roligere i hvile.',
    relatedStepId: 'tren-3-utholdenhet',
  },
  {
    id: 'tren-q3',
    question: 'Hvorfor blir man ofte merkbart sterkere allerede de første 2–3 ukene med styrketrening?',
    options: [
      'Skjelettet dobles i tykkelse på to uker',
      'Nervesystemet blir flinkere til å aktivere flere muskelfibre samtidig',
      'Man får dobbelt så mange mitokondrier på én dag',
      'Blodet blir tykkere',
    ],
    correctIndex: 1,
    explanation:
      'Tidlig styrkeøkning skyldes først og fremst nevral tilpasning (bedre rekruttering og koordinering), før muskelvolumet øker.',
    relatedStepId: 'tren-4-styrke',
  },
  {
    id: 'tren-q4',
    question: 'Hvorfor er 8–9 timer søvn så viktig for en ungdom som trener?',
    options: [
      'Fordi veksthormon skilles ut i dyp søvn og reparerer vev og hjerne',
      'Fordi man ikke bruker noe oksygen når man sover',
      'Fordi celleåndingen stopper helt om natten',
      'Fordi man bare trenger vann hvis man sover lite',
    ],
    correctIndex: 0,
    explanation:
      'Dyp søvn er kroppens viktigste restitusjonsfase for hormonbalanse, muskelreparasjon, immunforsvar og hukommelse.',
    relatedStepId: 'tren-5-sovn',
  },
  {
    id: 'tren-q5',
    question: 'Hva skjer hvis du trener hardt hele tiden uten å gi kroppen nok hvile og mat?',
    options: [
      'Formen stiger uendelig raskt',
      'Du risikerer overbelastning, skader og fallende prestasjon',
      'VO₂-maks dobles på en uke',
      'Du trenger ikke lenger proteiner',
    ],
    correctIndex: 1,
    explanation:
      'Uten restitusjon rekker ikke kroppen å bygge seg opp igjen mellom øktene, og prestasjonen synker.',
    relatedStepId: 'tren-2-superkompensasjon',
  },
];

export const KOSTHOLD_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'kost-q1',
    question: 'Hva utgjør vanligvis den største delen (60–70 %) av kroppens daglige energiforbruk?',
    options: [
      'En 30-minutters joggetur',
      'Hvileforbrenningen (BMR) – hjerte, hjerne, pust og kroppstemperatur',
      'Å tygge maten',
      'Svetting om sommeren',
    ],
    correctIndex: 1,
    explanation:
      'Hvileforbrenningen (BMR) holder alle livsviktige organer i gang døgnet rundt og står for mesteparten av energiforbruket.',
    relatedStepId: 'kost-1-energibalanse',
  },
  {
    id: 'kost-q2',
    question: 'Hvordan bør en vanlig middagstallerken fordeles etter tallerkenmodellen?',
    options: [
      '90 % kjøtt og 10 % saus',
      'Ca. 1/3–1/2 grønnsaker, 1/3 grove karbohydrater og 1/3 proteinrik mat',
      'Bare karbohydrater og sukker',
      'Halvparten smør og halvparten potetgull',
    ],
    correctIndex: 1,
    explanation:
      'Tallerkenmodellen sikrer god balanse av fiber, vitaminer, langsomme karbohydrater og proteiner.',
    relatedStepId: 'kost-2-tallerken',
  },
  {
    id: 'kost-q3',
    question: 'Hvorfor anbefaler kostrådene et variert kosthold fremfor å satse på én «supermatvare»?',
    options: [
      'Fordi ingen enkelt matvare inneholder alle livsviktige næringsstoffer i riktig mengde',
      'Fordi grønnsaker inneholder for mye protein',
      'Fordi kroppen bare kan fordøye én matvare per uke',
      'Fordi vitamin C bare virker hvis du spiser godteri',
    ],
    correctIndex: 0,
    explanation:
      'Ulike matvaregrupper bidrar med ulike vitaminer, mineraler, fettsyrer og aminosyrer som utfyller hverandre.',
    relatedStepId: 'kost-4-variasjon',
  },
  {
    id: 'kost-q4',
    question: 'Hvilken matvaregruppe har generelt høyest klimaavtrykk (kg CO₂e per kg mat)?',
    options: [
      'Linser, bønner og korn',
      'Poteter og rotgrønnsaker',
      'Rødt kjøtt fra drøvtyggere (storfe og sau)',
      'Sild og makrell',
    ],
    correctIndex: 2,
    explanation:
      'Drøvtyggere slipper ut metan og krever mye fôr og areal, noe som gir langt høyere CO₂e-utslipp enn plantekost og fisk.',
    relatedStepId: 'kost-5-baerekraft',
  },
  {
    id: 'kost-q5',
    question: 'Hva er ett av de enkleste og mest effektive klimatiltakene knyttet til mat i hverdagen?',
    options: [
      'Å slutte å drikke vann',
      'Å redusere matsvinn ved å planlegge innkjøp og spise opp rester',
      'Å bare spise importerte eksotiske bær fløyet inn med fly',
      'Å kaste grønnsaker som har en liten skjønnhetsfeil',
    ],
    correctIndex: 1,
    explanation:
      'Rundt en tredjedel av all mat globalt blir kastet. Mindre matsvinn sparer både klima, areal og penger.',
    relatedStepId: 'kost-5-baerekraft',
  },
];

export const KILDEKRITIKK_MCQ_QUESTIONS: McqQuestionItem[] = [
  {
    id: 'kilde-q1',
    question: 'Hva står bokstavene i TONE-prinsippet for?',
    options: [
      'Trening, Oksygen, Næring, Energi',
      'Troverdighet, Objektivitet, Nøyaktighet, Egnethet',
      'Tid, Overflate, Nytte, Effekt',
      'Tekst, Ord, Nettsted, Erfaring',
    ],
    correctIndex: 1,
    explanation:
      'TONE hjelper deg å sjekke hvem som står bak, om de har agenda/interessekonflikt, om fakta er etterprøvbare, og om det passer for deg.',
    relatedStepId: 'kilde-2-tone',
  },
  {
    id: 'kilde-q2',
    question: 'Hva ligger øverst i evidenshierarkiet (sterkest vitenskapelig dokumentasjon)?',
    options: [
      'En personlig historie på TikTok',
      'En celle-studie i reagensrør',
      'Systematiske kunnskapsoppsummeringer (metaanalyser) av fagfellevurderte studier',
      'En reklamebrosjyre fra en kosttilskuddsbutikk',
    ],
    correctIndex: 2,
    explanation:
      'Metaanalyser samler resultater fra mange gode studier og gir det mest pålitelige bildet av forskningen.',
    relatedStepId: 'kilde-3-evidens',
  },
  {
    id: 'kilde-q3',
    question: 'Hva betyr det at en forskningsartikkel er «fagfellevurdert» (peer reviewed)?',
    options: [
      'At den har fått mange likes på Instagram',
      'At uavhengige eksperter på feltet har kontrollert metode og resultater før publisering',
      'At en journalist har skrevet en tabloidoverskrift om den',
      'At produsenten av produktet har godkjent teksten',
    ],
    correctIndex: 1,
    explanation:
      'Fagfellevurdering er vitenskapens viktigste kvalitetskontroll før ny forskning publiseres.',
    relatedStepId: 'kilde-3-evidens',
  },
  {
    id: 'kilde-q4',
    question: 'Hvilket «rødt flagg» bør gjøre deg ekstra skeptisk til et kostholdsråd på nett?',
    options: [
      'At artikkelen viser til Helsedirektoratet og NNR',
      'At den lover «mirakelkurer», bruker skremselsord og samtidig selger et dyrt tilskudd',
      'At den sier at forskningen fortsatt er usikker på noen punkter',
      'At den anbefaler variert kosthold og vanlig fysisk aktivitet',
    ],
    correctIndex: 1,
    explanation:
      'Kombinasjonen av sterke følelser/frykt, absolutte løfter og salg av egne produkter er et klassisk tegn på interessekonflikt.',
    relatedStepId: 'kilde-4-interesser',
  },
  {
    id: 'kilde-q5',
    question: 'Hvorfor betyr ikke «korrelasjon» det samme som «årsakssammenheng»?',
    options: [
      'Fordi to ting kan skje samtidig uten at den ene forårsaker den andre',
      'Fordi statistikk aldri kan brukes i helseforskning',
      'Fordi alle studier er sponset',
      'Fordi kroppen ikke følger naturlover',
    ],
    correctIndex: 0,
    explanation:
      'En tredje faktor (konfunderende variabel) kan forklare begge deler – f.eks. at folk med god råd både trener mer og drikker dyrere kaffe.',
    relatedStepId: 'kilde-1-myter',
  },
];
