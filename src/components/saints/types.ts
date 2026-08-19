import type { KeyboardEvent } from 'react';
import type { RegionId } from '../../types';

export const STROKE = '#302a28';
export const PAPER = '#fffdf8';

export type PaintFn = (region: RegionId) => {
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeLinejoin: 'round';
  pointerEvents: 'visiblePainted';
  role: 'button';
  tabIndex: number;
  'aria-label': string;
  onClick: () => void;
  onKeyDown: (event: KeyboardEvent<SVGGElement>) => void;
  className: string;
};

export type DetailProps = {
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeLinecap: 'round';
  strokeLinejoin: 'round';
  pointerEvents: 'none';
};

export type PortraitProps = {
  p: PaintFn;
  detail: DetailProps;
};

export const ink = { fill: STROKE, stroke: 'none' as const, pointerEvents: 'none' as const };
