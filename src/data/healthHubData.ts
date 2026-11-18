import { getHealthImage } from './images';
import type { CompetenceGoal, CompetenceGoalId, ThemeId } from './types';

export const COMPETENCE_GOALS: Record<CompetenceGoalId, CompetenceGoal> = {
  KM1: {
    id: 'KM1',
    shortLabel: 'Næringsstoffer & bærekraftig kosthold',
    fullText:
      'Gjøre rede for funksjonene til noen næringsstoffer og diskutere hvorfor et variert kosthold er viktig i et helse- og bærekraftsperspektiv',
    colorClass: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-200',
  },
  KM2: {
    id: 'KM2',
    shortLabel: 'Livsstil & kildekritikk',
    fullText:
      'Drøfte aktuelle helse- og livsstilsspørsmål og vurdere pålitelighet i informasjon fra ulike kilder',
    colorClass: 'bg-sky-500/15 border-sky-400/40 text-sky-200',
  },
};

export const HEALTH_CENTER_NODE = {
  title: 'HELSE & ERNÆRING',
  dropdownTitle: 'Helse og ernæring – Tankekart',
  dropdownBadge: '7 moduler • Vg1 Naturfag',
  subtitle:
    'Fra næringsstoffer, fordøyelse og celleånding til trening, bærekraftig kosthold og kildekritikk',
  description:
    'Velg et undertema i tankekartet for å utforske kroppens kjemi, energiomsetning, trening, kostholdsråd og kritisk vurdering av helsepåstander.',
  cx: 540,
  cy: 390,
  r: 120,
  haloR: 136,
  imageUrl: getHealthImage('hub_helse.jpg'),
};

export interface HubNodeConfig {
  id: ThemeId;
  title: string;
  shortTag: string;
  description: string;
  competenceGoals: CompetenceGoalId[];
  stepCount: number;
  accentHex: string;
  cx: number;
  cy: number;
  r: number;
  imageUrl: string;
}

// 7 satellites arranged in a balanced ring around center (540, 390)
export const HEALTH_HUB_NODES: HubNodeConfig[] = [
  {
    id: 'naeringsstoffer',
    title: 'Næringsstoffene',
    shortTag: 'Byggesteiner & drivstoff',
    description:
      'Karbohydrater, proteiner, fett, vitaminer, mineraler og fiber – hva kroppen bruker dem til.',
    competenceGoals: ['KM1'],
    stepCount: 6,
    accentHex: '#10B981',
    cx: 295,
    cy: 165,
    r: 86,
    imageUrl: getHealthImage('hub_naeringsstoffer.jpg'),
  },
  {
    id: 'fordoyelsen',
    title: 'Fordøyelsen',
    shortTag: 'Enzymer & opptak',
    description:
      'Fra mekanisk tygging og saltsyre til enzymer i tynntarmen og opptak gjennom tarmtottene.',
    competenceGoals: ['KM1'],
    stepCount: 7,
    accentHex: '#F59E0B',
    cx: 540,
    cy: 112,
    r: 86,
    imageUrl: getHealthImage('hub_fordoyelsen.jpg'),
  },
  {
    id: 'celleanding',
    title: 'Celleånding',
    shortTag: 'ATP • Aerob & anaerob',
    description:
      'Hvordan ATP lages fra karbohydrater (aerob og anaerob), fett og proteiner – og når kroppen bruker hva.',
    competenceGoals: ['KM1'],
    stepCount: 7,
    accentHex: '#38BDF8',
    cx: 790,
    cy: 170,
    r: 86,
    imageUrl: getHealthImage('hub_celleanding.jpg'),
  },
  {
    id: 'vaeskebalanse',
    title: 'Væskebalanse',
    shortTag: 'Vann, svette & osmose',
    description:
      'Vann som transportmiddel, termoregulering via svette, elektrolytter og osmose i cellene.',
    competenceGoals: ['KM1', 'KM2'],
    stepCount: 3,
    accentHex: '#06B6D4',
    cx: 875,
    cy: 415,
    r: 86,
    imageUrl: getHealthImage('hub_vaeskebalanse.jpg'),
  },
  {
    id: 'trening',
    title: 'Trening',
    shortTag: 'Tilpasning & hvile',
    description:
      'Superkompensasjon, utholdenhet vs. styrke, hjerte- og lungekapasitet, søvn og restitusjon.',
    competenceGoals: ['KM1', 'KM2'],
    stepCount: 5,
    accentHex: '#F43F5E',
    cx: 705,
    cy: 635,
    r: 86,
    imageUrl: getHealthImage('hub_trening.jpg'),
  },
  {
    id: 'kosthold',
    title: 'Helse & kosthold',
    shortTag: 'Kostråd & bærekraft',
    description:
      'Variert kosthold, energibalanse, tallerkenmodellen, helseperspektiv og klimaavtrykk.',
    competenceGoals: ['KM1', 'KM2'],
    stepCount: 6,
    accentHex: '#22C55E',
    cx: 375,
    cy: 635,
    r: 86,
    imageUrl: getHealthImage('hub_kosthold.jpg'),
  },
  {
    id: 'kildekritikk',
    title: 'Kildekritikk',
    shortTag: 'Evidens vs. myter',
    description:
      'Hvordan vurdere påstander i sosiale medier, forskning, interessekonflikter og TONE-prinsippet.',
    competenceGoals: ['KM2'],
    stepCount: 5,
    accentHex: '#A855F7',
    cx: 205,
    cy: 415,
    r: 86,
    imageUrl: getHealthImage('hub_kildekritikk.jpg'),
  },
];

export const HEALTH_DASHED_ARCS: {
  id: string;
  from: ThemeId;
  to: ThemeId;
  d: string;
}[] = [
  {
    id: 'arc-naer-ford',
    from: 'naeringsstoffer',
    to: 'fordoyelsen',
    d: 'M 365 110 Q 420 82 465 95',
  },
  {
    id: 'arc-ford-celle',
    from: 'fordoyelsen',
    to: 'celleanding',
    d: 'M 615 95 Q 675 88 725 120',
  },
  {
    id: 'arc-celle-vaesk',
    from: 'celleanding',
    to: 'vaeskebalanse',
    d: 'M 852 232 Q 892 290 888 335',
  },
  {
    id: 'arc-vaesk-tren',
    from: 'vaeskebalanse',
    to: 'trening',
    d: 'M 848 492 Q 825 568 770 605',
  },
  {
    id: 'arc-tren-kost',
    from: 'trening',
    to: 'kosthold',
    d: 'M 620 658 Q 540 682 460 658',
  },
  {
    id: 'arc-kost-kilde',
    from: 'kosthold',
    to: 'kildekritikk',
    d: 'M 308 602 Q 248 565 225 495',
  },
  {
    id: 'arc-kilde-naer',
    from: 'kildekritikk',
    to: 'naeringsstoffer',
    d: 'M 192 332 Q 195 258 242 218',
  },
];
