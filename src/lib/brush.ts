import type { RegionId } from '../types';

export type BrushStroke = {
  id: string;
  region: RegionId;
  color: string;
  points: number[];
  width: number;
};

export const BRUSH_WIDTH = 22;
export const BRUSH_TAP_SLOP = 9;

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
