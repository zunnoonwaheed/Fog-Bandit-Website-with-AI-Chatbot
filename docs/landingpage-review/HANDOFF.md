# Jewellery and luxury watch landing page handoff

Implemented 21 October 2026 (Asia/Karachi).

Staging preview: https://fogbandit-bss1vi0kq-faqsaeeds-projects.vercel.app/landingpage/v1

Client-approved usage update: deployment dpl_4YYonXS55ZhBTm962jmppvvcjdyG reported READY. Approved logos and testimonial restored; desktop/mobile real-page screenshots refreshed. The HTTP route/API validation checks below were performed on the preceding deployment.

Deployment dpl_J3weceaxCtyxppkXq5g8fvBCvUkb reported READY. Authenticated CLI fetch returned HTTP 200 for /landingpage/v1 and confirmed updated hero/financing content and removal of the redundant benefits section. An intentionally invalid POST to the deployed /api/leads returned HTTP 400 with the expected validation error; no lead was saved or email sent. Production was not promoted. The Vercel connector itself could not authorize this team/project; the existing CLI account could. Preview access may require signing into the authorized Vercel account.

Local preview: http://127.0.0.1:8080/landingpage/index.html
Campaign path after deployment: /landingpage/v1 (Vercel rewrite).

## Changes

- Requested hero, form, demonstration, open/closed protection, assessment benefits, pricing/financing, getting-started, FAQs and final CTA wording and order.
- Removed redundant benefits section, extra audience strip and two additional video embeds. Existing local demonstration footage is unchanged and plays at 1× speed; it is 2.5 MB and no longer preloads before interaction. Retained a distinct jewellery YouTube video with a click-to-load preview and external fallback.
- Restored the client-approved Shell, HSBC, Gucci, G4S and Harrods logos and R L Austen testimonial after the user confirmed approval for all usage. Quote punctuation and attribution are separated; the attribution remains Bandit UK customer feedback.
- All primary landing-page CTAs target #assessment. Logo targets home. Footer retains business contact/address, products, financing and policies.
- Validated API success is required before confirmation and conversion events. Assessment submissions enforce required fields in the browser and backend without changing homepage quote requirements.
- Finance success has a persistent confirmation, a separate FinanceEnquiry custom event, and no assessment Lead event. It does not imply approved finance.
- Campaign attribution is stored for the browser session, carried on financing links, and submitted in dedicated Sheet columns. New explicit attribution replaces older session attribution. Calendly receives UTM parameters.
- Calendly Schedule requires both the expected origin and the actual widget iframe as message source, and is counted once per page lifecycle.
- Type-specific acknowledgement emails and independent sales/finance notifications are implemented. Email failures do not turn an already saved lead into an error, avoiding unnecessary resubmissions.
- Both forms use the same normalized-email SHA-256 Contact Key in new column AD. This associates actions; each enquiry remains its own row. Existing columns A:AC retain their positions. A conflicting AD1 header causes a logged error rather than overwriting another column.

## Evidence

- Production build passes; existing large bundle and stale Browserslist warnings remain.
- Seven unit tests pass, including six API boundary tests for validation, storage failure, email failure, attribution, finance-specific routing and contact association. Google Sheets and Resend are mocked in these tests.
- Browser checks pass at widths 320, 390, 768 and 1440: validation, failed storage, successful confirmation, Lead/Schedule/FinanceEnquiry guards, refresh behavior, attribution across pages, anchors and no horizontal overflow.
- Browser conversion tests mock the lead API, Meta SDK and Calendly widget. They do not represent real bookings, inbox delivery or Meta Events Manager evidence. No external leads or bookings are created by the test script.
- Additional real-page checks confirm actual local MP4 playback at 1× speed and successful HTTP responses for home, products and policy pages at desktop and mobile widths.
- Browser result details: browser-results.json and visual-results.json.
- Actual-page screenshots: landingpage-real-390.png, landingpage-real-1440.png, financing-real-390.png and financing-real-1440.png. Other screenshots show mocked submission tests. External YouTube availability depends on network access.
- All requested primary CTA links resolve to the assessment anchor. A sticky CTA remains accessible when the form is offscreen.

Reproduce with `npm test`, `npm run build`, `npm run dev`, then `node scripts/landingpage-browser-check.mjs` and `node scripts/landingpage-browser-check.mjs --visual`. The browser script uses Playwright with installed macOS Google Chrome.

