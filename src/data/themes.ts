import {
  CELLEANDING_MAIN_STEP_IDS,
  CELLEANDING_NODE_MAP,
  CELLEANDING_NODES,
} from './celleandingData';
import {
  FORDOYELSEN_MAIN_STEP_IDS,
  FORDOYELSEN_NODE_MAP,
  FORDOYELSEN_NODES,
} from './fordoyelsenData';
import {
  KILDEKRITIKK_MAIN_STEP_IDS,
  KILDEKRITIKK_NODE_MAP,
  KILDEKRITIKK_NODES,
} from './kildekritikkData';
import {
  KOSTHOLD_MAIN_STEP_IDS,
  KOSTHOLD_NODE_MAP,
  KOSTHOLD_NODES,
} from './kostholdData';
import {
  CELLEANDING_MCQ_QUESTIONS,
  FORDOYELSEN_MCQ_QUESTIONS,
  KILDEKRITIKK_MCQ_QUESTIONS,
  KOSTHOLD_MCQ_QUESTIONS,
  NAERINGSSTOFFER_MCQ_QUESTIONS,
  TRENING_MCQ_QUESTIONS,
  VAESKEBALANSE_MCQ_QUESTIONS,
} from './mcqQuestionsData';
import {
  NAERINGSSTOFFER_MAIN_STEP_IDS,
  NAERINGSSTOFFER_NODE_MAP,
  NAERINGSSTOFFER_NODES,
} from './naeringsstofferData';
import {
  TRENING_MAIN_STEP_IDS,
  TRENING_NODE_MAP,
  TRENING_NODES,
} from './treningData';
import type { AppView, ThemeConfig, ThemeId } from './types';
import {
  VAESKEBALANSE_MAIN_STEP_IDS,
  VAESKEBALANSE_NODE_MAP,
  VAESKEBALANSE_NODES,
} from './vaeskebalanseData';

