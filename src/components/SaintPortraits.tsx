import type { ReactNode } from 'react';
import type { Saint } from '../types';
import {
  Anchor,
  Armor,
  Arrows,
  Banner,
  Basket,
  Beard,
  BishopVestments,
  Bird,
  Bonnet,
  Book,
  CarpenterSquare,
  Cassock,
  Chains,
  Chalice,
  Cross,
  Crozier,
  CuteDragon,
  DominicanHabit,
  Dove,
  Face,
  Flame,
  FullCloak,
  Glasses,
  Globe,
  Hair,
  Halo,
  Headband,
  Heart,
  HoldHands,
  HoodedHabit,
  Jar,
  Keys,
  Lamb,
  Lamp,
  Laptop,
  Lily,
  Lyre,
  MedicalBag,
  MitreOnHead,
  Monstrance,
  Mountain,
  NunHabit,
  OpenHands,
  Palm,
  PapalCross,
  PrayerHands,
  Rosary,
  Roses,
  Sari,
  Scallop,
  Shamrock,
  Shield,
  SideCloak,
  Sky,
  SmallChild,
  Staff,
  StarBurst,
  Sword,
  Tunic,
  VeiledWoman,
  Wheel,
  Wings,
  XCross,
  type DetailProps,
  type HairKind,
  type PaintFn,
} from './portraitKit';

type BodyKind = 'tunic-cloak' | 'habit' | 'dominican' | 'cassock' | 'nun' | 'veiled' | 'armor' | 'bishop' | 'sari' | 'bonnet';
type HandsKind = 'open' | 'hold' | 'prayer' | 'none';
type PropKind =
  | 'lily' | 'lily-right' | 'book' | 'cross' | 'rosary' | 'staff' | 'sword' | 'palm' | 'roses'
  | 'lamb' | 'heart' | 'chalice' | 'shield' | 'birds' | 'mitre' | 'scallop' | 'keys' | 'xcross'
  | 'lamp' | 'lyre' | 'laptop' | 'globe' | 'mountain' | 'basket' | 'medical' | 'chains' | 'anchor'
  | 'wheel' | 'flame' | 'dove' | 'jar' | 'shamrock' | 'starburst' | 'square' | 'banner' | 'papal-cross'
  | 'monstrance' | 'crozier' | 'dragon' | 'arrows' | 'child' | 'child-left';

type Look = {
  hair: HairKind;
  beard?: 'full' | 'short' | 'gray';
  glasses?: boolean;
  body: BodyKind;
  hands: HandsKind;
  wings?: boolean;
  headband?: boolean;
  props: PropKind[];
};

