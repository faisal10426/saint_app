import { PAPER, STROKE, ink, type PortraitProps } from './types';

function hibiscus(cx: number, cy: number) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx="14" ry="20" />
      <ellipse cx={cx - 16} cy={cy + 4} rx="12" ry="16" transform={`rotate(-36 ${cx - 16} ${cy + 4})`} />
      <ellipse cx={cx + 16} cy={cy + 4} rx="12" ry="16" transform={`rotate(36 ${cx + 16} ${cy + 4})`} />
      <circle cx={cx} cy={cy + 6} r="5" />
      <path d={`M${cx} ${cy + 6}c0-16 8-24 8-24`} />
    </g>
  );
}

export default function DamienOfMolokai({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...p('cloud')} d="M36 430c-8 60 8 140 28 210H20C8 560 12 480 36 430Z" />
      <path {...p('cloud')} d="M48 500c18-80 8-140-8-180 28 20 40 90 28 170" />
      <ellipse {...p('cloud')} cx="52" cy="330" rx="28" ry="14" />
      <path {...p('cloud')} d="M560 420c8 60-8 140-28 210h44C632 550 628 470 560 420Z" />
      <path {...p('cloud')} d="M548 490c-18-80-8-140 8-180-28 20-40 90-28 170" />
      <ellipse {...p('cloud')} cx="588" cy="320" rx="30" ry="14" />
      <path {...p('cloud')} d="M470 500h140v155H470z" />
      <path {...p('cloud')} d="M500 460h80v40h-80z" />
      <path {...p('cloud')} d="M528 430h24v30h-24z" />
      <path {...p('cloud')} d="M512 540h22v50H512z" />

      <g {...p('halo')}>
        <circle cx="308" cy="236" r="114" />
      </g>
      <g {...detail}>
        <path d="M308 116v-24M214 156l-32-24M402 156l32-24M188 236h-36M428 236h36M236 132l-26-32M380 132l26-32" />
      </g>

      <g {...p('symbol')}>
        {hibiscus(90, 430)}
        {hibiscus(130, 470)}
        {hibiscus(70, 500)}
        {hibiscus(520, 200)}
        {hibiscus(560, 240)}
      </g>

      <g {...p('robe')}>
        <path d="M196 408C224 368 264 350 308 350C352 350 392 368 420 408L440 655H176Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M186 392C166 338 216 308 268 322C288 332 328 332 348 322C400 308 450 338 430 392C402 372 308 360 186 392Z" />
        <path d="M178 400C130 458 118 548 130 655H256C240 548 238 468 260 428C232 412 198 404 178 400Z" />
        <path d="M438 400C486 458 498 548 486 655H360C376 548 378 468 356 428C384 412 418 404 438 400Z" />
      </g>
      <g {...p('accent')}>
        <path d="M260 368C240 420 234 500 238 655H276C272 500 276 430 298 390C286 378 268 368 260 368Z" />
        <path d="M356 368C376 420 382 500 378 655H340C344 500 340 430 318 390C330 378 348 368 356 368Z" />
        <path d="M292 372h32v12h-32z" />
        <path d="M236 548C256 536 360 536 380 548L388 570H228z" />
      </g>

      <g {...p('hair')}>
        <path d="M226 224C214 164 258 142 308 142C358 142 402 164 390 224v40H226z" />
        <path d="M234 192c12-16 28-6 26 10M308 162c8-16 24-10 26 4M382 192c-12-16-28-6-26 10" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="308" cy="256" rx="66" ry="78" />
        <path d="M266 328l-8 34h96l-8-34z" />
      </g>
      <g {...p('hair')}>
        <path d="M242 306C232 352 256 392 308 404C360 392 384 352 374 306C354 334 332 346 308 346C284 346 262 334 242 306Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="156" cy="500" rx="16" ry="14" />
        <ellipse cx="140" cy="486" rx="6" ry="16" transform="rotate(-24 140 486)" />
        <ellipse cx="152" cy="472" rx="6" ry="16" />
        <ellipse cx="164" cy="474" rx="6" ry="15" />
        <ellipse cx="174" cy="484" rx="5" ry="13" transform="rotate(14 174 484)" />
        <ellipse cx="428" cy="548" rx="16" ry="14" />
        <ellipse cx="446" cy="534" rx="6" ry="16" transform="rotate(20 446 534)" />
        <ellipse cx="434" cy="520" rx="6" ry="16" />
        <ellipse cx="422" cy="522" rx="6" ry="15" />
        <ellipse cx="412" cy="532" rx="5" ry="13" transform="rotate(-14 412 532)" />
      </g>

      <g {...detail}>
        <path d="M246 230c14-10 34-10 46 2" />
        <path d="M324 232c14-10 34-10 46 2" />
        <path d="M250 254c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M312 254c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M298 268v20l-10 5" />
        <path d="M284 306c12 10 26 10 40 0" />
        <path d="M234 212c8 16 6 38 0 56M382 212c-8 16-6 38 0 56" />
        <path d="M228 428v212M308 416v224M388 428v212" />
        <path d="M156 470c16 30 14 88 6 156M460 470c-16 30-14 88-6 156" />
      </g>
      <g {...ink}>
        <ellipse cx="278" cy="254" rx="7" ry="8" />
        <ellipse cx="338" cy="254" rx="7" ry="8" />
        <circle cx="281" cy="251" r="2.1" fill={PAPER} />
        <circle cx="341" cy="251" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
