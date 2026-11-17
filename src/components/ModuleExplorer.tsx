import { Focus, Maximize2, Minus, Plus } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getHealthImage } from '../data/images';
import type { HealthNodeData, ThemeConfig, ThemeId } from '../data/types';

interface ModuleExplorerProps {
  activeTheme: ThemeConfig;
  currentStepIndex: number;
  unlockedStepIndex: number;
  showAllSteps: boolean;
  onSelectStep: (idx: number) => void;
}

interface NodeCoord {
  x: number;
  y: number;
}

const LAYOUT_COORDS: Record<ThemeId, NodeCoord[]> = {
  naeringsstoffer: [
    { x: 220, y: 310 },
    { x: 470, y: 185 },
    { x: 740, y: 310 },
    { x: 1010, y: 185 },
    { x: 1280, y: 310 },
    { x: 1550, y: 210 },
  ],
  fordoyelsen: [
    { x: 200, y: 210 },
    { x: 470, y: 185 },
    { x: 740, y: 270 },
    { x: 1010, y: 345 },
    { x: 1280, y: 235 },
    { x: 1550, y: 310 },
  ],
  celleanding: [
    { x: 220, y: 280 },
    { x: 540, y: 195 },
    { x: 875, y: 295 },
    { x: 1210, y: 195 },
    { x: 1530, y: 280 },
  ],
  vaeskebalanse: [
    { x: 220, y: 215 },
    { x: 540, y: 335 },
    { x: 875, y: 205 },
    { x: 1210, y: 325 },
    { x: 1530, y: 215 },
  ],
  trening: [
    { x: 220, y: 300 },
    { x: 540, y: 185 },
    { x: 875, y: 235 },
    { x: 1210, y: 335 },
    { x: 1530, y: 215 },
  ],
  kosthold: [
    { x: 200, y: 280 },
    { x: 470, y: 190 },
    { x: 740, y: 305 },
    { x: 1010, y: 190 },
    { x: 1280, y: 315 },
    { x: 1550, y: 210 },
  ],
  kildekritikk: [
    { x: 220, y: 335 },
    { x: 540, y: 245 },
    { x: 875, y: 165 },
    { x: 1210, y: 265 },
    { x: 1530, y: 200 },
  ],
};

function buildBezierPath(a: NodeCoord, b: NodeCoord): string {
  const dx = b.x - a.x;
  return `M ${a.x} ${a.y} C ${a.x + dx * 0.45} ${a.y}, ${b.x - dx * 0.45} ${b.y}, ${b.x} ${b.y}`;
}

