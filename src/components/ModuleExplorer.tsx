import { Focus, Maximize2, Minus, Plus } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getHealthImage } from '../data/images';
import type { HealthNodeData, ThemeConfig } from '../data/types';

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
  cardSide: 'above' | 'below';
}

function getLayoutCoords(count: number): NodeCoord[] {
  const stepX = 330;
  const startX = 240;
  return Array.from({ length: count }, (_, idx) => ({
    x: startX + idx * stepX,
    y: idx % 2 === 0 ? 310 : 240,
    cardSide: idx % 2 === 0 ? 'above' : 'below',
  }));
}

function buildWavePath(a: NodeCoord, b: NodeCoord): string {
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
  const [camera, setCamera] = useState({ x: 520, y: 280, scale: 0.88 });
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
  const coords = getLayoutCoords(nodes.length);
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
      const minX = Math.min(pos.x - 240, prev.x - 160);
      const maxX = Math.max(pos.x + 240, next.x + 160);
      const spanX = Math.max(660, maxX - minX);
      const scaleX = (viewport.width * 0.92) / spanX;
      const scaleY = (viewport.height * 0.85) / 520;
      const scale = Math.max(0.55, Math.min(1.12, Math.min(scaleX, scaleY)));
      return {
        x: pos.x,
        y: 280,
        scale,
      };
    },
    [coords, viewport.height, viewport.width],
  );

  const computeOverviewCamera = useCallback(() => {
    const totalW = Math.max(900, (nodes.length - 1) * 330 + 480);
    const scaleX = (viewport.width * 0.94) / totalW;
    const scaleY = (viewport.height * 0.86) / 540;
    return {
      x: 240 + ((nodes.length - 1) * 330) / 2,
      y: 280,
      scale: Math.max(0.32, Math.min(0.92, Math.min(scaleX, scaleY))),
    };
  }, [nodes.length, viewport.height, viewport.width]);

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
      scale: Math.max(0.32, Math.min(1.5, prev.scale * factor)),
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

  const splitIdx = Math.ceil(nodes.length / 2);

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
      {/* Top-right Camera Controls matching big-bang */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setCameraMode('follow')}
          title="Sentrer kamera på aktivt steg"
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            cameraMode === 'follow'
              ? 'bg-amber-500/20 border-amber-400/60 text-amber-200'
              : 'bg-slate-950/80 hover:bg-slate-900 border-slate-700 text-slate-300'
          }`}
        >
          <Focus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Følg steg</span>
        </button>

        <button
          type="button"
          onClick={() => setCameraMode('overview')}
          title="Vis hele oversikten"
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            cameraMode === 'overview'
              ? 'bg-sky-500/20 border-sky-400/60 text-sky-200'
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
                scale: Math.max(0.32, p.scale * 0.85),
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
                scale: Math.min(1.5, p.scale * 1.18),
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
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="55%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Top Zone Banners matching GalaxiesExplorer in big-bang */}
        <g transform="translate(80, 26)">
          <rect
            x="0"
            y="0"
            width={splitIdx * 330 - 30}
            height="28"
            rx="14"
            fill="rgba(120, 53, 15, 0.35)"
            stroke="rgba(245, 158, 11, 0.45)"
            strokeWidth="1.2"
          />
          <text
            x={(splitIdx * 330 - 30) / 2}
            y="14"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#FDE68A"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.8"
          >
            DEL 1 • GRUNNLAG &amp; MEKANISMER ({activeTheme.stepWord.toUpperCase()} 1–{splitIdx})
          </text>
        </g>

        <g transform={`translate(${80 + splitIdx * 330}, 26)`}>
          <rect
            x="0"
            y="0"
            width={(nodes.length - splitIdx) * 330 + 120}
            height="28"
            rx="14"
            fill="rgba(12, 74, 110, 0.35)"
            stroke="rgba(56, 189, 248, 0.45)"
            strokeWidth="1.2"
          />
          <text
            x={((nodes.length - splitIdx) * 330 + 120) / 2}
            y="14"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#BAE6FD"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.8"
          >
            DEL 2 • ANVENDELSE &amp; HELHET ({activeTheme.stepWord.toUpperCase()} {splitIdx + 1}–{nodes.length})
          </text>
        </g>

        {/* Connecting Wavy Curve */}
        {nodes.slice(0, -1).map((node, idx) => {
          const a = coords[idx];
          const b = coords[idx + 1];
          const unlocked = idx + 1 <= effectiveMaxStep;
          return (
            <path
              key={`wave-${node.id}`}
              d={buildWavePath(a, b)}
              fill="none"
              stroke={unlocked ? 'url(#waveGrad)' : '#334155'}
              strokeWidth={unlocked ? 3.5 : 2.5}
              strokeOpacity={unlocked ? 0.85 : 0.45}
              strokeDasharray={unlocked ? undefined : '7 7'}
            />
          );
        })}

        {/* Card-on-Curve Nodes matching image_2.png */}
        {nodes.map((node: HealthNodeData, idx: number) => {
          const pos = coords[idx];
          const isCurrent = idx === currentStepIndex;
          const isUnlocked = idx <= effectiveMaxStep;
          const imgHref = node.image ?? themeImgUrl;
          const cardOffsetY = pos.cardSide === 'above' ? -185 : 32;

          return (
            <g
              key={node.id}
              onClick={(e) => {
                e.stopPropagation();
                onSelectStep(idx);
              }}
              className="cursor-pointer"
              style={{ opacity: isUnlocked ? 1 : 0.42 }}
            >
              {/* Vertical stem connecting curve circle to card */}
              <line
                x1={pos.x}
                y1={pos.y}
                x2={pos.x}
                y2={pos.cardSide === 'above' ? pos.y - 34 : pos.y + 34}
                stroke={isCurrent ? '#FBBF24' : '#38BDF8'}
                strokeWidth="2"
                strokeOpacity="0.65"
              />

              {/* Rich 16:9 Image Card matching image_2.png */}
              <g transform={`translate(${pos.x - 115}, ${pos.y + cardOffsetY})`}>
                <rect
                  x="0"
                  y="0"
                  width="230"
                  height="156"
                  rx="14"
                  fill={isCurrent ? '#0F1C33' : '#0A1324'}
                  stroke={isCurrent ? '#FBBF24' : '#38BDF8'}
                  strokeOpacity={isCurrent ? 0.95 : 0.45}
                  strokeWidth={isCurrent ? 2.5 : 1.5}
                />
                <foreignObject x="6" y="6" width="218" height="144">
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="relative w-full h-[94px] rounded-lg overflow-hidden bg-slate-950 border border-slate-800">
                      <img
                        src={imgHref}
                        alt={node.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-slate-950/85 border border-slate-700 text-[9px] font-mono-time text-sky-200 truncate max-w-[195px]">
                        {node.primaryBadge}
                      </span>
                    </div>

                    <div className="px-1 pt-1 text-center">
                      <div className="text-[11.5px] font-extrabold text-white truncate font-display">
                        {node.shortLabel}
                      </div>
                      <div
                        className={`mt-0.5 inline-block px-2 py-0.5 rounded-full text-[9px] font-bold truncate max-w-full ${
                          isCurrent
                            ? 'bg-amber-500/20 text-amber-200 border border-amber-400/40'
                            : 'bg-sky-500/15 text-sky-200 border border-sky-400/30'
                        }`}
                      >
                        {node.eraLabel} • {node.secondaryBadge}
                      </div>
                    </div>
                  </div>
                </foreignObject>
              </g>

              {/* Numbered circle sitting on the curve */}
              <g transform={`translate(${pos.x}, ${pos.y})`}>
                {isCurrent && (
                  <circle
                    r="24"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="2.5"
                    className="node-pulse-ring"
                  />
                )}
                <circle
                  r="17"
                  fill={isCurrent ? '#F59E0B' : '#0F172A'}
                  stroke={isCurrent ? '#FDE68A' : '#38BDF8'}
                  strokeWidth={isCurrent ? 3 : 2}
                />
                <text
                  x="0"
                  y="0.5"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={isCurrent ? '#080D1A' : '#E0F2FE'}
                  fontSize="13"
                  fontWeight="800"
                >
                  {node.stepNumber}
                </text>
              </g>
            </g>
          );
        })}
      </svg>

      {/* Bottom hint */}
      <div className="absolute bottom-2.5 left-3 z-10 pointer-events-none text-[11px] text-slate-400 bg-slate-950/75 px-2.5 py-1 rounded-lg border border-slate-800">
        Dra for å panorere • Scroll for å zoome • Klikk på et steg
      </div>
    </div>
  );
}
