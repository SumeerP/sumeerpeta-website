/**
 * main.js — App initialization: scroll-reveal observer
 *
 * This runs on every page to enable scroll-triggered animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
});

/**
 * IntersectionObserver-based scroll reveal.
 * Any element with class "reveal", "reveal-left", "reveal-right", or "reveal-scale"
 * will animate in when scrolled into view.
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  revealElements.forEach(el => observer.observe(el));
}
