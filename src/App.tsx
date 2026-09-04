import { useEffect, useMemo, useRef, useState, type ReactElement } from 'react';
import SaintArt from './components/SaintArt';
import {
  BackIcon,
  BrushIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  CrownIcon,
  DotsIcon,
  DownloadIcon,
  EraseIcon,
  FolderIcon,
  GearIcon,
  GiftIcon,
  GridIcon,
  HomeIcon,
  LockIcon,
  PencilIcon,
  PersonIcon,
  PlusIcon,
  PrinterIcon,
  SaveIcon,
  SearchIcon,
  StarIcon,
  TrashIcon,
  UndoIcon,
} from './components/icons';
import { bonusColors, saintColorPlans } from './data/artColors';
import { publishedSaints } from './data/saints';
import { LIFETIME_PRICE_LABEL, isPaidFreeTestUnlock, purchaseLifetimeUnlock, restoreLifetimeUnlock, verifyEntitlement } from './lib/commerce';
import { printColoringPage } from './lib/printing';
import type { PaintMap, RegionId, Saint } from './types';

const ARTWORK_STORAGE_KEY = 'paint-a-saint-artwork-v3';
const LEGACY_ARTWORK_KEY = 'paint-a-saint-artwork-v2';
const PREMIUM_STORAGE_KEY = 'paint-a-saint-premium-v1';
const SVG_ID = 'paint-a-saint-export-art';
const EMPTY_COLOR = '#fffdf8';
const HOME_CLICKABLE_SAINT_ID = 'mary-mother-of-god';

type Artwork = {
  id: string;
  saintId: string;
  title: string;
  colors: PaintMap;
  createdAt: number;
  updatedAt: number;
};

type HistoryEntry = { artworkId: string; previous: PaintMap };
type Screen = 'home' | 'color' | 'artwork' | 'more';
type HomeFilter = 'all' | 'free' | 'premium';
type ArtworkSort = 'recent' | 'oldest' | 'name';
type PaywallReason = 'saint' | 'palette' | 'print' | 'gallery';
type PaywallStep = 'gate' | 'offer' | 'processing';

type PaletteColor = {
  name: string;
  value: string;
  premium?: boolean;
};

// The colours offered while colouring a saint are that saint's own colours, read
// off its devotional card (see data/artColors.ts), followed by the bonus colours
// for free play. Everything needed to finish a picture is therefore unlocked.
function paletteFor(saintId: string): PaletteColor[] {
  const plan = saintColorPlans[saintId];
  const picture: PaletteColor[] = (plan?.palette ?? []).map((color) => ({ ...color }));
  const used = new Set(picture.map((color) => color.value.toLowerCase()));
  const bonus: PaletteColor[] = bonusColors
    .filter((color) => !used.has(color.value.toLowerCase()))
    .map((color) => ({ ...color, premium: true }));
  return [...picture, ...bonus];
}

/** How many regions already wear the colour they wear on the card. */
function completionOf(saintId: string, colors: PaintMap): { done: number; total: number } {
  const targets = saintColorPlans[saintId]?.targets ?? {};
  const entries = Object.entries(targets) as [RegionId, string][];
  const done = entries.filter(([region, want]) => (colors[region] ?? '').toLowerCase() === want.toLowerCase()).length;
  return { done, total: entries.length };
}

// Below this the meter would be a formality — one or two taps to full.
const MIN_METER_REGIONS = 4;

const LOGO_COLORS = ['#e8623d', '#f0a83c', '#efc63f', '#4caf50', '#1b60d6', '#9c7bff', '#d9569e'];

