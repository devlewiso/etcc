/**
 * Static pre-rendering for E.T Carpet Cleaning.
 *
 * Renders the REAL React components (src/entry-server.tsx) with react-dom/server
 * for every route, so the HTML that crawlers and social scrapers receive is the
 * same content users see. Runs after `vite build`.
 *
 *   dist/index.html  ->  used as the shell template (has hashed asset tags)
 *   dist/<route>.html -> shell + server-rendered markup + per-page <head>
 *   dist/sitemap.xml  -> regenerated from the route list
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build as esbuild } from 'esbuild';
import { JSDOM } from 'jsdom';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');

const ORIGIN = 'https://etsteamcarpetcleaning.com';

// ---------------------------------------------------------------------------
// 1. Minimal browser globals so Leaflet / react-helmet can load under Node
// ---------------------------------------------------------------------------
const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>', {
  url: `${ORIGIN}/`,
  pretendToBeVisual: true,
});
if (!dom.window.matchMedia) {
  dom.window.matchMedia = () => ({
    matches: false,
    media: '',
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false;
    },
  });
}
class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

// Some of these globals are getter-only in modern Node, so define, don't assign.
const define = (key, value) =>
  Object.defineProperty(globalThis, key, { value, configurable: true, writable: true });

define('window', dom.window);
define('document', dom.window.document);
define('navigator', dom.window.navigator);
define('location', dom.window.location);
define('history', dom.window.history);
define('HTMLElement', dom.window.HTMLElement);
define('Element', dom.window.Element);
define('Node', dom.window.Node);
define('getComputedStyle', dom.window.getComputedStyle.bind(dom.window));
define('requestAnimationFrame', (cb) => setTimeout(() => cb(Date.now()), 0));
define('cancelAnimationFrame', (id) => clearTimeout(id));
define('matchMedia', dom.window.matchMedia);
define('IntersectionObserver', NoopObserver);
define('ResizeObserver', NoopObserver);

// ---------------------------------------------------------------------------
// 2. Bundle the server entry to a single CJS file we can require
// ---------------------------------------------------------------------------
const serverEntry = path.join(distDir, '.ssr', 'entry-server.cjs');

await esbuild({
  entryPoints: [path.join(root, 'src/entry-server.tsx')],
  outfile: serverEntry,
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node18',
  jsx: 'automatic',
  logLevel: 'silent',
  define: { 'process.env.NODE_ENV': '"production"' },
  loader: {
    '.css': 'empty',
    '.png': 'empty',
    '.jpg': 'empty',
    '.jpeg': 'empty',
    '.gif': 'empty',
    '.svg': 'empty',
    '.webp': 'empty',
    '.woff': 'empty',
    '.woff2': 'empty',
  },
});

const { render } = await import(`file://${serverEntry}`);

// ---------------------------------------------------------------------------
// 3. Routes to pre-render
// ---------------------------------------------------------------------------
// Slugs parsed straight from the source data modules.
const slugsFrom = (file) =>
  (fs.readFileSync(path.join(root, file), 'utf8').match(/slug:\s*'([a-z-]+)'/g) || []).map((m) =>
    m.replace(/slug:\s*'|'/g, '')
  );
const areaSlugs = slugsFrom('src/data/serviceAreas.ts');
const serviceSlugs = slugsFrom('src/data/services.ts');

const routes = [
  { url: '/', file: 'index.html' },
  { url: '/services', file: 'services.html' },
  { url: '/about', file: 'about.html' },
  { url: '/contact', file: 'contact.html' },
  { url: '/booking', file: 'booking.html' },
  { url: '/faq', file: 'faq.html' },
  { url: '/privacy-policy', file: 'privacy-policy.html' },
  ...serviceSlugs.map((slug) => ({
    url: `/services/${slug}`,
    file: path.join('services', `${slug}.html`),
  })),
  ...areaSlugs.map((slug) => ({
    url: `/service-area/${slug}`,
    file: path.join('service-area', `${slug}.html`),
  })),
];

// ---------------------------------------------------------------------------
// 4. Shell template + head cleanup
// ---------------------------------------------------------------------------
const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found. Run "npm run build:only" first.');
  process.exit(1);
}
const template = fs.readFileSync(templatePath, 'utf8');

/** Remove the tags that react-helmet re-emits per page, so we don't duplicate them. */
function stripSeoTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(
      /<meta\s+name="(title|description|keywords|author|robots|geo\.region|geo\.placename|geo\.position|ICBM)"[^>]*>\s*/gi,
      ''
    )
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '');
}

const shell = stripSeoTags(template);

// ---------------------------------------------------------------------------
// 5. Render every route
// ---------------------------------------------------------------------------
let ok = 0;
for (const route of routes) {
  try {
    const { html, head } = render(route.url);

    let page = shell
      .replace('</head>', `${head}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outPath = path.join(distDir, route.file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page, 'utf8');
    ok++;
    console.log(`  ✓ ${route.url}  ->  ${route.file}`);
  } catch (err) {
    console.error(`  ✗ ${route.url}  ->  ${err && err.stack ? err.stack : err}`);
    process.exitCode = 1;
  }
}

// ---------------------------------------------------------------------------
// 6. Sitemap
// ---------------------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const priority = (u) =>
  u === '/' ? '1.0' : u.startsWith('/service-area/') ? '0.7' : u === '/privacy-policy' ? '0.3' : '0.8';
const changefreq = (u) => (u === '/' || u === '/booking' ? 'weekly' : 'monthly');

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(
      (r) =>
        `  <url>\n    <loc>${ORIGIN}${r.url}</loc>\n    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${changefreq(r.url)}</changefreq>\n    <priority>${priority(r.url)}</priority>\n  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');

// tidy the temp bundle
fs.rmSync(path.join(distDir, '.ssr'), { recursive: true, force: true });

console.log(`\n✅ Pre-rendered ${ok}/${routes.length} routes + sitemap.xml`);
