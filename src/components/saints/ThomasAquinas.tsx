import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function sunburst(cx: number, cy: number, outer: number, inner: number, n: number) {
  return Array.from({ length: n * 2 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = -Math.PI / 2 + (i * Math.PI) / n;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
}

export default function ThomasAquinas({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M38 172c12-36 54-44 80-12 18-30 68-20 76 14 28-16 56 16 42 42 22 8 10 40-16 40-10 24-54 20-62-6-16 20-56 8-66-16-24 12-62-10-54-62z"
      />
      <path
        {...paperShape}
        d="M444 52c10-24 46-28 62-4 14-20 52-14 60 12 22-8 42 20 26 36 16 8 6 32-14 32-6 18-40 16-48-2-14 16-44 8-52-12-16 8-44-12-34-62z"
      />
      <path
        {...paperShape}
        d="M20 528c8-28 44-34 64-6 16-24 54-16 64 12 22-8 38 18 24 36 14 8 4 30-16 30-6 16-38 14-46-4-12 16-42 6-50-12-16 8-42-8-40-56z"
      />
      <path
        {...paperShape}
        d="M456 536c8-26 44-32 64-6 16-22 54-14 64 12 20-8 38 18 24 34 14 8 4 28-16 28-6 16-36 14-44-4-12 16-42 6-50-12-16 8-42-8-42-52z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="238" r="122" />
      </g>
      <g {...detail}>
        <path d="M320 110v-34M216 150l-38-30M424 150l38-30M190 238h-42M450 238h42M240 128l-32-38M400 128l32-38" />
      </g>

      <g {...p('robe')}>
        <path d="M252 408C274 376 296 360 320 360C344 360 366 376 388 408L410 655H230Z" />
      </g>
      <g {...detail}>
        <path d="M272 430v210M296 418v222M320 412v228M344 418v222M368 430v210" />
      </g>

      <g {...p('mantle')}>
        <path d="M206 396C184 350 228 318 276 336C304 348 336 348 364 336C412 318 456 350 434 396C408 376 320 366 206 396Z" />
        <path d="M206 396C154 444 134 528 146 610H240C228 528 230 458 252 420C228 410 212 400 206 396Z" />
        <path d="M434 396C486 444 506 528 494 610H400C412 528 410 458 388 420C412 410 428 400 434 396Z" />
        <path d="M274 342C260 320 278 298 304 306C314 322 326 322 336 306C362 298 380 320 366 342C350 330 320 326 274 342Z" />
      </g>

      <g {...p('accent')}>
        <polygon points={sunburst(320, 456, 38, 16, 12)} />
        <circle cx="320" cy="456" r="14" />
      </g>

      <g {...p('hair')}>
        <path d="M244 214C228 164 268 136 320 134C372 136 412 164 396 214C384 194 356 180 320 180C284 180 256 194 244 214Z" />
        <path d="M244 214C232 248 240 292 256 322C246 286 244 246 256 218C250 214 244 210 244 214Z" />
        <path d="M396 214C408 248 400 292 384 322C394 286 396 246 384 218C390 214 396 210 396 214Z" />
      </g>

      <g {...p('skin')}>
        <circle cx="320" cy="168" r="40" />
        <ellipse cx="320" cy="258" rx="70" ry="84" />
        <path d="M276 336l-8 38h104l-8-38z" />
      </g>

      <g {...p('symbol')}>
        <path d="M168 248l18 28 8-32 10 34 16-24" />
        <path d="M176 268v-86" />
        <path d="M168 198C158 176 176 158 190 172C198 158 216 164 210 182C222 176 228 194 214 200C206 188 188 186 176 198Z" />
        <path d="M400 470h102v128H400z" />
        <path d="M410 478h82v112H410z" />
        <path d="M404 486h94M404 510h94M404 534h94" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="188" cy="292" rx="18" ry="16" />
        <ellipse cx="170" cy="282" rx="7" ry="16" transform="rotate(-36 170 282)" />
        <ellipse cx="182" cy="266" rx="6" ry="18" />
        <ellipse cx="196" cy="268" rx="6" ry="17" />
        <ellipse cx="208" cy="278" rx="6" ry="15" transform="rotate(16 208 278)" />
        <ellipse cx="216" cy="290" rx="5" ry="13" transform="rotate(28 216 290)" />
        <ellipse cx="452" cy="606" rx="18" ry="15" />
        <ellipse cx="470" cy="592" rx="7" ry="16" transform="rotate(20 470 592)" />
        <ellipse cx="458" cy="578" rx="6" ry="17" />
        <ellipse cx="444" cy="580" rx="6" ry="16" />
        <ellipse cx="434" cy="590" rx="6" ry="14" transform="rotate(-14 434 590)" />
      </g>

      <g {...detail}>
        <path d="M254 232c16-12 40-12 52 2" />
        <path d="M334 234c16-12 40-12 52 2" />
        <path d="M258 256c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M320 256c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M312 270v22l-11 6" />
        <path d="M298 312c14 11 30 11 44 0" />
        <path d="M242 218c10 18 8 42 2 62M398 218c-10 18-8 42-2 62" />
        <path d="M170 430c16 32 14 88 6 160M470 500c-16 28-12 80-4 140" />
      </g>
      <g {...ink}>
        <ellipse cx="288" cy="256" rx="7.5" ry="8.5" />
        <ellipse cx="352" cy="256" rx="7.5" ry="8.5" />
        <circle cx="291" cy="253" r="2.2" fill={PAPER} />
        <circle cx="355" cy="253" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