function RainbowText({ text }: { text: string }) {
  let colorIndex = 0;
  return (
    <span className="logo__text" aria-hidden="true">
      {text.split('').map((char, index) => {
        if (char === ' ') return <span key={index}>&nbsp;</span>;
        const color = LOGO_COLORS[colorIndex % LOGO_COLORS.length];
        colorIndex += 1;
        return (
          <span key={index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

function uid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return `a-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

function shortName(saint: Saint): string {
  return saint.name.replace(/\s*\(.*\)\s*/, '').trim();
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'paint-a-saint';
}

function formatDate(timestamp: number): string {
  try {
    return new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return '';
  }
}

function isArtwork(value: unknown): value is Artwork {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.saintId === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.colors === 'object' &&
    candidate.colors !== null
  );
}

function readArtworks(): Artwork[] {
  try {
    const stored = localStorage.getItem(ARTWORK_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as unknown;
      if (Array.isArray(parsed)) return parsed.filter(isArtwork);
    }

    const legacy = localStorage.getItem(LEGACY_ARTWORK_KEY);
    if (legacy) {
      const parsed = JSON.parse(legacy) as unknown;
      if (parsed && typeof parsed === 'object') {
        const now = Date.now();
        return Object.entries(parsed as Record<string, PaintMap>)
          .filter(
            ([saintId, colors]) =>
              publishedSaints.some((saint) => saint.id === saintId) &&
              colors &&
              typeof colors === 'object' &&
              Object.keys(colors).length > 0,
          )
          .map(([saintId, colors], index) => {
            const saint = publishedSaints.find((item) => item.id === saintId) as Saint;
            return {
              id: `${saintId}-${now}-${index}`,
              saintId,
              title: shortName(saint),
              colors,
              createdAt: now - index,
              updatedAt: now - index,
            };
          });
      }
    }
    return [];
  } catch {
    return [];
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

const saintById = (id: string): Saint => publishedSaints.find((saint) => saint.id === id) ?? publishedSaints[0];

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [artworks, setArtworks] = useState<Artwork[]>(readArtworks);
  const [activeArtworkId, setActiveArtworkId] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [activeColor, setActiveColor] = useState('');
  const [eraserMode, setEraserMode] = useState(false);
  const [search, setSearch] = useState('');
  const [homeFilter, setHomeFilter] = useState<HomeFilter>('all');
  const [artworkSort, setArtworkSort] = useState<ArtworkSort>('recent');
  const [aboutOpen, setAboutOpen] = useState(true);
  const [notice, setNotice] = useState('');

  const [purchasedPremium, setPurchasedPremium] = useState(readPremiumEntitlement);
  const [testUnlock] = useState(isPaidFreeTestUnlock);
  const hasPremium = purchasedPremium || testUnlock;
  const [parentVerified, setParentVerified] = useState(testUnlock);

  // Modal state — only one is shown at a time.
  const [actionsForId, setActionsForId] = useState<string | null>(null);
  const [renameForId, setRenameForId] = useState<string | null>(null);
  const [renameDraft, setRenameDraft] = useState('');
  const [deleteForId, setDeleteForId] = useState<string | null>(null);
  const [fileForId, setFileForId] = useState<string | null>(null);
  const [parentGateOpen, setParentGateOpen] = useState(false);
  const [gateChallenge, setGateChallenge] = useState(createParentChallenge);
  const [gateAnswer, setGateAnswer] = useState('');
  const pendingAction = useRef<null | (() => void)>(null);

  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallReason, setPaywallReason] = useState<PaywallReason>('gallery');
  const [paywallStep, setPaywallStep] = useState<PaywallStep>('gate');
  const [paywallAnswer, setPaywallAnswer] = useState('');
  const [paywallChallenge, setPaywallChallenge] = useState(createParentChallenge);

  const activeArtwork = artworks.find((item) => item.id === activeArtworkId) ?? null;
  const activeSaint = activeArtwork ? saintById(activeArtwork.saintId) : publishedSaints[0];
  const activeColors = activeArtwork?.colors ?? {};

  const actionsArtwork = artworks.find((item) => item.id === actionsForId) ?? null;
  const deleteArtworkTarget = artworks.find((item) => item.id === deleteForId) ?? null;
  const fileArtwork = artworks.find((item) => item.id === fileForId) ?? null;

  const palette = useMemo(() => paletteFor(activeSaint.id), [activeSaint.id]);
  const completion = useMemo(() => completionOf(activeSaint.id, activeColors), [activeSaint.id, activeColors]);
  const completionPct = completion.total ? Math.round((completion.done / completion.total) * 100) : 0;
  const showMeter = completion.total >= MIN_METER_REGIONS;

  // Each saint brings its own colours, so the brush in hand may not exist on the
  // next page. Fall back to that saint's first colour rather than painting with
  // something that is no longer on the tray.
  useEffect(() => {
    const usable = palette.some((color) => color.value === activeColor && !(color.premium && !hasPremium));
    if (usable) return;
    const first = palette.find((color) => !color.premium) ?? palette[0];
    if (first) setActiveColor(first.value);
  }, [palette, activeColor, hasPremium]);

  const freeSaintCount = publishedSaints.filter((saint) => saint.free).length;
  const premiumSaintCount = publishedSaints.length - freeSaintCount;
  const premiumPaletteCount = palette.filter((color) => color.premium).length;

  const filteredSaints = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return publishedSaints.filter((saint) => {
      const filterMatch =
        homeFilter === 'all' || (homeFilter === 'free' && saint.free) || (homeFilter === 'premium' && !saint.free);
      const searchMatch =
        !needle ||
        `${saint.name} ${saint.summary} ${saint.attribute} ${saint.symbols} ${saint.feast} ${saint.catalogCategory}`
          .toLowerCase()
          .includes(needle);
      return filterMatch && searchMatch;
    });
  }, [homeFilter, search]);

  const sortedArtworks = useMemo(() => {
    const list = [...artworks];
    if (artworkSort === 'recent') list.sort((a, b) => b.updatedAt - a.updatedAt);
    else if (artworkSort === 'oldest') list.sort((a, b) => a.updatedAt - b.updatedAt);
    else list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [artworks, artworkSort]);

  useEffect(() => {
    try {
      localStorage.setItem(ARTWORK_STORAGE_KEY, JSON.stringify(artworks));
    } catch {
      setNotice('This browser could not save artwork on the device.');
    }
  }, [artworks]);

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

  const anyModalOpen =
    Boolean(actionsForId) || Boolean(renameForId) || Boolean(deleteForId) || parentGateOpen || paywallOpen;

  useEffect(() => {
    if (!anyModalOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') closeAllModals();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [anyModalOpen]);

  function closeAllModals() {
    setActionsForId(null);
    setRenameForId(null);
    setDeleteForId(null);
    setParentGateOpen(false);
    if (paywallStep !== 'processing') setPaywallOpen(false);
  }

  function isSaintUnlocked(saint: Saint): boolean {
    return hasPremium || saint.free;
  }

  // ---------- Parent gate (Interaction notes: gate before purchases + external actions) ----------

  function requireParent(action: () => void) {
    if (parentVerified) {
      action();
      return;
    }
    pendingAction.current = action;
    setGateChallenge(createParentChallenge());
    setGateAnswer('');
    setActionsForId(null);
    setParentGateOpen(true);
  }

  function submitParentGate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Number(gateAnswer) !== gateChallenge.a + gateChallenge.b) {
      setGateAnswer('');
      setGateChallenge(createParentChallenge());
      setNotice('That answer was not correct. Please ask a parent to try again.');
      return;
    }
    setParentVerified(true);
    setParentGateOpen(false);
    const next = pendingAction.current;
    pendingAction.current = null;
    next?.();
  }

  // ---------- Premium ----------

  function openPaywall(reason: PaywallReason) {
    if (hasPremium) return;
    setActionsForId(null);
    setPaywallReason(reason);
    if (parentVerified) {
      setPaywallStep('offer');
    } else {
      setPaywallStep('gate');
      setPaywallChallenge(createParentChallenge());
      setPaywallAnswer('');
    }
    setPaywallOpen(true);
  }

  function closePaywall() {
    if (paywallStep === 'processing') return;
    setPaywallOpen(false);
  }

  function submitPaywallGate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Number(paywallAnswer) !== paywallChallenge.a + paywallChallenge.b) {
      setPaywallAnswer('');
      setPaywallChallenge(createParentChallenge());
      setNotice('That answer was not correct. Please ask a parent to try again.');
      return;
    }
    setParentVerified(true);
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

  // ---------- Artwork helpers ----------

  function updateArtwork(id: string, updater: (artwork: Artwork) => Artwork) {
    setArtworks((current) => current.map((item) => (item.id === id ? updater(item) : item)));
  }

  function createArtwork(saint: Saint, colors: PaintMap = {}, title?: string): Artwork {
    const now = Date.now();
    return {
      id: uid(),
      saintId: saint.id,
      title: title ?? shortName(saint),
      colors,
      createdAt: now,
      updatedAt: now,
    };
  }

  function chooseSaint(saint: Saint) {
    if (!isSaintUnlocked(saint)) {
      openPaywall('saint');
      return;
    }
    const existing = artworks
      .filter((item) => item.saintId === saint.id)
      .sort((a, b) => b.updatedAt - a.updatedAt)[0];
    if (existing) {
      setActiveArtworkId(existing.id);
    } else {
      const artwork = createArtwork(saint);
      setArtworks((current) => [artwork, ...current]);
      setActiveArtworkId(artwork.id);
    }
    setEraserMode(false);
    setScreen('color');
    setNotice(`${shortName(saint)} is ready to color.`);
  }

  function openArtwork(artwork: Artwork) {
    setActionsForId(null);
    setActiveArtworkId(artwork.id);
    setEraserMode(false);
    setScreen('color');
    setNotice(`Opened “${artwork.title}”.`);
  }

  function startRename(artwork: Artwork) {
    setActionsForId(null);
    setRenameDraft(artwork.title);
    setRenameForId(artwork.id);
  }

  function submitRename(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = renameForId;
    const trimmed = renameDraft.trim();
    if (!id || !trimmed) return;
    updateArtwork(id, (item) => ({ ...item, title: trimmed }));
    setRenameForId(null);
    setNotice('Artwork renamed.');
  }

  function duplicateArtwork(artwork: Artwork) {
    const now = Date.now();
    const copy: Artwork = {
      ...artwork,
      id: uid(),
      title: `${artwork.title} (copy)`,
      colors: { ...artwork.colors },
      createdAt: now,
      updatedAt: now,
    };
    setArtworks((current) => [copy, ...current]);
    setActionsForId(null);
    setNotice(`Copied to My Artwork as “${copy.title}”.`);
  }

  function confirmDelete() {
    const target = deleteArtworkTarget;
    if (!target) return;
    setArtworks((current) => current.filter((item) => item.id !== target.id));
    setHistory((stack) => stack.filter((entry) => entry.artworkId !== target.id));
    if (activeArtworkId === target.id) setActiveArtworkId(null);
    setDeleteForId(null);
    setNotice(`“${target.title}” was deleted.`);
  }

  // ---------- Coloring ----------

  function paintRegion(region: RegionId) {
    if (!activeArtwork) return;
    const saint = saintById(activeArtwork.saintId);
    if (!saint.regions.includes(region)) return;
    const previous = { ...activeArtwork.colors };
    const nextColor = eraserMode ? EMPTY_COLOR : activeColor;
    if (previous[region] === nextColor) return;

    setHistory((stack) => [...stack.slice(-79), { artworkId: activeArtwork.id, previous }]);
    updateArtwork(activeArtwork.id, (item) => ({
      ...item,
      colors: { ...previous, [region]: nextColor },
      updatedAt: Date.now(),
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
    updateArtwork(latest.artworkId, (item) => ({ ...item, colors: latest.previous, updatedAt: Date.now() }));
    setHistory((stack) => stack.slice(0, -1));
  }

  function clearCurrent() {
    if (!activeArtwork || !Object.keys(activeArtwork.colors).length) {
      setNotice('This page is already blank.');
      return;
    }
    setHistory((stack) => [...stack.slice(-79), { artworkId: activeArtwork.id, previous: { ...activeArtwork.colors } }]);
    updateArtwork(activeArtwork.id, (item) => ({ ...item, colors: {}, updatedAt: Date.now() }));
    setNotice('This coloring page has been cleared.');
  }

  function saveToLibrary() {
    if (!activeArtwork) return;
    updateArtwork(activeArtwork.id, (item) => ({ ...item, updatedAt: Date.now() }));
    setNotice('Saved to My Artwork on this device.');
  }

  function parentZone() {
    requireParent(() => {
      const eraseAll = window.confirm('Parent Zone: clear all saved coloring progress from this device?');
      if (eraseAll) {
        setArtworks([]);
        setActiveArtworkId(null);
        setHistory([]);
        setNotice('All locally saved coloring progress was cleared.');
      } else {
        setNotice('Artwork remains saved only on this device.');
      }
    });
  }

  // ---------- Export / print ----------

  async function exportPngFrom(svgElementId: string, downloadName: string) {
    const original = document.getElementById(svgElementId) as SVGSVGElement | null;
    if (!original) {
      setNotice('The picture could not be exported in this browser.');
      return;
    }
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
          link.download = downloadName;
          link.click();
          URL.revokeObjectURL(link.href);
          setNotice(`Saved ${downloadName} to your device.`);
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

  function saveArtworkPng(artwork: Artwork) {
    setActionsForId(null);
    setFileForId(artwork.id);
    requireParent(() => {
      // The offscreen SaintArt for this artwork mounts on the next render; export after it paints.
      window.setTimeout(() => {
        void exportPngFrom(SVG_ID, `${slugify(artwork.title)}.png`);
        setFileForId(null);
      }, 90);
    });
  }

  function printArtwork(artwork: Artwork, blank = false) {
    if (!hasPremium) {
      openPaywall('print');
      return;
    }
    setActionsForId(null);
    setFileForId(artwork.id);
    requireParent(() => {
      window.setTimeout(() => {
        const didOpen = printColoringPage(saintById(artwork.saintId), artwork.colors, blank);
        setNotice(
          didOpen
            ? blank
              ? 'Your printable coloring page is opening.'
              : 'Your finished picture is opening for printing.'
            : 'The print page could not open in this browser.',
        );
        setFileForId(null);
      }, 90);
    });
  }

  const navItems: { id: Screen; label: string; icon: ReactElement; onClick: () => void }[] = [
    { id: 'home', label: 'Home', icon: <HomeIcon />, onClick: () => setScreen('home') },
    {
      id: 'color',
      label: 'Color',
      icon: <BrushIcon />,
      onClick: () => {
        if (!activeArtwork && sortedArtworks[0]) setActiveArtworkId(sortedArtworks[0].id);
        setScreen('color');
      },
    },
    { id: 'artwork', label: 'My Artwork', icon: <StarIcon />, onClick: () => setScreen('artwork') },
    { id: 'more', label: 'More', icon: <DotsIcon />, onClick: () => setScreen('more') },
  ];

  return (
    <div className="app">
      <div className="frame">
        <header className="topbar">
          {screen === 'home' ? (
            <button className="icon-button" onClick={() => setScreen('more')} aria-label="Settings">
              <GearIcon />
            </button>
          ) : (
            <div className="topbar__nav">
              <button className="icon-button" onClick={() => setScreen('home')} aria-label="Back">
                <BackIcon />
              </button>
              <button className="icon-button" onClick={() => setScreen('home')} aria-label="Home">
                <HomeIcon />
              </button>
            </div>
          )}
          <button className="logo" onClick={() => setScreen('home')} aria-label="Paint a Saint — go home">
            <span className="logo__brush" aria-hidden="true">🖌️</span>
            <RainbowText text="Paint a Saint" />
          </button>
          <button className="icon-button" onClick={() => setScreen('more')} aria-label="Account">
            <PersonIcon />
          </button>
        </header>

        <div className="frame__body">
          {screen === 'home' && (
            <section className="home" aria-label="Saint library">
              <label className="search">
                <SearchIcon className="search__icon" />
                <span className="sr-only">Search saints</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search saints..."
                  type="search"
                />
              </label>

              <div className="segmented" role="tablist" aria-label="Filter saints">
                <button
                  role="tab"
                  aria-selected={homeFilter === 'all'}
                  className={`segmented__item ${homeFilter === 'all' ? 'is-active' : ''}`}
                  onClick={() => setHomeFilter('all')}
                >
                  <GridIcon className="segmented__icon segmented__icon--all" /> All Saints
                </button>
                <button
                  role="tab"
                  aria-selected={homeFilter === 'free'}
                  className={`segmented__item ${homeFilter === 'free' ? 'is-active' : ''}`}
                  onClick={() => setHomeFilter('free')}
                >
                  <GiftIcon className="segmented__icon segmented__icon--free" /> Free
                </button>
                <button
                  role="tab"
                  aria-selected={homeFilter === 'premium'}
                  className={`segmented__item ${homeFilter === 'premium' ? 'is-active' : ''}`}
                  onClick={() => setHomeFilter('premium')}
                >
                  <CrownIcon className="segmented__icon segmented__icon--premium" /> Premium
                </button>
              </div>

              <div className="saint-grid">
                {filteredSaints.map((saint) => {
                  const unlocked = isSaintUnlocked(saint);
                  const started = artworks.some((item) => item.saintId === saint.id);
                  const clickable = saint.id === HOME_CLICKABLE_SAINT_ID;
                  return (
                    <button
                      className={`saint-card ${clickable ? '' : 'saint-card--disabled'}`}
                      key={saint.id}
                      type="button"
                      disabled={!clickable}
                      aria-disabled={!clickable}
                      onClick={() => {
                        if (!clickable) return;
                        chooseSaint(saint);
                      }}
                    >
                      <span className="saint-card__art">
                        {saint.cardImage && <img src={saint.cardImage} alt={saint.name} loading="lazy" />}
                        {saint.free && <span className="badge badge--free">FREE</span>}
                        <span
                          className={`stamp ${
                            !unlocked ? 'stamp--lock' : started ? 'stamp--check' : 'stamp--check stamp--check-outline'
                          }`}
                          aria-hidden="true"
                        >
                          {unlocked ? <CheckIcon /> : <LockIcon />}
                        </span>
                      </span>
                      <span className="saint-card__name">{shortName(saint)}</span>
                    </button>
                  );
                })}
              </div>
              {!filteredSaints.length && (
                <p className="empty-state">No saints matched that search. Try a different name.</p>
              )}
            </section>
          )}

          {screen === 'color' && (
            <section className="color-screen" aria-label="Coloring">
              {!activeArtwork ? (
                <div className="panel empty-panel">
                  <p>Choose a saint from the library to start a new coloring page.</p>
                  <button className="button button--primary" onClick={() => setScreen('home')}>
                    Browse the saint library
                  </button>
                </div>
              ) : (
                <>
                  <div className="color-screen__title">
                    <h1>{activeArtwork.title}</h1>
                    <p>{activeSaint.feast}</p>
                  </div>
                  <div className="color-screen__panels">
                    <aside className="tool-rail" aria-label="Coloring tools">
                      <button className="tool" onClick={undo}>
                        <UndoIcon />
                        <span>Undo</span>
                      </button>
                      <button
                        className={`tool ${eraserMode ? 'tool--active' : ''}`}
                        onClick={() => setEraserMode((value) => !value)}
                        aria-pressed={eraserMode}
                      >
                        <EraseIcon />
                        <span>Erase</span>
                      </button>
                      <button className="tool" onClick={clearCurrent}>
                        <TrashIcon />
                        <span>Clear</span>
                      </button>
                      <button className="tool" onClick={saveToLibrary}>
                        <SaveIcon />
                        <span>Save</span>
                      </button>
                      <button className="tool" onClick={() => printArtwork(activeArtwork, Object.keys(activeColors).length === 0)}>
                        <PrinterIcon />
                        <span>Print</span>
                      </button>
                    </aside>

                    <section className="canvas-panel" aria-label="Coloring canvas">
                      <div className="canvas-instruction">
                        <span className="instruction-number">1</span>
                        <strong>Choose a color</strong>
                        <span className="instruction-number">2</span>
                        <strong>Touch a picture part</strong>
                      </div>
                      {showMeter && (
                        <div
                          className={`match-meter ${completionPct === 100 ? 'match-meter--done' : ''}`}
                          aria-live="polite"
                        >
                          <div className="match-meter__head">
                            <span className="match-meter__title">
                              {completionPct === 100
                                ? `You matched every part of ${shortName(activeSaint)}!`
                                : 'Matching the real picture'}
                            </span>
                            <span className="match-meter__count">
                              {completion.done} of {completion.total}
                            </span>
                          </div>
                          <div
                            className="match-meter__track"
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={completionPct}
                            aria-label="Picture completed"
                          >
                            <div className="match-meter__fill" style={{ width: `${completionPct}%` }}>
                              <span className="match-meter__shine" />
                            </div>
                          </div>
                          <p className="match-meter__hint">
                            {completionPct === 100
                              ? 'Every color is the same as the holy card. Save or print your picture!'
                              : 'Pick the color a part really wears and the bar fills up.'}
                          </p>
                        </div>
                      )}
                      <SaintArt saint={activeSaint} colors={activeColors} onPaint={paintRegion} svgId={SVG_ID} />

                      <details className="about-saint" open={aboutOpen}>
                        <summary
                          onClick={(event) => {
                            event.preventDefault();
                            setAboutOpen((value) => !value);
                          }}
                        >
                          <span>About This Saint</span>
                          <ChevronDownIcon className={`about-saint__chevron ${aboutOpen ? 'is-open' : ''}`} />
                        </summary>
                        <div className="about-saint__body">
                          <p>{activeSaint.summary}</p>
                          <div className="saint-facts">
                            <div>
                              <span>Feast day</span>
                              <strong>{activeSaint.feast}</strong>
                            </div>
                            <div>
                              <span>Special symbols</span>
                              <strong>{activeSaint.symbols}</strong>
                            </div>
                            <div>
                              <span>Category</span>
                              <strong>{activeSaint.catalogCategory}</strong>
                            </div>
                          </div>
                          <label className="jump-select">
                            <span>Choose another saint</span>
                            <select
                              value={activeSaint.id}
                              onChange={(event) =>
                                chooseSaint(
                                  publishedSaints.find((saint) => saint.id === event.target.value) ?? publishedSaints[0],
                                )
                              }
                            >
                              {publishedSaints.map((saint) => (
                                <option key={saint.id} value={saint.id} disabled={!isSaintUnlocked(saint)}>
                                  {saint.name}
                                  {!isSaintUnlocked(saint) ? ' · Premium' : ''}
                                </option>
                              ))}
                            </select>
                          </label>
                          {!hasPremium && (
                            <button className="button button--gold" onClick={() => openPaywall('saint')}>
                              Unlock all {publishedSaints.length} saints · {LIFETIME_PRICE_LABEL}
                            </button>
                          )}
                        </div>
                      </details>
                    </section>

                    <aside className="colors-panel" aria-label="Color palette">
                      <h2>Colors</h2>
                      <div className="selected-color" aria-live="polite">
                        <span
                          className="selected-color__swatch"
                          style={{ background: eraserMode ? EMPTY_COLOR : activeColor }}
                        />
                        <span>{eraserMode ? 'Eraser — tap a part to clear it' : 'Now painting with this color'}</span>
                      </div>
                      <p className="palette-caption">
                        These are the real colors of {shortName(activeSaint)}&rsquo;s holy card.
                      </p>
                      <div className="palette">
                        {palette.map((color) => {
                          const locked = Boolean(color.premium && !hasPremium);
                          return (
                            <button
                              key={`${color.name}-${color.value}`}
                              className={`color-swatch ${
                                !eraserMode && color.value === activeColor ? 'color-swatch--active' : ''
                              } ${locked ? 'color-swatch--locked' : ''}`}
                              style={{ backgroundColor: color.value }}
                              aria-label={locked ? `Unlock ${color.name} with premium` : `Select ${color.name}`}
                              title={locked ? `${color.name} — Premium` : color.name}
                              onClick={() => selectColor(color)}
                            >
                              {locked && <span aria-hidden="true">🔒</span>}
                            </button>
                          );
                        })}
                        {!hasPremium && (
                          <button
                            className="color-swatch color-swatch--add"
                            aria-label={`Unlock ${premiumPaletteCount} more colors`}
                            title="More colors — Premium"
                            onClick={() => openPaywall('palette')}
                          >
                            <PlusIcon />
                          </button>
                        )}
                      </div>
                      {!hasPremium && (
                        <button className="link-button" onClick={() => openPaywall('palette')}>
                          Unlock {premiumPaletteCount} more colors · {LIFETIME_PRICE_LABEL}
                        </button>
                      )}
                      <div className="palette-tip">
                        <strong>Tip:</strong> Recolor any part as many times as you like. Undo remembers your last 80
                        changes.
                      </div>
                    </aside>
                  </div>
                </>
              )}
            </section>
          )}

          {screen === 'artwork' && (
            <section className="artwork-screen" aria-label="My artwork">
              <div className="artwork-head">
                <div>
                  <h1 className="screen-title">My Artwork</h1>
                  <p className="screen-subtitle">Your saved masterpieces.</p>
                </div>
                {sortedArtworks.length > 0 && (
                  <label className="sort-by">
                    Sort by:
                    <select value={artworkSort} onChange={(event) => setArtworkSort(event.target.value as ArtworkSort)}>
                      <option value="recent">Recent</option>
                      <option value="oldest">Oldest</option>
                      <option value="name">Name</option>
                    </select>
                  </label>
                )}
              </div>

              <div className="artwork-grid">
                {sortedArtworks.map((artwork) => {
                  const saint = saintById(artwork.saintId);
                  return (
                    <div className={`artwork-card ${actionsForId === artwork.id ? 'is-selected' : ''}`} key={artwork.id}>
                      <button
                        className="artwork-card__open"
                        onClick={() => openArtwork(artwork)}
                        aria-label={`Open ${artwork.title}`}
                      >
                        <span className="artwork-card__art">
                          <SaintArt
                            saint={saint}
                            colors={artwork.colors}
                            onPaint={() => {}}
                            svgId={`art-thumb-${artwork.id}`}
                          />
                        </span>
                        <span className="artwork-card__name">{artwork.title}</span>
                        <span className="artwork-card__date">{formatDate(artwork.updatedAt)}</span>
                      </button>
                      <button
                        className="artwork-card__menu-btn"
                        aria-label={`Actions for ${artwork.title}`}
                        aria-haspopup="dialog"
                        onClick={() => setActionsForId(artwork.id)}
                      >
                        <DotsIcon />
                      </button>
                    </div>
                  );
                })}

                <button className="artwork-card artwork-card--new" onClick={() => setScreen('home')}>
                  <span className="artwork-card--new__plus">
                    <PlusIcon />
                  </span>
                  <span className="artwork-card__name">New Artwork</span>
                </button>
              </div>

              {!sortedArtworks.length && (
                <p className="empty-state">
                  You have not saved any artwork yet. Tap <strong>New Artwork</strong> to begin.
                </p>
              )}

            </section>
          )}

          {screen === 'more' && (
            <section className="more-screen" aria-label="More">
              <h1 className="screen-title">More</h1>

              <div className="panel">
                <h2>{hasPremium ? 'Full library unlocked' : 'Unlock everything'}</h2>
                {hasPremium ? (
                  <p>
                    Every saint, all {premiumPaletteCount} premium colors, and printable pages are available on this
                    device.
                  </p>
                ) : (
                  <>
                    <p>
                      One purchase of {LIFETIME_PRICE_LABEL} unlocks all {publishedSaints.length} saints, {premiumPaletteCount}{' '}
                      premium colors, and printing. No subscription.
                    </p>
                    <div className="panel__actions">
                      <button className="button button--gold button--large" onClick={() => openPaywall('gallery')}>
                        Unlock all · {LIFETIME_PRICE_LABEL}
                      </button>
                      <button className="link-button" onClick={restorePurchase}>
                        Restore previous purchase
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="panel">
                <h2>For parents</h2>
                <p>Paint a Saint is child-safe, ad-free, and account-free. Artwork is stored only on this device.</p>
                <div className="panel__actions">
                  <button className="button button--secondary" onClick={parentZone}>
                    Parent Zone · clear saved progress
                  </button>
                </div>
              </div>

              <div className="panel">
                <h2>About</h2>
                <p>
                  {freeSaintCount} free coloring pages · {premiumSaintCount} in the full library. Approved saint cards
                  with SVG coloring pages for painting.
                </p>
              </div>
            </section>
          )}
        </div>

        {screen === 'home' && !hasPremium && (
          <button className="promo-bar" onClick={() => openPaywall('gallery')}>
            <CrownIcon className="promo-bar__crown" />
            <span className="promo-bar__text">Unlock All Saints + More Colors + Print</span>
            <span className="promo-bar__price">{LIFETIME_PRICE_LABEL}</span>
          </button>
        )}

        <nav className="bottom-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`bottom-nav__item ${screen === item.id ? 'is-active' : ''}`}
              aria-current={screen === item.id ? 'page' : undefined}
              onClick={item.onClick}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Offscreen full-size art so PNG export + printing work from the My Artwork screen */}
      {fileArtwork && screen !== 'color' && (
        <div className="offscreen-art" aria-hidden="true">
          <SaintArt
            saint={saintById(fileArtwork.saintId)}
            colors={fileArtwork.colors}
            onPaint={() => {}}
            svgId={SVG_ID}
          />
        </div>
      )}

      {notice && (
        <div className="notice" role="status">
          {notice}
        </div>
      )}

      {/* ---------- Artwork actions modal ---------- */}
      {actionsArtwork && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActionsForId(null)}>
          <section
            className="action-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Actions for ${actionsArtwork.title}`}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="action-modal__head">
              <span className="action-modal__thumb">
                <SaintArt
                  saint={saintById(actionsArtwork.saintId)}
                  colors={actionsArtwork.colors}
                  onPaint={() => {}}
                  svgId={`action-thumb-${actionsArtwork.id}`}
                />
              </span>
              <div>
                <strong>{actionsArtwork.title}</strong>
                <small>{formatDate(actionsArtwork.updatedAt)}</small>
              </div>
              <button className="modal-close" onClick={() => setActionsForId(null)} aria-label="Close">
                ×
              </button>
            </header>
            <div className="action-modal__list">
              <button onClick={() => openArtwork(actionsArtwork)}>
                <FolderIcon /> Open
              </button>
              <button onClick={() => startRename(actionsArtwork)}>
                <PencilIcon /> Rename
              </button>
              <button onClick={() => duplicateArtwork(actionsArtwork)}>
                <CopyIcon /> Duplicate
              </button>
              <button onClick={() => saveArtworkPng(actionsArtwork)}>
                <DownloadIcon /> Save Picture (PNG)
              </button>
              <button onClick={() => printArtwork(actionsArtwork)}>
                <PrinterIcon /> Print
              </button>
              <button
                className="action-modal__danger"
                onClick={() => {
                  setActionsForId(null);
                  setDeleteForId(actionsArtwork.id);
                }}
              >
                <TrashIcon /> Delete
              </button>
            </div>
          </section>
        </div>
      )}

      {/* ---------- Rename modal ---------- */}
      {renameForId && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setRenameForId(null)}>
          <section
            className="paywall-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rename-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setRenameForId(null)} aria-label="Close">
              ×
            </button>
            <p className="eyebrow">My Artwork</p>
            <h2 id="rename-title">Rename artwork</h2>
            <form className="parent-gate-form" onSubmit={submitRename}>
              <label htmlFor="rename-input">New name</label>
              <input
                id="rename-input"
                value={renameDraft}
                onChange={(event) => setRenameDraft(event.target.value)}
                maxLength={60}
                autoFocus
              />
              <div className="modal-actions">
                <button className="button button--secondary" type="button" onClick={() => setRenameForId(null)}>
                  Cancel
                </button>
                <button className="button button--primary" type="submit" disabled={!renameDraft.trim()}>
                  Save name
                </button>
              </div>
            </form>
          </section>
        </div>
      )}

      {/* ---------- Delete confirm modal ---------- */}
      {deleteArtworkTarget && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setDeleteForId(null)}>
          <section
            className="paywall-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setDeleteForId(null)} aria-label="Close">
              ×
            </button>
            <p className="eyebrow">My Artwork</p>
            <h2 id="delete-title">Delete this artwork?</h2>
            <p>
              “{deleteArtworkTarget.title}” will be removed from this device. This cannot be undone.
            </p>
            <div className="modal-actions">
              <button className="button button--secondary" onClick={() => setDeleteForId(null)}>
                Cancel
              </button>
              <button className="button button--danger" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </section>
        </div>
      )}

      {/* ---------- Parent gate modal ---------- */}
      {parentGateOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setParentGateOpen(false)}>
          <section
            className="paywall-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gate-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setParentGateOpen(false)} aria-label="Close">
              ×
            </button>
            <p className="eyebrow">For parents</p>
            <h2 id="gate-title">Parent check</h2>
            <p>This action leaves the app (printing or saving a file). Please ask a parent to continue.</p>
            <form className="parent-gate-form" onSubmit={submitParentGate}>
              <label htmlFor="gate-answer">
                What is {gateChallenge.a} + {gateChallenge.b}?
              </label>
              <input
                id="gate-answer"
                inputMode="numeric"
                type="number"
                value={gateAnswer}
                onChange={(event) => setGateAnswer(event.target.value)}
                autoFocus
              />
              <button className="button button--primary" type="submit">
                Continue
              </button>
            </form>
          </section>
        </div>
      )}

      {/* ---------- Paywall modal ---------- */}
      {paywallOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closePaywall}>
          <section
            className="paywall-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="premium-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={closePaywall} aria-label="Close premium unlock">
              ×
            </button>
            {paywallStep === 'gate' ? (
              <>
                <p className="eyebrow">For parents</p>
                <h2 id="premium-title">Parent check</h2>
                <p>{getPaywallCopy(paywallReason)} Before showing a purchase, please answer this simple question.</p>
                <form className="parent-gate-form" onSubmit={submitPaywallGate}>
                  <label htmlFor="paywall-answer">
                    What is {paywallChallenge.a} + {paywallChallenge.b}?
                  </label>
                  <input
                    id="paywall-answer"
                    inputMode="numeric"
                    type="number"
                    value={paywallAnswer}
                    onChange={(event) => setPaywallAnswer(event.target.value)}
                    autoFocus
                  />
                  <button className="button button--primary" type="submit">
                    Continue
                  </button>
                </form>
              </>
            ) : (
              <>
                <p className="eyebrow">One-time family unlock</p>
                <h2 id="premium-title">Everything for {LIFETIME_PRICE_LABEL}</h2>
                <p className="paywall-lead">
                  No subscription. One purchase unlocks the complete library on this store account.
                </p>
                <ul className="premium-benefits">
                  <li>
                    <strong>All {publishedSaints.length} saint coloring pages</strong>
                    <span>
                      {freeSaintCount} free now, plus {premiumSaintCount} additional saints.
                    </span>
                  </li>
                  <li>
                    <strong>{premiumPaletteCount} premium colors</strong>
                    <span>Gold, violet, coral, navy, and more.</span>
                  </li>
                  <li>
                    <strong>Printable coloring pages</strong>
                    <span>Print blank outlines or a child's finished picture.</span>
                  </li>
                </ul>
                {paywallStep === 'processing' ? (
                  <div className="purchase-processing" role="status">
                    Connecting to the secure store purchase screen…
                  </div>
                ) : (
                  <div className="paywall-actions">
                    <button className="button button--gold button--large" onClick={completePurchase}>
                      Unlock everything · {LIFETIME_PRICE_LABEL}
                    </button>
                    <button className="link-button" onClick={restorePurchase}>
                      Restore previous purchase
                    </button>
                  </div>
                )}
                <p className="paywall-footnote">
                  Purchases are completed through Apple App Store or Google Play inside the native app.
                </p>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
