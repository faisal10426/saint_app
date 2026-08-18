import { PAPER, STROKE, ink, paperShape, type PortraitProps } from './types';

export default function BernadetteSoubirous({ p, detail }: PortraitProps) {
  return (
    <>
      <path
        {...paperShape}
        d="M438 88c8-22 42-28 58-8 12-20 48-18 58 8 22-8 40 16 28 32 14 8 8 30-12 32-6 18-38 18-48 0-12 16-42 10-50-10-16 8-42-8-34-54z"
      />
      <path
        {...paperShape}
        d="M40 200c4-32 42-46 68-22 16-30 62-28 76 6 28-14 56 10 46 36 22 8 16 40-12 42-8 24-50 24-62 0-18 20-54 12-64-12-22 10-56-8-52-50z"
      />

      <path
        {...paperShape}
        d="M8 655C28 480 80 360 168 300C120 420 70 520 48 655Z"
      />
      <path
        {...paperShape}
        d="M48 655C70 500 130 390 220 340C170 450 110 550 90 655Z"
      />
      <path
        {...paperShape}
        d="M8 655C40 610 90 600 130 640C70 648 30 654 8 655Z"
      />
      <ellipse cx="96" cy="628" rx="28" ry="12" {...paperShape} />
      <path {...paperShape} d="M96 628c-4 16 2 22 12 18" />

      <g {...p('halo')}>
        <circle cx="340" cy="248" r="110" />
      </g>
      <g {...detail}>
        <path d="M340 132v-28M246 170l-30-24M434 170l30-24M224 248h-36M456 248h36M268 150l-24-32M412 150l24-32" />
      </g>

      <g {...p('robe')}>
        <path d="M248 390C228 270 276 178 340 172C404 178 452 270 432 390C392 412 288 412 248 390Z" />
        <path d="M270 430C294 406 316 396 340 396C364 396 386 406 410 430L430 655H250Z" />
      </g>
      <g {...p('mantle')}>
        <path d="M250 378C230 330 274 304 322 318C340 324 360 324 378 318C426 304 470 330 450 378C424 358 340 350 250 378Z" />
        <path d="M240 386C198 430 182 520 190 610H268C260 520 266 450 290 418C266 404 248 390 240 386Z" />
      </g>
      <g {...p('accent')}>
        <path d="M268 430C258 470 252 540 258 620H282C276 540 280 480 292 448Z" />
        <path d="M268 430h140l8 22H262z" />
        <path d="M300 452c8 40 4 90 0 140" />
      </g>

      <g {...p('hair')}>
        <path d="M268 232C256 168 296 138 340 138C384 138 424 168 412 232C400 212 372 200 340 202C308 200 280 212 268 232Z" />
        <path d="M262 248C250 300 258 370 278 420C294 400 300 350 296 310C290 276 274 254 262 248Z" />
        <path d="M418 248C430 300 422 370 402 420C386 400 380 350 384 310C390 276 406 254 418 248Z" />
        <path d="M282 180c10-18 26-8 24 8M340 156c8-18 24-12 26 6M398 180c-10-18-26-8-24 8" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="340" cy="266" rx="66" ry="78" />
        <path d="M302 336l-8 32h92l-8-32z" />
      </g>

      <g {...p('symbol')}>
        <circle cx="430" cy="500" r="40" fill="none" />
        <circle cx="430" cy="464" r="7" />
        <circle cx="458" cy="480" r="7" />
        <circle cx="466" cy="508" r="7" />
        <circle cx="448" cy="530" r="7" />
        <circle cx="412" cy="530" r="7" />
        <circle cx="394" cy="508" r="7" />
        <circle cx="402" cy="480" r="7" />
        <path d="M430 540v24" />
        <path d="M430 564v20M418 576h24" />
      </g>

      <g {...p('skin')}>
        <ellipse cx="278" cy="520" rx="12" ry="34" transform="rotate(-8 278 520)" />
        <ellipse cx="294" cy="512" rx="11" ry="36" />
        <ellipse cx="310" cy="514" rx="11" ry="34" transform="rotate(6 310 514)" />
        <ellipse cx="326" cy="526" rx="10" ry="28" transform="rotate(14 326 526)" />
        <ellipse cx="392" cy="520" rx="12" ry="34" transform="rotate(8 392 520)" />
        <ellipse cx="376" cy="512" rx="11" ry="36" />
        <ellipse cx="360" cy="514" rx="11" ry="34" transform="rotate(-6 360 514)" />
      </g>

      <g {...detail}>
        <path d="M278 240c14-10 36-10 48 2" />
        <path d="M354 242c14-10 36-10 48 2" />
        <path d="M282 264c16-16 40-16 52 0-12 12-38 12-52 0z" />
        <path d="M346 264c16-16 40-16 52 0-12 12-38 12-52 0z" />
        <path d="M332 278v18l-10 5" />
        <path d="M318 314c14 10 28 10 42 0" />
        <path d="M274 226c8 16 6 36 2 52M406 226c-8 16-6 36-2 52" />
        <path d="M278 430v210M340 418v222M402 430v210" />
        <path d="M210 470c18 36 16 90 8 160M470 470c-18 36-16 90-8 160" />
      </g>
      <g {...ink}>
        <ellipse cx="310" cy="264" rx="7" ry="8" />
        <ellipse cx="370" cy="264" rx="7" ry="8" />
        <circle cx="313" cy="261" r="2.1" fill={PAPER} />
        <circle cx="373" cy="261" r="2.1" fill={PAPER} />
      </g>
    </>
  );
}