const LOOKS: Record<string, Look> = {
  joseph: { hair: 'wavy', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['lily', 'square'] },
  'francis-of-assisi': { hair: 'tonsure', beard: 'full', body: 'habit', hands: 'open', props: ['birds'] },
  'therese-of-lisieux': { hair: 'none', body: 'nun', hands: 'hold', props: ['roses', 'cross'] },
  'anthony-of-padua': { hair: 'tonsure', beard: 'short', body: 'habit', hands: 'hold', props: ['child', 'lily-right', 'book'] },
  nicholas: { hair: 'gray', beard: 'short', body: 'bishop', hands: 'hold', props: ['crozier', 'basket'] },
  patrick: { hair: 'curly', beard: 'short', body: 'bishop', hands: 'hold', props: ['shamrock', 'crozier'] },
  'michael-the-archangel': { hair: 'curly', body: 'armor', hands: 'hold', wings: true, props: ['sword', 'shield'] },
  'gabriel-the-archangel': { hair: 'wavy', body: 'tunic-cloak', hands: 'hold', wings: true, props: ['lily', 'book'] },
  'raphael-the-archangel': { hair: 'wavy', body: 'tunic-cloak', hands: 'hold', wings: true, props: ['staff', 'medical'] },
  'joan-of-arc': { hair: 'short', body: 'armor', hands: 'hold', props: ['banner', 'sword'] },
  'john-paul-ii': { hair: 'gray', body: 'cassock', hands: 'hold', props: ['papal-cross', 'dove'] },
  'mother-teresa-of-calcutta': { hair: 'none', body: 'sari', hands: 'hold', props: ['rosary', 'heart'] },
  'padre-pio': { hair: 'balding', beard: 'full', body: 'habit', hands: 'prayer', props: ['cross', 'rosary'] },
  'john-bosco': { hair: 'curly', body: 'cassock', hands: 'hold', props: ['book', 'child', 'child-left'] },
  'francis-xavier': { hair: 'wavy', beard: 'short', body: 'cassock', hands: 'hold', props: ['cross', 'book'] },
  'clare-of-assisi': { hair: 'none', body: 'nun', hands: 'hold', props: ['monstrance', 'lily-right'] },
  dominic: { hair: 'wavy', body: 'dominican', hands: 'hold', props: ['lily', 'book', 'rosary'] },
  'augustine-of-hippo': { hair: 'short', beard: 'full', body: 'bishop', hands: 'hold', props: ['book', 'heart', 'crozier'] },
  monica: { hair: 'none', body: 'veiled', hands: 'hold', props: ['book', 'rosary'] },
  'thomas-aquinas': { hair: 'tonsure', body: 'dominican', hands: 'hold', props: ['book', 'starburst'] },
  benedict: { hair: 'balding', beard: 'short', body: 'habit', hands: 'hold', props: ['book', 'cross'] },
  'catherine-of-siena': { hair: 'none', body: 'nun', hands: 'hold', props: ['cross', 'lily-right', 'book'] },
  'bernadette-soubirous': { hair: 'long', body: 'veiled', hands: 'prayer', props: ['rosary'] },
  'juan-diego': { hair: 'short', body: 'tunic-cloak', hands: 'hold', props: ['roses'] },
  'kateri-tekakwitha': { hair: 'braids', body: 'tunic-cloak', hands: 'hold', headband: true, props: ['cross', 'lily-right'] },
  'martin-de-porres': { hair: 'short', body: 'dominican', hands: 'hold', props: ['cross', 'medical'] },
  'martin-of-tours': { hair: 'short', body: 'armor', hands: 'hold', props: ['sword'] },
  'vincent-de-paul': { hair: 'gray', beard: 'gray', body: 'cassock', hands: 'hold', props: ['basket', 'child'] },
  'elizabeth-ann-seton': { hair: 'none', body: 'bonnet', hands: 'hold', props: ['book'] },
  'maria-goretti': { hair: 'long', body: 'tunic-cloak', hands: 'hold', props: ['lily', 'palm'] },
  lucy: { hair: 'wavy', body: 'veiled', hands: 'hold', props: ['palm', 'lamp'] },
  cecilia: { hair: 'long', body: 'tunic-cloak', hands: 'hold', props: ['lyre', 'lily'] },
  agatha: { hair: 'long', body: 'tunic-cloak', hands: 'hold', props: ['lily', 'palm'] },
  anne: { hair: 'none', body: 'veiled', hands: 'hold', props: ['book', 'child'] },
  joachim: { hair: 'gray', beard: 'gray', body: 'tunic-cloak', hands: 'hold', props: ['staff', 'book'] },
  'elizabeth-mother-of-john-the-baptist': { hair: 'none', body: 'veiled', hands: 'hold', props: ['book'] },
  'john-the-baptist': { hair: 'wavy', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['staff', 'lamb'] },
  george: { hair: 'curly', body: 'armor', hands: 'hold', props: ['sword', 'dragon'] },
  christopher: { hair: 'curly', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['staff', 'child'] },
  sebastian: { hair: 'wavy', body: 'tunic-cloak', hands: 'none', props: ['arrows'] },
  valentine: { hair: 'short', beard: 'short', body: 'bishop', hands: 'hold', props: ['heart', 'book'] },
  'cosmas-and-damian': { hair: 'short', body: 'tunic-cloak', hands: 'hold', props: ['medical', 'child-left'] },
  perpetua: { hair: 'long', body: 'veiled', hands: 'hold', props: ['book', 'palm'] },
  felicity: { hair: 'none', body: 'veiled', hands: 'hold', props: ['palm', 'child'] },
  'maximilian-kolbe': { hair: 'balding', glasses: true, body: 'habit', hands: 'hold', props: ['rosary', 'child'] },
  'oscar-romero': { hair: 'balding', body: 'bishop', hands: 'hold', props: ['cross', 'book'] },
  'jose-sanchez-del-rio': { hair: 'wavy', body: 'tunic-cloak', hands: 'hold', props: ['palm', 'banner'] },
  'carlo-acutis': { hair: 'curly', body: 'tunic-cloak', hands: 'hold', props: ['laptop'] },
  'pier-giorgio-frassati': { hair: 'curly', body: 'tunic-cloak', hands: 'hold', props: ['mountain', 'rosary'] },
  'gemma-galgani': { hair: 'long', body: 'tunic-cloak', hands: 'hold', props: ['cross', 'lily-right'] },
  'rita-of-cascia': { hair: 'none', body: 'nun', hands: 'hold', props: ['roses', 'cross'] },
  philomena: { hair: 'long', body: 'tunic-cloak', hands: 'hold', props: ['anchor', 'palm'] },
  dymphna: { hair: 'long', body: 'tunic-cloak', hands: 'hold', props: ['lily', 'lamp'] },
  jude: { hair: 'wavy', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['flame', 'book'] },
  peter: { hair: 'curly', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['keys', 'staff'] },
  paul: { hair: 'curly', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['sword', 'book'] },
  andrew: { hair: 'curly', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['xcross'] },
  'james-the-greater': { hair: 'curly', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['staff', 'scallop'] },
  'john-the-apostle': { hair: 'wavy', body: 'tunic-cloak', hands: 'hold', props: ['book', 'dove'] },
  matthew: { hair: 'short', beard: 'short', body: 'tunic-cloak', hands: 'hold', props: ['book', 'basket'] },
  'mark-the-evangelist': { hair: 'wavy', beard: 'short', body: 'tunic-cloak', hands: 'hold', props: ['book'] },
  'luke-the-evangelist': { hair: 'curly', beard: 'short', body: 'tunic-cloak', hands: 'hold', props: ['book', 'medical'] },
  'philip-the-apostle': { hair: 'wavy', beard: 'short', body: 'tunic-cloak', hands: 'hold', props: ['staff', 'basket'] },
  bartholomew: { hair: 'curly', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['book'] },
  'thomas-the-apostle': { hair: 'wavy', beard: 'short', body: 'tunic-cloak', hands: 'hold', props: ['square', 'staff'] },
  matthias: { hair: 'short', beard: 'full', body: 'tunic-cloak', hands: 'hold', props: ['book', 'cross'] },
  stephen: { hair: 'short', body: 'tunic-cloak', hands: 'hold', props: ['palm', 'book'] },
  lawrence: { hair: 'short', body: 'tunic-cloak', hands: 'hold', props: ['basket', 'palm'] },
  agnes: { hair: 'long', body: 'tunic-cloak', hands: 'hold', props: ['lamb', 'palm'] },
  'rose-of-lima': { hair: 'none', body: 'nun', hands: 'hold', props: ['roses'] },
  'teresa-of-avila': { hair: 'none', body: 'nun', hands: 'hold', props: ['dove', 'book'] },
  'john-vianney': { hair: 'gray', body: 'cassock', hands: 'hold', props: ['cross', 'rosary'] },
  'faustina-kowalska': { hair: 'none', body: 'nun', hands: 'hold', props: ['chalice'] },
  'catherine-laboure': { hair: 'none', body: 'nun', hands: 'hold', props: ['starburst', 'globe'] },
  'louis-de-montfort': { hair: 'wavy', body: 'cassock', hands: 'hold', props: ['rosary', 'cross'] },
  'ignatius-of-loyola': { hair: 'balding', beard: 'short', body: 'cassock', hands: 'hold', props: ['book', 'flame'] },
  'francis-de-sales': { hair: 'balding', beard: 'short', body: 'bishop', hands: 'hold', props: ['heart', 'book'] },
  'alphonsus-liguori': { hair: 'gray', beard: 'short', body: 'bishop', hands: 'hold', props: ['book', 'crozier'] },
  'john-henry-newman': { hair: 'gray', body: 'cassock', hands: 'hold', props: ['book', 'dove'] },
  'josephine-bakhita': { hair: 'none', body: 'nun', hands: 'hold', props: ['chains', 'cross'] },
  'katharine-drexel': { hair: 'none', body: 'nun', hands: 'hold', props: ['book', 'heart'] },
  'andre-bessette': { hair: 'balding', body: 'habit', hands: 'hold', props: ['staff', 'lamp'] },
  'john-of-the-cross': { hair: 'tonsure', body: 'habit', hands: 'hold', props: ['cross', 'book'] },
  'teresa-benedicta-of-the-cross': { hair: 'none', body: 'nun', hands: 'hold', props: ['cross', 'book'] },
  'hildegard-of-bingen': { hair: 'none', body: 'veiled', hands: 'hold', props: ['book', 'lyre'] },
  scholastica: { hair: 'none', body: 'nun', hands: 'hold', props: ['dove', 'book'] },
  'brigid-of-ireland': { hair: 'none', body: 'veiled', hands: 'hold', props: ['flame', 'cross'] },
  columba: { hair: 'tonsure', beard: 'short', body: 'habit', hands: 'hold', props: ['dove', 'staff'] },
  'thomas-more': { hair: 'short', beard: 'short', body: 'tunic-cloak', hands: 'hold', props: ['book', 'chains'] },
  'gianna-beretta-molla': { hair: 'wavy', body: 'tunic-cloak', hands: 'hold', props: ['medical', 'child'] },
  'damien-of-molokai': { hair: 'short', beard: 'full', body: 'cassock', hands: 'hold', props: ['cross', 'palm'] },
  'junipero-serra': { hair: 'tonsure', beard: 'full', body: 'habit', hands: 'hold', props: ['cross', 'staff'] },
  'isidore-the-farmer': { hair: 'short', beard: 'short', body: 'tunic-cloak', hands: 'hold', props: ['staff', 'basket'] },
  'isidore-of-seville': { hair: 'balding', beard: 'short', body: 'bishop', hands: 'hold', props: ['book', 'globe'] },
  'catherine-of-alexandria': { hair: 'long', body: 'tunic-cloak', hands: 'hold', props: ['wheel', 'palm'] },
  'paul-miki': { hair: 'short', body: 'tunic-cloak', hands: 'hold', props: ['cross', 'palm'] },
  'isaac-jogues': { hair: 'short', beard: 'short', body: 'cassock', hands: 'hold', props: ['cross', 'palm'] },
  'jean-de-brebeuf': { hair: 'balding', beard: 'full', body: 'cassock', hands: 'hold', props: ['cross', 'palm'] },
  genevieve: { hair: 'long', body: 'veiled', hands: 'hold', props: ['lamp', 'book'] },
  'mary-magdalene': { hair: 'long', body: 'veiled', hands: 'hold', props: ['jar'] },
};

