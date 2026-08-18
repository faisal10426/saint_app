import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function fleur(cx: number, cy: number, s: number) {
  return (
    <g>
      <path d={`M${cx} ${cy + s}C${cx - s * 0.2} ${cy + s * 0.2} ${cx - s * 0.7} ${cy + s * 0.1} ${cx - s * 0.55} ${cy - s * 0.15}C${cx - s * 0.9} ${cy - s * 0.55} ${cx - s * 0.15} ${cy - s * 0.7} ${cx} ${cy - s}C${cx + s * 0.15} ${cy - s * 0.7} ${cx + s * 0.9} ${cy - s * 0.55} ${cx + s * 0.55} ${cy - s * 0.15}C${cx + s * 0.7} ${cy + s * 0.1} ${cx + s * 0.2} ${cy + s * 0.2} ${cx} ${cy + s}Z`} />
      <path d={`M${cx - s * 0.85} ${cy + s * 0.15}C${cx - s * 1.1} ${cy - s * 0.35} ${cx - s * 0.35} ${cy - s * 0.2} ${cx - s * 0.2} ${cy + s * 0.05}`} />
      <path d={`M${cx + s * 0.85} ${cy + s * 0.15}C${cx + s * 1.1} ${cy - s * 0.35} ${cx + s * 0.35} ${cy - s * 0.2} ${cx + s * 0.2} ${cy + s * 0.05}`} />
      <path d={`M${cx - s * 0.55} ${cy + s * 0.55}h${s * 1.1}`} />
    </g>
  );
}

export default function JoanOfArc({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M40 160c8-32 46-42 72-14 16-28 62-22 74 10 26-12 54 14 42 38 22 8 14 38-12 40-8 22-48 20-60-4-18 18-52 8-62-14-22 8-56-10-54-56z"
      />
      <path
        {...paperShape}
        d="M456 70c8-20 44-24 60-2 12-18 50-14 58 12 22-8 40 18 28 34 14 8 8 28-12 30-6 16-38 14-48-4-12 14-42 6-50-12-16 6-42-10-36-58z"
      />
      <path {...paperShape} d="M8 655C70 580 160 590 230 648C140 652 60 656 8 655Z" />
      <path {...paperShape} d="M632 655C560 575 450 585 370 648C470 654 560 656 632 655Z" />

      <g {...p('halo')}>
        <circle cx="300" cy="232" r="108" />
      </g>
      <g {...detail}>
        <path d="M300 118v-28M210 152l-30-24M390 152l30-24M186 232h-36M414 232h36M232 134l-24-32M368 134l24-32" />
      </g>

      <g {...p('symbol')}>
        <path d="M488 655v-430" />
        <path d="M488 218l118-36v168l-118 28z" />
        {fleur(548, 248, 18)}
        {fleur(548, 300, 14)}
        {fleur(548, 344, 12)}
        <path d="M128 620v-220" />
        <path d="M100 408l28-36 28 36v24H100z" />
        <path d="M110 432h36" />
      </g>

      <g {...p('robe')}>
        <path d="M228 378C256 348 278 338 300 338C322 338 344 348 372 378L392 530 300 562 208 530Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M218 368C178 400 162 480 172 575H238C234 490 238 430 262 398Z" />
        <path d="M382 368C430 408 454 500 460 655H372C380 540 376 450 350 400Z" />
      </g>
      <g {...p('accent')}>
        <path d="M278 400h44v78H278z" />
        <path d="M288 418h24M288 438h24M288 458h24" />
        <path d="M220 512h160l8 28H212z" />
        <path d="M256 368l44-18 44 18v16l-44 14-44-14z" />
        <circle cx="300" cy="382" r="8" />
      </g>

      <g {...p('hair')}>
        <path d="M226 224C218 162 258 138 300 138C342 138 382 162 374 224C366 208 336 198 300 200C264 198 234 208 226 224Z" />
        <path d="M224 236C214 280 222 330 240 368C256 350 262 310 258 274C252 250 238 238 224 236Z" />
        <path d="M376 236C386 280 378 330 360 368C344 350 338 310 342 274C348 250 362 238 376 236Z" />
        <path d="M240 188c10-16 24-8 22 6M300 160c8-16 24-10 26 4M360 188c-10-16-24-8-22 6" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="300" cy="248" rx="66" ry="78" />
        <path d="M260 318l-8 34h96l-8-34z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="128" cy="412" rx="18" ry="16" />
        <ellipse cx="110" cy="396" rx="7" ry="16" transform="rotate(-32 110 396)" />
        <ellipse cx="122" cy="382" rx="6" ry="18" />
        <ellipse cx="134" cy="384" rx="6" ry="16" />
        <ellipse cx="146" cy="394" rx="6" ry="14" transform="rotate(16 146 394)" />
        <ellipse cx="488" cy="248" rx="16" ry="14" />
        <ellipse cx="506" cy="234" rx="7" ry="14" transform="rotate(22 506 234)" />
        <ellipse cx="494" cy="220" rx="6" ry="16" />
        <ellipse cx="482" cy="222" rx="6" ry="14" />
        <ellipse cx="472" cy="230" rx="5" ry="12" transform="rotate(-14 472 230)" />
      </g>

      <g {...detail}>
        <path d="M238 222c14-10 36-10 48 2" />
        <path d="M314 224c14-10 36-10 48 2" />
        <path d="M242 246c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M304 246c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M292 260v18l-10 5" />
        <path d="M278 298c14 10 28 10 42 0" />
        <path d="M230 208c8 16 6 36 0 52M370 208c-8 16-6 36 0 52" />
        <path d="M240 390v140M300 382v156M360 390v140" />
        <path d="M188 460c14 28 12 80 6 140M412 460c-14 28-12 80-6 140" />
      </g>
      <g {...ink}>
        <ellipse cx="270" cy="246" rx="7" ry="8" />
        <ellipse cx="330" cy="246" rx="7" ry="8" />
        <circle cx="273" cy="243" r="2.1" fill={PAPER} />
        <circle cx="333" cy="243" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
