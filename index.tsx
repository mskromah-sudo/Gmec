import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Website from './Website';

import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

// Global handlers to surface runtime errors in production for easier debugging
window.addEventListener('error', (ev) => {
  // eslint-disable-next-line no-console
  console.error('Global error', ev.error || ev.message || ev);
  const el = document.getElementById('root');
  if (el) el.innerHTML = `<div style="padding:16px;"><h1>Unexpected error</h1><pre>${String((ev && (ev as any).error && (ev as any).error.message) || (ev as any).message || ev)}</pre></div>`;
});
window.addEventListener('unhandledrejection', (ev) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled rejection', ev);
  const el = document.getElementById('root');
  if (el) el.innerHTML = `<div style="padding:16px;"><h1>Unhandled Promise Rejection</h1><pre>${String((ev as any).reason?.message || (ev as any).reason || ev)}</pre></div>`;
});

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <Website />
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
