import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function Philomena({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M438 86c8-22 42-28 58-8 12-20 48-16 58 10 20-8 38 16 26 32 14 8 6 28-12 30-6 16-36 14-46-2-12 14-40 8-48-10-16 8-40-8-36-52z"
      />
      <path
        {...paperShape}
        d="M40 508c6-24 40-30 58-8 14-22 50-16 60 12 20-8 36 16 24 32 12 8 6 28-14 30-6 16-34 14-44-4-12 14-40 6-48-12-16 8-40-6-36-50z"
      />

      <g {...p('halo')}>
        <circle cx="336" cy="248" r="124" />
      </g>
      <g {...detail}>
        <path d="M336 118v-32M232 160l-34-28M440 160l34-28M206 248h-38M466 248h38M256 138l-28-36M416 138l28-36" />
      </g>

      <g {...p('symbol')}>
        <path d="M118 250v210" />
        <path d="M70 250h96" />
        <path d="M118 250C70 310 70 390 118 450C166 390 166 310 118 250Z" />
        <path d="M118 214v36" />
        <path d="M96 214h44l-8 22-14-8-14 8z" />
        <ellipse cx="548" cy="430" rx="10" ry="48" transform="rotate(-28 548 430)" />
        <ellipse cx="572" cy="470" rx="8" ry="36" transform="rotate(-18 572 470)" />
        <ellipse cx="520" cy="478" rx="8" ry="34" transform="rotate(-38 520 478)" />
        <path d="M500 360c8 40 4 90-8 140 18-8 42-6 58 8 12-46 8-100-10-148-16 18-38 16-40 0z" />
        <ellipse cx="86" cy="560" rx="8" ry="22" transform="rotate(-18 86 560)" />
        <ellipse cx="108" cy="548" rx="7" ry="20" />
        <ellipse cx="128" cy="560" rx="8" ry="22" transform="rotate(18 128 560)" />
        <circle cx="108" cy="582" r="5" />
        <path d="M108 586v40" />
      </g>

      <g {...p('robe')}>
        <path d="M232 376C210 258 256 172 336 164C416 172 462 258 440 376C396 400 276 400 232 376Z" />
        <path d="M252 426C280 400 304 390 336 390C368 390 392 400 420 426L442 655H230Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M448 358C500 418 518 520 508 655H400C416 540 414 450 392 412C418 392 438 372 448 358Z" />
      </g>

      <g {...p('accent')}>
        <path d="M292 148l16-28 28 12-8 32z" />
        <path d="M336 120l18-32 22 18-6 28z" />
        <path d="M380 148l-16-28 28 8 10 34z" />
        <path d="M300 156h72v14H300z" />
        <path d="M256 548h160l10 26H246z" />
      </g>

      <g {...p('hair')}>
        <path d="M250 224C234 162 284 136 336 134C388 136 438 162 422 224C414 204 376 192 336 192C296 192 258 204 250 224Z" />
        <path d="M252 240C234 286 238 350 252 420C268 390 274 336 278 288C270 266 260 250 252 240Z" />
        <path d="M420 240C438 286 434 350 420 420C404 390 398 336 394 288C402 266 412 250 420 240Z" />
        <path d="M264 192c12-20 28-8 26 8M336 164c10-20 28-14 28 4M408 192c-12-20-28-8-26 8" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="336" cy="264" rx="68" ry="80" />
        <path d="M294 338l-8 36h100l-8-36z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="132" cy="430" rx="18" ry="16" />
        <ellipse cx="116" cy="416" rx="7" ry="16" transform="rotate(-30 116 416)" />
        <ellipse cx="126" cy="400" rx="6" ry="16" />
        <ellipse cx="138" cy="398" rx="6" ry="18" />
        <ellipse cx="150" cy="404" rx="6" ry="15" transform="rotate(14 150 404)" />
        <ellipse cx="158" cy="418" rx="5" ry="12" transform="rotate(26 158 418)" />

        <ellipse cx="498" cy="478" rx="16" ry="14" />
        <ellipse cx="514" cy="464" rx="6" ry="15" transform="rotate(26 514 464)" />
        <ellipse cx="504" cy="450" rx="6" ry="16" />
        <ellipse cx="492" cy="448" rx="6" ry="16" />
        <ellipse cx="480" cy="454" rx="5" ry="14" transform="rotate(-12 480 454)" />
      </g>

      <g {...detail}>
        <path d="M272 238c16-12 36-12 48 2" />
        <path d="M352 240c16-12 36-12 48 2" />
        <path d="M276 262c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M342 262c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M328 276v20l-10 6" />
        <path d="M314 314c14 10 28 10 42 0" />
        <path d="M254 224c8 16 6 38 2 56M418 224c-8 16-6 38-2 56" />
        <path d="M262 440v200M336 428v212M410 440v200" />
        <path d="M188 470c16 32 14 90 6 160" />
      </g>
      <g {...ink}>
        <ellipse cx="304" cy="262" rx="7" ry="8" />
        <ellipse cx="368" cy="262" rx="7" ry="8" />
        <circle cx="307" cy="259" r="2.1" fill={PAPER} />
        <circle cx="371" cy="259" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
