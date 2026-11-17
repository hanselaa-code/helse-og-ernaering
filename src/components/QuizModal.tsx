import {
  ArrowRight,
  Award,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  X,
  XCircle,
} from 'lucide-react';
import { useState } from 'react';
import type { ThemeConfig } from '../data/types';

interface QuizModalProps {
  isOpen: boolean;
  activeTheme: ThemeConfig;
  onClose: () => void;
  onJumpToStep: (idx: number) => void;
}

export function QuizModal({
  isOpen,
  activeTheme,
  onClose,
  onJumpToStep,
}: QuizModalProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const questions = activeTheme.mcqQuestions;
  const currentQ = questions[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optIdx);
    if (optIdx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 >= questions.length) {
      setIsFinished(true);
    } else {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  const handleGoToRelatedStep = () => {
    const stepIdx = activeTheme.mainStepIds.indexOf(currentQ.relatedStepId);
    if (stepIdx >= 0) {
      onJumpToStep(stepIdx);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl glass-panel p-5 sm:p-6 space-y-5 animate-card-enter max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/35 text-amber-300">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-white font-display">
                {activeTheme.quizTitle}
              </h2>
              <p className="text-xs text-slate-400">
                {isFinished
                  ? 'Resultat'
                  : `Spørsmål ${currentIdx + 1} av ${questions.length}`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isFinished ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white font-display">
                {score} av {questions.length} riktige!
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                {score === questions.length
                  ? 'Full pott! Du har skikkelig god kontroll på dette temaet.'
                  : score >= Math.ceil(questions.length * 0.6)
                    ? 'Bra jobba! Se gjerne gjennom stegene for detaljene du vil finpusse.'
                    : 'God trening! Gå gjennom stegene i presentasjonen og prøv quizen på nytt.'}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/25 hover:bg-emerald-500/35 border border-emerald-400/50 text-sm font-bold text-emerald-100 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Prøv på nytt</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-semibold text-slate-200 cursor-pointer"
              >
                {activeTheme.backFromQuizLabel}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Progress bar */}
            <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-emerald-400 transition-all duration-300"
                style={{
                  width: `${((currentIdx + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {currentQ.question}
            </h3>

            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                const isAnswered = selectedOption !== null;
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let styleClass =
                  'bg-slate-900/80 hover:bg-slate-800/90 border-slate-700/80 text-slate-200';
                if (isAnswered) {
                  if (isCorrect) {
                    styleClass =
                      'bg-emerald-500/20 border-emerald-400 text-emerald-100';
                  } else if (isSelected) {
                    styleClass =
                      'bg-rose-500/20 border-rose-400 text-rose-100';
                  } else {
                    styleClass =
                      'bg-slate-900/40 border-slate-800 text-slate-500';
                  }
                }

                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full flex items-center justify-between gap-3 p-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                      isAnswered ? 'cursor-default' : 'cursor-pointer'
                    } ${styleClass}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {selectedOption !== null && (
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 space-y-3 animate-card-enter">
                <p className="text-sm text-slate-200 leading-relaxed">
                  <span className="font-bold text-emerald-300">
                    Forklaring:{' '}
                  </span>
                  {currentQ.explanation}
                </p>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleGoToRelatedStep}
                    className="text-xs font-semibold text-sky-300 hover:text-sky-200 underline cursor-pointer"
                  >
                    Se relevant steg i presentasjonen
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/25 hover:bg-emerald-500/35 border border-emerald-400/50 text-xs sm:text-sm font-bold text-emerald-100 cursor-pointer"
                  >
                    <span>
                      {currentIdx + 1 >= questions.length
                        ? 'Se resultat'
                        : 'Neste spørsmål'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
