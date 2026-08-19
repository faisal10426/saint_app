import { PAPER, STROKE, ink, type PortraitProps } from './types';

export default function ThomasTheApostle({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M448 78c8-22 42-28 58-8 12-20 48-16 58 10 20-8 38 16 26 32 14 8 6 28-12 30-6 16-36 14-46-2-12 14-40 8-48-10-16 8-40-8-36-52z"
      />

      <g {...p('halo')}>
        <circle cx="300" cy="236" r="120" />
      </g>
      <g {...detail}>
        <path d="M300 110v-26M208 152l-30-24M392 152l30-24M174 236h-34M426 236h34M226 130l-24-32M374 130l24-32" />
      </g>

      <g {...p('symbol')}>
        <path d="M86 250h36v220H86z" />
        <path d="M86 434h168v36H86z" />
        <path d="M98 270h12M98 298h12M98 326h12M98 354h12M98 382h12" />
        <path d="M122 446h20M158 446h20M194 446h20" />
        <path d="M500 360v210" />
        <path d="M492 360l16-48 16 48z" />
        <path d="M500 318v-28" />
        <path d="M448 520h70v78H448z" />
        <path d="M458 498h50v22h-50z" />
        <path d="M468 470h30v28h-30z" />
        <path d="M478 448h10v22h-10z" />
        <path d="M462 536h18v22h-18z" />
        <path d="M496 536h10v22h-10z" />
        <path d="M478 470v-36" />
        <path d="M86 560h70v78H86z" />
        <path d="M98 576h46M98 596h40" />
        <path d="M120 560v-14" />
      </g>

      <g {...p('robe')}>
        <path d="M196 396C228 364 262 348 300 348C338 348 372 364 404 396C420 474 428 566 422 655H178C172 566 180 474 196 396Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M188 382C138 438 122 530 132 655H240C224 545 222 460 246 418C220 400 200 388 188 382Z" />
        <path d="M412 382C462 438 478 530 468 655H360C376 545 378 460 354 418C380 400 400 388 412 382Z" />
      </g>

      <g {...p('accent')}>
        <path d="M216 548h168l10 26H206z" />
        <path d="M272 358h56v16H272z" />
      </g>

      <g {...p('hair')}>
        <path d="M210 220C196 156 246 132 300 130C354 132 404 156 390 220v46H210z" />
        <path d="M222 188c14-20 32-8 30 10M300 160c10-20 30-14 30 6M378 188c-14-20-32-8-30 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="300" cy="254" rx="72" ry="84" />
        <path d="M256 332l-10 40h88l-10-40z" />
      </g>

      <g {...p('hair')}>
        <path d="M228 310C218 364 240 420 300 434C360 420 382 364 372 310C346 342 318 356 300 356C282 356 254 342 228 310Z" />
        <path d="M264 306C278 322 322 322 336 306C322 316 278 316 264 306Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="148" cy="430" rx="18" ry="16" />
        <ellipse cx="132" cy="416" rx="7" ry="16" transform="rotate(-28 132 416)" />
        <ellipse cx="142" cy="400" rx="6" ry="16" />
        <ellipse cx="154" cy="398" rx="6" ry="18" />
        <ellipse cx="166" cy="404" rx="6" ry="15" transform="rotate(14 166 404)" />
        <ellipse cx="174" cy="418" rx="5" ry="12" transform="rotate(26 174 418)" />

        <ellipse cx="500" cy="520" rx="16" ry="14" />
        <ellipse cx="516" cy="506" rx="6" ry="15" transform="rotate(22 516 506)" />
        <ellipse cx="506" cy="492" rx="6" ry="16" />
        <ellipse cx="494" cy="490" rx="6" ry="16" />
        <ellipse cx="482" cy="496" rx="5" ry="14" transform="rotate(-12 482 496)" />
      </g>

      <g {...detail}>
        <path d="M230 228c16-12 38-12 50 2" />
        <path d="M320 230c16-12 38-12 50 2" />
        <path d="M234 252c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M310 252c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M292 266v22l-11 6" />
        <path d="M278 308c14 11 28 11 42 0" />
        <path d="M218 214c10 18 8 42 0 62M382 214c-10 18-8 42 0 62" />
        <path d="M228 430v210M300 418v222M372 430v210" />
        <path d="M160 470c16 32 14 90 6 160M460 500c-16 28-14 80-8 140" />
      </g>
      <g {...ink}>
        <ellipse cx="268" cy="252" rx="7" ry="8" />
        <ellipse cx="332" cy="252" rx="7" ry="8" />
        <circle cx="271" cy="249" r="2.1" fill={PAPER} />
        <circle cx="335" cy="249" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
