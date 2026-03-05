// Swither de tem, claro/escuro ( o usuario pode escolher a partir de um botão) //

const THEME_KEY = 'theme';
let currentTheme = localStorage.getItem(THEME_KEY) || 'dark';

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute('data-theme', theme);

  // aqui ele atualiza as particulas do inicio de acordo com o tema
  if (typeof updateParticlesColor === 'function') {
    updateParticlesColor(theme === 'light' ? '21, 128, 61' : '74, 222, 128');
  }
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// aplica e salva o tema 
document.documentElement.setAttribute('data-theme', currentTheme);

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
  setTheme(currentTheme);
});
