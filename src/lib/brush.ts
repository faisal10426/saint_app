import type { RegionId } from '../types';

export type BrushStroke = {
  id: string;
  region: RegionId;
  color: string;
  points: number[];
  width: number;
  segments?: number[][];
};

export const BRUSH_WIDTH = 22;
export const BRUSH_TAP_SLOP = 9;
const SAMPLE_STEP = 5;

export function clientToSvgPoint(svg: SVGSVGElement, clientX: number, clientY: number): { x: number; y: number } | null {
  const ctm = svg.getScreenCTM();
  if (!ctm) return null;
  const point = svg.createSVGPoint();
  point.x = clientX;
  point.y = clientY;
  const mapped = point.matrixTransform(ctm.inverse());
  return { x: mapped.x, y: mapped.y };
}

export function hitRegion(clientX: number, clientY: number): RegionId | null {
  const stack = document.elementsFromPoint(clientX, clientY);
  for (const node of stack) {
    if (!(node instanceof Element)) continue;
    if (node.closest('[data-brush-clip], clipPath, defs')) continue;
    const id = node.closest('[data-region]')?.getAttribute('data-region');
    if (id) return id as RegionId;
  }
  return null;
}

export function strokeLength(points: number[]): number {
  let distance = 0;
  for (let i = 2; i < points.length; i += 2) {
    const dx = points[i] - points[i - 2];
    const dy = points[i + 1] - points[i - 1];
    distance += Math.hypot(dx, dy);
  }
  return distance;
}

export function latestStrokeColor(region: RegionId, strokes: BrushStroke[]): string {
  for (let i = strokes.length - 1; i >= 0; i -= 1) {
    if (strokes[i].region === region) return strokes[i].color;
  }
  return '';
}

export function pointsAttr(points: number[]): string {
  const pairs: string[] = [];
  for (let i = 0; i < points.length; i += 2) {
    pairs.push(`${points[i]},${points[i + 1]}`);
  }
  return pairs.join(' ');
}

export function strokeSegments(stroke: BrushStroke): number[][] {
  const parts = stroke.segments?.length ? stroke.segments : [stroke.points];
  return parts.filter((part) => part.length >= 2);
}

export function flattenSegments(segments: number[][]): number[] {
  return segments.flatMap((part) => part);
}

export function interpolateClients(
  from: { x: number; y: number },
  to: { x: number; y: number },
): { x: number; y: number }[] {
  const distance = Math.hypot(to.x - from.x, to.y - from.y);
  const count = Math.max(1, Math.ceil(distance / SAMPLE_STEP));
  const points: { x: number; y: number }[] = [];
  for (let index = 1; index <= count; index += 1) {
    const t = index / count;
    points.push({
      x: from.x + (to.x - from.x) * t,
      y: from.y + (to.y - from.y) * t,
    });
  }
  return points;
}

export function appendLockedSamples(
  segments: number[][],
  svg: SVGSVGElement,
  samples: { x: number; y: number }[],
  lock: RegionId,
): number[][] {
  const next = segments.map((part) => part.slice());
  for (const sample of samples) {
    if (hitRegion(sample.x, sample.y) !== lock) {
      if (next.length && next[next.length - 1].length) next.push([]);
      continue;
    }
    const point = clientToSvgPoint(svg, sample.x, sample.y);
    if (!point) continue;
    if (!next.length) next.push([]);
    next[next.length - 1].push(point.x, point.y);
  }
  return next;
}
