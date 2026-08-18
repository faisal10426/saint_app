import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

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

function cactus(cx: number, cy: number, s: number) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={18 * s} ry={28 * s} />
      <ellipse cx={cx - 22 * s} cy={cy - 8 * s} rx={14 * s} ry={20 * s} transform={`rotate(-28 ${cx - 22 * s} ${cy - 8 * s})`} />
      <ellipse cx={cx + 22 * s} cy={cy - 4 * s} rx={13 * s} ry={18 * s} transform={`rotate(24 ${cx + 22 * s} ${cy - 4 * s})`} />
      <circle cx={cx - 8 * s} cy={cy - 22 * s} r={4 * s} />
      <circle cx={cx + 10 * s} cy={cy - 18 * s} r={4 * s} />
      <circle cx={cx} cy={cy + 8 * s} r={3.5 * s} />
    </g>
  );
}

export default function JuanDiego({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M28 180c10-34 50-46 76-16 16-28 64-22 74 12 26-14 54 14 42 40 22 6 14 38-12 40-8 24-50 20-60-4-16 20-54 8-64-16-22 10-62-10-56-56z"
      />
      <path
        {...paperShape}
        d="M460 76c10-22 46-26 60-4 12-18 50-14 58 12 22-8 40 18 26 34 14 6 6 30-14 30-6 16-38 14-46-2-12 16-42 6-50-12-16 8-42-10-34-58z"
      />
      <path {...paperShape} d="M8 655C48 560 110 520 168 568C130 608 62 640 8 655Z" />
      <path {...paperShape} d="M632 655C578 548 500 518 430 574C478 618 560 644 632 655Z" />
      <path {...paperShape} d="M8 655C70 610 140 618 190 655H8z" />
      <path {...paperShape} d="M632 655C570 608 500 616 450 655H632z" />

      <g {...p('symbol')}>
        {cactus(58, 590, 1.15)}
        {cactus(118, 630, 0.75)}
        {cactus(572, 586, 1.1)}
        {cactus(522, 628, 0.7)}
      </g>

      <g {...p('halo')}>
        <circle cx="314" cy="228" r="120" />
      </g>
      <g {...detail}>
        <path d="M314 102v-32M210 144l-36-28M418 144l36-28M186 228h-42M442 228h42M234 122l-30-36M394 122l30-36" />
      </g>

      <g {...p('robe')}>
        <path d="M236 400C258 368 284 352 314 352C344 352 370 368 392 400L412 560H216Z" />
      </g>

      <g {...p('accent')}>
        <path d="M268 368h12v8h-12z" />
        <path d="M292 368h12v8h-12z" />
        <path d="M316 368h12v8h-12z" />
        <path d="M340 368h12v8h-12z" />
      </g>

      <g {...p('mantle')}>
        <path d="M188 390C168 350 214 322 266 340C292 350 336 350 362 340C414 322 460 350 440 390C414 368 314 358 188 390Z" />
        <ellipse cx="214" cy="368" rx="22" ry="16" />
        <path d="M196 404C140 470 148 560 176 640C220 600 250 540 262 470C236 444 210 420 196 404Z" />
        <path d="M432 404C488 470 480 560 452 640C408 600 378 540 366 470C392 444 418 420 432 404Z" />
        <path d="M196 404C240 500 388 500 432 404C400 548 228 548 196 404Z" />
      </g>

      <g {...p('hair')}>
        <path d="M236 210C220 154 266 126 314 124C362 126 408 154 392 210v52H236z" />
        <path d="M244 176c14-20 30-8 28 10M314 148c10-18 28-12 30 6M384 176c-14-20-30-8-28 10" />
        <path d="M238 246C230 278 236 310 248 334C240 298 238 266 248 242C242 236 238 238 238 246Z" />
        <path d="M390 246C398 278 392 310 380 334C388 298 390 266 380 242C386 236 390 238 390 246Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="314" cy="248" rx="70" ry="84" />
        <path d="M270 326l-8 38h104l-8-38z" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="314" cy="468" rx="52" ry="68" />
        <path d="M290 500C280 470 292 438 314 430C336 438 348 470 338 500C328 518 300 518 290 500Z" />
        <path d="M298 452C292 438 300 422 314 420C328 422 336 438 330 452C322 444 306 444 298 452Z" />
        <path d="M304 478C310 488 318 488 324 478" />
        {rose(250, 530, 18)}
        {rose(292, 552, 20)}
        {rose(336, 548, 18)}
        {rose(376, 528, 16)}
        {rose(270, 572, 14)}
        {rose(318, 578, 15)}
        {rose(358, 562, 13)}
      </g>
      <g {...p('accent')}>
        <polygon points="292,446 294,452 300,454 294,456 292,462 290,456 284,454 290,452" />
        <polygon points="336,446 338,452 344,454 338,456 336,462 334,456 328,454 334,452" />
        <polygon points="314,432 316,438 322,440 316,442 314,448 312,442 306,440 312,438" />
        <polygon points="278,468 280,474 286,476 280,478 278,484 276,478 270,476 276,474" />
        <polygon points="350,468 352,474 358,476 352,478 350,484 348,478 342,476 348,474" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="178" cy="618" rx="18" ry="16" />
        <ellipse cx="160" cy="606" rx="7" ry="16" transform="rotate(-24 160 606)" />
        <ellipse cx="174" cy="592" rx="6" ry="17" />
        <ellipse cx="188" cy="594" rx="6" ry="16" />
        <ellipse cx="200" cy="604" rx="6" ry="14" transform="rotate(16 200 604)" />
        <ellipse cx="450" cy="618" rx="18" ry="16" />
        <ellipse cx="468" cy="606" rx="7" ry="16" transform="rotate(24 468 606)" />
        <ellipse cx="454" cy="592" rx="6" ry="17" />
        <ellipse cx="440" cy="594" rx="6" ry="16" />
        <ellipse cx="428" cy="604" rx="6" ry="14" transform="rotate(-16 428 604)" />
      </g>

      <g {...detail}>
        <path d="M248 222c16-12 40-12 52 2" />
        <path d="M328 224c16-12 40-12 52 2" />
        <path d="M252 246c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M314 246c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M306 260v22l-11 6" />
        <path d="M292 302c14 11 30 11 44 0" />
        <path d="M236 208c10 18 8 42 2 62M392 208c-10 18-8 42-2 62" />
        <path d="M220 430v140M314 412v80M408 430v140" />
      </g>
      <g {...ink}>
        <ellipse cx="282" cy="246" rx="7.5" ry="8.5" />
        <ellipse cx="346" cy="246" rx="7.5" ry="8.5" />
        <circle cx="285" cy="243" r="2.2" fill={PAPER} />
        <circle cx="349" cy="243" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
