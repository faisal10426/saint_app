/**
 * Commerce boundary for Paint a Saint.
 *
 * The WebToNative wrapper exposes `window.WTN.inAppPurchase()` to a web app.
 * This module keeps all platform-specific calls in one place so the coloring
 * application itself only deals with a simple premium entitlement.
 */

export const LIFETIME_PRODUCT_ID = 'com.paintasaint.lifetimeunlock';
export const LIFETIME_PRICE_LABEL = '$4.99';

const PAID_FREE_TEST_PARAM = 'paidfreetest';
const PAID_FREE_TEST_SESSION_KEY = 'paint-a-saint-paidfreetest';

/**
 * Dummy tester unlock: open the app with `?paidfreetest=true` to use every
 * paid saint, color, and print feature without a store purchase.
 * Example: https://example.com/?paidfreetest=true
 */
export function isPaidFreeTestUnlock(): boolean {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get(PAID_FREE_TEST_PARAM) === 'true') {
      sessionStorage.setItem(PAID_FREE_TEST_SESSION_KEY, '1');
      return true;
    }
    return sessionStorage.getItem(PAID_FREE_TEST_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

export type PurchaseResult =
  | { ok: true; receiptData?: unknown; source: 'webtonative' | 'demo' }
  | { ok: false; reason: 'cancelled' | 'unavailable' | 'failed'; message?: string };

type WtnPurchaseData = {
  isSuccess?: boolean;
  isCancelled?: boolean;
  receiptData?: unknown;
  message?: string;
  error?: string;
};

type WtnPurchaseRecord = Record<string, unknown>;

type WtnBridge = {
  inAppPurchase?: (args: {
    productId: string;
    productType?: 'INAPP' | 'SUBS';
    isConsumable?: boolean;
    callback: (data: WtnPurchaseData) => void;
  }) => void;
  getAllPurchases?: (args: { callback: (data: { isSuccess?: boolean; purchaseData?: unknown; receiptData?: unknown; message?: string }) => void }) => void;
  getReceiptData?: (args: { callback: (data: WtnPurchaseData) => void }) => void;
  printFunction?: (args: { type: 'html' | 'url'; url: string }) => void;
  Printing?: { setPrintSize?: (args: { printSize: string; label?: string }) => void };
};

declare global {
  interface Window {
    WTN?: WtnBridge;
  }
}

function demoModeEnabled(): boolean {
  return import.meta.env.VITE_DEMO_IAP === 'true';
}

export function isNativePurchaseAvailable(): boolean {
  return Boolean(window.WTN?.inAppPurchase);
}

export async function purchaseLifetimeUnlock(): Promise<PurchaseResult> {
  if (demoModeEnabled()) {
    return { ok: true, source: 'demo' };
  }

  if (!window.WTN?.inAppPurchase) {
    return {
      ok: false,
      reason: 'unavailable',
      message: 'Purchases are available when Paint a Saint is opened in its iOS or Android app.',
    };
  }

  return new Promise((resolve) => {
    try {
      window.WTN?.inAppPurchase?.({
        productId: LIFETIME_PRODUCT_ID,
        // Android requires these values for a one-time non-consumable IAP.
        // WebToNative’s iOS bridge ignores the Android-specific fields.
        productType: 'INAPP',
        isConsumable: false,
        callback: (data) => {
          if (data?.isSuccess) {
            resolve({ ok: true, source: 'webtonative', receiptData: data.receiptData });
          } else if (data?.isCancelled) {
            resolve({ ok: false, reason: 'cancelled' });
          } else {
            resolve({ ok: false, reason: 'failed', message: data?.message ?? data?.error ?? 'The purchase did not finish.' });
          }
        },
      });
    } catch {
      resolve({ ok: false, reason: 'failed', message: 'The device could not open the purchase screen.' });
    }
  });
}

/**
 * Ask WebToNative for a previously purchased lifetime entitlement. On Android,
 * the bridge returns purchases directly. On iOS it returns a receipt, which is
 * routed through the optional verification endpoint when configured.
 */
export async function restoreLifetimeUnlock(): Promise<PurchaseResult> {
  if (demoModeEnabled()) return { ok: true, source: 'demo' };

  const bridge = window.WTN;
  if (!bridge) {
    return { ok: false, reason: 'unavailable', message: 'Open the native app to restore a prior purchase.' };
  }

  if (bridge.getAllPurchases) {
    return new Promise((resolve) => {
      try {
        bridge.getAllPurchases?.({
          callback: (data) => {
            const serialized = JSON.stringify(data?.purchaseData ?? data?.receiptData ?? data ?? '');
            if (data?.isSuccess && serialized.includes(LIFETIME_PRODUCT_ID)) {
              resolve({ ok: true, source: 'webtonative', receiptData: data.purchaseData ?? data.receiptData });
              return;
            }
            resolve({ ok: false, reason: 'failed', message: 'No Paint a Saint lifetime purchase was found for this store account.' });
          },
        });
      } catch {
        resolve({ ok: false, reason: 'failed', message: 'The device could not check prior purchases.' });
      }
    });
  }

  if (bridge.getReceiptData) {
    return new Promise((resolve) => {
      try {
        bridge.getReceiptData?.({
          callback: (data) => {
            if (data?.isSuccess) {
              resolve({ ok: true, source: 'webtonative', receiptData: data.receiptData });
            } else {
              resolve({ ok: false, reason: 'failed', message: data?.message ?? 'The receipt could not be restored.' });
            }
          },
        });
      } catch {
        resolve({ ok: false, reason: 'failed', message: 'The device could not restore the receipt.' });
      }
    });
  }

  return { ok: false, reason: 'unavailable', message: 'This app build does not have purchase restoration enabled yet.' };
}

/**
 * Optional server-side verification. A production deployment should set
 * VITE_ENTITLEMENT_VERIFY_URL and have its server validate the store receipt.
 * Without a configured endpoint, WebToNative’s native success response is used
 * for this prototype so the application remains testable end-to-end.
 */
export async function verifyEntitlement(receiptData: unknown): Promise<boolean> {
  const endpoint = import.meta.env.VITE_ENTITLEMENT_VERIFY_URL?.trim();
  if (!endpoint) return true;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: LIFETIME_PRODUCT_ID, receiptData }),
    });
    if (!response.ok) return false;
    const data = await response.json() as { hasEntitlement?: boolean };
    return data.hasEntitlement === true;
  } catch {
    return false;
  }
}

export function tryNativePrint(html: string): boolean {
  try {
    if (!window.WTN?.printFunction) return false;
    window.WTN.Printing?.setPrintSize?.({ printSize: 'ISO_A4', label: 'Paint a Saint coloring page' });
    window.WTN.printFunction({ type: 'html', url: html });
    return true;
  } catch {
    return false;
  }
}
