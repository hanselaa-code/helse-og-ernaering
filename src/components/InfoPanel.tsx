import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Maximize2,
  Sparkles,
  Tag,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { COMPETENCE_GOALS } from '../data/healthHubData';
import { getHealthImage } from '../data/images';
import { getTermDefinition } from '../data/termGlossary';
import type { HealthNodeData, ThemeConfig } from '../data/types';
import { TraitIcon } from './TraitIcon';

interface InfoPanelProps {
  activeTheme: ThemeConfig;
  node: HealthNodeData;
  onOpenLightbox: (node: HealthNodeData) => void;
}

export function InfoPanel({
  activeTheme,
  node,
  onOpenLightbox,
}: InfoPanelProps) {
  const [activeTerm, setActiveTerm] = useState<string | null>(null);

  useEffect(() => {
    setActiveTerm(null);
  }, [node.id]);

  const activeTermDef = activeTerm ? getTermDefinition(activeTerm) : undefined;

  return (
    <aside
      key={node.id}
      id="health-info-panel"
      className="h-full flex flex-col rounded-2xl glass-panel overflow-hidden animate-card-enter"
    >
      <div className="flex-1 overflow-y-auto custom-scrollbar p-5 lg:p-6 space-y-5">
        {/* Header badges + Title + Subtitle */}
        <header className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/35 text-emerald-300 text-xs font-bold tracking-wide uppercase">
              {activeTheme.stepWord} {node.stepNumber} av{' '}
              {activeTheme.mainStepIds.length}
            </span>

            {node.competenceGoals.map((goalId) => {
              const goal = COMPETENCE_GOALS[goalId];
              return (
                <span
                  key={goalId}
                  title={goal.fullText}
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border text-xs font-bold ${goal.colorClass}`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  {goal.id}
                </span>
              );
            })}

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/15 border border-sky-400/30 text-sky-200 text-xs font-semibold font-mono-time">
              {node.primaryBadge}
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-medium font-mono-time">
              {node.secondaryBadge}
            </span>
          </div>

          <div>
            <h2 className="text-2xl lg:text-[1.68rem] font-extrabold text-white leading-tight font-display">
              {node.title}
            </h2>
            <p className="text-sm lg:text-[15px] italic text-slate-300 font-medium mt-1">
              {node.subtitleTag}
            </p>
          </div>
        </header>

        {/* Hero 16:9 Nano Banana Illustration */}
        {(() => {
          const imgSrc =
            node.image ?? getHealthImage(`mod_${activeTheme.id}.jpg`);
          const imgCaption =
            node.imageCaption ??
            `${node.title} — ${node.subtitleTag}`;
          const nodeWithImg: HealthNodeData = {
            ...node,
            image: imgSrc,
            imageCaption: imgCaption,
          };
          return (
            <figure className="relative group rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900 shadow-lg">
              <div className="aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={imgSrc}
                  alt={node.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] cursor-zoom-in"
                  onClick={() => onOpenLightbox(nodeWithImg)}
                />
              </div>
              <button
                id="btn-expand-image"
                type="button"
                onClick={() => onOpenLightbox(nodeWithImg)}
                title="Forstørr bilde for storskjerm"
                className="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950/75 hover:bg-slate-900/95 text-slate-200 text-xs font-medium border border-white/15 opacity-90 group-hover:opacity-100 transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Storskjermbilde</span>
              </button>
              <figcaption className="px-3.5 py-2 bg-slate-950/85 text-xs text-slate-300 border-t border-slate-800/80 leading-relaxed">
                {imgCaption}
              </figcaption>
            </figure>
          );
        })()}

        {/* Main pedagogical summary */}
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <h3>
              {activeTheme.summaryHeadingPrefix} — {node.summaryTitle}
            </h3>
          </div>
          <p className="text-[15px] lg:text-base text-slate-200 leading-relaxed">
            {node.whatHappens}
          </p>
        </section>

        {/* Classroom experiment / thought hook */}
        {node.classroomTest && (
          <section className="p-4 rounded-xl bg-gradient-to-br from-sky-500/15 via-emerald-500/10 to-transparent border border-sky-400/35 space-y-1.5">
            <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <FlaskConical className="w-4 h-4 text-sky-400 shrink-0" />
              <h3>{activeTheme.classroomBoxHeading}</h3>
            </div>
            <p className="text-sm text-sky-50/95 leading-relaxed">
              {node.classroomTest}
            </p>
          </section>
        )}

        {/* Key traits */}
        <section className="space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            {activeTheme.traitsHeading}
          </h3>
          <div className="grid grid-cols-1 gap-2.5">
            {node.keyTraits.map((trait) => (
              <div
                key={trait.title}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/75 border border-slate-700/60 hover:border-emerald-400/35 transition-colors"
              >
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 shrink-0 mt-0.5">
                  <TraitIcon name={trait.icon} className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm lg:text-[15px] font-bold text-white">
                    {trait.title}
                  </h4>
                  <p className="text-xs lg:text-sm text-slate-300 mt-0.5 leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clickable glossary terms */}
        {node.terms.length > 0 && (
          <section className="space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              <Tag className="w-3.5 h-3.5 text-amber-300" />
              <h3>{activeTheme.examplesHeading} (klikk for forklaring)</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {node.terms.map((term) => {
                const hasDef = Boolean(getTermDefinition(term));
                const isSelected = activeTerm === term;
                return (
                  <button
                    key={term}
                    type="button"
                    onClick={() =>
                      setActiveTerm((prev) => (prev === term ? null : term))
                    }
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/25 border-amber-400 text-amber-100'
                        : hasDef
                          ? 'bg-slate-800/85 hover:bg-slate-700/85 border-slate-600/80 text-slate-200'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <BookOpen className="w-3 h-3 text-amber-300" />
                    <span>{term}</span>
                  </button>
                );
              })}
            </div>

            {activeTermDef && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/35 space-y-1 animate-card-enter">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-amber-200">
                    {activeTermDef.term} — {activeTermDef.short}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveTerm(null)}
                    className="p-0.5 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {activeTermDef.detail}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Discussion question */}
        {node.discussionQuestion && (
          <section className="p-4 rounded-xl bg-gradient-to-br from-amber-500/12 via-rose-500/8 to-transparent border border-amber-400/30 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
              <h3>Diskusjonsspørsmål i klasserommet</h3>
            </div>
            <p className="text-sm text-amber-50/95 leading-relaxed font-medium">
              {node.discussionQuestion}
            </p>
          </section>
        )}
      </div>
    </aside>
  );
}
