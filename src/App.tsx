import { useCallback, useEffect, useState } from 'react';
import { HealthMindMap } from './components/HealthMindMap';
import { InfoPanel } from './components/InfoPanel';
import { ModuleExplorer } from './components/ModuleExplorer';
import { QrShareModal } from './components/QrShareModal';
import { QuizModal } from './components/QuizModal';
import { TimelineDock } from './components/TimelineDock';
import { TopBar } from './components/TopBar';
import { HEALTH_CENTER_NODE } from './data/healthHubData';
import {
  parseThemeFromHash,
  parseViewFromHash,
  THEME_LIST,
  THEMES,
} from './data/themes';
import type { AppView, ThemeId } from './data/types';

interface ThemeProgressState {
  currentStepIndex: number;
  unlockedStepIndex: number;
  showAllSteps: boolean;
}

function createInitialProgress(): Record<ThemeId, ThemeProgressState> {
  return Object.fromEntries(
    THEME_LIST.map((t) => [
      t.id,
      {
        currentStepIndex: 0,
        unlockedStepIndex: 0,
        showAllSteps: false,
      },
    ]),
  ) as Record<ThemeId, ThemeProgressState>;
}

export function App() {
  const [activeView, setActiveView] = useState<AppView>(() =>
    typeof window !== 'undefined'
      ? parseViewFromHash(window.location.hash)
      : 'oversikt',
  );
  const [activeThemeId, setActiveThemeId] = useState<ThemeId>(() =>
    typeof window !== 'undefined'
      ? parseThemeFromHash(window.location.hash)
      : 'naeringsstoffer',
  );
  const [progressByTheme, setProgressByTheme] = useState<
    Record<ThemeId, ThemeProgressState>
  >(createInitialProgress);

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isMindMap = activeView === 'oversikt';
  const activeTheme = THEMES[activeThemeId];
  const progress = progressByTheme[activeThemeId];
  const { currentStepIndex, unlockedStepIndex, showAllSteps } = progress;

  useEffect(() => {
    const pageTitle = isMindMap
      ? HEALTH_CENTER_NODE.dropdownTitle
      : activeTheme.title;
    document.title = `${pageTitle} | Interaktiv Klasseromspresentasjon`;
  }, [activeTheme.title, isMindMap]);

  useEffect(() => {
    const syncFromUrl = () => {
      const nextView = parseViewFromHash(window.location.hash);
      setActiveView(nextView);
      if (nextView !== 'oversikt') {
        setActiveThemeId(nextView);
      }
      setIsQuizOpen(false);
    };
    window.addEventListener('hashchange', syncFromUrl);
    window.addEventListener('popstate', syncFromUrl);
    return () => {
      window.removeEventListener('hashchange', syncFromUrl);
      window.removeEventListener('popstate', syncFromUrl);
    };
  }, []);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const handleSelectView = useCallback((nextView: AppView) => {
    setActiveView(nextView);
    if (nextView !== 'oversikt') {
      setActiveThemeId(nextView);
    }
    setIsQuizOpen(false);

    const targetHash = nextView === 'oversikt' ? '' : THEMES[nextView].hash;
    try {
      const url = new URL(window.location.href);
      if (url.hash !== targetHash) {
        url.hash = targetHash;
        window.history.pushState(null, '', url.toString());
      }
    } catch {
      // Ignore in restricted iframe contexts
    }
  }, []);

  const jumpToStep = useCallback(
    (nextIdx: number) => {
      const total = activeTheme.mainStepIds.length;
      const clamped = Math.max(0, Math.min(total - 1, nextIdx));
      setProgressByTheme((prev) => {
        const cur = prev[activeThemeId];
        return {
          ...prev,
          [activeThemeId]: {
            ...cur,
            currentStepIndex: clamped,
            unlockedStepIndex: Math.max(cur.unlockedStepIndex, clamped),
          },
        };
      });
    },
    [activeTheme.mainStepIds.length, activeThemeId],
  );

  const handlePrevStep = useCallback(() => {
    jumpToStep(currentStepIndex - 1);
  }, [currentStepIndex, jumpToStep]);

  const handleNextStep = useCallback(() => {
    jumpToStep(currentStepIndex + 1);
  }, [currentStepIndex, jumpToStep]);

  const handleToggleShowAll = useCallback(() => {
    setProgressByTheme((prev) => {
      const cur = prev[activeThemeId];
      return {
        ...prev,
        [activeThemeId]: {
          ...cur,
          showAllSteps: !cur.showAllSteps,
        },
      };
    });
  }, [activeThemeId]);

  const handleResetPresentation = useCallback(() => {
    setProgressByTheme((prev) => ({
      ...prev,
      [activeThemeId]: {
        currentStepIndex: 0,
        unlockedStepIndex: 0,
        showAllSteps: false,
      },
    }));
  }, [activeThemeId]);

  const handleToggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Ignore fullscreen denial in iframes
    }
  }, []);

  // Global keyboard shortcuts matching big-bang
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'Escape') {
        setIsQuizOpen(false);
        setIsQrOpen(false);
        return;
      }

      if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        handleToggleFullscreen();
        return;
      }

      if (e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsQrOpen((p) => !p);
        return;
      }

      if (isMindMap) return;

      if (e.key.toLowerCase() === 'q') {
        e.preventDefault();
        setIsQuizOpen((p) => !p);
        return;
      }

      if (isQuizOpen || isQrOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        handleNextStep();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrevStep();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    handleNextStep,
    handlePrevStep,
    handleToggleFullscreen,
    isMindMap,
    isQrOpen,
    isQuizOpen,
  ]);

  const activeNodeId = activeTheme.mainStepIds[currentStepIndex];
  const activeNode =
    activeTheme.nodeMap[activeNodeId] ?? activeTheme.allNodes[0];

  return (
    <div className="min-h-screen lg:h-screen flex flex-col health-canvas text-slate-100 lg:overflow-hidden">
      <TopBar
        activeView={activeView}
        activeTheme={activeTheme}
        showAllSteps={showAllSteps}
        isQuizOpen={isQuizOpen}
        isFullscreen={isFullscreen}
        onSelectView={handleSelectView}
        onToggleShowAll={handleToggleShowAll}
        onToggleQuiz={() => setIsQuizOpen((p) => !p)}
        onOpenQrModal={() => setIsQrOpen(true)}
        onToggleFullscreen={handleToggleFullscreen}
        onResetPresentation={handleResetPresentation}
      />

      {isMindMap ? (
        <HealthMindMap onSelectTheme={(id) => handleSelectView(id)} />
      ) : (
        <>
          <main className="flex-1 min-h-0 px-3 sm:px-4 lg:px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
            <div className="lg:col-span-6 xl:col-span-7 min-h-[340px] lg:min-h-0">
              <ModuleExplorer
                activeTheme={activeTheme}
                currentStepIndex={currentStepIndex}
                unlockedStepIndex={unlockedStepIndex}
                showAllSteps={showAllSteps}
                onSelectStep={jumpToStep}
              />
            </div>

            <div className="lg:col-span-6 xl:col-span-5 min-h-[420px] lg:min-h-0">
              <InfoPanel activeTheme={activeTheme} node={activeNode} />
            </div>
          </main>

          <TimelineDock
            activeTheme={activeTheme}
            currentStepIndex={currentStepIndex}
            unlockedStepIndex={unlockedStepIndex}
            showAllSteps={showAllSteps}
            onPrevStep={handlePrevStep}
            onNextStep={handleNextStep}
            onJumpToStep={jumpToStep}
            onToggleShowAll={handleToggleShowAll}
          />
        </>
      )}

      <QuizModal
        key={activeThemeId}
        isOpen={isQuizOpen}
        activeTheme={activeTheme}
        onClose={() => setIsQuizOpen(false)}
        onJumpToStep={jumpToStep}
      />

      <QrShareModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />
    </div>
  );
}

export default App;
