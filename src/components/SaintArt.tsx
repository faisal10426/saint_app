import { useLayoutEffect, useRef, type KeyboardEvent } from 'react';
import { pointsAttr, strokeSegments, type BrushStroke } from '../lib/brush';
import type { PaintMap, RegionId, Saint } from '../types';
import { portraits } from './saints';

type Props = {
  saint: Saint;
  colors: PaintMap;
  onPaint: (region: RegionId) => void;
  strokes?: BrushStroke[];
  svgId: string;
  compact?: boolean;
};

const DEFAULT = '#fffdf8';
const STROKE = '#302a28';
const SVG_NS = 'http://www.w3.org/2000/svg';
const UNDERLAY_REGIONS = new Set<RegionId>(['background']);

function clipIdFor(svgId: string, region: RegionId) {
  return `${svgId}-brush-${region}`;
}

const CLIP_SHAPES = 'path,rect,circle,ellipse,polygon,polyline';

function ancestorTransform(node: Element, svg: SVGSVGElement): string {
  const transforms: string[] = [];
  let current: Element | null = node;
  while (current && current !== svg && current.tagName.toLowerCase() !== 'svg') {
    const transform = current.getAttribute('transform');
    if (transform) transforms.unshift(transform);
    current = current.parentElement;
  }
  return transforms.join(' ');
}

function cloneClipShapes(node: Element, svg: SVGSVGElement): Element[] {
  const shapes = node.matches(CLIP_SHAPES) ? [node] : [...node.querySelectorAll(CLIP_SHAPES)];
  return shapes.map((shape) => {
    const clone = shape.cloneNode(false) as Element;
    const transform = ancestorTransform(shape, svg);
    if (transform) clone.setAttribute('transform', transform);
    clone.setAttribute('fill', '#000');
    clone.setAttribute('stroke', 'none');
    clone.removeAttribute('class');
    clone.removeAttribute('data-region');
    clone.removeAttribute('role');
    clone.removeAttribute('tabindex');
    clone.removeAttribute('aria-label');
    clone.removeAttribute('pointer-events');
    return clone;
  });
}

export default function SaintArt({
  saint,
  colors,
  onPaint,
  strokes = [],
  svgId,
  compact = false,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  const color = (region: RegionId) => colors[region] ?? DEFAULT;
  const interactive = (region: RegionId) => ({
    role: 'button' as const,
    tabIndex: 0,
    'data-region': region,
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
  const frameClipId = `${svgId}-frame`;
  const strokeRegions = [...new Set(strokes.map((item) => item.region))];
  const underlayRegions = strokeRegions.filter((region) => UNDERLAY_REGIONS.has(region));
  const overlayRegions = strokeRegions.filter((region) => !UNDERLAY_REGIONS.has(region));

  function renderStrokes(regions: RegionId[]) {
    return regions.map((region) => (
      <g key={region} clipPath={`url(#${clipIdFor(svgId, region)})`} className="brush-layer" pointerEvents="none">
        {strokes
          .filter((item) => item.region === region)
          .map((item) =>
            strokeSegments(item).map((points, index) => (
              <polyline
                key={`${item.id}-${index}`}
                points={pointsAttr(points)}
                fill="none"
                stroke={item.color || 'currentColor'}
                strokeWidth={item.width}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )),
          )}
      </g>
    ));
  }

  useLayoutEffect(() => {
    const svg = svgRef.current;
    const defs = svg?.querySelector('defs');
    if (!svg || !defs || !strokes.length) return;
    defs.querySelectorAll('[data-brush-clip]').forEach((node) => node.remove());
    svg.querySelectorAll('[data-region]').forEach((group) => {
      if (group.closest('[data-brush-clip]')) return;
      const region = group.getAttribute('data-region');
      if (!region) return;
      let clip = defs.querySelector(`#${CSS.escape(clipIdFor(svgId, region as RegionId))}`);
      if (!clip) {
        clip = document.createElementNS(SVG_NS, 'clipPath');
        clip.id = clipIdFor(svgId, region as RegionId);
        clip.setAttribute('data-brush-clip', region);
        clip.setAttribute('clipPathUnits', 'userSpaceOnUse');
        clip.setAttribute('clip-rule', 'nonzero');
        defs.appendChild(clip);
      }
      cloneClipShapes(group, svg).forEach((shape) => clip.appendChild(shape));
    });
  }, [saint.id, svgId, compact, strokes.length]);

  return (
    <svg
      ref={svgRef}
      id={svgId}
      className={compact ? 'saint-art saint-art--compact' : 'saint-art'}
      viewBox="0 0 640 760"
      role="img"
      aria-label={`Coloring page for ${saint.name}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={frameClipId}>
          <rect x="14" y="14" width="612" height="732" rx="40" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${frameClipId})`}>
        <g {...p('background')} stroke="none">
          <rect x="14" y="14" width="612" height="732" rx="40" />
        </g>
        {renderStrokes(underlayRegions)}
        {Portrait ? <Portrait p={p} detail={detail} /> : null}
        {renderStrokes(overlayRegions)}
      </g>
      <rect x="14" y="14" width="612" height="732" rx="40" fill="none" stroke={STROKE} strokeWidth={6} pointerEvents="none" />
      <text x="320" y="729" textAnchor="middle" className="saint-art__label" pointerEvents="none">{saint.shortName}</text>
    </svg>
  );
}
