import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function JoseSanchezDelRio({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M42 176c8-34 48-46 74-18 16-30 64-26 76 8 28-14 56 12 44 38 22 8 16 40-12 42-8 24-50 22-62-2-18 20-54 10-64-14-22 10-58-8-56-54z"
      />
      <path
        {...paperShape}
        d="M452 80c8-22 44-28 60-6 12-20 50-16 58 10 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 16-48-2-12 16-42 8-50-10-16 8-42-8-36-56z"
      />

      <g {...paperShape}>
        <ellipse cx="86" cy="560" rx="28" ry="36" />
        <ellipse cx="118" cy="548" rx="22" ry="28" />
        <ellipse cx="58" cy="548" rx="20" ry="26" />
        <path d="M86 596v59" />
        <ellipse cx="78" cy="620" rx="16" ry="10" />
        <ellipse cx="96" cy="632" rx="14" ry="8" />
        <path d="M520 655V360h36V655z" />
        <path d="M508 360h60v22H508z" />
        <path d="M528 300c-8 20 8 40 24 48 16-8 32-28 24-48 8-28-16-48-24-52-8 4-32 24-24 52z" />
        <path d="M536 348h16v12h-16z" />
        <path d="M548 268c0-18 12-28 20-28s20 10 20 28v32h-40z" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="320" cy="228" rx="168" ry="36" />
        <path d="M248 228C248 168 280 138 320 138C360 138 392 168 392 228" />
        <path d="M268 218C274 178 296 158 320 158C344 158 366 178 372 218" />
      </g>

      <g {...p('halo')}>
        <circle cx="320" cy="248" r="108" />
      </g>
      <g {...detail}>
        <path d="M320 134v-24M228 168l-28-22M412 168l28-22M206 248h-36M434 248h36M248 148l-24-28M392 148l24-28" />
      </g>

      <g {...p('symbol')}>
        <path d="M108 655V150" />
        <path d="M108 150L72 210h72z" />
        <path d="M72 210h72v120H72z" />
        <path d="M80 226h56v88H80z" />
      </g>

      <g {...p('robe')}>
        <path d="M236 400C264 368 290 352 320 352C350 352 376 368 404 400L422 560 320 575 218 560Z" />
        <path d="M248 372C268 352 292 344 320 344C348 344 372 352 392 372C372 360 268 360 248 372Z" />
        <path d="M236 400C214 420 198 460 204 500C222 480 248 450 268 430C252 418 242 408 236 400Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M210 392C188 360 214 338 250 350C228 378 214 410 210 392Z" />
        <path d="M210 392C158 440 142 520 150 600H268C256 520 254 450 272 418C246 406 224 396 210 392Z" />
        <path d="M430 392C452 360 426 338 390 350C412 378 426 410 430 392Z" />
        <path d="M430 392C482 440 498 520 490 600H372C384 520 386 450 368 418C394 406 416 396 430 392Z" />
        <path d="M218 560C238 548 402 548 422 560L430 588H210z" />
      </g>

      <g {...p('accent')}>
        <path d="M300 360h40v16h-40z" />
        <circle cx="312" cy="400" r="4" />
        <circle cx="312" cy="430" r="4" />
        <circle cx="312" cy="460" r="4" />
        <circle cx="312" cy="490" r="4" />
        <path d="M250 368C268 430 292 500 318 560" />
        <path d="M226 548C246 536 394 536 414 548L422 572H218z" />
        <path d="M468 430v130" />
        <path d="M456 430h24v18h-24z" />
        <path d="M462 448h12v90h-12z" />
      </g>

      <g {...p('hair')}>
        <path d="M236 230C224 172 268 148 320 148C372 148 416 172 404 230v44H236z" />
        <path d="M244 202c14-20 32-8 30 10M320 172c10-20 30-14 32 6M396 202c-14-20-32-8-30 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="320" cy="262" rx="70" ry="80" />
        <path d="M278 334l-8 34h100l-8-34z" />
        <ellipse cx="112" cy="430" rx="18" ry="16" />
        <ellipse cx="96" cy="416" rx="7" ry="16" transform="rotate(-28 96 416)" />
        <ellipse cx="108" cy="402" rx="6" ry="16" />
        <ellipse cx="120" cy="404" rx="6" ry="15" />
        <ellipse cx="130" cy="412" rx="6" ry="14" transform="rotate(16 130 412)" />
        <ellipse cx="468" cy="500" rx="18" ry="16" />
        <ellipse cx="486" cy="486" rx="7" ry="16" transform="rotate(22 486 486)" />
        <ellipse cx="474" cy="472" rx="6" ry="16" />
        <ellipse cx="462" cy="474" rx="6" ry="15" />
        <ellipse cx="452" cy="482" rx="6" ry="14" transform="rotate(-16 452 482)" />
      </g>

      <g {...detail}>
        <path d="M254 236c16-12 38-12 50 2" />
        <path d="M336 238c16-12 38-12 50 2" />
        <path d="M258 260c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M326 260c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M312 274v20l-10 6" />
        <path d="M298 312c14 10 28 10 42 0" />
        <path d="M242 218c8 16 6 38 2 56M398 218c-8 16-6 38-2 56" />
        <path d="M260 420v130M320 408v152M380 420v130" />
        <path d="M188 450c14 28 12 80 6 160M452 470c-12 24-10 70-4 140" />
        <path d="M88 230c-16-6-24 10-8 22M84 270c-18-4-26 12-8 22M80 310c-16-6-24 10-8 20M76 350c-16-4-22 10-6 18" />
        <path d="M128 226c16-8 28 8 12 24M132 268c18-6 28 12 10 24M136 310c16-8 26 10 10 22" />
        <path d="M256 228C248 200 268 188 288 196" />
        <path d="M384 228C392 200 372 188 352 196" />
      </g>
      <g {...ink}>
        <ellipse cx="288" cy="260" rx="7" ry="8" />
        <ellipse cx="352" cy="260" rx="7" ry="8" />
        <circle cx="291" cy="257" r="2.1" fill={PAPER} />
        <circle cx="355" cy="257" r="2.1" fill={PAPER} />
        <text x="108" y="268" textAnchor="middle" fontSize="8" fontFamily="serif" fill={STROKE}>
          VIVA
        </text>
        <text x="108" y="282" textAnchor="middle" fontSize="8" fontFamily="serif" fill={STROKE}>
          CRISTO
        </text>
        <text x="108" y="296" textAnchor="middle" fontSize="8" fontFamily="serif" fill={STROKE}>
          REY
        </text>
      </g>
    </>
  );
}
