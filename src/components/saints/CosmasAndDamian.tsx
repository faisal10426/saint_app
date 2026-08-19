import { PAPER, STROKE, ink, type PortraitProps } from './types';

function herb(cx: number, cy: number) {
  return (
    <g>
      <path d={`M${cx} ${cy + 36}c-10-18-6-34 0-48 8 16 8 32 0 48z`} />
      <ellipse cx={cx - 10} cy={cy} rx="8" ry="16" transform={`rotate(-28 ${cx - 10} ${cy})`} />
      <ellipse cx={cx + 10} cy={cy + 4} rx="8" ry="15" transform={`rotate(24 ${cx + 10} ${cy + 4})`} />
      <ellipse cx={cx} cy={cy - 8} rx="7" ry="14" />
    </g>
  );
}

export default function CosmasAndDamian({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M28 176c8-30 44-38 68-12 14-24 52-18 64 10 20-8 36 16 24 32 12 8 6 28-14 28-6 16-34 14-44-4-12 16-40 6-48-12-16 8-42-8-50-42z"
      />
      <path
        {...p('cloud')}
        d="M468 86c8-22 42-28 58-8 12-20 48-16 58 10 20-8 38 16 26 32 14 8 6 28-12 30-6 16-36 14-46-2-12 14-40 6-48-12-16 8-40-8-36-50z"
      />

      <g {...p('halo')}>
        <circle cx="228" cy="232" r="96" />
        <circle cx="412" cy="232" r="96" />
      </g>
      <g {...detail}>
        <path d="M228 130v-22M158 168l-24-18M298 168l24-18M412 130v-22M342 168l-24-18M482 168l24-18" />
      </g>

      <g {...p('robe')}>
        <path d="M118 390C102 300 148 232 228 224C286 230 318 278 328 348C300 372 210 392 118 390Z" />
        <path d="M132 410C168 372 198 360 228 360C258 360 292 376 318 410C328 480 332 570 328 655H122C118 560 122 470 132 410Z" />
        <path d="M312 348C322 278 354 230 412 224C492 232 538 300 522 390C430 392 340 372 312 348Z" />
        <path d="M322 410C348 376 382 360 412 360C442 360 472 372 508 410C518 470 522 560 518 655H312C308 570 312 480 322 410Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M128 368C98 420 88 520 96 655H188C176 530 178 450 198 412C172 392 144 376 128 368Z" />
        <path d="M512 368C542 420 552 520 544 655H452C464 530 462 450 442 412C468 392 496 376 512 368Z" />
      </g>

      <g {...p('accent')}>
        <path d="M218 348h20v14h-20z" />
        <path d="M402 348h20v14h-20z" />
        <path d="M168 548h120l8 22H160z" />
        <path d="M352 548h120l8 22H344z" />
      </g>

      <g {...p('hair')}>
        <path d="M168 216C156 158 188 138 228 136C268 138 300 158 288 216v36H168z" />
        <path d="M176 190c10-16 24-8 22 8M228 168c8-16 24-12 24 4M276 190c-10-16-24-8-22 8" />
        <path d="M352 216C340 158 372 138 412 136C452 138 484 158 472 216v36H352z" />
        <path d="M360 190c10-16 24-8 22 8M412 168c8-16 24-12 24 4M460 190c-10-16-24-8-22 8" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="228" cy="248" rx="54" ry="64" />
        <path d="M198 306l-6 28h72l-6-28z" />
        <ellipse cx="412" cy="248" rx="54" ry="64" />
        <path d="M382 306l-6 28h72l-6-28z" />
      </g>

      <g {...p('hair')}>
        <path d="M182 288C176 322 192 354 228 364C264 354 280 322 274 288C258 308 238 316 228 316C218 316 198 308 182 288Z" />
        <path d="M366 288C360 322 376 354 412 364C448 354 464 322 458 288C442 308 422 316 412 316C402 316 382 308 366 288Z" />
      </g>

      <g {...p('symbol')}>
        {herb(72, 560)}
        {herb(112, 588)}
        {herb(528, 560)}
        {herb(568, 588)}
        <path d="M248 500h144v92H248z" />
        <path d="M260 512h120v20H260z" />
        <path d="M268 548h40v28h-40z" />
        <path d="M332 548h40v28h-40z" />
        <circle cx="288" cy="562" r="8" />
        <path d="M288 552v20M278 562h20" />
        <circle cx="352" cy="562" r="8" />
        <path d="M352 552v20M342 562h20" />
        <path d="M200 430v36h22v-36z" />
        <path d="M211 422v8M204 438h14" />
        <path d="M418 430v36h22v-36z" />
        <path d="M429 422v8M422 438h14" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="86" cy="470" rx="16" ry="14" />
        <ellipse cx="70" cy="456" rx="6" ry="14" transform="rotate(-36 70 456)" />
        <ellipse cx="80" cy="442" rx="6" ry="15" />
        <ellipse cx="92" cy="440" rx="6" ry="16" />
        <ellipse cx="104" cy="446" rx="5" ry="14" transform="rotate(16 104 446)" />
        <ellipse cx="112" cy="458" rx="5" ry="12" transform="rotate(28 112 458)" />

        <ellipse cx="554" cy="470" rx="16" ry="14" />
        <ellipse cx="570" cy="456" rx="6" ry="14" transform="rotate(36 570 456)" />
        <ellipse cx="560" cy="442" rx="6" ry="15" />
        <ellipse cx="548" cy="440" rx="6" ry="16" />
        <ellipse cx="536" cy="446" rx="5" ry="14" transform="rotate(-16 536 446)" />
        <ellipse cx="528" cy="458" rx="5" ry="12" transform="rotate(-28 528 458)" />
      </g>

      <g {...detail}>
        <path d="M178 226c12-8 28-8 38 2" />
        <path d="M240 228c12-8 28-8 38 2" />
        <path d="M180 246c14-14 32-14 44 0-12 10-30 10-44 0z" />
        <path d="M232 246c14-14 32-14 44 0-12 10-30 10-44 0z" />
        <path d="M220 258v16l-8 5" />
        <path d="M210 286c10 8 22 8 32 0" />
        <path d="M172 214c6 14 4 32 0 46M284 214c-6 14-4 32 0 46" />

        <path d="M362 226c12-8 28-8 38 2" />
        <path d="M424 228c12-8 28-8 38 2" />
        <path d="M364 246c14-14 32-14 44 0-12 10-30 10-44 0z" />
        <path d="M416 246c14-14 32-14 44 0-12 10-30 10-44 0z" />
        <path d="M404 258v16l-8 5" />
        <path d="M394 286c10 8 22 8 32 0" />
        <path d="M356 214c6 14 4 32 0 46M468 214c-6 14-4 32 0 46" />

        <path d="M168 470c12 28 10 80 6 160M472 470c-12 28-10 80-6 160" />
        <path d="M188 600v55M228 588v67M412 588v67M452 600v55" />
      </g>
      <g {...ink}>
        <ellipse cx="204" cy="246" rx="6" ry="7" />
        <ellipse cx="252" cy="246" rx="6" ry="7" />
        <circle cx="206" cy="243" r="1.8" fill={PAPER} />
        <circle cx="254" cy="243" r="1.8" fill={PAPER} />
        <ellipse cx="388" cy="246" rx="6" ry="7" />
        <ellipse cx="436" cy="246" rx="6" ry="7" />
        <circle cx="390" cy="243" r="1.8" fill={PAPER} />
        <circle cx="438" cy="243" r="1.8" fill={PAPER} />
      </g>
    </>
  );
}
