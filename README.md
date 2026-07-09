# Paint a Saint

A mobile-first **React + TypeScript + Vite** application for a child-friendly Catholic coloring experience. Children select a saint, pick a color, and tap defined SVG regions—such as robes, halos, wings, symbols, and backgrounds—to color them.

## Monetization built into this package

### Free library — five saints

The following pages are permanently free:

1. Mary, Mother of God
2. St. Joseph
3. St. Francis of Assisi
4. St. Thérèse of Lisieux
5. St. Anthony of Padua

Free users can color these five saints with the eight standard colors and save completed artwork as a PNG image.

### Full Library Unlock — `$4.99` one-time purchase

The in-app premium unlock is a **one-time, non-consumable purchase**, not a subscription. It unlocks:

- The remaining **46 saint pages**, for **all 51 saints** in the starting catalogue.
- **Nine premium colors**: gold, forest green, navy, lavender, violet, rose, sand, charcoal, and black.
- **Printable coloring pages**: a blank outline for crayons/markers or the child's completed colored page.

The product identifier is defined in `src/lib/commerce.ts`:

```text
com.paintasaint.lifetimeunlock
```

The price shown in the app is `$4.99`. Before store submission, configure this same product ID as a **non-consumable one-time in-app product** in both App Store Connect and Google Play Console, using a USD price equivalent to $4.99.

## What is included

- **51 individual saint pages** covering every saint requested for the initial library.
- Original simplified SVG line art generated from reusable visual motifs; every image has separate, tap-ready color regions.
- Responsive iPad, phone, desktop, and tablet UI.
- Touch/click coloring, erase mode, Undo (80 changes), clear-page control, and local device saving.
- Free/premium entitlements enforced in the saint gallery, saint-picker dropdown, color palette, and print controls.
- A child-safe arithmetic parent gate before the purchase screen appears.
- A native purchase adapter for the `window.WTN` JavaScript bridge used by WebToNative.
- Purchase restoration flow for users who have previously bought the lifetime unlock.
- PNG export of completed artwork remains available in the free tier.
- Print an uncolored outline or a finished coloring page after Premium is unlocked.
- Saint library search and category filters.
- Parent Zone arithmetic gate with an option to clear all local progress.
- PWA manifest and lightweight offline service worker.

## Important illustration note

The included coloring pages are intentionally simplified original vector prototypes. They establish the interaction model and give every named saint a functional page now. For a production consumer release, replace or supplement them with a commissioned, consistent illustration library designed by a Catholic children’s illustrator.

The SVG engine will continue to work as long as new art retains the same region IDs:

```text
background, halo, skin, hair, robe, mantle, accent, symbol, wings
```

## Run locally

1. Install **Node.js 20+**.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL shown by Vite, normally `http://localhost:5173`.

For a production build:

```bash
npm run build
npm run preview
```

The deployable static site is created in `dist/`.

## Test the premium flow in a browser

A plain web browser does not have the Apple/Google purchase bridge, so it intentionally stays in free mode by default.

To test the entire parent-gate and entitlement flow locally without charging money:

```bash
cp .env.example .env.local
```

Change this line in `.env.local`:

```text
VITE_DEMO_IAP=true
```

Restart `npm run dev`. The unlock button will then simulate a successful lifetime purchase and persist Premium on that browser/device. **Never deploy with this value set to `true`.**

## WebToNative implementation

This app is pre-wired to call `window.WTN.inAppPurchase(...)` with:

```text
productId: com.paintasaint.lifetimeunlock
productType: INAPP
isConsumable: false
```

### Configure the stores

1. In **App Store Connect**, create the one-time non-consumable product using `com.paintasaint.lifetimeunlock` and set its U.S. price to `$4.99`.
2. In **Google Play Console**, create a one-time non-consumable `INAPP` product with the same product ID and price.
3. In WebToNative, enable its in-app-purchase configuration for both the iOS and Android wrappers.
4. Upload a build to each store’s test environment and make sandbox/test purchases before submission.
5. Confirm that **Restore previous purchase** finds the entitlement under the same Apple ID / Google account.

### Receipt verification for production

The package works with WebToNative’s successful native callback so the proof of concept is fully testable. For a launch build, add a small protected backend endpoint that verifies Apple/Google receipts and set:

```text
VITE_ENTITLEMENT_VERIFY_URL=https://your-domain.example/api/verify-paint-a-saint-entitlement
```

That endpoint receives:

```json
{
  "productId": "com.paintasaint.lifetimeunlock",
  "receiptData": "..."
}
```

It must return:

```json
{ "hasEntitlement": true }
```

**only after validating the receipt with the relevant store.** The app does not contain store credentials or shared secrets.

## Printing behavior

- **Desktop/PWA browser:** opens a clean print window using the browser’s system print dialogue.
- **WebToNative Android wrapper:** uses its native HTML-print bridge when available.
- **iOS wrapper:** browser-print fallback is present, but it must be tested on a physical iPad/iPhone during WebToNative QA because the documented native HTML-print bridge is Android-specific.

## Deploy as a website

### Vercel

1. Put this folder in a GitHub repository.
2. Import that repository into Vercel.
3. Use the automatically detected Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy and attach your custom domain.

### Netlify / Cloudflare Pages

Use the same settings:

- Build command: `npm run build`
- Publish/output directory: `dist`
- Node version: 20 or newer

## Production-readiness checklist

Before publishing to children, add and review:

- A professionally reviewed privacy policy and terms.
- COPPA/child-directed app compliance review where applicable.
- App Store and Google Play age ratings and child-safety declarations.
- A true parent gate around purchases, outbound links, and account-related controls.
- Store receipt verification endpoint, plus logging/monitoring for failed purchase verification.
- An analytics and crash-reporting policy that avoids collecting children’s personal data without appropriate consent.
- Professionally commissioned and reviewed saint art, facts, and prayers.
- Device testing on several real tablets and phones.

## Add a new saint

1. Add a saint record to `src/data/saints.ts`.
2. Choose one of the existing `motif` values in `src/types.ts`, or create a new motif and draw it in `src/components/SaintArt.tsx`.
3. Keep the list of regions appropriate for the page. Angels can include `wings`.
4. New saints default to Premium. To make another page free, add its ID to `FREE_SAINT_IDS` in `src/App.tsx`.

## Project map

```text
src/
  App.tsx                    Application state, free/premium gates, and UI
  components/SaintArt.tsx    Interactive SVG coloring engine and symbols
  data/saints.ts             51-saint catalogue and child-friendly content
  lib/commerce.ts            WebToNative purchase / restore / entitlement adapter
  lib/printing.ts            Premium blank and colored print functions
  types.ts                   Data model and SVG region definitions
  styles.css                 Responsive visual system
public/
  manifest.webmanifest       Installable web app metadata
  service-worker.js          Lightweight offline cache
.env.example                 Safe local test and receipt-verification settings
```
