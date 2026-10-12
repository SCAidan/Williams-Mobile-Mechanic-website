# Williams Mobile Mechanic website

A responsive static website starter for Williams Mobile Mechanic, owned by Aidan Williams.

## Files
- `index.html` — page content and service request form
- `style.css` — responsive design
- `script.js` — mobile navigation, date field, and form interactions
- `assets/williams-mobile-mechanic-logo.png` — provided logo

## Formspree connection
The form is configured to submit to `https://formspree.io/f/mwlvqanl` using a normal HTML POST request. The form fields include customer contact details, vehicle details, service request, location, preferred date/time, notes, and optional attachments.

Before relying on it for leads:
1. Open your Formspree dashboard and confirm the recipient email / notification settings.
2. Publish the site and submit a test request. Check the Formspree submissions dashboard and your email. Complete any email verification Formspree requests.
3. Test a small image upload. Formspree file uploads are plan-dependent; the current docs say uploads are available on Personal, Professional, and Business plans, with up to 10 files per submission and 25 MB per file. Confirm your account plan and current limits.
4. Appointment requests are not confirmed automatically; contact the customer to confirm availability.

The form does not create calendar bookings or a CRM record yet. Never put secret API keys in public JavaScript or in this repository.

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
