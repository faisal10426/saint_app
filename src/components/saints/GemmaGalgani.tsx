import { PAPER, STROKE, ink, type PortraitProps } from './types';

function lily(cx: number, cy: number) {
  return (
    <g>
      <path d={`M${cx} ${cy + 48}c-4-22 0-40 0-48`} />
      <ellipse cx={cx - 10} cy={cy} rx="8" ry="20" transform={`rotate(-22 ${cx - 10} ${cy})`} />
      <ellipse cx={cx + 10} cy={cy} rx="8" ry="20" transform={`rotate(22 ${cx + 10} ${cy})`} />
      <ellipse cx={cx} cy={cy - 8} rx="7" ry="22" />
      <circle cx={cx} cy={cy + 8} r="3" />
    </g>
  );
}

function passionFlower(cx: number, cy: number) {
  const petals = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    const x = cx + Math.cos(a) * 16;
    const y = cy + Math.sin(a) * 16;
    return <ellipse key={i} cx={x} cy={y} rx="7" ry="11" transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />;
  });
  return (
    <g>
      {petals}
      <circle cx={cx} cy={cy} r="8" />
      <circle cx={cx} cy={cy} r="3" />
    </g>
  );
}

export default function GemmaGalgani({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M40 186c6-32 44-44 70-18 16-28 60-24 74 8 26-14 54 12 42 38 22 8 14 38-12 40-8 22-48 22-60-2-18 20-52 10-62-14-22 10-56-8-52-52z"
      />
      <path
        {...p('cloud')}
        d="M448 82c8-22 42-28 58-8 12-20 48-16 58 10 20-8 38 16 26 32 14 8 6 28-12 30-6 16-36 14-46-2-12 14-40 8-48-10-16 8-40-8-36-52z"
      />

      <g {...p('wings')}>
        <path d="M78 118C28 88 18 148 52 198c18 28 52 36 78 4-36 0-62-32-52-84z" />
        <path d="M148 118c50-30 60 30 26 80-18 28-52 36-78 4 36 0 62-32 52-84z" />
      </g>
      <g {...p('symbol')}>
        <ellipse cx="112" cy="148" rx="18" ry="22" />
        <path d="M102 172c6 10 14 10 20 0" />
        <path d="M96 142c6-4 10-4 14 0M114 142c6-4 10-4 14 0" />
        <circle cx="104" cy="148" r="2" fill={STROKE} />
        <circle cx="120" cy="148" r="2" fill={STROKE} />
        {lily(86, 560)}
        {lily(128, 590)}
        {lily(552, 548)}
        {passionFlower(86, 430)}
        {passionFlower(554, 418)}
      </g>
      <g {...p('halo')}>
        <circle cx="112" cy="148" r="36" />
        <circle cx="320" cy="236" r="124" />
      </g>
      <g {...detail}>
        <path d="M320 106v-28M220 150l-34-26M420 150l34-26M190 236h-38M450 236h38M246 128l-28-34M394 128l28-34" />
      </g>

      <g {...p('robe')}>
        <path d="M222 372C202 255 248 172 320 164C392 172 438 255 418 372C376 396 264 396 222 372Z" />
        <path d="M246 424C272 400 294 390 320 390C346 390 368 400 394 424L418 655H222Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M210 388C158 440 142 530 152 655H258C242 545 240 460 264 418C240 404 220 394 210 388Z" />
      </g>

      <g {...p('accent')}>
        <path d="M286 228C276 250 274 284 282 320C296 314 308 312 320 312C332 312 344 314 358 320C366 284 364 250 354 228C340 212 300 212 286 228Z" />
        <path d="M292 348h56v16H292z" />
        <path d="M248 548h144l10 26H238z" />
      </g>

      <g {...p('hair')}>
        <path d="M234 220C218 158 268 132 320 130C372 132 422 158 406 220C398 200 360 188 320 188C280 188 242 200 234 220Z" />
        <path d="M236 236C218 280 222 340 236 400C252 372 258 320 262 276C254 256 244 242 236 236Z" />
        <path d="M404 236C422 280 418 340 404 400C388 372 382 320 378 276C386 256 396 242 404 236Z" />
        <path d="M248 188c12-20 28-8 26 8M320 160c10-20 28-14 28 4M392 188c-12-20-28-8-26 8" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="258" rx="70" ry="82" />
        <path d="M278 334l-8 36h100l-8-36z" />
      </g>

      <g {...p('symbol')}>
        <path d="M400 430v168" />
        <path d="M372 456h56" />
        <path d="M392 430h16v12h-16z" />
        <path d="M406 492c-8 16 4 34 12 46 6-14 16-28 8-46 4 8 2 20-8 26" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="308" cy="520" rx="12" ry="32" transform="rotate(-8 308 520)" />
        <ellipse cx="322" cy="514" rx="11" ry="34" />
        <ellipse cx="336" cy="516" rx="11" ry="32" transform="rotate(6 336 516)" />
        <ellipse cx="350" cy="528" rx="10" ry="28" transform="rotate(14 350 528)" />
        <ellipse cx="384" cy="548" rx="16" ry="14" />
        <ellipse cx="398" cy="534" rx="7" ry="16" transform="rotate(18 398 534)" />
        <ellipse cx="376" cy="530" rx="6" ry="16" />
        <ellipse cx="366" cy="536" rx="6" ry="14" />
      </g>

      <g {...detail}>
        <path d="M256 232c16-12 38-12 50 2" />
        <path d="M334 234c16-12 38-12 50 2" />
        <path d="M260 256c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M324 256c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M312 270v20l-10 6" />
        <path d="M298 308c14 10 28 10 42 0" />
        <path d="M248 218c8 16 6 38 2 56M392 218c-8 16-6 38-2 56" />
        <path d="M258 430v210M320 418v222M382 430v210" />
        <path d="M168 470c20 34 22 90 12 160" />
      </g>
      <g {...ink}>
        <ellipse cx="288" cy="256" rx="7" ry="8" />
        <ellipse cx="352" cy="256" rx="7" ry="8" />
        <circle cx="291" cy="253" r="2.1" fill={PAPER} />
        <circle cx="355" cy="253" r="2.1" fill={PAPER} />
        <text x="400" y="440" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={STROKE}>
          INRI
        </text>
      </g>
    </>
  );
}
