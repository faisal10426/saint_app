import json, os
import numpy as np
from PIL import Image
from scipy import ndimage

MAN = json.load(open('/tmp/pal/regionsvg/manifest.json'))
RECT_A = (25, 33, 615, 664)     # 640x853 card template
RECT_B = (30, 24, 610, 796)     # 640x960 card template
PANEL = (14, 14, 626, 746)      # SaintArt paintable panel


# A region mask usually covers more than one painted colour on the card. Where the
# region's name tells us what it should be, prefer the dominant tone that sits
# nearest that expectation instead of the largest one outright: it keeps the halo
# gold rather than the pale glow inside it, and hair brown rather than the cheek
# beside it. Every value still comes from the card itself.
PRIOR = {
    'halo': (240, 196, 74),
    'skin': (246, 192, 138),
    'hair': (107, 68, 35),
    'cloud': (250, 250, 248),
    'background': (168, 208, 239),
    'water': (110, 170, 210),
    'garden': (96, 140, 60),
    'hills': (150, 180, 120),
    'flowers': (245, 245, 235),
    'book': (120, 70, 40),
    'church': (200, 190, 170),
    'wings': (250, 246, 232),
    'veil': (250, 248, 240),
    'quill': (250, 248, 240),
}


# How hard the expectation pulls: a tight sigma means the named colour wins even
# when it covers less of the mask (sky under clouds), a loose one lets area decide.
SIGMA = {'background': 22.0, 'cloud': 20.0, 'water': 25.0, 'garden': 30.0, 'hair': 30.0, 'halo': 32.0,
         'hills': 30.0, 'church': 35.0}

# Read off the card by eye where the generic expectation is wrong for one saint:
# Therese's sky is gold rather than blue, her habit dark brown; Xavier's landscape
# is mostly hidden behind his cassock. The value is still whichever tone in the
# mask comes closest — nothing is invented.
OVERRIDE = {
    ('therese-of-lisieux', 'background'): (240, 200, 110),
    ('therese-of-lisieux', 'cloud'): (250, 226, 160),
    ('therese-of-lisieux', 'mantle'): (70, 45, 25),
    ('therese-of-lisieux', 'garden'): (95, 135, 55),
    ('therese-of-lisieux', 'symbol'): (200, 55, 35),
    ('francis-xavier', 'water'): (60, 140, 180),
    ('francis-xavier', 'garden'): (85, 130, 50),
    ('francis-xavier', 'book'): (30, 60, 110),
    ('francis-xavier', 'hair'): (60, 40, 25),
    ('francis-xavier', 'innerCollar'): (250, 250, 245),
}


def warp(arr, sx, sy, dx, dy, ow, oh):
    yy, xx = np.mgrid[0:oh, 0:ow].astype(float)
    co = np.array([(yy * sy + dy).ravel(), (xx * sx + dx).ravel()])
    if arr.ndim == 2:
        return ndimage.map_coordinates(arr, co, order=1, mode='nearest').reshape(oh, ow)
    return np.stack([ndimage.map_coordinates(arr[:, :, i], co, order=1, mode='nearest').reshape(oh, ow)
                     for i in range(arr.shape[2])], axis=2)


def edges(g):
    return ndimage.gaussian_filter(np.hypot(ndimage.sobel(g, axis=1), ndimage.sobel(g, axis=0)), 1.2)


def norm(a):
    a = a - a.mean()
    s = a.std()
    return a / s if s > 1e-6 else a


def refine_shift(card_gray, line_gray, sx, sy, dx, dy, maxshift=18):
    K = 2
    ow, oh = 640 // K, 760 // K
    el = ndimage.zoom(edges(line_gray), 1 / K, order=1)[:oh, :ow]
    wc = warp(edges(card_gray), sx * K, sy * K, dx, dy, ow, oh)
    A = np.fft.rfft2(norm(el)); B = np.fft.rfft2(norm(wc))
    c = np.fft.fftshift(np.fft.irfft2(A * np.conj(B), s=el.shape))
    cy, cx = np.array(c.shape) // 2
    m = maxshift // K
    win = c[cy - m:cy + m + 1, cx - m:cx + m + 1]
    iy, ix = np.unravel_index(np.argmax(win), win.shape)
    return dx + (ix - m) * sx * K, dy + (iy - m) * sy * K


