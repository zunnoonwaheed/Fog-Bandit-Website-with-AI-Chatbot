const CALENDLY_URL = 'https://calendly.com/fogbanditleads/30min';

const trackMetaEvent = (eventName, params = {}, standard = false) => {
  if (typeof window.fbq === 'function') window.fbq(standard ? 'track' : 'trackCustom', eventName, params);
};

const popup = document.getElementById('assessment-popup');
let calendlyWidgetLoaded;
let calendlyWidgetInitialised = false;

let previousFocus;
const closePopup = () => {
  popup?.classList.remove('open');
  popup?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  previousFocus?.focus();
};

const getCalendlyUrl = () => {
  const url = new URL(CALENDLY_URL);
  Object.entries(window.fogAttribution || {}).forEach(([key, value]) => { if (key.startsWith('utm_')) url.searchParams.set(key, value); });
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
    const fail = () => { script.remove(); calendlyWidgetLoaded = undefined; reject(new Error('Calendly unavailable')); };
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => window.Calendly?.initInlineWidget ? resolve(window.Calendly) : fail();
    script.onerror = fail;
    document.head.appendChild(script);
  });
  return calendlyWidgetLoaded;
};

let calendlyPreparation;
const prepareCalendly = () => {
  if (!popup) return Promise.resolve();
  if (!popup.innerHTML) {
    popup.innerHTML = `<div class="calendly-modal" role="dialog" aria-modal="true" aria-labelledby="calendly-title"><button class="popup-close" type="button" aria-label="Close booking calendar">×</button><div class="calendly-modal-head"><p class="kicker">Prefer to book a call?</p><h2 id="calendly-title">Choose a time that works for you.</h2><p class="calendar-status" role="status">Loading available times…</p><a class="calendar-direct" target="_blank" rel="noopener">Open Calendly directly ↗</a></div><div class="calendly-frame"></div></div>`;
    popup.querySelector('.popup-close')?.addEventListener('click', closePopup);
    popup.querySelector('.calendar-direct').href = getCalendlyUrl();
  }
  if (calendlyPreparation) return calendlyPreparation;
  const frame = popup.querySelector('.calendly-frame');
  calendlyPreparation = loadCalendlyWidget().then((Calendly) => {
    if (!calendlyWidgetInitialised) {
      Calendly.initInlineWidget({ url: getCalendlyUrl(), parentElement: frame });
      calendlyWidgetInitialised = true;
      frame.querySelector('iframe')?.addEventListener('load', () => {
        popup.querySelector('.calendar-status').hidden = true;
      }, { once: true });
    }
  }).catch(() => {
    calendlyPreparation = undefined;
    popup.querySelector('.calendar-status').textContent = 'Calendar is unavailable. Use the direct link to book.';
  });
  return calendlyPreparation;
};

const openCalendlyPopup = () => {
  if (!popup) return;
  prepareCalendly();
  previousFocus = document.activeElement;
  popup.classList.add('open');
  popup.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  popup.querySelector('.popup-close')?.focus();
};

