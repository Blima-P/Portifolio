//particulas do inicio

const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

const CONFIG = {
  count: 45,
  maxDistance: 120,
  speed: 0.3,
  radius: 1.5,
  color: '74, 222, 128',
};

const maxDistSq = CONFIG.maxDistance * CONFIG.maxDistance;
let particles = [];

function resizeCanvas() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function createParticle() {
  return {
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    vx: (Math.random() * 2 - 1) * CONFIG.speed,
    vy: (Math.random() * 2 - 1) * CONFIG.speed,
    radius: CONFIG.radius,
  };
}

function initParticles() {
  particles = [];
  for (let i = 0; i < CONFIG.count; i++) {
    particles.push(createParticle());
  }
}

function updateParticles() {
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${CONFIG.color}, 0.7)`;
    ctx.fill();
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distSq = dx * dx + dy * dy;

      if (distSq < maxDistSq) {
        const opacity = 1 - Math.sqrt(distSq) / CONFIG.maxDistance;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${CONFIG.color}, ${opacity * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

let animationId = null;
let isHeroVisible = true;

function animate() {
  if (!isHeroVisible) { animationId = null; return; }
  updateParticles();
  drawParticles();
  animationId = requestAnimationFrame(animate);
}

function startAnimation() {
  if (!animationId) animationId = requestAnimationFrame(animate);
}

function stopAnimation() {
  if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
}

resizeCanvas();
initParticles();
startAnimation();

// Pause when hero is off-screen
const heroSection = document.getElementById('home');
if (heroSection) {
  const heroObserver = new IntersectionObserver((entries) => {
    isHeroVisible = entries[0].isIntersecting;
    if (isHeroVisible) startAnimation(); else stopAnimation();
  }, { threshold: 0 });
  heroObserver.observe(heroSection);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});

function updateParticlesColor(rgb) {
  CONFIG.color = rgb;
}
