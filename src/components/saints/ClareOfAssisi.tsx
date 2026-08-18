import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function ClareOfAssisi({ p, detail }: PortraitProps) {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    const w = 0.12;
    const outer = i % 2 === 0 ? 62 : 48;
    const pts = [
      [168 + Math.cos(a - w) * 22, 248 + Math.sin(a - w) * 22],
      [168 + Math.cos(a) * outer, 248 + Math.sin(a) * outer],
      [168 + Math.cos(a + w) * 22, 248 + Math.sin(a + w) * 22],
    ];
    return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  });

  return (
    <>
      <path
        {...paperShape}
        d="M48 190c4-32 42-46 68-22 16-30 62-28 76 6 28-14 56 10 46 36 22 8 16 40-12 42-8 24-50 24-62 0-18 20-54 12-64-12-22 10-56-8-52-50z"
      />
      <path
        {...paperShape}
        d="M438 88c8-22 42-28 58-8 12-20 48-18 58 8 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 18-48 0-12 16-42 10-50-10-16 8-42-8-34-54z"
      />
      <path
        {...paperShape}
        d="M40 520c6-24 40-30 58-8 14-22 50-18 60 10 20-8 36 16 24 32 12 8 6 28-14 30-6 16-36 16-46-2-12 14-40 8-48-10-16 8-40-6-34-52z"
      />
      <path {...paperShape} d="M420 655C470 575 540 560 600 610C550 640 480 650 420 655Z" />

      <g {...p('halo')}>
        <circle cx="340" cy="248" r="114" />
      </g>
      <g {...detail}>
        <path d="M340 128v-28M240 168l-32-26M440 168l32-26M220 248h-38M460 248h38M264 148l-26-32M416 148l26-32" />
      </g>

      <g {...p('mantle')}>
        <path d="M218 358C190 230 248 138 340 130C432 138 490 230 462 358C420 380 260 380 218 358Z" />
        <path d="M218 358C168 420 154 528 166 655H270C254 540 248 450 270 408C242 388 226 370 218 358Z" />
        <path d="M462 358C512 420 526 528 514 655H410C426 540 432 450 410 408C438 388 454 370 462 358Z" />
      </g>
      <g {...p('robe')}>
        <path d="M248 366C228 250 274 170 340 164C406 170 452 250 432 366C392 388 288 388 248 366Z" />
        <path d="M272 426C296 400 316 390 340 390C364 390 384 400 408 426L430 655H250Z" />
      </g>
      <g {...p('accent')}>
        <path d="M288 226C278 246 276 278 282 316C300 310 320 306 340 306C360 306 380 310 398 316C404 278 402 246 392 226C376 208 304 208 288 226Z" />
        <path d="M294 316C312 336 368 336 386 316C372 350 308 350 294 316Z" />
        <path d="M248 552C268 540 412 540 432 552L440 574H240z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="340" cy="268" rx="68" ry="80" />
        <path d="M300 340l-8 34h96l-8-34z" />
      </g>

      <g {...p('symbol')}>
        <circle cx="168" cy="248" r="26" />
        <circle cx="168" cy="248" r="14" />
        {rays.map((pts, i) => (
          <polygon key={i} points={pts} />
        ))}
        <path d="M160 276h16v36h-16z" />
        <path d="M148 312h40v12h-40z" />
        <path d="M168 324v40" />
        <path d="M470 400v180" />
        <path d="M470 400C492 352 530 356 538 400C516 444 478 438 470 400Z" />
        <path d="M490 374C506 336 538 342 544 378C528 414 498 408 490 374Z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="168" cy="378" rx="18" ry="16" />
        <ellipse cx="150" cy="362" rx="7" ry="16" transform="rotate(-30 150 362)" />
        <ellipse cx="162" cy="348" rx="6" ry="18" />
        <ellipse cx="174" cy="350" rx="6" ry="16" />
        <ellipse cx="186" cy="360" rx="6" ry="14" transform="rotate(16 186 360)" />
        <ellipse cx="470" cy="548" rx="16" ry="14" />
        <ellipse cx="488" cy="534" rx="7" ry="14" transform="rotate(22 488 534)" />
        <ellipse cx="476" cy="520" rx="6" ry="16" />
        <ellipse cx="464" cy="522" rx="6" ry="14" />
        <ellipse cx="454" cy="530" rx="5" ry="12" transform="rotate(-12 454 530)" />
      </g>

      <g {...detail}>
        <path d="M276 242c16-12 38-12 50 2" />
        <path d="M354 244c16-12 38-12 50 2" />
        <path d="M280 266c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M344 266c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M332 280v20l-10 6" />
        <path d="M318 318c14 10 28 10 42 0" />
        <path d="M278 228c8 18 6 40 2 58M402 228c-8 18-6 40-2 58" />
        <path d="M278 430v210M340 418v222M402 430v210" />
        <path d="M188 470c20 36 18 90 10 160M492 470c-20 36-18 90-10 160" />
      </g>
      <g {...ink}>
        <ellipse cx="308" cy="266" rx="7" ry="8" />
        <ellipse cx="372" cy="266" rx="7" ry="8" />
        <circle cx="311" cy="263" r="2.1" fill={PAPER} />
        <circle cx="375" cy="263" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
