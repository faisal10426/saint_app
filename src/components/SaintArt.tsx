import type { KeyboardEvent } from 'react';
import type { PaintMap, RegionId, Saint } from '../types';
import { portraits } from './saints';

type Props = {
  saint: Saint;
  colors: PaintMap;
  onPaint: (region: RegionId) => void;
  svgId: string;
  compact?: boolean;
};

const DEFAULT = '#fffdf8';
const STROKE = '#302a28';

export default function SaintArt({ saint, colors, onPaint, svgId, compact = false }: Props) {
  const color = (region: RegionId) => colors[region] ?? DEFAULT;
  const interactive = (region: RegionId) => ({
    role: 'button' as const,
    tabIndex: 0,
    'aria-label': `Color ${region}`,
    onClick: () => onPaint(region),
    onKeyDown: (event: KeyboardEvent<SVGGElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onPaint(region);
      }
    },
    className: 'paint-region',
  });
  const p = (region: RegionId) => ({
    fill: color(region),
    stroke: STROKE,
    strokeWidth: 6,
    strokeLinejoin: 'round' as const,
    pointerEvents: 'visiblePainted' as const,
    ...interactive(region),
  });
  const detail = { fill: 'none', stroke: STROKE, strokeWidth: 6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, pointerEvents: 'none' as const };
  const Portrait = portraits[saint.id];

  return (
    <svg id={svgId} className={compact ? 'saint-art saint-art--compact' : 'saint-art'} viewBox="0 0 640 760" role="img" aria-label={`Coloring page for ${saint.name}`} xmlns="http://www.w3.org/2000/svg">
      <g {...p('background')}>
        <rect x="14" y="14" width="612" height="732" rx="40" />
      </g>
      {Portrait ? <Portrait p={p} detail={detail} /> : null}
      <text x="320" y="729" textAnchor="middle" className="saint-art__label">{saint.shortName}</text>
    </svg>
  );
}
