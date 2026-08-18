import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function IsidoreOfSeville({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...paperShape} d="M20 220h110v420H20z" />
      <path {...paperShape} d="M32 250h86v18H32z" />
      <path {...paperShape} d="M32 300h86v18H32z" />
      <path {...paperShape} d="M32 350h86v18H32z" />
      <path {...paperShape} d="M32 400h86v18H32z" />
      <path {...paperShape} d="M32 450h86v18H32z" />
      <path {...paperShape} d="M32 500h86v18H32z" />
      <path {...paperShape} d="M32 550h86v18H32z" />
      <path {...paperShape} d="M32 600h86v18H32z" />
      <path
        {...paperShape}
        d="M468 92c8-20 42-24 56-4 12-18 46-14 54 10 20-6 36 18 24 32 12 6 6 28-12 28-6 16-36 16-46-2-12 14-40 6-48-12-14 6-40-8-32-52z"
      />

      <g {...p('halo')}>
        <circle cx="352" cy="236" r="114" />
      </g>
      <g {...detail}>
        <path d="M352 116v-24M258 156l-32-24M446 156l32-24M232 236h-36M472 236h36M280 132l-26-32M424 132l26-32" />
      </g>

      <g {...p('accent')}>
        <path d="M294 118C282 86 314 62 352 68C390 62 422 86 410 118C390 102 312 102 294 118Z" />
        <path d="M312 118h80v16l-12 20H324l-12-20z" />
        <path d="M352 118v16" />
      </g>

      <g {...p('robe')}>
        <path d="M240 408C268 368 308 350 352 350C396 350 436 368 464 408L484 655H220Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M228 392C206 334 258 304 312 318C332 328 372 328 392 318C446 304 498 334 476 392C448 372 352 360 228 392Z" />
        <path d="M220 400C172 458 162 548 172 655H294C278 548 276 468 298 428C270 412 236 404 220 400Z" />
        <path d="M484 400C532 458 542 548 532 655H410C426 548 428 468 406 428C434 412 468 404 484 400Z" />
      </g>
      <g {...p('accent')}>
        <path d="M336 372h32v12h-32z" />
        <path d="M272 548C292 536 412 536 432 548L440 570H264z" />
        <path d="M530 210v270" />
        <path d="M518 470c-16 8-24 24-14 40 16 6 32-6 28-20" />
      </g>

      <g {...p('hair')}>
        <path d="M270 224C260 164 304 144 352 144C400 144 444 164 434 224v38H270z" />
        <path d="M278 192c12-16 28-6 26 10M352 162c8-16 24-10 26 4M426 192c-12-16-28-6-26 10" />
      </g>
      <g {...p('skin')}>
        <ellipse cx="352" cy="256" rx="66" ry="78" />
        <path d="M310 328l-8 34h96l-8-34z" />
      </g>
      <g {...p('hair')}>
        <path d="M286 308C278 352 302 392 352 404C402 392 426 352 418 308C398 336 376 348 352 348C328 348 306 336 286 308Z" />
      </g>

      <g {...p('symbol')}>
        <path d="M160 500h90v28H160z" />
        <path d="M168 472h90v28H168z" />
        <path d="M176 444h90v28H176z" />
        <path d="M184 416h90v28H184z" />
        <path d="M192 388h90v28H192z" />
        <ellipse cx="500" cy="600" rx="48" ry="32" />
        <ellipse cx="500" cy="600" rx="36" ry="22" />
        <path d="M500 568v64M468 600h64" />
        <path d="M430 500l26-38 8 6-26 38z" />
        <path d="M448 470h8v16h-8z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="196" cy="548" rx="16" ry="14" />
        <ellipse cx="180" cy="534" rx="6" ry="16" transform="rotate(-24 180 534)" />
        <ellipse cx="192" cy="520" rx="6" ry="16" />
        <ellipse cx="204" cy="522" rx="6" ry="15" />
        <ellipse cx="214" cy="532" rx="5" ry="13" transform="rotate(14 214 532)" />
        <ellipse cx="438" cy="548" rx="16" ry="14" />
        <ellipse cx="456" cy="534" rx="6" ry="16" transform="rotate(20 456 534)" />
        <ellipse cx="444" cy="520" rx="6" ry="16" />
        <ellipse cx="432" cy="522" rx="6" ry="15" />
        <ellipse cx="422" cy="532" rx="5" ry="13" transform="rotate(-14 422 532)" />
      </g>

      <g {...detail}>
        <path d="M290 230c14-10 34-10 46 2" />
        <path d="M368 232c14-10 34-10 46 2" />
        <path d="M294 254c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M356 254c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M342 268v20l-10 5" />
        <path d="M328 306c12 10 26 10 40 0" />
        <path d="M278 212c8 16 6 38 0 56M426 212c-8 16-6 38 0 56" />
        <path d="M272 428v212M352 416v224M432 428v212" />
        <path d="M202 470c14 28 12 86 4 154M502 470c-14 28-12 86-4 154" />
      </g>
      <g {...ink}>
        <ellipse cx="322" cy="254" rx="7" ry="8" />
        <ellipse cx="382" cy="254" rx="7" ry="8" />
        <circle cx="325" cy="251" r="2.1" fill={PAPER} />
        <circle cx="385" cy="251" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
