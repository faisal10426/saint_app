import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function spark(cx: number, cy: number, r: number) {
  return `${cx},${cy - r} ${cx + r * 0.22},${cy - r * 0.22} ${cx + r},${cy} ${cx + r * 0.22},${cy + r * 0.22} ${cx},${cy + r} ${cx - r * 0.22},${cy + r * 0.22} ${cx - r},${cy} ${cx - r * 0.22},${cy - r * 0.22}`;
}

function candle(cx: number, cy: number) {
  return <path d={`M${cx - 7} ${cy}h14v32h-14z`} />;
}

function flame(cx: number, cy: number) {
  return <path d={`M${cx} ${cy}c8 8 6 18 0 22c-6-4-8-14 0-22z`} />;
}

export default function Lucy({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M40 170c8-32 48-44 74-16 16-30 64-26 76 8 28-14 56 12 44 38 22 8 16 40-12 42-8 24-50 22-62-2-18 20-54 10-64-14-22 10-58-8-56-56z"
      />
      <path
        {...paperShape}
        d="M450 76c8-22 44-26 60-4 12-20 50-16 58 10 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 16-48-2-12 16-42 8-50-10-16 8-42-8-36-56z"
      />
      <path
        {...paperShape}
        d="M34 502c6-24 42-30 60-8 14-22 52-16 62 12 20-8 36 16 24 32 12 8 6 28-14 30-6 16-36 14-46-4-12 14-40 6-48-12-16 8-40-6-38-50z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="252" r="132" />
        <polygon points={spark(168, 118, 11)} />
        <polygon points={spark(472, 108, 10)} />
        <polygon points={spark(214, 78, 8)} />
        <polygon points={spark(426, 72, 8)} />
        <polygon points={spark(120, 210, 8)} />
        <polygon points={spark(520, 198, 8)} />
        <polygon points={spark(96, 320, 7)} />
        <polygon points={spark(544, 308, 7)} />
      </g>
      <g {...detail}>
        <path d="M320 114v-36M206 154l-40-32M434 154l40-32M180 252h-46M460 252h46M232 132l-34-40M408 132l34-40" />
      </g>

      <g {...p('mantle')}>
        <path d="M188 360C158 228 216 138 320 128C424 138 482 228 452 360C408 384 232 384 188 360Z" />
        <path d="M188 360C138 420 124 530 138 655H248C232 540 226 450 250 408C220 386 198 368 188 360Z" />
        <path d="M452 360C502 420 516 530 502 655H392C408 540 414 450 390 408C420 386 442 368 452 360Z" />
      </g>

      <g {...p('robe')}>
        <path d="M226 372C208 258 250 176 320 170C390 176 432 258 414 372C376 394 264 394 226 372Z" />
        <path d="M248 428C272 404 294 394 320 394C346 394 368 404 392 428L412 655H228Z" />
        <path d="M260 448h120M268 478h104M276 508h88" />
      </g>

      <g {...p('accent')}>
        <path d="M248 448C268 428 300 418 320 418C340 418 372 428 392 448C368 478 348 530 340 590C332 530 312 478 288 448C268 428 248 448 248 448Z" />
        <path d="M300 418l-18-36 20-6 18 36z" />
        <path d="M232 548C252 538 388 538 408 548L416 572H224z" />
      </g>

      <g {...p('hair')}>
        <path d="M236 248C218 198 250 158 292 168C276 208 250 250 248 292C234 276 228 260 236 248Z" />
        <path d="M404 248C422 198 390 158 348 168C364 208 390 250 392 292C406 276 412 260 404 248Z" />
        <path d="M258 198C270 158 296 146 320 146C344 146 370 158 382 198C364 178 344 170 320 172C296 170 276 178 258 198Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="268" rx="72" ry="84" />
        <path d="M274 344l-8 36h108l-8-36z" />
      </g>

      <g {...p('hair')}>
        <path d="M252 214C268 192 292 182 320 182C348 182 372 192 388 214C370 202 348 196 320 198C292 196 270 202 252 214Z" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="320" cy="168" rx="78" ry="22" />
        {candle(262, 128)}
        {candle(291, 118)}
        {candle(320, 112)}
        {candle(349, 118)}
        {candle(378, 128)}
        <path d="M248 168C258 148 278 148 288 168M352 168C362 148 382 148 392 168" />
      </g>
      <g {...p('accent')}>
        {flame(262, 106)}
        {flame(291, 96)}
        {flame(320, 90)}
        {flame(349, 96)}
        {flame(378, 106)}
      </g>

      <g {...p('symbol')}>
        <path d="M168 430C158 370 138 320 128 288C148 330 168 390 178 448C168 428 168 430 168 430Z" />
        <path d="M178 450C168 390 152 340 142 310" />
        <path d="M188 470C178 410 164 362 156 334" />
        <path d="M158 488C148 430 138 380 134 348" />

        <path d="M428 520C458 500 508 508 518 548C528 528 558 532 552 568C542 608 478 628 438 608C418 598 416 568 428 548Z" />
        <path d="M518 548C538 538 558 552 548 572" />
        <ellipse cx="498" cy="558" rx="22" ry="14" />
        <path d="M548 556l28-8-4 14-28 8z" />
        <circle cx="576" cy="550" r="5" />
      </g>
      <g {...p('accent')}>
        {flame(576, 518)}
        <circle cx="576" cy="538" r="6" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="196" cy="508" rx="16" ry="14" />
        <ellipse cx="178" cy="494" rx="6" ry="18" transform="rotate(-32 178 494)" />
        <ellipse cx="190" cy="478" rx="6" ry="20" />
        <ellipse cx="204" cy="478" rx="6" ry="18" />
        <ellipse cx="216" cy="488" rx="6" ry="16" transform="rotate(16 216 488)" />
        <ellipse cx="226" cy="500" rx="5" ry="14" transform="rotate(30 226 500)" />

        <ellipse cx="432" cy="548" rx="16" ry="14" />
        <ellipse cx="450" cy="534" rx="6" ry="18" transform="rotate(28 450 534)" />
        <ellipse cx="438" cy="518" rx="6" ry="20" />
        <ellipse cx="424" cy="520" rx="6" ry="18" />
        <ellipse cx="412" cy="530" rx="6" ry="16" transform="rotate(-16 412 530)" />
      </g>

      <g {...detail}>
        <path d="M254 242c16-12 40-12 52 2" />
        <path d="M334 244c16-12 40-12 52 2" />
        <path d="M258 266c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M320 266c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M312 280v22l-11 6" />
        <path d="M298 322c14 11 30 11 44 0" />
        <path d="M244 226c10 20 8 44 2 64M396 226c-10 20-8 44-2 64" />
        <path d="M248 430v210M320 418v222M392 430v210" />
        <path d="M168 470c18 36 16 90 8 160M472 470c-18 36-16 90-8 160" />
        <path d="M262 160c8-6 16-4 18 6M358 160c-8-6-16-4-18 6" />
        <path d="M320 144v-20M292 150v-16M348 150v-16" />
      </g>
      <g {...ink}>
        <ellipse cx="288" cy="266" rx="7.5" ry="8.5" />
        <ellipse cx="352" cy="266" rx="7.5" ry="8.5" />
        <circle cx="291" cy="263" r="2.2" fill={PAPER} />
        <circle cx="355" cy="263" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
