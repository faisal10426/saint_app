import { PAPER, STROKE, ink, type PortraitProps } from './types';

function blossom(cx: number, cy: number) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="16" />
      <circle cx={cx - 10} cy={cy - 6} r="10" />
      <circle cx={cx + 10} cy={cy - 6} r="10" />
      <circle cx={cx} cy={cy + 4} r="6" />
    </g>
  );
}

export default function GiannaBerettaMolla({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...p('cloud')}
        d="M40 188c6-28 42-38 64-14 16-26 58-22 70 8 24-12 50 14 38 36 18 8 10 36-12 38-8 20-46 20-56-2-16 18-50 10-58-12-20 8-52-8-48-54z"
      />
      <path
        {...p('cloud')}
        d="M460 96c8-20 42-24 56-4 12-18 46-14 54 10 20-6 36 18 24 32 12 6 6 28-12 28-6 16-36 16-46-2-12 14-40 6-48-12-14 6-40-8-32-52z"
      />

      <g {...p('halo')}>
        <circle cx="300" cy="248" r="112" />
      </g>
      <g {...detail}>
        <path d="M300 130v-24M208 168l-30-22M392 168l30-22M182 248h-34M418 248h34M230 146l-24-30M370 146l24-30" />
      </g>

      <g {...p('symbol')}>
        {blossom(70, 450)}
        {blossom(110, 490)}
        {blossom(54, 510)}
        {blossom(540, 450)}
        {blossom(574, 490)}
      </g>

      <g {...p('robe')}>
        <path d="M196 420C228 378 262 360 300 360C338 360 372 378 404 420L422 655H178Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M210 400C196 360 230 338 270 348C286 354 314 354 330 348C370 338 404 360 390 400C364 384 300 376 210 400Z" />
        <path d="M188 412C160 460 152 540 160 655H250C240 540 242 470 262 432C236 420 206 412 188 412Z" />
        <path d="M412 412C440 460 448 540 440 655H350C360 540 358 470 338 432C364 420 394 412 412 412Z" />
      </g>
      <g {...p('accent')}>
        <path d="M268 368h64v14H268z" />
        <ellipse cx="300" cy="400" rx="28" ry="10" />
        <path d="M248 548C268 536 332 536 352 548L360 568H240z" />
      </g>

      <g {...p('hair')}>
        <path d="M226 236C214 170 256 148 300 148C344 148 386 170 374 236C362 216 334 206 300 206C266 206 238 216 226 236Z" />
        <path d="M220 250C208 320 216 400 228 470C246 450 252 380 250 330C256 390 264 450 280 478C268 400 262 330 268 270z" />
        <path d="M380 250C392 320 384 400 372 470C354 450 348 380 350 330C344 390 336 450 320 478C332 400 338 330 332 270z" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="300" cy="268" rx="62" ry="74" />
        <path d="M262 336l-6 32h88l-6-32z" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="400" cy="430" rx="22" ry="16" />
        <path d="M384 444h32v8h-32z" />
        <path d="M392 416c8-6 16-6 24 0" />
        <path d="M368 448c-20 8-28 40-12 62 18 8 36-8 32-28" />
        <ellipse cx="388" cy="520" rx="28" ry="36" />
        <ellipse cx="388" cy="490" rx="18" ry="16" />
        <path d="M370 506h36v40H370z" />
        <path d="M376 486c8-8 16-8 24 0" />
        <path d="M80 560h70v50H80z" />
        <path d="M92 548h46v12H92z" />
        <circle cx="272" cy="500" r="7" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="248" cy="508" rx="14" ry="12" />
        <ellipse cx="234" cy="496" rx="5" ry="14" transform="rotate(-20 234 496)" />
        <ellipse cx="244" cy="484" rx="5" ry="14" />
        <ellipse cx="254" cy="486" rx="5" ry="13" />
        <ellipse cx="262" cy="494" rx="5" ry="12" transform="rotate(12 262 494)" />
        <ellipse cx="430" cy="548" rx="14" ry="12" />
        <ellipse cx="444" cy="536" rx="5" ry="14" transform="rotate(16 444 536)" />
        <ellipse cx="434" cy="524" rx="5" ry="14" />
        <ellipse cx="424" cy="526" rx="5" ry="13" />
        <ellipse cx="416" cy="534" rx="5" ry="12" transform="rotate(-12 416 534)" />
      </g>

      <g {...detail}>
        <path d="M244 242c12-8 32-8 42 2" />
        <path d="M314 244c12-8 32-8 42 2" />
        <path d="M248 266c14-16 38-16 52 0-12 10-36 10-52 0z" />
        <path d="M306 266c14-16 38-16 52 0-12 10-36 10-52 0z" />
        <path d="M292 278v18l-8 5" />
        <path d="M278 314c12 8 24 8 36 0" />
        <path d="M238 228c6 14 4 32 0 48M362 228c-6 14-4 32 0 48" />
        <path d="M228 438v202M300 426v214M372 438v202" />
        <path d="M168 470c14 28 12 86 4 154M432 470c-14 28-12 86-4 154" />
      </g>
      <g {...ink}>
        <ellipse cx="272" cy="266" rx="6.5" ry="7.5" />
        <ellipse cx="328" cy="266" rx="6.5" ry="7.5" />
        <circle cx="274" cy="263" r="2" fill={PAPER} />
        <circle cx="330" cy="263" r="2" fill={PAPER} />
      </g>
    </>
  );
}
