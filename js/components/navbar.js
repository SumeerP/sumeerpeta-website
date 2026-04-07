/**
 * navbar.js — Sticky navigation with glassmorphism and mobile hamburger menu
 *
 * Usage: renderNavbar(containerId, currentPage)
 * - containerId: ID of the element to render into
 * - currentPage: filename to highlight (e.g., "index.html", "pages/experience.html")
 */

function renderNavbar(containerId, currentPage) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const nav = siteData.navigation;
  const isInnerPage = currentPage.includes('pages/');
  const basePath = isInnerPage ? '../' : '';

  // Build desktop links
  const desktopLinks = nav.map(item => {
    const href = basePath + item.href;
    const isActive = currentPage === item.href;
    return `<a href="${href}" class="navbar__link${isActive ? ' active' : ''}" id="nav-${item.label.toLowerCase().replace(/\s+/g, '-')}">${item.label}</a>`;
  }).join('');

  // Build mobile links
  const mobileLinks = nav.map(item => {
    const href = basePath + item.href;
    const isActive = currentPage === item.href;
    return `<a href="${href}" class="navbar__mobile-link${isActive ? ' active' : ''}">${item.label}</a>`;
  }).join('');

  const logoHref = basePath + 'index.html';

  container.innerHTML = `
    <nav class="navbar" id="main-navbar" role="navigation" aria-label="Main navigation">
      <div class="navbar__inner">
        <a href="${logoHref}" class="navbar__logo" aria-label="Home">
          <span class="navbar__logo-accent">&lt;</span>SP<span class="navbar__logo-accent">/&gt;</span>
        </a>
        <div class="navbar__links" id="desktop-nav-links">
          ${desktopLinks}
        </div>
        <button class="navbar__toggle" id="navbar-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar__mobile-menu" id="navbar-mobile-menu" role="menu">
        ${mobileLinks}
      </div>
      <div class="navbar__overlay" id="navbar-overlay"></div>
    </nav>
  `;

  // ── Scroll behavior ──
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // ── Mobile menu toggle ──
  const toggle = document.getElementById('navbar-toggle');
  const mobileMenu = document.getElementById('navbar-mobile-menu');
  const overlay = document.getElementById('navbar-overlay');

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    toggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
    toggle.setAttribute('aria-expanded', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  toggle.addEventListener('click', toggleMobileMenu);
  overlay.addEventListener('click', toggleMobileMenu);

  // Close on link click
  mobileMenu.querySelectorAll('.navbar__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      toggleMobileMenu();
    }
  });
}
