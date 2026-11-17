import type { HealthNodeData, ThemeConfig } from '../data/types';

interface ModuleExplorerProps {
  activeTheme: ThemeConfig;
  currentStepIndex: number;
  unlockedStepIndex: number;
  showAllSteps: boolean;
  onSelectStep: (idx: number) => void;
}

export function ModuleExplorer({
  activeTheme,
  currentStepIndex,
  unlockedStepIndex,
  showAllSteps,
  onSelectStep,
}: ModuleExplorerProps) {
  const nodes = activeTheme.allNodes;
  const activeNode = nodes[currentStepIndex] ?? nodes[0];

  const isUnlocked = (idx: number) => showAllSteps || idx <= unlockedStepIndex;

  return (
    <div className="h-full flex flex-col rounded-2xl glass-panel overflow-hidden">
      {/* Top strip inside explorer */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: activeNode.accentColor }}
          />
          <span className="text-xs sm:text-sm font-bold text-white truncate font-display">
            {activeTheme.dropdownTitle}
          </span>
        </div>
        <span className="text-[11px] font-mono-time text-slate-400 shrink-0">
          Klikk i modellen for å velge {activeTheme.stepWord.toLowerCase()}
        </span>
      </div>

      {/* Interactive SVG Canvas */}
      <div className="flex-1 flex items-center justify-center p-3 sm:p-5 overflow-hidden">
        {activeTheme.id === 'naeringsstoffer' && (
          <NutrientsSvg
            nodes={nodes}
            currentIdx={currentStepIndex}
            isUnlocked={isUnlocked}
            onSelect={onSelectStep}
          />
        )}
        {activeTheme.id === 'fordoyelsen' && (
          <DigestionSvg
            nodes={nodes}
            currentIdx={currentStepIndex}
            isUnlocked={isUnlocked}
            onSelect={onSelectStep}
          />
        )}
        {activeTheme.id === 'celleanding' && (
          <RespirationSvg
            nodes={nodes}
            currentIdx={currentStepIndex}
            isUnlocked={isUnlocked}
            onSelect={onSelectStep}
          />
        )}
        {activeTheme.id === 'vaeskebalanse' && (
          <FluidAerobicSvg
            nodes={nodes}
            currentIdx={currentStepIndex}
            isUnlocked={isUnlocked}
            onSelect={onSelectStep}
          />
        )}
        {activeTheme.id === 'trening' && (
          <TrainingCurveSvg
            nodes={nodes}
            currentIdx={currentStepIndex}
            isUnlocked={isUnlocked}
            onSelect={onSelectStep}
          />
        )}
        {activeTheme.id === 'kosthold' && (
          <DietSustainabilitySvg
            nodes={nodes}
            currentIdx={currentStepIndex}
            isUnlocked={isUnlocked}
            onSelect={onSelectStep}
          />
        )}
        {activeTheme.id === 'kildekritikk' && (
          <SourceCriticismSvg
            nodes={nodes}
            currentIdx={currentStepIndex}
            isUnlocked={isUnlocked}
            onSelect={onSelectStep}
          />
        )}
      </div>
    </div>
  );
}

interface SubSvgProps {
  nodes: HealthNodeData[];
  currentIdx: number;
  isUnlocked: (idx: number) => boolean;
  onSelect: (idx: number) => void;
}

