const typingTexts = [
  'Desenvolvedor Fullstack',
  'Estudante de Eng. de Software',
  'Estagiário na CAESB',
  'Apaixonado por tecnologia 🚀',
];

const TYPING_SPEED         = 80;
const ERASING_SPEED        = 40;
const PAUSE_AFTER_TYPING   = 2000;
const PAUSE_BEFORE_NEXT    = 400;

let textIndex = 0;
let charIndex = 0;

const typingEl = document.getElementById('typing-text');

function typeText() {
  if (charIndex < typingTexts[textIndex].length) {
    typingEl.innerHTML += typingTexts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, TYPING_SPEED);
  } else {
    setTimeout(eraseText, PAUSE_AFTER_TYPING);
  }
}

function eraseText() {
  if (typingEl.innerHTML.length > 0) {
    typingEl.innerHTML = typingEl.innerHTML.slice(0, -1);
    setTimeout(eraseText, ERASING_SPEED);
  } else {
    textIndex = (textIndex + 1) % typingTexts.length;
    charIndex = 0;
    setTimeout(typeText, PAUSE_BEFORE_NEXT);
  }
}

setTimeout(typeText, 500);
