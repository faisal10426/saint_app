import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function PaulMiki({ p, detail }: PortraitProps) {
  const rays = Array.from({ length: 10 }, (_, i) => {
    const a = ((-40 + i * 8) * Math.PI) / 180;
    const x1 = 540 + Math.cos(a) * 36;
    const y1 = 160 + Math.sin(a) * 36;
    const x2 = 540 + Math.cos(a) * 70;
    const y2 = 160 + Math.sin(a) * 70;
    return `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }).join('');

  return (
    <>
      <g {...p('symbol')}>
        <circle cx="540" cy="160" r="36" />
        <path d={rays} fill="none" stroke={STROKE} strokeWidth="6" strokeLinecap="round" />
      </g>
      <path
        {...paperShape}
        d="M36 192c6-28 42-38 64-14 16-26 58-22 70 8 24-12 50 14 38 36 18 8 10 36-12 38-8 20-46 20-56-2-16 18-50 10-58-12-20 8-52-8-48-54z"
      />

      <g {...p('halo')}>
        <circle cx="292" cy="244" r="114" />
      </g>
      <g {...detail}>
        <path d="M292 124v-24M198 164l-32-24M386 164l32-24M172 244h-36M412 244h36M220 140l-26-32M364 140l26-32" />
      </g>

      <g {...p('robe')}>
        <path d="M148 420C130 370 186 330 246 348C268 336 280 332 292 332C304 332 316 336 338 348C398 330 454 370 436 420C470 480 478 560 468 655H116C106 560 114 480 148 420Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M178 392C158 348 206 318 256 332C272 340 312 340 328 332C378 318 426 348 406 392C378 372 292 360 178 392Z" />
        <path d="M160 408C118 468 108 548 118 655H230C216 548 218 470 242 430C214 416 176 408 160 408Z" />
        <path d="M424 408C466 468 476 548 466 655H354C368 548 366 470 342 430C370 416 408 408 424 408Z" />
      </g>
      <g {...p('accent')}>
        <path d="M268 368h48v12h-48z" />
        <path d="M292 380v80" />
        <path d="M232 548C252 536 332 536 352 548L360 570H224z" />
      </g>

      <g {...p('hair')}>
        <path d="M218 232C206 172 246 150 292 150C338 150 378 172 366 232v38H218z" />
        <path d="M226 200c10-14 24-6 22 8M292 172c8-14 22-8 24 4M358 200c-10-14-24-6-22 8" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="292" cy="264" rx="62" ry="74" />
        <path d="M254 332l-6 32h88l-6-32z" />
      </g>

      <g {...p('symbol')}>
        <path d="M150 430v180" />
        <path d="M126 458h48" />
        <path d="M142 430h16v14h-16z" />
        <path d="M470 430v168" />
        <path d="M448 456c16-8 42-6 50 10-20 26-38 66-26 108" />
        <path d="M484 498c-8 20 2 44 10 58" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="156" cy="500" rx="16" ry="14" />
        <ellipse cx="140" cy="486" rx="6" ry="16" transform="rotate(-24 140 486)" />
        <ellipse cx="152" cy="472" rx="6" ry="16" />
        <ellipse cx="164" cy="474" rx="6" ry="15" />
        <ellipse cx="174" cy="484" rx="5" ry="13" transform="rotate(14 174 484)" />
        <ellipse cx="468" cy="548" rx="16" ry="14" />
        <ellipse cx="486" cy="534" rx="6" ry="16" transform="rotate(20 486 534)" />
        <ellipse cx="474" cy="520" rx="6" ry="16" />
        <ellipse cx="462" cy="522" rx="6" ry="15" />
        <ellipse cx="452" cy="532" rx="5" ry="13" transform="rotate(-14 452 532)" />
      </g>

      <g {...detail}>
        <path d="M234 238c12-8 32-8 42 2" />
        <path d="M308 240c12-8 32-8 42 2" />
        <path d="M238 262c14-16 38-16 52 0-12 10-36 10-52 0z" />
        <path d="M296 262c14-16 38-16 52 0-12 10-36 10-52 0z" />
        <path d="M282 276v18l-9 5" />
        <path d="M270 312c10 8 22 8 34 0" />
        <path d="M226 220c6 14 4 32 0 48M358 220c-6 14-4 32 0 48" />
        <path d="M200 438v202M292 426v214M384 438v202" />
        <path d="M128 470c18 30 16 88 8 156M456 470c-18 30-16 88-8 156" />
      </g>
      <g {...ink}>
        <ellipse cx="264" cy="262" rx="6.5" ry="7.5" />
        <ellipse cx="320" cy="262" rx="6.5" ry="7.5" />
        <circle cx="266" cy="259" r="2" fill={PAPER} />
        <circle cx="322" cy="259" r="2" fill={PAPER} />
      </g>
    </>
  );
}
