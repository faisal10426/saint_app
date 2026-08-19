import { PAPER, STROKE, ink, type PortraitProps } from './types';

export default function Genevieve({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...p('cloud')} d="M470 470h140v185H470z" />
      <path {...p('cloud')} d="M500 430h80v40h-80z" />
      <path {...p('cloud')} d="M512 390h24v40h-24z" />
      <path {...p('cloud')} d="M552 398h18v32h-18z" />
      <path {...p('cloud')} d="M508 510h22v70H508z" />
      <path {...p('cloud')} d="M556 530h16v40h-16z" />
      <path
        {...p('cloud')}
        d="M36 188c6-28 42-38 64-14 16-26 58-22 70 8 24-12 50 14 38 36 18 8 10 36-12 38-8 20-46 20-56-2-16 18-50 10-58-12-20 8-52-8-48-54z"
      />

      <g {...p('halo')}>
        <circle cx="300" cy="252" r="110" />
      </g>
      <g {...detail}>
        <path d="M300 136v-24M210 174l-28-20M390 174l28-20M184 252h-32M416 252h32M232 152l-24-28M368 152l24-28" />
      </g>

      <g {...p('robe')}>
        <path d="M204 420C232 378 264 360 300 360C336 360 368 378 396 420L414 655H186Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M192 400C172 348 220 318 270 332C286 340 314 340 330 332C380 318 428 348 408 400C380 380 300 368 192 400Z" />
        <path d="M184 408C142 466 132 548 142 655H258C244 548 242 470 264 432C236 416 202 408 184 408Z" />
        <path d="M416 408C458 466 468 548 458 655H342C356 548 358 470 336 432C364 416 398 408 416 408Z" />
      </g>
      <g {...p('accent')}>
        <path d="M248 548C268 536 332 536 352 548L360 568H240z" />
        <path d="M284 372h32v10h-32z" />
      </g>

      <g {...p('hair')}>
        <path d="M228 240C216 174 256 152 300 152C344 152 384 174 372 240C360 220 332 210 300 210C268 210 240 220 228 240Z" />
        <path d="M222 254C210 324 218 400 230 468C248 448 254 378 252 330C258 388 266 448 282 476C270 400 264 330 270 272z" />
        <path d="M378 254C390 324 382 400 370 468C352 448 346 378 348 330C342 388 334 448 318 476C330 400 336 330 330 272z" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="300" cy="272" rx="60" ry="72" />
        <path d="M264 338l-6 30h84l-6-30z" />
      </g>

      <g {...p('symbol')}>
        <path d="M148 300v160" />
        <path d="M136 300c8-28 28-28 36 0" />
        <ellipse cx="154" cy="278" rx="14" ry="18" />
        <path d="M80 560h90v70H80z" />
        <path d="M92 578h66M92 596h66M92 614h66" />
        <ellipse cx="90" cy="620" rx="28" ry="18" />
        <ellipse cx="114" cy="608" rx="14" ry="12" />
        <path d="M66 624C54 612 56 632 72 634" />
        <path d="M126 602l12 4-12 6z" />
        <ellipse cx="122" cy="600" rx="3" ry="3" fill={STROKE} />
      </g>

      <g {...p('skin')}>
        <ellipse cx="156" cy="500" rx="14" ry="12" />
        <ellipse cx="142" cy="488" rx="5" ry="14" transform="rotate(-22 142 488)" />
        <ellipse cx="152" cy="476" rx="5" ry="14" />
        <ellipse cx="162" cy="478" rx="5" ry="13" />
        <ellipse cx="170" cy="486" rx="5" ry="12" transform="rotate(12 170 486)" />
        <ellipse cx="408" cy="548" rx="14" ry="12" />
        <ellipse cx="422" cy="536" rx="5" ry="14" transform="rotate(18 422 536)" />
        <ellipse cx="412" cy="524" rx="5" ry="14" />
        <ellipse cx="402" cy="526" rx="5" ry="13" />
        <ellipse cx="394" cy="534" rx="5" ry="12" transform="rotate(-12 394 534)" />
      </g>

      <g {...detail}>
        <path d="M246 246c12-8 30-8 40 2" />
        <path d="M314 248c12-8 30-8 40 2" />
        <path d="M250 270c14-16 36-16 48 0-12 10-34 10-48 0z" />
        <path d="M308 270c14-16 36-16 48 0-12 10-34 10-48 0z" />
        <path d="M292 282v16l-8 5" />
        <path d="M280 316c10 8 22 8 34 0" />
        <path d="M242 232c6 14 4 32 0 48M358 232c-6 14-4 32 0 48" />
        <path d="M228 438v202M300 426v214M372 438v202" />
        <path d="M168 470c14 28 12 86 4 154M432 470c-14 28-12 86-4 154" />
      </g>
      <g {...ink}>
        <ellipse cx="274" cy="270" rx="6.5" ry="7.5" />
        <ellipse cx="326" cy="270" rx="6.5" ry="7.5" />
        <circle cx="276" cy="267" r="2" fill={PAPER} />
        <circle cx="328" cy="267" r="2" fill={PAPER} />
      </g>
    </>
  );
}
