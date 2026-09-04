import json, os, sys
import numpy as np
from PIL import Image
from scipy import ndimage

MAN = json.load(open('/tmp/pal/regionsvg/manifest.json'))
W, H = 640, 760          # SVG space


def card_path(m):
    return '/tmp/pal/cards_small/' + os.path.basename(m['card']).rsplit('.', 1)[0] + '.jpg'


def edges(img):
    g = np.asarray(img.convert('L')).astype(float)
    e = np.hypot(ndimage.sobel(g, axis=1), ndimage.sobel(g, axis=0))
    return ndimage.gaussian_filter(e, 1.2)


def norm(a):
    a = a - a.mean()
    s = a.std()
    return a / s if s > 1e-6 else a


def warp(arr, sx, sy, dx, dy, ow, oh):
    yy, xx = np.mgrid[0:oh, 0:ow].astype(float)
    coords = np.array([(yy * sy + dy).ravel(), (xx * sx + dx).ravel()])
    if arr.ndim == 2:
        return ndimage.map_coordinates(arr, coords, order=1, mode='nearest').reshape(oh, ow)
    return np.stack([ndimage.map_coordinates(arr[:, :, i], coords, order=1, mode='nearest').reshape(oh, ow)
                     for i in range(arr.shape[2])], axis=2)


def fft_shift(a, b, maxshift):
    A = np.fft.rfft2(norm(a)); B = np.fft.rfft2(norm(b))
    c = np.fft.fftshift(np.fft.irfft2(A * np.conj(B), s=a.shape))
    cy, cx = np.array(c.shape) // 2
    m = maxshift
    win = c[cy - m:cy + m + 1, cx - m:cx + m + 1]
    iy, ix = np.unravel_index(np.argmax(win), win.shape)
    return iy - m, ix - m, win.max() / a.size


def register(m, verbose=False):
    card = Image.open(card_path(m)).convert('RGB')
    line = Image.open('/tmp/pal/linepng/' + m['id'] + '.png').convert('RGB')
    ch, cw = card.size[1], card.size[0]
    ec, el = edges(card), edges(line)
    K = 4
    ow, oh = W // K, H // K
    el_s = ndimage.zoom(el, 1 / K, order=1)[:oh, :ow]

    best = None
    for sx in np.linspace(0.84, 1.12, 15):
        for sy in np.linspace(0.78, 1.16, 20):
            # seed: svg centre -> (0.5*cw, 0.41*ch)
            dx = 0.50 * cw - sx * W / 2
            dy = 0.41 * ch - sy * H / 2
            wc = warp(ec, sx * K, sy * K, dx, dy, ow, oh)
            ddy, ddx, score = fft_shift(el_s, wc, 14)
            if best is None or score > best[0]:
                best = (score, sx, sy, dx + ddx * sx * K, dy + ddy * sy * K)
    score, sx, sy, dx, dy = best
    # fine pass
    for f in (0.02, 0.008):
        base = best
        for sx in base[1] * (1 + np.linspace(-f, f, 7)):
            for sy in base[2] * (1 + np.linspace(-f, f, 7)):
                dx = base[3] + (base[1] - sx) * W / 2
                dy = base[4] + (base[2] - sy) * H / 2
                wc = warp(ec, sx * K, sy * K, dx, dy, ow, oh)
                ddy, ddx, score = fft_shift(el_s, wc, 5)
                if score > best[0]:
                    best = (score, sx, sy, dx + ddx * sx * K, dy + ddy * sy * K)
    score, sx, sy, dx, dy = best
    if verbose:
        print('%-24s score=%.3f s=(%.4f,%.4f) d=(%.1f,%.1f)' % (m['id'], score, sx, sy, dx, dy))
        sys.stdout.flush()
    return dict(id=m['id'], score=float(score), sx=float(sx), sy=float(sy), dx=float(dx), dy=float(dy))


if __name__ == '__main__':
    res = [register(m, verbose=True) for m in MAN]
    json.dump(res, open('/tmp/pal/reg.json', 'w'), indent=1)
