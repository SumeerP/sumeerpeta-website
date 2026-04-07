/**
 * pageHeader.js — Inner page headers with title, breadcrumb, and gradient accent
 *
 * Usage: renderPageHeader(containerId, { title, subtitle })
 */

function renderPageHeader(containerId, { title, subtitle }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <header class="page-header" id="page-header">
      <div class="page-header__inner">
        <nav class="page-header__breadcrumb" aria-label="Breadcrumb">
          <a href="../index.html">Home</a>
          <span class="page-header__breadcrumb-separator">›</span>
          <span>${title}</span>
        </nav>
        <h1 class="page-header__title">
          <span class="gradient-text">${title}</span>
        </h1>
        ${subtitle ? `<p class="page-header__subtitle">${subtitle}</p>` : ''}
        <div class="page-header__divider"></div>
      </div>
    </header>
  `;
}
