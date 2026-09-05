import json, os
import numpy as np

RAW = json.load(open('/tmp/pal/targets_raw.json'))
MAN = json.load(open('/tmp/pal/regionsvg/manifest.json'))

MIN_PX = 700           # a sliver too small to find with a fingertip is not a puzzle piece
# Masks that sit almost entirely under other regions: nothing of them is visible to
# tap, so they get no target and are left out of the meter.
DROP = {
    ('francis-xavier', 'water'),
    ('francis-xavier', 'garden'),
    ('francis-xavier', 'innerCollar'),
    ('francis-xavier', 'emblem'),
}

NAMED = [
    ('White', (252, 252, 250)), ('Ivory', (243, 237, 222)), ('Cream', (247, 226, 176)),
    ('Sand', (222, 194, 148)), ('Gold', (243, 199, 84)), ('Amber', (233, 160, 54)),
    ('Peach', (250, 197, 140)), ('Skin', (247, 178, 110)), ('Tan', (206, 150, 86)),
    ('Light brown', (168, 112, 52)), ('Brown', (128, 78, 30)), ('Chestnut', (94, 56, 20)),
    ('Dark brown', (60, 38, 18)), ('Charcoal', (52, 50, 44)), ('Black', (26, 26, 24)),
    ('Slate', (96, 108, 118)), ('Grey', (176, 180, 182)), ('Silver', (214, 220, 224)),
    ('Sky blue', (150, 200, 238)), ('Pale blue', (198, 219, 238)), ('Blue', (40, 118, 190)),
    ('Deep blue', (20, 74, 140)), ('Navy', (24, 46, 92)), ('Teal', (60, 150, 160)),
    ('Green', (86, 140, 62)), ('Leaf green', (120, 168, 70)), ('Olive', (108, 116, 44)),
    ('Dark green', (52, 88, 44)), ('Red', (198, 52, 34)), ('Deep red', (150, 30, 14)),
    ('Rose', (226, 118, 108)), ('Pink', (243, 176, 176)), ('Purple', (124, 84, 168)),
    ('Lavender', (176, 152, 220)),
]

PREMIUM = [
    ('Gold', '#f3c44e'), ('Forest green', '#2c9364'), ('Navy', '#203c85'),
    ('Lavender', '#9c7bff'), ('Violet', '#7149aa'), ('Coral', '#ff6d6b'),
    ('Sand', '#d8b481'), ('Slate gray', '#5a6b7c'), ('Black', '#151515'),
]


def rgb2lab(rgb):
    a = np.asarray(rgb, dtype=float).reshape(-1, 3) / 255.0
    a = np.where(a > 0.04045, ((a + 0.055) / 1.055) ** 2.4, a / 12.92)
    M = np.array([[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]])
    xyz = a @ M.T / np.array([0.95047, 1.0, 1.08883])
    f = np.where(xyz > 0.008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
    return np.stack([116 * f[:, 1] - 16, 500 * (f[:, 0] - f[:, 1]), 200 * (f[:, 1] - f[:, 2])], axis=1)


def hex2rgb(h):
    return tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))


def de(a, b):
    return float(np.linalg.norm(rgb2lab([a])[0] - rgb2lab([b])[0]))


def name_of(rgb):
    return min(NAMED, key=lambda n: de(rgb, n[1]))[0]


def card_tones(sid, card_file):
    """The card's own dominant colours, for topping up a thin palette."""
    from PIL import Image
    a = np.asarray(Image.open('/tmp/pal/cards_small/' + card_file).convert('RGB')).astype(float)
    h = a.shape[0]
    x0, y0, x1, y1 = (25, 33, 615, 664) if h < 900 else (30, 24, 610, 796)
    px = a[y0:y1:3, x0:x1:3].reshape(-1, 3)
    lab = rgb2lab(px)
    key = np.floor(lab / np.array([12.0, 10.0, 10.0])).astype(int)
    _, inv, cnt = np.unique(key, axis=0, return_inverse=True, return_counts=True)
    out = []
    for b in np.argsort(cnt)[::-1][:14]:
        out.append(tuple(px[inv == b].mean(axis=0)))
    return out