def rgb2lab(rgb):
    a = np.asarray(rgb, dtype=float).reshape(-1, 3) / 255.0
    a = np.where(a > 0.04045, ((a + 0.055) / 1.055) ** 2.4, a / 12.92)
    M = np.array([[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]])
    xyz = a @ M.T / np.array([0.95047, 1.0, 1.08883])
    f = np.where(xyz > 0.008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
    L = 116 * f[:, 1] - 16
    return np.stack([L, 500 * (f[:, 0] - f[:, 1]), 200 * (f[:, 1] - f[:, 2])], axis=1)


def hexs(c):
    return '#%02x%02x%02x' % tuple(int(round(v)) for v in c)


def run():
    out = {}
    for m in MAN:
        cf = '/tmp/pal/cards_small/' + os.path.basename(m['card']).rsplit('.', 1)[0] + '.jpg'
        card = Image.open(cf).convert('RGB')
        ca = np.asarray(card).astype(float)
        h = ca.shape[0]
        x0, y0, x1, y1 = RECT_A if h < 900 else RECT_B
        sx = (x1 - x0) / (PANEL[2] - PANEL[0])
        sy = (y1 - y0) / (PANEL[3] - PANEL[1])
        dx = x0 - PANEL[0] * sx
        dy = y0 - PANEL[1] * sy
        line = np.asarray(Image.open('/tmp/pal/linepng/' + m['id'] + '.png').convert('L')).astype(float)
        dx, dy = refine_shift(np.asarray(card.convert('L')).astype(float), line, sx, sy, dx, dy)
        wc = warp(ca, sx, sy, dx, dy, 640, 760)

        reg = np.asarray(Image.open('/tmp/pal/png/' + m['id'] + '.png').convert('RGB')).astype(int)
        res = {}
        for c, name in m['map'].items():
            v = [int(t) for t in c[4:-1].split(',')]
            mask = (reg[:, :, 0] == v[0]) & (reg[:, :, 1] == v[1]) & (reg[:, :, 2] == v[2])
            mask &= line > 150                     # keep away from the drawn outlines
            n = int(mask.sum())
            if n < 60:
                continue
            px = wc[mask]
            # A mask often straddles more than one painted colour (a hood inside a
            # tunic, a hand inside a sleeve). The median of that mixture is a colour
            # that appears nowhere on the card, so take the dominant tone instead:
            # coarse-bin the pixels in Lab, keep the fullest bin, average it.
            lab = rgb2lab(px)
            key = np.floor(lab / np.array([10.0, 8.0, 8.0])).astype(int)
            _, inv, cnt = np.unique(key, axis=0, return_inverse=True, return_counts=True)
            order = np.argsort(cnt)[::-1][:8]
            cands = [(float(cnt[b] / len(px)), px[inv == b].mean(axis=0)) for b in order]
            prior = OVERRIDE.get((m['id'], name), PRIOR.get(name))
            if (m['id'], name) in OVERRIDE:
                plab = rgb2lab([prior])[0]
                share, col = min(cands, key=lambda c: np.linalg.norm(rgb2lab([c[1]])[0] - plab))
                res[name] = dict(hex=hexs(col), px=n, share=share)
                continue
            if prior is None:
                share, col = cands[0]
            else:
                plab = rgb2lab([prior])[0]
                sig = SIGMA.get(name, 45.0)
                def score(c):
                    d = np.linalg.norm(rgb2lab([c[1]])[0] - plab)
                    return c[0] * np.exp(-(d / sig) ** 2)
                share, col = max(cands, key=score)
            res[name] = dict(hex=hexs(col), px=n, share=share)
        out[m['id']] = dict(sx=sx, sy=sy, dx=dx, dy=dy, regions=res)
        print(m['id'], {k: v['hex'] for k, v in res.items()})
    json.dump(out, open('/tmp/pal/targets_raw.json', 'w'), indent=1)


if __name__ == '__main__':
    run()