const bookingButtons = document.querySelectorAll('[data-calendly]');
bookingButtons.forEach((button) => {
  button.addEventListener('click', openCalendlyPopup);
  ['pointerenter', 'focus', 'touchstart'].forEach(name => button.addEventListener(name, prepareCalendly, { once: true, passive: true }));
});
// Warm up the SDK without blocking the initial page; prepare the calendar when
// a booking button approaches the viewport, before the visitor clicks it.
const warmCalendly = () => loadCalendlyWidget().catch(() => {});
if ('requestIdleCallback' in window) window.requestIdleCallback(warmCalendly, { timeout: 2500 });
else window.setTimeout(warmCalendly, 1500);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { prepareCalendly(); observer.unobserve(entry.target); }
    });
  }, { rootMargin: '300px' });
  bookingButtons.forEach(button => observer.observe(button));
}
popup?.addEventListener('click', (event) => { if (event.target === popup) closePopup(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closePopup(); });

const form = document.getElementById('assessment-form');
const error = document.getElementById('form-error');
const formPanel = document.getElementById('lead-form-panel');
const successPanel = document.getElementById('lead-success');

const getAttribution = () => {
  const params = new URLSearchParams(window.fogAttribution || window.location.search);
  const value = (name) => params.get(name) || '';
  return {
    utmSource: value('utm_source'),
    utmMedium: value('utm_medium'),
    utmCampaign: value('utm_campaign'),
    utmContent: value('utm_content'),
    utmTerm: value('utm_term'),
    utmId: value('utm_id'),
    fbclid: value('fbclid'),
    gclid: value('gclid'),
    msclkid: value('msclkid'),
    ttclid: value('ttclid'),
    liFatId: value('li_fat_id'),
    twclid: value('twclid'),
    dclid: value('dclid'),
    wbraid: value('wbraid'),
    gbraid: value('gbraid'),
  };
};

const validationMessages = {
  name: 'Please enter your full name.',
  company: 'Please enter your business name.',
  email: 'Please enter a valid business email address.',
  phone: 'Please enter your phone number.',
  location: 'Please enter your store location or postcode.',
  businessType: 'Please select your business type.',
};

const clearFieldErrors = () => {
  form?.querySelectorAll('.field-error').forEach((message) => message.remove());
  form?.querySelectorAll('[required]').forEach((field) => {
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  });
};

const showFieldError = (field, message) => {
  const id = `${field.name}-error`;
  const errorMessage = document.createElement('span');
  errorMessage.className = 'field-error';
  errorMessage.id = id;
  errorMessage.setAttribute('role', 'alert');
  errorMessage.textContent = message;
  field.setAttribute('aria-invalid', 'true');
  field.setAttribute('aria-describedby', id);
  field.closest('label')?.append(errorMessage);
};

const validateAssessmentForm = () => {
  if (!form) return false;
  const invalidField = [...form.querySelectorAll('[required]')].find((field) => !field.validity.valid || !field.value.trim());
  clearFieldErrors();
  if (!invalidField) return true;
  const message = invalidField.name === 'email' && invalidField.validity.typeMismatch
    ? validationMessages.email
    : validationMessages[invalidField.name] || 'Please complete this required field.';
  showFieldError(invalidField, message);
  if (error) {
    error.textContent = message;
    error.hidden = false;
  }
  invalidField.focus();
  return false;
};

form?.querySelectorAll('[required]').forEach((field) => field.addEventListener('input', () => {
  clearFieldErrors();
  if (error) error.hidden = true;
}));
form?.querySelectorAll('select[required]').forEach((field) => field.addEventListener('change', () => {
  clearFieldErrors();
  if (error) error.hidden = true;
}));

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (form.dataset.submitting === 'true' || !validateAssessmentForm()) return;
  form.dataset.submitting = 'true';
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
    sourcePage: `${window.location.pathname}${window.location.search}`,
    ...getAttribution(),
  };
  if (error) error.hidden = true;
  if (button) { button.disabled = true; button.textContent = 'Sending…'; }
  try {
    const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      throw new Error(result.error || 'Unable to submit your request. Please try again.');
    }
    const result = await response.json();
    if (result.ok !== true) throw new Error('Unable to confirm your request. Please try again.');
    trackMetaEvent('Lead', { content_name: 'Free store security assessment', page_name: 'Jewellery and luxury watch landing page', page_path: '/landingpage/v1', form_location: 'hero' }, true);
    formPanel.hidden = true;
    successPanel.hidden = false;
    prepareCalendly();
  } catch (submissionError) {
    if (error) { error.textContent = submissionError instanceof Error ? submissionError.message : 'Unable to submit your request. Please try again.'; error.hidden = false; }
  } finally {
    form.dataset.submitting = 'false';
    if (button) { button.disabled = false; button.textContent = 'Request My Free Security Assessment'; }
  }
});

let calendlyBookingTracked = false;
window.addEventListener('message', (event) => {
  const calendlyFrame = popup?.querySelector('.calendly-frame iframe');
  const isCalendlyOrigin = event.origin === 'https://calendly.com';
  const isCalendlyFrame = Boolean(calendlyFrame && event.source === calendlyFrame.contentWindow);
  if ((!isCalendlyOrigin || !isCalendlyFrame) || event.data?.event !== 'calendly.event_scheduled' || calendlyBookingTracked) return;
  calendlyBookingTracked = true;
  trackMetaEvent('Schedule', { content_name: 'Fog Bandit meeting', page_name: 'Jewellery and luxury watch landing page', page_path: '/landingpage/v1' }, true);
});

const sticky = document.getElementById('sticky-cta');
const assessment = document.getElementById('assessment');
if (sticky && assessment && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => sticky.classList.toggle('visible', !entry.isIntersecting), { threshold: 0.15 }).observe(assessment);
}

// Load the third-party player only when the visitor chooses to watch.
document.querySelectorAll('[data-youtube]').forEach((button) => {
  button.querySelector('img')?.addEventListener('error', (event) => {
    if (!event.target.src.endsWith('/assets/jewellery-store-poster.png')) event.target.src = '/assets/jewellery-store-poster.png';
  });
  button.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(button.dataset.youtube)}?rel=0&autoplay=1`;
    frame.title = 'Fog Bandit jewellery environment footage';
    frame.allow = 'autoplay; fullscreen; picture-in-picture';
    frame.allowFullscreen = true;
    button.replaceWith(frame);
    frame.focus();
  });
});