def plan(sid, regions_order, card_file):
    src = RAW[sid]['regions']
    items = [(r, src[r]['hex'], src[r]['px']) for r in regions_order
             if r in src and src[r]['px'] >= MIN_PX and (sid, r) not in DROP]
    # Merge tones the eye reads as one colour so the palette stays a short row of
    # distinct swatches, and every region points at a swatch that is actually there.
    swatches = []            # [rgb, weight]
    targets = {}
    for r, h, px in sorted(items, key=lambda t: -t[2]):
        rgb = hex2rgb(h)
        hit = next((s for s in swatches if de(rgb, s[0]) < 11), None)
        if hit is None:
            swatches.append([rgb, px])
            targets[r] = rgb
        else:
            hit[1] += px
            targets[r] = hit[0]
    # A saint whose masks are mostly too small would otherwise get a two-swatch
    # palette. Top it up with the card's own dominant tones so there is a real set
    # of colours to paint with.
    if len(swatches) < 8:
        for rgb in card_tones(sid, card_file):
            if len(swatches) >= 8:
                break
            if all(de(rgb, s[0]) >= 13 for s in swatches):
                swatches.append([tuple(int(round(v)) for v in rgb), 1])
    order = sorted(swatches, key=lambda s: -s[1])[:12]
    keep = {tuple(s[0]) for s in order}
    targets = {r: c for r, c in targets.items() if tuple(c) in keep}
    # name them, breaking ties by lightness
    named = []
    for rgb, _ in order:
        named.append([name_of(rgb), '#%02x%02x%02x' % tuple(int(v) for v in rgb), rgb])
    seen = {}
    for n in named:
        seen.setdefault(n[0], []).append(n)
    for base, group in seen.items():
        if len(group) > 1:
            group.sort(key=lambda g: rgb2lab([g[2]])[0][0])
            labels = ['Deep ' + base.lower(), base, 'Light ' + base.lower()] if len(group) == 3 else \
                     (['Deep ' + base.lower(), base] if len(group) == 2 else
                      [base + ' ' + str(i + 1) for i in range(len(group))])
            for g, lab in zip(group, labels):
                g[0] = lab
    # keep the picture's own order: lightest sky tones first, then the rest by weight
    palette = [{'name': n[0], 'value': n[1]} for n in named]
    return palette, {r: '#%02x%02x%02x' % tuple(int(v) for v in c) for r, c in targets.items()}


def main():
    out = {}
    for m in MAN:
        pal, tgt = plan(m['id'], m['regions'], os.path.basename(m['card']).rsplit('.', 1)[0] + '.jpg')
        out[m['id']] = dict(palette=pal, targets=tgt)

    lines = []
    lines.append('// GENERATED — do not edit by hand.')
    lines.append('//')
    lines.append("// Every colour below was read off that saint's devotional card: the paint masks")
    lines.append('// were rendered, registered against the card artwork, and the dominant tone under')
    lines.append('// each mask sampled. `palette` is the row of swatches shown while colouring that')
    lines.append('// saint; `targets` is the colour each region wears on the card, and drives the')
    lines.append('// completion meter. Regions with no target (a mask too small to tap, or one the')
    lines.append('// card leaves ambiguous) are free colouring and are not counted.')
    lines.append("//")
    lines.append("// Regenerate with tools/artColors — see the note in that folder.")
    lines.append('')
    lines.append("import type { RegionId } from '../types';")
    lines.append('')
    lines.append('export type PlanColor = { name: string; value: string };')
    lines.append('')
    lines.append('export type SaintColorPlan = {')
    lines.append('  /** Swatches taken from the card, in the order they are shown. */')
    lines.append('  palette: PlanColor[];')
    lines.append('  /** The colour each region wears on the card. */')
    lines.append('  targets: Partial<Record<RegionId, string>>;')
    lines.append('};')
    lines.append('')
    lines.append('export const saintColorPlans: Record<string, SaintColorPlan> = {')
    for sid, v in out.items():
        lines.append("  '%s': {" % sid)
        lines.append('    palette: [')
        for c in v['palette']:
            lines.append("      { name: '%s', value: '%s' }," % (c['name'], c['value']))
        lines.append('    ],')
        lines.append('    targets: {')
        for r, h in v['targets'].items():
            lines.append("      %s: '%s'," % (r, h))
        lines.append('    },')
        lines.append('  },')
    lines.append('};')
    lines.append('')
    lines.append('/** Extra colours behind the paywall — free play, never needed to reach 100%. */')
    lines.append('export const bonusColors: PlanColor[] = [')
    for n, h in PREMIUM:
        lines.append("  { name: '%s', value: '%s' }," % (n, h))
    lines.append('];')
    lines.append('')
    open('/tmp/pal/artColors.ts', 'w').write('\n'.join(lines))
    json.dump(out, open('/tmp/pal/plans.json', 'w'), indent=1)
    for sid, v in out.items():
        print('%-22s %2d swatches %2d targets  %s' % (sid, len(v['palette']), len(v['targets']),
                                                      ' '.join(c['value'] for c in v['palette'])))


if __name__ == '__main__':
    main()
