import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function spark(cx: number, cy: number, r: number) {
  return `${cx},${cy - r} ${cx + r * 0.22},${cy - r * 0.22} ${cx + r},${cy} ${cx + r * 0.22},${cy + r * 0.22} ${cx},${cy + r} ${cx - r * 0.22},${cy + r * 0.22} ${cx - r},${cy} ${cx - r * 0.22},${cy - r * 0.22}`;
}

function fish(cx: number, cy: number, flip = false) {
  const s = flip ? -1 : 1;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s} 1)`}>
      <ellipse cx="0" cy="0" rx="28" ry="14" />
      <path d="M26 0l18-12v24z" />
      <path d="M-4 -12C-2 -22 10 -18 8 -4" />
      <path d="M-4 12C-2 22 10 18 8 4" />
      <circle cx="12" cy="-3" r="2.4" fill={STROKE} />
    </g>
  );
}

export default function Andrew({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M36 176c6-32 44-44 70-16 16-28 60-24 72 8 26-14 54 12 42 36 22 8 14 38-12 40-8 22-48 22-60 0-16 18-50 10-60-12-22 10-56-8-52-56z"
      />
      <path
        {...paperShape}
        d="M454 78c8-20 42-26 58-6 12-18 48-16 56 8 20-8 38 16 26 30 14 8 8 28-12 30-6 16-36 16-46 0-12 14-40 8-48-10-16 8-40-8-34-52z"
      />

      <path {...paperShape} d="M8 655C60 600 140 592 210 630C150 642 70 652 8 655Z" />
      <path {...paperShape} d="M8 638C80 608 160 612 220 640C140 648 60 650 8 638Z" />
      <path {...paperShape} d="M20 622C70 600 130 604 176 628C110 632 50 632 20 622Z" />
      <g {...p('symbol')}>
        <path d="M86 618l10-28 8 4-6 24z" />
        <path d="M80 596h32l-8-14H88z" />
        <path d="M90 582h6v14h-6zM104 582h6v14h-6z" />
      </g>

      <g {...p('symbol')}>
        <path d="M72 92L168 48L588 612L492 656Z" />
        <path d="M568 92L472 48L52 612L148 656Z" />
      </g>

      <g {...p('halo')}>
        <circle cx="320" cy="232" r="118" />
      </g>
      <g {...detail}>
        <path d="M320 108v-28M218 148l-34-24M422 148l34-24M196 232h-38M444 232h38M242 124l-28-32M398 124l28-32" />
      </g>
      <g {...p('halo')}>
        <polygon points={spark(176, 108, 8)} />
        <polygon points={spark(464, 102, 8)} />
        <polygon points={spark(228, 76, 7)} />
        <polygon points={spark(412, 72, 7)} />
      </g>

      <g {...p('robe')}>
        <path d="M232 408C256 372 286 356 320 356C354 356 384 372 408 408L428 655H212Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M204 392C184 344 228 316 278 332C304 342 336 342 362 332C412 316 456 344 436 392C408 370 320 362 204 392Z" />
        <path d="M198 400C150 452 132 540 144 655H256C240 540 236 456 258 420C232 408 210 400 198 400Z" />
        <path d="M442 400C490 452 508 540 496 655H384C400 540 404 456 382 420C408 408 430 400 442 400Z" />
      </g>

      <g {...p('accent')}>
        <path d="M292 356C300 368 340 368 348 356L354 372C342 386 298 386 286 372Z" />
        <path d="M96 470C88 448 108 430 132 438L248 520C256 538 244 552 226 546Z" />
        <path d="M108 452h18M122 470h22M138 488h26M154 506h24" />
        <path d="M118 444l8 12M136 462l10 14M154 480l10 14" />
        <path d="M112 460l14-6M130 478l16-6M148 496l16-6" />
      </g>

      <g {...p('hair')}>
        <path d="M232 228C216 168 258 138 320 136C382 138 424 168 408 228v48H232z" />
        <path d="M240 196c14-22 32-8 30 10M320 162c10-22 30-14 32 6M400 196c-14-22-32-8-30 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="250" rx="72" ry="86" />
        <path d="M276 328l-10 40h88l-10-40z" />
      </g>

      <g {...p('hair')}>
        <path d="M248 304C238 356 260 412 320 428C380 412 402 356 392 304C366 336 338 350 320 350C302 350 274 336 248 304Z" />
        <path d="M284 300C298 316 342 316 356 300C342 310 298 310 284 300Z" />
      </g>

      <g {...p('symbol')}>
        {fish(96, 560)}
        {fish(168, 588, true)}
        {fish(544, 548, true)}
      </g>

      <g {...p('skin')}>
        <ellipse cx="214" cy="500" rx="18" ry="16" />
        <ellipse cx="198" cy="486" rx="7" ry="16" transform="rotate(-30 198 486)" />
        <ellipse cx="210" cy="472" rx="6" ry="16" />
        <ellipse cx="222" cy="474" rx="6" ry="15" />
        <ellipse cx="232" cy="484" rx="6" ry="14" transform="rotate(16 232 484)" />
        <ellipse cx="430" cy="488" rx="18" ry="16" />
        <ellipse cx="448" cy="474" rx="7" ry="16" transform="rotate(24 448 474)" />
        <ellipse cx="436" cy="460" rx="6" ry="16" />
        <ellipse cx="424" cy="462" rx="6" ry="15" />
        <ellipse cx="414" cy="472" rx="6" ry="14" transform="rotate(-16 414 472)" />
      </g>

      <g {...detail}>
        <path d="M252 224c16-12 38-12 50 2" />
        <path d="M338 226c16-12 38-12 50 2" />
        <path d="M256 248c18-20 44-20 60 0-16 13-42 13-60 0z" />
        <path d="M324 248c18-20 44-20 60 0-16 13-42 13-60 0z" />
        <path d="M312 262v22l-11 6" />
        <path d="M298 304c14 11 28 11 42 0" />
        <path d="M240 210c10 18 8 42 2 60M400 210c-10 18-8 42-2 60" />
        <path d="M248 424v216M320 412v228M392 424v216" />
        <path d="M168 470c18 32 16 86 10 160M472 470c-18 32-16 86-10 160" />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy="248" rx="7.5" ry="8.5" />
        <ellipse cx="354" cy="248" rx="7.5" ry="8.5" />
        <circle cx="289" cy="245" r="2.2" fill={PAPER} />
        <circle cx="357" cy="245" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
