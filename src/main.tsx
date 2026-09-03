import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import DevAllSaints from './DevAllSaints';
import './styles.css';

const isDevSaints = typeof window !== 'undefined' && window.location.hash === '#dev-saints';

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const hadController = Boolean(navigator.serviceWorker.controller);

    navigator.serviceWorker
      .register('/service-worker.js', { updateViaCache: 'none' })
      .then((registration) => {
        void registration.update();
      })
      .catch(() => {
        // Offline support is progressive enhancement; the app remains functional if registration fails.
      });

    // After a deploy, take the new worker immediately. Do not touch localStorage
    // (artwork and premium unlock stay on the device).
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (hadController) window.location.reload();
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isDevSaints ? <DevAllSaints /> : <App />}</StrictMode>,
);
