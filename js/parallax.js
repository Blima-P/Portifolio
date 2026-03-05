/* ---- Parallax Effects ---- */
(function() {
  // Skip on mobile/touch
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
  if (window.innerWidth < 768) return;

  // Add parallax decorative shapes
  const shapes = [
    { className: 'parallax-shape parallax-shape--1', speed: 0.03 },
    { className: 'parallax-shape parallax-shape--2', speed: -0.02 },
    { className: 'parallax-shape parallax-shape--3', speed: 0.04 },
  ];

  const parallaxContainer = document.createElement('div');
  parallaxContainer.classList.add('parallax-container');
  parallaxContainer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(parallaxContainer);

  const elements = shapes.map(s => {
    const el = document.createElement('div');
    el.className = s.className;
    parallaxContainer.appendChild(el);
    return { el, speed: s.speed };
  });

  // Parallax on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        elements.forEach(({ el, speed }) => {
          el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
})();