export const THEMES: Record<ThemeId, ThemeConfig> = {
  naeringsstoffer: {
    id: 'naeringsstoffer',
    hash: '#naeringsstoffer',
    title: 'Næringsstoffene – Kroppens drivstoff & byggesteiner',
    dropdownTitle: '1. Næringsstoffene',
    dropdownBadge: 'Makro & mikro • 6 steg',
    dropdownDescription:
      'Karbohydrater, proteiner, fett, vitaminer, mineraler og kostfiber – hva de er bygget av og hvilke funksjoner de har i kroppen.',
    subtitle:
      'Karbohydrater, proteiner, fett, vitaminer & mineraler (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele oversikten',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Næringsstoffene',
    backFromQuizLabel: 'Tilbake til næringsstoffene',
    summaryHeadingPrefix: 'Funksjon i kroppen',
    traitsHeading: 'Viktige egenskaper og eksempler',
    classroomBoxHeading: 'Klasseromstest & tankeeksperiment',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    competenceGoals: ['KM1'],
    accentHex: '#10B981',
    mainStepIds: NAERINGSSTOFFER_MAIN_STEP_IDS,
    allNodes: NAERINGSSTOFFER_NODES,
    nodeMap: NAERINGSSTOFFER_NODE_MAP,
    mcqQuestions: NAERINGSSTOFFER_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Makro & mikro', idx: 0 },
      { label: 'Steg 2: Karbohydrater & fiber', idx: 1 },
      { label: 'Steg 3: Proteiner', idx: 2 },
      { label: 'Steg 4: Fett', idx: 3 },
      { label: 'Steg 5–6: Vitaminer & mineraler', idx: 4 },
    ],
  },
  fordoyelsen: {
    id: 'fordoyelsen',
    hash: '#fordoyelsen',
    title: 'Fordøyelsen – Fra matbit til næring i blodet',
    dropdownTitle: '2. Fordøyelsen',
    dropdownBadge: 'Fordøyelseskanalen • 6 steg',
    dropdownDescription:
      'Følg maten gjennom munnhule, spiserør, magesekk, tolvfingertarm, tynntarm og tykktarm – med enzymer, galle og tarmtotter.',
    subtitle: 'Mekanisk og kjemisk nedbrytning, enzymer og opptak (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele fordøyelseskanalen',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Fordøyelsen',
    backFromQuizLabel: 'Tilbake til fordøyelsen',
    summaryHeadingPrefix: 'Hva skjer i dette organet?',
    traitsHeading: 'Enzymer, pH og mekanismer',
    classroomBoxHeading: 'Klasseromstest & tankeeksperiment',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    competenceGoals: ['KM1'],
    accentHex: '#F59E0B',
    mainStepIds: FORDOYELSEN_MAIN_STEP_IDS,
    allNodes: FORDOYELSEN_NODES,
    nodeMap: FORDOYELSEN_NODE_MAP,
    mcqQuestions: FORDOYELSEN_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Munnhule & amylase', idx: 0 },
      { label: 'Steg 3: Magesekk & pepsin', idx: 2 },
      { label: 'Steg 4: Tolvfingertarm & galle', idx: 3 },
      { label: 'Steg 5: Tynntarm & tarmtotter', idx: 4 },
      { label: 'Steg 6: Tykktarm & tarmflora', idx: 5 },
    ],
  },
  celleanding: {
    id: 'celleanding',
    hash: '#celleanding',
    title: 'Omsetning & celleånding – Cellens energifabrikk',
    dropdownTitle: '3. Omsetning & celleånding',
    dropdownBadge: 'Mitokondrie & ATP • 5 steg',
    dropdownDescription:
      'Hvordan cellene frigjør energi fra glukose og oksygen gjennom glykolyse, sitronsyresyklus og elektrontransportkjeden.',
    subtitle: 'Glykolyse, sitronsyresyklus, elektrontransport & ATP (Vg1 Naturfag)',
    stepWord: 'Trinn',
    showAllLabel: 'Vis hele prosessen',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Omsetning & celleånding',
    backFromQuizLabel: 'Tilbake til celleånding',
    summaryHeadingPrefix: 'Biokjemi i cellen',
    traitsHeading: 'Reaksjoner og energiutbytte',
    classroomBoxHeading: 'Klasseromstest & analogi',
    examplesHeading: 'Nøkkelbegreper på dette trinnet',
    competenceGoals: ['KM1'],
    accentHex: '#38BDF8',
    mainStepIds: CELLEANDING_MAIN_STEP_IDS,
    allNodes: CELLEANDING_NODES,
    nodeMap: CELLEANDING_NODE_MAP,
    mcqQuestions: CELLEANDING_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Trinn 1: Celleånding & ATP', idx: 0 },
      { label: 'Trinn 2: Glykolyse', idx: 1 },
      { label: 'Trinn 3: Sitronsyresyklus', idx: 2 },
      { label: 'Trinn 4: Elektrontransportkjeden', idx: 3 },
      { label: 'Trinn 5: Totalregnskap', idx: 4 },
    ],
  },
  vaeskebalanse: {
    id: 'vaeskebalanse',
    hash: '#vaeskebalanse',
    title: 'Væskebalanse, aerob & anaerob forbrenning',
    dropdownTitle: '4. Væskebalanse, aerob & anaerob',
    dropdownBadge: 'Vann, O₂ & laktat • 5 steg',
    dropdownDescription:
      'Vann, termoregulering, elektrolytter og osmose – samt forskjellen på aerob og anaerob energifrigjøring ved ulik intensitet.',
    subtitle:
      'Væskebalanse, svette, elektrolytter og aerob vs. anaerob (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele oversikten',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Væskebalanse, aerob & anaerob',
    backFromQuizLabel: 'Tilbake til væskebalanse',
    summaryHeadingPrefix: 'Fysiologi & balanse',
    traitsHeading: 'Mekanismer og nøkkelpunkter',
    classroomBoxHeading: 'Klasseromstest & tommelfingerregel',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    competenceGoals: ['KM1', 'KM2'],
    accentHex: '#06B6D4',
    mainStepIds: VAESKEBALANSE_MAIN_STEP_IDS,
    allNodes: VAESKEBALANSE_NODES,
    nodeMap: VAESKEBALANSE_NODE_MAP,
    mcqQuestions: VAESKEBALANSE_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Vann i kroppen', idx: 0 },
      { label: 'Steg 2: Termoregulering', idx: 1 },
      { label: 'Steg 3: Elektrolytter & osmose', idx: 2 },
      { label: 'Steg 4: Aerob forbrenning', idx: 3 },
      { label: 'Steg 5: Anaerob & laktat', idx: 4 },
    ],
  },
  trening: {
    id: 'trening',
    hash: '#trening',
    title: 'Trening – Tilpasning, superkompensasjon & restitusjon',
    dropdownTitle: '5. Trening',
    dropdownBadge: 'Superkompensasjon • 5 steg',
    dropdownDescription:
      'Hvordan kroppen responderer på fysisk belastning, bygger seg opp i hvilefasen, øker VO₂-maks, styrker skjelettet og trenger søvn.',
    subtitle:
      'Belastning, superkompensasjon, utholdenhet, styrke og søvn (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele treningskurven',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Trening & restitusjon',
    backFromQuizLabel: 'Tilbake til trening',
    summaryHeadingPrefix: 'Treningsfysiologi',
    traitsHeading: 'Tilpasninger i kroppen',
    classroomBoxHeading: 'Klasseromstest & praksis',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    competenceGoals: ['KM1', 'KM2'],
    accentHex: '#F43F5E',
    mainStepIds: TRENING_MAIN_STEP_IDS,
    allNodes: TRENING_NODES,
    nodeMap: TRENING_NODE_MAP,
    mcqQuestions: TRENING_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Respons på trening', idx: 0 },
      { label: 'Steg 2: Superkompensasjon', idx: 1 },
      { label: 'Steg 3: Utholdenhet & VO₂-maks', idx: 2 },
      { label: 'Steg 4: Styrke & skjelett', idx: 3 },
      { label: 'Steg 5: Søvn & mental helse', idx: 4 },
    ],
  },
  kosthold: {
    id: 'kosthold',
    hash: '#kosthold',
    title: 'Generell helse & kosthold – Variasjon & bærekraft',
    dropdownTitle: '6. Generell helse & kosthold',
    dropdownBadge: 'Kostråd & klima • 6 steg',
    dropdownDescription:
      'Energibalanse, tallerkenmodellen, Helsedirektoratets kostråd, forebygging av mangler og matens klimaavtrykk.',
    subtitle:
      'Variert kosthold i et helse- og bærekraftsperspektiv (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele oversikten',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Generell helse & kosthold',
    backFromQuizLabel: 'Tilbake til kosthold',
    summaryHeadingPrefix: 'Helse & bærekraft',
    traitsHeading: 'Nøkkelpunkter og sammenhenger',
    classroomBoxHeading: 'Klasseromsoppgave & refleksjon',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    competenceGoals: ['KM1', 'KM2'],
    accentHex: '#22C55E',
    mainStepIds: KOSTHOLD_MAIN_STEP_IDS,
    allNodes: KOSTHOLD_NODES,
    nodeMap: KOSTHOLD_NODE_MAP,
    mcqQuestions: KOSTHOLD_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Energibalanse & BMR', idx: 0 },
      { label: 'Steg 2: Tallerkenmodellen', idx: 1 },
      { label: 'Steg 3: Offentlige kostråd', idx: 2 },
      { label: 'Steg 4: Variasjon & mangler', idx: 3 },
      { label: 'Steg 5: Bærekraft & CO₂e', idx: 4 },
    ],
  },
  kildekritikk: {
    id: 'kildekritikk',
    hash: '#kildekritikk',
    title: 'Kildekritikk i henhold til kostholdsråd',
    dropdownTitle: '7. Kildekritikk & kostholdsråd',
    dropdownBadge: 'Evidens & TONE • 5 steg',
    dropdownDescription:
      'Hvordan avsløre kostholdsmyter, bruke TONE-prinsippet, forstå evidenshierarkiet og gjennomskue interessekonflikter.',
    subtitle:
      'Pålitelighet i helse- og livsstilsinformasjon (Vg1 Naturfag)',
    stepWord: 'Steg',
    showAllLabel: 'Vis hele sjekklisten',
    progressiveLabel: 'Stegvis modus',
    quizTitle: 'Kontrollspørsmål: Kildekritikk & kostholdsråd',
    backFromQuizLabel: 'Tilbake til kildekritikk',
    summaryHeadingPrefix: 'Kritisk vurdering',
    traitsHeading: 'Kjennetegn og verktøy',
    classroomBoxHeading: 'Klasseromstest & kildejakt',
    examplesHeading: 'Nøkkelbegreper på dette steget',
    competenceGoals: ['KM2'],
    accentHex: '#A855F7',
    mainStepIds: KILDEKRITIKK_MAIN_STEP_IDS,
    allNodes: KILDEKRITIKK_NODES,
    nodeMap: KILDEKRITIKK_NODE_MAP,
    mcqQuestions: KILDEKRITIKK_MCQ_QUESTIONS,
    quizShortcuts: [
      { label: 'Steg 1: Hvorfor myter sprer seg', idx: 0 },
      { label: 'Steg 2: TONE-prinsippet', idx: 1 },
      { label: 'Steg 3: Evidenshierarkiet', idx: 2 },
      { label: 'Steg 4: Interessekonflikter', idx: 3 },
      { label: 'Steg 5: Sjekkliste', idx: 4 },
    ],
  },
};

export const THEME_LIST: ThemeConfig[] = [
  THEMES.naeringsstoffer,
  THEMES.fordoyelsen,
  THEMES.celleanding,
  THEMES.vaeskebalanse,
  THEMES.trening,
  THEMES.kosthold,
  THEMES.kildekritikk,
];

export function parseViewFromHash(hash: string): AppView {
  const clean = decodeURIComponent(hash.replace(/^#/, '').trim().toLowerCase());
  if (clean === 'naeringsstoffer' || clean === 'næringsstoffer')
    return 'naeringsstoffer';
  if (clean === 'fordoyelsen' || clean === 'fordøyelsen') return 'fordoyelsen';
  if (clean === 'celleanding' || clean === 'celleånding') return 'celleanding';
  if (clean === 'vaeskebalanse' || clean === 'væskebalanse')
    return 'vaeskebalanse';
  if (clean === 'trening') return 'trening';
  if (clean === 'kosthold') return 'kosthold';
  if (clean === 'kildekritikk') return 'kildekritikk';
  return 'oversikt';
}

export function parseThemeFromHash(hash: string): ThemeId {
  const view = parseViewFromHash(hash);
  return view === 'oversikt' ? 'naeringsstoffer' : view;
}
