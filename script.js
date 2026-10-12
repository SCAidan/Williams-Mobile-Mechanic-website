const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.textContent = '☰';
  }));
}
document.getElementById('year-now').textContent = new Date().getFullYear();

const dateField = document.getElementById('preferred-date');
if (dateField) dateField.min = new Date().toISOString().slice(0, 10);

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.querySelector('select[name="service"]');
    if (select) {
      const desired = link.dataset.service;
      const option = [...select.options].find(o => o.text.toLowerCase() === desired.toLowerCase());
      if (option) select.value = option.value;
    }
  });
});

const fileInput = document.getElementById('attachments');
const fileList = document.getElementById('file-list');
if (fileInput && fileList) {
  fileInput.addEventListener('change', () => {
    const files = [...fileInput.files];
    const maxEach = 25 * 1024 * 1024;
    const tooLarge = files.filter(file => file.size > maxEach);
    if (tooLarge.length) {
      fileList.textContent = 'Files over 25 MB each may not be accepted by many form services. Please choose smaller files.';
    } else if (!files.length) {
      fileList.textContent = '';
    } else {
      fileList.textContent = 'Selected: ' + files.map(file => `${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB)`).join(', ');
    }
  });
}

const form = document.getElementById('service-form');
const message = document.getElementById('form-message');
if (form && message) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    message.className = 'form-message show';
    message.textContent = 'This is the front-end starter form and is not connected to email or a booking system yet. Your details have not been sent. Before publishing, connect a form backend (setup steps are in README.md). For now, call (831) 521-9681 to request service.';
    message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}
