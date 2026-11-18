import { Focus, Maximize2, Minus, Plus, Sparkles } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getHealthImage } from '../data/images';
import type { HealthNodeData, ThemeConfig } from '../data/types';

interface DigestiveBodyExplorerProps {
  activeTheme: ThemeConfig;
  currentStepIndex: number;
  unlockedStepIndex: number;
  showAllSteps: boolean;
  onSelectStep: (idx: number) => void;
}

type DigestivePhase = 'mechanical' | 'chemical' | 'absorption';

interface DigestiveLayoutNode {
  stepIndex: number;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  side: 'left' | 'right';
  phase: DigestivePhase;
}

const CARD_W = 340;
const CARD_H = 92;

const DIGESTIVE_LAYOUT: DigestiveLayoutNode[] = [
  {
    stepIndex: 0, // Munnhule
    x: 240,
    y: 175,
    anchorX: 825,
    anchorY: 165,
    side: 'left',
    phase: 'mechanical',
  },
  {
    stepIndex: 1, // Spiserør
    x: 1410,
    y: 240,
    anchorX: 825,
    anchorY: 285,
    side: 'right',
    phase: 'mechanical',
  },
  {
    stepIndex: 2, // Magesekk
    x: 1410,
    y: 490,
    anchorX: 865,
    anchorY: 465,
    side: 'right',
    phase: 'chemical',
  },
  {
    stepIndex: 3, // Lever & galleblære
    x: 240,
    y: 400,
    anchorX: 762,
    anchorY: 455,
    side: 'left',
    phase: 'chemical',
  },
  {
    stepIndex: 4, // Tolvfingertarm & bukspyttkjertel
    x: 240,
    y: 615,
    anchorX: 806,
    anchorY: 536,
    side: 'left',
    phase: 'chemical',
  },
  {
    stepIndex: 5, // Tynntarm & tarmtotter
    x: 240,
    y: 830,
    anchorX: 815,
    anchorY: 625,
    side: 'left',
    phase: 'absorption',
  },
  {
    stepIndex: 6, // Tykktarm & tarmflora
    x: 1410,
    y: 755,
    anchorX: 900,
    anchorY: 655,
    side: 'right',
    phase: 'absorption',
  },
];

function getPhaseColors(phase: DigestivePhase) {
  switch (phase) {
    case 'mechanical':
      return {
        fill: '#F59E0B',
        stroke: '#FDE68A',
        cardBorder: 'rgba(251, 191, 36, 0.48)',
        badgeBg: 'rgba(245, 158, 11, 0.18)',
        badgeText: '#FDE68A',
      };
    case 'chemical':
      return {
        fill: '#10B981',
        stroke: '#A7F3D0',
        cardBorder: 'rgba(52, 211, 153, 0.48)',
        badgeBg: 'rgba(16, 185, 129, 0.18)',
        badgeText: '#A7F3D0',
      };
    case 'absorption':
    default:
      return {
        fill: '#38BDF8',
        stroke: '#BAE6FD',
        cardBorder: 'rgba(56, 189, 248, 0.45)',
        badgeBg: 'rgba(14, 165, 233, 0.18)',
        badgeText: '#BAE6FD',
      };
  }
}

function buildLeaderPath(layout: DigestiveLayoutNode): string {
  const targetX =
    layout.side === 'left' ? layout.x + CARD_W / 2 : layout.x - CARD_W / 2;
  const targetY = layout.y;
  const dx = targetX - layout.anchorX;

  const c1x = layout.anchorX + dx * 0.42;
  const c1y = layout.anchorY;
  const c2x = targetX - dx * 0.36;
  const c2y = targetY;

  return `M ${layout.anchorX} ${layout.anchorY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${targetX} ${targetY}`;
}

