import { PAPER, STROKE, ink, type PortraitProps } from './types';

export default function Dymphna({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M36 178c8-32 46-42 72-16 16-28 62-24 74 8 26-14 54 12 42 38 22 8 14 38-12 40-8 22-50 22-60-2-18 20-54 10-64-14-22 10-56-8-52-54z"
      />
      <path
        {...p('cloud')}
        d="M448 78c8-22 42-28 58-8 12-20 48-16 58 10 20-8 38 16 26 32 14 8 6 28-12 30-6 16-36 14-46-2-12 14-40 8-48-10-16 8-40-8-36-52z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="240" r="122" />
      </g>
      <g {...detail}>
        <path d="M320 112v-30M220 154l-34-26M420 154l34-26M192 240h-38M448 240h38M246 132l-28-34M394 132l28-34" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="108" cy="430" rx="28" ry="18" />
        <path d="M108 412v-28" />
        <path d="M96 384h24v12H96z" />
        <path d="M108 448c-8 16 2 32 12 42 6-14 16-28 8-42 4 8 2 20-8 26" />
        <ellipse cx="86" cy="560" rx="8" ry="22" transform="rotate(-18 86 560)" />
        <ellipse cx="108" cy="548" rx="7" ry="20" />
        <ellipse cx="130" cy="560" rx="8" ry="22" transform="rotate(18 130 560)" />
        <circle cx="108" cy="582" r="5" />
        <path d="M108 586v42" />
        <ellipse cx="548" cy="548" rx="8" ry="22" transform="rotate(-16 548 548)" />
        <ellipse cx="568" cy="536" rx="7" ry="20" />
        <ellipse cx="588" cy="548" rx="8" ry="22" transform="rotate(16 588 548)" />
        <circle cx="568" cy="568" r="5" />
        <path d="M568 572v40" />
      </g>

      <g {...p('robe')}>
        <path d="M224 372C204 255 248 170 320 162C392 170 436 255 416 372C374 396 266 396 224 372Z" />
        <path d="M248 424C274 400 296 390 320 390C344 390 366 400 392 424L416 655H224Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M210 358C158 418 142 520 152 655H258C242 545 240 455 264 412C238 392 220 372 210 358Z" />
        <path d="M430 358C482 418 498 520 488 655H382C398 545 400 455 376 412C402 392 420 372 430 358Z" />
      </g>

      <g {...p('accent')}>
        <path d="M276 142l18-30 26 12-6 32z" />
        <path d="M320 116l16-34 22 16-4 30z" />
        <path d="M364 142l-18-30 26 8 10 34z" />
        <path d="M286 150h68v12H286z" />
        <path d="M292 348h56v16H292z" />
        <path d="M244 548h152l10 26H234z" />
      </g>

      <g {...p('hair')}>
        <path d="M236 218C220 156 270 130 320 128C370 130 420 156 404 218C396 198 358 186 320 186C282 186 244 198 236 218Z" />
        <path d="M238 234C220 278 224 338 238 400C254 372 260 320 264 276C256 256 246 242 238 234Z" />
        <path d="M402 234C420 278 416 338 402 400C386 372 380 320 376 276C384 256 394 242 402 234Z" />
        <path d="M250 186c12-20 28-8 26 8M320 158c10-20 28-14 28 4M390 186c-12-20-28-8-26 8" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="256" rx="70" ry="82" />
        <path d="M278 332l-8 36h100l-8-36z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="124" cy="468" rx="18" ry="16" />
        <ellipse cx="108" cy="454" rx="7" ry="16" transform="rotate(-30 108 454)" />
        <ellipse cx="118" cy="438" rx="6" ry="16" />
        <ellipse cx="130" cy="436" rx="6" ry="18" />
        <ellipse cx="142" cy="442" rx="6" ry="15" transform="rotate(14 142 442)" />
        <ellipse cx="150" cy="456" rx="5" ry="12" transform="rotate(26 150 456)" />

        <ellipse cx="516" cy="500" rx="16" ry="14" />
        <ellipse cx="532" cy="486" rx="6" ry="15" transform="rotate(24 532 486)" />
        <ellipse cx="522" cy="472" rx="6" ry="16" />
        <ellipse cx="510" cy="470" rx="6" ry="16" />
        <ellipse cx="498" cy="476" rx="5" ry="14" transform="rotate(-12 498 476)" />
      </g>

      <g {...detail}>
        <path d="M256 230c16-12 38-12 50 2" />
        <path d="M334 232c16-12 38-12 50 2" />
        <path d="M260 254c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M324 254c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M312 268v20l-10 6" />
        <path d="M298 306c14 10 28 10 42 0" />
        <path d="M246 216c8 16 6 38 2 56M394 216c-8 16-6 38-2 56" />
        <path d="M256 430v210M320 418v222M384 430v210" />
        <path d="M168 470c20 34 22 90 12 160M472 470c-20 34-22 90-12 160" />
      </g>
      <g {...ink}>
        <ellipse cx="288" cy="254" rx="7" ry="8" />
        <ellipse cx="352" cy="254" rx="7" ry="8" />
        <circle cx="291" cy="251" r="2.1" fill={PAPER} />
        <circle cx="355" cy="251" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
