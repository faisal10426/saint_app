export type RegionId =
  | 'background'
  | 'halo'
  | 'skin'
  | 'hair'
  | 'robe'
  | 'mantle'
  | 'accent'
  | 'symbol'
  | 'wings';

export type PaintMap = Partial<Record<RegionId, string>>;

export type SaintCategory = 'Holy Family' | 'Angels' | 'Martyrs' | 'Missionaries' | 'Teachers' | 'Witnesses';

export type Saint = {
  id: string;
  name: string;
  shortName: string;
  feast: string;
  summary: string;
  attribute: string;
  motif: Motif;
  category: SaintCategory;
  regions: RegionId[];
  wings?: boolean;
};

export type Motif =
  | 'mary'
  | 'joseph'
  | 'francis'
  | 'roses'
  | 'lily-book'
  | 'mitre'
  | 'shamrock'
  | 'sword-shield'
  | 'angel-lily'
  | 'angel-fish'
  | 'banner'
  | 'papal-cross'
  | 'cross-rose'
  | 'stigmata'
  | 'children'
  | 'mission-cross'
  | 'monstrance'
  | 'rosary'
  | 'heart-book'
  | 'tears'
  | 'summa'
  | 'rule-book'
  | 'crown-lily'
  | 'grotto'
  | 'tilma'
  | 'lily-basket'
  | 'horse-cloak'
  | 'charity-bag'
  | 'school-book'
  | 'purity-lily'
  | 'lamp'
  | 'music'
  | 'palm'
  | 'parents'
  | 'baptism-shell'
  | 'dragon'
  | 'staff'
  | 'arrows'
  | 'hearts'
  | 'medical-bag'
  | 'chains'
  | 'chalice'
  | 'martyr-cross'
  | 'computer'
  | 'mountain';
