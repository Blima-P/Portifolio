/* ---- Page Transitions ---- */
(function() {
  const mainContent = document.querySelector('main');
  if (!mainContent) return;

  // Add transition class to all sections
  const sections = mainContent.querySelectorAll('section');

  // Smooth transition effect on nav link click
  document.querySelectorAll('.nav__link[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const targetSection = document.querySelector(href);
      if (!targetSection) return;

      // Subtle fade effect
      mainContent.classList.add('page-transitioning');
      
      setTimeout(() => {
        mainContent.classList.remove('page-transitioning');
      }, 400);
    });
  });

  // Also apply to footer back-to-top
  const backTop = document.querySelector('.footer__back-top');
  if (backTop) {
    backTop.addEventListener('click', () => {
      mainContent.classList.add('page-transitioning');
      setTimeout(() => mainContent.classList.remove('page-transitioning'), 400);
    });
  }
})();
