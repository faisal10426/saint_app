import { PAPER, ink, type PortraitProps } from './types';

function starPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.4;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');
}

export default function MaryMotherOfGod({ p, detail }: PortraitProps) {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = ((-200 + i * 20) * Math.PI) / 180;
    return {
      cx: 320 + 142 * Math.cos(angle),
      cy: 258 + 142 * Math.sin(angle),
    };
  });
  return (
    <>
      <g {...p('cloud')}>
        <path d="M48 200c4-32 42-46 68-22 16-30 62-28 76 6 28-14 56 10 46 36 22 8 16 40-12 42-8 24-50 24-62 0-18 20-54 12-64-12-22 10-56-8-52-50z" />
        <path d="M438 88c8-22 42-28 58-8 12-20 48-18 58 8 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 18-48 0-12 16-42 10-50-10-16 8-42-8-34-54z" />
        <path d="M40 520c6-24 40-30 58-8 14-22 50-18 60 10 20-8 36 16 24 32 12 8 6 28-14 30-6 16-36 16-46-2-12 14-40 8-48-10-16 8-40-6-34-52z" />
      </g>

      <g {...p('halo')}>
        <circle cx="320" cy="258" r="138" />
      </g>
      <g {...detail}>
        <path d="M320 114v-40M208 158l-40-34M432 158l40-34M186 258h-48M454 258h48M232 138l-34-44M408 138l34-44" />
      </g>

      <g {...p('symbol')}>
        {stars.map((star, index) => (
          <polygon key={index} points={starPoints(star.cx, star.cy, 14)} />
        ))}
      </g>

      <g {...p('mantle')}>
        <path d="M198 378C174 255 222 158 320 150C418 158 466 255 442 378C400 398 240 398 198 378Z" />
        <path d="M198 378C138 430 118 530 132 655L248 655C228 545 222 455 248 412C228 398 210 386 198 378Z" />
        <path d="M442 378C502 430 522 530 508 655L392 655C412 545 418 455 392 412C412 398 430 386 442 378Z" />
      </g>

      <g {...p('accent')}>
        <path
          fillRule="evenodd"
          d="M206 372C184 258 230 164 320 156C410 164 456 258 434 372C396 388 244 388 206 372ZM228 360C212 262 250 184 320 178C390 184 428 262 412 360C380 372 260 372 228 360Z"
        />
      </g>

      <g {...p('robe')}>
        <path d="M222 370C202 262 246 176 320 170C394 176 438 262 418 370C378 392 262 392 222 370Z" />
        <path d="M248 418C272 396 294 388 320 388C346 388 368 396 392 418L418 655H222Z" />
      </g>

      <g {...p('hair')}>
        <path d="M238 228C214 248 206 292 216 338C224 356 244 352 250 334C258 300 254 262 262 238C256 220 246 216 238 228Z" />
        <path d="M402 228C426 248 434 292 424 338C416 356 396 352 390 334C382 300 386 262 378 238C384 220 394 216 402 228Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="278" rx="78" ry="92" />
        <path d="M270 362l-12 46h104l-12-46z" />
        <ellipse cx="258" cy="498" rx="11" ry="30" transform="rotate(-18 258 498)" />
        <ellipse cx="276" cy="480" rx="12" ry="34" transform="rotate(-10 276 480)" />
        <ellipse cx="296" cy="470" rx="12" ry="38" transform="rotate(-4 296 470)" />
        <ellipse cx="314" cy="468" rx="11" ry="36" />
        <ellipse cx="326" cy="468" rx="11" ry="36" />
        <ellipse cx="344" cy="470" rx="12" ry="38" transform="rotate(4 344 470)" />
        <ellipse cx="364" cy="480" rx="12" ry="34" transform="rotate(10 364 480)" />
        <ellipse cx="382" cy="498" rx="11" ry="30" transform="rotate(18 382 498)" />
        <path d="M266 518C260 548 276 582 318 590L320 516C294 512 272 512 266 518Z" />
        <path d="M374 518C380 548 364 582 322 590L320 516C346 512 368 512 374 518Z" />
      </g>

      <g {...p('accent')}>
        <path d="M262 384C290 404 350 404 378 384L386 408C358 426 282 426 254 408Z" />
        <path d="M228 598h184l12 38H216z" />
        <path d="M268 578c8 10 18 14 28 14 2-8 4-16 4-22h-24z" />
        <path d="M372 578c-8 10-18 14-28 14-2-8-4-16-4-22h24z" />
      </g>

      <g {...detail}>
        <path d="M248 250c16-12 40-12 52 2" />
        <path d="M340 252c16-12 40-12 52 2" />
        <path d="M252 276c20-22 50-22 68 0-18 15-48 15-68 0z" />
        <path d="M320 276c20-22 50-22 68 0-18 15-48 15-68 0z" />
        <path d="M310 290v24l-12 6" />
        <path d="M296 334c16 12 32 12 48 0" />
        <path d="M248 226c10 20 8 44 2 64M392 226c-10 20-8 44-2 64" />
        <path d="M320 520v58" />
        <path d="M168 470c24 40 28 90 16 160M472 470c-24 40-28 90-16 160" />
        <path d="M252 648v7M320 638v17M388 648v7" />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy="276" rx="8" ry="9" />
        <ellipse cx="354" cy="276" rx="8" ry="9" />
        <circle cx="289" cy="273" r="2.4" fill={PAPER} />
        <circle cx="357" cy="273" r="2.4" fill={PAPER} />
      </g>
    </>
  );
}
