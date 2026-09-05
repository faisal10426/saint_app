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

# Corrections made by looking at each mask on its card (tools/artColors/review.md
# records what was wrong). Two forms, and both still take the value from the card:
#   ('mask', r, g, b) — the tone inside this mask closest to what it should be.
#                       Use when the right colour IS under the mask but lost the
#                       area vote (a gold halo ring against its pale glow).
#   ('card', r, g, b) — the closest of the card's own dominant tones. Use when the
#                       mask sits almost entirely under other regions, so the right
#                       colour is nowhere inside it (Xavier's sea, behind a cassock).
OVERRIDE = {
    # Mary — the gold trim and the crown of stars were coming out skin-coloured.
    ('mary-mother-of-god', 'accent'): ('mask', 200, 148, 45),
    ('mary-mother-of-god', 'symbol'): ('mask', 230, 190, 90),
    # Joseph — his tunic is brown, not the orange the highlights averaged to.
    ('joseph', 'robe'): ('mask', 150, 100, 50),
    # Francis — gold ring rather than its pale glow; the birds are white.
    ('francis-of-assisi', 'halo'): ('mask', 235, 195, 90),
    ('francis-of-assisi', 'symbol'): ('mask', 240, 240, 235),
    # Therese — cream cloak, gold sky, dark brown habit, red roses, green leaves.
    ('therese-of-lisieux', 'background'): ('mask', 240, 200, 110),
    ('therese-of-lisieux', 'cloud'): ('mask', 250, 226, 160),
    ('therese-of-lisieux', 'mantle'): ('mask', 70, 45, 25),
    ('therese-of-lisieux', 'robe'): ('mask', 240, 228, 195),
    ('therese-of-lisieux', 'symbol'): ('mask', 200, 55, 35),
    ('therese-of-lisieux', 'garden'): ('card', 95, 135, 55),
    # John Bosco — the tree behind him is green.
    ('john-bosco', 'garden'): ('card', 90, 130, 60),
    ('francis-xavier', 'hair'): ('mask', 60, 40, 25),
    # Dominic — leaves, the leather book and its gilt cross, dark rosary beads.
    ('dominic', 'garden'): ('card', 90, 130, 60),
    ('dominic', 'book'): ('mask', 110, 70, 40),
    ('dominic', 'emblem'): ('mask', 230, 180, 80),
    ('dominic', 'accent'): ('mask', 45, 42, 38),
    ('monica', 'church'): ('mask', 190, 165, 120),
    # Aquinas — Dominican white under the black cappa, gold sun on his chest.
    ('thomas-aquinas', 'hood'): ('mask', 245, 240, 225),
    ('thomas-aquinas', 'innerCollar'): ('mask', 245, 240, 225),
    ('thomas-aquinas', 'emblem'): ('mask', 240, 200, 90),
    # Catherine — this mask is her white wimple, not hair.
    ('catherine-of-siena', 'hair'): ('mask', 245, 242, 232),
    ('kateri-tekakwitha', 'background'): ('card', 150, 200, 238),
    # Martin — crimson cloak, white horse.
    ('martin-of-tours', 'mantle'): ('mask', 180, 40, 25),
    ('martin-of-tours', 'symbol'): ('mask', 240, 238, 230),
    ('vincent-de-paul', 'background'): ('card', 150, 200, 238),
    ('vincent-de-paul', 'robe'): ('card', 35, 33, 30),
    ('vincent-de-paul', 'symbol'): ('mask', 200, 150, 80),
    # Elizabeth Ann Seton — black bonnet, pale statue.
    ('elizabeth-ann-seton', 'background'): ('card', 150, 200, 238),
    ('elizabeth-ann-seton', 'hair'): ('mask', 45, 42, 38),
    ('elizabeth-ann-seton', 'symbol'): ('mask', 235, 230, 215),
    ('maria-goretti', 'skin'): ('mask', 246, 192, 138),
    ('maria-goretti', 'flowers'): ('mask', 245, 243, 235),
    # Lucy — brass lamp, green palm.
    ('lucy', 'accent'): ('mask', 220, 170, 80),
    ('lucy', 'symbol'): ('mask', 90, 130, 60),
    # Cecilia — this mask is the sky around her halo, not her hair.
    ('cecilia', 'hair'): ('mask', 150, 200, 238),
    ('agatha', 'mantle'): ('mask', 180, 45, 30),
    ('joachim', 'hair'): ('mask', 225, 222, 215),
    # John the Baptist — the lamb is white, the scroll cream.
    ('john-the-baptist', 'accent'): ('mask', 245, 243, 238),
    ('john-the-baptist', 'symbol'): ('mask', 240, 235, 220),
    # George — these two masks are his armour: steel, not cloth.
    ('george', 'robe'): ('mask', 130, 132, 135),
    ('george', 'accent'): ('mask', 128, 130, 134),
    ('sebastian', 'mantle'): ('mask', 190, 55, 20),
    ('maximilian-kolbe', 'hair'): ('mask', 200, 195, 185),
    ('paul', 'hair'): ('mask', 70, 45, 25),
    # Faustina — her card is warm beige behind her, and the image she holds is pale.
    ('faustina-kowalska', 'background'): ('mask', 225, 210, 180),
    ('faustina-kowalska', 'symbol'): ('mask', 240, 238, 232),
    ('mary-magdalene', 'background'): ('card', 200, 170, 130),
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


def tones(px, bin_size=(6.0, 5.0, 5.0), top=60, min_share=0.004):
    """Real colours present in a set of pixels, finely binned and ordered by area."""
    key = np.floor(rgb2lab(px) / np.array(bin_size)).astype(int)
    _, inv, cnt = np.unique(key, axis=0, return_inverse=True, return_counts=True)
    out = []
    for b in np.argsort(cnt)[::-1][:top]:
        if cnt[b] / len(px) < min_share and out:
            break
        out.append(px[inv == b].mean(axis=0))
    return out


def nearest(pool, want):
    wlab = rgb2lab([want])[0]
    d = [float(np.linalg.norm(rgb2lab([c])[0] - wlab)) for c in pool]
    i = int(np.argmin(d))
    return pool[i], d[i]


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
        card = tones(wc[::2, ::2].reshape(-1, 3), top=140, min_share=0.0008)
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
            fix = OVERRIDE.get((m['id'], name))
            if fix is not None:
                where, want = fix[0], fix[1:]
                col, dist = nearest(tones(px), want) if where == 'mask' else (None, 999)
                # If the colour this region should wear is not inside the mask at
                # all — the mask is buried, or covers something else entirely — take
                # the closest tone from elsewhere on the same card rather than
                # settling for whatever happens to be underneath.
                if dist > 26:
                    col, dist = nearest(card, want)
                res[name] = dict(hex=hexs(col), px=n, share=0.0, fixed=where, dist=round(dist, 1))
                continue
            prior = PRIOR.get(name)
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
