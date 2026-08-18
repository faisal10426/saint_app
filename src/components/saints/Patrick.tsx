import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function shamrock(cx: number, cy: number, s: number) {
  return (
    <g>
      <ellipse cx={cx} cy={cy - s * 0.85} rx={s * 0.72} ry={s * 0.78} />
      <ellipse cx={cx - s * 0.78} cy={cy + s * 0.22} rx={s * 0.72} ry={s * 0.78} transform={`rotate(-52 ${cx - s * 0.78} ${cy + s * 0.22})`} />
      <ellipse cx={cx + s * 0.78} cy={cy + s * 0.22} rx={s * 0.72} ry={s * 0.78} transform={`rotate(52 ${cx + s * 0.78} ${cy + s * 0.22})`} />
      <circle cx={cx} cy={cy} r={s * 0.28} />
    </g>
  );
}

export default function Patrick({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M42 168c8-32 46-44 72-16 16-28 62-24 74 8 26-14 54 12 42 36 22 8 14 38-12 40-8 22-48 22-60-2-18 18-52 10-62-12-22 10-56-8-54-54z"
      />
      <path
        {...paperShape}
        d="M452 78c8-22 44-28 60-6 12-20 50-16 58 10 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 16-48-2-12 16-42 8-50-10-16 8-42-8-36-56z"
      />

      <path {...paperShape} d="M8 655C48 520 148 478 248 560C180 590 86 628 8 655Z" />
      <path {...paperShape} d="M632 655C572 508 448 468 368 558C452 598 548 638 632 655Z" />
      <path {...paperShape} d="M180 655C230 575 330 568 400 640C340 648 250 652 180 655Z" />
      <path {...paperShape} d="M40 655C90 610 150 618 190 650C120 654 70 656 40 655Z" />
      <path {...paperShape} d="M600 655C548 600 480 610 440 648C510 654 570 656 600 655Z" />

      <g {...p('halo')}>
        <circle cx="320" cy="252" r="118" />
      </g>
      <g {...detail}>
        <path d="M320 128v-30M218 168l-34-26M422 168l34-26M196 252h-40M444 252h40M244 148l-28-34M396 148l28-34" />
      </g>

      <g {...p('symbol')}>
        {shamrock(86, 430, 22)}
        {shamrock(554, 418, 20)}
        {shamrock(70, 590, 16)}
        {shamrock(570, 578, 16)}
        <path d="M86 452v70M554 438v70" />
        <path d="M508 220v390" />
        <path d="M508 208c-24-42-64-38-70 8 20 46 54 40 70-8z" />
        <circle cx="472" cy="202" r="9" />
      </g>

      <g {...p('robe')}>
        <path d="M234 408C262 372 290 356 320 356C350 356 378 372 406 408L428 655H212Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M208 392C188 340 232 310 280 326C306 336 334 336 360 326C408 310 452 340 432 392C406 370 320 362 208 392Z" />
        <path d="M200 398C152 450 136 540 148 655H258C242 540 238 458 258 420C234 406 212 398 200 398Z" />
        <path d="M440 398C488 450 504 540 492 655H382C398 540 402 458 382 420C406 406 428 398 440 398Z" />
      </g>
      <g {...p('accent')}>
        <path d="M306 362h28v16h-28z" />
        <path d="M232 538C254 526 386 526 408 538L416 562H224z" />
        <circle cx="320" cy="500" r="22" />
        <path d="M320 486v28M306 500h28" />
      </g>

      <g {...p('hair')}>
        <path d="M234 236C222 176 266 148 320 148C374 148 418 176 406 236v48H234z" />
        <path d="M246 204c14-20 32-8 30 10M320 172c10-20 30-14 32 6M394 204c-14-20-32-8-30 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="268" rx="72" ry="84" />
        <path d="M276 344l-8 38h104l-8-38z" />
      </g>

      <g {...p('hair')}>
        <path d="M250 314C242 360 262 410 320 422C378 410 398 360 390 314C366 342 342 354 320 354C298 354 274 342 250 314Z" />
        <path d="M286 310C298 324 342 324 354 310C342 320 298 320 286 310Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M268 58l52-48 52 48v96H268z" />
        <path d="M282 78h76v14H282z" />
        <path d="M294 108h52v12H294z" />
        <path d="M314 48h12v28h-12z" />
        {shamrock(168, 508, 28)}
        <path d="M168 538v48" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="168" cy="548" rx="18" ry="16" />
        <ellipse cx="150" cy="532" rx="7" ry="16" transform="rotate(-30 150 532)" />
        <ellipse cx="162" cy="518" rx="6" ry="18" />
        <ellipse cx="174" cy="520" rx="6" ry="16" />
        <ellipse cx="186" cy="530" rx="6" ry="14" transform="rotate(16 186 530)" />
        <ellipse cx="492" cy="478" rx="18" ry="16" />
        <ellipse cx="510" cy="462" rx="7" ry="16" transform="rotate(26 510 462)" />
        <ellipse cx="498" cy="448" rx="6" ry="18" />
        <ellipse cx="486" cy="450" rx="6" ry="16" />
        <ellipse cx="474" cy="460" rx="6" ry="14" transform="rotate(-16 474 460)" />
      </g>

      <g {...detail}>
        <path d="M252 242c16-12 38-12 50 2" />
        <path d="M338 244c16-12 38-12 50 2" />
        <path d="M256 266c18-20 44-20 60 0-16 13-42 13-60 0z" />
        <path d="M324 266c18-20 44-20 60 0-16 13-42 13-60 0z" />
        <path d="M312 280v20l-10 6" />
        <path d="M298 320c14 10 28 10 42 0" />
        <path d="M242 226c10 18 8 40 2 58M398 226c-10 18-8 40-2 58" />
        <path d="M248 430v210M320 418v222M392 430v210" />
        <path d="M168 470c18 36 16 90 8 160M472 470c-18 36-16 90-8 160" />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy="266" rx="7.5" ry="8.5" />
        <ellipse cx="354" cy="266" rx="7.5" ry="8.5" />
        <circle cx="289" cy="263" r="2.2" fill={PAPER} />
        <circle cx="357" cy="263" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
