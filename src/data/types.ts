export type CompetenceGoalId = 'KM1' | 'KM2';

export type ThemeId =
  | 'naeringsstoffer'
  | 'fordoyelsen'
  | 'celleanding'
  | 'vaeskebalanse'
  | 'trening'
  | 'kosthold'
  | 'kildekritikk';

export type AppView = 'oversikt' | ThemeId;

export interface CompetenceGoal {
  id: CompetenceGoalId;
  shortLabel: string;
  fullText: string;
  colorClass: string;
}

export interface TraitItem {
  icon: string;
  title: string;
  description: string;
}

export interface HealthNodeData {
  id: string;
  stepNumber: number;
  title: string;
  shortLabel: string;
  subtitleTag: string;
  eraLabel: string;
  primaryBadge: string;
  secondaryBadge: string;
  traceBadge?: string;
  competenceGoals: CompetenceGoalId[];
  summaryTitle: string;
  whatHappens: string;
  classroomTest?: string;
  keyTraits: TraitItem[];
  terms: string[];
  discussionQuestion?: string;
  accentColor: string;
  image?: string;
  imageCaption?: string;
}

export interface McqQuestionItem {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  relatedStepId: string;
}

export interface ThemeConfig {
  id: ThemeId;
  hash: string;
  title: string;
  dropdownTitle: string;
  dropdownBadge: string;
  dropdownDescription: string;
  subtitle: string;
  stepWord: string;
  showAllLabel: string;
  progressiveLabel: string;
  quizTitle: string;
  backFromQuizLabel: string;
  summaryHeadingPrefix: string;
  traitsHeading: string;
  classroomBoxHeading: string;
  examplesHeading: string;
  competenceGoals: CompetenceGoalId[];
  accentHex: string;
  mainStepIds: string[];
  allNodes: HealthNodeData[];
  nodeMap: Record<string, HealthNodeData>;
  mcqQuestions: McqQuestionItem[];
  quizShortcuts: { label: string; idx: number }[];
}
