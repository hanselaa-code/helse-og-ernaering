import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import type { HealthNodeData, ThemeConfig } from '../data/types';

interface TimelineDockProps {
  activeTheme: ThemeConfig;
  currentStepIndex: number;
  unlockedStepIndex: number;
  showAllSteps: boolean;
  onPrevStep: () => void;
  onNextStep: () => void;
  onJumpToStep: (idx: number) => void;
  onToggleShowAll: () => void;
}

export function TimelineDock({
  activeTheme,
  currentStepIndex,
  unlockedStepIndex,
  showAllSteps,
  onPrevStep,
  onNextStep,
  onJumpToStep,
  onToggleShowAll,
}: TimelineDockProps) {
  const total = activeTheme.mainStepIds.length;
  const currentId = activeTheme.mainStepIds[currentStepIndex];
  const currentNode: HealthNodeData | undefined =
    activeTheme.nodeMap[currentId];

  return (
    <div className="relative z-20 px-3 sm:px-4 lg:px-6 pb-3 pt-1">
      <div className="glass-subtle rounded-2xl px-3 sm:px-4 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Previous */}
        <button
          id="btn-prev-step"
          type="button"
          onClick={onPrevStep}
          disabled={currentStepIndex === 0}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700/70 text-xs sm:text-sm font-semibold text-slate-200 transition-all cursor-pointer shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Forrige</span>
        </button>

        {/* Step dots + current label */}
        <div className="flex flex-col items-center gap-1.5 min-w-0 flex-1">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full py-0.5">
            {activeTheme.mainStepIds.map((id, idx) => {
              const node = activeTheme.nodeMap[id];
              const isCurrent = idx === currentStepIndex;
              const isUnlocked = showAllSteps || idx <= unlockedStepIndex;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onJumpToStep(idx)}
                  title={`${activeTheme.stepWord} ${idx + 1}: ${node?.title ?? ''}`}
                  className={`group flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                    isCurrent
                      ? 'bg-emerald-500/25 border border-emerald-400/65 text-emerald-200 shadow-[0_0_16px_rgba(16,185,129,0.25)]'
                      : isUnlocked
                        ? 'bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300'
                        : 'bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 text-slate-500'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isCurrent
                        ? 'bg-emerald-400'
                        : isUnlocked
                          ? 'bg-sky-400/75'
                          : 'bg-slate-600'
                    }`}
                  />
                  <span className="hidden md:inline">
                    {idx + 1}. {node?.shortLabel}
                  </span>
                  <span className="md:hidden">{idx + 1}</span>
                </button>
              );
            })}
          </div>
          {currentNode && (
            <p className="text-[11px] text-slate-400 truncate max-w-full hidden sm:block">
              {activeTheme.stepWord} {currentStepIndex + 1} av {total}:{' '}
              <span className="text-slate-200 font-medium">
                {currentNode.title}
              </span>
            </p>
          )}
        </div>

        {/* Right: Show All + Next */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleShowAll}
            title={
              showAllSteps
                ? activeTheme.progressiveLabel
                : activeTheme.showAllLabel
            }
            className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
              showAllSteps
                ? 'bg-sky-500/20 border-sky-400/50 text-sky-200'
                : 'bg-slate-900/80 hover:bg-slate-800 border-slate-700/70 text-slate-300'
            }`}
          >
            {showAllSteps ? (
              <EyeOff className="w-3.5 h-3.5" />
            ) : (
              <Eye className="w-3.5 h-3.5" />
            )}
            <span>{showAllSteps ? 'Følg steg' : 'Vis alle'}</span>
          </button>

          <button
            id="btn-next-step"
            type="button"
            onClick={onNextStep}
            disabled={currentStepIndex >= total - 1}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/25 hover:bg-emerald-500/35 disabled:opacity-40 disabled:cursor-not-allowed border border-emerald-400/50 text-xs sm:text-sm font-bold text-emerald-100 transition-all cursor-pointer"
          >
            <span className="hidden sm:inline">Neste steg</span>
            <span className="sm:hidden">Neste</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
