import { useEffect, useMemo, useState } from 'react';
import SaintArt from './components/SaintArt';
import { categories, FREE_SAINT_IDS, saints } from './data/saints';
import { LIFETIME_PRICE_LABEL, isPaidFreeTestUnlock, purchaseLifetimeUnlock, restoreLifetimeUnlock, verifyEntitlement } from './lib/commerce';
import { printColoringPage } from './lib/printing';
import type { PaintMap, RegionId, Saint } from './types';

const ARTWORK_STORAGE_KEY = 'paint-a-saint-artwork-v2';
const PREMIUM_STORAGE_KEY = 'paint-a-saint-premium-v1';
const SVG_ID = 'paint-a-saint-export-art';
const EMPTY_COLOR = '#fffdf8';

type ArtworkStore = Record<string, PaintMap>;
type HistoryEntry = { saintId: string; previous: PaintMap };
type Screen = 'gallery' | 'paint';
type PaywallReason = 'saint' | 'palette' | 'print' | 'gallery';
type PaywallStep = 'gate' | 'offer' | 'processing';

type PaletteColor = {
  name: string;
  value: string;
  premium?: boolean;
};

const palette: PaletteColor[] = [
  { name: 'Red', value: '#ef4b3d' },
  { name: 'Orange', value: '#f79432' },
  { name: 'Yellow', value: '#ffe58a' },
  { name: 'Leaf green', value: '#76b83f' },
  { name: 'Sky blue', value: '#4eaeea' },
  { name: 'Blue', value: '#245fc2' },
  { name: 'Brown', value: '#8d5b32' },
  { name: 'White', value: '#fffdf8' },
  { name: 'Gold', value: '#f5c449', premium: true },
  { name: 'Forest green', value: '#2c9364', premium: true },
  { name: 'Navy', value: '#203c85', premium: true },
  { name: 'Lavender', value: '#9874c8', premium: true },
  { name: 'Violet', value: '#7149aa', premium: true },
  { name: 'Rose', value: '#e967a6', premium: true },
  { name: 'Sand', value: '#d8b481', premium: true },
  { name: 'Charcoal', value: '#44403f', premium: true },
  { name: 'Black', value: '#151515', premium: true },
];

function readArtwork(): ArtworkStore {
  try {
    const stored = localStorage.getItem(ARTWORK_STORAGE_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored) as unknown;
    return parsed && typeof parsed === 'object' ? (parsed as ArtworkStore) : {};
  } catch {
    return {};
  }
}

function readPremiumEntitlement(): boolean {
  try {
    return localStorage.getItem(PREMIUM_STORAGE_KEY) === 'unlocked';
  } catch {
    return false;
  }
}

function createParentChallenge(): { a: number; b: number } {
  return {
    a: Math.floor(Math.random() * 7) + 5,
    b: Math.floor(Math.random() * 6) + 4,
  };
}

