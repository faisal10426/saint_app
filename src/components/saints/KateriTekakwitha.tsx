import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

function pine(cx: number, cy: number, w: number, h: number) {
  return (
    <g>
      <path d={`M${cx} ${cy - h}L${cx + w * 0.55} ${cy - h * 0.45}H${cx + w * 0.28}L${cx + w} ${cy}H${cx - w}L${cx - w * 0.28} ${cy - h * 0.45}H${cx - w * 0.55}Z`} />
      <path d={`M${cx - 6} ${cy}h12v${Math.round(h * 0.22)}h-12z`} />
    </g>
  );
}

function lilyPair(cx: number, cy: number, rot: number) {
  return (
    <g transform={`rotate(${rot} ${cx} ${cy})`}>
      <path
        d={`M${cx} ${cy + 30}C${cx - 6} ${cy + 8} ${cx - 20} ${cy} ${cx - 7} ${cy - 24}C${cx - 2} ${cy - 8} ${cx + 2} ${cy - 8} ${cx + 7} ${cy - 24}C${cx + 20} ${cy} ${cx + 6} ${cy + 8} ${cx} ${cy + 30}Z`}
      />
      <path
        d={`M${cx} ${cy - 4}C${cx - 9} ${cy - 16} ${cx - 3} ${cy - 30} ${cx} ${cy - 36}C${cx + 3} ${cy - 30} ${cx + 9} ${cy - 16} ${cx} ${cy - 4}Z`}
      />
      <ellipse cx={cx} cy={cy - 6} rx="3" ry="7" />
    </g>
  );
}