## Remaining technical checks and notes

1. Set LEAD_NOTIFICATION_EMAILS and FINANCE_NOTIFICATION_EMAILS in the deployment environment. Both are missing from the locally available configuration. Finance falls back to the sales recipient list if its dedicated list is empty. RESEND_API_KEY is present locally; the sender falls back to security@banditanz.com.au because RESEND_FROM_EMAIL is absent. Confirm the verified sender domain, then test receipt in the intended inboxes. A provider accepting an email is not proof of inbox delivery. There is no durable email retry queue yet.
2. Confirm production/preview Google Sheets permissions and that AD is available for Contact Key. Historical rows do not receive keys automatically. A downstream CRM must upsert by normalized email/contact key; no CRM connection or merge workflow was available to verify. Different email addresses for the same person cannot automatically be matched.
3. Confirm Meta Pixel/dataset 356648447365516 is correct for this campaign. No server-side Meta conversion sender was found in this implementation, so browser/server deduplication is not applicable here. Check any external GTM, CAPI or partner integrations before claiming full account-level deduplication.
4. Complete real desktop/mobile assessment and financing submissions and a genuine Calendly booking. Confirm saved rows, notifications and acknowledgements, the Calendly booking record, and Lead, Schedule and FinanceEnquiry in Meta Events Manager Test Events. Meta screenshots remain outstanding; local simulated events are not substitutes.
5. User confirmed client approval for all supplied content and usage on 21 October 2026. Pricing, financing wording, assessment deliverables, response promise and coverage copy are treated as approved. GST treatment was not specified in the supplied copy, so no GST wording has been invented.
6. Activation, compatibility and product/safety wording are treated as client-approved. The implementation retains the supplied qualified wording and store-specific suitability guidance.
7. User confirmed approval for testimonial/logo usage. Logos and the R L Austen quotation have been restored, with corrected closing punctuation and separate attribution to Bandit UK customer feedback. The logos are labelled brand references, without asserting that each business is a direct ANZ customer.
8. The financing page previously asserted fixed rates, no hidden fees, rapid approval and broad availability. These are now qualified rather than repeated as verified claims. The form is described as an enquiry and explicitly does not indicate approval.
9. Footage usage is treated as client-approved. The local demonstration remains unmodified and plays at 1×. External YouTube live playback still depends on availability.
10. Standalone app TypeScript checking reports pre-existing errors: unsupported className on TestimonialsSection from CaseStudiesTestimonials, and invalid loading attributes on video elements in realdeployments/DemoSection, PerformanceTests and VideoGrid. No new errors from the changed application files appeared in that check. The Vite production build succeeds. These unrelated components have not been changed.
11. Local Vite provides page rendering but does not mount the production /api/leads serverless handler. Browser QA intercepts this endpoint deliberately; use the deployed preview for real integration tests. Privacy/Sales Policy pages return HTTP 200 locally; production link availability still needs confirmation.
12. Scope is staged for review, not production launch. Content usage is client-approved; delivery and tracking verification remain separate technical checks.

## Local handoff folder

Screenshots are stored in the root `handoff/` folder, which is ignored by Git. Future browser checks write screenshots and generated reports there. The screenshots were removed from current Git tracking; earlier commits still contain historical copies.

Use `handoff/landingpage-real-1440.png`, `handoff/landingpage-real-390.png`, `handoff/financing-real-1440.png` and `handoff/financing-real-390.png` for the desktop/mobile handoff. Other images document mocked browser submission tests.

Production storage repair: commit `8d90911` creates required worksheet columns before reading AD. The live sheet was expanded from 29 to 30 columns; a labelled financing test returned HTTP 201 and was verified in the sheet with a Contact Key. Nine automated tests pass.

## Calendly loading improvement

The landing page now warms the Calendly SDK during browser idle time and prepares the widget as a booking CTA approaches the viewport, on pointer/focus/touch intent, or after an assessment submission succeeds. Opening the popup reuses the prepared widget. The popup includes a loading status and an attribution-preserving direct booking link. Failed script downloads can be retried. Preparing or opening the widget does not fire Schedule; completed booking messages retain origin/source validation. External network latency can still affect Calendly.
