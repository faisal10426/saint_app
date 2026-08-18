import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function Scholastica({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M40 120c20-36 70-28 86 12 18-24 62-16 70 16 24-8 42 18 28 36 14 6 6 28-14 28-6 16-36 14-44-2-12 16-42 6-50-12-16 8-44-10-76-78z"
      />
      <path {...paperShape} d="M72 150c-4 18 6 28 18 26M108 142c0 16 12 26 24 22M148 148c2 16 16 24 28 18" />
      <path {...paperShape} d="M470 430h140v225H470z" />
      <path {...paperShape} d="M490 390h100v40H490z" />
      <path {...paperShape} d="M512 350h20v40h-20z" />
      <path {...paperShape} d="M552 360h16v30h-16z" />
      <path {...paperShape} d="M508 480h24v80H508z" />
      <path {...paperShape} d="M556 500h16v50h-16z" />

      <g {...p('halo')}>
        <circle cx="292" cy="248" r="116" />
      </g>
      <g {...detail}>
        <path d="M292 126v-26M198 166l-32-24M386 166l32-24M170 248h-36M414 248h36M220 142l-26-32M364 142l26-32" />
      </g>

      <g {...p('symbol')}>
        <ellipse cx="168" cy="160" rx="20" ry="12" />
        <ellipse cx="184" cy="150" rx="10" ry="8" />
        <path d="M150 162C136 148 134 168 152 170" />
        <path d="M164 154C156 136 184 132 178 156" />
        <path d="M192 146l10 4-10 4z" />
      </g>

      <g {...p('robe')}>
        <path d="M188 412C216 370 252 352 292 352C332 352 368 370 396 412L416 655H168Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M176 394C154 332 208 298 256 314C276 324 308 324 328 314C376 298 430 332 408 394C380 374 292 362 176 394Z" />
        <path d="M168 402C118 462 106 548 118 655H246C230 548 228 468 250 428C222 412 186 406 168 402Z" />
        <path d="M416 402C466 462 478 548 466 655H338C354 548 356 468 334 428C362 412 398 406 416 402Z" />
      </g>
      <g {...p('accent')}>
        <path d="M232 224C220 246 218 280 224 318C244 312 268 308 292 308C316 308 340 312 360 318C366 280 364 246 352 224C334 204 250 204 232 224Z" />
        <path d="M238 318C258 340 326 340 346 318C330 354 254 354 238 318Z" />
        <path d="M228 548C248 536 336 536 356 548L364 570H220z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="292" cy="268" rx="66" ry="78" />
        <path d="M250 340l-8 34h96l-8-34z" />
      </g>

      <g {...p('symbol')}>
        <path d="M80 480h86v90H80z" />
        <path d="M92 498h62M92 518h62M92 538h62" />
        <g {...ink}>
          <text x="123" y="572" textAnchor="middle" fontSize="11" fontFamily="serif" fill={STROKE}>
            REGULA
          </text>
        </g>
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
        <path d="M232 242c14-10 34-10 46 2" />
        <path d="M306 244c14-10 34-10 46 2" />
        <path d="M236 266c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M294 266c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M280 280v20l-10 5" />
        <path d="M266 318c12 10 26 10 40 0" />
        <path d="M234 228c8 16 6 38 0 54M350 228c-8 16-6 38 0 54" />
        <path d="M224 430v210M292 418v222M360 430v210" />
        <path d="M148 470c16 30 14 88 6 156M436 470c-16 30-14 88-6 156" />
      </g>
      <g {...ink}>
        <ellipse cx="262" cy="266" rx="7" ry="8" />
        <ellipse cx="322" cy="266" rx="7" ry="8" />
        <circle cx="265" cy="263" r="2.1" fill={PAPER} />
        <circle cx="325" cy="263" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
