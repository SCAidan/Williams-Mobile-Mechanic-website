'use strict';
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
function closeMenu() {
  if (!menuButton || !nav) return;
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation'); menuButton.textContent = '☰';
}
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}
const year = document.getElementById('year-now');
if (year) year.textContent = new Date().getFullYear();
const date = document.getElementById('preferred-date');
if (date) {
  const today = new Date();
  date.min = [today.getFullYear(), String(today.getMonth()+1).padStart(2,'0'), String(today.getDate()).padStart(2,'0')].join('-');
}
const service = document.querySelector('select[name="service"]');
function selectService(value) {
  if (service && [...service.options].some(o => o.value === value)) service.value = value;
}
selectService(new URLSearchParams(location.search).get('service'));
document.querySelectorAll('[data-service]').forEach(a => {
  const value = a.dataset.service;
  a.href = 'index.html?service=' + encodeURIComponent(value) + '#request';
});
const upload = document.getElementById('attachments');
const filesList = document.getElementById('file-list');
if (upload && filesList) upload.addEventListener('change', () => {
  filesList.textContent = [...upload.files].map(f => f.name).join(', ');
  if ([...upload.files].some(f => f.size > 25 * 1024 * 1024)) {
    filesList.textContent += ' — A selected file is over 25 MB. Please reduce it or text photos to Aidan.';
  }
});
// Native HTML POST to the existing Formspree endpoint. A service request is not a booking.
const filters = document.querySelector('.gallery-filters');
if (filters) {
  filters.hidden = false;
  filters.addEventListener('click', e => {
    const button = e.target.closest('[data-filter]'); if (!button) return;
    filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-group]').forEach(g => { g.hidden = filter !== 'all' && filter !== g.dataset.group; });
    const count = [...document.querySelectorAll('.gallery-card')].filter(c => !c.closest('[data-group]').hidden).length;
    document.querySelector('.filter-status').textContent = count + ' photos shown';
  });
}
const dialog = document.querySelector('.lightbox');
if (dialog && typeof dialog.showModal === 'function') {
  let active = 0, opener;
  const links = [...document.querySelectorAll('.photo-link')];
  const visibleLinks = () => links.filter(a => !a.closest('[data-group]').hidden);
  const picture = dialog.querySelector('img'), caption = dialog.querySelector('figcaption');
  function show(index) {
    const list = visibleLinks(); active = (index + list.length) % list.length;
    picture.src = list[active].getAttribute('href');
    picture.alt = list[active].querySelector('img').alt;
    caption.textContent = list[active].dataset.caption + ' (' + (active + 1) + '/' + list.length + ')';
  }
  links.forEach(a => a.addEventListener('click', e => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault(); opener = a; show(visibleLinks().indexOf(a)); dialog.showModal();
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.photo-prev').addEventListener('click', () => show(active - 1));
  dialog.querySelector('.photo-next').addEventListener('click', () => show(active + 1));
  dialog.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(active - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(active + 1); }
  });
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (opener) opener.focus(); });
}