function getPaywallCopy(reason: PaywallReason): string {
  if (reason === 'saint') return 'That saint is part of the full library.';
  if (reason === 'palette') return 'That is a premium color.';
  if (reason === 'print') return 'Printing is included with the full library.';
  return 'Unlock the complete Paint a Saint experience.';
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('gallery');
  const [activeSaintId, setActiveSaintId] = useState(saints[0].id);
  const [artwork, setArtwork] = useState<ArtworkStore>(readArtwork);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [activeColor, setActiveColor] = useState(palette[5].value);
  const [eraserMode, setEraserMode] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [notice, setNotice] = useState('');
  const [purchasedPremium, setPurchasedPremium] = useState(readPremiumEntitlement);
  const [testUnlock] = useState(isPaidFreeTestUnlock);
  const hasPremium = purchasedPremium || testUnlock;
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallReason, setPaywallReason] = useState<PaywallReason>('gallery');
  const [paywallStep, setPaywallStep] = useState<PaywallStep>('gate');
  const [parentChallenge, setParentChallenge] = useState(createParentChallenge);
  const [parentAnswer, setParentAnswer] = useState('');

  const activeSaint = saints.find((saint) => saint.id === activeSaintId) ?? saints[0];
  const activeArtwork = artwork[activeSaint.id] ?? {};
  const freeSaintCount = FREE_SAINT_IDS.size;
  const premiumSaintCount = saints.length - freeSaintCount;
  const premiumPaletteCount = palette.filter((color) => color.premium).length;
  const filteredSaints = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return saints.filter((saint) => {
      const categoryMatch = category === 'All' || saint.category === category;
      const searchMatch = !needle || `${saint.name} ${saint.summary} ${saint.attribute} ${saint.symbols} ${saint.feast} ${saint.catalogCategory}`.toLowerCase().includes(needle);
      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  useEffect(() => {
    try {
      localStorage.setItem(ARTWORK_STORAGE_KEY, JSON.stringify(artwork));
    } catch {
      setNotice('This browser could not save artwork on the device.');
    }
  }, [artwork]);

  useEffect(() => {
    try {
      localStorage.setItem(PREMIUM_STORAGE_KEY, purchasedPremium ? 'unlocked' : '');
    } catch {
      // Artwork and premium access remain usable for this session even when storage is unavailable.
    }
  }, [purchasedPremium]);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(''), 3800);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  function isSaintUnlocked(saint: Saint): boolean {
    return hasPremium || saint.free || FREE_SAINT_IDS.has(saint.id);
  }

  function openPaywall(reason: PaywallReason) {
    if (hasPremium) return;
    setPaywallReason(reason);
    setPaywallStep('gate');
    setParentChallenge(createParentChallenge());
    setParentAnswer('');
    setPaywallOpen(true);
  }

  function closePaywall() {
    if (paywallStep === 'processing') return;
    setPaywallOpen(false);
  }

  function submitParentGate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Number(parentAnswer) !== parentChallenge.a + parentChallenge.b) {
      setParentAnswer('');
      setParentChallenge(createParentChallenge());
      setNotice('That answer was not correct. Please ask a parent to try again.');
      return;
    }
    setPaywallStep('offer');
  }

  async function completePurchase() {
    setPaywallStep('processing');
    const purchase = await purchaseLifetimeUnlock();
    if (!purchase.ok) {
      if (purchase.reason === 'unavailable' || purchase.reason === 'cancelled') {
        setPaywallOpen(false);
        setPaywallStep('gate');
      } else {
        setPaywallStep('offer');
      }
      if (purchase.reason !== 'cancelled') setNotice(purchase.message ?? 'The purchase could not be completed.');
      return;
    }

    const verified = await verifyEntitlement(purchase.receiptData);
    if (!verified) {
      setPaywallStep('offer');
      setNotice('The purchase completed, but access could not be verified. Please try Restore Purchase.');
      return;
    }

    setPurchasedPremium(true);
    setPaywallOpen(false);
    setNotice('Premium unlocked! Every saint, every color, and printing are now available.');
  }

  async function restorePurchase() {
    setPaywallStep('processing');
    const restoration = await restoreLifetimeUnlock();
    if (!restoration.ok) {
      setPaywallStep('offer');
      setNotice(restoration.message ?? 'No prior purchase was found.');
      return;
    }

    const verified = await verifyEntitlement(restoration.receiptData);
    if (!verified) {
      setPaywallStep('offer');
      setNotice('The prior purchase could not be verified. Please try again from the native app.');
      return;
    }

    setPurchasedPremium(true);
    setPaywallOpen(false);
    setNotice('Your Paint a Saint purchase was restored.');
  }

  function chooseSaint(saint: Saint) {
    if (!isSaintUnlocked(saint)) {
      openPaywall('saint');
      return;
    }
    setActiveSaintId(saint.id);
    setScreen('paint');
    setNotice(`${saint.shortName} is ready to color.`);
  }

  function paintRegion(region: RegionId) {
    if (!activeSaint.regions.includes(region)) return;
    const previous = { ...activeArtwork };
    const nextColor = eraserMode ? EMPTY_COLOR : activeColor;
    if (previous[region] === nextColor) return;

    setHistory((stack) => [...stack.slice(-79), { saintId: activeSaint.id, previous }]);
    setArtwork((current) => ({
      ...current,
      [activeSaint.id]: { ...previous, [region]: nextColor },
    }));
  }

  function selectColor(color: PaletteColor) {
    if (color.premium && !hasPremium) {
      openPaywall('palette');
      return;
    }
    setActiveColor(color.value);
    setEraserMode(false);
  }

  function undo() {
    const latest = history[history.length - 1];
    if (!latest) {
      setNotice('There is nothing to undo yet.');
      return;
    }
    setArtwork((current) => ({ ...current, [latest.saintId]: latest.previous }));
    setHistory((stack) => stack.slice(0, -1));
  }

  function clearCurrent() {
    if (!Object.keys(activeArtwork).length) {
      setNotice('This page is already blank.');
      return;
    }
    setHistory((stack) => [...stack.slice(-79), { saintId: activeSaint.id, previous: { ...activeArtwork } }]);
    setArtwork((current) => ({ ...current, [activeSaint.id]: {} }));
    setNotice('This coloring page has been cleared.');
  }

  function parentZone() {
    const a = Math.floor(Math.random() * 7) + 5;
    const b = Math.floor(Math.random() * 6) + 4;
    const answer = window.prompt(`Parent check: what is ${a} + ${b}?`);
    if (answer === null) return;
    if (Number(answer) !== a + b) {
      setNotice('That answer did not unlock Parent Zone.');
      return;
    }
    const eraseAll = window.confirm('Parent Zone is open. Clear all saved coloring progress from this device?');
    if (eraseAll) {
      setArtwork({});
      setHistory([]);
      setNotice('All locally saved coloring progress was cleared.');
    } else {
      setNotice('Artwork remains saved only on this device.');
    }
  }

  async function exportPng() {
    const original = document.getElementById(SVG_ID) as SVGSVGElement | null;
    if (!original) return;
    try {
      const clone = original.cloneNode(true) as SVGSVGElement;
      clone.setAttribute('width', '1200');
      clone.setAttribute('height', '1425');
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      const serialized = new XMLSerializer().serializeToString(clone);
      const svgBlob = new Blob([serialized], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 1425;
        const context = canvas.getContext('2d');
        if (!context) return;
        context.fillStyle = '#fffdf8';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        canvas.toBlob((blob) => {
          if (!blob) return;
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `${activeSaint.id}-paint-a-saint.png`;
          link.click();
          URL.revokeObjectURL(link.href);
          setNotice('Your picture was saved as a PNG image.');
        }, 'image/png');
      };
      image.onerror = () => {
        URL.revokeObjectURL(url);
        setNotice('The picture could not be exported in this browser.');
      };
      image.src = url;
    } catch {
      setNotice('The picture could not be exported in this browser.');
    }
  }

  function handlePrint(blank: boolean) {
    if (!hasPremium) {
      openPaywall('print');
      return;
    }
    const didOpen = printColoringPage(activeSaint, activeArtwork, blank);
    setNotice(didOpen
      ? (blank ? 'Your printable coloring page is opening.' : 'Your colored page is opening for printing.')
      : 'The print page could not open in this browser.');
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setScreen('gallery')} aria-label="Return to saint library">
          <span className="brand__brush" aria-hidden="true">🖌</span>
          <span><strong>Paint a Saint</strong><small>Color holy friends</small></span>
        </button>
        <div className="topbar__actions">
          <span className="saved-note">Saved on this device</span>
          {!hasPremium && <button className="button button--gold" onClick={() => openPaywall('gallery')}>Unlock all · {LIFETIME_PRICE_LABEL}</button>}
        </div>
      </header>

      {notice && <div className="notice" role="status">{notice}</div>}

      {screen === 'gallery' ? (
        <main className="gallery-page">

          <section className="library" aria-label="Saint library">
            <div className="library__toolbar">
              <div>
                <p className="eyebrow">Saint library</p>
                <h2>{hasPremium ? `${saints.length} coloring pages unlocked` : `${freeSaintCount} free pages · ${premiumSaintCount} to unlock`}</h2>
              </div>
              <label className="search">
                <span className="sr-only">Search saints</span>
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search saints…" />
              </label>
            </div>
            <div className="category-row" aria-label="Filter by category">
              {categories.map((item) => (
                <button key={item} className={`chip ${item === category ? 'chip--active' : ''}`} onClick={() => setCategory(item)}>{item}</button>
              ))}
            </div>
            <div className="saint-grid">
              {filteredSaints.map((saint) => {
                const locked = !isSaintUnlocked(saint);
                return (
                  <article className={`saint-card ${locked ? 'saint-card--locked' : ''} ${saint.cardImage ? 'saint-card--portrait' : ''}`} key={saint.id}>
                    <div className="saint-card__art">
                      {saint.cardImage ? (
                        <img src={saint.cardImage} alt={saint.name} />
                      ) : (
                        <div className={`saint-card__placeholder saint-card__placeholder--${saint.category.toLowerCase().replace(/\s+/g, '-')}`} aria-hidden="true">
                          <span className="saint-card__halo" />
                          <strong>{saint.shortName}</strong>
                        </div>
                      )}
                    </div>
                    <div className="saint-card__copy">
                      <p className="saint-card__category">{saint.catalogCategory}</p>
                      {!saint.cardImage && <h3>{saint.name}</h3>}
                      <p>{saint.feast} · {saint.attribute}</p>
                    </div>
                    <button className={`button ${locked ? 'button--locked' : 'button--card'}`} onClick={() => chooseSaint(saint)}>{locked ? `Unlock all · ${LIFETIME_PRICE_LABEL}` : 'Color this saint'}</button>
                  </article>
                );
              })}
            </div>
            {!filteredSaints.length && <p className="empty-state">No saints matched that search. Try a different name or category.</p>}
          </section>
        </main>
      ) : (
        <main className="paint-page">
          <aside className="saint-panel">
            <button className="back-link" onClick={() => setScreen('gallery')}>← All saints</button>
            {activeSaint.cardImage && (
              <img className="saint-panel__card" src={activeSaint.cardImage} alt={activeSaint.name} />
            )}
            <p className="eyebrow">Now coloring</p>
            <h1>{activeSaint.name}</h1>
            <p className="saint-panel__description">{activeSaint.summary}</p>
            <div className="saint-facts">
              <div><span>Feast day</span><strong>{activeSaint.feast}</strong></div>
              <div><span>Special symbols</span><strong>{activeSaint.symbols}</strong></div>
              <div><span>Category</span><strong>{activeSaint.catalogCategory}</strong></div>
            </div>
            <label className="jump-select">
              <span>Choose another saint</span>
              <select value={activeSaint.id} onChange={(event) => chooseSaint(saints.find((saint) => saint.id === event.target.value) ?? saints[0])}>
                {saints.map((saint) => <option key={saint.id} value={saint.id} disabled={!isSaintUnlocked(saint)}>{saint.name}{!isSaintUnlocked(saint) ? ' · Premium' : ''}</option>)}
              </select>
            </label>
            {!hasPremium && <button className="button button--gold saint-panel__upgrade" onClick={() => openPaywall('saint')}>Unlock all {saints.length} saints · {LIFETIME_PRICE_LABEL}</button>}
          </aside>

          <section className="canvas-panel" aria-label="Coloring canvas">
            <div className="canvas-instruction">
              <span className="instruction-number">1</span><strong>Choose a color</strong>
              <span className="instruction-number">2</span><strong>Touch a picture part</strong>
            </div>
            <SaintArt saint={activeSaint} colors={activeArtwork} onPaint={paintRegion} svgId={SVG_ID} />
            <div className="canvas-controls">
              <button className="button button--quiet" onClick={undo}>↶ Undo</button>
              <button className={`button ${eraserMode ? 'button--selected' : 'button--quiet'}`} onClick={() => setEraserMode(true)}>⌫ Erase</button>
              <button className="button button--quiet" onClick={clearCurrent}>🗑 Clear page</button>
              <button className="button button--quiet" onClick={() => handlePrint(true)}>🖨 Print blank</button>
              <button className="button button--quiet" onClick={() => handlePrint(false)}>🖨 Print colored</button>
              <button className="button button--primary" onClick={exportPng}>Save my picture</button>
            </div>
            {!hasPremium && <p className="canvas-premium-note">Printable blank and colored pages are part of the {LIFETIME_PRICE_LABEL} full-library unlock.</p>}
          </section>

          <aside className="palette-panel" aria-label="Color palette">
            <div className="palette-panel__heading">
              <p className="eyebrow">Color palette</p>
              <h2>{eraserMode ? 'Eraser selected' : 'Pick a color'}</h2>
            </div>
            <div className="selected-color" aria-live="polite">
              <span className="selected-color__swatch" style={{ background: eraserMode ? EMPTY_COLOR : activeColor }} />
              <span>{eraserMode ? 'Tap a part to make it white' : 'Now painting with this color'}</span>
            </div>
            <div className="palette">
              {palette.map((color) => {
                const locked = Boolean(color.premium && !hasPremium);
                return (
                  <button
                    key={color.name}
                    className={`color-swatch ${!eraserMode && color.value === activeColor ? 'color-swatch--active' : ''} ${locked ? 'color-swatch--locked' : ''}`}
                    style={{ backgroundColor: color.value }}
                    aria-label={locked ? `Unlock ${color.name} with premium` : `Select ${color.name}`}
                    title={locked ? `${color.name} — Premium` : color.name}
                    onClick={() => selectColor(color)}
                  >
                    {locked && <span aria-hidden="true">🔒</span>}
                  </button>
                );
              })}
            </div>
            {!hasPremium && <button className="premium-color-link" onClick={() => openPaywall('palette')}>Unlock {premiumPaletteCount} more colors · {LIFETIME_PRICE_LABEL}</button>}
            <div className="palette-tip">
              <strong>Tip:</strong> You can recolor any part as many times as you like. The Undo button remembers your last 80 changes.
            </div>
          </aside>
        </main>
      )}

      {paywallOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closePaywall}>
          <section className="paywall-modal" role="dialog" aria-modal="true" aria-labelledby="premium-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={closePaywall} aria-label="Close premium unlock">×</button>
            {paywallStep === 'gate' ? (
              <>
                <p className="eyebrow">For parents</p>
                <h2 id="premium-title">Parent check</h2>
                <p>{getPaywallCopy(paywallReason)} Before showing a purchase, please answer this simple question.</p>
                <form className="parent-gate-form" onSubmit={submitParentGate}>
                  <label htmlFor="parent-answer">What is {parentChallenge.a} + {parentChallenge.b}?</label>
                  <input id="parent-answer" inputMode="numeric" type="number" value={parentAnswer} onChange={(event) => setParentAnswer(event.target.value)} autoFocus />
                  <button className="button button--primary" type="submit">Continue</button>
                </form>
              </>
            ) : (
              <>
                <p className="eyebrow">One-time family unlock</p>
                <h2 id="premium-title">Everything for {LIFETIME_PRICE_LABEL}</h2>
                <p className="paywall-lead">No subscription. One purchase unlocks the complete library on this store account.</p>
                <ul className="premium-benefits">
                  <li><strong>All {saints.length} saint coloring pages</strong><span>{freeSaintCount} free now, plus {premiumSaintCount} additional saints.</span></li>
                  <li><strong>{premiumPaletteCount} premium colors</strong><span>Gold, violet, rose, navy, and more.</span></li>
                  <li><strong>Printable coloring pages</strong><span>Print blank outlines or a child’s finished picture.</span></li>
                </ul>
                {paywallStep === 'processing' ? (
                  <div className="purchase-processing" role="status">Connecting to the secure store purchase screen…</div>
                ) : (
                  <div className="paywall-actions">
                    <button className="button button--gold button--large" onClick={completePurchase}>Unlock everything · {LIFETIME_PRICE_LABEL}</button>
                    <button className="restore-link" onClick={restorePurchase}>Restore previous purchase</button>
                  </div>
                )}
                <p className="paywall-footnote">Purchases are completed through Apple App Store or Google Play inside the native app.</p>
              </>
            )}
          </section>
        </div>
      )}

      <footer className="footer">Paint a Saint · Child-safe, ad-free, and account-free · Approved saint cards in the library · SVG coloring pages for painting.</footer>
    </div>
  );
}