/* 1. NÆRINGSSTOFFENE */
function NutrientsSvg({ nodes, currentIdx, isUnlocked, onSelect }: SubSvgProps) {
  const positions = [
    { x: 350, y: 75 },
    { x: 135, y: 210 },
    { x: 350, y: 210 },
    { x: 565, y: 210 },
    { x: 225, y: 365 },
    { x: 475, y: 365 },
  ];

  return (
    <svg viewBox="0 0 700 450" className="w-full h-full max-h-[540px] select-none">
      {/* Group labels */}
      <text x="350" y="148" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="700">
        MAKRONÆRINGSSTOFFER (ENERGI + BYGGESTEIN)
      </text>
      <text x="350" y="305" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="700">
        MIKRONÆRINGSSTOFFER (HJELPESTOFFER • 0 KCAL)
      </text>

      {/* Connector lines from node 0 */}
      {positions.slice(1).map((pos, i) => (
        <line
          key={i}
          x1={positions[0].x}
          y1={positions[0].y + 28}
          x2={pos.x}
          y2={pos.y - 34}
          stroke={nodes[i + 1]?.accentColor ?? '#38BDF8'}
          strokeOpacity={isUnlocked(i + 1) ? 0.45 : 0.15}
          strokeWidth="2"
          strokeDasharray="5 5"
        />
      ))}

      {nodes.map((node, idx) => {
        const pos = positions[idx];
        const active = idx === currentIdx;
        const unlocked = isUnlocked(idx);
        return (
          <g
            key={node.id}
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={() => onSelect(idx)}
            className="cursor-pointer"
            style={{ opacity: unlocked ? 1 : 0.42 }}
          >
            {active && (
              <rect
                x="-92"
                y="-42"
                width="184"
                height="84"
                rx="18"
                fill="none"
                stroke={node.accentColor}
                strokeWidth="2"
                strokeOpacity="0.65"
                className="node-pulse-ring"
              />
            )}
            <rect
              x="-86"
              y="-36"
              width="172"
              height="72"
              rx="14"
              fill={active ? '#12263B' : '#0B1726'}
              stroke={node.accentColor}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <text
              x="0"
              y="-10"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="13"
              fontWeight="800"
            >
              {idx + 1}. {node.shortLabel}
            </text>
            <text
              x="0"
              y="10"
              textAnchor="middle"
              fill={node.accentColor}
              fontSize="11"
              fontWeight="700"
            >
              {node.primaryBadge}
            </text>
            <text x="0" y="26" textAnchor="middle" fill="#94A3B8" fontSize="9.5">
              {node.secondaryBadge}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* 2. FORDØYELSEN */
function DigestionSvg({ nodes, currentIdx, isUnlocked, onSelect }: SubSvgProps) {
  const coords = [
    { x: 120, y: 90 },
    { x: 290, y: 90 },
    { x: 470, y: 125 },
    { x: 540, y: 265 },
    { x: 350, y: 345 },
    { x: 145, y: 310 },
  ];

  return (
    <svg viewBox="0 0 700 450" className="w-full h-full max-h-[540px] select-none">
      {/* Digestive tract flow path */}
      <path
        d="M 120 90 L 290 90 Q 430 90 470 125 Q 555 180 540 265 Q 500 345 350 345 Q 200 345 145 310"
        fill="none"
        stroke="url(#digestGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeOpacity="0.35"
      />
      <defs>
        <linearGradient id="digestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>

      {nodes.map((node, idx) => {
        const pos = coords[idx];
        const active = idx === currentIdx;
        const unlocked = isUnlocked(idx);
        return (
          <g
            key={node.id}
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={() => onSelect(idx)}
            className="cursor-pointer"
            style={{ opacity: unlocked ? 1 : 0.42 }}
          >
            {active && (
              <circle
                r="56"
                fill="none"
                stroke={node.accentColor}
                strokeWidth="2.5"
                className="node-pulse-ring"
              />
            )}
            <rect
              x="-82"
              y="-34"
              width="164"
              height="68"
              rx="16"
              fill={active ? '#12263B' : '#0B1726'}
              stroke={node.accentColor}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <text
              x="0"
              y="-10"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="13"
              fontWeight="800"
            >
              {idx + 1}. {node.shortLabel}
            </text>
            <text
              x="0"
              y="9"
              textAnchor="middle"
              fill={node.accentColor}
              fontSize="10.5"
              fontWeight="700"
            >
              {node.primaryBadge}
            </text>
            <text x="0" y="24" textAnchor="middle" fill="#94A3B8" fontSize="9.5">
              {node.secondaryBadge}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* 3. CELLEÅNDING */
function RespirationSvg({ nodes, currentIdx, isUnlocked, onSelect }: SubSvgProps) {
  return (
    <svg viewBox="0 0 700 450" className="w-full h-full max-h-[540px] select-none">
      {/* Cell membrane */}
      <rect
        x="24"
        y="24"
        width="652"
        height="402"
        rx="32"
        fill="#0A1624"
        stroke="#38BDF8"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <text x="48" y="52" fill="#7DD3FC" fontSize="11" fontWeight="700">
        CYTOPLASMA
      </text>

      {/* Mitochondrion outline */}
      <rect
        x="255"
        y="85"
        width="395"
        height="265"
        rx="95"
        fill="#102033"
        stroke="#F59E0B"
        strokeOpacity="0.55"
        strokeWidth="2.5"
      />
      <text x="452" y="114" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="800">
        MITOKONDRIE (CELLENS KRAFTVERK)
      </text>

      {/* Arrows */}
      <path
        d="M 185 215 L 275 215"
        stroke="#10B981"
        strokeWidth="3"
        strokeDasharray="5 4"
      />
      <path
        d="M 420 215 L 475 215"
        stroke="#F59E0B"
        strokeWidth="3"
        strokeDasharray="5 4"
      />

      {/* Step nodes placed inside Cell/Mitochondrion */}
      {[
        { x: 350, y: 55 }, // 1 Oversikt
        { x: 135, y: 215 }, // 2 Glykolyse (cytoplasma)
        { x: 350, y: 215 }, // 3 Sitronsyresyklus
        { x: 545, y: 215 }, // 4 Elektronkjede
        { x: 350, y: 385 }, // 5 Totalregnskap
      ].map((pos, idx) => {
        const node = nodes[idx];
        if (!node) return null;
        const active = idx === currentIdx;
        const unlocked = isUnlocked(idx);
        return (
          <g
            key={node.id}
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={() => onSelect(idx)}
            className="cursor-pointer"
            style={{ opacity: unlocked ? 1 : 0.42 }}
          >
            <rect
              x="-82"
              y="-32"
              width="164"
              height="64"
              rx="14"
              fill={active ? '#142B42' : '#0B1726'}
              stroke={node.accentColor}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <text
              x="0"
              y="-8"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="12.5"
              fontWeight="800"
            >
              {idx + 1}. {node.shortLabel}
            </text>
            <text
              x="0"
              y="10"
              textAnchor="middle"
              fill={node.accentColor}
              fontSize="10"
              fontWeight="700"
            >
              {node.primaryBadge}
            </text>
            <text x="0" y="24" textAnchor="middle" fill="#94A3B8" fontSize="9">
              {node.secondaryBadge}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* 4. VÆSKEBALANSE, AEROB & ANAEROB */
function FluidAerobicSvg({ nodes, currentIdx, isUnlocked, onSelect }: SubSvgProps) {
  const coords = [
    { x: 130, y: 110 },
    { x: 350, y: 110 },
    { x: 570, y: 110 },
    { x: 220, y: 320 },
    { x: 480, y: 320 },
  ];

  return (
    <svg viewBox="0 0 700 450" className="w-full h-full max-h-[540px] select-none">
      {/* Intensity / Lactate curve */}
      <path
        d="M 80 390 Q 260 385 370 355 T 620 205"
        fill="none"
        stroke="#F43F5E"
        strokeWidth="3"
        strokeOpacity="0.65"
      />
      <line
        x1="370"
        y1="220"
        x2="370"
        y2="405"
        stroke="#94A3B8"
        strokeDasharray="4 4"
        strokeOpacity="0.5"
      />
      <text x="370" y="424" textAnchor="middle" fill="#CBD5E1" fontSize="10.5" fontWeight="700">
        ANAEROB TERSKEL (LAKTAT STIGER)
      </text>

      <text x="350" y="42" textAnchor="middle" fill="#67E8F9" fontSize="11" fontWeight="700">
        VÆSKEBALANSE, SVETTE & ELEKTROLYTTER
      </text>
      <text x="350" y="235" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="700">
        INTENSITET & ENERGIFRIGJØRING
      </text>

      {nodes.map((node, idx) => {
        const pos = coords[idx];
        const active = idx === currentIdx;
        const unlocked = isUnlocked(idx);
        return (
          <g
            key={node.id}
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={() => onSelect(idx)}
            className="cursor-pointer"
            style={{ opacity: unlocked ? 1 : 0.42 }}
          >
            <rect
              x="-88"
              y="-34"
              width="176"
              height="68"
              rx="14"
              fill={active ? '#12263B' : '#0B1726'}
              stroke={node.accentColor}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <text
              x="0"
              y="-9"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="12.5"
              fontWeight="800"
            >
              {idx + 1}. {node.shortLabel}
            </text>
            <text
              x="0"
              y="9"
              textAnchor="middle"
              fill={node.accentColor}
              fontSize="10.5"
              fontWeight="700"
            >
              {node.primaryBadge}
            </text>
            <text x="0" y="24" textAnchor="middle" fill="#94A3B8" fontSize="9">
              {node.secondaryBadge}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* 5. TRENING */
function TrainingCurveSvg({ nodes, currentIdx, isUnlocked, onSelect }: SubSvgProps) {
  const coords = [
    { x: 130, y: 265 },
    { x: 325, y: 120 },
    { x: 545, y: 145 },
    { x: 230, y: 365 },
    { x: 475, y: 365 },
  ];

  return (
    <svg viewBox="0 0 700 450" className="w-full h-full max-h-[540px] select-none">
      {/* Baseline */}
      <line
        x1="50"
        y1="205"
        x2="650"
        y2="205"
        stroke="#64748B"
        strokeDasharray="6 6"
        strokeWidth="1.5"
      />
      <text x="645" y="195" textAnchor="end" fill="#94A3B8" fontSize="10">
        Utgangsnivå
      </text>

      {/* Supercompensation curve */}
      <path
        d="M 60 205 L 145 275 Q 230 275 290 140 Q 345 95 430 155 Q 520 205 630 205"
        fill="none"
        stroke="#10B981"
        strokeWidth="4"
        strokeOpacity="0.7"
      />

      {nodes.map((node, idx) => {
        const pos = coords[idx];
        const active = idx === currentIdx;
        const unlocked = isUnlocked(idx);
        return (
          <g
            key={node.id}
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={() => onSelect(idx)}
            className="cursor-pointer"
            style={{ opacity: unlocked ? 1 : 0.42 }}
          >
            <rect
              x="-88"
              y="-34"
              width="176"
              height="68"
              rx="14"
              fill={active ? '#12263B' : '#0B1726'}
              stroke={node.accentColor}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <text
              x="0"
              y="-9"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="12.5"
              fontWeight="800"
            >
              {idx + 1}. {node.shortLabel}
            </text>
            <text
              x="0"
              y="9"
              textAnchor="middle"
              fill={node.accentColor}
              fontSize="10"
              fontWeight="700"
            >
              {node.primaryBadge}
            </text>
            <text x="0" y="24" textAnchor="middle" fill="#94A3B8" fontSize="9">
              {node.secondaryBadge}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* 6. GENERELL HELSE OG KOSTHOLD */
function DietSustainabilitySvg({
  nodes,
  currentIdx,
  isUnlocked,
  onSelect,
}: SubSvgProps) {
  const coords = [
    { x: 145, y: 100 },
    { x: 350, y: 100 },
    { x: 555, y: 100 },
    { x: 145, y: 345 },
    { x: 350, y: 345 },
    { x: 555, y: 345 },
  ];

  return (
    <svg viewBox="0 0 700 450" className="w-full h-full max-h-[540px] select-none">
      {/* Plate model center graphic */}
      <g transform="translate(350, 222)">
        <circle r="68" fill="#0E1D2F" stroke="#334155" strokeWidth="3" />
        <path d="M 0 -64 A 64 64 0 0 0 0 64 Z" fill="#22C55E" fillOpacity="0.28" />
        <path d="M 0 -64 A 64 64 0 0 1 64 0 L 0 0 Z" fill="#F59E0B" fillOpacity="0.28" />
        <path d="M 64 0 A 64 64 0 0 1 0 64 L 0 0 Z" fill="#F43F5E" fillOpacity="0.28" />
        <text x="-30" y="4" textAnchor="middle" fill="#86EFAC" fontSize="10" fontWeight="700">
          Grønt
        </text>
        <text x="28" y="-18" textAnchor="middle" fill="#FDE68A" fontSize="10" fontWeight="700">
          Grovt
        </text>
        <text x="28" y="26" textAnchor="middle" fill="#FDA4AF" fontSize="10" fontWeight="700">
          Protein
        </text>
      </g>

      {nodes.map((node, idx) => {
        const pos = coords[idx];
        const active = idx === currentIdx;
        const unlocked = isUnlocked(idx);
        return (
          <g
            key={node.id}
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={() => onSelect(idx)}
            className="cursor-pointer"
            style={{ opacity: unlocked ? 1 : 0.42 }}
          >
            <rect
              x="-88"
              y="-34"
              width="176"
              height="68"
              rx="14"
              fill={active ? '#12263B' : '#0B1726'}
              stroke={node.accentColor}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <text
              x="0"
              y="-9"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="12.5"
              fontWeight="800"
            >
              {idx + 1}. {node.shortLabel}
            </text>
            <text
              x="0"
              y="9"
              textAnchor="middle"
              fill={node.accentColor}
              fontSize="9.5"
              fontWeight="700"
            >
              {node.primaryBadge}
            </text>
            <text x="0" y="24" textAnchor="middle" fill="#94A3B8" fontSize="9">
              {node.secondaryBadge}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* 7. KILDEKRITIKK */
function SourceCriticismSvg({
  nodes,
  currentIdx,
  isUnlocked,
  onSelect,
}: SubSvgProps) {
  const coords = [
    { x: 140, y: 365 },
    { x: 560, y: 365 },
    { x: 350, y: 95 },
    { x: 175, y: 225 },
    { x: 525, y: 225 },
  ];

  return (
    <svg viewBox="0 0 700 450" className="w-full h-full max-h-[540px] select-none">
      {/* Evidence pyramid backdrop */}
      <polygon
        points="350,65 180,385 520,385"
        fill="#A855F7"
        fillOpacity="0.08"
        stroke="#A855F7"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <text x="350" y="255" textAnchor="middle" fill="#D8B4FE" fontSize="11" fontWeight="700">
        EVIDENSHIERARKIET
      </text>
      <text x="350" y="275" textAnchor="middle" fill="#94A3B8" fontSize="10">
        Sterkest dokumentasjon øverst
      </text>

      {nodes.map((node, idx) => {
        const pos = coords[idx];
        const active = idx === currentIdx;
        const unlocked = isUnlocked(idx);
        return (
          <g
            key={node.id}
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={() => onSelect(idx)}
            className="cursor-pointer"
            style={{ opacity: unlocked ? 1 : 0.42 }}
          >
            <rect
              x="-88"
              y="-34"
              width="176"
              height="68"
              rx="14"
              fill={active ? '#12263B' : '#0B1726'}
              stroke={node.accentColor}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <text
              x="0"
              y="-9"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="12.5"
              fontWeight="800"
            >
              {idx + 1}. {node.shortLabel}
            </text>
            <text
              x="0"
              y="9"
              textAnchor="middle"
              fill={node.accentColor}
              fontSize="9.5"
              fontWeight="700"
            >
              {node.primaryBadge}
            </text>
            <text x="0" y="24" textAnchor="middle" fill="#94A3B8" fontSize="9">
              {node.secondaryBadge}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
