import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function spark(cx: number, cy: number, r: number) {
  return `${cx},${cy - r} ${cx + r * 0.22},${cy - r * 0.22} ${cx + r},${cy} ${cx + r * 0.22},${cy + r * 0.22} ${cx},${cy + r} ${cx - r * 0.22},${cy + r * 0.22} ${cx - r},${cy} ${cx - r * 0.22},${cy - r * 0.22}`;
}

function star(cx: number, cy: number, r: number) {
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.4;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');
}

function scallop(cx: number, cy: number, r: number) {
  const rim = Array.from({ length: 7 }, (_, i) => {
    const a = Math.PI + (i * Math.PI) / 6;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r * 0.85;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return (
    <g>
      <path d={`M${cx},${cy + r * 0.35} L${rim.join(' L')} Z`} />
      <path
        d={`M${cx},${cy + r * 0.3} L${(cx - r * 0.72).toFixed(1)},${(cy - r * 0.15).toFixed(1)} M${cx},${cy + r * 0.3} L${(cx - r * 0.4).toFixed(1)},${(cy - r * 0.55).toFixed(1)} M${cx},${cy + r * 0.3} L${cx},${(cy - r * 0.7).toFixed(1)} M${cx},${cy + r * 0.3} L${(cx + r * 0.4).toFixed(1)},${(cy - r * 0.55).toFixed(1)} M${cx},${cy + r * 0.3} L${(cx + r * 0.72).toFixed(1)},${(cy - r * 0.15).toFixed(1)}`}
        fill="none"
        stroke={STROKE}
        strokeWidth={5}
        strokeLinecap="round"
      />
    </g>
  );
}

export default function JamesTheGreater({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M42 178c8-32 46-44 72-16 16-28 62-24 74 8 26-14 54 12 42 36 22 8 16 38-12 40-8 22-48 22-60 0-16 18-52 10-62-12-22 10-56-8-52-56z"
      />
      <path
        {...paperShape}
        d="M458 76c8-20 42-26 58-6 12-18 48-16 56 8 20-8 38 16 26 30 14 8 8 28-12 30-6 16-36 16-46 0-12 14-40 8-48-10-16 8-40-8-34-52z"
      />

      <path {...paperShape} d="M12 655C48 600 110 548 176 572C128 600 70 632 12 655Z" />
      <path {...paperShape} d="M176 572C220 540 280 558 248 610C210 590 188 580 176 572Z" />
      <g {...p('symbol')}>
        <path d="M48 600h36v48H48z" />
        <path d="M42 600h48v12H42z" />
        {scallop(66, 628, 14)}
        <path d="M70 648l18 8" />
      </g>

      <g {...p('symbol')}>
        <polygon points={star(86, 126, 12)} />
        <polygon points={star(132, 86, 9)} />
        <polygon points={star(508, 118, 11)} />
        <polygon points={star(548, 78, 8)} />
        <polygon points={star(568, 156, 7)} />
      </g>

      <g {...p('halo')}>
        <circle cx="320" cy="248" r="118" />
      </g>
      <g {...detail}>
        <path d="M320 124v-28M216 164l-34-24M424 164l34-24M196 248h-38M444 248h38M242 140l-28-32M398 140l28-32" />
      </g>
      <g {...p('halo')}>
        <polygon points={spark(178, 128, 8)} />
        <polygon points={spark(462, 120, 8)} />
      </g>

      <g {...p('robe')}>
        <path d="M238 418C262 382 290 366 320 366C350 366 378 382 402 418L422 655H218Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M200 400C180 350 224 322 276 338C304 348 336 348 364 338C416 322 460 350 440 400C412 378 320 370 200 400Z" />
        <path d="M194 406C146 458 128 548 140 655H254C238 548 234 462 256 426C230 412 208 404 194 406Z" />
        <path d="M446 406C494 458 512 548 500 655H386C402 548 406 462 384 426C410 412 432 404 446 406Z" />
        <path d="M300 392h40l8 18H292z" />
      </g>

      <g {...p('hair')}>
        <path d="M236 236C222 188 258 168 320 166C382 168 418 188 404 236v40H236z" />
        <path d="M248 208c12-18 28-6 26 10M320 182c8-18 26-12 28 6M392 208c-12-18-28-6-26 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="258" rx="70" ry="82" />
        <path d="M276 332l-8 38h84l-8-38z" />
      </g>

      <g {...p('accent')}>
        <ellipse cx="320" cy="168" rx="118" ry="28" />
        <path d="M248 168C240 128 268 96 320 92C372 96 400 128 392 168C368 148 272 148 248 168Z" />
        {scallop(320, 148, 22)}
      </g>

      <g {...p('hair')}>
        <path d="M250 308C240 358 262 412 320 426C378 412 400 358 390 308C364 340 338 352 320 352C302 352 276 340 250 308Z" />
        <path d="M286 304C300 318 340 318 354 304C340 314 300 314 286 304Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M132 655V210" />
        <circle cx="132" cy="198" r="16" />
        <path d="M118 210h28" />
        {scallop(168, 268, 16)}
        {scallop(96, 292, 14)}
        <ellipse cx="132" cy="340" rx="16" ry="22" />
        <path d="M132 318v44M120 340h24" />
        <path d="M148 268C158 250 176 256 168 276" />
        <path d="M110 292C98 276 82 284 92 302" />
        {scallop(430, 400, 20)}
        <path d="M448 470h78v70H448z" />
        <path d="M460 486h54M460 504h54M460 522h40" />
        <path d="M470 458h34v12h-34z" />
      </g>

      <g {...p('accent')}>
        <circle cx="320" cy="398" r="16" />
        {scallop(320, 396, 11)}
      </g>

      <g {...p('skin')}>
        <ellipse cx="148" cy="468" rx="18" ry="16" />
        <ellipse cx="132" cy="454" rx="7" ry="16" transform="rotate(-24 132 454)" />
        <ellipse cx="144" cy="440" rx="6" ry="16" />
        <ellipse cx="156" cy="442" rx="6" ry="15" />
        <ellipse cx="166" cy="452" rx="6" ry="14" transform="rotate(16 166 452)" />
        <ellipse cx="456" cy="548" rx="18" ry="16" />
        <ellipse cx="474" cy="534" rx="7" ry="16" transform="rotate(22 474 534)" />
        <ellipse cx="462" cy="520" rx="6" ry="16" />
        <ellipse cx="450" cy="522" rx="6" ry="15" />
        <ellipse cx="440" cy="530" rx="6" ry="14" transform="rotate(-16 440 530)" />
      </g>

      <g {...detail}>
        <path d="M254 232c16-12 38-12 50 2" />
        <path d="M336 234c16-12 38-12 50 2" />
        <path d="M258 256c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M326 256c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M312 270v20l-10 6" />
        <path d="M298 310c14 10 28 10 42 0" />
        <path d="M244 216c8 18 6 40 2 58M396 216c-8 18-6 40-2 58" />
        <path d="M248 430v210M320 418v222M392 440v200" />
        <path d="M168 480c16 32 14 86 8 150M472 500c-12 28-10 78-6 140" />
      </g>
      <g {...ink}>
        <ellipse cx="288" cy="256" rx="7" ry="8" />
        <ellipse cx="352" cy="256" rx="7" ry="8" />
        <circle cx="291" cy="253" r="2.1" fill={PAPER} />
        <circle cx="355" cy="253" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