export function DigestiveBodyExplorer({
  activeTheme,
  currentStepIndex,
  unlockedStepIndex,
  showAllSteps,
  onSelectStep,
}: DigestiveBodyExplorerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: 920, height: 680 });
  const [camera, setCamera] = useState({ x: 825, y: 510, scale: 0.54 });
  const [cameraMode, setCameraMode] = useState<'follow' | 'overview' | 'manual'>(
    'follow',
  );
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef<{
    startX: number;
    startY: number;
    camStartX: number;
    camStartY: number;
    moved: boolean;
  } | null>(null);

  const nodes = activeTheme.allNodes;
  const effectiveMaxStep = showAllSteps ? nodes.length - 1 : unlockedStepIndex;
  const centralBodyImage = getHealthImage('body_digestive_clean.jpg');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setViewport({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const computeOverviewCamera = useCallback(() => {
    const worldW = 1660;
    const worldH = 1080;
    const scale = Math.max(
      0.24,
      Math.min(0.95, Math.min(viewport.width / worldW, viewport.height / worldH)),
    );
    return {
      x: 825,
      y: 520,
      scale,
    };
  }, [viewport.height, viewport.width]);

  const computeFollowCamera = useCallback(
    (stepIdx: number) => {
      if (showAllSteps) {
        return computeOverviewCamera();
      }
      const selected = DIGESTIVE_LAYOUT[stepIdx] ?? DIGESTIVE_LAYOUT[0];

      const cardLeft = selected.x - CARD_W / 2 - 45;
      const cardRight = selected.x + CARD_W / 2 + 45;
      const bodyLeft = 650;
      const bodyRight = 1000;

      const minX = Math.min(cardLeft, bodyLeft, selected.anchorX - 90);
      const maxX = Math.max(cardRight, bodyRight, selected.anchorX + 90);
      const minY = Math.min(selected.y - 120, selected.anchorY - 160);
      const maxY = Math.max(selected.y + 120, selected.anchorY + 160);

      const spanX = Math.max(760, maxX - minX);
      const spanY = Math.max(540, maxY - minY);

      const rawScale = Math.min(viewport.width / spanX, viewport.height / spanY);
      const clampedScale = Math.max(0.36, Math.min(1.02, rawScale));

      return {
        x: (minX + maxX) / 2,
        y: (minY + maxY) / 2,
        scale: clampedScale,
      };
    },
    [computeOverviewCamera, showAllSteps, viewport.height, viewport.width],
  );

  useEffect(() => {
    setCameraMode(showAllSteps ? 'overview' : 'follow');
  }, [currentStepIndex, unlockedStepIndex, showAllSteps]);

  useEffect(() => {
    if (cameraMode === 'follow') {
      setCamera(computeFollowCamera(currentStepIndex));
    } else if (cameraMode === 'overview') {
      setCamera(computeOverviewCamera());
    }
  }, [cameraMode, computeFollowCamera, computeOverviewCamera, currentStepIndex]);

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.button !== 0) return;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      camStartX: camera.x,
      camStartY: camera.y,
      moved: false,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      drag.moved = true;
      setCameraMode('manual');
      setCamera((prev) => ({
        ...prev,
        x: drag.camStartX - dx / prev.scale,
        y: drag.camStartY - dy / prev.scale,
      }));
    }
  };

  const handlePointerUp = () => {
    dragRef.current = null;
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    setCameraMode('manual');
    setCamera((prev) => ({
      ...prev,
      scale: Math.max(0.22, Math.min(2.0, prev.scale * factor)),
    }));
  };

  const pairedNodes = useMemo(
    () =>
      nodes
        .map((node: HealthNodeData, idx: number) => ({
          node,
          layout: DIGESTIVE_LAYOUT[idx],
        }))
        .filter((item) => Boolean(item.layout)),
    [nodes],
  );

  const unlockedItems = useMemo(
    () => pairedNodes.filter((item) => item.layout.stepIndex <= effectiveMaxStep),
    [effectiveMaxStep, pairedNodes],
  );

  const lockedItems = useMemo(
    () => pairedNodes.filter((item) => item.layout.stepIndex > effectiveMaxStep),
    [effectiveMaxStep, pairedNodes],
  );

  const translateX = viewport.width / 2 - camera.x * camera.scale;
  const translateY = viewport.height / 2 - camera.y * camera.scale;

  return (
    <div
      ref={containerRef}
      id="digestive-body-explorer-canvas"
      className="relative w-full h-full overflow-hidden rounded-2xl glass-panel select-none"
    >
      {/* Top-left legend matching livets-tre HumanBodyExplorer */}
      <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10 flex flex-wrap items-center gap-2 sm:gap-3 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl glass-subtle text-[11px] sm:text-xs text-slate-300 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Mekanisk &amp; transport</span>
        </span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <span className="inline-flex items-center gap-1.5 font-medium text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Kjemisk &amp; enzymer</span>
        </span>
        <span className="text-slate-600 hidden md:inline">•</span>
        <span className="hidden md:inline-flex items-center gap-1.5 font-medium text-sky-300">
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span>Opptak &amp; vannbalanse</span>
        </span>
      </div>

      {/* Camera controls floating bottom-left */}
      <div className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 z-10 flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-xl glass-subtle">
        <button
          id="btn-body-zoom-in"
          type="button"
          onClick={() => {
            setCameraMode('manual');
            setCamera((prev) => ({
              ...prev,
              scale: Math.min(2.0, prev.scale * 1.2),
            }));
          }}
          title="Zoom inn"
          className="p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          id="btn-body-zoom-out"
          type="button"
          onClick={() => {
            setCameraMode('manual');
            setCamera((prev) => ({
              ...prev,
              scale: Math.max(0.22, prev.scale / 1.2),
            }));
          }}
          title="Zoom ut"
          className="p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
        >
          <Minus className="w-4 h-4" />
        </button>
        <div className="w-px h-5 bg-slate-700/70 mx-0.5" />
        <button
          id="btn-body-camera-follow"
          type="button"
          onClick={() => {
            setCameraMode('follow');
            setCamera(computeFollowCamera(currentStepIndex));
          }}
          className={`inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            cameraMode === 'follow'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/35'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
          }`}
          title="Fokuser på valgt organ"
        >
          <Focus className="w-3.5 h-3.5" />
          <span>Følg</span>
        </button>
        <button
          id="btn-body-camera-overview"
          type="button"
          onClick={() => {
            setCameraMode('overview');
            setCamera(computeOverviewCamera());
          }}
          className={`inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            cameraMode === 'overview'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/35'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
          }`}
          title="Vis hele kroppen og alle fordøyelsesorganene"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Hele kroppen</span>
        </button>
      </div>

      {/* Hint bottom-right */}
      <div className="hidden sm:flex absolute bottom-3.5 right-3.5 z-10 items-center gap-1.5 px-3 py-1.5 rounded-xl glass-subtle text-[11px] text-slate-400 pointer-events-none">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Klikk på et punkt på kroppen eller et kort rundt</span>
      </div>

      <svg
        className={`w-full h-full touch-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
        role="img"
        aria-label="Interaktivt tankekart over fordøyelsessystemet"
      >
        <defs>
          <radialGradient id="digestiveBodyAura" cx="50%" cy="48%" r="50%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.16)" />
            <stop offset="55%" stopColor="rgba(245, 158, 11, 0.06)" />
            <stop offset="100%" stopColor="rgba(11, 17, 32, 0)" />
          </radialGradient>

          <filter id="digestiveSoftGlow" x="-45%" y="-45%" width="190%" height="190%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          style={{
            transform: `translate(${translateX}px, ${translateY}px) scale(${camera.scale})`,
            transformOrigin: '0 0',
            transition: isDragging
              ? 'none'
              : 'transform 680ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Ambient Vitruvian rings around the central human digestive figure */}
          <g className="pointer-events-none">
            <ellipse
              cx={825}
              cy={535}
              rx={350}
              ry={495}
              fill="url(#digestiveBodyAura)"
            />
            <circle
              cx={825}
              cy={535}
              r={450}
              fill="none"
              stroke="rgba(16, 185, 129, 0.14)"
              strokeWidth={1.5}
              strokeDasharray="6 12"
            />
            <circle
              cx={825}
              cy={535}
              r={335}
              fill="none"
              stroke="rgba(245, 158, 11, 0.12)"
              strokeWidth={1.2}
              strokeDasharray="3 9"
            />
            <text
              x={825}
              y={46}
              textAnchor="middle"
              fill="rgba(148, 163, 184, 0.55)"
              fontSize={12}
              fontWeight={700}
              letterSpacing="0.16em"
              className="font-mono-time"
            >
              FORDØYELSESSYSTEMET • FRA MATBIT TIL NÆRING
            </text>
          </g>

          {/* Central Nano Banana Bioluminescent Digestive System Figure */}
          <image
            href={centralBodyImage}
            x={435}
            y={20}
            width={780}
            height={1040}
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none"
          />

          {/* Ghost leader lines & clickable beacons for locked steps */}
          {lockedItems.map(({ node, layout }) => (
            <g key={`locked-digestive-${node.id}`}>
              <path
                d={buildLeaderPath(layout)}
                fill="none"
                stroke="rgba(148, 163, 184, 0.08)"
                strokeWidth={1.8}
                strokeDasharray="5 8"
                className="pointer-events-none"
              />

              <rect
                x={layout.x - CARD_W / 2}
                y={layout.y - CARD_H / 2}
                width={CARD_W}
                height={CARD_H}
                rx={16}
                fill="rgba(15, 23, 42, 0.32)"
                stroke="rgba(148, 163, 184, 0.1)"
                strokeWidth={1.2}
                strokeDasharray="5 7"
                onClick={(e) => {
                  e.stopPropagation();
                  if (dragRef.current?.moved) return;
                  onSelectStep(layout.stepIndex);
                }}
                className="cursor-pointer hover:stroke-emerald-400/40 transition-colors"
              />
              <text
                x={layout.x}
                y={layout.y + 4}
                textAnchor="middle"
                fill="rgba(148, 163, 184, 0.35)"
                fontSize={12.5}
                fontWeight={600}
                className="pointer-events-none font-mono-time"
              >
                Steg {node.stepNumber} • Klikk eller trykk Neste
              </text>

              <g
                onClick={(e) => {
                  e.stopPropagation();
                  if (dragRef.current?.moved) return;
                  onSelectStep(layout.stepIndex);
                }}
                className="cursor-pointer"
              >
                <circle
                  cx={layout.anchorX}
                  cy={layout.anchorY}
                  r={22}
                  fill="transparent"
                />
                <circle
                  cx={layout.anchorX}
                  cy={layout.anchorY}
                  r={9}
                  fill="rgba(15, 23, 42, 0.85)"
                  stroke="rgba(148, 163, 184, 0.45)"
                  strokeWidth={2}
                />
                <text
                  x={layout.anchorX}
                  y={layout.anchorY + 3.5}
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize={10}
                  fontWeight={800}
                  className="pointer-events-none font-display"
                >
                  {node.stepNumber}
                </text>
              </g>
            </g>
          ))}

          {/* Unlocked Mind-Map Leader Curves, Anatomical Hotspots & Topic Cards */}
          {unlockedItems.map(({ node, layout }) => {
            const isSelected = layout.stepIndex === currentStepIndex;
            const colors = getPhaseColors(layout.phase);
            const pathData = buildLeaderPath(layout);
            const cardLeft = layout.x - CARD_W / 2;
            const cardTop = layout.y - CARD_H / 2;

            return (
              <g key={node.id} id={`digestive-node-${node.id}`}>
                {/* Ambient glow under active leader curve */}
                <path
                  d={pathData}
                  fill="none"
                  stroke={colors.fill}
                  strokeWidth={isSelected ? 10 : 5}
                  strokeLinecap="round"
                  opacity={isSelected ? 0.32 : 0.1}
                  className="pointer-events-none"
                />

                {/* Crisp animated leader curve */}
                <path
                  d={pathData}
                  pathLength={1}
                  fill="none"
                  stroke={isSelected ? colors.stroke : colors.fill}
                  strokeWidth={isSelected ? 3.6 : 2.2}
                  strokeLinecap="round"
                  opacity={isSelected ? 1 : 0.72}
                  className="animate-branch-draw pointer-events-none"
                />

                {/* Anatomical hotspot pin on the central body */}
                <g
                  onClick={(e) => {
                    e.stopPropagation();
                    if (dragRef.current?.moved) return;
                    onSelectStep(layout.stepIndex);
                  }}
                  className="cursor-pointer"
                >
                  <circle
                    cx={layout.anchorX}
                    cy={layout.anchorY}
                    r={28}
                    fill="transparent"
                  />
                  {isSelected && (
                    <>
                      <circle
                        cx={layout.anchorX}
                        cy={layout.anchorY}
                        r={23}
                        fill="none"
                        stroke={colors.stroke}
                        strokeWidth={2.5}
                        className="node-pulse-ring"
                      />
                      <circle
                        cx={layout.anchorX}
                        cy={layout.anchorY}
                        r={18}
                        fill="none"
                        stroke={colors.fill}
                        strokeWidth={2}
                        opacity={0.85}
                      />
                    </>
                  )}
                  <circle
                    cx={layout.anchorX}
                    cy={layout.anchorY}
                    r={isSelected ? 13.5 : 10.5}
                    fill={isSelected ? colors.fill : '#0B1120'}
                    stroke={isSelected ? '#FFFFFF' : colors.stroke}
                    strokeWidth={isSelected ? 3 : 2.4}
                    filter="url(#digestiveSoftGlow)"
                  />
                  <text
                    x={layout.anchorX}
                    y={layout.anchorY + 4}
                    textAnchor="middle"
                    fill={isSelected ? '#08101E' : '#F8FAFC'}
                    fontSize={11.5}
                    fontWeight={800}
                    className="pointer-events-none font-display"
                  >
                    {node.stepNumber}
                  </text>
                </g>

                {/* Mind-Map Node Card on Left or Right */}
                <g
                  onClick={(e) => {
                    e.stopPropagation();
                    if (dragRef.current?.moved) return;
                    onSelectStep(layout.stepIndex);
                  }}
                  className="cursor-pointer group"
                >
                  {isSelected && (
                    <rect
                      x={cardLeft - 4}
                      y={cardTop - 4}
                      width={CARD_W + 8}
                      height={CARD_H + 8}
                      rx={20}
                      fill="none"
                      stroke={colors.fill}
                      strokeWidth={2.2}
                      opacity={0.55}
                      filter="url(#digestiveSoftGlow)"
                    />
                  )}

                  <rect
                    x={cardLeft}
                    y={cardTop}
                    width={CARD_W}
                    height={CARD_H}
                    rx={16}
                    fill={
                      isSelected
                        ? 'rgba(17, 29, 52, 0.96)'
                        : 'rgba(12, 20, 36, 0.90)'
                    }
                    stroke={isSelected ? colors.stroke : colors.cardBorder}
                    strokeWidth={isSelected ? 2.6 : 1.5}
                  />

                  {/* Step Number Circle inside Card */}
                  <circle
                    cx={cardLeft + 30}
                    cy={layout.y}
                    r={16}
                    fill={isSelected ? colors.fill : colors.badgeBg}
                    stroke={isSelected ? '#FFFFFF' : colors.cardBorder}
                    strokeWidth={1.6}
                  />
                  <text
                    x={cardLeft + 30}
                    y={layout.y + 4.5}
                    textAnchor="middle"
                    fill={isSelected ? '#08101E' : colors.badgeText}
                    fontSize={13}
                    fontWeight={800}
                    className="pointer-events-none font-display"
                  >
                    {node.stepNumber}
                  </text>

                  {/* Card Title */}
                  <text
                    x={cardLeft + 56}
                    y={cardTop + 33}
                    fill="#FFFFFF"
                    fontSize={15.5}
                    fontWeight={800}
                    className="pointer-events-none font-display"
                  >
                    {node.shortLabel}
                  </text>

                  {/* Primary & Secondary Badges */}
                  <text
                    x={cardLeft + 56}
                    y={cardTop + 56}
                    fill="#FCD34D"
                    fontSize={12}
                    fontWeight={700}
                    className="pointer-events-none font-mono-time"
                  >
                    {node.primaryBadge}
                  </text>

                  <text
                    x={cardLeft + 56}
                    y={cardTop + 75}
                    fill={colors.badgeText}
                    fontSize={11.5}
                    fontWeight={600}
                    className="pointer-events-none"
                  >
                    {node.secondaryBadge}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
