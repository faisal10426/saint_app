import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function Matthew({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M36 508c6-24 40-30 58-8 14-22 50-16 60 12 20-8 36 16 24 32 12 8 6 28-14 30-6 16-34 14-44-4-12 14-40 6-48-12-16 8-40-6-36-50z"
      />

      <g {...p('halo')}>
        <circle cx="320" cy="238" r="122" />
      </g>
      <g {...detail}>
        <path d="M320 110v-28M222 152l-32-24M418 152l32-24M192 238h-38M448 238h38M246 130l-26-32M394 130l26-32" />
      </g>

      <g {...p('wings')}>
        <path d="M86 148C36 118 24 178 58 228c16 26 48 34 74 4-34 0-58-30-46-84z" />
        <path d="M158 148c50-30 62 30 28 80-16 26-48 34-74 4 34 0 58-30 46-84z" />
      </g>
      <g {...p('symbol')}>
        <ellipse cx="122" cy="176" rx="20" ry="24" />
        <path d="M112 202c6 10 14 10 20 0" />
        <path d="M106 170c6-4 10-4 14 0M124 170c6-4 10-4 14 0" />
        <circle cx="114" cy="176" r="2" fill={STROKE} />
        <circle cx="130" cy="176" r="2" fill={STROKE} />
        <path d="M86 228h36v48H86z" />
        <path d="M94 240h20M94 254h16" />
        <path d="M430 500h92l12 88H418z" />
        <path d="M442 516h68v56H442z" />
        <path d="M450 530h52M450 548h44M450 566h36" />
        <path d="M548 560l8 48 8-12 6 28" />
        <path d="M548 560h12l-4 16z" />
        <ellipse cx="168" cy="548" rx="22" ry="18" />
        <path d="M156 548h24M168 536v24" />
        <path d="M72 600h120v40H72z" />
        <path d="M88 612h28v16H88z" />
        <path d="M128 612h28v16h-28z" />
        <path d="M168 612h16v16h-16z" />
      </g>
      <g {...p('halo')}>
        <circle cx="122" cy="176" r="40" />
      </g>

      <g {...p('robe')}>
        <path d="M218 400C250 368 284 352 320 352C356 352 390 368 422 400C438 478 446 570 440 655H200C194 570 202 478 218 400Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M210 386C158 442 142 530 152 655H260C244 545 242 460 268 418C242 404 222 392 210 386Z" />
        <path d="M430 386C482 442 498 530 488 655H380C396 545 398 460 372 418C398 404 418 392 430 386Z" />
      </g>

      <g {...p('accent')}>
        <path d="M292 360h56v18H292z" />
        <path d="M236 548h168l10 26H226z" />
      </g>

      <g {...p('hair')}>
        <path d="M230 222C216 158 266 134 320 132C374 134 424 158 410 222v46H230z" />
        <path d="M242 190c14-20 32-8 30 10M320 162c10-20 30-14 30 6M398 190c-14-20-32-8-30 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="256" rx="74" ry="86" />
        <path d="M274 336l-10 40h92l-10-40z" />
      </g>

      <g {...p('hair')}>
        <path d="M248 312C238 366 260 422 320 436C380 422 402 366 392 312C366 344 338 358 320 358C302 358 274 344 248 312Z" />
        <path d="M284 308C298 324 342 324 356 308C342 318 298 318 284 308Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="180" cy="548" rx="18" ry="16" />
        <ellipse cx="164" cy="534" rx="7" ry="16" transform="rotate(-28 164 534)" />
        <ellipse cx="174" cy="518" rx="6" ry="16" />
        <ellipse cx="186" cy="516" rx="6" ry="18" />
        <ellipse cx="198" cy="522" rx="6" ry="15" transform="rotate(14 198 522)" />
        <ellipse cx="206" cy="536" rx="5" ry="12" transform="rotate(26 206 536)" />

        <ellipse cx="470" cy="548" rx="16" ry="14" />
        <ellipse cx="486" cy="534" rx="6" ry="15" transform="rotate(22 486 534)" />
        <ellipse cx="476" cy="520" rx="6" ry="16" />
        <ellipse cx="464" cy="518" rx="6" ry="16" />
        <ellipse cx="452" cy="524" rx="5" ry="14" transform="rotate(-12 452 524)" />
      </g>

      <g {...detail}>
        <path d="M250 230c16-12 40-12 52 2" />
        <path d="M338 232c16-12 40-12 52 2" />
        <path d="M254 254c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M324 254c18-20 46-20 62 0-16 13-44 13-62 0z" />
        <path d="M312 268v22l-11 6" />
        <path d="M298 310c14 11 30 11 44 0" />
        <path d="M238 216c10 18 8 42 0 62M402 216c-10 18-8 42 0 62" />
        <path d="M248 430v210M320 418v222M392 430v210" />
        <path d="M168 500c16 28 14 80 8 140M472 500c-16 28-14 80-8 140" />
      </g>
      <g {...ink}>
        <ellipse cx="286" cy="254" rx="7.5" ry="8.5" />
        <ellipse cx="354" cy="254" rx="7.5" ry="8.5" />
        <circle cx="289" cy="251" r="2.2" fill={PAPER} />
        <circle cx="357" cy="251" r="2.2" fill={PAPER} />
      </g>
    </>
  );
}
