# artColors — where `src/data/artColors.ts` comes from

Each saint's palette and completion targets are **read off that saint's devotional
card**, not chosen by hand. The pipeline:

1. **`render.mjs`** — server-renders `<SaintArt>` for every published saint twice:
   once with each region filled a unique flat colour (the region map) and once all
   white (the line art alone). Run it from the project root with vite installed:
   `node tools/artColors/render.mjs`.
2. Rasterise both to 640x760 PNGs (cairosvg).
3. **`sample.py`** — registers the card against the line art and samples the card
   under every region mask.
   * The card templates are two fixed sizes, so the illustration rectangle maps
     onto the paintable panel directly; an FFT cross-correlation of the two edge
     images corrects the residual shift.
   * A mask usually straddles more than one painted colour (a black hood inside a
     cream tunic, a hand inside a sleeve), so the **median is useless** — it names a
     colour that appears nowhere on the card. The dominant tone wins instead:
     coarse-bin the masked pixels in Lab, take the fullest bin.
   * `PRIOR` / `SIGMA` break the tie by what the region *is*: a tight sigma keeps
     the sky blue under white clouds and the halo gold rather than the pale glow
     inside it. `OVERRIDE` does the same for a single saint where the generic
     expectation is wrong (Therese's sky is gold, not blue).
4. **`emit.py`** — merges tones the eye reads as one colour, tops a thin palette up
   with the card's own dominant tones, names each swatch, and writes
   `src/data/artColors.ts`.

`regioninspect.py <saint-id> <out.png>` draws every mask over the registered card
with the sampled hex — the fastest way to see *why* a colour came out wrong. All 34
saints were reviewed this way; `review.md` records what each correction fixes.

## Judgement calls worth knowing

* `MIN_PX` drops regions whose visible mask is too small to find with a fingertip.
  Those have no target and are not counted by the meter — they are free colouring.
* `DROP` removes regions whose mask is so far under other regions that no sensible
  colour can be read (Xavier's water and hillside are almost entirely behind his
  cassock).
* Accuracy is bounded by mask quality. On saints whose masks are still rough
  blobs, a target is a plausible colour from the card rather than an exact one.
  Improving the masks improves these numbers with no change here.

The tool is not wired into the build: rerun it when a saint's masks change, then
check the result before committing.
