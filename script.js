/* ===================== script.js ===================== */

// Cursor follow
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Typewriter
const words = [
  'SMART AI SYSTEMS',
  'INTERACTIVE WEBSITES',
  'REAL-TIME COMPUTER VISION',
  'FUTURISTIC EXPERIENCES'
];

let i = 0, j = 0, deleting = false;
const span = document.querySelector('.type-text span');

function type() {
  const word = words[i];
  if (!deleting) {
    span.textContent = word.slice(0, j++);
    if (j === word.length) deleting = true;
  } else {
    span.textContent = word.slice(0, j--);
    if (j === 0) { deleting = false; i = (i + 1) % words.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Project open
function openProject(url) {
  window.open(url, '_blank');
}
