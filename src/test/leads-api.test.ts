// @vitest-environment node
import { generateKeyPairSync } from 'node:crypto';
import { afterEach, describe, expect, it, vi } from 'vitest';
import handler from '../../api/leads';

const key = generateKeyPairSync('rsa', { modulusLength: 2048 }).privateKey.export({ type: 'pkcs8', format: 'pem' });
const lead = { type: 'Quote Request', name: 'QA User', email: 'qa@example.com', company: 'QA Store', phone: '0400000000', location: '6000', areaToSecure: 'Business type: Jewellery Retailer', sourcePage: '/landingpage/v1', utmCampaign: 'qa' };
async function request(body: object) {
  const res = { setHeader: vi.fn(), status: vi.fn().mockReturnThis(), json: vi.fn() };
  await handler({ method: 'POST', body } as never, res as never);
  return res;
}
function setup(failSave = false, failEmail = false, initialColumns = 30) {
  let columns = initialColumns;
  const expansions: object[] = [];
  vi.stubEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL', 'service@example.com');
  vi.stubEnv('GOOGLE_PRIVATE_KEY', String(key));
  vi.stubEnv('GOOGLE_SHEET_ID', 'qa-sheet');
  vi.stubEnv('RESEND_API_KEY', 'qa-key');
  vi.stubEnv('LEAD_NOTIFICATION_EMAILS', 'sales@example.com');
  vi.stubEnv('FINANCE_NOTIFICATION_EMAILS', 'finance@example.com');
  const rows: unknown[][] = [], emails: { to: string[]; text: string }[] = [];
  vi.stubGlobal('fetch', vi.fn(async (url: string, options?: RequestInit) => {
    if (url.includes('oauth2')) return Response.json({ access_token: 'qa-token' });
    if (url.includes('?fields=sheets.properties')) return Response.json({ sheets: [{ properties: { sheetId: 42, title: 'Contact Form - Website', gridProperties: { columnCount: columns } } }] });
    if (url.includes(':batchUpdate')) {
      const expansion = JSON.parse(String(options?.body)).requests[0].appendDimension;
      expansions.push(expansion);
      columns += expansion.length;
      return Response.json({});
    }
    if (url.includes('AD1') && columns < 30) return Response.json({ error: { message: 'Range exceeds grid limits' } }, { status: 400 });
    if (url.includes(':append')) {
      rows.push(JSON.parse(String(options?.body)).values[0]);
      return Response.json({}, { status: failSave ? 500 : 200 });
    }
    if (url.includes('resend.com')) {
      emails.push(JSON.parse(String(options?.body)));
      return Response.json({}, { status: failEmail ? 500 : 200 });
    }
    return Response.json({ values: [] });
  }));
  return { rows, emails, expansions };
}
afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); vi.restoreAllMocks(); });
describe('enquiry storage and delivery boundaries', () => {
  it('expands the existing 29-column worksheet before checking AD and saving finance enquiries', async () => {
    const { rows, expansions } = setup(false, false, 29);
    const res = await request({ ...lead, type: 'Finance Application' });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(expansions).toEqual([{ sheetId: 42, dimension: 'COLUMNS', length: 1 }]);
    expect(rows[0]).toHaveLength(30);
    expect(rows[0][1]).toBe('Finance Application');
  });
  it('leaves existing column dimensions unchanged when AD already exists', async () => {
    const { expansions } = setup();
    const res = await request(lead);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(expansions).toEqual([]);
  });
  it('rejects missing required assessment fields before storage', async () => {
    setup();
    const res = await request({ ...lead, phone: '' });
    expect(res.status).toHaveBeenCalledWith(400);
    expect(fetch).not.toHaveBeenCalled();
  });
  it('saves attribution, acknowledges visitor and notifies sales', async () => {
    const { rows, emails } = setup();
    const res = await request(lead);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(rows[0][16]).toBe('qa');
    expect(emails.map(mail => mail.to[0])).toEqual(['qa@example.com', 'sales@example.com']);
    expect(emails[1].text).toContain('Sheet tab: Contact Form - Website');
  });
  it('links both enquiry types with one contact key and uses finance-specific delivery', async () => {
    const { rows, emails } = setup();
    await request(lead);
    await request({ ...lead, type: 'Finance Application' });
    expect(rows[0][29]).toBe(rows[1][29]);
    expect(emails[3].to).toEqual(['finance@example.com']);
    expect(emails[2].text).toContain('not finance approval');
  });
  it('does not acknowledge or report success when storage fails', async () => {
    const { emails } = setup(true);
    const res = await request(lead);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(emails).toHaveLength(0);
  });
  it('keeps a saved enquiry successful when email delivery fails', async () => {
    setup(false, true);
    const res = await request(lead);
    expect(res.status).toHaveBeenCalledWith(201);
  });
  it('preserves existing homepage quote form requirements', async () => {
    setup();
    const res = await request({ type: 'Quote Request', name: 'QA', email: 'qa@example.com', sourcePage: '/' });
    expect(res.status).toHaveBeenCalledWith(201);
  });
});
