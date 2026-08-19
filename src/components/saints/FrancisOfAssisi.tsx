import { PAPER, STROKE, ink, type PortraitProps } from './types';

function spark(cx: number, cy: number, r: number) {
  return `${cx},${cy - r} ${cx + r * 0.22},${cy - r * 0.22} ${cx + r},${cy} ${cx + r * 0.22},${cy + r * 0.22} ${cx},${cy + r} ${cx - r * 0.22},${cy + r * 0.22} ${cx - r},${cy} ${cx - r * 0.22},${cy - r * 0.22}`;
}

function flower(cx: number, cy: number) {
  const petals = Array.from({ length: 5 }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    const x = cx + Math.cos(a) * 12;
    const y = cy + Math.sin(a) * 12;
    return <ellipse key={i} cx={x} cy={y} rx="7" ry="10" transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />;
  });
  return (
    <g>
      {petals}
      <circle cx={cx} cy={cy} r="5" />
    </g>
  );
}

export default function FrancisOfAssisi({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M36 186c6-34 46-48 72-20 18-32 66-26 78 8 30-16 58 12 46 38 24 8 14 42-14 42-8 24-52 22-62-2-18 22-56 10-64-14-24 12-62-8-56-52z"
      />
      <path
        {...p('cloud')}
        d="M448 78c10-24 46-30 62-6 14-22 52-16 60 10 24-8 42 18 28 34 16 8 6 32-14 32-6 18-40 16-48-2-14 16-44 8-52-12-16 8-44-10-36-56z"
      />
      <path
        {...p('cloud')}
        d="M28 498c8-26 44-32 62-8 16-24 54-16 64 12 22-8 38 18 24 34 14 8 4 30-16 30-6 18-38 14-46-4-12 16-42 6-50-12-16 8-42-8-38-52z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="236" r="132" />
      </g>
      <g {...detail}>
        <path d="M320 98v-36M206 148l-42-30M434 148l42-30M178 236h-46M462 236h46M230 126l-34-40M410 126l34-40" />
      </g>
      <g {...p('halo')}>
        <polygon points={spark(168, 126, 10)} />
        <polygon points={spark(472, 118, 9)} />
        <polygon points={spark(214, 86, 8)} />
        <polygon points={spark(426, 82, 8)} />
        <polygon points={spark(132, 210, 7)} />
        <polygon points={spark(508, 198, 7)} />
      </g>

      <path {...p('cloud')} d="M8 655C48 560 128 528 214 586C168 620 78 642 8 655Z" />
      <path {...p('cloud')} d="M632 655C574 548 470 522 392 590C448 628 548 646 632 655Z" />
      <path {...p('cloud')} d="M18 655C70 600 128 608 168 648C110 652 52 656 18 655Z" />
      <path {...p('cloud')} d="M622 655C568 598 500 606 458 648C520 654 580 656 622 655Z" />

      <g {...p('cloud')}>
        {flower(58, 618)}
        {flower(108, 638)}
        {flower(532, 622)}
        {flower(582, 640)}
      </g>
      <g {...detail}>
        <path d="M58 630c-6 18-18 24-28 22M108 650c8 12 22 14 32 8M532 634c-10 16-24 20-34 16M582 652c8 10 20 12 30 6" />
      </g>

      <g {...p('robe')}>
        <path d="M168 428C146 392 186 358 232 368C258 354 292 346 320 346C348 346 382 354 408 368C454 358 494 392 472 428C508 472 518 560 508 655H132C122 560 132 472 168 428Z" />
        <path d="M168 428C132 456 108 500 118 548C148 520 186 478 214 458C192 444 176 432 168 428Z" />
        <path d="M472 428C508 456 532 500 522 548C492 520 454 478 426 458C448 444 464 432 472 428Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M214 392C196 348 236 318 278 336C304 348 336 348 362 336C404 318 444 348 426 392C400 372 320 364 214 392Z" />
        <path d="M198 400C176 438 166 510 172 568H236C228 510 230 446 250 418C228 408 208 400 198 400Z" />
        <path d="M442 400C464 438 474 510 468 568H404C412 510 410 446 390 418C412 408 432 400 442 400Z" />
      </g>

      <g {...p('accent')}>
        <path d="M228 552C248 542 392 542 412 552C418 562 410 572 398 568C360 556 280 556 242 568C230 572 222 562 228 552Z" />
        <path d="M312 560c2 16 0 28 0 42" />
        <circle cx="320" cy="574" r="9" />
        <circle cx="320" cy="598" r="9" />
        <circle cx="320" cy="622" r="9" />
        <path d="M312 632h16l2 18h-20z" />
      </g>

      <g {...p('hair')}>
        <path d="M226 248C208 198 238 158 278 168C264 208 246 250 244 292C230 274 222 258 226 248Z" />
        <path d="M414 248C432 198 402 158 362 168C376 208 394 250 396 292C410 274 418 258 414 248Z" />
        <path d="M248 196C258 150 292 138 320 138C348 138 382 150 392 196C372 176 348 166 320 168C292 166 268 176 248 196Z" />
        <path d="M250 178c14-22 28-8 26 10M300 156c10-20 28-16 30 4M340 156c12-22 30-14 28 6M390 178c-12-22-28-8-26 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="258" rx="74" ry="88" />
        <path d="M274 338l-10 40h92l-10-40z" />
      </g>

      <g {...p('hair')}>
        <path d="M246 308C236 360 258 418 320 434C382 418 404 360 394 308C368 340 338 356 320 356C302 356 272 340 246 308Z" />
        <path d="M282 304C296 320 344 320 358 304C344 314 296 314 282 304Z" />
      </g>

      <g {...p('skin')}>
        <path d="M118 500C108 470 132 448 162 458C150 478 138 498 142 522C128 518 118 510 118 500Z" />
        <ellipse cx="108" cy="492" rx="8" ry="16" transform="rotate(-48 108 492)" />
        <ellipse cx="96" cy="468" rx="7" ry="18" transform="rotate(-8 96 468)" />
        <ellipse cx="110" cy="458" rx="7" ry="20" />
        <ellipse cx="124" cy="462" rx="7" ry="18" transform="rotate(10 124 462)" />
        <ellipse cx="136" cy="472" rx="6" ry="16" transform="rotate(22 136 472)" />

        <path d="M522 500C532 470 508 448 478 458C490 478 502 498 498 522C512 518 522 510 522 500Z" />
        <ellipse cx="532" cy="492" rx="8" ry="16" transform="rotate(48 532 492)" />
        <ellipse cx="544" cy="468" rx="7" ry="18" transform="rotate(8 544 468)" />
        <ellipse cx="530" cy="458" rx="7" ry="20" />
        <ellipse cx="516" cy="462" rx="7" ry="18" transform="rotate(-10 516 462)" />
        <ellipse cx="504" cy="472" rx="6" ry="16" transform="rotate(-22 504 472)" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="448" cy="356" rx="22" ry="13" />
        <ellipse cx="466" cy="348" rx="11" ry="9" />
        <path d="M428 358C412 346 410 366 430 368" />
        <path d="M444 350C436 332 466 328 460 352" />
        <path d="M476 344l12 4-12 4z" />
        <circle cx="470" cy="346" r="2" fill={STROKE} />

        <g transform="translate(128 412) scale(-1 1)">
          <ellipse cx="0" cy="0" rx="20" ry="12" />
          <ellipse cx="16" cy="-8" rx="10" ry="8" />
          <path d="M-16 2C-32 -10-34 8-16 10" />
          <path d="M-2 -2C-10 -22 18 -18 12 0" />
          <path d="M24 -10l12 4-12 4z" />
          <circle cx="18" cy="-10" r="2" fill={STROKE} />
        </g>

        <g transform="translate(198 148)">
          <ellipse cx="0" cy="0" rx="18" ry="11" />
          <ellipse cx="14" cy="-8" rx="9" ry="7" />
          <path d="M-16 0C-28 -14-30 6-14 8" />
          <path d="M0 -4C-6 -22 20 -18 12 0" />
          <path d="M22 -10l10 4-10 4z" />
          <circle cx="16" cy="-10" r="2" fill={STROKE} />
        </g>

        <g transform="translate(508 188) scale(-1 1)">
          <ellipse cx="0" cy="0" rx="18" ry="11" />
          <ellipse cx="14" cy="-8" rx="9" ry="7" />
          <path d="M-16 0C-28 -14-30 6-14 8" />
          <path d="M0 -4C-6 -22 20 -18 12 0" />
          <path d="M22 -10l10 4-10 4z" />
          <circle cx="16" cy="-10" r="2" fill={STROKE} />
        </g>
      </g>

      <g {...detail}>
        <path d="M250 232c16-12 40-12 52 2" />
        <path d="M338 234c16-12 40-12 52 2" />
        <path d="M254 256c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M324 256c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M312 270v22l-11 6" />
        <path d="M298 312c14 11 30 11 44 0" />
        <path d="M236 220c10 18 8 42 0 62M404 220c-10 18-8 42 0 62" />
        <path d="M200 500c16 28 20 78 12 140M440 500c-16 28-20 78-12 140" />
        <path d="M250 600v55M320 588v67M390 600v55" />
        <path d="M240 188c8-16 22-10 20 6M400 188c-8-16-22-10-20 6" />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy="256" rx="7.5" ry="8.5" />
        <ellipse cx="354" cy="256" rx="7.5" ry="8.5" />
        <circle cx="289" cy="253" r="2.2" fill={PAPER} />
        <circle cx="357" cy="253" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
