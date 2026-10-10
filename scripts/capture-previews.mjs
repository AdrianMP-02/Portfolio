// Genera las capturas de las webs en producción (campo `preview` de src/data/projects.json).
// Uso: `npx playwright install chromium` la primera vez, luego `npm run previews`
// o bien `CHROMIUM_PATH=/ruta/chromium npm run previews`.
import { chromium } from 'playwright';
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const projects = JSON.parse(await readFile('src/data/projects.json', 'utf8'));

function hideCookieBanners() {
  const sel = [
    '#cookie-law-info-bar',
    '.cc-window',
    '#onetrust-banner-sdk',
    '[id*="cookie" i]',
    '[class*="cookie" i]',
  ].join(',');
  const isFloating = (el) => {
    const pos = getComputedStyle(el).position;
    return pos === 'fixed' || pos === 'sticky';
  };
  document.querySelectorAll('#cookie-law-info-bar, .cc-window, #onetrust-banner-sdk').forEach((el) => el.remove());
  document.querySelectorAll(sel).forEach((el) => {
    if (isFloating(el)) el.remove();
  });
  document.querySelectorAll('body *').forEach((el) => {
    if (isFloating(el) && /cookie/i.test(el.textContent || '')) el.remove();
  });
}

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
let failed = false;

for (const project of projects) {
  if (!project.url || !project.preview) continue;
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    locale: 'es-ES',
  });
  try {
    const page = await context.newPage();
    await page.goto(project.url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1500);
    await page.evaluate(hideCookieBanners);
    const out = 'public' + project.preview;
    await mkdir(path.dirname(out), { recursive: true });
    await page.screenshot({
      path: out,
      type: 'jpeg',
      quality: 80,
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
    console.log(`✓ ${project.id} → ${out}`);
  } catch (err) {
    failed = true;
    console.error(`✗ ${project.id}: ${err instanceof Error ? err.message.split('\n')[0] : err}`);
  } finally {
    await context.close();
  }
}

await browser.close();
process.exit(failed ? 1 : 0);
