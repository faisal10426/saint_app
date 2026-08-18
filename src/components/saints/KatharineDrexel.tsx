import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function KatharineDrexel({ p, detail }: PortraitProps) {
  return (
    <>
      <path {...paperShape} d="M20 500h140v80H20z" />
      <path {...paperShape} d="M20 500l70-48 70 48z" />
      <path {...paperShape} d="M72 468v-22h16v16" />
      <path {...paperShape} d="M48 530h24v50H48z" />
      <path {...paperShape} d="M88 542h18v24h-18z" />
      <path
        {...paperShape}
        d="M470 94c8-20 42-24 56-4 12-18 46-14 54 10 20-6 36 18 24 32 12 6 6 28-12 28-6 16-36 16-46-2-12 14-40 6-48-12-14 6-40-8-32-52z"
      />

      <g {...p('halo')}>
        <circle cx="340" cy="238" r="116" />
      </g>
      <g {...detail}>
        <path d="M340 116v-26M244 156l-32-24M436 156l32-24M218 238h-36M462 238h36M266 132l-26-32M414 132l26-32" />
      </g>

      <g {...p('robe')}>
        <path d="M230 408C258 368 298 350 340 350C382 350 422 368 450 408L470 655H210Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M218 392C196 332 248 300 302 316C322 326 358 326 378 316C432 300 484 332 462 392C434 372 340 360 218 392Z" />
        <path d="M210 400C162 458 152 548 162 655H286C270 548 268 468 290 428C262 412 228 404 210 400Z" />
        <path d="M470 400C518 458 528 548 518 655H394C410 548 412 468 390 428C418 412 452 404 470 400Z" />
      </g>
      <g {...p('accent')}>
        <path d="M280 220C268 242 266 276 272 314C292 308 316 304 340 304C364 304 388 308 408 314C414 276 412 242 400 220C382 200 298 200 280 220Z" />
        <path d="M286 314C306 336 374 336 394 314C378 350 302 350 286 314Z" />
        <path d="M324 368C310 392 310 418 340 428C370 418 370 392 356 368C350 380 330 380 324 368Z" />
        <path d="M256 548C276 536 404 536 424 548L432 570H248z" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="340" cy="258" rx="66" ry="78" />
        <path d="M298 330l-8 34h96l-8-34z" />
      </g>

      <g {...p('symbol')}>
        <path d="M430 500h70v78H430z" />
        <path d="M442 518h46M442 536h46M442 554h46" />
        <ellipse cx="88" cy="620" rx="16" ry="22" />
        <path d="M72 642h32v14H72z" />
        <path d="M76 612c8-8 16-8 24 0" />
        <ellipse cx="128" cy="628" rx="14" ry="20" />
        <path d="M114 648h28v8h-28z" />
        <path d="M118 620c6-8 14-8 20 0" />
        <path d="M340 390v36" />
        <path d="M324 408h32" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="248" cy="508" rx="16" ry="14" />
        <ellipse cx="232" cy="494" rx="6" ry="16" transform="rotate(-24 232 494)" />
        <ellipse cx="244" cy="480" rx="6" ry="16" />
        <ellipse cx="256" cy="482" rx="6" ry="15" />
        <ellipse cx="266" cy="492" rx="5" ry="13" transform="rotate(14 266 492)" />
        <ellipse cx="438" cy="548" rx="16" ry="14" />
        <ellipse cx="456" cy="534" rx="6" ry="16" transform="rotate(20 456 534)" />
        <ellipse cx="444" cy="520" rx="6" ry="16" />
        <ellipse cx="432" cy="522" rx="6" ry="15" />
        <ellipse cx="422" cy="532" rx="5" ry="13" transform="rotate(-14 422 532)" />
      </g>

      <g {...detail}>
        <path d="M280 232c14-10 34-10 46 2" />
        <path d="M354 234c14-10 34-10 46 2" />
        <path d="M284 256c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M342 256c16-18 40-18 54 0-14 12-38 12-54 0z" />
        <path d="M328 270v20l-10 5" />
        <path d="M314 308c12 10 26 10 40 0" />
        <path d="M282 218c8 16 6 38 0 54M398 218c-8 16-6 38 0 54" />
        <path d="M260 428v212M340 416v224M420 428v212" />
        <path d="M192 470c16 30 14 88 6 156M488 470c-16 30-14 88-6 156" />
      </g>
      <g {...ink}>
        <ellipse cx="310" cy="256" rx="7" ry="8" />
        <ellipse cx="370" cy="256" rx="7" ry="8" />
        <circle cx="313" cy="253" r="2.1" fill={PAPER} />
        <circle cx="373" cy="253" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
