import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
import AppContent from './AppContent';

// The prerender script installs jsdom globals so Leaflet can load, which makes
// react-helmet think it's in a browser. Force the server codepath so
// Helmet.renderStatic() works. canUseDOM is a real (untyped) static.
(Helmet as unknown as { canUseDOM: boolean }).canUseDOM = false;

/**
 * Server entry used by scripts/prerender.js to generate static HTML for each
 * route at build time. This renders the REAL components, so the HTML crawlers
 * see matches what users see.
 */
export function render(url: string): { html: string; head: string } {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n');

  return { html, head };
}
