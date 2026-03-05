/* ---- Testimonials Carousel ---- */
(function() {
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('test-prev');
  const nextBtn = document.getElementById('test-next');
  const dotsContainer = document.getElementById('test-dots');
  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;
  let current = 0;
  let autoplayInterval;

  // Create dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('span');
    dot.classList.add('testimonials__dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.testimonials__dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });

  function startAutoplay() {
    autoplayInterval = setInterval(() => goTo(current + 1), 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  startAutoplay();
})();
