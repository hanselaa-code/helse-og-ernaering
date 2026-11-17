import { GraduationCap, Sparkles } from 'lucide-react';
import { useState } from 'react';
import {
  COMPETENCE_GOALS,
  HEALTH_CENTER_NODE,
  HEALTH_DASHED_ARCS,
  HEALTH_HUB_NODES,
} from '../data/healthHubData';
import type { CompetenceGoalId, ThemeId } from '../data/types';

interface HealthMindMapProps {
  onSelectTheme: (themeId: ThemeId) => void;
}

export function HealthMindMap({ onSelectTheme }: HealthMindMapProps) {
  const [hoveredId, setHoveredId] = useState<ThemeId | 'center' | null>(null);
  const [goalFilter, setGoalFilter] = useState<'ALL' | CompetenceGoalId>('ALL');

  return (
    <div className="relative flex-1 min-h-0 w-full flex flex-col items-center justify-between px-2 py-2 sm:px-5 sm:py-3 lg:px-8 lg:py-4 max-w-[1680px] mx-auto select-none">
      {/* Top classroom quick-jump pill bar (matching big-bang) */}
      <div className="w-full flex items-center justify-center pt-0.5 pb-1 shrink-0">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/75 text-[11px] sm:text-xs text-slate-300 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span>Alle 7 undertemaene:</span>
          {HEALTH_HUB_NODES.map((n, idx) => (
            <span key={n.id} className="inline-flex items-center">
              <button
                type="button"
                onClick={() => onSelectTheme(n.id)}
                style={{ color: n.accentHex }}
                className="font-bold hover:underline underline-offset-2 cursor-pointer"
              >
                {n.title}
              </button>
              {idx < HEALTH_HUB_NODES.length - 1 && (
                <span className="text-slate-500 ml-1">•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive SVG Mindmap with Nano Banana circular illustrations */}
      <div className="flex-1 min-h-0 w-full flex items-center justify-center">
        <svg
          id="health-mindmap-svg"
          viewBox="42 15 996 740"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full max-h-[calc(100vh-9.25rem)] max-w-[1220px] overflow-visible drop-shadow-[0_16px_45px_rgba(0,0,0,0.55)]"
          role="img"
          aria-label="Tankekart over Helse og ernæring med syv tilknyttede undertemaer"
        >
          <defs>
            <clipPath id="clip-hub-center">
              <circle
                cx={HEALTH_CENTER_NODE.cx}
                cy={HEALTH_CENTER_NODE.cy}
                r={HEALTH_CENTER_NODE.r}
              />
            </clipPath>

            {HEALTH_HUB_NODES.map((node) => (
              <clipPath key={node.id} id={`clip-hub-${node.id}`}>
                <circle cx={node.cx} cy={node.cy} r={node.r} />
              </clipPath>
            ))}

            {/* Warm golden/emerald vignette for center circle */}
            <radialGradient id="scrim-center" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#0D1914" stopOpacity="0.64" />
              <stop offset="62%" stopColor="#0B1813" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#07111A" stopOpacity="0.62" />
            </radialGradient>

            {/* Dark readability scrim for satellite circles */}
            <radialGradient id="scrim-satellite" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#050B18" stopOpacity="0.68" />
              <stop offset="58%" stopColor="#071022" stopOpacity="0.40" />
              <stop offset="100%" stopColor="#050914" stopOpacity="0.60" />
            </radialGradient>

            {/* Ambient glow behind center */}
            <radialGradient id="glow-center" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
              <stop offset="65%" stopColor="#F59E0B" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#07111A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Dashed curved outer arcs connecting related themes */}
          <g aria-hidden="true">
            {HEALTH_DASHED_ARCS.map((arc) => {
              const isHighlighted =
                hoveredId === arc.from || hoveredId === arc.to;
              return (
                <path
                  key={arc.id}
                  d={arc.d}
                  fill="none"
                  stroke={isHighlighted ? '#7DD3FC' : '#7C96C2'}
                  strokeOpacity={isHighlighted ? 0.88 : 0.52}
                  strokeWidth={isHighlighted ? 4.5 : 3.5}
                  strokeDasharray="11 11"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              );
            })}
          </g>

          {/* 2. Solid radial lines from center to each of the 7 themes */}
          <g aria-hidden="true">
            {HEALTH_HUB_NODES.map((node) => {
              const isHighlighted =
                hoveredId === node.id || hoveredId === 'center';
              const isDimmed =
                goalFilter !== 'ALL' &&
                !node.competenceGoals.includes(goalFilter);
              return (
                <line
                  key={`line-${node.id}`}
                  x1={HEALTH_CENTER_NODE.cx}
                  y1={HEALTH_CENTER_NODE.cy}
                  x2={node.cx}
                  y2={node.cy}
                  stroke={
                    hoveredId === node.id
                      ? '#FBBF24'
                      : isHighlighted
                        ? '#93C5FD'
                        : '#869CC9'
                  }
                  strokeOpacity={isDimmed ? 0.16 : isHighlighted ? 0.92 : 0.62}
                  strokeWidth={isHighlighted ? 5 : 3.8}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              );
            })}
          </g>

          {/* 3. Center circle: HELSE & ERNÆRING */}
          <g
            id="hub-node-center"
            onMouseEnter={() => setHoveredId('center')}
            onMouseLeave={() => setHoveredId(null)}
            className="cursor-default"
          >
            <circle
              cx={HEALTH_CENTER_NODE.cx}
              cy={HEALTH_CENTER_NODE.cy}
              r={HEALTH_CENTER_NODE.haloR + 36}
              fill="url(#glow-center)"
            />
            <circle
              cx={HEALTH_CENTER_NODE.cx}
              cy={HEALTH_CENTER_NODE.cy}
              r={HEALTH_CENTER_NODE.haloR}
              fill="none"
              stroke="#FCD34D"
              strokeOpacity={hoveredId === 'center' ? 0.48 : 0.28}
              strokeWidth="2.2"
              className="transition-all duration-300"
            />

            <g clipPath="url(#clip-hub-center)">
              <circle
                cx={HEALTH_CENTER_NODE.cx}
                cy={HEALTH_CENTER_NODE.cy}
                r={HEALTH_CENTER_NODE.r}
                fill="#0A1B16"
              />
              <image
                href={HEALTH_CENTER_NODE.imageUrl}
                x={HEALTH_CENTER_NODE.cx - HEALTH_CENTER_NODE.r - 4}
                y={HEALTH_CENTER_NODE.cy - HEALTH_CENTER_NODE.r - 4}
                width={(HEALTH_CENTER_NODE.r + 4) * 2}
                height={(HEALTH_CENTER_NODE.r + 4) * 2}
                preserveAspectRatio="xMidYMid slice"
              />
              <circle
                cx={HEALTH_CENTER_NODE.cx}
                cy={HEALTH_CENTER_NODE.cy}
                r={HEALTH_CENTER_NODE.r}
                fill="url(#scrim-center)"
              />
            </g>

            {/* Golden border */}
            <circle
              cx={HEALTH_CENTER_NODE.cx}
              cy={HEALTH_CENTER_NODE.cy}
              r={HEALTH_CENTER_NODE.r}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="5.5"
            />

            <text
              x={HEALTH_CENTER_NODE.cx}
              y={HEALTH_CENTER_NODE.cy - 10}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#FDE68A"
              fontSize="24"
              fontWeight="800"
              letterSpacing="1"
              className="font-display"
              style={{
                paintOrder: 'stroke',
                stroke: 'rgba(10, 8, 4, 0.88)',
                strokeWidth: '6px',
                strokeLinejoin: 'round',
              }}
            >
              HELSE &amp;
            </text>
            <text
              x={HEALTH_CENTER_NODE.cx}
              y={HEALTH_CENTER_NODE.cy + 18}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#FDE68A"
              fontSize="24"
              fontWeight="800"
              letterSpacing="1"
              className="font-display"
              style={{
                paintOrder: 'stroke',
                stroke: 'rgba(10, 8, 4, 0.88)',
                strokeWidth: '6px',
                strokeLinejoin: 'round',
              }}
            >
              ERNÆRING
            </text>
          </g>

          {/* 4. Seven surrounding theme circles */}
          {HEALTH_HUB_NODES.map((node) => {
            const isHovered = hoveredId === node.id;
            const isDimmed =
              goalFilter !== 'ALL' &&
              !node.competenceGoals.includes(goalFilter);

            return (
              <g
                key={node.id}
                id={`hub-node-${node.id}`}
                role="button"
                tabIndex={0}
                aria-label={`${node.title} – Åpne tema`}
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(node.id)}
                onBlur={() => setHoveredId(null)}
                onClick={() => onSelectTheme(node.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectTheme(node.id);
                  }
                }}
                style={{
                  transformOrigin: `${node.cx}px ${node.cy}px`,
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  opacity: isDimmed ? 0.28 : 1,
                  transition:
                    'transform 220ms cubic-bezier(0.16, 1, 0.3, 1), opacity 220ms ease',
                }}
                className="cursor-pointer focus:outline-none"
              >
                {/* Outer active / hover ring */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r + 9}
                  fill="none"
                  stroke={isHovered ? '#FBBF24' : '#38BDF8'}
                  strokeOpacity={isHovered ? 0.65 : 0.25}
                  strokeWidth={isHovered ? 3 : 2}
                />

                {/* Clipped Nano Banana illustration */}
                <g clipPath={`url(#clip-hub-${node.id})`}>
                  <circle cx={node.cx} cy={node.cy} r={node.r} fill="#0B192E" />
                  <image
                    href={node.imageUrl}
                    x={node.cx - node.r - 4}
                    y={node.cy - node.r - 4}
                    width={(node.r + 4) * 2}
                    height={(node.r + 4) * 2}
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="url(#scrim-satellite)"
                  />
                </g>

                {/* Crisp sky-blue circle border (amber on hover) */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill="none"
                  stroke={isHovered ? '#FBBF24' : '#38BDF8'}
                  strokeWidth={isHovered ? 5.5 : 4.5}
                />

                {/* Circle main label */}
                <text
                  x={node.cx}
                  y={node.cy - 8}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#F8FAFC"
                  fontSize="19.5"
                  fontWeight="800"
                  className="font-display"
                  style={{
                    paintOrder: 'stroke',
                    stroke: 'rgba(5, 10, 22, 0.92)',
                    strokeWidth: '5.5px',
                    strokeLinejoin: 'round',
                  }}
                >
                  {node.title}
                </text>

                {/* Clickable pill matching big-bang */}
                <g transform={`translate(${node.cx}, ${node.cy + 28})`}>
                  <rect
                    x="-50"
                    y="-12"
                    width="100"
                    height="24"
                    rx="12"
                    fill={isHovered ? '#F59E0B' : 'rgba(8, 15, 30, 0.86)'}
                    stroke={isHovered ? '#FDE68A' : '#F59E0B'}
                    strokeWidth="1.5"
                  />
                  <text
                    x="0"
                    y="0.5"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isHovered ? '#080D1A' : '#FDE68A'}
                    fontSize="11.5"
                    fontWeight="800"
                    className="font-display"
                  >
                    Åpne tema →
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom Competence Goal filter bar */}
      <div className="w-full flex flex-wrap items-center justify-center gap-2 pt-1 shrink-0">
        <button
          type="button"
          onClick={() => setGoalFilter('ALL')}
          className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
            goalFilter === 'ALL'
              ? 'bg-emerald-500/25 border-emerald-400 text-emerald-100'
              : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:bg-slate-800'
          }`}
        >
          Vis alle (7)
        </button>
        {(['KM1', 'KM2'] as CompetenceGoalId[]).map((gid) => {
          const goal = COMPETENCE_GOALS[gid];
          const active = goalFilter === gid;
          return (
            <button
              key={gid}
              type="button"
              onClick={() => setGoalFilter(active ? 'ALL' : gid)}
              title={goal.fullText}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                active
                  ? goal.colorClass
                  : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>
                {gid}: {goal.shortLabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
