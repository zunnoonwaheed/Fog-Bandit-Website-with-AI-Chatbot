(() => {
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id', 'fbclid', 'gclid', 'msclkid', 'ttclid', 'li_fat_id', 'twclid', 'dclid', 'wbraid', 'gbraid'];
  const params = new URLSearchParams(location.search);
  let saved = {};
  try { saved = JSON.parse(sessionStorage.getItem('fog-attribution') || '{}'); } catch { /* Storage can be unavailable. */ }
  const incoming = Object.fromEntries(keys.filter(key => params.has(key)).map(key => [key, params.get(key).slice(0, 2000)]));
  const attribution = Object.keys(incoming).length ? incoming : Object.fromEntries(Object.entries(saved && typeof saved === 'object' ? saved : {}).filter(([key, value]) => keys.includes(key) && typeof value === 'string'));
  try { sessionStorage.setItem('fog-attribution', JSON.stringify(attribution)); } catch { /* Continue without persistence. */ }
  window.fogAttribution = attribution;
  const decorate = () => document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, location.href);
    if (!['https:', 'http:'].includes(url.protocol) || url.pathname.replace(/\/$/, '') !== '/financing' || ![location.origin, 'https://www.banditanz.com.au'].includes(url.origin)) return;
    Object.entries(attribution).forEach(([key, value]) => { if (keys.includes(key) && typeof value === 'string') url.searchParams.set(key, value); });
    link.href = url.toString();
  });
  document.addEventListener('DOMContentLoaded', decorate);
  new MutationObserver(decorate).observe(document.documentElement, { childList: true, subtree: true });
})();
