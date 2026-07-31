// Ambient floating hearts — purely decorative, respects reduced-motion
(function () {
  const field = document.getElementById('hearts-field');
  if (!field) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const count = prefersReduced ? 0 : 16;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart-particle';
    heart.textContent = Math.random() > 0.5 ? '♥' : '🐰';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
    heart.style.animationDuration = 10 + Math.random() * 10 + 's';
    heart.style.animationDelay = Math.random() * 10 + 's';
    heart.style.fontSize = 0.8 + Math.random() * 1 + 'rem';
    field.appendChild(heart);
  }
})();
