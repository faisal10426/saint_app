import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage
import json, subprocess, os, re

ART = os.path.dirname(__file__)
LINEART = os.path.join(ART, 'mary-magdalene-lineart.webp')

# classifier polygons in 1024x1536 source space, priority order (first match wins)
POLYS = [
    ('skin',   [(430,105),(560,100),(625,150),(640,300),(600,420),(520,455),(440,420),(415,300),(415,180)]),
    ('symbol', [(492,640),(640,640),(668,744),(666,854),(630,908),(534,916),(484,854),(480,744)]),  # jar
    ('skin',   [(440,486),(600,486),(604,642),(444,642)]),                 # neck + decolletage
    ('skin',   [(598,800),(742,814),(746,990),(596,986)]),                 # right hand
    ('skin',   [(410,900),(602,900),(610,1018),(408,1012)]),               # left hand
    ('accent', [(454,590),(566,590),(566,660),(510,668),(454,632)]),       # V-neck gold trim (small)
    ('accent', [(464,900),(598,900),(598,1170),(462,1170)]),               # sash + tails
    ('hair',   [(414,88),(606,94),(606,182),(414,182)]),                   # forehead band
    ('hair',   [(300,132),(506,146),(516,520),(492,974),(352,990),(268,600),(272,286)]),  # left mass
    ('hair',   [(560,150),(772,176),(784,520),(752,974),(606,990),(560,600),(556,300)]),  # right mass
    ('robe',   [(210,560),(520,560),(538,1046),(202,1046)]),               # left sleeve
    ('robe',   [(556,536),(846,536),(846,1006),(560,1006)]),               # right sleeve
    ('robe',   [(398,414),(644,414),(684,1510),(382,1510)]),               # tunic / skirt
    ('mantle', [(330,108),(430,86),(566,86),(664,138),(706,270),(700,410),(654,470),(566,452),(430,456),(340,446),(306,300),(308,170)]),  # veil / hood
    ('mantle', [(150,458),(324,458),(258,1516),(140,1516)]),               # left cloak drape
    ('mantle', [(658,410),(802,410),(790,1440),(662,1440)]),               # right cloak drape
    ('cloud',  [(0,0),(410,0),(410,340),(0,340)]),
    ('cloud',  [(740,0),(1024,0),(1024,210),(740,210)]),
]
HALO_C, HALO_R = (490, 258), 232
NAMES = ['halo','cloud','mantle','robe','hair','symbol','accent','skin']
NID = {n: i + 1 for i, n in enumerate(NAMES)}

# ---- binarize line art ----
src = Image.open(LINEART).convert('L')
W, H = src.size
black = np.asarray(src) < 185
black = ndimage.binary_dilation(black, iterations=2)
white = ~black

# ---- priority map from polygons ----
prio = np.zeros((H, W), dtype=np.int16)
for pr_name, pts in reversed(POLYS):
    im = Image.new('L', (W, H), 0)
    ImageDraw.Draw(im).polygon(pts, fill=1)
    prio[np.asarray(im) > 0] = NID[pr_name]
yy, xx = np.ogrid[:H, :W]
disc = (xx - HALO_C[0]) ** 2 + (yy - HALO_C[1]) ** 2 <= HALO_R ** 2
prio[(prio == 0) & disc] = NID['halo']

# ---- label compartments, classify each by its pixels' priority-map majority ----
lbl, n = ndimage.label(white, structure=np.ones((3, 3)))
print('compartments:', n)
masks = {nm: np.zeros((H, W), dtype=bool) for nm in NAMES + ['background']}
objs = ndimage.find_objects(lbl)

for k in range(1, n + 1):
    sl = objs[k - 1]
    if sl is None:
        continue
    sub = lbl[sl] == k
    pr = prio[sl][sub]
    total = pr.size
    if total == 0:
        continue
    counts = np.bincount(pr, minlength=len(NAMES) + 1)
    top = int(counts.argmax())
    frac = counts[top] / total
    # every compartment takes its majority region whole, so all edges follow the ink
    if top == 0:
        masks['background'][sl][sub] = True
    else:
        masks[NAMES[top - 1]][sl][sub] = True

# grow figure masks back to the black line
for nm in NAMES:
    if nm == 'halo':
        masks[nm] = disc
        continue
    masks[nm] = ndimage.binary_dilation(masks[nm], iterations=3)

# ---- potrace ----
PARAMS = dict(turdSize=14, alphaMax=1, optCurve=True, optTolerance=0.25,
              turnPolicy='minority', threshold=128)
TRJS = os.path.join(ART, '_tr.cjs')
open(TRJS, 'w').write(
    "const potrace=require('potrace');"
    "potrace.trace(process.argv[2],%s,(e,s)=>{if(e){console.error(e);process.exit(1)}"
    "const m=s.match(/ d=\"([^\"]+)\"/);process.stdout.write(m?m[1]:'')});" % json.dumps(PARAMS))

def rnd(d):
    return re.sub(r'-?\d+\.\d+',
                  lambda m: (lambda v: str(int(v)) if v == int(v) else f'{v:.1f}')(round(float(m.group()), 1)), d)

paths = {}
for nm in NAMES:
    area = int(masks[nm].sum())
    if area < 300:
        print(f'{nm}: EMPTY'); paths[nm] = ''; continue
    p = os.path.join(ART, f'_m_{nm}.bmp')
    Image.fromarray(np.where(masks[nm], 0, 255).astype(np.uint8)).convert('RGB').save(p)
    out = subprocess.run(['node', TRJS, p], capture_output=True, text=True)
    if out.returncode:
        print(nm, 'FAIL', out.stderr[:200]); paths[nm] = ''; continue
    paths[nm] = rnd(out.stdout.strip())
    print(f'{nm}: {area}px -> {len(paths[nm])}')

open(os.path.join(ART, '_paths.json'), 'w').write(json.dumps(paths))
print('wrote _paths.json')
