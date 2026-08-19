import { PAPER, STROKE, ink, type PortraitProps } from './types';

export default function JohnHenryNewman({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...p('cloud')} d="M470 480h130v175H470z" />
      <path {...p('cloud')} d="M500 430h70v50h-70z" />
      <path {...p('cloud')} d="M520 400h30v30h-30z" />
      <path {...p('cloud')} d="M508 510h24v50H508z" />
      <path {...p('cloud')} d="M548 530h18v30h-18z" />
      <path
        {...p('cloud')}
        d="M36 190c6-28 42-38 64-14 16-26 58-22 70 8 24-12 50 14 38 36 18 8 10 36-12 38-8 20-46 20-56-2-16 18-50 10-58-12-20 8-52-8-48-54z"
      />

      <g {...p('halo')}>
        <circle cx="292" cy="252" r="112" />
      </g>
      <g {...detail}>
        <path d="M292 134v-26M200 172l-32-24M384 172l32-24M174 252h-36M410 252h36M222 148l-26-32M362 148l26-32" />
      </g>

      <g {...p('accent')}>
        <path d="M236 148h112v28H236z" />
        <path d="M244 148l-18-32h40l10 32z" />
        <path d="M292 148v-32" />
        <path d="M340 148l18-32h-40l-10 32z" />
      </g>

      <g {...p('robe')}>
        <path d="M188 408C216 368 252 350 292 350C332 350 368 368 396 408L416 655H168Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M178 392C158 340 206 310 256 324C276 334 308 334 328 324C378 310 426 340 406 392C378 372 292 360 178 392Z" />
        <path d="M170 400C124 458 114 548 124 655H250C234 548 232 468 254 428C226 412 190 404 170 400Z" />
        <path d="M414 400C460 458 470 548 460 655H334C350 548 352 468 330 428C358 412 394 404 414 400Z" />
      </g>
      <g {...p('accent')}>
        <path d="M284 368h16v8h-16z" />
        <circle cx="292" cy="400" r="5" />
        <circle cx="292" cy="424" r="5" />
        <circle cx="292" cy="448" r="5" />
        <circle cx="292" cy="472" r="5" />
        <circle cx="292" cy="496" r="5" />
        <circle cx="292" cy="520" r="5" />
        <circle cx="292" cy="544" r="5" />
        <circle cx="292" cy="568" r="5" />
        <path d="M228 548C248 536 336 536 356 548L364 570H220z" />
      </g>

      <g {...p('hair')}>
        <path d="M214 240C204 184 246 164 292 164C338 164 380 184 370 240v32H214z" />
        <path d="M222 208c10-14 26-6 24 8M292 180c8-14 22-8 24 4M362 208c-10-14-26-6-24 8" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="292" cy="270" rx="64" ry="76" />
        <path d="M252 340l-6 34h88l-6-34z" />
      </g>

      <g {...p('symbol')}>
        <path d="M48 470h80v100H48z" />
        <path d="M56 490h64M56 510h64M56 530h64" />
        <path d="M40 442h80v28H40z" />
        <path d="M64 414h80v28H64z" />
        <path d="M100 360v40" />
        <path d="M88 360c8-20 24-20 32 0" />
        <ellipse cx="116" cy="348" rx="16" ry="12" />
        <path d="M400 500l24-36 8 6-24 36z" />
        <path d="M416 472h8v16h-8z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="156" cy="508" rx="16" ry="14" />
        <ellipse cx="140" cy="494" rx="6" ry="16" transform="rotate(-24 140 494)" />
        <ellipse cx="152" cy="480" rx="6" ry="16" />
        <ellipse cx="164" cy="482" rx="6" ry="15" />
        <ellipse cx="174" cy="492" rx="5" ry="13" transform="rotate(14 174 492)" />
        <ellipse cx="408" cy="548" rx="16" ry="14" />
        <ellipse cx="426" cy="534" rx="6" ry="16" transform="rotate(20 426 534)" />
        <ellipse cx="414" cy="520" rx="6" ry="16" />
        <ellipse cx="402" cy="522" rx="6" ry="15" />
        <ellipse cx="392" cy="532" rx="5" ry="13" transform="rotate(-14 392 532)" />
      </g>

      <g {...detail}>
        <path d="M232 244c14-10 34-10 46 2" />
        <path d="M306 246c14-10 34-10 46 2" />
        <path d="M236 268c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M294 268c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M282 282v20l-10 5" />
        <path d="M268 320c12 10 26 10 40 0" />
        <path d="M222 226c8 16 6 36 0 52M362 226c-8 16-6 36 0 52" />
        <path d="M224 428v212M292 416v224M360 428v212" />
        <path d="M150 470c14 28 12 86 4 154M434 470c-14 28-12 86-4 154" />
      </g>
      <g {...ink}>
        <ellipse cx="262" cy="268" rx="7" ry="8" />
        <ellipse cx="322" cy="268" rx="7" ry="8" />
        <circle cx="265" cy="265" r="2.1" fill={PAPER} />
        <circle cx="325" cy="265" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
