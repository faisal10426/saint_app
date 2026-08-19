import { PAPER, STROKE, ink, type PortraitProps } from './types';

function starOfDavid(cx: number, cy: number, r: number) {
  const up = Array.from({ length: 3 }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 3;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  const down = Array.from({ length: 3 }, (_, i) => {
    const a = Math.PI / 2 + (i * 2 * Math.PI) / 3;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  return (
    <g>
      <polygon points={up} />
      <polygon points={down} />
    </g>
  );
}

export default function TeresaBenedictaOfTheCross({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M40 180c8-30 46-40 70-14 16-28 60-22 72 8 26-12 52 14 40 38 20 8 12 36-12 38-8 22-48 20-58-2-16 18-52 8-62-14-22 8-56-8-50-54z"
      />
      <path
        {...p('cloud')}
        d="M458 90c8-20 42-24 56-4 12-18 46-14 54 10 20-6 36 18 24 32 12 6 6 28-12 28-6 16-36 16-46-2-12 14-40 6-48-12-14 6-40-8-32-52z"
      />

      <g {...p('halo')}>
        <circle cx="328" cy="240" r="118" />
      </g>
      <g {...detail}>
        <path d="M328 116v-28M230 156l-34-26M426 156l34-26M204 240h-38M452 240h38M252 132l-28-34M404 132l28-34" />
      </g>

      <g {...p('symbol')}>{starOfDavid(86, 200, 28)}</g>

      <g {...p('mantle')}>
        <path d="M206 360C176 232 232 144 328 136C424 144 480 232 450 360C408 382 248 382 206 360Z" />
        <path d="M206 360C156 422 144 528 156 655H264C248 540 242 452 266 410C236 388 216 370 206 360Z" />
        <path d="M450 360C500 422 512 528 500 655H392C408 540 414 452 390 410C420 388 440 370 450 360Z" />
      </g>
      <g {...p('robe')}>
        <path d="M236 368C214 250 260 172 328 166C396 172 442 250 420 368C380 390 276 390 236 368Z" />
        <path d="M260 428C284 400 304 390 328 390C352 390 372 400 396 428L418 655H238Z" />
      </g>
      <g {...p('accent')}>
        <path d="M276 220C264 242 262 276 268 314C288 308 308 304 328 304C348 304 368 308 388 314C394 276 392 242 380 220C362 200 294 200 276 220Z" />
        <path d="M282 314C302 336 354 336 374 314C358 350 298 350 282 314Z" />
        <path d="M294 324h68M296 340h64" />
        <path d="M328 390v40" />
        <path d="M312 410h32" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="328" cy="260" rx="66" ry="78" />
        <path d="M286 332l-8 34h96l-8-34z" />
      </g>

      <g {...p('symbol')}>
        <path d="M430 480h78v90H430z" />
        <path d="M442 498h54M442 518h54M442 538h54" />
        <path d="M508 500l26-36 8 6-26 36z" />
        <path d="M526 472h8v16h-8z" />
        {starOfDavid(160, 520, 22)}
      </g>

      <g {...p('skin')}>
        <ellipse cx="188" cy="548" rx="16" ry="14" />
        <ellipse cx="172" cy="534" rx="6" ry="16" transform="rotate(-24 172 534)" />
        <ellipse cx="184" cy="520" rx="6" ry="16" />
        <ellipse cx="196" cy="522" rx="6" ry="15" />
        <ellipse cx="206" cy="532" rx="5" ry="13" transform="rotate(14 206 532)" />
        <ellipse cx="438" cy="548" rx="16" ry="14" />
        <ellipse cx="456" cy="534" rx="6" ry="16" transform="rotate(20 456 534)" />
        <ellipse cx="444" cy="520" rx="6" ry="16" />
        <ellipse cx="432" cy="522" rx="6" ry="15" />
        <ellipse cx="422" cy="532" rx="5" ry="13" transform="rotate(-14 422 532)" />
      </g>

      <g {...detail}>
        <path d="M266 234c14-10 36-10 48 2" />
        <path d="M342 236c14-10 36-10 48 2" />
        <path d="M270 258c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M332 258c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M318 272v20l-10 5" />
        <path d="M304 310c12 10 26 10 40 0" />
        <path d="M270 220c8 16 6 38 2 54M386 220c-8 16-6 38-2 54" />
        <path d="M268 430v210M328 418v222M388 430v210" />
        <path d="M188 470c18 32 16 88 8 156M468 470c-18 32-16 88-8 156" />
      </g>
      <g {...ink}>
        <ellipse cx="296" cy="258" rx="7" ry="8" />
        <ellipse cx="360" cy="258" rx="7" ry="8" />
        <circle cx="299" cy="255" r="2.1" fill={PAPER} />
        <circle cx="363" cy="255" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
