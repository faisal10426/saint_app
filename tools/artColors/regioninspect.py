import json, os, sys
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

raw = json.load(open('/tmp/pal/targets_raw.json'))
man = {m['id']: m for m in json.load(open('/tmp/pal/regionsvg/manifest.json'))}


def warp(arr, sx, sy, dx, dy, ow, oh):
    yy, xx = np.mgrid[0:oh, 0:ow].astype(float)
    co = np.array([(yy * sy + dy).ravel(), (xx * sx + dx).ravel()])
    return np.stack([ndimage.map_coordinates(arr[:, :, i], co, order=1, mode='nearest').reshape(oh, ow)
                     for i in range(3)], axis=2)


def sheet(sid, out):
    m = man[sid]; r = raw[sid]
    ca = np.asarray(Image.open('/tmp/pal/cards_small/' + os.path.basename(m['card']).rsplit('.', 1)[0] + '.jpg').convert('RGB')).astype(float)
    w = warp(ca, r['sx'], r['sy'], r['dx'], r['dy'], 640, 760)
    reg = np.asarray(Image.open('/tmp/pal/png/' + sid + '.png').convert('RGB')).astype(int)
    tiles = []
    for c, name in m['map'].items():
        v = [int(t) for t in c[4:-1].split(',')]
        mask = (reg[:, :, 0] == v[0]) & (reg[:, :, 1] == v[1]) & (reg[:, :, 2] == v[2])
        if mask.sum() < 60:
            continue
        vis = (w * 0.22 + 40).astype(np.uint8)
        vis[mask] = w[mask].astype(np.uint8)
        im = Image.fromarray(vis).resize((190, 226))
        d = ImageDraw.Draw(im)
        hexv = raw[sid]['regions'].get(name, {}).get('hex', '?')
        d.rectangle([0, 206, 190, 226], fill='black')
        d.text((4, 210), f'{name} {hexv}', fill='white')
        if hexv != '?':
            d.rectangle([150, 208, 186, 224], fill=hexv)
        tiles.append(im)
    cols = 5
    rows = (len(tiles) + cols - 1) // cols
    sh = Image.new('RGB', (cols * 190, rows * 226), 'white')
    for i, t in enumerate(tiles):
        sh.paste(t, ((i % cols) * 190, (i // cols) * 226))
    sh.save(out)


if __name__ == '__main__':
    sheet(sys.argv[1], sys.argv[2])
