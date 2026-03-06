/* ---- contato com o email ---- */

const EMAILJS_PUBLIC_KEY = 'IAgf0HfwDEVjTp5BT';
const EMAILJS_SERVICE_ID = 'service_jikuv3s';
const EMAILJS_TEMPLATE_ID = 'template_bbcnaw6';

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
    const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : {};

    submitBtn.textContent = t['contact.form.sending'] || 'Sending...';
    submitBtn.disabled = true;

    try {
      if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'IAgf0HfwDEVjTp5BT') {
        await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
      } else {
        // aqui é caso o emailJS nao esteja configurado
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      submitBtn.textContent = t['contact.form.sent'] || '✓ Message sent!';
      submitBtn.style.background = '#4ADE80';
      form.reset();

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);

    } catch (error) {
      submitBtn.textContent = t['contact.form.error'] || '✗ Error, try again';
      submitBtn.style.background = '#ef4444';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);
    }
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