function Body({ kind, p }: { kind: BodyKind; p: PaintFn }) {
  switch (kind) {
    case 'habit':
      return <HoodedHabit p={p} />;
    case 'dominican':
      return <DominicanHabit p={p} />;
    case 'cassock':
      return <Cassock p={p} />;
    case 'nun':
      return <NunHabit p={p} />;
    case 'veiled':
      return <VeiledWoman p={p} />;
    case 'armor':
      return <Armor p={p} />;
    case 'bishop':
      return <BishopVestments p={p} />;
    case 'sari':
      return <Sari p={p} />;
    case 'bonnet':
      return (
        <>
          <Bonnet p={p} />
          <Tunic p={p} />
          <FullCloak p={p} />
        </>
      );
    default:
      return (
        <>
          <Tunic p={p} />
          <SideCloak p={p} />
        </>
      );
  }
}

function Hands({ kind, p }: { kind: HandsKind; p: PaintFn }) {
  if (kind === 'open') return <OpenHands p={p} />;
  if (kind === 'hold') return <HoldHands p={p} />;
  if (kind === 'prayer') return <PrayerHands p={p} />;
  return null;
}

function Props({ items, p }: { items: PropKind[]; p: PaintFn }) {
  return (
    <>
      {items.map((item) => {
        switch (item) {
          case 'lily':
            return <Lily key={item} p={p} />;
          case 'lily-right':
            return <Lily key={item} p={p} x={470} y={430} />;
          case 'book':
            return <Book key={item} p={p} />;
          case 'cross':
            return <Cross key={item} p={p} />;
          case 'rosary':
            return <Rosary key={item} p={p} />;
          case 'staff':
            return <Staff key={item} p={p} />;
          case 'sword':
            return <Sword key={item} p={p} />;
          case 'palm':
            return <Palm key={item} p={p} />;
          case 'roses':
            return <Roses key={item} p={p} />;
          case 'lamb':
            return <Lamb key={item} p={p} />;
          case 'heart':
            return <Heart key={item} p={p} />;
          case 'chalice':
            return <Chalice key={item} p={p} />;
          case 'shield':
            return <Shield key={item} p={p} />;
          case 'birds':
            return (
              <g key={item}>
                <Bird p={p} x={150} y={430} />
                <Bird p={p} x={190} y={400} />
                <Bird p={p} x={460} y={410} />
                <Bird p={p} x={500} y={450} />
              </g>
            );
          case 'mitre':
            return <MitreOnHead key={item} p={p} />;
          case 'scallop':
            return <Scallop key={item} p={p} />;
          case 'keys':
            return <Keys key={item} p={p} />;
          case 'xcross':
            return <XCross key={item} p={p} />;
          case 'lamp':
            return <Lamp key={item} p={p} />;
          case 'lyre':
            return <Lyre key={item} p={p} />;
          case 'laptop':
            return <Laptop key={item} p={p} />;
          case 'globe':
            return <Globe key={item} p={p} />;
          case 'mountain':
            return <Mountain key={item} p={p} />;
          case 'basket':
            return <Basket key={item} p={p} />;
          case 'medical':
            return <MedicalBag key={item} p={p} />;
          case 'chains':
            return <Chains key={item} p={p} />;
          case 'anchor':
            return <Anchor key={item} p={p} />;
          case 'wheel':
            return <Wheel key={item} p={p} />;
          case 'flame':
            return <Flame key={item} p={p} />;
          case 'dove':
            return <Dove key={item} p={p} />;
          case 'jar':
            return <Jar key={item} p={p} />;
          case 'shamrock':
            return <Shamrock key={item} p={p} />;
          case 'starburst':
            return <StarBurst key={item} p={p} />;
          case 'square':
            return <CarpenterSquare key={item} p={p} />;
          case 'banner':
            return <Banner key={item} p={p} />;
          case 'papal-cross':
            return <PapalCross key={item} p={p} />;
          case 'monstrance':
            return <Monstrance key={item} p={p} />;
          case 'crozier':
            return <Crozier key={item} p={p} />;
          case 'dragon':
            return <CuteDragon key={item} p={p} />;
          case 'arrows':
            return <Arrows key={item} p={p} />;
          case 'child':
            return <SmallChild key={item} p={p} />;
          case 'child-left':
            return <SmallChild key={item} p={p} x={175} y={520} />;
          default:
            return null;
        }
      })}
    </>
  );
}

