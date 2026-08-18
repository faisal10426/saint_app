import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function CatherineOfAlexandria({ p, detail }: PortraitProps) {
  const spikes = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    const x1 = 110 + Math.cos(a) * 48;
    const y1 = 520 + Math.sin(a) * 48;
    const x2 = 110 + Math.cos(a) * 68;
    const y2 = 520 + Math.sin(a) * 68;
    return `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }).join('');

  return (
    <>
      <path
        {...paperShape}
        d="M40 176c8-30 46-40 70-14 16-28 60-22 72 8 26-12 52 14 40 38 20 8 12 36-12 38-8 22-48 20-58-2-16 18-52 8-62-14-22 8-56-8-50-54z"
      />
      <path
        {...paperShape}
        d="M458 88c8-20 42-24 56-4 12-18 46-14 54 10 20-6 36 18 24 32 12 6 6 28-12 28-6 16-36 16-46-2-12 14-40 6-48-12-14 6-40-8-32-52z"
      />

      <g {...p('halo')}>
        <circle cx="332" cy="248" r="118" />
      </g>
      <g {...detail}>
        <path d="M332 124v-26M234 164l-34-26M430 164l34-26M208 248h-38M456 248h38M256 140l-28-34M408 140l28-34" />
      </g>

      <g {...p('accent')}>
        <path d="M280 128C264 96 296 72 332 80C368 72 400 96 384 128C364 110 300 110 280 128Z" />
        <path d="M300 128h64v12H300z" />
        <path d="M308 140l-8 16h72l-8-16z" />
      </g>

      <g {...p('robe')}>
        <path d="M218 412C246 370 288 352 332 352C376 352 418 370 446 412L468 655H196Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M196 388C168 320 230 280 292 300C312 312 352 312 372 300C434 280 496 320 468 388C436 360 332 348 196 388Z" />
        <path d="M186 400C126 468 112 548 126 655H276C256 548 254 460 280 422C248 404 206 396 186 400Z" />
        <path d="M478 400C538 468 552 548 538 655H388C408 548 410 460 384 422C416 404 458 396 478 400Z" />
      </g>
      <g {...p('accent')}>
        <path d="M316 372h32v12h-32z" />
        <path d="M248 548C268 536 396 536 416 548L424 570H240z" />
      </g>

      <g {...p('hair')}>
        <path d="M248 236C234 168 280 148 332 148C384 148 430 168 416 236C404 216 370 206 332 206C294 206 260 216 248 236Z" />
        <path d="M242 250C228 330 236 410 250 490C268 470 274 400 272 350C278 410 286 470 304 500C292 420 286 350 292 290z" />
        <path d="M422 250C436 330 428 410 414 490C396 470 390 400 392 350C386 410 378 470 360 500C372 420 378 350 372 290z" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="332" cy="268" rx="66" ry="78" />
        <path d="M290 340l-8 34h96l-8-34z" />
      </g>

      <g {...p('symbol')}>
        <circle cx="110" cy="520" r="48" fill="none" stroke={STROKE} strokeWidth="6" />
        <circle cx="110" cy="520" r="28" />
        <path d={spikes} fill="none" stroke={STROKE} strokeWidth="6" strokeLinecap="round" />
        <path d="M500 220v210" />
        <path d="M492 220l16 40-16 8z" />
        <path d="M492 430h16v18h-16z" />
        <path d="M430 480h70v86H430z" />
        <path d="M442 498h46M442 518h46M442 538h46" />
        <path d="M520 430v168" />
        <path d="M498 456c16-8 42-6 50 10-20 26-38 66-26 108" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="196" cy="500" rx="16" ry="14" />
        <ellipse cx="180" cy="486" rx="6" ry="16" transform="rotate(-24 180 486)" />
        <ellipse cx="192" cy="472" rx="6" ry="16" />
        <ellipse cx="204" cy="474" rx="6" ry="15" />
        <ellipse cx="214" cy="484" rx="5" ry="13" transform="rotate(14 214 484)" />
        <ellipse cx="448" cy="548" rx="16" ry="14" />
        <ellipse cx="466" cy="534" rx="6" ry="16" transform="rotate(20 466 534)" />
        <ellipse cx="454" cy="520" rx="6" ry="16" />
        <ellipse cx="442" cy="522" rx="6" ry="15" />
        <ellipse cx="432" cy="532" rx="5" ry="13" transform="rotate(-14 432 532)" />
      </g>

      <g {...detail}>
        <path d="M272 242c14-10 34-10 46 2" />
        <path d="M346 244c14-10 34-10 46 2" />
        <path d="M276 266c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M334 266c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M320 280v20l-10 5" />
        <path d="M306 318c12 10 26 10 40 0" />
        <path d="M274 228c8 16 6 38 0 54M390 228c-8 16-6 38 0 54" />
        <path d="M248 430v210M332 418v222M416 430v210" />
        <path d="M176 470c16 30 14 88 6 156M488 470c-16 30-14 88-6 156" />
      </g>
      <g {...ink}>
        <ellipse cx="302" cy="266" rx="7" ry="8" />
        <ellipse cx="362" cy="266" rx="7" ry="8" />
        <circle cx="305" cy="263" r="2.1" fill={PAPER} />
        <circle cx="365" cy="263" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
