import { PAPER, STROKE, ink, type PortraitProps } from './types';

function rose(cx: number, cy: number, r: number) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} />
      <circle cx={cx - r * 0.32} cy={cy - r * 0.18} r={r * 0.5} />
      <circle cx={cx + r * 0.28} cy={cy - r * 0.12} r={r * 0.4} />
      <circle cx={cx} cy={cy + r * 0.12} r={r * 0.24} />
    </g>
  );
}

export default function RoseOfLima({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M24 560c40-80 110-90 170-30 20-50 90-40 110 20C250 600 140 640 24 655Z"
      />
      <path {...p('cloud')} d="M40 620h90v36H40z" />
      <path {...p('cloud')} d="M32 620l53-48 53 48z" />
      <path {...p('cloud')} d="M78 596v-28h16v20" />
      <path
        {...p('cloud')}
        d="M470 100c8-20 40-24 54-4 12-18 44-12 52 10 18-6 34 16 22 30 12 6 4 26-14 26-6 16-34 14-42-2-12 14-38 6-46-10-14 6-36-8-26-50z"
      />

      <g {...p('halo')}>
        <circle cx="336" cy="240" r="118" />
      </g>
      <g {...detail}>
        <path d="M336 116v-28M236 156l-34-26M436 156l34-26M212 240h-38M460 240h38M258 132l-28-34M414 132l28-34" />
      </g>

      <g {...p('symbol')}>
        {rose(56, 500, 16)}
        {rose(96, 528, 14)}
        {rose(70, 548, 12)}
        {rose(540, 430, 18)}
        {rose(572, 468, 14)}
        {rose(520, 478, 12)}
        {rose(300, 132, 10)}
        {rose(336, 118, 12)}
        {rose(372, 132, 10)}
        {rose(318, 148, 8)}
        {rose(354, 148, 8)}
      </g>

      <g {...p('robe')}>
        <path d="M232 408C258 370 296 354 336 354C376 354 414 370 440 408L462 655H210Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M218 392C196 330 246 298 300 314C322 324 350 324 372 314C426 298 476 330 454 392C426 372 336 360 218 392Z" />
        <path d="M210 400C158 458 146 548 156 655H272C256 548 254 468 276 426C248 410 222 402 210 400Z" />
        <path d="M462 400C514 458 526 548 516 655H400C416 548 418 468 396 426C424 410 450 402 462 400Z" />
      </g>
      <g {...p('accent')}>
        <path d="M268 228C256 250 254 284 260 322C280 316 308 312 336 312C364 312 392 316 412 322C418 284 416 250 404 228C386 208 286 208 268 228Z" />
        <path d="M274 322C294 344 378 344 398 322C382 358 290 358 274 322Z" />
        <path d="M248 548C268 536 404 536 424 548L432 570H240z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="336" cy="262" rx="66" ry="78" />
        <path d="M294 334l-8 34h96l-8-34z" />
      </g>

      <g {...p('symbol')}>
        {rose(248, 500, 20)}
        {rose(220, 536, 14)}
        <path d="M248 520v40" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="292" cy="520" rx="12" ry="32" transform="rotate(-10 292 520)" />
        <ellipse cx="306" cy="514" rx="11" ry="34" />
        <ellipse cx="320" cy="516" rx="11" ry="32" transform="rotate(6 320 516)" />
        <ellipse cx="334" cy="528" rx="10" ry="28" transform="rotate(14 334 528)" />
        <ellipse cx="390" cy="548" rx="16" ry="14" />
        <ellipse cx="408" cy="534" rx="6" ry="16" transform="rotate(16 408 534)" />
        <ellipse cx="396" cy="520" rx="6" ry="16" />
        <ellipse cx="384" cy="522" rx="6" ry="15" />
        <ellipse cx="374" cy="532" rx="5" ry="13" transform="rotate(-12 374 532)" />
      </g>

      <g {...detail}>
        <path d="M276 236c14-10 36-10 48 2" />
        <path d="M348 238c14-10 36-10 48 2" />
        <path d="M280 260c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M338 260c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M326 274v20l-10 5" />
        <path d="M312 312c12 10 26 10 40 0" />
        <path d="M278 222c8 16 6 38 2 54M394 222c-8 16-6 38-2 54" />
        <path d="M258 430v210M336 418v222M414 430v210" />
        <path d="M178 470c18 30 16 88 8 156M494 470c-18 30-16 88-8 156" />
      </g>
      <g {...ink}>
        <ellipse cx="306" cy="260" rx="7" ry="8" />
        <ellipse cx="366" cy="260" rx="7" ry="8" />
        <circle cx="309" cy="257" r="2.1" fill={PAPER} />
        <circle cx="369" cy="257" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
