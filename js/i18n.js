/* ---- i18n — Language switcher ---- */

const translations = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.iam': 'I am',
    'hero.description': 'Software Engineering student at UCB and IT intern at CAESB. Fullstack developer passionate about automation and building real-impact solutions.',
    'hero.btn.projects': 'View Projects',
    'hero.btn.contact': 'Get in touch',
    'hero.btn.cv': 'Download CV',

    // About
    'about.title': 'About <span>Me</span>',
    'about.subtitle': 'Who am I',
    'about.description': 'Software Engineering student at Universidade Católica de Brasília, with hands-on experience in developing and maintaining Fullstack systems. Currently an IT intern at CAESB, working on improving applications with Java, JavaScript, React, XHTML, and Azure services. I constantly seek to expand my stack and explore different areas of technology to build a broad view of software development.',
    'about.location.title': 'Location',
    'about.location.desc': 'Brasília, DF',
    'about.internship.title': 'Internship',
    'about.internship.desc': 'CAESB — IT',
    'about.degree.title': 'Degree',
    'about.degree.desc': 'Software Eng. — UCB',
    'about.availability.title': 'Availability',
    'about.availability.desc': 'Open to opportunities',
    'about.btn.contact': 'Get in touch',

    // Projects
    'projects.title': 'My <span>Projects</span>',
    'projects.subtitle': 'What I\'ve built',
    'project1.title': 'CAESB Detector',
    'project1.description': 'Detects sponsored sites (ads) on Google when someone searches for CAESB. Logs suspicious URLs and triggers automation via PowerShell (RPA).',
    'project2.title': 'Personal Portfolio',
    'project2.description': 'Responsive landing page with dark mode, Canvas animations, typing effect, and scroll-spy. Built from scratch with HTML, CSS, and vanilla JavaScript.',

    // Skills
    'skills.title': 'My <span>Skills</span>',
    'skills.subtitle': 'Technologies I use',

    // Contact
    'contact.title': 'Get in <span>Touch</span>',
    'contact.subtitle': 'Let\'s talk',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.sent': '✓ Message sent!',

    // Footer
    'footer.text': 'Built by <span>Pedro Braga</span> with HTML, CSS, and vanilla JavaScript.',

    // Meta
    'meta.description': 'Pedro Braga\'s Portfolio — Fullstack Developer, intern at CAESB, Software Engineering student at UCB.',
  },

  'pt-br': {
    // Nav
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.skills': 'Skills',
    'nav.contact': 'Contato',

    // Hero
    'hero.greeting': 'Olá, me chamo',
    'hero.iam': 'Eu sou',
    'hero.description': 'Estudante de Engenharia de Software na UCB e estagiário de TI na CAESB. Desenvolvedor Fullstack apaixonado por automação e por construir soluções de impacto real.',
    'hero.btn.projects': 'Ver Projetos',
    'hero.btn.contact': 'Entrar em contato',
    'hero.btn.cv': 'Baixar Currículo',

    // About
    'about.title': 'Sobre <span>Mim</span>',
    'about.subtitle': 'Quem sou eu',
    'about.description': 'Estudante de Engenharia de Software na Universidade Católica de Brasília, com experiência prática em desenvolvimento e manutenção de sistemas Fullstack. Atualmente estagiário de TI na CAESB, atuando na melhoria de aplicações com Java, JavaScript, React, XHTML e serviços na Azure. Busco constantemente expandir minha stack e explorar diferentes áreas da tecnologia para construir uma visão ampla do desenvolvimento de software.',
    'about.location.title': 'Localização',
    'about.location.desc': 'Brasília, DF',
    'about.internship.title': 'Estágio',
    'about.internship.desc': 'CAESB — TI',
    'about.degree.title': 'Graduação',
    'about.degree.desc': 'Eng. de Software — UCB',
    'about.availability.title': 'Disponibilidade',
    'about.availability.desc': 'Aberto a oportunidades',
    'about.btn.contact': 'Entre em contato',

    // Projects
    'projects.title': 'Meus <span>Projetos</span>',
    'projects.subtitle': 'O que já construí',
    'project1.title': 'Detector CAESB',
    'project1.description': 'Detecta sites patrocinados (anúncios) no Google quando alguém pesquisa sobre a CAESB. Registra URLs suspeitas e aciona automação via PowerShell (RPA).',
    'project2.title': 'Portfolio Pessoal',
    'project2.description': 'Landing page responsiva com dark mode, animações em Canvas, efeito typing e scroll-spy. Desenvolvido do zero com HTML, CSS e JavaScript puro.',

    // Skills
    'skills.title': 'Minhas <span>Skills</span>',
    'skills.subtitle': 'Tecnologias que uso',

    // Contact
    'contact.title': 'Entre em <span>Contato</span>',
    'contact.subtitle': 'Vamos conversar',
    'contact.form.name': 'Nome',
    'contact.form.name.placeholder': 'Seu nome',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'seu@email.com',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Sua mensagem...',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.sent': '✓ Mensagem enviada!',

    // Footer
    'footer.text': 'Desenvolvido por <span>Pedro Braga</span> com HTML, CSS e JavaScript puro.',

    // Meta
    'meta.description': 'Portfolio de Pedro Braga — Desenvolvedor Fullstack, estagiário na CAESB, estudante de Engenharia de Software na UCB.',
  },
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const dict = translations[lang];
  if (!dict) return;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!dict[key]) return;

    // Check for special attribute targets
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, dict[key]);
    } else {
      el.innerHTML = dict[key];
    }
  });

  // Update <html lang>
  document.documentElement.lang = lang === 'pt-br' ? 'pt-BR' : 'en';

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict['meta.description']) {
    metaDesc.setAttribute('content', dict['meta.description']);
  }

  // Update toggle button label (shows the OTHER language)
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'en' ? 'PT-BR' : 'EN';
  }

  // Update typing effect if available
  if (typeof updateTypingLanguage === 'function') {
    updateTypingLanguage(lang);
  }
}

// Toggle between languages
function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'pt-br' : 'en');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleLanguage);
  }
  setLanguage(currentLang);
});
