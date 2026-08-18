import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function Columba({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...paperShape} d="M8 620C40 580 90 590 130 630C70 640 30 648 8 655Z" />
      <path {...paperShape} d="M40 640C70 620 110 628 140 650" />
      <path {...paperShape} d="M20 655C50 640 90 646 120 655" />
      <path {...paperShape} d="M24 548c40-20 90-8 110 28-36 8-80 20-110 8z" />
      <path {...paperShape} d="M36 548c8-18 36-16 44 4v28H36z" />
      <path {...paperShape} d="M470 400h140v120H470z" />
      <path {...paperShape} d="M490 360h100v40H490z" />
      <path {...paperShape} d="M520 330h20v30h-20z" />
      <path {...paperShape} d="M556 338h14v22h-14z" />
      <path {...paperShape} d="M508 450h22v50H508z" />

      <g {...p('halo')}>
        <circle cx="320" cy="232" r="114" />
      </g>
      <g {...detail}>
        <path d="M320 112v-24M226 152l-32-24M414 152l32-24M200 232h-36M440 232h36M248 128l-26-32M392 128l26-32" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="168" cy="148" rx="18" ry="11" />
        <ellipse cx="184" cy="138" rx="9" ry="7" />
        <path d="M152 150C138 136 136 156 154 158" />
        <path d="M166 142C158 124 186 120 180 144" />
        <path d="M192 134l10 4-10 4z" />
        <path d="M86 360v120" />
        <path d="M62 400h48" />
        <circle cx="86" cy="400" r="28" fill="none" stroke={STROKE} strokeWidth="6" />
      </g>

      <g {...p('robe')}>
        <path d="M208 400C236 360 276 342 320 342C364 342 404 360 432 400L452 655H188Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M196 384C176 330 226 300 280 314C300 324 340 324 360 314C414 300 464 330 444 384C416 364 320 352 196 384Z" />
        <path d="M188 392C140 452 128 548 140 655H266C250 548 248 468 270 428C242 412 208 400 188 392Z" />
        <path d="M452 392C500 452 512 548 500 655H374C390 548 392 468 370 428C398 412 432 400 452 392Z" />
      </g>
      <g {...p('accent')}>
        <path d="M240 220C228 242 226 274 232 312C252 306 286 302 320 302C354 302 388 306 408 312C414 274 412 242 400 220C382 200 258 200 240 220Z" />
        <path d="M246 312C270 336 370 336 394 312C374 350 266 350 246 312Z" />
        <circle cx="320" cy="196" r="28" fill={PAPER} />
        <path d="M244 548C264 536 376 536 396 548L404 570H236z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="252" rx="66" ry="76" />
        <path d="M278 322l-8 34h96l-8-34z" />
      </g>
      <g {...p('hair')}>
        <path d="M254 300C244 348 268 390 320 404C372 390 396 348 386 300C364 332 342 344 320 344C298 344 276 332 254 300Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="168" cy="500" rx="16" ry="14" />
        <ellipse cx="152" cy="486" rx="6" ry="16" transform="rotate(-24 152 486)" />
        <ellipse cx="164" cy="472" rx="6" ry="16" />
        <ellipse cx="176" cy="474" rx="6" ry="15" />
        <ellipse cx="186" cy="484" rx="5" ry="13" transform="rotate(14 186 484)" />
        <ellipse cx="428" cy="548" rx="16" ry="14" />
        <ellipse cx="446" cy="534" rx="6" ry="16" transform="rotate(20 446 534)" />
        <ellipse cx="434" cy="520" rx="6" ry="16" />
        <ellipse cx="422" cy="522" rx="6" ry="15" />
        <ellipse cx="412" cy="532" rx="5" ry="13" transform="rotate(-14 412 532)" />
      </g>

      <g {...detail}>
        <path d="M258 226c14-10 34-10 46 2" />
        <path d="M336 228c14-10 34-10 46 2" />
        <path d="M262 250c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M324 250c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M310 264v20l-10 5" />
        <path d="M296 302c12 10 26 10 40 0" />
        <path d="M262 212c8 16 6 38 0 54M378 212c-8 16-6 38 0 54" />
        <path d="M240 428v212M320 416v224M400 428v212" />
        <path d="M168 470c16 30 14 88 6 156M472 470c-16 30-14 88-6 156" />
      </g>
      <g {...ink}>
        <ellipse cx="290" cy="250" rx="7" ry="8" />
        <ellipse cx="350" cy="250" rx="7" ry="8" />
        <circle cx="293" cy="247" r="2.1" fill={PAPER} />
        <circle cx="353" cy="247" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
