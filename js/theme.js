'use strict';

// Alternador de tema (claro/escuro) controlado por um botão.

const THEME_KEY = 'theme';
let currentTheme = localStorage.getItem(THEME_KEY) || 'dark';

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute('data-theme', theme);

  // Atualiza as partículas do hero para combinar com o tema selecionado.
  if (typeof updateParticlesColor === 'function') {
    updateParticlesColor(theme === 'light' ? '21, 128, 61' : '74, 222, 128');
  }
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// Aplica e salva o tema.
document.documentElement.setAttribute('data-theme', currentTheme);

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
  setTheme(currentTheme);
});
