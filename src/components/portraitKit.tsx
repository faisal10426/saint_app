import type { KeyboardEvent } from 'react';
import type { RegionId } from '../types';

export const STROKE = '#302a28';
export const DEFAULT_FILL = '#fffdf8';

export type RegionProps = {
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

export type DetailProps = {
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeLinecap: 'round';
  strokeLinejoin: 'round';
  pointerEvents: 'none';
};

export type PaintFn = (region: RegionId) => RegionProps;

export const detailStyle: DetailProps = {
  fill: 'none',
  stroke: STROKE,
  strokeWidth: 6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  pointerEvents: 'none',
};

export const ink = { fill: STROKE, stroke: 'none', pointerEvents: 'none' as const };

export const cloudFill = {
  fill: '#fffdf8',
  stroke: STROKE,
  strokeWidth: 6,
  strokeLinejoin: 'round' as const,
  pointerEvents: 'none' as const,
};

export function Sky({ detail }: { detail: DetailProps }) {
  return (
    <>
      <path {...cloudFill} d="M48 200c4-32 42-46 68-22 16-30 62-28 76 6 28-14 56 10 46 36 22 8 16 40-12 42-8 24-50 24-62 0-18 20-54 12-64-12-22 10-56-8-52-50z" />
      <path {...cloudFill} d="M438 88c8-22 42-28 58-8 12-20 48-18 58 8 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 18-48 0-12 16-42 10-50-10-16 8-42-8-34-54z" />
      <path {...cloudFill} d="M40 520c6-24 40-30 58-8 14-22 50-18 60 10 20-8 36 16 24 32 12 8 6 28-14 30-6 16-36 16-46-2-12 14-40 8-48-10-16 8-40-6-34-52z" />
      <g {...detail}>
        <path d="M320 122v-38M214 164l-38-32M426 164l38-32M192 250h-44M448 250h44M240 146l-32-40M400 146l32-40" />
      </g>
    </>
  );
}

export function Halo({ p, r = 124 }: { p: PaintFn; r?: number }) {
  return (
    <g {...p('halo')}>
      <circle cx="320" cy="248" r={r} />
    </g>
  );
}

export function Wings({ p }: { p: PaintFn }) {
  return (
    <g {...p('wings')}>
      <path d="M188 320C88 248 48 348 122 468c32 48 90 68 142 12-62 4-108-48-76-160z" />
      <path d="M452 320c100-72 140 28 66 148-32 48-90 68-142 12 62 4 108-48 76-160z" />
    </g>
  );
}

export function Face({ p, detail, cy = 268 }: { p: PaintFn; detail: DetailProps; cy?: number }) {
  return (
    <>
      <g {...p('skin')}>
        <ellipse cx="320" cy={cy} rx="76" ry="90" />
        <path d={`M270 ${cy + 82}l-12 44h104l-12-44z`} />
      </g>
      <g {...detail}>
        <path d={`M250 ${cy - 22}c16-12 40-12 52 2`} />
        <path d={`M338 ${cy - 20}c16-12 40-12 52 2`} />
        <path d={`M254 ${cy + 6}c18-20 46-20 62 0-16 13-44 13-62 0z`} />
        <path d={`M324 ${cy + 6}c18-20 46-20 62 0-16 13-44 13-62 0z`} />
        <path d={`M312 ${cy + 20}v22l-11 6`} />
        <path d={`M298 ${cy + 62}c14 11 30 11 44 0`} />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy={cy + 6} rx="7.5" ry="8.5" />
        <ellipse cx="354" cy={cy + 6} rx="7.5" ry="8.5" />
        <circle cx="289" cy={cy + 3} r="2.2" fill="#fffdf8" />
        <circle cx="357" cy={cy + 3} r="2.2" fill="#fffdf8" />
      </g>
    </>
  );
}

export function Beard({ p, kind }: { p: PaintFn; kind: 'full' | 'short' | 'gray' }) {
  const d = kind === 'short'
    ? 'M248 318c18 48 40 70 72 78 32-8 54-30 72-78-22 18-48 28-72 28s-50-10-72-28z'
    : 'M242 312c14 62 42 96 78 108 36-12 64-46 78-108-24 22-50 34-78 34s-54-12-78-34z';
  return <g {...p('hair')}><path d={d} /></g>;
}

export function Hair({ p, kind }: { p: PaintFn; kind: HairKind }) {
  switch (kind) {
    case 'none':
      return null;
    case 'short':
      return <g {...p('hair')}><path d="M232 228c0-86 176-86 176 0v58H232z" /></g>;
    case 'curly':
      return (
        <g {...p('hair')}>
          <path d="M228 236c-8-78 40-108 92-108s100 30 92 108v48H228z" />
          <path d="M236 210c18-22 40-10 44 8M360 210c-18-22-40-10-44 8M280 186c12-20 36-18 40 6" />
        </g>
      );
    case 'tonsure':
      return (
        <g {...p('hair')}>
          <path d="M228 250c8-70 48-92 92-92s84 22 92 92v40H228z" />
          <circle cx="320" cy="196" r="34" fill="#fffdf8" />
        </g>
      );
    case 'long':
      return <g {...p('hair')}><path d="M214 250c12-96 70-128 106-128s94 32 106 128v150c-28-18-70-26-106-26s-78 8-106 26z" /></g>;
    case 'braids':
      return (
        <g {...p('hair')}>
          <path d="M220 240c16-90 70-118 100-118s84 28 100 118v20H220z" />
          <path d="M214 268c-8 40-6 90 8 150 18-8 32-40 28-78 8 40 6 88 22 128 16-50 8-110 2-150z" />
          <path d="M426 268c8 40 6 90-8 150-18-8-32-40-28-78-8 40-6 88-22 128-16-50-8-110-2-150z" />
        </g>
      );
    case 'gray':
      return <g {...p('hair')}><path d="M236 232c8-72 48-88 84-88s76 16 84 88v40H236z" /></g>;
    case 'balding':
      return <g {...p('hair')}><path d="M236 250c20-40 48-48 84-48s64 8 84 48v28H236z" /></g>;
    case 'wavy':
    default:
      return <g {...p('hair')}><path d="M226 240c-6-88 48-118 94-118s100 30 94 118v70H226z" /></g>;
  }
}

export type HairKind = 'short' | 'curly' | 'tonsure' | 'long' | 'braids' | 'gray' | 'balding' | 'wavy' | 'none';

export function Tunic({ p, belt = true }: { p: PaintFn; belt?: boolean }) {
  return (
    <>
      <g {...p('robe')}>
        <path d="M228 400C256 372 286 360 320 360C354 360 384 372 412 400L438 655H202Z" />
      </g>
      {belt && (
        <g {...p('accent')}>
          <path d="M226 560h188l12 36H214z" />
        </g>
      )}
    </>
  );
}

export function SideCloak({ p }: { p: PaintFn }) {
  return (
    <g {...p('mantle')}>
      <path d="M400 370C478 410 522 500 528 655H400C408 540 402 455 372 410Z" />
    </g>
  );
}

export function FullCloak({ p }: { p: PaintFn }) {
  return (
    <g {...p('mantle')}>
      <path d="M198 390C138 440 118 530 128 655H248C230 545 226 460 250 412C228 398 210 390 198 390Z" />
      <path d="M442 390C502 440 522 530 512 655H392C410 545 414 460 390 412C412 398 430 390 442 390Z" />
    </g>
  );
}

export function HoodedHabit({ p }: { p: PaintFn }) {
  return (
    <>
      <g {...p('robe')}>
        <path d="M210 400C248 368 286 358 320 358C354 358 392 368 430 400L452 655H188Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M200 390C176 270 230 168 320 160C410 168 464 270 440 390C400 408 240 408 200 390Z" />
        <path d="M200 390C150 450 138 540 148 655H250C232 540 228 460 248 412C226 400 210 392 200 390Z" />
        <path d="M440 390C490 450 502 540 492 655H390C408 540 412 460 392 412C414 400 430 392 440 390Z" />
      </g>
      <g {...p('accent')}>
        <path d="M250 575h140l8 18-4 8H246z" />
        <path d="M318 593v28M304 621h28" />
      </g>
    </>
  );
}

export function DominicanHabit({ p }: { p: PaintFn }) {
  return (
    <>
      <g {...p('robe')}>
        <path d="M222 398C258 370 290 360 320 360C350 360 382 370 418 398L440 655H200Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M198 378C174 260 226 168 320 160C414 168 466 260 442 378C400 396 240 396 198 378Z" />
        <path d="M198 378C148 430 132 530 142 655H252C236 540 230 455 252 410C228 396 210 384 198 378Z" />
        <path d="M442 378C492 430 508 530 498 655H388C404 540 410 455 388 410C412 396 430 384 442 378Z" />
      </g>
    </>
  );
}

export function Cassock({ p }: { p: PaintFn }) {
  return (
    <>
      <g {...p('robe')}>
        <path d="M236 392C270 368 296 360 320 360C344 360 370 368 404 392L426 655H214Z" />
      </g>
      <g {...p('accent')}>
        <path d="M300 372h40v18h-40z" />
        <path d="M318 390v200" />
      </g>
      <g {...p('mantle')}>
        <path d="M240 400C210 430 200 500 208 655H250C246 520 252 450 278 418Z" />
      </g>
    </>
  );
}

export function NunHabit({ p }: { p: PaintFn }) {
  return (
    <>
      <g {...p('mantle')}>
        <path d="M198 370C172 250 226 155 320 148C414 155 468 250 442 370C400 392 240 392 198 370Z" />
        <path d="M198 370C150 430 136 530 146 655H250C234 540 230 455 250 412C226 396 208 380 198 370Z" />
        <path d="M442 370C490 430 504 530 494 655H390C406 540 410 455 390 412C414 396 432 380 442 370Z" />
      </g>
      <g {...p('robe')}>
        <path d="M222 368C204 260 248 178 320 172C392 178 436 260 418 368C378 390 262 390 222 368Z" />
        <path d="M248 420C274 396 296 388 320 388C344 388 366 396 392 420L416 655H224Z" />
      </g>
    </>
  );
}

export function VeiledWoman({ p }: { p: PaintFn }) {
  return (
    <>
      <g {...p('robe')}>
        <path d="M216 372C196 255 244 168 320 162C396 168 444 255 424 372C384 394 256 394 216 372Z" />
        <path d="M240 418C268 394 294 386 320 386C346 386 372 394 400 418L424 655H216Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M198 390C140 445 122 535 134 655H246C228 545 224 455 248 412C226 398 208 390 198 390Z" />
        <path d="M442 390C500 445 518 535 506 655H394C412 545 416 455 392 412C414 398 432 390 442 390Z" />
      </g>
    </>
  );
}

export function Armor({ p }: { p: PaintFn }) {
  return (
    <>
      <g {...p('robe')}>
        <path d="M250 400C278 372 300 362 320 362C340 362 362 372 390 400L410 560 320 590 230 560Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M390 380C470 420 500 520 508 655H390C396 540 392 455 368 410Z" />
      </g>
      <g {...p('accent')}>
        <path d="M304 430h32v70h-32z" />
        <path d="M312 448h16M312 466h16M312 484h16" />
        <path d="M236 548h168l8 28H228z" />
      </g>
    </>
  );
}

export function BishopVestments({ p }: { p: PaintFn }) {
  return (
    <>
      <g {...p('symbol')}>
        <path d="M268 128l52-58 52 58v58H268z" />
      </g>
      <g {...p('robe')}>
        <path d="M220 400C258 370 292 360 320 360C348 360 382 370 420 400L444 655H196Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M210 395C160 450 148 540 156 655H260C246 540 244 460 268 418C244 404 224 396 210 395Z" />
        <path d="M430 395C480 450 492 540 484 655H380C394 540 396 460 372 418C396 404 416 396 430 395Z" />
      </g>
      <g {...p('accent')}>
        <path d="M304 360h32v220h-32z" />
      </g>
    </>
  );
}

export function OpenHands({ p }: { p: PaintFn }) {
  return (
    <g {...p('skin')}>
      <ellipse cx="168" cy="470" rx="28" ry="22" />
      <ellipse cx="472" cy="470" rx="28" ry="22" />
    </g>
  );
}

export function HoldHands({ p }: { p: PaintFn }) {
  return (
    <g {...p('skin')}>
      <ellipse cx="246" cy="520" rx="26" ry="22" />
      <ellipse cx="394" cy="520" rx="26" ry="22" />
    </g>
  );
}

export function PrayerHands({ p }: { p: PaintFn }) {
  return (
    <g {...p('skin')}>
      <ellipse cx="300" cy="500" rx="16" ry="42" />
      <ellipse cx="340" cy="500" rx="16" ry="42" />
    </g>
  );
}

export function Lily({ p, x = 150, y = 430 }: { p: PaintFn; x?: number; y?: number }) {
  return (
    <g {...p('symbol')}>
      <path d={`M${x} ${y + 140}v-90`} />
      <path d={`M${x} ${y}c18-36 48-34 58 0-18 36-48 34-58 0z`} />
      <path d={`M${x + 8} ${y + 20}c12-28 36-24 42 6`} />
    </g>
  );
}

export function Book({ p, x = 430, y = 470 }: { p: PaintFn; x?: number; y?: number }) {
  return (
    <g {...p('symbol')}>
      <path d={`M${x} ${y}h92v78h-92z`} />
      <path d={`M${x + 16} ${y + 22}h60M${x + 16} ${y + 40}h60M${x + 16} ${y + 58}h44`} />
    </g>
  );
}

export function Cross({ p, x = 150, y = 400 }: { p: PaintFn; x?: number; y?: number }) {
  return (
    <g {...p('symbol')}>
      <path d={`M${x} ${y}v150M${x - 28} ${y + 36}h56`} />
    </g>
  );
}

export function Rosary({ p, x = 470, y = 500 }: { p: PaintFn; x?: number; y?: number }) {
  return (
    <g {...p('symbol')}>
      <circle cx={x} cy={y} r="46" fill="none" />
      <circle cx={x} cy={y - 46} r="7" />
      <circle cx={x + 40} cy={y - 22} r="7" />
      <circle cx={x + 40} cy={y + 22} r="7" />
      <circle cx={x} cy={y + 46} r="7" />
      <path d={`M${x} ${y + 52}v40M${x - 16} ${y + 78}h32`} />
    </g>
  );
}

export function Staff({ p, x = 148 }: { p: PaintFn; x?: number }) {
  return (
    <g {...p('symbol')}>
      <path d={`M${x} 360v250`} />
      <path d={`M${x} 360c48-10 50 52 0 42`} />
    </g>
  );
}

export function Sword({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M168 360v210" />
      <path d="M148 430h40" />
      <path d="M158 360h20v18h-20z" />
    </g>
  );
}

export function Palm({ p, x = 470 }: { p: PaintFn; x?: number }) {
  return (
    <g {...p('symbol')}>
      <path d={`M${x} 560c6-90-8-140-36-168`} />
      <path d={`M${x - 14} 430c-26-16-40-6-40 8 22 12 36 8 40-8z`} />
      <path d={`M${x - 8} 458c-28-8-40 6-36 20 24 6 36 0 36-20z`} />
    </g>
  );
}

export function Roses({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <circle cx="168" cy="500" r="28" />
      <circle cx="198" cy="528" r="22" />
      <circle cx="148" cy="536" r="18" />
    </g>
  );
}

export function Lamb({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <ellipse cx="470" cy="520" rx="48" ry="32" />
      <circle cx="508" cy="500" r="18" />
      <path d="M498 488h8M516 488h8" />
    </g>
  );
}

export function Heart({ p, x = 470, y = 500 }: { p: PaintFn; x?: number; y?: number }) {
  return (
    <g {...p('symbol')}>
      <path d={`M${x} ${y}c-36-42-76 18 0 70 76-52 36-112 0-70z`} />
    </g>
  );
}

export function Chalice({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M446 450h70v40c0 34-70 34-70 0z" />
      <path d="M481 530v40M454 570h54" />
    </g>
  );
}

export function Shield({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M132 430l48-22 48 22v68c-32 40-64 40-96 0z" />
      <path d="M180 430v86" />
    </g>
  );
}

export function Bird({ p, x, y }: { p: PaintFn; x: number; y: number }) {
  return (
    <g {...p('symbol')}>
      <path d={`M${x} ${y}c14-18 36-8 42 10-20 8-36 4-42-10z`} />
    </g>
  );
}

export function MitreOnHead({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M262 150l58-62 58 62v54H262z" />
    </g>
  );
}

export function Scallop({ p, x = 400, y = 430 }: { p: PaintFn; x?: number; y?: number }) {
  return (
    <g {...p('symbol')}>
      <path d={`M${x} ${y}c0-50 80-50 80 0-28 24-52 24-80 0z`} />
      <path d={`M${x + 40} ${y - 48}v52M${x + 18} ${y - 36}l22 48M${x + 62} ${y - 36}l-22 48`} />
    </g>
  );
}

export function Keys({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <circle cx="150" cy="470" r="18" />
      <path d="M168 470h70M210 470v18M228 470v18" />
      <circle cx="158" cy="510" r="16" />
      <path d="M174 510h60M206 510v16" />
    </g>
  );
}

export function XCross({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M150 380l90 200M240 380l-90 200" />
    </g>
  );
}

export function Lamp({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M430 490h78l-10 48h-58z" />
      <path d="M448 488c-2-34 40-34 40 0" />
      <path d="M468 454l12-20" />
    </g>
  );
}

export function Lyre({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M430 470c0-40 70-40 70 0v80c0 22-36 22-36 0v-54c0-18-34-18-34 0z" />
    </g>
  );
}

export function Laptop({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M250 470h140v78H250z" />
      <path d="M262 482h116v52H262z" />
      <circle cx="320" cy="508" r="16" />
    </g>
  );
}

export function Globe({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <circle cx="470" cy="500" r="40" />
      <path d="M470 460v80M430 500h80M448 476c16 10 28 10 44 0M448 524c16-10 28-10 44 0" />
      <path d="M470 458v-16M462 446h16" />
    </g>
  );
}

export function Mountain({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M430 560l50-100 50 100z" />
      <path d="M464 528l16-32 18 32" />
    </g>
  );
}

export function Basket({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M430 490h90l-12 80h-66z" />
      <path d="M448 490c8-32 48-32 56 0" />
    </g>
  );
}

export function MedicalBag({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M430 478h92v74h-92z" />
      <path d="M452 478c6-26 40-26 46 0" />
      <path d="M462 514h28M476 500v28" />
    </g>
  );
}

export function Chains({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <ellipse cx="150" cy="490" rx="22" ry="16" />
      <ellipse cx="186" cy="518" rx="22" ry="16" />
      <path d="M168 502l14 10" />
    </g>
  );
}

export function Anchor({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <circle cx="470" cy="430" r="14" />
      <path d="M470 444v110M448 554c8 18 36 18 44 0M430 500h80" />
    </g>
  );
}

export function Wheel({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <circle cx="470" cy="500" r="42" />
      <circle cx="470" cy="500" r="12" />
      <path d="M470 458v84M428 500h84M442 470l56 60M498 470l-56 60" />
    </g>
  );
}

export function Flame({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M470 560c-28-40-8-70 0-96 8 26 28 56 0 96z" />
    </g>
  );
}

export function Dove({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M150 470c28-40 70-20 62 18-8 20-28 28-48 12 22 8 18 28-4 22-20-4-28-22-10-52z" />
    </g>
  );
}

export function Jar({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M292 500h56l8 90h-72z" />
      <path d="M304 500c4-28 36-28 40 0" />
      <path d="M312 472h16v28h-16z" />
    </g>
  );
}

export function Shamrock({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M150 490c-36-52 36-70 34-16 16-54 70-14 26 14 48 12 20 72-10 38-16 38-64 8-30-18z" />
    </g>
  );
}

export function StarBurst({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M320 430l18 36 40 6-30 28 8 40-36-20-36 20 8-40-30-28 40-6z" />
    </g>
  );
}

export function CarpenterSquare({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M470 400v180h54" />
      <path d="M470 430h36M470 460h36M470 490h36" />
    </g>
  );
}

export function Banner({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M490 380v250" />
      <path d="M490 392h-96l32 44-32 44h96z" />
    </g>
  );
}

export function PapalCross({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M150 380v220" />
      <path d="M118 430h64M126 456h48M134 482h32" />
    </g>
  );
}

export function Monstrance({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <circle cx="470" cy="470" r="40" />
      <path d="M470 410v-24M470 530v28M430 470h-24M510 470h24" />
      <path d="M458 558h24" />
    </g>
  );
}

export function Crozier({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M150 390v240" />
      <path d="M150 390c52-12 54 58 4 48" />
    </g>
  );
}

export function CuteDragon({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M430 545c4-72 100-80 90-14-4 30-42 50-90 30l16-18-16-18z" />
      <path d="M456 500l-16-24M490 492l22-18" />
    </g>
  );
}

export function Arrows({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M250 430l40 90M230 450l70 70M270 410l20 110" />
      <path d="M246 422l-12-18M266 398l-8-20M226 442l-14-16" />
    </g>
  );
}

export function Glasses({ detail }: { detail: DetailProps }) {
  return (
    <g {...detail}>
      <circle cx="286" cy="274" r="22" />
      <circle cx="354" cy="274" r="22" />
      <path d="M308 274h24" />
    </g>
  );
}

export function SmallChild({ p, x = 455, y = 500 }: { p: PaintFn; x?: number; y?: number }) {
  return (
    <>
      <g {...p('halo')}><circle cx={x} cy={y - 70} r="36" /></g>
      <g {...p('hair')}><circle cx={x} cy={y - 48} r="28" /></g>
      <g {...p('skin')}><circle cx={x} cy={y - 42} r="22" /></g>
      <g {...p('robe')}><path d={`M${x - 28} ${y - 22}h56l10 90h-76z`} /></g>
    </>
  );
}

export function Headband({ p }: { p: PaintFn }) {
  return (
    <g {...p('accent')}>
      <path d="M244 236h152v16H244z" />
    </g>
  );
}

export function Bonnet({ p }: { p: PaintFn }) {
  return (
    <g {...p('mantle')}>
      <path d="M210 300C196 210 240 150 320 146C400 150 444 210 430 300C390 250 250 250 210 300Z" />
      <path d="M250 300c20 40 40 48 70 48s50-8 70-48" />
    </g>
  );
}

export function Sari({ p }: { p: PaintFn }) {
  return (
    <>
      <g {...p('robe')}>
        <path d="M230 400C262 372 292 362 320 362C348 362 378 372 410 400L434 655H206Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M210 250C198 200 240 160 320 158C360 160 400 180 420 230C380 210 300 220 250 270C230 360 220 500 228 655H270C262 500 268 360 300 280C340 230 400 250 430 300C438 360 442 500 448 655H500C492 480 486 340 460 270C430 190 370 148 320 146C250 148 190 190 210 250Z" />
      </g>
      <g {...p('accent')}>
        <path d="M250 268c20-8 90-12 140 8" />
        <path d="M236 400c40-8 120-8 168 0" />
      </g>
    </>
  );
}
