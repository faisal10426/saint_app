import { PAPER, STROKE, ink, type PortraitProps } from './types';

export default function Stephen({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M52 200c6-28 44-38 66-14 16-26 58-22 70 8 24-12 50 14 38 36 18 8 10 36-12 38-8 20-46 20-56-2-16 18-50 10-58-12-20 8-52-8-48-54z"
      />

      <g {...p('halo')}>
        <circle cx="328" cy="242" r="118" />
      </g>
      <g {...detail}>
        <path d="M328 118v-30M228 158l-34-26M428 158l34-26M204 242h-38M452 242h38M250 132l-28-34M406 132l28-34" />
      </g>

      <g {...p('robe')}>
        <path d="M148 430C132 390 176 350 228 364C258 348 294 340 328 340C362 340 398 348 428 364C480 350 524 390 508 430C540 480 548 560 538 655H118C108 560 116 480 148 430Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M218 378C198 338 238 312 278 328C304 340 352 340 378 328C418 312 458 338 438 378C412 360 328 352 218 378Z" />
        <path d="M248 392h160" />
        <path d="M320 392v80" />
      </g>
      <g {...p('accent')}>
        <path d="M300 392h40v88h-40z" />
        <path d="M248 392h52v22H248z" />
        <path d="M340 392h52v22H340z" />
        <path d="M236 548C256 536 400 536 420 548L428 572H228z" />
      </g>

      <g {...p('hair')}>
        <path d="M240 228C228 162 276 138 328 138C380 138 428 162 416 228v40H240z" />
        <path d="M248 196c12-18 30-6 28 10M328 164c8-18 26-12 28 4M408 196c-12-18-30-6-28 10" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="328" cy="260" rx="68" ry="80" />
        <path d="M286 334l-8 36h96l-8-36z" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="86" cy="612" rx="28" ry="18" />
        <ellipse cx="128" cy="628" rx="24" ry="16" />
        <ellipse cx="72" cy="640" rx="20" ry="14" />
        <ellipse cx="110" cy="650" rx="18" ry="12" />
        <path d="M86 600c-8-8-4-18 8-18 8 0 12 8 8 16" />
        <path d="M470 430v170" />
        <path d="M448 458c18-8 44-6 52 10-22 28-40 70-28 110" />
        <path d="M486 500c-10 22 2 48 12 62" />
        <path d="M148 520h70v70H148z" />
        <path d="M158 538h50M158 554h50" />
        <ellipse cx="168" cy="572" rx="10" ry="8" />
        <ellipse cx="192" cy="572" rx="10" ry="8" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="168" cy="508" rx="16" ry="14" />
        <ellipse cx="152" cy="494" rx="6" ry="16" transform="rotate(-24 152 494)" />
        <ellipse cx="164" cy="480" rx="6" ry="16" />
        <ellipse cx="176" cy="482" rx="6" ry="15" />
        <ellipse cx="186" cy="492" rx="5" ry="13" transform="rotate(16 186 492)" />
        <ellipse cx="478" cy="548" rx="16" ry="14" />
        <ellipse cx="496" cy="534" rx="6" ry="16" transform="rotate(20 496 534)" />
        <ellipse cx="484" cy="520" rx="6" ry="16" />
        <ellipse cx="472" cy="522" rx="6" ry="15" />
        <ellipse cx="462" cy="532" rx="5" ry="13" transform="rotate(-14 462 532)" />
      </g>

      <g {...detail}>
        <path d="M264 234c14-10 36-10 48 2" />
        <path d="M344 236c14-10 36-10 48 2" />
        <path d="M268 258c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M332 258c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M320 272v20l-10 6" />
        <path d="M306 310c12 10 26 10 40 0" />
        <path d="M248 216c8 16 6 38 0 56M408 216c-8 16-6 38 0 56" />
        <path d="M220 450v190M328 438v202M436 450v190" />
        <path d="M140 470c18 30 16 90 8 160M500 470c-18 30-16 90-8 160" />
      </g>
      <g {...ink}>
        <ellipse cx="296" cy="258" rx="7" ry="8" />
        <ellipse cx="360" cy="258" rx="7" ry="8" />
        <circle cx="299" cy="255" r="2.1" fill={PAPER} />
        <circle cx="363" cy="255" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
