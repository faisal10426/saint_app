export type RegionId =
  | 'background'
  | 'cloud'
  | 'halo'
  | 'skin'
  | 'hair'
  | 'robe'
  | 'mantle'
  | 'accent'
  | 'symbol'
  | 'wings'
  | 'garden'
  | 'flowers'
  | 'hills'
  | 'church'
  | 'water'
  | 'veil'
  | 'book'
  | 'rosary';

export type PaintMap = Partial<Record<RegionId, string>>;

export type SaintCategory = 'Holy Family' | 'Angels' | 'Martyrs' | 'Missionaries' | 'Teachers' | 'Witnesses';

export type Saint = {
  id: string;
  catalogNo: number;
  name: string;
  shortName: string;
  feast: string;
  summary: string;
  attribute: string;
  symbols: string;
  motif: string;
  category: SaintCategory;
  catalogCategory: string;
  regions: RegionId[];
  free: boolean;
  cardImage?: string;
  wings?: boolean;
};
