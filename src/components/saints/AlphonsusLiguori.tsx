import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function AlphonsusLiguori({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M38 184c8-30 46-40 70-14 16-28 60-22 72 8 26-12 52 14 40 38 20 8 12 36-12 38-8 22-48 20-58-2-16 18-52 8-62-14-22 8-56-8-50-54z"
      />

      <g {...p('halo')}>
        <circle cx="348" cy="240" r="114" />
      </g>
      <g {...detail}>
        <path d="M348 120v-26M254 160l-32-24M442 160l32-24M228 240h-36M468 240h36M276 136l-26-32M420 136l26-32" />
      </g>

      <g {...p('accent')}>
        <path d="M290 122C278 90 310 66 348 72C386 66 418 90 406 122C386 106 308 106 290 122Z" />
        <path d="M308 122h80v16l-12 20H320l-12-20z" />
        <path d="M348 122v16" />
      </g>

      <g {...p('robe')}>
        <path d="M236 408C264 370 304 354 348 354C392 354 432 370 460 408L480 655H216Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M224 392C202 334 254 304 308 318C328 328 368 328 388 318C442 304 494 334 472 392C444 372 348 360 224 392Z" />
        <path d="M216 400C168 458 158 548 168 655H290C274 548 272 468 294 428C266 412 232 404 216 400Z" />
        <path d="M480 400C528 458 538 548 528 655H406C422 548 424 468 402 428C430 412 464 404 480 400Z" />
      </g>
      <g {...p('accent')}>
        <path d="M332 372h32v12h-32z" />
        <path d="M268 548C288 536 408 536 428 548L436 570H260z" />
        <path d="M530 210v270" />
        <path d="M518 470c-16 8-24 24-14 40 16 6 32-6 28-20" />
      </g>

      <g {...p('hair')}>
        <path d="M266 228C256 168 300 148 348 148C396 148 440 168 430 228v40H266z" />
        <path d="M274 196c12-16 28-6 26 10M348 166c8-16 24-10 26 4M422 196c-12-16-28-6-26 10" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="348" cy="260" rx="66" ry="78" />
        <path d="M306 332l-8 34h96l-8-34z" />
      </g>
      <g {...p('hair')}>
        <path d="M282 312C274 356 298 396 348 408C398 396 422 356 414 312C394 340 372 352 348 352C324 352 302 340 282 312Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M48 500h90v28H48z" />
        <path d="M56 472h90v28H56z" />
        <path d="M64 444h90v28H64z" />
        <path d="M72 416h90v28H72z" />
        <path d="M80 388h90v28H80z" />
        <ellipse cx="130" cy="360" rx="28" ry="18" />
        <path d="M130 348v24M118 360h24" />
        <path d="M430 500l26-38 8 6-26 38z" />
        <path d="M448 470h8v16h-8z" />
        <path d="M470 220v36" />
        <path d="M454 256h32" />
        <path d="M462 220h16v12h-16z" />
        <ellipse cx="486" cy="188" rx="20" ry="26" />
        <ellipse cx="486" cy="178" rx="10" ry="12" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="196" cy="508" rx="16" ry="14" />
        <ellipse cx="180" cy="494" rx="6" ry="16" transform="rotate(-24 180 494)" />
        <ellipse cx="192" cy="480" rx="6" ry="16" />
        <ellipse cx="204" cy="482" rx="6" ry="15" />
        <ellipse cx="214" cy="492" rx="5" ry="13" transform="rotate(14 214 492)" />
        <ellipse cx="438" cy="548" rx="16" ry="14" />
        <ellipse cx="456" cy="534" rx="6" ry="16" transform="rotate(20 456 534)" />
        <ellipse cx="444" cy="520" rx="6" ry="16" />
        <ellipse cx="432" cy="522" rx="6" ry="15" />
        <ellipse cx="422" cy="532" rx="5" ry="13" transform="rotate(-14 422 532)" />
      </g>

      <g {...detail}>
        <path d="M286 234c14-10 34-10 46 2" />
        <path d="M364 236c14-10 34-10 46 2" />
        <path d="M290 258c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M352 258c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M338 272v20l-10 5" />
        <path d="M324 310c12 10 26 10 40 0" />
        <path d="M274 216c8 16 6 38 0 54M422 216c-8 16-6 38 0 54" />
        <path d="M268 428v212M348 416v224M428 428v212" />
        <path d="M198 470c14 28 12 86 4 154M498 470c-14 28-12 86-4 154" />
      </g>
      <g {...ink}>
        <ellipse cx="318" cy="258" rx="7" ry="8" />
        <ellipse cx="378" cy="258" rx="7" ry="8" />
        <circle cx="321" cy="255" r="2.1" fill={PAPER} />
        <circle cx="381" cy="255" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
