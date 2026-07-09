import type { KeyboardEvent, ReactNode } from 'react';
import type { PaintMap, RegionId, Saint } from '../types';

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
  const p = (region: RegionId) => ({ fill: color(region), stroke: STROKE, strokeWidth: 6, strokeLinejoin: 'round' as const, ...interactive(region) });
  const detail = { fill: 'none', stroke: STROKE, strokeWidth: 6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, pointerEvents: 'none' as const };

  const symbol = motifSymbol(saint, p, detail);

  return (
    <svg id={svgId} className={compact ? 'saint-art saint-art--compact' : 'saint-art'} viewBox="0 0 640 760" role="img" aria-label={`Coloring page for ${saint.name}`} xmlns="http://www.w3.org/2000/svg">
      <g {...p('background')}>
        <rect x="14" y="14" width="612" height="732" rx="40" />
      </g>

      <g {...p('halo')}>
        <circle cx="320" cy="156" r="117" />
      </g>

      {saint.wings && (
        <g {...p('wings')}>
          <path d="M190 330C96 260 54 353 130 464c33 49 92 71 145 15-64 2-108-51-85-149z" />
          <path d="M450 330c94-70 136 23 60 134-33 49-92 71-145 15 64 2 108-51 85-149z" />
        </g>
      )}

      <g {...p('hair')}>
        <path d="M224 228c0-94 190-94 190 0v77H224z" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="320" cy="260" rx="93" ry="103" />
        <path d="M263 351c-44 26-67 75-70 135h66l22-88z" />
        <path d="M377 351c44 26 67 75 70 135h-66l-22-88z" />
      </g>
      <g {...detail}>
        <path d="M278 265c14-9 28-9 42 0M342 265c14-9 28-9 42 0" />
        <path d="M302 318c12 8 24 8 36 0" />
        <path d="M318 275v24l-10 5" />
      </g>

      <g {...p('robe')}>
        <path d="M197 706l25-235c7-66 46-111 98-111s91 45 98 111l25 235z" />
      </g>
      <g {...p('mantle')}>
        <path d="M414 352c74 43 111 127 116 354H395l-46-206c-10-46 3-102 65-148z" />
      </g>
      <g {...p('accent')}>
        <path d="M235 504h170l15 45H220z" />
      </g>
      <g {...detail}>
        <path d="M264 571v121M320 565v128M376 571v121" />
        <path d="M401 436c-29 56-31 107-9 163M423 493c-23 35-28 74-18 114" />
      </g>

      {symbol}
      <text x="320" y="729" textAnchor="middle" className="saint-art__label">{saint.shortName}</text>
    </svg>
  );
}

type RegionProps = {
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeLinejoin: 'round';
  role: 'button';
  tabIndex: number;
  'aria-label': string;
  onClick: () => void;
  onKeyDown: (event: KeyboardEvent<SVGGElement>) => void;
  className: string;
};

type DetailProps = {
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeLinecap: 'round';
  strokeLinejoin: 'round';
  pointerEvents: 'none';
};

