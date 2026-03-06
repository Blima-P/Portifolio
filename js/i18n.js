/* ---- i18n — Language switcher ---- */

const translations = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
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
    'counter.projects': 'Projects',
    'counter.technologies': 'Technologies',
    'counter.years': 'Years Coding',

    // Timeline
    'nav.experience': 'Experience',
    'timeline.title': 'My <span>Journey</span>',
    'timeline.subtitle': 'Where I\'ve been',
    'timeline.item1.date': '2023 — Present',
    'timeline.item1.title': 'IT Intern — CAESB',
    'timeline.item1.desc': 'Developing and maintaining Fullstack applications with Java, JavaScript, React, XHTML, and Azure services.',
    'timeline.item2.date': '2022 — Present',
    'timeline.item2.title': 'Software Engineering — UCB',
    'timeline.item2.desc': 'Studying Software Engineering at Universidade Católica de Brasília, building a solid foundation in algorithms, architecture, and best practices.',
    'timeline.item3.date': '2023',
    'timeline.item3.title': 'CAESB Detector — RPA Project',
    'timeline.item3.desc': 'Built an automated tool to detect sponsored/fraudulent CAESB ads on Google using Python, PowerShell, and RPA techniques.',

    // Projects
    'projects.title': 'My <span>Projects</span>',
    'projects.subtitle': 'What I\'ve built',
    'project1.title': 'CAESB Detector',
    'project1.description': 'Detects sponsored sites (ads) on Google when someone searches for CAESB. Logs suspicious URLs and triggers automation via PowerShell (RPA).',
    'project2.title': 'Personal Portfolio',
    'project2.description': 'Responsive landing page with dark mode, Canvas animations, typing effect, and scroll-spy. Built from scratch with HTML, CSS, and vanilla JavaScript.',
    'filter.all': 'All',
    'filter.web': 'Web',
    'filter.python': 'Python',
    'filter.rpa': 'RPA',

    // Certifications
    'certs.title': 'Certifications &amp; <span>Badges</span>',
    'certs.subtitle': 'Continuous learning',
    'cert1.name': 'Java Programming',
    'cert1.issuer': 'Udemy',
    'cert2.name': 'Azure Fundamentals',
    'cert2.issuer': 'Microsoft',
    'cert3.name': 'TypeScript/JavaScript',
    'cert3.issuer': 'Udemy',
    'cert4.name': 'React Development',
    'cert4.issuer': 'Udemy',

    // GitHub
    'github.title': 'GitHub <span>Activity</span>',
    'github.subtitle': 'Open source contributions',
    'github.viewprofile': 'View Full Profile',
    'github.error': 'Could not load repositories. Visit my GitHub profile.',

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
    'contact.form.error': '✗ Error, try again',

    // Testimonials
    'test.title': 'What People <span>Say</span>',
    'test.subtitle': 'Feedback & recommendations',
    'test1.text': '"Pedro is a dedicated developer who always delivers quality work. His passion for learning new technologies is impressive."',
    'test1.name': 'Prof. Carlos Silva',
    'test1.role': 'UCB Professor',
    'test2.text': '"Great team player with strong problem-solving skills. Pedro adapted quickly to our tech stack and contributed meaningfully from day one."',
    'test2.name': 'Ana Martins',
    'test2.role': 'Tech Lead at CAESB',
    'test3.text': '"Working with Pedro on the CAESB Detector project was a great experience. He brings creativity and technical skill to every challenge."',
    'test3.name': 'Lucas Ferreira',
    'test3.role': 'Fellow Developer',

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
    'nav.certifications': 'Certificações',
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
    'counter.projects': 'Projetos',
    'counter.technologies': 'Tecnologias',
    'counter.years': 'Anos Programando',

    // Timeline
    'nav.experience': 'Experiência',
    'timeline.title': 'Minha <span>Jornada</span>',
    'timeline.subtitle': 'Por onde passei',
    'timeline.item1.date': '2023 — Presente',
    'timeline.item1.title': 'Estagiário de TI — CAESB',
    'timeline.item1.desc': 'Desenvolvimento e manutenção de aplicações Fullstack com Java, JavaScript, React, XHTML e serviços Azure.',
    'timeline.item2.date': '2022 — Presente',
    'timeline.item2.title': 'Engenharia de Software — UCB',
    'timeline.item2.desc': 'Cursando Engenharia de Software na Universidade Católica de Brasília, construindo uma base sólida em algoritmos, arquitetura e boas práticas.',
    'timeline.item3.date': '2023',
    'timeline.item3.title': 'Detector CAESB — Projeto RPA',
    'timeline.item3.desc': 'Ferramenta automatizada para detectar anúncios patrocinados/fraudulentos da CAESB no Google usando Python, PowerShell e técnicas de RPA.',

    // Projects
    'projects.title': 'Meus <span>Projetos</span>',
    'projects.subtitle': 'O que já construí',
    'project1.title': 'Detector CAESB',
    'project1.description': 'Detecta sites patrocinados (anúncios) no Google quando alguém pesquisa sobre a CAESB. Registra URLs suspeitas e aciona automação via PowerShell (RPA).',
    'project2.title': 'Portfolio Pessoal',
    'project2.description': 'Landing page responsiva com dark mode, animações em Canvas, efeito typing e scroll-spy. Desenvolvido do zero com HTML, CSS e JavaScript puro.',
    'filter.all': 'Todos',
    'filter.web': 'Web',
    'filter.python': 'Python',
    'filter.rpa': 'RPA',

    // Certificações
    'certs.title': 'Certificações &amp; <span>Badges</span>',
    'certs.subtitle': 'Aprendizado contínuo',
    'cert1.name': 'Programação Java',
    'cert1.issuer': 'Udemy',
    'cert2.name': 'Azure Fundamentals',
    'cert2.issuer': 'Microsoft',
    'cert3.name': 'TypeScript e JavaScript',
    'cert3.issuer': 'Udemy',
    'cert4.name': 'Desenvolvimento React',
    'cert4.issuer': 'Udemy',

    // GitHub
    'github.title': 'Atividade no <span>GitHub</span>',
    'github.subtitle': 'Contribuições open source',
    'github.viewprofile': 'Ver Perfil Completo',
    'github.error': 'Não foi possível carregar repositórios. Visite meu perfil no GitHub.',

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
    'contact.form.error': '✗ Erro, tente novamente',

    // Depoimentos
    'test.title': 'O Que Dizem <span>Sobre Mim</span>',
    'test.subtitle': 'Feedback e recomendações',
    'test1.text': '"Pedro é um desenvolvedor dedicado que sempre entrega trabalho de qualidade. Sua paixão por aprender novas tecnologias é impressionante."',
    'test1.name': 'Prof. Carlos Silva',
    'test1.role': 'Professor na UCB',
    'test2.text': '"Ótimo trabalho em equipe e habilidades sólidas de resolução de problemas. Pedro se adaptou rapidamente à nossa stack e contribuiu significativamente desde o primeiro dia."',
    'test2.name': 'Ana Martins',
    'test2.role': 'Tech Lead na CAESB',
    'test3.text': '"Trabalhar com Pedro no projeto Detector CAESB foi uma ótima experiência. Ele traz criatividade e habilidade técnica para cada desafio."',
    'test3.name': 'Lucas Ferreira',
    'test3.role': 'Desenvolvedor Colega',

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
