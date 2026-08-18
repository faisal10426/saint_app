import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function MartinDePorres({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M42 176c8-34 48-46 74-18 16-30 64-26 76 8 28-14 56 12 44 38 22 8 16 40-12 42-8 24-50 22-62-2-18 20-54 10-64-14-22 10-58-8-56-54z"
      />
      <path
        {...paperShape}
        d="M452 82c8-22 44-28 60-6 12-20 50-16 58 10 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 16-48-2-12 16-42 8-50-10-16 8-42-8-36-56z"
      />
      <path
        {...paperShape}
        d="M32 508c6-24 42-30 60-8 14-22 52-16 62 12 20-8 36 16 24 32 12 8 6 28-14 30-6 16-36 14-46-4-12 14-40 6-48-12-16 8-40-6-38-50z"
      />
      <path {...paperShape} d="M8 655C70 590 150 595 210 645C130 650 50 654 8 655Z" />
      <path {...paperShape} d="M632 655C560 580 450 590 380 645C470 650 560 654 632 655Z" />

      <g {...p('halo')}>
        <circle cx="320" cy="244" r="114" />
      </g>
      <g {...detail}>
        <path d="M320 124v-28M218 164l-32-24M422 164l32-24M200 244h-38M440 244h38M246 144l-26-32M394 144l26-32" />
      </g>

      <g {...p('robe')}>
        <path d="M222 398C258 368 290 356 320 356C350 356 382 368 418 398L440 655H200Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M198 372C174 250 226 158 320 150C414 158 466 250 442 372C400 392 240 392 198 372Z" />
        <path d="M198 372C148 424 132 524 142 655H252C236 540 230 450 252 408C226 392 208 378 198 372Z" />
        <path d="M442 372C492 424 508 524 498 655H388C404 540 410 450 388 408C414 392 432 378 442 372Z" />
      </g>
      <g {...p('accent')}>
        <path d="M236 548C256 536 384 536 404 548L412 570H228z" />
        <path d="M318 560v40" />
      </g>

      <g {...p('hair')}>
        <path d="M236 228C228 168 270 142 320 142C370 142 412 168 404 228v44H236z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="262" rx="72" ry="84" />
        <path d="M276 338l-8 36h104l-8-36z" />
      </g>

      <g {...p('hair')}>
        <path d="M258 318C252 348 266 378 320 388C374 378 388 348 382 318C360 338 340 348 320 348C300 348 280 338 258 318Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M128 655v-240" />
        <path d="M108 410h40v18H108z" />
        <path d="M96 428h64l-8 18H104z" />
        <path d="M100 446h56l-6 14H106z" />
        <path d="M104 460h48l-4 12H108z" />
        <path d="M460 400v140" />
        <path d="M448 400h24v18h-24z" />
        <path d="M444 418h32" />
        <ellipse cx="508" cy="608" rx="32" ry="20" />
        <ellipse cx="536" cy="592" rx="18" ry="16" />
        <path d="M548 584l12-8 2 10z" />
        <path d="M548 592l16 2-8 8z" />
        <path d="M478 612C458 598 452 622 478 624" />
        <ellipse cx="568" cy="622" rx="20" ry="16" />
        <path d="M556 608l-8-16 12-2z" />
        <path d="M580 608l8-16 8 6z" />
        <ellipse cx="580" cy="612" rx="10" ry="8" />
        <ellipse cx="448" cy="630" rx="14" ry="9" />
        <ellipse cx="460" cy="622" rx="8" ry="7" />
        <circle cx="454" cy="616" r="5" />
        <circle cx="466" cy="616" r="5" />
        <path d="M436 632C418 628 416 648 438 642" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="128" cy="422" rx="18" ry="16" />
        <ellipse cx="110" cy="406" rx="7" ry="16" transform="rotate(-32 110 406)" />
        <ellipse cx="122" cy="392" rx="6" ry="18" />
        <ellipse cx="134" cy="394" rx="6" ry="16" />
        <ellipse cx="146" cy="404" rx="6" ry="14" transform="rotate(16 146 404)" />
        <ellipse cx="460" cy="400" rx="16" ry="14" />
        <ellipse cx="478" cy="386" rx="7" ry="14" transform="rotate(22 478 386)" />
        <ellipse cx="466" cy="372" rx="6" ry="16" />
        <ellipse cx="454" cy="374" rx="6" ry="14" />
        <ellipse cx="444" cy="382" rx="5" ry="12" transform="rotate(-12 444 382)" />
      </g>

      <g {...detail}>
        <path d="M252 236c16-12 38-12 50 2" />
        <path d="M338 238c16-12 38-12 50 2" />
        <path d="M256 262c16-18 44-18 58 0-14 13-42 13-58 0z" />
        <path d="M324 262c16-18 44-18 58 0-14 13-42 13-58 0z" />
        <path d="M312 276v20l-10 6" />
        <path d="M298 316c14 10 28 10 42 0" />
        <path d="M242 222c10 18 8 40 2 58M398 222c-10 18-8 40-2 58" />
        <path d="M248 430v210M320 418v222M392 430v210" />
        <path d="M168 470c18 36 16 90 8 160M472 470c-18 36-16 90-8 160" />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy="262" rx="7.5" ry="8.5" />
        <ellipse cx="354" cy="262" rx="7.5" ry="8.5" />
        <circle cx="289" cy="259" r="2.2" fill={PAPER} />
        <circle cx="357" cy="259" r="2.2" fill={PAPER} />
        <circle cx="542" cy="588" r="2.2" />
        <circle cx="584" cy="608" r="2" />
        <circle cx="462" cy="620" r="1.6" />
      </g>
    </>
  );
}