function JuanDiegoExtra({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <ellipse cx="320" cy="500" rx="70" ry="90" />
      <circle cx="320" cy="470" r="22" />
      <path d="M298 530c14 18 30 18 44 0" />
      <circle cx="286" cy="560" r="14" />
      <circle cx="320" cy="572" r="16" />
      <circle cx="354" cy="560" r="14" />
    </g>
  );
}

function Helmet({ p }: { p: PaintFn }) {
  return (
    <g {...p('accent')}>
      <path d="M236 230C236 170 270 140 320 140C370 140 404 170 404 230v30H236z" />
      <path d="M310 140v-36h20v36" />
    </g>
  );
}

function Compose({ look, p, detail }: { look: Look; p: PaintFn; detail: DetailProps }) {
  return (
    <>
      <Sky detail={detail} />
      <Halo p={p} />
      {look.wings && <Wings p={p} />}
      {look.hair !== 'none' && <Hair p={p} kind={look.hair} />}
      <Body kind={look.body} p={p} />
      {look.headband && <Headband p={p} />}
      <Face p={p} detail={detail} />
      {look.beard && <Beard p={p} kind={look.beard} />}
      {look.glasses && <Glasses detail={detail} />}
      <Hands kind={look.hands} p={p} />
      <Props items={look.props} p={p} />
    </>
  );
}

