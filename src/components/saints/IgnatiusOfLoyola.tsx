import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function IgnatiusOfLoyola({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M44 192c6-28 42-38 64-14 16-26 58-22 70 8 24-12 50 14 38 36 18 8 10 36-12 38-8 20-46 20-56-2-16 18-50 10-58-12-20 8-52-8-48-54z"
      />

      <g {...p('halo')}>
        <circle cx="332" cy="248" r="116" />
      </g>
      <g {...detail}>
        <path d="M332 126v-28M234 166l-34-26M430 166l34-26M210 248h-38M454 248h38M256 142l-28-34M408 142l28-34" />
      </g>

      <g {...p('symbol')}>
        <circle cx="332" cy="128" r="36" />
        <path d="M332 100v56M308 128h48M318 112l28 32M346 112l-28 32" />
        <g {...ink}>
          <text x="332" y="136" textAnchor="middle" fontSize="16" fontFamily="serif" fill={STROKE} pointerEvents="none">
            IHS
          </text>
        </g>
      </g>

      <g {...p('robe')}>
        <path d="M218 412C246 372 288 354 332 354C376 354 418 372 446 412L468 655H196Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M208 396C188 344 236 314 288 328C310 338 354 338 376 328C428 314 476 344 456 396C428 376 332 364 208 396Z" />
        <path d="M200 404C152 462 140 548 152 655H276C260 548 258 468 280 428C252 412 218 406 200 404Z" />
        <path d="M464 404C512 462 524 548 512 655H388C404 548 406 468 384 428C412 412 446 406 464 404Z" />
      </g>
      <g {...p('accent')}>
        <path d="M316 372h32v12h-32z" />
        <path d="M248 548C268 536 396 536 416 548L424 570H240z" />
        <circle cx="332" cy="400" r="10" />
      </g>

      <g {...p('hair')}>
        <path d="M248 236C236 172 282 148 332 148C382 148 428 172 416 236v42H248z" />
        <path d="M256 204c12-18 30-6 28 10M332 170c8-18 26-12 28 4M408 204c-12-18-30-6-28 10" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="332" cy="268" rx="68" ry="80" />
        <path d="M290 342l-8 36h96l-8-36z" />
      </g>
      <g {...p('hair')}>
        <path d="M264 318C254 368 278 414 332 428C386 414 410 368 400 318C378 350 356 362 332 362C308 362 286 350 264 318Z" />
        <path d="M298 314C312 330 352 330 366 314C352 324 312 324 298 314Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M108 280v280" />
        <path d="M92 280h32" />
        <circle cx="108" cy="268" r="12" />
        <path d="M48 600h70v40H48z" />
        <path d="M58 600v-28h50v28" />
        <ellipse cx="83" cy="560" rx="28" ry="16" />
        <path d="M70 548c8-16 18-16 26 0" />
        <path d="M460 470h72v86H460z" />
        <path d="M472 488h48M472 508h48M472 528h48" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="156" cy="500" rx="16" ry="14" />
        <ellipse cx="140" cy="486" rx="6" ry="16" transform="rotate(-26 140 486)" />
        <ellipse cx="152" cy="472" rx="6" ry="16" />
        <ellipse cx="164" cy="474" rx="6" ry="15" />
        <ellipse cx="174" cy="484" rx="5" ry="13" transform="rotate(14 174 484)" />
        <ellipse cx="468" cy="548" rx="16" ry="14" />
        <ellipse cx="486" cy="534" rx="6" ry="16" transform="rotate(20 486 534)" />
        <ellipse cx="474" cy="520" rx="6" ry="16" />
        <ellipse cx="462" cy="522" rx="6" ry="15" />
        <ellipse cx="452" cy="532" rx="5" ry="13" transform="rotate(-14 452 532)" />
      </g>

      <g {...detail}>
        <path d="M268 242c14-10 36-10 48 2" />
        <path d="M348 244c14-10 36-10 48 2" />
        <path d="M272 266c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M336 266c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M322 280v20l-10 5" />
        <path d="M308 318c12 10 26 10 40 0" />
        <path d="M256 224c8 16 6 38 0 56M408 224c-8 16-6 38 0 56" />
        <path d="M248 430v210M332 418v222M416 430v210" />
        <path d="M178 470c16 30 14 88 6 156M486 470c-16 30-14 88-6 156" />
      </g>
      <g {...ink}>
        <ellipse cx="302" cy="266" rx="7" ry="8" />
        <ellipse cx="362" cy="266" rx="7" ry="8" />
        <circle cx="305" cy="263" r="2.1" fill={PAPER} />
        <circle cx="365" cy="263" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
