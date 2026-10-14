# Williams Mobile Mechanic — refined website

A build-free, multi-page website based on the existing Williams site and the page structure of The Cleaning Machine. The original phone number and Formspree endpoint are preserved.

## Open and review
Open index.html in a browser after extracting the ZIP. All pages work without a build step. Gallery links open images directly if JavaScript is disabled; JavaScript adds filtering and a keyboard-accessible enlarged viewer.

## Replace the website in GitHub
1. Unzip the download on your computer.
2. Open SCAidan/Williams-Mobile-Mechanic-website on GitHub.
3. Choose Add file → Upload files.
4. Drag the CONTENTS of the unzipped folder into GitHub, including the whole assets folder. Do not upload the ZIP itself or an extra outer folder.
5. Commit changes. Existing matching filenames are replaced; new pages and assets are added.
6. Wait for the deployment, then refresh the website. If needed, hard-refresh to clear cached CSS.

Required at the repository root: index.html, services.html, about.html, custom-installs.html, gallery.html, privacy.html, style.css, script.js, and the assets/ directory.

The assets folder must remain a real folder. Do not name files with a colon, such as assets:filename.png. Old unused root-level logo files can remain; the updated pages use assets/logo.png.

## Form and booking
The request form posts to the existing https://formspree.io/f/mwlvqanl endpoint. Appointments are requests and require Aidan's confirmation. This website does not create calendar bookings or CRM records.

Verify the recipient in Formspree, submit a real test after publishing, and confirm delivery. Uploads depend on the Formspree account plan. A direct text option is included so customers can send photos when uploads are unavailable. A live submission has not been sent during development.

## What changed
- Separate Home, Services, About, Custom Installs, Gallery, and Privacy pages.
- Prominent branding and a real completed air suspension photo on the homepage.
- All 11 supplied photos optimized for web delivery, with orientation corrected and screenshot borders removed from photos 1 and 2.
- Photos 1, 2, and 5 grouped as one build; photo 2 identified as completed.
- Photos 3 and 4 grouped as audio; photo 6 described as a separate concealed air suspension installation.
- Remaining photos described as work in progress without claiming specific unverified repairs or finished results.
- Gallery filters and enlarged viewing with next/previous arrows and Escape to close.
- Mobile navigation, sticky call/text/request actions, service selection links, local date minimum, and privacy information.
- Distinct page titles and descriptions, descriptive alt text, and basic business structured data.

## Verification
Local file paths and anchor targets were checked across all six pages. All image files were decoded. JavaScript syntax was checked with Node. Browser rendering and live form delivery were not tested in this environment.

## Future updates
Replace images in assets/ and update the captions in gallery.html as better project photos become available. Do not add testimonials, credentials, or claims unless verified. Once a final custom domain is chosen, add absolute canonical URLs, a sitemap, and absolute social sharing image URLs using that domain.