function RoseCrown({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <circle cx="268" cy="168" r="16" />
      <circle cx="300" cy="148" r="18" />
      <circle cx="340" cy="148" r="18" />
      <circle cx="372" cy="168" r="16" />
    </g>
  );
}

function MercyFrame({ p }: { p: PaintFn }) {
  return (
    <g {...p('symbol')}>
      <path d="M268 450h104v120H268z" />
      <circle cx="320" cy="490" r="22" />
      <path d="M320 512v40M304 528l16 24M336 528l-16 24" />
    </g>
  );
}

function KolbeEmblem({ p }: { p: PaintFn }) {
  return (
    <g {...p('accent')}>
      <path d="M348 430l28 12v40l-28 16-28-16v-40z" />
      <path d="M348 448v28M338 462h20" />
    </g>
  );
}

export function SaintPortrait({ saint, p, detail }: { saint: Saint; p: PaintFn; detail: DetailProps }): ReactNode {
  if (saint.id === 'martin-of-tours') {
    const look = LOOKS[saint.id];
    return (
      <>
        <Compose look={look} p={p} detail={detail} />
        <Helmet p={p} />
      </>
    );
  }
  if (saint.id === 'juan-diego') {
    const look = LOOKS[saint.id];
    return (
      <>
        <Compose look={look} p={p} detail={detail} />
        <JuanDiegoExtra p={p} />
      </>
    );
  }
  if (saint.id === 'cecilia') {
    const look = LOOKS[saint.id];
    return (
      <>
        <Compose look={look} p={p} detail={detail} />
        <RoseCrown p={p} />
      </>
    );
  }
  if (saint.id === 'faustina-kowalska') {
    const look = LOOKS[saint.id];
    return (
      <>
        <Compose look={look} p={p} detail={detail} />
        <MercyFrame p={p} />
      </>
    );
  }
  if (saint.id === 'maximilian-kolbe') {
    const look = LOOKS[saint.id];
    return (
      <>
        <Compose look={look} p={p} detail={detail} />
        <KolbeEmblem p={p} />
      </>
    );
  }
  if (saint.id === 'christopher') {
    const look = { ...LOOKS[saint.id], props: LOOKS[saint.id].props.filter((item) => item !== 'child') };
    return (
      <>
        <Compose look={look} p={p} detail={detail} />
        <SmallChild p={p} x={390} y={250} />
      </>
    );
  }
  const look = LOOKS[saint.id] ?? {
    hair: 'wavy' as const,
    body: 'tunic-cloak' as const,
    hands: 'hold' as const,
    props: ['cross'] as PropKind[],
  };
  return <Compose look={look} p={p} detail={detail} />;
}
