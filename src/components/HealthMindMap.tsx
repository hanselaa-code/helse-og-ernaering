import { GraduationCap, HeartPulse, Sparkles } from 'lucide-react';
import { useState } from 'react';
import {
  COMPETENCE_GOALS,
  HEALTH_CENTER_NODE,
  HEALTH_HUB_NODES,
} from '../data/healthHubData';
import type { CompetenceGoalId, ThemeId } from '../data/types';

interface HealthMindMapProps {
  onSelectTheme: (themeId: ThemeId) => void;
}

export function HealthMindMap({ onSelectTheme }: HealthMindMapProps) {
  const [hoveredId, setHoveredId] = useState<ThemeId | null>(null);
  const [goalFilter, setGoalFilter] = useState<'ALL' | CompetenceGoalId>('ALL');

  const centerX = 500;
  const centerY = 315;

  return (
    <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar px-3 sm:px-6 lg:px-8 py-4 lg:py-6 gap-4">
      {/* Top Competence Goal Filter + Intro */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 max-w-7xl w-full mx-auto">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hovedtema • Vg1 Naturfag</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            {HEALTH_CENTER_NODE.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setGoalFilter('ALL')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              goalFilter === 'ALL'
                ? 'bg-emerald-500/25 border-emerald-400 text-emerald-100'
                : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Alle 7 moduler
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
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
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

      {/* Desktop / Tablet Interactive SVG MindMap */}
      <div className="hidden md:flex flex-1 items-center justify-center max-w-7xl w-full mx-auto">
        <div className="relative w-full h-full min-h-[470px] max-h-[650px] rounded-3xl glass-panel overflow-hidden p-3">
          <svg
            viewBox="0 0 1000 620"
            className="w-full h-full select-none"
            role="img"
            aria-label="Tankekart for Helse og ernæring"
          >
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
                <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#07111A" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient center glow */}
            <circle cx={centerX} cy={centerY} r="210" fill="url(#hubGlow)" />

            {/* Subtle orbital rings */}
            <circle
              cx={centerX}
              cy={centerY}
              r="185"
              fill="none"
              stroke="rgba(148,163,184,0.1)"
              strokeDasharray="6 8"
            />
            <circle
              cx={centerX}
              cy={centerY}
              r="285"
              fill="none"
              stroke="rgba(148,163,184,0.07)"
            />

            {/* Connecting curved paths */}
            {HEALTH_HUB_NODES.map((node) => {
              const isDimmed =
                goalFilter !== 'ALL' &&
                !node.competenceGoals.includes(goalFilter);
              const isHovered = hoveredId === node.id;
              const midX = (centerX + node.x) / 2;
              const midY = (centerY + node.y) / 2 - 22;

              return (
                <path
                  key={`line-${node.id}`}
                  d={`M ${centerX} ${centerY} Q ${midX} ${midY} ${node.x} ${node.y}`}
                  fill="none"
                  stroke={node.accentHex}
                  strokeWidth={isHovered ? 3.5 : 2}
                  strokeOpacity={isDimmed ? 0.12 : isHovered ? 0.95 : 0.45}
                  strokeDasharray={isHovered ? undefined : '6 6'}
                  className="transition-all duration-300"
                />
              );
            })}

            {/* Center Hub Node */}
            <g transform={`translate(${centerX}, ${centerY})`}>
              <circle
                r="82"
                fill="rgba(16, 185, 129, 0.14)"
                stroke="#10B981"
                strokeOpacity="0.45"
                strokeWidth="2"
                className="node-pulse-ring"
              />
              <circle
                r="76"
                fill="#0B1928"
                stroke="#34D399"
                strokeWidth="2.5"
              />
              <foreignObject x="-62" y="-54" width="124" height="108">
                <div className="w-full h-full flex flex-col items-center justify-center text-center px-1">
                  <HeartPulse className="w-7 h-7 text-emerald-300 mb-1" />
                  <div className="text-sm font-extrabold text-white leading-tight font-display">
                    Helse og ernæring
                  </div>
                  <div className="text-[10px] text-emerald-300/90 font-semibold mt-1">
                    7 undertemaer
                  </div>
                </div>
              </foreignObject>
            </g>

            {/* 7 Outer Module Nodes */}
            {HEALTH_HUB_NODES.map((node, idx) => {
              const isDimmed =
                goalFilter !== 'ALL' &&
                !node.competenceGoals.includes(goalFilter);
              const isHovered = hoveredId === node.id;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => onSelectTheme(node.id)}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="cursor-pointer transition-opacity duration-300"
                  style={{ opacity: isDimmed ? 0.28 : 1 }}
                >
                  {isHovered && (
                    <rect
                      x="-126"
                      y="-52"
                      width="252"
                      height="104"
                      rx="22"
                      fill="none"
                      stroke={node.accentHex}
                      strokeWidth="2"
                      strokeOpacity="0.55"
                    />
                  )}
                  <rect
                    x="-120"
                    y="-46"
                    width="240"
                    height="92"
                    rx="18"
                    fill={isHovered ? '#112438' : '#0B1726'}
                    stroke={node.accentHex}
                    strokeWidth={isHovered ? 2.5 : 1.5}
                    strokeOpacity={isHovered ? 0.95 : 0.6}
                  />
                  <foreignObject x="-112" y="-40" width="224" height="80">
                    <div className="w-full h-full flex flex-col justify-between p-1.5">
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className="px-1.5 py-0.5 rounded text-[10px] font-extrabold text-slate-950"
                          style={{ backgroundColor: node.accentHex }}
                        >
                          {idx + 1}. {node.stepCount} steg
                        </span>
                        <div className="flex items-center gap-1">
                          {node.competenceGoals.map((g) => (
                            <span
                              key={g}
                              className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-900 border border-slate-700 text-slate-200"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[13px] font-extrabold text-white leading-tight font-display truncate">
                          {node.title}
                        </div>
                        <div className="text-[10px] text-slate-300 truncate mt-0.5">
                          {node.shortTag}
                        </div>
                      </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Mobile Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
        {HEALTH_HUB_NODES.filter(
          (n) => goalFilter === 'ALL' || n.competenceGoals.includes(goalFilter),
        ).map((node, idx) => (
          <button
            key={node.id}
            type="button"
            onClick={() => onSelectTheme(node.id)}
            className="flex flex-col gap-2 p-4 rounded-2xl glass-panel text-left border border-slate-700/70 hover:border-emerald-400/50 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className="px-2 py-0.5 rounded-md text-xs font-extrabold text-slate-950"
                style={{ backgroundColor: node.accentHex }}
              >
                {idx + 1}. {node.stepCount} steg
              </span>
              <div className="flex items-center gap-1">
                {node.competenceGoals.map((g) => (
                  <span
                    key={g}
                    className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-900 border border-slate-700 text-slate-200"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white font-display">
                {node.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {node.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
