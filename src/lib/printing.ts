import type { PaintMap, Saint } from '../types';
import { tryNativePrint } from './commerce';

const PRINT_SVG_ID = 'paint-a-saint-export-art';

function buildPrintMarkup(saint: Saint, svgMarkup: string, colored: boolean): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${saint.name} — Paint a Saint</title>
<style>
  @page { size: auto; margin: 11mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Arial, Helvetica, sans-serif; color: #171717; background: white; }
  main { max-width: 760px; margin: 0 auto; text-align: center; }
  h1 { font-size: 23px; margin: 0 0 6px; }
  p { margin: 0 0 13px; color: #444; font-size: 13px; }
  svg { width: min(100%, 620px); height: auto; display: block; margin: 0 auto; }
  .credit { margin-top: 10px; color: #777; font-size: 10px; }
</style>
</head>
<body>
  <main>
    <h1>${saint.name}</h1>
    <p>${colored ? 'My completed Paint a Saint picture' : 'A Paint a Saint coloring page'}</p>
    ${svgMarkup}
    <p class="credit">Paint a Saint · ${saint.feast}</p>
  </main>
  <script>window.onload = function () { window.print(); };</script>
</body>
</html>`;
}

export function printColoringPage(saint: Saint, artwork: PaintMap, blank: boolean): boolean {
  const original = document.getElementById(PRINT_SVG_ID) as SVGSVGElement | null;
  if (!original) return false;

  const clone = original.cloneNode(true) as SVGSVGElement;
  clone.removeAttribute('id');
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', '1200');
  clone.setAttribute('height', '1425');

  if (blank) {
    clone.querySelectorAll<SVGElement>('.paint-region').forEach((region) => {
      region.setAttribute('fill', '#fffdf8');
    });
  }

  const markup = new XMLSerializer().serializeToString(clone);
  const html = buildPrintMarkup(saint, markup, !blank && Object.keys(artwork).length > 0);

  // WebToNative documents a native HTML-print API on Android. The browser
  // fallback gives the web/PWA and desktop versions a standard print dialogue.
  if (tryNativePrint(html)) return true;

  const printWindow = window.open('', '_blank', 'width=860,height=860');
  if (!printWindow) return false;
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  return true;
}
