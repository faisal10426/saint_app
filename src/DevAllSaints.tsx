import { useState } from 'react';
import SaintArt from './components/SaintArt';
import { publishedSaints } from './data/saints';
import type { PaintMap, RegionId } from './types';

const PAL: Record<string, string> = {
  background: '#8ec7ff',
  cloud: '#ff59c8',
  halo: '#ffd21f',
  symbol: '#00d0b0',
  wings: '#c9a3ff',
  mantle: '#1f47d6',
  robe: '#e03b2f',
  accent: '#9b59b6',
  hair: '#6a3d1f',
  skin: '#ffcf9e',
  garden: '#37c24f',
  flowers: '#ff8f3f',
  hills: '#8fd15a',
  church: '#c9a15a',
  water: '#00a8e8',
  veil: '#c8f0ff',
  book: '#b5762f',
  rosary: '#7a4a20',
  habit: '#5a4030',
  hood: '#3a2a1c',
  innerCollar: '#efe6d0',
  quill: '#d9cfae',
  emblem: '#f2c200',
};

const FULL = { ...PAL } as PaintMap;
const PER_PAGE = 8;

export default function DevAllSaints() {
  const [filled, setFilled] = useState(true);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(publishedSaints.length / PER_PAGE);
  const slice = publishedSaints.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div style={{ padding: 12, background: '#e9e9e9', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 10, alignItems: 'center' }}>
        <button onClick={() => setFilled((v) => !v)}>{filled ? 'blank' : 'filled'}</button>
        {Array.from({ length: pages }).map((_, i) => (
          <button key={i} onClick={() => setPage(i)} style={{ fontWeight: i === page ? 700 : 400 }}>
            {i + 1}
          </button>
        ))}
        <span>page {page + 1}/{pages}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
        {slice.map((saint) => (
          <div key={saint.id} style={{ background: '#fff', border: '1px solid #bbb', borderRadius: 8, padding: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 700 }}>
              {page * PER_PAGE + publishedSaints.indexOf(saint) - page * PER_PAGE}. {saint.id}
            </div>
            <SaintArt
              saint={saint}
              colors={filled ? FULL : {}}
              onPaint={(r: RegionId) => console.log(saint.id, r)}
              svgId={`dev-${saint.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
