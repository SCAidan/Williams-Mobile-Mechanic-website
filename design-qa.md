# Mechanic service-first homepage QA

final result: passed

## Target and evidence
- Source visual: `/workspace/scratch/6a59b22d40fe/generated_images/exec-fec1e2b6-fc34-49b8-b671-f6bd2de44711.png`, the second displayed template selected by the user.
- Browser evidence: `docs/qa/homepage-desktop.jpg` and `docs/qa/homepage-mobile.jpg`.
- Combined source/implementation evidence: `docs/qa/design-comparison.jpg`; focused navigation, heading and service controls: `docs/qa/hero-comparison.jpg`.
- Desktop: screenshot raster 1348 × 926; observed CSS content 1348 × 936, with browser scrollbar/chrome excluded from capture. Source 1435 × 1096 scaled proportionally to 1348 px width; compare the visible top 926 px. Comparison canvas has 10 px of unused bottom padding. No implementation density scaling was applied.
- Mobile: 390 × 844 iframe, content viewport 375 px plus scrollbar; scrollWidth and clientWidth both 375 px. This is a live responsive browser check, not a physical phone test.
- State: homepage, intro animations settled, menu closed and FAQs collapsed.

## Comparison and required fidelity surfaces
- Fonts/typography: bold sans centered question, readable supporting text, clear service headings and full-width red calls to action. System Arial matches the source hierarchy without external font requests. Minor font metric differences are P3.
- Spacing/layout: service-first centered hero, three equal service choices, wide three-step band, then real project/owner section; mobile stacks the same content. No text/photo split hero remains.
- Colors/tokens: white, black, restrained red, pale gray process band, visible focus and button states.
- Assets: actual supplied logo and project photograph are reused. The logo’s original black background is intentional rather than replacing it with generated branding. Licensed Bootstrap Icons 1.11.3 replace the mock’s custom decorative icons; their subjects and positions support the same labels. Actual photo crop differs from the generated mock’s reinterpreted photo.
- Copy/content: conservative service descriptions use existing business scope. Reworded process avoids promising a remote diagnosis, guaranteed fix or confirmed booking. No invented reviews, prices, or performance results.

## Findings and iteration history
- Initial P1: decorative icons failed to render in the preview because the local static server omitted the SVG MIME type. Added image/svg+xml and restarted the preview; the final capture and naturalWidth checks confirm all three icons load.
- Initial P2: project image crop favored the lower compressors over the upper installation context. Adjusted object-position and recaptured the actual photograph.
- Final combined and focused comparisons show no actionable P0/P1/P2 findings. Actual branding, standard library icons and factual copy differences are intentional as above.

## Interaction verification
- “Request this service: Diagnostics” selects the existing Diagnostics form option and updates its status, without losing entered values to a page reload.
- FAQ expands; pause control changes aria-pressed and label. Reduced-motion media query disables reveals and transitions; no continuous animation is added.
- Mobile menu opens and closes, with matching aria-expanded state. Persistent call/text/request controls remain visible.
- Existing native multipart Formspree action, consent and honeypot remain intact. No live submission was sent. Valid submit shows an opening-submission state, not a fabricated success.
- JavaScript syntax and git diff whitespace checks pass. No application console errors; unrelated chrome-extension metadata errors were present.

## Follow-up polish and limits
- P3: consider a supplied transparent logo version later. Current artwork remains unchanged.
- Verify touch behavior and submission using an authorized real test after merge. Delivery and Formspree upload-plan behavior were not retested here.
- No measured Google ranking or field performance claims. Canonical and sitemap use the current hosted URL and must be updated when a domain is connected.
