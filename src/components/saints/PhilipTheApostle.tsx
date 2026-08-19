import { PAPER, STROKE, ink, type PortraitProps } from './types';

export default function PhilipTheApostle({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M36 176c8-32 46-42 72-16 16-28 62-24 74 8 26-14 54 12 42 38 22 8 14 38-12 40-8 22-50 22-60-2-18 20-54 10-64-14-22 10-56-8-52-54z"
      />
      <path
        {...p('cloud')}
        d="M448 78c8-22 42-28 58-8 12-20 48-16 58 10 20-8 38 16 26 32 14 8 6 28-12 30-6 16-36 14-46-2-12 14-40 8-48-10-16 8-40-8-36-52z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="236" r="124" />
      </g>
      <g {...detail}>
        <path d="M320 106v-26M222 150l-32-24M418 150l32-24M190 236h-38M450 236h38M246 128l-26-32M394 128l26-32" />
      </g>

      <g {...p('symbol')}>
        <path d="M112 180v390" />
        <path d="M112 180h-36v28h36v36h28v-36h36v-28h-36V144h-28z" />
        <path d="M430 548c28-8 56-6 78 8 8-36 4-78-12-112-22 16-48 18-66 4z" />
        <ellipse cx="448" cy="528" rx="16" ry="10" />
        <ellipse cx="476" cy="522" rx="16" ry="10" />
        <ellipse cx="504" cy="530" rx="16" ry="10" />
        <ellipse cx="460" cy="546" rx="15" ry="9" />
        <ellipse cx="490" cy="548" rx="15" ry="9" />
        <path d="M508 430h58v110H508z" />
        <path d="M520 446h34M520 468h34M520 490h26" />
        <path d="M536 430v-16" />
      </g>

      <g {...p('robe')}>
        <path d="M216 400C248 368 282 352 320 352C358 352 392 368 424 400C440 478 448 570 442 655H198C192 570 200 478 216 400Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M430 386C486 440 504 530 494 655H386C402 545 400 460 374 418C400 404 420 392 430 386Z" />
      </g>

      <g {...p('accent')}>
        <path d="M236 548h168l10 26H226z" />
        <path d="M292 360h56v16H292z" />
      </g>

      <g {...p('hair')}>
        <path d="M228 222C214 158 264 134 320 132C376 134 426 158 412 222v46H228z" />
        <path d="M240 190c14-20 32-8 30 10M320 162c10-20 30-14 30 6M400 190c-14-20-32-8-30 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="254" rx="74" ry="86" />
        <path d="M274 334l-10 40h92l-10-40z" />
      </g>

      <g {...p('hair')}>
        <path d="M248 310C238 360 258 412 320 424C382 412 402 360 392 310C368 340 342 352 320 352C298 352 272 340 248 310Z" />
        <path d="M284 306C298 320 342 320 356 306C342 314 298 314 284 306Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="112" cy="470" rx="18" ry="16" />
        <ellipse cx="96" cy="456" rx="7" ry="16" transform="rotate(-32 96 456)" />
        <ellipse cx="106" cy="440" rx="6" ry="16" />
        <ellipse cx="118" cy="438" rx="6" ry="18" />
        <ellipse cx="130" cy="444" rx="6" ry="15" transform="rotate(14 130 444)" />
        <ellipse cx="138" cy="458" rx="5" ry="12" transform="rotate(26 138 458)" />

        <ellipse cx="456" cy="500" rx="16" ry="14" />
        <ellipse cx="472" cy="486" rx="6" ry="15" transform="rotate(22 472 486)" />
        <ellipse cx="462" cy="472" rx="6" ry="16" />
        <ellipse cx="450" cy="470" rx="6" ry="16" />
        <ellipse cx="438" cy="476" rx="5" ry="14" transform="rotate(-12 438 476)" />
      </g>

      <g {...detail}>
        <path d="M250 228c16-12 40-12 52 2" />
        <path d="M338 230c16-12 40-12 52 2" />
        <path d="M254 252c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M324 252c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M312 266v22l-11 6" />
        <path d="M298 308c14 11 30 11 44 0" />
        <path d="M236 214c10 18 8 42 0 62M404 214c-10 18-8 42 0 62" />
        <path d="M248 430v210M320 418v222M392 430v210" />
        <path d="M168 470c18 36 16 90 8 160M472 500c-16 28-14 80-8 140" />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy="252" rx="7.5" ry="8.5" />
        <ellipse cx="354" cy="252" rx="7.5" ry="8.5" />
        <circle cx="289" cy="249" r="2.2" fill={PAPER} />
        <circle cx="357" cy="249" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
