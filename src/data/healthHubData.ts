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
  title: 'Helse og ernæring',
  dropdownTitle: 'Helse og ernæring – Tankekart',
  dropdownBadge: '7 moduler • Vg1 Naturfag',
  subtitle:
    'Fra næringsstoffer, fordøyelse og celleånding til trening, bærekraftig kosthold og kildekritikk',
  description:
    'Velg et undertema i tankekartet for å utforske kroppens kjemi, energiomsetning, trening, kostholdsråd og kritisk vurdering av helsepåstander.',
};

export interface HubNodeConfig {
  id: ThemeId;
  title: string;
  shortTag: string;
  description: string;
  competenceGoals: CompetenceGoalId[];
  stepCount: number;
  accentHex: string;
  badgeClass: string;
  /** Position in 1000x620 SVG viewBox */
  x: number;
  y: number;
}

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
    badgeClass: 'text-emerald-300 border-emerald-400/40 bg-emerald-500/15',
    x: 205,
    y: 135,
  },
  {
    id: 'fordoyelsen',
    title: 'Fordøyelsen',
    shortTag: 'Enzymer & opptak',
    description:
      'Fra mekanisk tygging og saltsyre til enzymer i tynntarmen og opptak gjennom tarmtottene.',
    competenceGoals: ['KM1'],
    stepCount: 6,
    accentHex: '#F59E0B',
    badgeClass: 'text-amber-300 border-amber-400/40 bg-amber-500/15',
    x: 500,
    y: 95,
  },
  {
    id: 'celleanding',
    title: 'Omsetning & celleånding',
    shortTag: 'Glukose + O₂ → ATP',
    description:
      'Hvordan cellene frigjør energi fra næringsstoffene i mitokondriene og lager ATP.',
    competenceGoals: ['KM1'],
    stepCount: 5,
    accentHex: '#38BDF8',
    badgeClass: 'text-sky-300 border-sky-400/40 bg-sky-500/15',
    x: 795,
    y: 135,
  },
  {
    id: 'vaeskebalanse',
    title: 'Væskebalanse, aerob & anaerob',
    shortTag: 'Vann, salt & melkesyre',
    description:
      'Osmose, elektrolytter og forskjellen på aerob og anaerob forbrenning ved ulik intensitet.',
    competenceGoals: ['KM1', 'KM2'],
    stepCount: 5,
    accentHex: '#06B6D4',
    badgeClass: 'text-cyan-300 border-cyan-400/40 bg-cyan-500/15',
    x: 840,
    y: 355,
  },
  {
    id: 'trening',
    title: 'Trening',
    shortTag: 'Tilpasning & restitusjon',
    description:
      'Superkompensasjon, utholdenhet vs. styrke, hjerte- og lungekapasitet, søvn og restitusjon.',
    competenceGoals: ['KM1', 'KM2'],
    stepCount: 5,
    accentHex: '#F43F5E',
    badgeClass: 'text-rose-300 border-rose-400/40 bg-rose-500/15',
    x: 685,
    y: 525,
  },
  {
    id: 'kosthold',
    title: 'Generell helse & kosthold',
    shortTag: 'Kostråd & bærekraft',
    description:
      'Variert kosthold, energibalanse, tallerkenmodellen, helseperspektiv og klimaavtrykk.',
    competenceGoals: ['KM1', 'KM2'],
    stepCount: 6,
    accentHex: '#22C55E',
    badgeClass: 'text-green-300 border-green-400/40 bg-green-500/15',
    x: 315,
    y: 525,
  },
  {
    id: 'kildekritikk',
    title: 'Kildekritikk & kostholdsråd',
    shortTag: 'Evidens vs. myter',
    description:
      'Hvordan vurdere påstander i sosiale medier, forskning, interessekonflikter og TONE-prinsippet.',
    competenceGoals: ['KM2'],
    stepCount: 5,
    accentHex: '#A855F7',
    badgeClass: 'text-purple-300 border-purple-400/40 bg-purple-500/15',
    x: 160,
    y: 355,
  },
];
