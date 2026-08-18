import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function Bartholomew({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M36 176c8-32 46-42 72-16 16-28 62-24 74 8 26-14 54 12 42 38 22 8 14 38-12 40-8 22-50 22-60-2-18 20-54 10-64-14-22 10-56-8-52-54z"
      />
      <path
        {...paperShape}
        d="M36 508c6-24 40-30 58-8 14-22 50-16 60 12 20-8 36 16 24 32 12 8 6 28-14 30-6 16-34 14-44-4-12 14-40 6-48-12-16 8-40-6-36-50z"
      />

      <g {...p('halo')}>
        <circle cx="308" cy="236" r="122" />
      </g>
      <g {...detail}>
        <path d="M308 108v-26M214 150l-32-24M402 150l32-24M180 236h-36M436 236h36M234 128l-26-32M382 128l26-32" />
      </g>

      <g {...p('robe')}>
        <path d="M204 398C236 366 270 350 308 350C346 350 380 366 412 398C428 476 436 568 430 655H186C180 568 188 476 204 398Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M198 372C176 330 218 302 268 318C292 328 324 328 348 318C398 302 440 330 418 372C392 350 308 342 198 372Z" />
        <path d="M418 378C486 428 518 520 524 655H400C408 540 402 450 372 410C396 396 412 384 418 378Z" />
      </g>

      <g {...p('accent')}>
        <path d="M224 548h168l10 26H214z" />
        <path d="M280 358h56v16H280z" />
      </g>

      <g {...p('hair')}>
        <path d="M216 220C202 156 252 132 308 130C364 132 414 156 400 220v46H216z" />
        <path d="M228 188c14-20 32-8 30 10M308 160c10-20 30-14 30 6M388 188c-14-20-32-8-30 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="308" cy="254" rx="74" ry="86" />
        <path d="M262 334l-10 40h92l-10-40z" />
      </g>

      <g {...p('hair')}>
        <path d="M236 310C226 366 248 424 308 438C368 424 390 366 380 310C354 342 324 356 308 356C292 356 262 342 236 310Z" />
        <path d="M272 306C286 322 330 322 344 306C330 316 286 316 272 306Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M418 488h96l14 96H404z" />
        <path d="M430 504h72v64H430z" />
        <path d="M438 518h56M438 536h50M438 554h40" />
        <path d="M86 470h86l12 108H74z" />
        <path d="M98 486h62v76H98z" />
        <path d="M106 502h46M106 522h40" />
        <path d="M502 500l18-8 6 16-14 8z" />
        <path d="M516 498l10-22" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="148" cy="548" rx="18" ry="16" />
        <ellipse cx="132" cy="534" rx="7" ry="16" transform="rotate(-28 132 534)" />
        <ellipse cx="142" cy="518" rx="6" ry="16" />
        <ellipse cx="154" cy="516" rx="6" ry="18" />
        <ellipse cx="166" cy="522" rx="6" ry="15" transform="rotate(14 166 522)" />
        <ellipse cx="174" cy="536" rx="5" ry="12" transform="rotate(26 174 536)" />

        <ellipse cx="456" cy="548" rx="16" ry="14" />
        <ellipse cx="472" cy="534" rx="6" ry="15" transform="rotate(22 472 534)" />
        <ellipse cx="462" cy="520" rx="6" ry="16" />
        <ellipse cx="450" cy="518" rx="6" ry="16" />
        <ellipse cx="438" cy="524" rx="5" ry="14" transform="rotate(-12 438 524)" />
      </g>

      <g {...detail}>
        <path d="M238 228c16-12 40-12 52 2" />
        <path d="M326 230c16-12 40-12 52 2" />
        <path d="M242 252c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M312 252c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M300 266v22l-11 6" />
        <path d="M286 308c14 11 30 11 44 0" />
        <path d="M224 214c10 18 8 42 0 62M392 214c-10 18-8 42 0 62" />
        <path d="M236 430v210M308 418v222M380 430v210" />
        <path d="M160 500c16 28 14 80 8 140M460 500c-16 28-14 80-8 140" />
      </g>
      <g {...ink}>
        <ellipse cx="274" cy="252" rx="7.5" ry="8.5" />
        <ellipse cx="342" cy="252" rx="7.5" ry="8.5" />
        <circle cx="277" cy="249" r="2.2" fill={PAPER} />
        <circle cx="345" cy="249" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
