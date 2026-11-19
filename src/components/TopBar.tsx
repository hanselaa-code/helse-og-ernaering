import {
  Check,
  ChevronDown,
  Eye,
  EyeOff,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  Keyboard,
  Maximize,
  Minimize,
  Network,
  QrCode,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  COMPETENCE_GOALS,
  HEALTH_CENTER_NODE,
  HEALTH_HUB_NODES,
} from '../data/healthHubData';
import { THEMES } from '../data/themes';
import type { AppView, ThemeConfig } from '../data/types';

interface TopBarProps {
  activeView: AppView;
  activeTheme: ThemeConfig;
  currentStepIndex: number;
  showAllSteps: boolean;
  isQuizOpen: boolean;
  isFullscreen: boolean;
  onSelectView: (view: AppView) => void;
  onToggleShowAll: () => void;
  onToggleQuiz: () => void;
  onOpenQrModal: () => void;
  onToggleFullscreen: () => void;
  onResetPresentation: () => void;
}

export function TopBar({
  activeView,
  activeTheme,
  currentStepIndex,
  showAllSteps,
  isQuizOpen,
  isFullscreen,
  onSelectView,
  onToggleShowAll,
  onToggleQuiz,
  onOpenQrModal,
  onToggleFullscreen,
  onResetPresentation,
}: TopBarProps) {
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const goalsRef = useRef<HTMLDivElement | null>(null);
  const shortcutsRef = useRef<HTMLDivElement | null>(null);

  const isMindMap = activeView === 'oversikt';

  useEffect(() => {
    if (!themeMenuOpen && !showGoals && !showShortcuts) return;
    const handleOutside = (e: MouseEvent) => {
      if (
        themeMenuOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setThemeMenuOpen(false);
      }
      if (
        showGoals &&
        goalsRef.current &&
        !goalsRef.current.contains(e.target as Node)
      ) {
        setShowGoals(false);
      }
      if (
        showShortcuts &&
        shortcutsRef.current &&
        !shortcutsRef.current.contains(e.target as Node)
      ) {
        setShowShortcuts(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [themeMenuOpen, showGoals, showShortcuts]);

  const ActiveIcon = isMindMap ? HeartPulse : Sparkles;
  const headerBadge = isMindMap
    ? HEALTH_CENTER_NODE.dropdownBadge
    : activeTheme.dropdownBadge;
  const headerTitle = isMindMap
    ? HEALTH_CENTER_NODE.dropdownTitle
    : activeTheme.dropdownTitle;

  return (
    <header
      className={`relative z-30 flex items-center justify-between gap-2 sm:gap-3 border-b border-slate-800/80 bg-[#070B16]/90 backdrop-blur-md ${
        isFullscreen
          ? 'px-2.5 sm:px-3.5 py-1.5'
          : 'px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3'
      }`}
    >
      {/* Left: Brand & Interactive Theme Switcher Dropdown */}
      <div
        ref={dropdownRef}
        className="relative flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1"
      >
        <button
          id="btn-theme-switcher"
          type="button"
          onClick={() => setThemeMenuOpen((prev) => !prev)}
          aria-expanded={themeMenuOpen}
          aria-haspopup="listbox"
          title="Velg tema eller gå til tankekartet"
          className="group flex items-center gap-2.5 sm:gap-3 px-2.5 sm:px-3 py-1.5 rounded-2xl bg-slate-900/85 hover:bg-slate-800/90 border border-amber-400/35 hover:border-amber-400/65 transition-all cursor-pointer min-w-0 sm:shrink-0 text-left shadow-[0_0_24px_rgba(245,158,11,0.12)]"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-amber-500/25 to-sky-500/20 border border-amber-400/35 flex items-center justify-center shrink-0">
            <ActiveIcon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300/90 hidden sm:inline">
                {isMindMap ? 'Oversikt' : 'Tema'}
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-[10px] font-mono-time text-sky-300/90 truncate hidden sm:inline">
                {headerBadge}
              </span>
            </div>
            <div className="flex items-center gap-1.5 min-w-0">
              <h1 className="text-xs sm:text-base lg:text-lg font-extrabold text-white truncate font-display">
                {headerTitle}
              </h1>
              <ChevronDown
                className={`w-4 h-4 text-amber-300 shrink-0 transition-transform duration-200 ${
                  themeMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
        </button>

        {!isMindMap && (
          <button
            id="btn-back-to-mindmap"
            type="button"
            onClick={() => onSelectView('oversikt')}
            title="Tilbake til hovedsiden med tankekartet"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-sky-400/35 hover:border-sky-400/65 text-xs font-bold text-sky-200 transition-all cursor-pointer shrink-0"
          >
            <Network className="w-3.5 h-3.5 text-sky-300" />
            <span>Tankekart</span>
          </button>
        )}

        {/* Dropdown Menu matching big-bang */}
        {themeMenuOpen && (
          <div className="absolute left-0 top-full mt-2 w-[min(94vw,430px)] rounded-2xl glass-panel p-3 shadow-2xl border border-slate-700/80 z-50 max-h-[82vh] overflow-y-auto custom-scrollbar space-y-3">
            <div>
              <div className="px-1.5 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Hovedside
              </div>
              <button
                type="button"
                onClick={() => {
                  onSelectView('oversikt');
                  setThemeMenuOpen(false);
                }}
                className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                  isMindMap
                    ? 'bg-amber-500/15 border border-amber-400/50'
                    : 'hover:bg-slate-800/80 border border-slate-800/80'
                }`}
              >
                <img
                  src={HEALTH_CENTER_NODE.imageUrl}
                  alt={HEALTH_CENTER_NODE.dropdownTitle}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/75 shrink-0 mt-0.5"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-extrabold text-white font-display">
                      {HEALTH_CENTER_NODE.dropdownTitle}
                    </span>
                    {isMindMap && (
                      <Check className="w-4 h-4 text-amber-300 shrink-0" />
                    )}
                  </div>
                  <div className="text-[11px] font-semibold text-amber-300/90 mt-0.5">
                    Hovedside • 7 sammenkoblede temaer
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
                    {HEALTH_CENTER_NODE.description}
                  </p>
                </div>
              </button>
            </div>

            <div>
              <div className="px-1.5 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Undertemaer i tankekartet (7)
              </div>
              <div className="space-y-1.5">
                {HEALTH_HUB_NODES.map((hubNode) => {
                  const theme = THEMES[hubNode.id];
                  const isActive = activeView === hubNode.id;
                  return (
                    <button
                      key={hubNode.id}
                      type="button"
                      onClick={() => {
                        onSelectView(hubNode.id);
                        setThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-sky-500/15 border border-sky-400/55'
                          : 'hover:bg-slate-800/75 border border-slate-800/70'
                      }`}
                    >
                      <img
                        src={hubNode.imageUrl}
                        alt={theme.dropdownTitle}
                        className="w-11 h-11 rounded-full object-cover border-2 border-sky-400/65 shrink-0 mt-0.5"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-extrabold text-white font-display truncate">
                            {theme.dropdownTitle}
                          </span>
                          {isActive && (
                            <Check className="w-4 h-4 text-sky-300 shrink-0" />
                          )}
                        </div>
                        <div className="text-[11px] font-semibold text-sky-300/90 mt-0.5">
                          {theme.dropdownBadge}
                        </div>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
                          {theme.dropdownDescription}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right: Classroom Controls matching big-bang */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {!isMindMap && (
          <div className="hidden xl:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs font-mono-time text-slate-300">
            <span>{activeTheme.stepWord}:</span>
            <span className="font-bold text-amber-300">
              {currentStepIndex + 1}
            </span>
            <span className="text-slate-500">/</span>
            <span>{activeTheme.mainStepIds.length}</span>
          </div>
        )}

        {/* Competence goals popover */}
        <div ref={goalsRef} className="relative">
          <button
            type="button"
            onClick={() => setShowGoals((p) => !p)}
            title="Vis kompetansemål fra læreplanen"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/40 text-xs font-bold text-emerald-200 transition-all cursor-pointer"
          >
            <GraduationCap className="w-4 h-4 text-emerald-300" />
            <span className="hidden lg:inline">Kompetansemål</span>
          </button>

          {showGoals && (
            <div className="absolute right-0 top-full mt-2 w-[min(92vw,390px)] rounded-2xl glass-panel p-4 shadow-2xl border border-slate-700/80 z-50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <GraduationCap className="w-4 h-4" />
                <span>Kompetansemål i naturfag</span>
              </div>
              {Object.values(COMPETENCE_GOALS).map((goal) => (
                <div
                  key={goal.id}
                  className="p-3 rounded-xl bg-slate-900/85 border border-slate-700/70 space-y-1"
                >
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${goal.colorClass}`}
                  >
                    {goal.id} • {goal.shortLabel}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    «{goal.fullText}»
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          id="btn-qr"
          type="button"
          onClick={onOpenQrModal}
          title="Vis QR-kode for elever (K)"
          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-sky-400/35 text-xs font-semibold text-sky-200 transition-all cursor-pointer"
        >
          <QrCode className="w-4 h-4 text-sky-300" />
          <span className="hidden xl:inline">QR-kode</span>
        </button>

        {!isMindMap && (
          <>
            <button
              type="button"
              onClick={onToggleShowAll}
              title={
                showAllSteps
                  ? activeTheme.progressiveLabel
                  : activeTheme.showAllLabel
              }
              className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                showAllSteps
                  ? 'bg-sky-500/20 border-sky-400/50 text-sky-200'
                  : 'bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 text-slate-200'
              }`}
            >
              {showAllSteps ? (
                <EyeOff className="w-3.5 h-3.5" />
              ) : (
                <Eye className="w-3.5 h-3.5" />
              )}
              <span className="hidden lg:inline">
                {showAllSteps
                  ? activeTheme.progressiveLabel
                  : activeTheme.showAllLabel}
              </span>
            </button>

            <button
              id="btn-quiz"
              type="button"
              onClick={onToggleQuiz}
              title="Åpne kontrollspørsmål / Quiz (Q)"
              className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                isQuizOpen
                  ? 'bg-amber-500/30 border-amber-400 text-amber-100'
                  : 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-400/45 text-amber-200'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Kontrollspørsmål</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/35 text-[10px] font-mono-time">
                Q
              </kbd>
            </button>
          </>
        )}

        <div ref={shortcutsRef} className="relative hidden sm:block">
          <button
            type="button"
            onClick={() => setShowShortcuts((p) => !p)}
            title="Tastatursnarveier"
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-slate-300 transition-all cursor-pointer"
          >
            <Keyboard className="w-4 h-4" />
          </button>

          {showShortcuts && (
            <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl glass-panel p-3.5 shadow-2xl border border-slate-700/80 z-50 text-xs space-y-2">
              <div className="font-bold text-white">Tastatursnarveier</div>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-slate-300">
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono-time text-[10px]">
                  → / Space
                </kbd>
                <span>Neste steg</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono-time text-[10px]">
                  ←
                </kbd>
                <span>Forrige steg</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono-time text-[10px]">
                  Q
                </kbd>
                <span>Kontrollspørsmål</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono-time text-[10px]">
                  K
                </kbd>
                <span>Del via QR-kode</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono-time text-[10px]">
                  F
                </kbd>
                <span>Fullskjerm</span>
              </div>
            </div>
          )}
        </div>

        <button
          id="btn-fullscreen"
          type="button"
          onClick={onToggleFullscreen}
          title="Fullskjermmodus (F)"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-xs font-semibold text-slate-200 transition-all cursor-pointer"
        >
          {isFullscreen ? (
            <Minimize className="w-4 h-4 text-amber-300" />
          ) : (
            <Maximize className="w-4 h-4" />
          )}
          <span className="hidden md:inline">Fullskjerm</span>
          <kbd className="hidden lg:inline-block px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono-time">
            F
          </kbd>
        </button>

        {!isMindMap && (
          <button
            type="button"
            onClick={onResetPresentation}
            title="Nullstill dette temaet til steg 1"
            className="hidden sm:inline-flex p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>
    </header>
  );
}
