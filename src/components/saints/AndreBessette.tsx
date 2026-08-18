import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function AndreBessette({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...paperShape} d="M470 430h140v225H470z" />
      <path {...paperShape} d="M500 390h80v40h-80z" />
      <path {...paperShape} d="M530 360h20v30h-20z" />
      <path {...paperShape} d="M512 470h22v70H512z" />
      <path {...paperShape} d="M556 490h16v40h-16z" />
      <path {...paperShape} d="M488 620h20v35h-20z" />
      <path
        {...paperShape}
        d="M36 188c6-28 42-38 64-14 16-26 58-22 70 8 24-12 50 14 38 36 18 8 10 36-12 38-8 20-46 20-56-2-16 18-50 10-58-12-20 8-52-8-48-54z"
      />

      <g {...p('halo')}>
        <circle cx="292" cy="244" r="114" />
      </g>
      <g {...detail}>
        <path d="M292 124v-26M198 164l-32-24M386 164l32-24M172 244h-36M412 244h36M220 140l-26-32M364 140l26-32" />
      </g>

      <g {...p('robe')}>
        <path d="M188 408C216 368 252 350 292 350C332 350 368 368 396 408L416 655H168Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M178 392C158 338 206 308 256 322C276 332 308 332 328 322C378 308 426 338 406 392C378 372 292 360 178 392Z" />
        <path d="M170 400C124 458 114 548 124 655H248C232 548 230 468 252 428C224 412 188 404 170 400Z" />
        <path d="M414 400C460 458 470 548 460 655H336C352 548 354 468 332 428C360 412 396 404 414 400Z" />
      </g>
      <g {...p('accent')}>
        <path d="M276 368h32v12h-32z" />
        <path d="M228 548C248 536 336 536 356 548L364 570H220z" />
      </g>

      <g {...p('hair')}>
        <path d="M220 232C210 176 248 156 292 156C336 156 374 176 364 232v36H220z" />
        <path d="M228 200c10-14 24-6 22 8M292 172c8-14 22-8 24 4M356 200c-10-14-24-6-22 8" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="292" cy="262" rx="62" ry="74" />
        <path d="M254 330l-6 32h88l-6-32z" />
      </g>
      <g {...p('hair')}>
        <path d="M238 312C232 350 252 384 292 394C332 384 352 350 346 312C330 336 312 344 292 344C272 344 254 336 238 312Z" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="148" cy="430" rx="22" ry="18" />
        <path d="M132 448h32v40H132z" />
        <path d="M148 390v22" />
        <path d="M136 402h24" />
        <path d="M148 390C158 368 176 372 172 392C162 410 150 406 148 390Z" />
        <path d="M88 470v150" />
        <path d="M80 620h16" />
        <ellipse cx="88" cy="462" rx="10" ry="8" />
        <path d="M430 430v40" />
        <ellipse cx="430" cy="418" rx="16" ry="12" />
        <path d="M418 430h24v8h-24z" />
        <path d="M422 412h16" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="156" cy="508" rx="16" ry="14" />
        <ellipse cx="140" cy="494" rx="6" ry="16" transform="rotate(-22 140 494)" />
        <ellipse cx="152" cy="480" rx="6" ry="16" />
        <ellipse cx="164" cy="482" rx="6" ry="15" />
        <ellipse cx="174" cy="492" rx="5" ry="13" transform="rotate(14 174 492)" />
        <ellipse cx="408" cy="548" rx="16" ry="14" />
        <ellipse cx="426" cy="534" rx="6" ry="16" transform="rotate(18 426 534)" />
        <ellipse cx="414" cy="520" rx="6" ry="16" />
        <ellipse cx="402" cy="522" rx="6" ry="15" />
        <ellipse cx="392" cy="532" rx="5" ry="13" transform="rotate(-12 392 532)" />
      </g>

      <g {...detail}>
        <path d="M236 236c12-8 32-8 42 2" />
        <path d="M306 238c12-8 32-8 42 2" />
        <path d="M240 260c14-16 38-16 52 0-12 10-36 10-52 0z" />
        <path d="M298 260c14-16 38-16 52 0-12 10-36 10-52 0z" />
        <path d="M282 274v18l-9 5" />
        <path d="M270 310c10 8 22 8 34 0" />
        <path d="M228 220c6 14 4 32 0 48M356 220c-6 14-4 32 0 48" />
        <path d="M292 214c8 2 12 8 10 14" />
        <path d="M224 428v212M292 416v224M360 428v212" />
        <path d="M150 470c14 28 12 86 4 154M434 470c-14 28-12 86-4 154" />
      </g>
      <g {...ink}>
        <ellipse cx="264" cy="260" rx="6.5" ry="7.5" />
        <ellipse cx="320" cy="260" rx="6.5" ry="7.5" />
        <circle cx="266" cy="257" r="2" fill={PAPER} />
        <circle cx="322" cy="257" r="2" fill={PAPER} />
      </g>
    </>
  );
}
