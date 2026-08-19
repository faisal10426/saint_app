import { PAPER, STROKE, ink, type PortraitProps } from './types';

export default function LukeTheEvangelist({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M448 78c8-22 42-28 58-8 12-20 48-16 58 10 20-8 38 16 26 32 14 8 6 28-12 30-6 16-36 14-46-2-12 14-40 8-48-10-16 8-40-8-36-52z"
      />

      <g {...p('halo')}>
        <circle cx="348" cy="236" r="118" />
      </g>
      <g {...detail}>
        <path d="M348 112v-28M256 154l-30-24M440 154l30-24M224 236h-34M472 236h34M280 132l-24-32M416 132l24-32" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="128" cy="470" rx="78" ry="52" />
        <ellipse cx="86" cy="422" rx="40" ry="32" />
        <path d="M48 418C28 390 48 358 78 368" />
        <path d="M70 400C52 360 110 340 122 390" />
        <path d="M52 412l-22 6 16 12z" />
        <circle cx="72" cy="416" r="4" fill={STROKE} />
        <ellipse cx="64" cy="430" rx="10" ry="8" />
        <path d="M170 520c8 18 4 40-6 54M90 522c-6 20-2 40 10 52" />
        <path d="M430 500h92l12 88H418z" />
        <path d="M442 516h68v56H442z" />
        <path d="M450 530h52M450 548h44M450 566h36" />
        <path d="M548 560l8 48 8-12 6 28" />
        <path d="M548 560h12l-4 16z" />
        <path d="M72 560h88v80H72z" />
        <path d="M84 572h64v18H84z" />
        <circle cx="108" cy="618" r="10" />
        <path d="M108 608v20M98 618h20" />
        <path d="M132 608h18v20h-18z" />
        <ellipse cx="200" cy="148" rx="28" ry="36" />
        <path d="M178 168C168 148 184 122 200 118C216 122 232 148 222 168C214 158 186 158 178 168Z" />
        <ellipse cx="200" cy="158" rx="14" ry="16" />
      </g>

      <g {...p('robe')}>
        <path d="M254 394C236 272 282 180 348 172C414 180 460 272 442 394C402 420 294 420 254 394Z" />
        <path d="M276 440C304 412 324 400 348 400C372 400 392 412 420 440L442 655H254Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M442 380C492 436 508 530 498 655H392C408 545 410 460 386 418C412 400 432 386 442 380Z" />
      </g>

      <g {...p('accent')}>
        <path d="M320 228C310 248 308 280 316 316C330 310 338 308 348 308C358 308 366 310 380 316C388 280 386 248 376 228C362 210 334 210 320 228Z" />
        <path d="M288 548h120l10 26H278z" />
      </g>

      <g {...p('hair')}>
        <path d="M270 218C256 156 302 132 348 130C394 132 440 156 426 218v44H270z" />
        <path d="M282 188c12-18 28-8 26 8M348 162c10-18 26-12 26 6M414 188c-12-18-28-8-26 8" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="348" cy="254" rx="68" ry="82" />
        <path d="M308 330l-8 36h96l-8-36z" />
      </g>

      <g {...p('hair')}>
        <path d="M288 308C280 354 298 400 348 412C398 400 416 354 408 308C388 336 366 348 348 348C330 348 308 336 288 308Z" />
        <path d="M316 304C328 318 368 318 380 304C368 312 328 312 316 304Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="148" cy="548" rx="18" ry="16" />
        <ellipse cx="132" cy="534" rx="7" ry="16" transform="rotate(-28 132 534)" />
        <ellipse cx="142" cy="518" rx="6" ry="16" />
        <ellipse cx="154" cy="516" rx="6" ry="18" />
        <ellipse cx="166" cy="522" rx="6" ry="15" transform="rotate(14 166 522)" />
        <ellipse cx="174" cy="536" rx="5" ry="12" transform="rotate(26 174 536)" />

        <ellipse cx="470" cy="548" rx="16" ry="14" />
        <ellipse cx="486" cy="534" rx="6" ry="15" transform="rotate(22 486 534)" />
        <ellipse cx="476" cy="520" rx="6" ry="16" />
        <ellipse cx="464" cy="518" rx="6" ry="16" />
        <ellipse cx="452" cy="524" rx="5" ry="14" transform="rotate(-12 452 524)" />
      </g>

      <g {...detail}>
        <path d="M284 228c14-10 34-10 46 2" />
        <path d="M366 230c14-10 34-10 46 2" />
        <path d="M288 252c16-16 40-16 54 0-14 12-38 12-54 0z" />
        <path d="M354 252c16-16 40-16 54 0-14 12-38 12-54 0z" />
        <path d="M340 266v20l-10 6" />
        <path d="M326 304c14 10 28 10 42 0" />
        <path d="M276 214c8 16 6 38 0 56M420 214c-8 16-6 38 0 56" />
        <path d="M288 430v210M348 418v222M408 430v210" />
        <path d="M472 500c-14 28-12 80-6 140" />
      </g>
      <g {...ink}>
        <ellipse cx="316" cy="252" rx="7" ry="8" />
        <ellipse cx="380" cy="252" rx="7" ry="8" />
        <circle cx="319" cy="249" r="2.1" fill={PAPER} />
        <circle cx="383" cy="249" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
