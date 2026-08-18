import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function heart(cx: number, cy: number, s: number) {
  return (
    <path d={`M${cx} ${cy + s * 0.9}C${cx - s} ${cy + s * 0.15} ${cx - s} ${cy - s * 0.55} ${cx - s * 0.35} ${cy - s * 0.55}C${cx - s * 0.05} ${cy - s * 0.55} ${cx} ${cy - s * 0.15} ${cx} ${cy - s * 0.15}C${cx} ${cy - s * 0.15} ${cx + s * 0.05} ${cy - s * 0.55} ${cx + s * 0.35} ${cy - s * 0.55}C${cx + s} ${cy - s * 0.55} ${cx + s} ${cy + s * 0.15} ${cx} ${cy + s * 0.9}Z`} />
  );
}

function blossom(cx: number, cy: number) {
  return (
    <g>
      <ellipse cx={cx} cy={cy - 10} rx="7" ry="10" />
      <ellipse cx={cx - 9} cy={cy + 2} rx="7" ry="10" transform={`rotate(-55 ${cx - 9} ${cy + 2})`} />
      <ellipse cx={cx + 9} cy={cy + 2} rx="7" ry="10" transform={`rotate(55 ${cx + 9} ${cy + 2})`} />
      <circle cx={cx} cy={cy} r="5" />
    </g>
  );
}

export default function Valentine({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M48 190c4-32 42-46 68-22 16-30 62-28 76 6 28-14 56 10 46 36 22 8 16 40-12 42-8 24-50 24-62 0-18 20-54 12-64-12-22 10-56-8-52-50z"
      />
      <path
        {...paperShape}
        d="M438 88c8-22 42-28 58-8 12-20 48-18 58 8 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 18-48 0-12 16-42 10-50-10-16 8-42-8-34-54z"
      />
      <path
        {...paperShape}
        d="M40 520c6-24 40-30 58-8 14-22 50-18 60 10 20-8 36 16 24 32 12 8 6 28-14 30-6 16-36 16-46-2-12 14-40 8-48-10-16 8-40-6-34-52z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="248" r="116" />
      </g>
      <g {...detail}>
        <path d="M320 126v-28M216 166l-34-26M424 166l34-26M198 248h-40M442 248h40M244 146l-28-34M396 146l28-34" />
      </g>

      <g {...p('symbol')}>
        {heart(86, 430, 22)}
        {heart(554, 418, 20)}
        {heart(70, 520, 14)}
        {heart(574, 508, 14)}
        {blossom(108, 600)}
        {blossom(148, 628)}
        {blossom(532, 598)}
        {blossom(572, 626)}
        <ellipse cx="500" cy="168" rx="22" ry="14" />
        <ellipse cx="518" cy="156" rx="12" ry="10" />
        <path d="M480 170C462 154 458 176 480 178" />
        <path d="M498 158C490 136 522 132 516 160" />
        <path d="M528 152l12 4-12 6z" />
      </g>

      <g {...p('robe')}>
        <path d="M230 400C260 368 290 354 320 354C350 354 380 368 410 400L432 655H208Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M210 388C190 338 234 308 282 324C308 334 332 334 358 324C406 308 450 338 430 388C404 366 320 358 210 388Z" />
        <path d="M204 394C158 444 144 534 156 655H258C244 540 240 458 262 420C238 406 216 396 204 394Z" />
        <path d="M436 394C482 444 496 534 484 655H382C396 540 400 458 378 420C402 406 424 396 436 394Z" />
      </g>
      <g {...p('accent')}>
        <path d="M248 360C268 348 372 348 392 360L400 390C372 408 268 408 240 390Z" />
        <path d="M304 366h32v14H304z" />
        {heart(320, 500, 18)}
      </g>

      <g {...p('hair')}>
        <path d="M234 232C222 170 266 144 320 144C374 144 418 170 406 232v48H234z" />
        <path d="M246 200c14-20 32-8 30 10M320 168c10-20 30-14 32 6M394 200c-14-20-32-8-30 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="266" rx="72" ry="84" />
        <path d="M276 342l-8 36h104l-8-36z" />
      </g>

      <g {...p('hair')}>
        <path d="M254 316C248 350 262 384 320 394C378 384 392 350 386 316C364 336 342 346 320 346C298 346 276 336 254 316Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M268 70l52-42 52 42v86H268z" />
        <path d="M282 90h76v12H282z" />
        {heart(320, 118, 12)}
        <path d="M168 470C148 430 178 400 210 418C196 448 180 470 186 496C170 490 166 478 168 470Z" />
        {heart(190, 448, 16)}
        <path d="M448 448h78v56H448z" />
        <path d="M460 448l54-18 54 18" />
        <path d="M462 466h50M462 482h50M462 498h36" />
        {heart(486, 430, 10)}
      </g>

      <g {...p('skin')}>
        <ellipse cx="168" cy="508" rx="18" ry="16" />
        <ellipse cx="150" cy="492" rx="7" ry="16" transform="rotate(-30 150 492)" />
        <ellipse cx="162" cy="478" rx="6" ry="18" />
        <ellipse cx="174" cy="480" rx="6" ry="16" />
        <ellipse cx="186" cy="490" rx="6" ry="14" transform="rotate(16 186 490)" />
        <ellipse cx="486" cy="520" rx="16" ry="14" />
        <ellipse cx="504" cy="506" rx="7" ry="14" transform="rotate(22 504 506)" />
        <ellipse cx="492" cy="492" rx="6" ry="16" />
        <ellipse cx="480" cy="494" rx="6" ry="14" />
        <ellipse cx="470" cy="502" rx="5" ry="12" transform="rotate(-12 470 502)" />
      </g>

      <g {...detail}>
        <path d="M252 240c16-12 38-12 50 2" />
        <path d="M338 242c16-12 38-12 50 2" />
        <path d="M256 266c16-18 44-18 58 0-14 13-42 13-58 0z" />
        <path d="M324 266c16-18 44-18 58 0-14 13-42 13-58 0z" />
        <path d="M312 280v20l-10 6" />
        <path d="M298 320c14 10 28 10 42 0" />
        <path d="M242 226c10 18 8 40 2 58M398 226c-10 18-8 40-2 58" />
        <path d="M248 430v210M320 418v222M392 430v210" />
        <path d="M168 470c18 36 16 90 8 160M472 470c-18 36-16 90-8 160" />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy="266" rx="7.5" ry="8.5" />
        <ellipse cx="354" cy="266" rx="7.5" ry="8.5" />
        <circle cx="289" cy="263" r="2.2" fill={PAPER} />
        <circle cx="357" cy="263" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
