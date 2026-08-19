import { PAPER, STROKE, ink, type PortraitProps } from './types';

function rose(cx: number, cy: number, r: number) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} />
      <circle cx={cx - r * 0.32} cy={cy - r * 0.18} r={r * 0.52} />
      <circle cx={cx + r * 0.28} cy={cy - r * 0.12} r={r * 0.42} />
      <circle cx={cx} cy={cy + r * 0.12} r={r * 0.26} />
    </g>
  );
}

function bee(cx: number, cy: number) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx="10" ry="7" />
      <ellipse cx={cx - 8} cy={cy - 8} rx="8" ry="5" />
      <ellipse cx={cx + 4} cy={cy - 10} rx="7" ry="5" />
      <path d={`M${cx - 4} ${cy - 2}h8M${cx - 4} ${cy + 2}h8`} />
    </g>
  );
}

export default function RitaOfCascia({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M38 188c6-32 44-44 70-18 16-28 60-24 74 8 26-14 54 12 42 38 22 8 14 38-12 40-8 22-48 22-60-2-18 20-52 10-62-14-22 10-56-8-52-52z"
      />
      <path
        {...p('cloud')}
        d="M452 80c8-22 42-28 58-8 12-20 48-16 58 10 20-8 38 16 26 32 14 8 6 28-12 30-6 16-36 14-46-2-12 14-40 8-48-10-16 8-40-8-36-52z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="244" r="126" />
      </g>
      <g {...detail}>
        <path d="M320 112v-32M216 154l-34-28M424 154l34-28M188 244h-40M452 244h40M242 132l-28-36M398 132l28-36" />
      </g>

      <g {...p('symbol')}>
        {bee(86, 430)}
        {bee(128, 468)}
        {bee(70, 500)}
        {bee(544, 422)}
        {bee(512, 462)}
        {bee(572, 496)}
        {rose(96, 590, 16)}
        {rose(544, 582, 16)}
        <path d="M96 606v40M544 598v48" />
        <path d="M72 560c8-18 28-16 34 4M568 552c-8-18-28-16-34 4" />
      </g>

      <g {...p('mantle')}>
        <path d="M196 362C168 236 224 148 320 140C416 148 472 236 444 362C400 384 240 384 196 362Z" />
        <path d="M196 362C148 424 134 528 146 655H250C234 540 228 450 250 408C222 388 204 370 196 362Z" />
        <path d="M444 362C492 424 506 528 494 655H390C406 540 412 450 390 408C418 388 436 370 444 362Z" />
      </g>

      <g {...p('robe')}>
        <path d="M226 370C206 252 250 174 320 168C390 174 434 252 414 370C374 392 266 392 226 370Z" />
        <path d="M250 430C274 404 294 394 320 394C346 394 366 404 390 430L412 655H228Z" />
      </g>

      <g {...p('accent')}>
        <path d="M266 226C256 246 254 278 260 316C278 310 298 306 320 306C342 306 362 310 380 316C386 278 384 246 374 226C358 208 282 208 266 226Z" />
        <path d="M272 316C290 336 350 336 368 316C354 350 286 350 272 316Z" />
        <path d="M244 552h152l8 22H236z" />
      </g>

      <g {...p('hair')}>
        <path d="M248 250C236 210 268 188 320 186C372 188 404 210 392 250C376 232 344 224 320 224C296 224 264 232 248 250Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="268" rx="68" ry="80" />
        <path d="M280 342l-8 34h96l-8-34z" />
      </g>

      <g {...p('symbol')}>
        {rose(320, 196, 10)}
        <path d="M402 430v168" />
        <path d="M374 456h56" />
        <path d="M394 430h16v12h-16z" />
        <path d="M408 492c-8 16 4 34 12 46 6-14 16-28 8-46 4 8 2 20-8 26" />
        <path d="M228 500c-12-28-4-52 14-58 10 18 4 40-6 52" />
        <path d="M236 448c8-6 18-4 22 6" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="308" cy="522" rx="12" ry="32" transform="rotate(-8 308 522)" />
        <ellipse cx="322" cy="516" rx="11" ry="34" />
        <ellipse cx="336" cy="518" rx="11" ry="32" transform="rotate(6 336 518)" />
        <ellipse cx="350" cy="530" rx="10" ry="28" transform="rotate(14 350 530)" />
        <ellipse cx="386" cy="548" rx="16" ry="14" />
        <ellipse cx="400" cy="534" rx="7" ry="16" transform="rotate(18 400 534)" />
        <ellipse cx="378" cy="530" rx="6" ry="16" />
        <ellipse cx="368" cy="536" rx="6" ry="14" />
      </g>

      <g {...detail}>
        <path d="M256 242c16-12 36-12 48 2" />
        <path d="M336 244c16-12 36-12 48 2" />
        <path d="M260 266c16-16 40-16 54 0-14 12-38 12-54 0z" />
        <path d="M326 266c16-16 40-16 54 0-14 12-38 12-54 0z" />
        <path d="M312 280v20l-10 6" />
        <path d="M298 318c14 10 28 10 42 0" />
        <path d="M258 228c8 16 6 38 2 56M382 228c-8 16-6 38-2 56" />
        <path d="M266 430v210M320 418v222M374 430v210" />
        <path d="M168 470c20 34 22 90 12 160M472 470c-20 34-22 90-12 160" />
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
