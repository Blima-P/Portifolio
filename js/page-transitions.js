/* ---- Transições de página ---- */
(function () {
  const mainContent = document.querySelector('main');
  if (!mainContent) return;

  // Adiciona um efeito de transição suave ao clicar nos links da navegação.
  document.querySelectorAll('.nav__link[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      const targetSection = document.querySelector(href);
      if (!targetSection) return;

      // Efeito de fade sutil.
      mainContent.classList.add('page-transitioning');

      setTimeout(() => {
        mainContent.classList.remove('page-transitioning');
      }, 400);
    });
  });

  // Também aplica ao botão de voltar ao topo no rodapé.
  const backTop = document.querySelector('.footer__back-top');
  if (backTop) {
    backTop.addEventListener('click', () => {
      mainContent.classList.add('page-transitioning');
      setTimeout(() => mainContent.classList.remove('page-transitioning'), 400);
    });
  }
})();
