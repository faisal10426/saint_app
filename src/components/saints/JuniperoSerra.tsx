import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function JuniperoSerra({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...paperShape} d="M8 655C70 520 180 500 250 590C180 630 80 650 8 655Z" />
      <path {...paperShape} d="M632 655C560 500 430 490 360 590C440 630 560 650 632 655Z" />
      <path {...paperShape} d="M24 430h150v225H24z" />
      <path {...paperShape} d="M44 390h110v40H44z" />
      <path {...paperShape} d="M24 390l75-70 75 70z" />
      <ellipse {...paperShape} cx="70" cy="360" rx="16" ry="18" />
      <ellipse {...paperShape} cx="128" cy="360" rx="16" ry="18" />
      <path {...paperShape} d="M86 470h28v70H86z" />
      <path {...paperShape} d="M54 500h18v30H54z" />
      <path {...paperShape} d="M128 500h18v30h-18z" />

      <g {...p('halo')}>
        <circle cx="360" cy="228" r="112" />
      </g>
      <g {...detail}>
        <path d="M360 110v-24M266 150l-32-24M454 150l32-24M242 228h-34M478 228h34M288 126l-26-32M432 126l26-32" />
      </g>

      <g {...p('robe')}>
        <path d="M248 400C274 360 316 342 360 342C404 342 446 360 472 400L492 655H228Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M238 384C218 332 268 302 320 316C340 326 380 326 400 316C452 302 502 332 482 384C454 364 360 352 238 384Z" />
        <path d="M230 392C182 450 172 548 182 655H306C290 548 288 468 310 428C282 412 248 400 230 392Z" />
        <path d="M490 392C538 450 548 548 538 655H414C430 548 432 468 410 428C438 412 472 400 490 392Z" />
      </g>
      <g {...p('accent')}>
        <path d="M256 548C276 536 444 536 464 548C470 558 462 568 450 564C412 552 332 552 294 564C282 568 274 558 256 548Z" />
        <path d="M352 556c2 16 0 28 0 42" />
        <circle cx="360" cy="570" r="8" />
        <circle cx="360" cy="592" r="8" />
        <circle cx="360" cy="614" r="8" />
        <path d="M352 624h16l2 16h-20z" />
      </g>

      <g {...p('hair')}>
        <path d="M276 220C264 164 308 142 360 142C412 142 456 164 444 220v38H276z" />
        <path d="M284 188c12-16 28-6 26 10M360 158c8-16 24-10 26 4M436 188c-12-16-28-6-26 10" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="360" cy="248" rx="66" ry="78" />
        <path d="M318 320l-8 34h96l-8-34z" />
      </g>
      <g {...p('hair')}>
        <path d="M294 298C284 350 308 398 360 412C412 398 436 350 426 298C404 330 382 342 360 342C338 342 316 330 294 298Z" />
        <path d="M328 294C342 310 378 310 392 294C378 304 342 304 328 294Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M520 280v280" />
        <path d="M504 280h32" />
        <circle cx="520" cy="268" r="12" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="220" cy="500" rx="16" ry="14" />
        <ellipse cx="204" cy="486" rx="6" ry="16" transform="rotate(-24 204 486)" />
        <ellipse cx="216" cy="472" rx="6" ry="16" />
        <ellipse cx="228" cy="474" rx="6" ry="15" />
        <ellipse cx="238" cy="484" rx="5" ry="13" transform="rotate(14 238 484)" />
        <ellipse cx="488" cy="548" rx="16" ry="14" />
        <ellipse cx="506" cy="534" rx="6" ry="16" transform="rotate(18 506 534)" />
        <ellipse cx="494" cy="520" rx="6" ry="16" />
        <ellipse cx="482" cy="522" rx="6" ry="15" />
        <ellipse cx="472" cy="532" rx="5" ry="13" transform="rotate(-12 472 532)" />
      </g>

      <g {...detail}>
        <path d="M298 222c14-10 34-10 46 2" />
        <path d="M376 224c14-10 34-10 46 2" />
        <path d="M302 246c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M364 246c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M348 260v20l-10 5" />
        <path d="M334 298c12 10 26 10 40 0" />
        <path d="M284 206c8 16 6 38 0 56M436 206c-8 16-6 38 0 56" />
        <path d="M276 428v212M360 416v224M444 428v212" />
        <path d="M210 470c16 30 14 88 6 156M510 470c-16 30-14 88-6 156" />
      </g>
      <g {...ink}>
        <ellipse cx="330" cy="246" rx="7" ry="8" />
        <ellipse cx="390" cy="246" rx="7" ry="8" />
        <circle cx="333" cy="243" r="2.1" fill={PAPER} />
        <circle cx="393" cy="243" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
