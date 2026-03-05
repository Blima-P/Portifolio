/* ---- Custom Cursor Glow ---- */
(function() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
  if (window.innerWidth < 768) return;

  const glow = document.createElement('div');
  glow.classList.add('cursor-glow');
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;
  let rafId = null;
  let idleTimer = null;

  function animate() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;
    glow.style.transform = `translate(${glowX - 15}px, ${glowY - 15}px)`;

    if (Math.abs(mouseX - glowX) < 0.5 && Math.abs(mouseY - glowY) < 0.5) {
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(animate);
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!rafId) rafId = requestAnimationFrame(animate);
  });

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .btn, .project-card, .cert-card, .skill-card, .github-card')) {
      glow.classList.add('cursor-glow--hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .btn, .project-card, .cert-card, .skill-card, .github-card')) {
      glow.classList.remove('cursor-glow--hover');
    }
  });
})();
