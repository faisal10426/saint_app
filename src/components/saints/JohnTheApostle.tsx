import { PAPER, STROKE, ink, type PortraitProps } from './types';

export default function JohnTheApostle({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M40 180c6-32 44-42 70-16 16-28 60-24 74 8 26-14 54 12 42 38 22 8 14 38-12 40-8 22-48 22-60-2-18 20-52 10-62-14-22 10-56-8-52-54z"
      />

      <g {...p('halo')}>
        <circle cx="308" cy="236" r="120" />
      </g>
      <g {...detail}>
        <path d="M308 110v-28M214 152l-32-24M402 152l32-24M182 236h-36M434 236h36M238 130l-26-32M378 130l26-32" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="508" cy="430" rx="58" ry="36" />
        <ellipse cx="548" cy="400" rx="28" ry="22" />
        <path d="M452 430C428 392 448 360 486 372C470 400 460 418 452 430Z" />
        <path d="M470 410C456 360 520 348 528 402" />
        <path d="M572 392l22 8-18 10z" />
        <path d="M538 392c8-18 28-12 30 8" />
        <circle cx="556" cy="396" r="3" fill={STROKE} />
        <path d="M430 500h92l12 86H418z" />
        <path d="M442 516h68v54H442z" />
        <path d="M450 530h52M450 548h44" />
        <path d="M548 560l8 48 8-12 6 28" />
        <path d="M548 560h12l-4 16z" />
        <ellipse cx="168" cy="430" rx="28" ry="36" />
        <path d="M168 394v-18" />
        <path d="M156 376h24v14H156z" />
        <path d="M154 430c-10 22 4 44 16 58" />
      </g>

      <g {...p('robe')}>
        <path d="M206 392C188 268 236 176 308 168C380 176 428 268 410 392C368 418 248 418 206 392Z" />
        <path d="M228 438C256 410 280 398 308 398C336 398 360 410 388 438L410 655H206Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M198 378C148 434 132 530 142 655H250C234 545 232 460 256 418C230 400 210 386 198 378Z" />
      </g>

      <g {...p('accent')}>
        <path d="M278 228C268 248 266 280 274 316C288 310 298 308 308 308C318 308 328 310 342 316C350 280 348 248 338 228C324 210 292 210 278 228Z" />
        <path d="M240 548h136l10 26H230z" />
      </g>

      <g {...p('hair')}>
        <path d="M222 218C204 154 256 128 308 126C360 128 412 154 394 218C386 196 348 184 308 184C268 184 230 196 222 218Z" />
        <path d="M224 236C206 286 212 360 226 430C244 396 250 330 256 280C246 256 234 242 224 236Z" />
        <path d="M392 236C410 286 404 360 390 430C372 396 366 330 360 280C370 256 382 242 392 236Z" />
        <path d="M238 188c14-22 30-8 28 10M308 158c12-22 32-14 30 6M378 188c-14-22-30-8-28 10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="308" cy="256" rx="70" ry="84" />
        <path d="M266 334l-8 36h100l-8-36z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="168" cy="478" rx="18" ry="16" />
        <ellipse cx="152" cy="464" rx="7" ry="16" transform="rotate(-30 152 464)" />
        <ellipse cx="162" cy="448" rx="6" ry="16" />
        <ellipse cx="174" cy="446" rx="6" ry="18" />
        <ellipse cx="186" cy="452" rx="6" ry="15" transform="rotate(14 186 452)" />
        <ellipse cx="194" cy="466" rx="5" ry="12" transform="rotate(26 194 466)" />

        <ellipse cx="470" cy="548" rx="16" ry="14" />
        <ellipse cx="486" cy="534" rx="6" ry="15" transform="rotate(22 486 534)" />
        <ellipse cx="476" cy="520" rx="6" ry="16" />
        <ellipse cx="464" cy="518" rx="6" ry="16" />
        <ellipse cx="452" cy="524" rx="5" ry="14" transform="rotate(-12 452 524)" />
      </g>

      <g {...detail}>
        <path d="M244 230c16-12 38-12 50 2" />
        <path d="M322 232c16-12 38-12 50 2" />
        <path d="M248 254c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M312 254c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M300 268v20l-10 6" />
        <path d="M286 306c14 10 28 10 42 0" />
        <path d="M234 216c8 16 6 38 2 56M382 216c-8 16-6 38-2 56" />
        <path d="M246 430v210M308 418v222M370 430v210" />
        <path d="M168 500c14 28 12 80 6 140" />
      </g>
      <g {...ink}>
        <ellipse cx="276" cy="254" rx="7" ry="8" />
        <ellipse cx="340" cy="254" rx="7" ry="8" />
        <circle cx="279" cy="251" r="2.1" fill={PAPER} />
        <circle cx="343" cy="251" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
