/**
 * hero.js — Full-screen hero section with animated gradient background
 *
 * Usage: renderHero(containerId)
 */

function renderHero(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { personalInfo, heroContent } = siteData;

  // Build CTA buttons
  const ctas = heroContent.ctas.map(cta => {
    const btnClass = cta.style === 'primary' ? 'btn btn--primary' : 'btn btn--outline';
    const target = cta.href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${cta.href}" class="${btnClass}"${target}>${cta.icon ? cta.icon + ' ' : ''}${cta.label}</a>`;
  }).join('');

  // Profile image or placeholder
  const profileImage = personalInfo.profileImage
    ? `<img src="${personalInfo.profileImage}" alt="${personalInfo.fullName}" class="hero__image" loading="eager">`
    : `<div class="hero__image-placeholder">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="35" r="20" fill="rgba(230,126,34,0.3)" stroke="rgba(230,126,34,0.5)" stroke-width="2"/>
          <path d="M15 85 C15 65 35 55 50 55 C65 55 85 65 85 85" fill="rgba(230,126,34,0.2)" stroke="rgba(230,126,34,0.4)" stroke-width="2"/>
        </svg>
       </div>`;

  // Generate floating particles
  const particles = Array.from({ length: 12 }, (_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;
    const size = 2 + Math.random() * 4;
    const opacity = 0.1 + Math.random() * 0.3;
    return `<div class="hero__particle" style="left:${left}%;top:${top}%;width:${size}px;height:${size}px;opacity:${opacity};animation-delay:${delay}s"></div>`;
  }).join('');

  container.innerHTML = `
    <section class="hero" id="hero-section">
      <div class="hero__bg"></div>
      <div class="hero__bg-grid"></div>
      <div class="hero__particles">${particles}</div>
      <div class="hero__content">
        <div class="hero__text">
          <p class="hero__greeting">${heroContent.greeting}</p>
          <h1 class="hero__name">
            <span class="gradient-text">${personalInfo.firstName}</span> ${personalInfo.lastName}
          </h1>
          <p class="hero__title">${personalInfo.title}</p>
          <p class="hero__description">${heroContent.description}</p>
          <div class="hero__actions">
            ${ctas}
          </div>
        </div>
        <div class="hero__image-wrapper">
          <div class="hero__image-frame">
            ${profileImage}
          </div>
        </div>
      </div>
      <div class="hero__scroll-indicator">
        <span>Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>
  `;
}
