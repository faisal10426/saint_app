import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function spark(cx: number, cy: number, r: number) {
  return `${cx},${cy - r} ${cx + r * 0.22},${cy - r * 0.22} ${cx + r},${cy} ${cx + r * 0.22},${cy + r * 0.22} ${cx},${cy + r} ${cx - r * 0.22},${cy + r * 0.22} ${cx - r},${cy} ${cx - r * 0.22},${cy - r * 0.22}`;
}

export default function FaustinaKowalska({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M48 186c4-32 42-46 68-22 16-30 62-28 76 6 28-14 56 10 46 36 22 8 16 40-12 42-8 24-50 24-62 0-18 20-54 12-64-12-22 10-56-8-52-50z"
      />
      <path
        {...paperShape}
        d="M438 88c8-22 42-28 58-8 12-20 48-18 58 8 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 18-48 0-12 16-42 10-50-10-16 8-42-8-34-54z"
      />
      <path
        {...paperShape}
        d="M36 520c6-24 40-30 58-8 14-22 50-18 60 10 20-8 36 16 24 32 12 8 6 28-14 30-6 16-36 16-46-2-12 14-40 8-48-10-16 8-40-6-34-52z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="236" r="124" />
      </g>
      <g {...detail}>
        <path d="M320 106v-34M214 148l-36-28M426 148l36-28M188 236h-42M452 236h42M238 126l-30-36M402 126l30-36" />
      </g>
      <g {...p('halo')}>
        <polygon points={spark(168, 118, 9)} />
        <polygon points={spark(472, 110, 8)} />
        <polygon points={spark(218, 80, 7)} />
        <polygon points={spark(422, 76, 7)} />
      </g>

      <g {...p('mantle')}>
        <path d="M198 250C176 168 228 112 320 108C412 112 464 168 442 250C430 280 210 280 198 250Z" />
        <path d="M198 250C148 310 132 430 144 655H250C236 500 230 360 252 300C228 278 208 260 198 250Z" />
        <path d="M442 250C492 310 508 430 496 655H390C404 500 410 360 388 300C412 278 432 260 442 250Z" />
      </g>

      <g {...p('robe')}>
        <path d="M228 360C210 250 252 180 320 174C388 180 430 250 412 360C372 384 268 384 228 360Z" />
        <path d="M248 428C272 402 294 392 320 392C346 392 368 402 392 428L414 655H226Z" />
      </g>

      <g {...p('accent')}>
        <path d="M248 168C240 188 238 220 244 258C268 250 292 246 320 246C348 246 372 250 396 258C402 220 400 188 392 168C372 148 268 148 248 168Z" />
        <path d="M252 158h136v28H252z" />
        <path d="M256 258C272 286 368 286 384 258C370 300 270 300 256 258Z" />
        <path d="M268 328C292 348 348 348 372 328L380 352C352 372 288 372 260 352Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="246" rx="64" ry="76" />
        <path d="M282 314l-6 32h88l-6-32z" />
      </g>

      <g {...p('symbol')}>
        <path d="M248 430h144v168H248z" />
        <path d="M258 440h124v148H258z" />
        <path d="M88 500h70v90H88z" />
        <path d="M96 512h54M96 528h54M96 544h54M96 560h40" />
        <path d="M108 488h30v12h-30z" />
        <circle cx="430" cy="620" r="10" />
        <circle cx="448" cy="632" r="9" />
        <circle cx="466" cy="618" r="9" />
        <circle cx="482" cy="632" r="8" />
        <circle cx="498" cy="618" r="8" />
        <path d="M430 620h68M448 632h34" />
        <path d="M498 618c8 4 18 2 22-8" />
      </g>

      <g {...p('halo')}>
        <circle cx="320" cy="478" r="18" />
      </g>
      <path
        {...paperShape}
        d="M292 508C286 492 300 478 320 476C340 478 354 492 348 508C372 530 368 560 352 572C340 548 300 548 288 572C272 560 268 530 292 508Z"
      />
      <path {...paperShape} d="M348 500C360 492 372 498 368 512C362 508 352 508 348 500Z" />
      <path {...paperShape} d="M292 500C280 492 268 498 272 512C278 508 288 508 292 500Z" />
      <path {...paperShape} d="M320 508L382 572L382 548L332 512Z" />
      <path {...paperShape} d="M320 508L382 560L370 572L320 524Z" />

      <g {...p('accent')}>
        <path d="M320 508L258 572L258 548L308 512Z" />
        <path d="M320 508L258 560L270 572L320 524Z" />
        <path d="M314 512L268 568" />
      </g>
      <g {...detail}>
        <path d="M312 486v16M320 478v8" />
        <path d="M308 492h24" />
        <path d="M314 512L268 568M326 512L372 568" />
      </g>

      <g {...p('hair')}>
        <path d="M300 470C294 456 304 448 320 448C336 448 346 456 340 470C334 462 306 462 300 470Z" />
        <path d="M308 492C304 504 312 512 320 514C328 512 336 504 332 492C326 500 314 500 308 492Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="486" rx="14" ry="16" />
        <ellipse cx="348" cy="508" rx="7" ry="10" transform="rotate(18 348 508)" />
        <ellipse cx="292" cy="508" rx="7" ry="10" transform="rotate(-18 292 508)" />
        <ellipse cx="236" cy="598" rx="16" ry="14" />
        <ellipse cx="220" cy="586" rx="6" ry="15" transform="rotate(-28 220 586)" />
        <ellipse cx="232" cy="572" rx="6" ry="16" />
        <ellipse cx="244" cy="574" rx="6" ry="14" />
        <ellipse cx="254" cy="584" rx="6" ry="13" transform="rotate(16 254 584)" />
        <ellipse cx="404" cy="598" rx="16" ry="14" />
        <ellipse cx="420" cy="586" rx="6" ry="15" transform="rotate(28 420 586)" />
        <ellipse cx="408" cy="572" rx="6" ry="16" />
        <ellipse cx="396" cy="574" rx="6" ry="14" />
        <ellipse cx="386" cy="584" rx="6" ry="13" transform="rotate(-16 386 584)" />
      </g>

      <g {...detail}>
        <path d="M262 220c14-10 36-10 48 2" />
        <path d="M330 222c14-10 36-10 48 2" />
        <path d="M266 244c16-16 40-16 54 0-14 11-38 11-54 0z" />
        <path d="M326 244c16-16 40-16 54 0-14 11-38 11-54 0z" />
        <path d="M312 256v18l-10 5" />
        <path d="M300 292c12 8 24 8 36 0" />
        <path d="M260 208c8 16 6 36 2 52M380 208c-8 16-6 36-2 52" />
        <path d="M268 430v210M320 418v222M372 430v210" />
        <path d="M168 470c22 36 24 90 14 160M472 470c-22 36-24 90-14 160" />
      </g>
      <g {...ink}>
        <ellipse cx="290" cy="244" rx="6.5" ry="7.5" />
        <ellipse cx="350" cy="244" rx="6.5" ry="7.5" />
        <circle cx="293" cy="241" r="2" fill={PAPER} />
        <circle cx="353" cy="241" r="2" fill={PAPER} />
        <ellipse cx="316" cy="486" rx="2.4" ry="2.8" />
        <ellipse cx="324" cy="486" rx="2.4" ry="2.8" />
      </g>
    </>
  );
}
