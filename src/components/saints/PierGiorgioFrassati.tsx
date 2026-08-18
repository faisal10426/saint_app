import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function PierGiorgioFrassati({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...paperShape} d="M28 268l86-150 78 86 70-118 92 132 86-96 78 70 94 76v132H28z" />
      <path {...paperShape} d="M114 200l28-48 22 36zM262 168l24-42 20 32zM456 190l22-40 18 30z" />
      <path
        {...paperShape}
        d="M36 498c8-24 42-30 60-8 14-22 50-16 62 12 20-8 36 16 24 32 12 8 6 28-14 30-6 16-34 14-44-4-12 14-40 6-48-12-16 8-40-6-40-50z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="228" r="116" />
      </g>
      <g {...detail}>
        <path d="M320 106v-24M228 148l-30-22M412 148l30-22M198 228h-34M442 228h34M250 128l-24-30M390 128l24-30" />
      </g>

      <g {...p('symbol')}>
        <path d="M248 318C228 300 248 278 272 292C292 278 348 278 368 292C392 278 412 300 392 318C378 308 320 304 248 318Z" />
        <path d="M236 330h28v90H236z" />
        <path d="M376 330h28v90H376z" />
        <path d="M228 418h184v72H228z" />
        <path d="M248 430h144v48H248z" />
        <path d="M96 470v-210" />
        <path d="M80 262h32v18H80z" />
        <path d="M88 280c8 16 4 36-4 50" />
        <ellipse cx="96" cy="486" rx="16" ry="12" />
        <path d="M528 360v220" />
        <ellipse cx="528" cy="348" rx="14" ry="18" />
        <path d="M514 360c18 8 28 8 28 0" />
        <circle cx="168" cy="520" r="8" />
        <circle cx="188" cy="536" r="8" />
        <circle cx="208" cy="552" r="8" />
        <path d="M168 520h20M188 536h20" />
        <path d="M208 552c12 10 28 8 36-4" />
      </g>

      <g {...p('robe')}>
        <path d="M214 400C248 368 282 354 320 354C358 354 392 368 426 400C438 470 446 560 440 655H200C194 560 202 470 214 400Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M214 398C176 438 162 520 168 655H250C242 530 248 450 272 418C248 408 226 400 214 398Z" />
        <path d="M426 398C464 438 478 520 472 655H390C398 530 392 450 368 418C392 408 414 400 426 398Z" />
      </g>

      <g {...p('accent')}>
        <path d="M292 360h56v20H292z" />
        <path d="M300 380h40M308 396h24" />
        <path d="M236 548h168l10 28H226z" />
      </g>

      <g {...p('hair')}>
        <path d="M232 214C218 154 268 132 320 130C372 132 422 154 408 214v42H232z" />
        <path d="M250 188C238 168 268 162 274 182" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="246" rx="72" ry="84" />
        <path d="M276 324l-8 38h104l-8-38z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="112" cy="478" rx="18" ry="16" />
        <ellipse cx="96" cy="464" rx="7" ry="16" transform="rotate(-32 96 464)" />
        <ellipse cx="106" cy="448" rx="6" ry="16" />
        <ellipse cx="118" cy="446" rx="6" ry="18" />
        <ellipse cx="130" cy="452" rx="6" ry="15" transform="rotate(14 130 452)" />
        <ellipse cx="138" cy="466" rx="5" ry="12" transform="rotate(26 138 466)" />

        <ellipse cx="528" cy="520" rx="18" ry="16" />
        <ellipse cx="544" cy="506" rx="7" ry="16" transform="rotate(28 544 506)" />
        <ellipse cx="534" cy="490" rx="6" ry="16" />
        <ellipse cx="522" cy="488" rx="6" ry="18" />
        <ellipse cx="510" cy="494" rx="6" ry="15" transform="rotate(-12 510 494)" />
        <ellipse cx="502" cy="508" rx="5" ry="12" transform="rotate(-24 502 508)" />
      </g>

      <g {...detail}>
        <path d="M254 220c16-12 38-12 50 2" />
        <path d="M336 222c16-12 38-12 50 2" />
        <path d="M258 244c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M326 244c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M312 258v20l-10 6" />
        <path d="M298 296c14 11 28 11 44 0" />
        <path d="M240 208c8 16 6 38 0 56M400 208c-8 16-6 38 0 56" />
        <path d="M248 430v210M320 418v222M392 430v210" />
        <path d="M176 480c16 28 14 86 6 150M464 480c-16 28-14 86-6 150" />
      </g>
      <g {...ink}>
        <ellipse cx="288" cy="244" rx="7" ry="8" />
        <ellipse cx="352" cy="244" rx="7" ry="8" />
        <circle cx="291" cy="241" r="2.1" fill={PAPER} />
        <circle cx="355" cy="241" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
