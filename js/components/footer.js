/**
 * footer.js — Site footer with social links and copyright
 *
 * Usage: renderFooter(containerId, isInnerPage)
 */

function renderFooter(containerId, isInnerPage = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { personalInfo } = siteData;
  const year = new Date().getFullYear();

  // SVG icons for social platforms
  const socialIcons = {
    linkedin: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  };

  // Build social links
  const socialLinksHtml = Object.entries(personalInfo.socialLinks)
    .filter(([, url]) => url)
    .map(([platform, url]) => {
      const icon = socialIcons[platform] || platform.charAt(0).toUpperCase();
      return `<a href="${url}" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="${platform}" id="social-${platform}">${typeof icon === 'string' && icon.startsWith('<') ? icon : `<span>${icon}</span>`}</a>`;
    }).join('');

  container.innerHTML = `
    <footer class="footer" id="site-footer" role="contentinfo">
      <div class="footer__inner">
        <h3 class="footer__heading">Connect with Me</h3>
        <div class="footer__social">
          ${socialLinksHtml}
        </div>
        <div class="footer__divider"></div>
        <div class="footer__bottom">
          <p class="footer__copyright">© ${year} ${personalInfo.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
