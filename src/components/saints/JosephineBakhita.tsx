import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function bloom(cx: number, cy: number) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx="10" ry="16" />
      <ellipse cx={cx - 12} cy={cy + 2} rx="8" ry="14" transform={`rotate(-40 ${cx - 12} ${cy + 2})`} />
      <ellipse cx={cx + 12} cy={cy + 2} rx="8" ry="14" transform={`rotate(40 ${cx + 12} ${cy + 2})`} />
      <circle cx={cx} cy={cy + 4} r="4" />
    </g>
  );
}

export default function JosephineBakhita({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M32 530c8-24 42-28 58-6 14-20 50-16 60 10 20-8 36 16 24 32 12 8 6 26-14 28-6 16-36 14-46-2-12 14-40 6-48-10-16 8-40-6-34-52z"
      />
      <path
        {...paperShape}
        d="M468 96c8-20 42-24 56-4 12-18 46-14 54 10 20-6 36 18 24 32 12 6 6 28-12 28-6 16-36 16-46-2-12 14-40 6-48-12-14 6-40-8-32-52z"
      />

      <g {...p('halo')}>
        <circle cx="324" cy="246" r="118" />
      </g>
      <g {...detail}>
        <path d="M324 122v-28M226 162l-34-26M422 162l34-26M200 246h-38M448 246h38M248 138l-28-34M400 138l28-34" />
      </g>

      <g {...p('symbol')}>
        {bloom(70, 430)}
        {bloom(108, 470)}
        {bloom(52, 490)}
        {bloom(550, 430)}
        {bloom(580, 470)}
        {bloom(530, 490)}
      </g>

      <g {...p('robe')}>
        <path d="M214 412C242 370 282 352 324 352C366 352 406 370 434 412L456 655H192Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M202 396C180 336 232 304 286 320C306 330 342 330 362 320C416 304 468 336 446 396C418 376 324 364 202 396Z" />
        <path d="M194 404C144 464 132 548 144 655H272C256 548 254 468 276 428C248 412 214 406 194 404Z" />
        <path d="M454 404C504 464 516 548 504 655H376C392 548 394 468 372 428C400 412 434 406 454 404Z" />
      </g>
      <g {...p('accent')}>
        <path d="M264 224C252 246 250 280 256 318C276 312 300 308 324 308C348 308 372 312 392 318C398 280 396 246 384 224C366 204 282 204 264 224Z" />
        <path d="M270 318C290 340 358 340 378 318C362 354 286 354 270 318Z" />
        <path d="M248 548C268 536 380 536 400 548L408 570H240z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="324" cy="266" rx="66" ry="78" />
        <path d="M282 338l-8 34h96l-8-34z" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="118" cy="500" rx="10" ry="8" />
        <ellipse cx="138" cy="500" rx="10" ry="8" />
        <ellipse cx="158" cy="500" rx="10" ry="8" />
        <path d="M108 500h70" />
        <path d="M118 492v16M138 492v16M158 492v16" />
        <path d="M100 488l-16-12M96 512l-16 12" />
        <ellipse cx="490" cy="500" rx="10" ry="8" />
        <ellipse cx="510" cy="500" rx="10" ry="8" />
        <ellipse cx="530" cy="500" rx="10" ry="8" />
        <path d="M480 500h70" />
        <path d="M490 492v16M510 492v16M530 492v16" />
        <path d="M548 488l16-12M552 512l16 12" />
        <path d="M324 390v48" />
        <path d="M308 406h32" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="148" cy="528" rx="16" ry="14" />
        <ellipse cx="132" cy="514" rx="6" ry="16" transform="rotate(-24 132 514)" />
        <ellipse cx="144" cy="500" rx="6" ry="16" />
        <ellipse cx="156" cy="502" rx="6" ry="15" />
        <ellipse cx="166" cy="512" rx="5" ry="13" transform="rotate(14 166 512)" />
        <ellipse cx="500" cy="528" rx="16" ry="14" />
        <ellipse cx="516" cy="514" rx="6" ry="16" transform="rotate(24 516 514)" />
        <ellipse cx="504" cy="500" rx="6" ry="16" />
        <ellipse cx="492" cy="502" rx="6" ry="15" />
        <ellipse cx="482" cy="512" rx="5" ry="13" transform="rotate(-14 482 512)" />
      </g>

      <g {...detail}>
        <path d="M264 240c14-10 34-10 46 2" />
        <path d="M338 242c14-10 34-10 46 2" />
        <path d="M268 264c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M326 264c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M314 278v20l-10 5" />
        <path d="M300 316c14 12 30 12 44 4" />
        <path d="M266 226c8 16 6 38 0 54M382 226c-8 16-6 38 0 54" />
        <path d="M244 430v210M324 418v222M404 430v210" />
        <path d="M174 470c16 30 14 88 6 156M474 470c-16 30-14 88-6 156" />
      </g>
      <g {...ink}>
        <ellipse cx="294" cy="264" rx="7" ry="8" />
        <ellipse cx="354" cy="264" rx="7" ry="8" />
        <circle cx="297" cy="261" r="2.1" fill={PAPER} />
        <circle cx="357" cy="261" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
