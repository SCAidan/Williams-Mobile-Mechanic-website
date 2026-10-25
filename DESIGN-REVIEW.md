# Service-first homepage

Implements the selected second concept with service selection first, a short three-step process, then the local owner/project section. Other service, gallery and information pages retain their existing layouts.

- Native browser motion: section reveals, responsive button/card feedback and FAQ expansion. System reduced-motion settings and the footer pause control are supported. Content is visible without animation.
- Service choices select the existing request form; links retain a query-string fallback without JavaScript.
- Existing Formspree destination and native multipart submission remain in place. A valid submit changes the button label while leaving the page; it does not claim success or confirm an appointment. No live test request was sent.
- Bootstrap Icons 1.11.3 are vendored with their MIT license in assets/icons. The original logo and real project image are reused.
- Homepage canonical and sitemap use the current hosted URL. Update them and robots.txt when a custom domain is connected.
- JavaScript syntax and whitespace checks pass. Browser evidence and design review are in design-qa.md and docs/qa/.

Review this separately from the Web Works repository. Merge the pull request to update the existing hosted website; revert the commit to restore the previous homepage.
