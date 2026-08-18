import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function ElizabethMotherOfJohnTheBaptist({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...paperShape} d="M92 655V268C92 168 198 78 320 78C442 78 548 168 548 268V655" />
      <path {...paperShape} d="M128 655V292C128 206 214 118 320 118C426 118 512 206 512 292V655" />
      <path {...paperShape} d="M168 248h304v22H168z" />
      <path
        {...paperShape}
        d="M42 168c8-28 44-36 66-10 14-24 54-18 66 10 20-8 36 16 24 32 12 8 6 28-14 28-6 16-36 14-46-4-12 16-40 6-48-12-16 8-40-8-48-44z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="236" r="118" />
      </g>
      <g {...detail}>
        <path d="M320 112v-28M222 154l-32-26M418 154l32-26M196 236h-36M444 236h36M248 132l-26-32M392 132l26-32" />
      </g>

      <g {...p('symbol')}>
        <path d="M56 430h72v150H56z" />
        <path d="M64 442h56v18H64z" />
        <path d="M64 472h56M64 492h56M64 512h40" />
        <path d="M92 430v-16" />
        <ellipse cx="92" cy="406" rx="18" ry="10" />
      </g>

      <g {...p('robe')}>
        <path d="M198 392C176 268 228 176 320 168C412 176 464 268 442 392C392 428 248 428 198 392Z" />
        <path d="M214 430C248 402 282 392 320 392C358 392 392 402 426 430C438 500 448 580 444 655H196C192 580 202 500 214 430Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M188 248C168 176 228 128 320 122C412 128 472 176 452 248C428 272 212 272 188 248Z" />
        <path d="M188 250C132 318 118 470 128 655H236C220 520 228 390 258 338C228 312 200 278 188 250Z" />
        <path d="M452 250C508 318 522 470 512 655H404C420 520 412 390 382 338C412 312 440 278 452 250Z" />
      </g>

      <g {...p('accent')}>
        <path d="M248 248C268 228 292 220 320 220C348 220 372 228 392 248C372 262 268 262 248 248Z" />
        <path d="M236 548C268 532 372 532 404 548L416 576H224z" />
      </g>

      <g {...p('hair')}>
        <path d="M236 228C222 188 258 158 320 156C382 158 418 188 404 228C388 208 352 198 320 198C288 198 252 208 236 228Z" />
        <path d="M242 250C228 278 226 318 234 348C248 338 258 312 262 282C256 264 250 254 242 250Z" />
        <path d="M398 250C412 278 414 318 406 348C392 338 382 312 378 282C384 264 390 254 398 250Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="268" rx="72" ry="80" />
        <path d="M276 342l-8 38h104l-8-38z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="118" cy="358" rx="20" ry="18" />
        <ellipse cx="98" cy="342" rx="8" ry="16" transform="rotate(-42 98 342)" />
        <ellipse cx="108" cy="322" rx="7" ry="18" transform="rotate(-12 108 322)" />
        <ellipse cx="124" cy="318" rx="7" ry="20" />
        <ellipse cx="138" cy="324" rx="7" ry="18" transform="rotate(14 138 324)" />
        <ellipse cx="148" cy="338" rx="6" ry="14" transform="rotate(28 148 338)" />

        <ellipse cx="522" cy="358" rx="20" ry="18" />
        <ellipse cx="542" cy="342" rx="8" ry="16" transform="rotate(42 542 342)" />
        <ellipse cx="532" cy="322" rx="7" ry="18" transform="rotate(12 532 322)" />
        <ellipse cx="516" cy="318" rx="7" ry="20" />
        <ellipse cx="502" cy="324" rx="7" ry="18" transform="rotate(-14 502 324)" />
        <ellipse cx="492" cy="338" rx="6" ry="14" transform="rotate(-28 492 338)" />
      </g>

      <g {...detail}>
        <path d="M256 244c16-10 36-8 48 4" />
        <path d="M336 246c16-10 36-8 48 4" />
        <path d="M258 268c16-16 40-16 54 0-14 12-38 12-54 0z" />
        <path d="M328 268c16-16 40-16 54 0-14 12-38 12-54 0z" />
        <path d="M312 282v20l-10 6" />
        <path d="M298 322c14 12 30 12 44 0" />
        <path d="M246 232c8 16 6 38 2 56M394 232c-8 16-6 38-2 56" />
        <path d="M248 248c8 6 6 14 0 18M392 248c-8 6-6 14 0 18" />
        <path d="M176 390c18 8 48 6 70-8M464 390c-18 8-48 6-70-8" />
        <path d="M248 470v170M320 458v182M392 470v170" />
        <path d="M168 248v8M472 248v8" />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy="268" rx="7" ry="8" />
        <ellipse cx="354" cy="268" rx="7" ry="8" />
        <circle cx="289" cy="265" r="2.1" fill={PAPER} />
        <circle cx="357" cy="265" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
