# Williams Mobile Mechanic website

A responsive static website starter for Williams Mobile Mechanic, owned by Aidan Williams.

## Files
- `index.html` — page content and service request form
- `style.css` — responsive design
- `script.js` — mobile navigation, date field, and form interactions
- `assets/williams-mobile-mechanic-logo.png` — provided logo

## Important: connect the request form before publishing
The form currently demonstrates the fields and front-end interaction only. It does **not** send customer information, upload files, email you, or book appointments yet. Do not advertise it as a working booking form until a backend has been connected.

### Simple option: Formspree
1. Create a form at https://formspree.io/ and set the destination to your business email.
2. Copy the form endpoint they provide (it looks like `https://formspree.io/f/xxxxxxxx`).
3. In `index.html`, add `action="YOUR_FORM_ENDPOINT" method="POST" enctype="multipart/form-data"` to the `<form>` tag.
4. In `script.js`, remove the `form.addEventListener('submit', ...)` demo handler so the browser can submit the form to your provider. Follow the provider's current instructions for file uploads; attachment limits and paid-plan requirements may apply.
5. Test the form on the published site using a test email and test attachment. Confirm you receive the message before relying on it for leads.

For more control, a small backend or booking service can be added later. Never put secret API keys in public JavaScript or in this repository.

## Publish with GitHub Pages
1. Download and unzip this project.
2. In your GitHub repository, choose **Add file → Upload files**.
3. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder contents while preserving the folder structure.
4. Open **Settings → Pages** in the repository.
5. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
6. Wait for GitHub Pages to publish and open the URL shown there.

## Customize before launch
- Confirm the service-area wording.
- Add real photos of completed brake, maintenance, audio, and suspension jobs.
- Add a business email and any social links you want to show.
- Connect and test the form backend.
- Consider adding privacy terms if you collect personal details, vehicle locations, or customer-uploaded photos/videos.
