/* ---- Header: adiciona fundo ao rolar ---- */
const header = document.getElementById('header');
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);

  // Scroll progress bar
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight > 0) {
    scrollProgress.style.transform = `scaleX(${scrollTop / docHeight})`;
  }
});

/* ---- Menu mobile ---- */
const navToggle = document.getElementById('nav-toggle');
const navList   = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
  navToggle.classList.toggle('open');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav')) {
    navList.classList.remove('open');
    navToggle.classList.remove('open');
  }
});

/* ---- Scroll-spy: destaca o link da seção visível ---- */
const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
const sections = document.querySelectorAll('main section[id]');

function updateScrollSpy() {
  const scrollMid = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollMid >= top && scrollMid < bottom) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav__link[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateScrollSpy);
updateScrollSpy();

/* ---- Intersection Observer: anima elementos ao entrar na viewport ---- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate--visible');
      observer.unobserve(entry.target);
    }
  });
}, { root: null, threshold: 0.15 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

/* ---- Barras de skill: anima ao entrar na viewport ---- */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.level + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card__progress').forEach(bar => skillObserver.observe(bar));

/* ---- Formulário: feedback visual ao enviar ---- */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = (typeof translations !== 'undefined' && translations[currentLang])
      ? translations[currentLang]['contact.form.sending'] : 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = (typeof translations !== 'undefined' && translations[currentLang])
        ? translations[currentLang]['contact.form.sent'] : '✓ Message sent!';
      submitBtn.style.background = '#22c55e';
      contactForm.reset();

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);
    }, 1500);
  });
}

/* ---- Adiciona classes de animação aos elementos das seções ---- */
document.querySelectorAll('.section__title, .section__subtitle').forEach((el, i) => {
  el.classList.add('animate');
  if (i % 2 === 1) el.classList.add('animate--delay-1');
  observer.observe(el);
});

document.querySelectorAll('.project-card').forEach((card, i) => {
  card.classList.add('animate', `animate--delay-${i + 1}`);
  observer.observe(card);
});

document.querySelectorAll('.skill-card').forEach((card, i) => {
  card.classList.add('animate', `animate--delay-${(i % 3) + 1}`);
  observer.observe(card);
});

document.querySelectorAll('.contact__info-item').forEach((item, i) => {
  item.classList.add('animate', 'animate--left', `animate--delay-${i + 1}`);
  observer.observe(item);
});

const form = document.querySelector('.contact__form');
if (form) {
  form.classList.add('animate', 'animate--right');
  observer.observe(form);
}
