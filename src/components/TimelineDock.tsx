import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ThemeConfig } from '../data/types';

interface TimelineDockProps {
  activeTheme: ThemeConfig;
  currentStepIndex: number;
  unlockedStepIndex: number;
  showAllSteps: boolean;
  onPrevStep: () => void;
  onNextStep: () => void;
  onJumpToStep: (idx: number) => void;
}

export function TimelineDock({
  activeTheme,
  currentStepIndex,
  unlockedStepIndex,
  showAllSteps,
  onPrevStep,
  onNextStep,
  onJumpToStep,
}: TimelineDockProps) {
  const total = activeTheme.mainStepIds.length;

  return (
    <footer className="relative z-20 px-3 sm:px-4 lg:px-6 py-2.5 border-t border-slate-800/80 bg-[#070B16]/90 backdrop-blur-md">
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        {/* Previous */}
        <button
          id="btn-prev-step"
          type="button"
          onClick={onPrevStep}
          disabled={currentStepIndex === 0}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-200 transition-all cursor-pointer shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Forrige</span>
        </button>

        {/* 2-line step pills matching big-bang */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto custom-scrollbar py-0.5 flex-1">
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
                className={`flex flex-col items-start px-2.5 py-1.5 rounded-xl border text-left transition-all cursor-pointer shrink-0 min-w-[118px] max-w-[165px] ${
                  isCurrent
                    ? 'bg-amber-500/15 border-amber-400/70 shadow-[0_0_18px_rgba(245,158,11,0.18)]'
                    : isUnlocked
                      ? 'bg-slate-900/85 hover:bg-slate-800/90 border-slate-700/80'
                      : 'bg-slate-950/60 hover:bg-slate-900/70 border-slate-800/80 opacity-60'
                }`}
              >
                <div className="flex items-center gap-1.5 w-full">
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-extrabold shrink-0 ${
                      isCurrent
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span
                    className={`text-xs font-bold truncate ${
                      isCurrent ? 'text-amber-100' : 'text-slate-200'
                    }`}
                  >
                    {node?.shortLabel}
                  </span>
                </div>
                <span className="text-[10px] font-mono-time text-slate-400 truncate w-full pl-5 mt-0.5">
                  {node?.primaryBadge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bright Amber Next Step Button matching big-bang */}
        <button
          id="btn-next-step"
          type="button"
          onClick={onNextStep}
          disabled={currentStepIndex >= total - 1}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-extrabold text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer shrink-0"
        >
          <span className="hidden sm:inline">Neste steg</span>
          <span className="sm:hidden">Neste</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
