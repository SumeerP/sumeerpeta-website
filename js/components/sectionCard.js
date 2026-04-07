/**
 * sectionCard.js — Reusable content section cards for the home page
 *
 * Usage: renderSectionCards(containerId)
 */

function renderSectionCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { sections } = siteData;

  const cards = sections.map((section, index) => {
    // Optional bullet list
    const list = section.items
      ? `<ul class="section-card__list">
          ${section.items.map(item => `<li class="section-card__list-item">${item}</li>`).join('')}
         </ul>`
      : '';

    // Optional link
    const link = section.link
      ? `<a href="${section.link}" class="section-card__link">
          ${section.linkText || 'Learn more'}
          <span class="section-card__link-arrow">→</span>
         </a>`
      : '';

    return `
      <article class="section-card reveal" style="transition-delay: ${index * 0.08}s" id="section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">
        <div class="section-card__icon">${section.icon}</div>
        <div class="section-card__content">
          <h3 class="section-card__title">
            ${section.link ? `<a href="${section.link}">${section.title}</a>` : section.title}
          </h3>
          <p class="section-card__description">${section.description}</p>
          ${list}
          ${link}
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = `
    <section class="section bg-radial-glow" id="sections-overview">
      <div class="container">
        <h2 class="gradient-text" style="text-align:center; margin-bottom: var(--space-12);">Overview</h2>
      </div>
      <div class="sections-grid stagger">
        ${cards}
      </div>
    </section>
  `;
}
