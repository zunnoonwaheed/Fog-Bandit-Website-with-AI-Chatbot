const CALENDLY_URL = 'https://calendly.com/fogbanditleads/30min';

const trackMetaEvent = (eventName, params = {}, standard = false) => {
  if (typeof window.fbq === 'function') window.fbq(standard ? 'track' : 'trackCustom', eventName, params);
};

const popup = document.getElementById('assessment-popup');
let calendlyWidgetLoaded;
let calendlyWidgetInitialised = false;

const closePopup = () => {
  popup?.classList.remove('open');
  popup?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

const getCalendlyUrl = () => {
  const url = new URL(CALENDLY_URL);
  url.searchParams.set('hide_gdpr_banner', '1');
  url.searchParams.set('background_color', 'ffffff');
  url.searchParams.set('text_color', '111111');
  url.searchParams.set('primary_color', 'd41414');
  return url.toString();
};

const loadCalendlyWidget = () => {
  if (window.Calendly?.initInlineWidget) return Promise.resolve(window.Calendly);
  if (calendlyWidgetLoaded) return calendlyWidgetLoaded;
  calendlyWidgetLoaded = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => window.Calendly?.initInlineWidget ? resolve(window.Calendly) : reject(new Error('Calendly unavailable'));
    script.onerror = () => reject(new Error('Calendly unavailable'));
    document.head.appendChild(script);
  });
  return calendlyWidgetLoaded;
};

const openCalendlyPopup = () => {
  if (!popup) return;
  if (!popup.innerHTML) {
    popup.innerHTML = `<div class="calendly-modal" role="dialog" aria-modal="true" aria-labelledby="calendly-title"><button class="popup-close" type="button" aria-label="Close booking calendar">×</button><div class="calendly-modal-head"><p class="kicker">Prefer to book a call?</p><h2 id="calendly-title">Choose a time that works for you.</h2></div><div class="calendly-frame"></div></div>`;
    popup.querySelector('.popup-close')?.addEventListener('click', closePopup);
  }
  popup.classList.add('open');
  popup.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  const frame = popup.querySelector('.calendly-frame');
  if (frame && !calendlyWidgetInitialised) {
    loadCalendlyWidget().then((Calendly) => {
      if (!calendlyWidgetInitialised) {
        Calendly.initInlineWidget({ url: getCalendlyUrl(), parentElement: frame });
        calendlyWidgetInitialised = true;
      }
    }).catch(() => {
      frame.innerHTML = '<p class="calendly-load-error">Unable to load the booking calendar. <a href="https://calendly.com/fogbanditleads/30min" target="_blank" rel="noopener">Open Calendly</a></p>';
    });
  }
};

document.querySelectorAll('[data-calendly]').forEach((button) => button.addEventListener('click', openCalendlyPopup));
popup?.addEventListener('click', (event) => { if (event.target === popup) closePopup(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closePopup(); });

const form = document.getElementById('assessment-form');
const error = document.getElementById('form-error');
const formPanel = document.getElementById('lead-form-panel');
const successPanel = document.getElementById('lead-success');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const button = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  const businessType = String(formData.get('businessType') || '');
  const payload = {
    type: 'Quote Request',
    name: String(formData.get('name') || '').trim(),
    company: String(formData.get('company') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    phone: String(formData.get('phone') || '').trim(),
    location: String(formData.get('location') || '').trim(),
    areaToSecure: `Business type: ${businessType}`,
    message: String(formData.get('message') || '').trim(),
    website: String(formData.get('website') || ''),
    sourcePage: `${window.location.pathname}${window.location.search}`,
  };
  if (error) error.hidden = true;
  if (button) { button.disabled = true; button.textContent = 'Sending…'; }
  try {
    const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      throw new Error(result.error || 'Unable to submit your request. Please try again.');
    }
    trackMetaEvent('Lead', { content_name: 'Free store security assessment', page_name: 'Jewellery and luxury watch landing page', page_path: '/landingpage/v1', form_location: 'hero' }, true);
    formPanel.hidden = true;
    successPanel.hidden = false;
  } catch (submissionError) {
    if (error) { error.textContent = submissionError instanceof Error ? submissionError.message : 'Unable to submit your request. Please try again.'; error.hidden = false; }
  } finally {
    if (button) { button.disabled = false; button.textContent = 'Request My Free Assessment'; }
  }
});

let calendlyBookingTracked = false;
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://calendly.com' || event.data?.event !== 'calendly.event_scheduled' || calendlyBookingTracked) return;
  calendlyBookingTracked = true;
  trackMetaEvent('Schedule', { content_name: 'Fog Bandit meeting', page_name: 'Jewellery and luxury watch landing page', page_path: '/landingpage/v1' }, true);
});

const sticky = document.getElementById('sticky-cta');
const assessment = document.getElementById('assessment');
if (sticky && assessment && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => sticky.classList.toggle('visible', !entry.isIntersecting), { threshold: 0.15 }).observe(assessment);
}