export function ModuleExplorer({
  activeTheme,
  currentStepIndex,
  unlockedStepIndex,
  showAllSteps,
  onSelectStep,
}: ModuleExplorerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: 900, height: 600 });
  const [camera, setCamera] = useState({ x: 875, y: 265, scale: 0.72 });
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
  const coords = LAYOUT_COORDS[activeTheme.id];
  const effectiveMaxStep = showAllSteps ? nodes.length - 1 : unlockedStepIndex;
  const themeImgUrl = getHealthImage(`mod_${activeTheme.id}.jpg`);

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

  const computeFollowCamera = useCallback(
    (stepIdx: number) => {
      const pos = coords[stepIdx] ?? coords[0];
      const prev = coords[Math.max(0, stepIdx - 1)];
      const next = coords[Math.min(coords.length - 1, stepIdx + 1)];
      const minX = Math.min(pos.x - 240, prev.x - 140);
      const maxX = Math.max(pos.x + 240, next.x + 140);
      const spanX = Math.max(560, maxX - minX);
      const scaleX = (viewport.width * 0.9) / spanX;
      const scaleY = (viewport.height * 0.82) / 480;
      const scale = Math.max(0.55, Math.min(1.18, Math.min(scaleX, scaleY)));
      return {
        x: pos.x,
        y: pos.y + 18,
        scale,
      };
    },
    [coords, viewport.height, viewport.width],
  );

  const computeOverviewCamera = useCallback(() => {
    const minX = 60;
    const maxX = 1690;
    const scaleX = (viewport.width * 0.94) / (maxX - minX);
    const scaleY = (viewport.height * 0.86) / 520;
    return {
      x: 875,
      y: 270,
      scale: Math.max(0.35, Math.min(0.95, Math.min(scaleX, scaleY))),
    };
  }, [viewport.height, viewport.width]);

  useEffect(() => {
    if (cameraMode === 'follow') {
      setCamera(computeFollowCamera(currentStepIndex));
    } else if (cameraMode === 'overview') {
      setCamera(computeOverviewCamera());
    }
  }, [
    activeTheme.id,
    cameraMode,
    computeFollowCamera,
    computeOverviewCamera,
    currentStepIndex,
  ]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 0.89;
    setCameraMode('manual');
    setCamera((prev) => ({
      ...prev,
      scale: Math.max(0.35, Math.min(1.6, prev.scale * factor)),
    }));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
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

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    if (Math.hypot(dx, dy) > 4) {
      dragRef.current.moved = true;
      setCameraMode('manual');
    }
    setCamera((prev) => ({
      ...prev,
      x: dragRef.current!.camStartX - dx / prev.scale,
      y: dragRef.current!.camStartY - dy / prev.scale,
    }));
  };

  const handlePointerUp = () => {
    dragRef.current = null;
    setIsDragging(false);
  };

  const viewWidth = viewport.width / camera.scale;
  const viewHeight = viewport.height / camera.scale;
  const viewBox = `${camera.x - viewWidth / 2} ${camera.y - viewHeight / 2} ${viewWidth} ${viewHeight}`;

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className={`relative h-full w-full rounded-2xl glass-panel overflow-hidden select-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      {/* Top-left module badge */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/75 border border-slate-700/70 backdrop-blur-md">
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: activeTheme.accentHex }}
        />
        <span className="text-xs font-bold text-white font-display">
          {activeTheme.dropdownTitle}
        </span>
      </div>

      {/* Top-right Camera Controls (matching BigBangTimeline) */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setCameraMode('follow')}
          title="Sentrer kamera på aktivt steg"
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            cameraMode === 'follow'
              ? 'bg-emerald-500/25 border-emerald-400/60 text-emerald-100'
              : 'bg-slate-950/80 hover:bg-slate-900 border-slate-700 text-slate-300'
          }`}
        >
          <Focus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Følg steg</span>
        </button>

        <button
          type="button"
          onClick={() => setCameraMode('overview')}
          title="Vis hele tidslinjen / oversikten"
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            cameraMode === 'overview'
              ? 'bg-sky-500/25 border-sky-400/60 text-sky-100'
              : 'bg-slate-950/80 hover:bg-slate-900 border-slate-700 text-slate-300'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Hele oversikten</span>
        </button>

        <div className="flex items-center rounded-xl bg-slate-950/80 border border-slate-700 overflow-hidden">
          <button
            type="button"
            onClick={() => {
              setCameraMode('manual');
              setCamera((p) => ({
                ...p,
                scale: Math.max(0.35, p.scale * 0.85),
              }));
            }}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
            title="Zoom ut"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => {
              setCameraMode('manual');
              setCamera((p) => ({
                ...p,
                scale: Math.min(1.6, p.scale * 1.18),
              }));
            }}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 border-l border-slate-700 cursor-pointer"
            title="Zoom inn"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Pan/Zoom SVG Canvas */}
      <svg
        viewBox={viewBox}
        className="w-full h-full"
        role="img"
        aria-label={activeTheme.title}
      >
        <defs>
          <radialGradient id="modAmbient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={activeTheme.accentHex} stopOpacity="0.16" />
            <stop offset="100%" stopColor="#07111A" stopOpacity="0" />
          </radialGradient>

          <clipPath id="clip-step-thumb">
            <circle cx="0" cy="0" r="48" />
          </clipPath>
        </defs>

        {/* Subtle ambient backdrop ellipse */}
        <ellipse cx="875" cy="265" rx="820" ry="230" fill="url(#modAmbient)" />

        {/* Scale track along bottom */}
        <line
          x1="120"
          y1="455"
          x2="1630"
          y2="455"
          stroke="rgba(148,163,184,0.22)"
          strokeWidth="2"
        />

        {/* Connecting Bezier segments */}
        {nodes.slice(0, -1).map((node, idx) => {
          const a = coords[idx];
          const b = coords[idx + 1];
          const unlocked = idx + 1 <= effectiveMaxStep;
          return (
            <path
              key={`seg-${node.id}`}
              d={buildBezierPath(a, b)}
              fill="none"
              stroke={unlocked ? node.accentColor : '#334155'}
              strokeWidth={unlocked ? 4.5 : 3}
              strokeOpacity={unlocked ? 0.78 : 0.45}
              strokeDasharray={unlocked ? undefined : '8 8'}
              strokeLinecap="round"
            />
          );
        })}

        {/* Circular Nano Banana Step Nodes */}
        {nodes.map((node: HealthNodeData, idx: number) => {
          const pos = coords[idx];
          const isCurrent = idx === currentStepIndex;
          const isUnlocked = idx <= effectiveMaxStep;
          const imgHref = node.image ?? themeImgUrl;

          return (
            <g key={node.id}>
              {/* Bottom scale tick */}
              <line
                x1={pos.x}
                y1="448"
                x2={pos.x}
                y2="462"
                stroke={isCurrent ? node.accentColor : '#64748B'}
                strokeWidth={isCurrent ? 3 : 2}
              />
              <text
                x={pos.x}
                y="482"
                textAnchor="middle"
                fill={isCurrent ? '#F8FAFC' : '#94A3B8'}
                fontSize="13"
                fontWeight={isCurrent ? '800' : '600'}
              >
                {node.eraLabel}
              </text>

              <g
                transform={`translate(${pos.x}, ${pos.y})`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectStep(idx);
                }}
                className="cursor-pointer"
                style={{ opacity: isUnlocked ? 1 : 0.42 }}
              >
                {/* Pulse ring on active node */}
                {isCurrent && (
                  <circle
                    r="62"
                    fill="none"
                    stroke={node.accentColor}
                    strokeWidth="2.5"
                    className="node-pulse-ring"
                  />
                )}

                {/* Outer halo */}
                <circle
                  r={isCurrent ? 55 : 51}
                  fill="none"
                  stroke={isCurrent ? '#FDE68A' : node.accentColor}
                  strokeOpacity={isCurrent ? 0.85 : 0.4}
                  strokeWidth={isCurrent ? 3 : 1.5}
                />

                {/* Clipped Nano Banana illustration */}
                <g clipPath="url(#clip-step-thumb)">
                  <circle r="48" fill="#0B1726" />
                  <image
                    href={imgHref}
                    x="-54"
                    y="-54"
                    width="108"
                    height="108"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <circle
                    r="48"
                    fill="rgba(7, 17, 26, 0.46)"
                  />
                </g>

                {/* Crisp circle border */}
                <circle
                  r="48"
                  fill="none"
                  stroke={isCurrent ? '#FBBF24' : node.accentColor}
                  strokeWidth={isCurrent ? 4 : 2.5}
                />

                {/* Step number badge */}
                <circle
                  cx="0"
                  cy="-46"
                  r="14"
                  fill={isCurrent ? '#F59E0B' : '#0F172A'}
                  stroke={isCurrent ? '#FDE68A' : node.accentColor}
                  strokeWidth="2"
                />
                <text
                  x="0"
                  y="-46"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={isCurrent ? '#07111A' : '#F8FAFC'}
                  fontSize="12"
                  fontWeight="800"
                >
                  {node.stepNumber}
                </text>

                {/* Title pill below circle */}
                <g transform="translate(0, 72)">
                  <rect
                    x="-92"
                    y="-17"
                    width="184"
                    height="34"
                    rx="11"
                    fill={isCurrent ? '#12263B' : 'rgba(9, 17, 29, 0.92)'}
                    stroke={isCurrent ? '#FBBF24' : node.accentColor}
                    strokeWidth={isCurrent ? 2 : 1.2}
                  />
                  <text
                    x="0"
                    y="-2"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#F8FAFC"
                    fontSize="12.5"
                    fontWeight="800"
                    className="font-display"
                  >
                    {node.shortLabel}
                  </text>
                  <text
                    x="0"
                    y="11"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={node.accentColor}
                    fontSize="9.5"
                    fontWeight="700"
                  >
                    {node.primaryBadge}
                  </text>
                </g>
              </g>
            </g>
          );
        })}
      </svg>

      {/* Bottom hint */}
      <div className="absolute bottom-2.5 left-3 z-10 pointer-events-none text-[11px] text-slate-400 bg-slate-950/70 px-2.5 py-1 rounded-lg border border-slate-800">
        Dra for å panorere • Scroll for å zoome • Klikk på et steg
      </div>
    </div>
  );
}
