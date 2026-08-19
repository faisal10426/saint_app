import { PAPER, STROKE, ink, type PortraitProps } from './types';

function bloom(cx: number, cy: number) {
  return (
    <g>
      <ellipse cx={cx - 8} cy={cy} rx="7" ry="11" transform={`rotate(-40 ${cx - 8} ${cy})`} />
      <ellipse cx={cx + 8} cy={cy} rx="7" ry="11" transform={`rotate(40 ${cx + 8} ${cy})`} />
      <ellipse cx={cx} cy={cy - 8} rx="7" ry="11" />
      <circle cx={cx} cy={cy} r="4" />
    </g>
  );
}

export default function Monica({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M62 148c6-28 40-40 66-14 14-26 58-22 70 8 24-12 50 12 40 36 18 8 12 34-12 36-8 20-46 20-56 0-16 16-48 8-58-12-20 8-52-8-50-54z"
      />
      <path
        {...p('cloud')}
        d="M448 70c8-20 42-24 56-2 12-18 48-12 56 12 20-8 36 16 24 32 12 6 6 26-12 28-6 16-34 14-44-2-12 14-40 6-48-10-14 8-38-8-32-58z"
      />

      <g {...p('symbol')}>
        <path d="M28 655V430h72v225z" />
        <path d="M22 430h84l-8-36H30z" />
        <path d="M36 394h56l-28-48z" />
        <path d="M64 318v30M52 330h24" />
        <path d="M48 500h32v90H48z" />
        <path d="M56 590v-54c0-14 8-22 16-22s16 8 16 22v54" />
        <rect x="42" y="448" width="18" height="22" rx="3" />
        <rect x="68" y="448" width="18" height="22" rx="3" />
        <path d="M430 655C470 600 520 572 632 590C610 630 520 656 430 655Z" />
        <path d="M468 590C500 548 560 538 628 568C600 588 530 598 468 590Z" />
        <path d="M8 655C40 620 78 628 108 655H8z" />
        {bloom(38, 628)}
        {bloom(78, 640)}
        {bloom(54, 652)}
        {bloom(548, 632)}
        {bloom(588, 646)}
      </g>
      <g {...detail}>
        <path d="M28 470h72M28 510h72M36 406h56M36 418h56M36 382h56" />
      </g>

      <g {...p('halo')}>
        <circle cx="322" cy="232" r="128" />
      </g>
      <g {...detail}>
        <path d="M322 98v-34M214 144l-38-30M430 144l38-30M186 232h-44M458 232h44M238 120l-32-38M406 120l32-38" />
      </g>
      <g {...p('halo')}>
        <polygon points="168,102 170,110 178,112 170,114 168,122 166,114 158,112 166,110" />
        <polygon points="476,94 478,102 486,104 478,106 476,114 474,106 466,104 474,102" />
      </g>

      <g {...p('robe')}>
        <path d="M246 418C268 384 294 368 322 368C350 368 376 384 398 418L420 655H224Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M196 400C172 350 218 316 274 332C300 342 344 342 370 332C426 316 472 350 448 400C420 378 322 368 196 400Z" />
        <path d="M196 400C140 458 122 548 134 655H256C238 548 234 462 258 424C230 412 208 404 196 400Z" />
        <path d="M448 400C504 458 522 548 510 655H388C406 548 410 462 386 424C414 412 436 404 448 400Z" />
      </g>

      <g {...p('accent')}>
        <path d="M228 250C208 176 254 118 322 112C390 118 436 176 416 250C392 218 352 198 322 198C292 198 252 218 228 250Z" />
        <path d="M228 250C200 292 188 360 194 430H262C254 360 260 300 278 272C256 262 238 254 228 250Z" />
        <path d="M416 250C444 292 456 360 450 430H382C390 360 384 300 366 272C388 262 406 254 416 250Z" />
      </g>

      <g {...p('hair')}>
        <path d="M268 206C256 226 254 250 260 274C280 260 364 260 384 274C390 250 388 226 376 206C358 192 286 192 268 206Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="322" cy="256" rx="70" ry="82" />
        <path d="M280 330l-8 36h100l-8-36z" />
      </g>

      <g {...p('accent')}>
        <path d="M278 318C298 338 346 338 366 318C352 348 292 348 278 318Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M286 430h92v108H286z" />
        <path d="M294 438h76v92H294z" />
        <path d="M332 470v44M314 492h36" />
        <circle cx="360" cy="548" r="6" />
        <circle cx="348" cy="534" r="6" />
        <circle cx="372" cy="534" r="6" />
        <circle cx="338" cy="520" r="5" />
        <circle cx="382" cy="520" r="5" />
        <circle cx="332" cy="506" r="5" />
        <circle cx="388" cy="506" r="5" />
        <path d="M360 554v42" />
        <path d="M348 588h24" />
        <path d="M356 574h8v8h-8z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="300" cy="512" rx="12" ry="32" transform="rotate(-8 300 512)" />
        <ellipse cx="316" cy="506" rx="11" ry="34" />
        <ellipse cx="332" cy="508" rx="11" ry="32" transform="rotate(6 332 508)" />
        <ellipse cx="346" cy="520" rx="10" ry="28" transform="rotate(14 346 520)" />
        <ellipse cx="378" cy="536" rx="16" ry="14" />
        <ellipse cx="394" cy="522" rx="7" ry="16" transform="rotate(18 394 522)" />
        <ellipse cx="372" cy="518" rx="6" ry="16" />
        <ellipse cx="360" cy="524" rx="6" ry="14" />
      </g>

      <g {...detail}>
        <path d="M258 230c16-12 38-12 50 2" />
        <path d="M336 232c16-12 38-12 50 2" />
        <path d="M262 254c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M326 254c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M314 268v20l-10 6" />
        <path d="M300 306c14 10 28 10 42 0" />
        <path d="M256 216c8 18 6 40 2 58M388 216c-8 18-6 40-2 58" />
        <path d="M248 430v210M322 418v222M396 430v210" />
        <path d="M168 470c20 34 18 88 10 160M476 470c-20 34-18 88-10 160" />
      </g>
      <g {...ink}>
        <ellipse cx="290" cy="254" rx="7" ry="8" />
        <ellipse cx="354" cy="254" rx="7" ry="8" />
        <circle cx="293" cy="251" r="2.1" fill={PAPER} />
        <circle cx="357" cy="251" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
