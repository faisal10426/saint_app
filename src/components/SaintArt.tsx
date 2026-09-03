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
  // Paint masks self-stroke with their own fill colour. Traced masks are
  // fragmented polygons that never tile perfectly; a few pixels of matching
  // stroke closes the hairline gaps between neighbouring regions. The exact
  // black line-art overlay is drawn last, so these coloured strokes stay hidden
  // under the real outlines.
  const p = (region: RegionId) => {
    const fill = color(region);
    return {
      fill,
      stroke: fill,
      strokeWidth: 4,
      strokeLinejoin: 'round' as const,
      pointerEvents: 'visiblePainted' as const,
      ...interactive(region),
    };
  };
  const detail = { fill: 'none', stroke: STROKE, strokeWidth: 6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, pointerEvents: 'none' as const };
  const Portrait = portraits[saint.id];
  const clipId = `${svgId}-frame`;

  return (
    <svg id={svgId} className={compact ? 'saint-art saint-art--compact' : 'saint-art'} viewBox="0 0 640 760" role="img" aria-label={`Coloring page for ${saint.name}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={clipId}>
          <rect x="14" y="14" width="612" height="732" rx="40" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {/* Interior paper / painted background — always covers the whole card. */}
        <g {...p('background')} stroke="none">
          <rect x="14" y="14" width="612" height="732" rx="40" />
        </g>
        {Portrait ? <Portrait p={p} detail={detail} /> : null}
      </g>
      {/* Card outline sits above everything so the rounded frame always reads cleanly. */}
      <rect x="14" y="14" width="612" height="732" rx="40" fill="none" stroke={STROKE} strokeWidth={6} pointerEvents="none" />
      <text x="320" y="729" textAnchor="middle" className="saint-art__label" pointerEvents="none">{saint.shortName}</text>
    </svg>
  );
}