export default function KateriTekakwitha({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M56 160c8-32 46-42 72-16 16-28 62-24 72 10 26-14 54 12 42 38 20 8 14 36-12 38-8 22-48 22-58-2-16 18-52 10-62-12-20 10-56-8-54-56z"
      />
      <path
        {...paperShape}
        d="M456 68c10-22 44-26 58-4 12-18 50-14 58 12 22-8 40 18 26 34 14 6 8 28-12 30-6 16-36 14-46-2-12 14-42 8-50-10-16 8-40-8-34-60z"
      />

      <g {...p('symbol')}>
        {pine(52, 430, 42, 110)}
        {pine(108, 470, 34, 86)}
        {pine(588, 424, 40, 108)}
        {pine(534, 466, 32, 84)}
      </g>
      <path {...paperShape} d="M8 655C80 590 180 600 240 655H8z" />
      <path {...paperShape} d="M632 655C560 588 460 598 400 655H632z" />
      <path
        {...paperShape}
        d="M8 620C70 600 140 608 200 628C160 640 80 648 8 642Z"
      />
      <path
        {...paperShape}
        d="M632 620C570 600 500 608 440 628C480 640 560 648 632 642Z"
      />

      <g {...p('halo')}>
        <circle cx="322" cy="240" r="118" />
      </g>
      <g {...detail}>
        <path d="M322 116v-32M220 152l-34-28M424 152l34-28M196 240h-40M448 240h40M244 130l-28-36M400 130l28-36" />
      </g>

      <g {...p('robe')}>
        <path d="M218 400C198 360 236 334 278 346C304 334 340 332 366 346C408 334 446 360 426 400C460 452 470 560 458 655H186C174 560 184 452 218 400Z" />
        <path d="M218 400C168 430 138 490 148 548C180 512 220 460 252 436C234 420 222 408 218 400Z" />
        <path d="M426 400C476 430 506 490 496 548C464 512 424 460 392 436C410 420 422 408 426 400Z" />
      </g>

      <g {...p('mantle')}>
        <path d="M232 388C216 360 248 338 286 350C308 360 336 360 358 350C396 338 428 360 412 388C388 372 322 364 232 388Z" />
        <path d="M210 430h28l-8 90h-20z" />
        <path d="M402 430h28l8 90h-20z" />
        <path d="M198 448l-16 8 10 22 14-6z" />
        <path d="M218 470l-16 8 10 22 14-6z" />
        <path d="M442 448l16 8-10 22-14-6z" />
        <path d="M422 470l16 8-10 22-14-6z" />
      </g>

      <g {...p('accent')}>
        <path d="M254 214C248 200 268 190 322 188C376 190 396 200 390 214C378 206 350 200 322 200C294 200 266 206 254 214Z" />
        <path d="M262 204h12v16h-12z" />
        <path d="M286 200h12v16h-12z" />
        <path d="M310 198h12v16h-12z" />
        <path d="M334 198h12v16h-12z" />
        <path d="M358 200h12v16h-12z" />
        <path d="M236 548C256 536 388 536 408 548L416 572H228z" />
        <path d="M248 552h16v12h-16zM280 552h16v12h-16zM312 552h16v12h-16zM344 552h16v12h-16zM376 552h16v12h-16z" />
        <circle cx="322" cy="378" r="6" />
        <circle cx="304" cy="384" r="5" />
        <circle cx="340" cy="384" r="5" />
        <circle cx="290" cy="394" r="5" />
        <circle cx="354" cy="394" r="5" />
        <circle cx="280" cy="408" r="5" />
        <circle cx="364" cy="408" r="5" />
      </g>

      <g {...p('hair')}>
        <path d="M240 206C224 154 268 128 322 126C376 128 420 154 404 206v40H240z" />
        <path d="M240 246C228 320 232 410 238 500C250 512 268 500 264 478C256 400 250 320 258 260C250 248 242 246 240 246Z" />
        <path d="M404 246C416 320 412 410 406 500C394 512 376 500 380 478C388 400 394 320 386 260C394 248 402 246 404 246Z" />
        <ellipse cx="248" cy="280" rx="16" ry="12" />
        <ellipse cx="244" cy="308" rx="16" ry="12" />
        <ellipse cx="242" cy="336" rx="15" ry="11" />
        <ellipse cx="240" cy="364" rx="15" ry="11" />
        <ellipse cx="240" cy="392" rx="14" ry="11" />
        <ellipse cx="242" cy="420" rx="14" ry="10" />
        <ellipse cx="244" cy="448" rx="13" ry="10" />
        <ellipse cx="248" cy="476" rx="13" ry="10" />
        <ellipse cx="396" cy="280" rx="16" ry="12" />
        <ellipse cx="400" cy="308" rx="16" ry="12" />
        <ellipse cx="402" cy="336" rx="15" ry="11" />
        <ellipse cx="404" cy="364" rx="15" ry="11" />
        <ellipse cx="404" cy="392" rx="14" ry="11" />
        <ellipse cx="402" cy="420" rx="14" ry="10" />
        <ellipse cx="400" cy="448" rx="13" ry="10" />
        <ellipse cx="396" cy="476" rx="13" ry="10" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="322" cy="256" rx="68" ry="80" />
        <path d="M280 328l-8 36h100l-8-36z" />
      </g>

      <g {...p('symbol')}>
        <path d="M198 350v150" />
        <path d="M170 392h56" />
        <ellipse cx="88" cy="620" rx="28" ry="16" />
        <ellipse cx="70" cy="612" rx="10" ry="8" />
        <ellipse cx="108" cy="612" rx="10" ry="8" />
        <path d="M88 604C80 588 96 578 104 590" />
        {lilyPair(458, 500, 18)}
        {lilyPair(486, 472, 34)}
        <path d="M466 528c6 28 4 54 2 78" />
        <path d="M484 508c8 30 6 56 4 82" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="198" cy="508" rx="18" ry="15" />
        <ellipse cx="180" cy="496" rx="7" ry="16" transform="rotate(-28 180 496)" />
        <ellipse cx="194" cy="482" rx="6" ry="17" />
        <ellipse cx="208" cy="484" rx="6" ry="16" />
        <ellipse cx="220" cy="494" rx="6" ry="14" transform="rotate(16 220 494)" />
        <ellipse cx="468" cy="548" rx="16" ry="14" />
        <ellipse cx="484" cy="534" rx="7" ry="16" transform="rotate(22 484 534)" />
        <ellipse cx="472" cy="520" rx="6" ry="16" />
        <ellipse cx="460" cy="522" rx="6" ry="15" />
        <ellipse cx="450" cy="532" rx="6" ry="13" transform="rotate(-14 450 532)" />
      </g>

      <g {...detail}>
        <path d="M258 230c16-12 38-12 50 2" />
        <path d="M336 232c16-12 38-12 50 2" />
        <path d="M262 254c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M326 254c16-18 42-18 56 0-14 12-40 12-56 0z" />
        <path d="M314 268v20l-10 6" />
        <path d="M300 306c14 10 28 10 42 0" />
        <path d="M250 216c8 18 6 40 2 58M394 216c-8 18-6 40-2 58" />
        <path d="M240 188c18 4 36 2 52-6M322 186c18 8 36 10 52 6" />
        <path d="M230 430v210M322 418v222M414 430v210" />
        <path d="M168 470c18 34 16 88 8 160M476 490c-16 30-12 82-6 148" />
      </g>
      <g {...ink}>
        <ellipse cx="290" cy="254" rx="7" ry="8" />
        <ellipse cx="354" cy="254" rx="7" ry="8" />
        <circle cx="293" cy="251" r="2.1" fill={PAPER} />
        <circle cx="357" cy="251" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