function motifSymbol(
  saint: Saint,
  p: (region: RegionId) => RegionProps,
  detail: DetailProps,
): ReactNode {
  const symbol = p('symbol');
  const minimalCross = <path {...detail} d="M314 445v74M289 470h50" />;

  switch (saint.motif) {
    case 'mary':
      return <g {...symbol}><path d="M126 514l24-46 24 46zM490 514l24-46 24 46z" /><path d="M320 408l17 34 38 5-28 26 7 38-34-18-34 18 7-38-28-26 38-5z" /></g>;
    case 'joseph':
      return <g {...symbol}><path d="M138 402l16 250" /><path d="M128 402c17-27 40-25 50 0-17 27-40 25-50 0z" /><path d="M458 422c18-34 45-34 60 0-18 34-45 34-60 0z" /></g>;
    case 'francis':
      return <g {...symbol}><path d="M142 460c16-22 38-9 46 10-23 10-41 5-46-10zM476 448c16-22 38-9 46 10-23 10-41 5-46-10z" />{minimalCross}</g>;
    case 'roses':
      return <g {...symbol}><circle cx="168" cy="462" r="31" /><circle cx="472" cy="462" r="31" />{minimalCross}</g>;
    case 'lily-book':
      return <g {...symbol}><path d="M126 497h90v68h-90z" /><path d="M461 443c14-32 44-32 56 0-14 32-44 32-56 0z" /></g>;
    case 'mitre':
      return <g {...symbol}><path d="M264 126l56-60 56 60v66h-112z" /><path d="M138 448v163M124 465c14-24 36-18 41 5-15 18-30 19-41-5z" /></g>;
    case 'shamrock':
      return <g {...symbol}><path d="M143 463c-38-55 38-74 36-18 16-56 72-15 28 14 50 13 21 75-10 40-17 39-67 8-32-20z" /><path d="M503 418v191" /></g>;
    case 'sword-shield':
      return <g {...symbol}><path d="M500 401l-94 136 18 18 94-136z" /><path d="M125 445l47-25 47 25v71c-31 39-62 39-94 0z" /></g>;
    case 'angel-lily':
      return <g {...symbol}><path d="M458 438c17-36 47-33 58 0-17 36-47 33-58 0z" /><path d="M320 429v91M290 459h60" /></g>;
    case 'angel-fish':
      return <g {...symbol}><path d="M450 463c46-40 92-13 74 21-18 34-64 61-74 21l-38 21 14-42-14-42z" /><path d="M151 422v183" /></g>;
    case 'banner':
      return <g {...symbol}><path d="M493 399v244" /><path d="M493 409h-101l35 46-35 46h101z" /></g>;
    case 'papal-cross':
      return <g {...symbol}><path d="M147 410v177M118 444h58M126 467h42" /><path d="M454 474c27-24 53-18 57 10-12 27-40 28-57 10z" /></g>;
    case 'cross-rose':
      return <g {...symbol}>{minimalCross}<circle cx="461" cy="472" r="35" /></g>;
    case 'stigmata':
      return <g {...symbol}><path d="M243 467c15-16 40-16 55 0" /><path d="M342 467c15-16 40-16 55 0" />{minimalCross}</g>;
    case 'children':
      return <g {...symbol}><circle cx="149" cy="495" r="30" /><circle cx="491" cy="495" r="30" /><path d="M138 544h22M480 544h22" /></g>;
    case 'mission-cross':
      return <g {...symbol}><path d="M148 418v190M116 468h64" /><path d="M469 428c25 23 41 53 44 86" /></g>;
    case 'monstrance':
      return <g {...symbol}><circle cx="497" cy="473" r="42" /><path d="M497 410v-31M497 567v35M434 473h-31M560 473h31" /></g>;
    case 'rosary':
      return <g {...symbol}><circle cx="496" cy="488" r="50" /><circle cx="496" cy="414" r="8" /><circle cx="540" cy="433" r="8" /><circle cx="550" cy="480" r="8" /><circle cx="527" cy="525" r="8" /><path d="M496 537v45M478 558h36" /></g>;
    case 'heart-book':
      return <g {...symbol}><path d="M127 486h92v68h-92z" /><path d="M491 451c-43-50-92 22 0 78 92-56 43-128 0-78z" /></g>;
    case 'tears':
      return <g {...symbol}><path d="M235 290c-16 21-13 35 0 45 13-10 16-24 0-45z" /><path d="M477 443h82v63h-82z" /></g>;
    case 'summa':
      return <g {...symbol}><path d="M120 466h111v81H120z" /><path d="M477 401l15 30 34 4-24 24 7 33-32-17-31 17 7-33-24-24 34-4z" /></g>;
    case 'rule-book':
      return <g {...symbol}><path d="M445 447h101v93H445z" /><path d="M470 466h51M470 489h51M470 512h38" /></g>;
    case 'crown-lily':
      return <g {...symbol}><path d="M254 128l20 31 46-32 46 32 20-31v55H254z" /><path d="M484 446c17-34 47-33 58 0-17 34-47 33-58 0z" /></g>;
    case 'grotto':
      return <g {...symbol}><path d="M444 555c2-73 52-113 103-70v70z" /><circle cx="503" cy="485" r="7" /></g>;
    case 'tilma':
      return <g {...symbol}><path d="M448 432l75 32-15 105-75-32z" /><circle cx="477" cy="474" r="12" /><circle cx="493" cy="510" r="12" /></g>;
    case 'lily-basket':
      return <g {...symbol}><path d="M455 466h82l-11 77h-60z" /><path d="M467 466c7-33 53-33 60 0" /><path d="M489 431c12-26 35-24 43 0-12 26-35 24-43 0z" /></g>;
    case 'horse-cloak':
      return <g {...symbol}><path d="M448 481c24-65 89-37 87 31-3 55-48 70-88 34z" /><path d="M472 547v48M512 547v48" /></g>;
    case 'charity-bag':
      return <g {...symbol}><path d="M447 462h91l-11 86h-69z" /><path d="M467 462c6-28 43-28 49 0" /><path d="M482 505h28M496 491v28" /></g>;
    case 'school-book':
      return <g {...symbol}><path d="M447 453h92v87h-92z" /><path d="M461 474h62M461 496h62M461 518h48" /></g>;
    case 'purity-lily':
      return <g {...symbol}><path d="M489 440c21-40 54-37 68 0-21 40-54 37-68 0z" /><path d="M511 482v84" /></g>;
    case 'lamp':
      return <g {...symbol}><path d="M456 471h81l-10 55h-61z" /><path d="M474 469c-2-38 43-38 43 0" /><path d="M496 431l14-23M464 446l-22-14M526 446l22-14" /></g>;
    case 'music':
      return <g {...symbol}><path d="M456 476c0-36 67-36 67 0v71c0 20-34 20-34 0v-48c0-17-33-17-33 0z" /></g>;
    case 'palm':
      return <g {...symbol}><path d="M486 557c6-85-6-135-34-158M474 438c-26-16-40-7-41 7 23 13 37 10 41-7zM480 467c-28-8-39 5-36 19 25 7 37 1 36-19z" /></g>;
    case 'parents':
      return <g {...symbol}><path d="M449 457h91v78h-91z" /><path d="M469 476h51M469 496h51M469 516h37" /></g>;
    case 'baptism-shell':
      return <g {...symbol}><path d="M448 496c0-60 94-60 94 0-33 29-61 29-94 0z" /><path d="M495 442v66M468 452l27 56M522 452l-27 56" /></g>;
    case 'dragon':
      return <g {...symbol}><path d="M446 510c3-78 109-89 99-16-4 32-46 55-99 34l18-20-18-20z" /><path d="M474 469l-19-27M510 461l25-20" /></g>;
    case 'staff':
      return <g {...symbol}><path d="M146 405v232M145 405c55-13 54 60 0 47" /><path d="M484 459c13-20 34-18 41 0" /></g>;
    case 'arrows':
      return <g {...symbol}><path d="M462 433l80 101M454 526l80-101M444 470l88 0" /></g>;
    case 'hearts':
      return <g {...symbol}><path d="M457 459c-36-43-76 18 0 69 76-51 36-112 0-69z" /><path d="M526 427c-20-24-42 10 0 37 42-27 20-61 0-37z" /></g>;
    case 'medical-bag':
      return <g {...symbol}><path d="M448 470h93v76h-93z" /><path d="M470 470c7-29 42-29 49 0" /><path d="M479 508h31M495 492v31" /></g>;
    case 'chains':
      return <g {...symbol}><ellipse cx="471" cy="484" rx="24" ry="17" /><ellipse cx="520" cy="518" rx="24" ry="17" /><path d="M488 496l17 10" /></g>;
    case 'chalice':
      return <g {...symbol}><path d="M465 447h63v38c0 33-63 33-63 0zM496 520v43M468 563h56" />{minimalCross}</g>;
    case 'martyr-cross':
      return <g {...symbol}><path d="M495 416v174M457 464h76" /><path d="M473 443l22 22 22-22" /></g>;
    case 'computer':
      return <g {...symbol}><path d="M443 457h108v70H443z" /><path d="M475 554h43M495 527v27" /><path d="M457 471h80v41h-80z" /></g>;
    case 'mountain':
      return <g {...symbol}><path d="M438 553l53-104 52 104z" /><path d="M474 520l18-35 19 35" /><path d="M146 422v183" /></g>;
    default:
      return <g {...symbol}>{minimalCross}</g>;
  }
}
