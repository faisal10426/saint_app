import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function burst(cx: number, cy: number, outer: number, inner: number, n: number) {
  return Array.from({ length: n * 2 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = -Math.PI / 2 + (i * Math.PI) / n;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
}

export default function FrancisXavier({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M54 156c6-30 44-42 70-16 16-28 60-24 72 10 26-12 52 14 40 38 20 8 14 36-12 38-8 22-48 22-58-2-16 18-50 10-60-12-20 10-54-8-52-56z"
      />
      <path
        {...paperShape}
        d="M470 64c10-20 44-24 58-2 12-18 50-14 58 12 20-8 38 18 26 34 14 6 6 28-14 30-6 16-36 14-46-2-12 14-40 8-48-10-16 8-40-8-34-62z"
      />

      <path {...paperShape} d="M8 655C28 590 70 540 118 552C96 600 52 636 8 655Z" />
      <path {...paperShape} d="M430 655C470 610 530 600 632 628C620 644 560 656 430 655Z" />
      <path {...paperShape} d="M428 608c22-14 48 4 70-4 24-8 48 10 72 0 20-8 40 6 62-6v52C590 640 530 656 430 655Z" />

      <g {...p('symbol')}>
        <path d="M12 655C48 548 92 492 138 518C112 572 64 622 12 655Z" />
        <path d="M108 500v-78M94 436h28" />
        <ellipse cx="42" cy="618" rx="20" ry="14" />
        <ellipse cx="78" cy="636" rx="18" ry="12" />
        <ellipse cx="58" cy="600" rx="14" ry="18" />
        <path d="M470 592C498 568 568 564 610 586C600 612 510 618 470 592Z" />
        <path d="M508 586V478h8v108z" />
        <path d="M548 584V464h8v120z" />
        <path d="M584 586V492h7v94z" />
        <path d="M516 500l32-10-8-48-24 16z" />
        <path d="M556 488l36-12-6-56-30 18z" />
        <path d="M591 508l28-8-6-40-22 14z" />
        <path d="M504 478h16v10h-16z" />
        <path d="M544 464h16v10h-16z" />
        <path d="M580 492h14v8h-14z" />
      </g>

      <g {...p('halo')}>
        <circle cx="328" cy="222" r="124" />
      </g>
      <g {...detail}>
        <path d="M328 92v-34M218 138l-40-32M438 138l40-32M196 222h-44M460 222h44M242 114l-32-40M414 114l32-40" />
      </g>
      <g {...p('halo')}>
        <polygon points={burst(168, 108, 9, 3.5, 4)} />
        <polygon points={burst(488, 98, 8, 3, 4)} />
        <polygon points={burst(214, 78, 7, 2.8, 4)} />
        <polygon points={burst(442, 74, 7, 2.8, 4)} />
      </g>

      <g {...p('robe')}>
        <path d="M204 404C184 366 224 338 270 350C300 336 340 334 368 348C418 336 458 372 442 414C478 468 490 560 478 655H188C176 560 170 460 204 404Z" />
        <path d="M204 404C150 436 118 500 128 558C164 522 206 468 240 444C220 428 208 414 204 404Z" />
        <path d="M442 414C496 446 528 510 518 568C482 532 440 478 406 454C426 438 438 424 442 414Z" />
      </g>

      <g {...p('accent')}>
        <path d="M292 348C308 332 348 330 364 348L356 372H300z" />
        <path d="M286 356h76v8H286z" />
        <path d="M248 548C268 536 388 536 408 548L418 574H238z" />
      </g>
      <g {...detail}>
        <path d="M328 400v8M328 428v8M328 456v8M328 484v8M328 512v8" />
      </g>

      <g {...p('hair')}>
        <path d="M250 196C232 148 264 112 304 108C292 146 272 178 270 218C254 206 248 196 250 196Z" />
        <path d="M406 196C424 148 392 112 352 108C364 146 384 178 386 218C402 206 408 196 406 196Z" />
        <path d="M254 180C266 132 304 114 328 114C352 114 390 132 402 180C384 158 358 146 328 148C298 146 272 158 254 180Z" />
        <path d="M256 164c12-20 26-8 24 10M300 140c10-18 26-12 26 6M356 140c12-20 28-10 24 8M400 164c-10-20-26-8-24 10" />
        <path d="M258 300C248 348 268 400 328 416C388 400 408 348 398 300C374 330 348 346 328 346C308 346 282 330 258 300Z" />
        <path d="M292 296C306 312 350 312 364 296C350 306 306 306 292 296Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="328" cy="244" rx="72" ry="86" />
        <path d="M282 322l-8 40h108l-8-40z" />
      </g>

      <g {...p('symbol')}>
        <path d="M196 318v168" />
        <path d="M164 360h64" />
        <path d="M186 318h20v14h-20z" />
        <path d="M188 392C176 372 164 388 176 404C184 418 196 430 200 448C192 430 176 418 178 400C170 412 182 428 198 436" />
        <path d="M412 430h86v108H412z" />
        <path d="M420 438h70v92H420z" />
        <polygon points={burst(455, 484, 26, 12, 8)} />
      </g>
      <g {...ink}>
        <text x="196" y="330" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={STROKE}>
          INRI
        </text>
        <text x="455" y="490" textAnchor="middle" fontSize="11" fontFamily="sans-serif" fill={STROKE}>
          IHS
        </text>
      </g>

      <g {...p('skin')}>
        <ellipse cx="198" cy="494" rx="20" ry="16" />
        <ellipse cx="178" cy="482" rx="7" ry="16" transform="rotate(-32 178 482)" />
        <ellipse cx="190" cy="466" rx="6" ry="18" />
        <ellipse cx="204" cy="468" rx="6" ry="17" />
        <ellipse cx="216" cy="478" rx="6" ry="15" transform="rotate(18 216 478)" />
        <ellipse cx="226" cy="490" rx="5" ry="13" transform="rotate(28 226 490)" />
        <ellipse cx="456" cy="548" rx="20" ry="16" />
        <ellipse cx="476" cy="534" rx="7" ry="16" transform="rotate(24 476 534)" />
        <ellipse cx="462" cy="520" rx="6" ry="17" />
        <ellipse cx="448" cy="522" rx="6" ry="16" />
        <ellipse cx="436" cy="532" rx="6" ry="14" transform="rotate(-16 436 532)" />
        <ellipse cx="428" cy="544" rx="5" ry="12" transform="rotate(-26 428 544)" />
      </g>

      <g {...detail}>
        <path d="M262 216c16-12 38-12 50 2" />
        <path d="M344 218c16-12 38-12 50 2" />
        <path d="M266 240c18-20 44-20 60 0-16 13-42 13-60 0z" />
        <path d="M330 240c18-20 44-20 60 0-16 13-42 13-60 0z" />
        <path d="M320 254v22l-11 6" />
        <path d="M306 296c14 10 28 10 42 0" />
        <path d="M248 202c10 18 8 42 2 62M408 202c-10 18-8 42-2 62" />
        <path d="M220 470c18 32 16 88 8 160M436 470c-18 32-16 88-8 160" />
        <path d="M260 430v210M328 418v222M396 430v210" />
        <path d="M448 618c18-8 36 6 54 0 20-6 40 8 60 0" />
        <path d="M468 636c16-6 32 6 48 0 18-6 36 6 52 0" />
      </g>
      <g {...ink}>
        <ellipse cx="296" cy="240" rx="7.5" ry="8.5" />
        <ellipse cx="360" cy="240" rx="7.5" ry="8.5" />
        <circle cx="299" cy="237" r="2.2" fill={PAPER} />
        <circle cx="363" cy="237" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
