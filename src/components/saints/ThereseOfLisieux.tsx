import { PAPER, STROKE, ink, type PortraitProps } from './types';

function rose(cx: number, cy: number, r: number) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} />
      <circle cx={cx - r * 0.35} cy={cy - r * 0.2} r={r * 0.55} />
      <circle cx={cx + r * 0.3} cy={cy - r * 0.15} r={r * 0.45} />
      <circle cx={cx} cy={cy + r * 0.15} r={r * 0.28} />
    </g>
  );
}

export default function ThereseOfLisieux({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M48 190c4-32 42-46 68-22 16-30 62-28 76 6 28-14 56 10 46 36 22 8 16 40-12 42-8 24-50 24-62 0-18 20-54 12-64-12-22 10-56-8-52-50z"
      />
      <path
        {...p('cloud')}
        d="M438 88c8-22 42-28 58-8 12-20 48-18 58 8 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 18-48 0-12 16-42 10-50-10-16 8-42-8-34-54z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="248" r="126" />
      </g>
      <g {...detail}>
        <path d="M320 116v-36M214 156l-36-30M426 156l36-30M188 248h-42M452 248h42M238 134l-30-38M402 134l30-38" />
      </g>

      <g {...p('symbol')}>
        {rose(86, 430, 22)}
        {rose(118, 468, 18)}
        {rose(62, 478, 16)}
        {rose(554, 424, 22)}
        {rose(522, 464, 18)}
        {rose(578, 476, 16)}
        <path d="M86 452v80M118 486v50M554 446v80M522 482v50" />
        {rose(210, 128, 10)}
        {rose(430, 118, 9)}
        {rose(160, 210, 8)}
        {rose(490, 198, 8)}
      </g>

      <g {...p('mantle')}>
        <path d="M198 360C170 230 224 142 320 134C416 142 470 230 442 360C400 382 240 382 198 360Z" />
        <path d="M198 360C150 422 136 528 148 655H252C236 540 230 450 252 408C224 388 206 370 198 360Z" />
        <path d="M442 360C490 422 504 528 492 655H388C404 540 410 450 388 408C416 388 434 370 442 360Z" />
      </g>

      <g {...p('robe')}>
        <path d="M228 368C208 250 252 172 320 166C388 172 432 250 412 368C372 390 268 390 228 368Z" />
        <path d="M252 428C276 402 296 392 320 392C344 392 364 402 388 428L410 655H230Z" />
      </g>

      <g {...p('accent')}>
        <path d="M268 228C258 248 256 280 262 318C280 312 300 308 320 308C340 308 360 312 378 318C384 280 382 248 372 228C356 210 284 210 268 228Z" />
        <path d="M274 318C292 338 348 338 366 318C352 352 288 352 274 318Z" />
        <path d="M286 328h68M288 344h64" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="268" rx="70" ry="82" />
        <path d="M278 342l-8 36h100l-8-36z" />
      </g>

      <g {...p('symbol')}>
        <path d="M402 430v168" />
        <path d="M372 458h60" />
        <path d="M394 430h16v12h-16z" />
        <path d="M408 490c-8 18 4 36 12 48 6-16 16-30 8-48 4 8 2 22-8 28" />
        {rose(248, 500, 26)}
        {rose(292, 528, 22)}
        {rose(228, 540, 18)}
        {rose(270, 560, 16)}
        {rose(310, 548, 14)}
        <path d="M248 526c-16 8-28 28-22 48M292 550c8 14 4 34-8 44" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="304" cy="528" rx="12" ry="34" transform="rotate(-8 304 528)" />
        <ellipse cx="318" cy="522" rx="11" ry="36" />
        <ellipse cx="332" cy="524" rx="11" ry="34" transform="rotate(6 332 524)" />
        <ellipse cx="346" cy="536" rx="10" ry="30" transform="rotate(14 346 536)" />
        <ellipse cx="378" cy="548" rx="16" ry="14" />
        <ellipse cx="392" cy="534" rx="7" ry="16" transform="rotate(18 392 534)" />
        <ellipse cx="370" cy="530" rx="6" ry="16" />
        <ellipse cx="360" cy="536" rx="6" ry="14" />
      </g>

      <g {...detail}>
        <path d="M256 242c16-12 38-12 50 2" />
        <path d="M334 244c16-12 38-12 50 2" />
        <path d="M260 266c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M324 266c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M312 280v20l-10 6" />
        <path d="M298 318c14 10 28 10 42 0" />
        <path d="M258 228c8 18 6 40 2 58M382 228c-8 18-6 40-2 58" />
        <path d="M268 430v210M320 418v222M372 430v210" />
        <path d="M168 470c22 36 24 90 14 160M472 470c-22 36-24 90-14 160" />
      </g>
      <g {...ink}>
        <ellipse cx="288" cy="266" rx="7" ry="8" />
        <ellipse cx="352" cy="266" rx="7" ry="8" />
        <circle cx="291" cy="263" r="2.1" fill={PAPER} />
        <circle cx="355" cy="263" r="2.1" fill={PAPER} />
        <text x="402" y="440" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={STROKE}>
          INRI
        </text>
      </g>
    </>
  );
}
