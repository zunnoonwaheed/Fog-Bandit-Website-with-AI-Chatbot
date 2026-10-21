import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const root = 'http://127.0.0.1:8080';
const out = 'handoff';
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--no-proxy-server'] });
if (process.argv.includes('--visual')) {
 try {
  const context = await browser.newContext();
  // Keep QA page views out of the campaign dataset.
  await context.route('**/connect.facebook.net/**', route => route.fulfill({ contentType: 'application/javascript', body: '' }));
  await context.route('**/www.facebook.com/**', route => route.abort());
  const page = await context.newPage();
  const checks = [];
  for (const width of [390, 1440]) {
   await page.setViewportSize({ width, height: 1000 });
   await page.goto(`${root}/landingpage/index.html`, { waitUntil: 'domcontentloaded' });
   await page.locator('#customer-proof').scrollIntoViewIfNeeded();
   await page.waitForTimeout(2000);
   await page.locator('video').evaluate(async video => { video.muted = true; await video.play(); });
   await page.waitForFunction(() => document.querySelector('video').currentTime > 0);
   const video = await page.locator('video').evaluate(video => ({ readyState: video.readyState, playbackRate: video.playbackRate, currentTime: video.currentTime }));
   await page.locator('video').evaluate(video => { video.pause(); video.currentTime = 0; });
   const links = [];
   for (const href of [...new Set(await page.locator('a[href^="/"]').evaluateAll(links => links.map(a => a.getAttribute('href'))))]) {
    const response = await context.request.get(root + href);
    assert.equal(response.ok(), true, href);
    links.push({ href, status: response.status() });
   }
   await page.evaluate(() => window.scrollTo({top:0,behavior:"instant"}));
   await page.waitForTimeout(300);
   await page.screenshot({ path: `${out}/landingpage-real-${width}.png`, fullPage: true });
   await page.goto(`${root}/financing`, { waitUntil: 'domcontentloaded' });
   await page.screenshot({ path: `${out}/financing-real-${width}.png`, fullPage: true });
   checks.push({ width, video, links });
  }
  await writeFile(`${out}/visual-results.json`, JSON.stringify({ note: 'Actual local pages and product video; Meta network blocked to avoid campaign pollution. External YouTube availability depends on the network.', checks }, null, 2));
  console.log(JSON.stringify(checks));
 } finally { await browser.close(); }
 process.exit(0);
}
const reports = [];
try {
for (const width of [320, 390, 768, 1440]) {
 const context = await browser.newContext({ viewport: { width, height: 1000 } });
 await context.route('**/connect.facebook.net/**', route => route.fulfill({ contentType: 'application/javascript', body: '' }));
 await context.route('**/www.facebook.com/**', route => route.abort());
 await context.route('**/www.youtube-nocookie.com/**', route => route.fulfill({ contentType: 'text/html', body: '<p>External product video</p>' }));
 await context.route('**/assets.calendly.com/**', route => route.fulfill({ contentType: 'application/javascript', body: `window.Calendly={initInlineWidget:({parentElement})=>{const f=document.createElement('iframe');f.src='https://calendly.com/test-widget';parentElement.append(f)}};` }));
 await context.route('https://calendly.com/test-widget', route => route.fulfill({ contentType: 'text/html', body: '<p>Booking widget test</p>' }));
 let success = false, requests = [];
 await context.route('**/api/leads', async route => {
  requests.push(route.request().postDataJSON());
  await route.fulfill({ status: success ? 201 : 500, contentType: 'application/json', body: JSON.stringify(success ? { ok: true } : { error: 'Test storage failure' }) });
 });
 const page = await context.newPage();
 const errors = [];
 page.on('pageerror', error => errors.push(error.message));
 await page.goto(`${root}/landingpage/index.html?utm_source=meta&utm_campaign=browser-qa`, { waitUntil: 'domcontentloaded' });
 await page.evaluate(() => { window.testEvents = window.fbq.queue.map(args => Array.from(args)); window.fbq = (...args) => window.testEvents.push(args); });
 const count = name => page.evaluate(name => window.testEvents.filter(e => e[1] === name).length, name);
 assert.equal(await count('PageView'), 1);
 assert.equal(await page.locator('#lead-success').isVisible(), false);
 assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow ${width}`);
 const ids = await page.locator('main > section').evaluateAll(sections => sections.map(s => s.id || s.className));
 assert.deepEqual(ids.slice(1, 8), ['demonstration', 'protection', 'customer-proof', 'assessment-details', 'pricing', 'getting-started', 'faq']);
 assert.equal(await page.locator('a.btn[href="#assessment"]').count() >= 7, true);
 for (const href of await page.locator('a[href^="#"]').evaluateAll(links => links.map(a => a.getAttribute('href')))) assert.equal(await page.locator(href).count(), 1);
 await page.locator('.hero-copy a.btn').click();
 assert.equal(await count('Lead'), 0);
 await page.locator('#assessment-form button').click();
 assert.equal(requests.length, 0);
 await page.locator('[name=name]').fill('QA Visitor');
 await page.locator('[name=company]').fill('QA Store');
 await page.locator('[name=email]').fill('qa@example.com');
 await page.locator('[name=phone]').fill('0400000000');
 await page.locator('[name=location]').fill('6000');
 await page.locator('[name=businessType]').selectOption('Jewellery Retailer');
 await page.locator('#assessment-form button').click();
 await page.waitForFunction(() => document.querySelector('#form-error').textContent.includes('Test storage failure'));
 assert.equal(await count('Lead'), 0);
 assert.equal(await page.locator('#lead-success').isVisible(), false);
 success = true;
 await page.locator('#assessment-form button').click();
 await page.locator('#lead-success').waitFor({ state: 'visible' });
 assert.equal(await count('Lead'), 1);
 assert.equal(requests.at(-1).utmCampaign, 'browser-qa');
 await page.screenshot({ path: `${out}/assessment-success-${width}.png` });
 await page.locator('#lead-success [data-calendly]').click();
 await page.locator('.calendly-frame iframe').waitFor();
 assert.equal(await count('Schedule'), 0);
 await page.evaluate(() => window.dispatchEvent(new MessageEvent('message', { origin: 'https://evil.example', data: { event: 'calendly.event_scheduled' } })));
 assert.equal(await count('Schedule'), 0);
 const frame = page.frames().find(f => f.url().includes('calendly.com/test-widget'));
 await frame.evaluate(() => { parent.postMessage({ event: 'calendly.event_scheduled' }, '*'); parent.postMessage({ event: 'calendly.event_scheduled' }, '*'); });
 await page.waitForFunction(() => window.testEvents.some(e => e[1] === 'Schedule'));
 assert.equal(await count('Schedule'), 1);
 await page.keyboard.press('Escape');
 await page.reload({ waitUntil: 'domcontentloaded' });
 assert.equal(await page.locator('#lead-success').isVisible(), false);
 assert.equal(await page.evaluate(() => window.fbq.queue.filter(e => e[1] === 'Lead').length), 0);
 await page.screenshot({ path: `${out}/landingpage-${width}.png`, fullPage: true });
 const financeHref = await page.locator('#pricing a.secondary-link').getAttribute('href');
 assert.equal(new URL(financeHref).searchParams.get('utm_campaign'), 'browser-qa');
 await page.goto(`${root}/financing`, { waitUntil: 'networkidle' });
 await page.evaluate(() => { window.testEvents = []; window.fbq = (...args) => window.testEvents.push(args); });
 assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Finance overflow ${width}`);
 await page.locator('[name=firstName]').fill('QA');
 await page.locator('[name=lastName]').fill('Visitor');
 await page.locator('[name=company]').fill('QA Store');
 await page.locator('[name=email]').fill('qa@example.com');
 success = false;
 await page.locator('#financing-form button[type=submit]').click();
 await page.getByText('Test storage failure').waitFor();
 assert.equal(await count('FinanceEnquiry'), 0);
 success = true;
 await page.locator('#financing-form button[type=submit]').click();
 await page.waitForFunction(() => window.testEvents.some(e => e[1] === 'FinanceEnquiry'));
 assert.equal(await count('FinanceEnquiry'), 1);
 assert.equal(await count('Lead'), 0);
 assert.equal(requests.at(-1).utmCampaign, 'browser-qa');
 assert.equal(requests.at(-1).type, 'Finance Application');
 await page.screenshot({ path: `${out}/financing-${width}.png`, fullPage: true });
 assert.deepEqual(errors, []);
 reports.push({ width, overflow: false, assessmentValidation: 'passed', failedStorageDoesNotConvert: 'passed', assessmentSuccess: 'passed', refreshDoesNotConvert: 'passed', scheduleOriginSourceAndDedup: 'passed', financeSuccessAndFailure: 'passed', attributionAcrossPages: 'passed' });
 await context.close();
}
await writeFile(`${out}/browser-results.json`, JSON.stringify({ note: 'Local browser tests with mocked API, Meta library, YouTube frame and Calendly widget. No real leads, emails or bookings created.', reports }, null, 2));
console.log(JSON.stringify(reports, null, 2));
} finally { await browser.close(); }
