# Development Log — Sumeer Peta Portfolio

> This document is maintained for LLM-assisted development. It tracks architecture decisions, component APIs, data schemas, and the state of each commit.

---

## Architecture Overview

**Type**: Static multi-page website (no build step, no framework)
**Hosting**: Cloudflare Pages
**Stack**: HTML5 + CSS3 (custom properties) + Vanilla JavaScript (ES6 modules as globals)

### Data Flow
```
siteData.js (data) → Component JS (render functions) → HTML (mount points) → CSS (styling)
```

All content lives in `js/data/siteData.js`. Components are pure render functions that read from `siteData` and inject HTML into DOM containers. Pages include the relevant scripts and call render functions on load.

---

## Component API Reference

### `renderNavbar(containerId, currentPage)`
- **File**: `js/components/navbar.js`
- **containerId**: string — ID of the DOM element to render into
- **currentPage**: string — path like `"index.html"` or `"pages/experience.html"` for active link highlighting
- **Features**: Sticky, glassmorphism backdrop, scroll-aware opacity, mobile hamburger with slide-in drawer

### `renderHero(containerId)`
- **File**: `js/components/hero.js`
- **containerId**: string
- **Features**: Full-viewport, animated gradient bg, floating particles, profile image frame with glow, CTA buttons

### `renderSectionCards(containerId)`
- **File**: `js/components/sectionCard.js`
- **containerId**: string
- **Data source**: `siteData.sections[]`
- **Features**: Glassmorphic cards with icon, title, description, optional bullet list, optional link

### `renderPageHeader(containerId, { title, subtitle })`
- **File**: `js/components/pageHeader.js`
- **containerId**: string
- **title**: string — page title (rendered with gradient)
- **subtitle**: string (optional) — descriptive subheading
- **Features**: Breadcrumb nav, gradient divider

### `renderFooter(containerId, isInnerPage)`
- **File**: `js/components/footer.js`
- **containerId**: string
- **isInnerPage**: boolean — adjusts asset paths
- **Features**: Social icon links, copyright with auto year

---

## Data Schema (`siteData.js`)

### `personalInfo`
| Field | Type | Description |
|-------|------|-------------|
| firstName | string | First name |
| lastName | string | Last name |
| fullName | string | Full display name |
| title | string | Professional title |
| tagline | string | One-line role description |
| location | string | City, State |
| email | string | Contact email (optional) |
| profileImage | string\|null | Path to profile photo |
| socialLinks | object | { linkedin: url } |

### `navigation[]`
| Field | Type | Description |
|-------|------|-------------|
| label | string | Display text |
| href | string | Relative path from root |

### `experience[]`
| Field | Type | Description |
|-------|------|-------------|
| company | string | Company name |
| role | string | Job title |
| department | string | Department (optional) |
| dates | string | Date range |
| description | string | Role summary |
| highlights | string[] | Key achievements |

### `publications.papers[]`
| Field | Type | Description |
|-------|------|-------------|
| title | string | Paper title |
| authors | string | Author list |
| venue | string | Journal/conference |
| year | number | Publication year |
| citations | number | Citation count |
| tags | string[] | Topic tags |

### `certifications[]`
| Field | Type | Description |
|-------|------|-------------|
| name | string | Certification name |
| issuer | string | Issuing organization |
| year | string | Year earned |
| icon | string | Emoji icon |

### `awards[]`
| Field | Type | Description |
|-------|------|-------------|
| name | string | Award name |
| organization | string | Awarding body |
| year | string | Year received |
| description | string | Brief description |
| icon | string | Emoji icon |

---

## CSS Architecture

| File | Purpose |
|------|---------|
| `variables.css` | Design tokens — colors, fonts, spacing, shadows, transitions, z-index |
| `base.css` | Reset, typography, utilities (.container, .section, .btn, .gradient-text) |
| `animations.css` | Keyframes, scroll-reveal classes (.reveal, .revealed), hover micro-interactions |
| `components.css` | Navbar, hero, section cards, page header, footer |
| `pages.css` | Timeline, card grid, education cards, stats bar |

### Scroll Reveal System
Add class `reveal` to any element → it starts invisible with translateY(30px) → when scrolled into viewport, IntersectionObserver adds `revealed` class → animates to visible position. Variants: `reveal-left`, `reveal-right`, `reveal-scale`.

---

## Commit History

### Commit 1 — Initial Build (2025-04-08)
**What was built:**
- Complete project structure with 7 HTML pages (home + 6 inner pages)
- 5 CSS files forming the design system (variables, base, animations, components, pages)
- 5 JS component modules (navbar, hero, sectionCard, footer, pageHeader)
- Central data store (siteData.js) with content from LinkedIn + Google Scholar
- Mobile-responsive hamburger menu
- Scroll-reveal animation system
- .gitignore, README.md, DEVELOPMENT.md

**Design decisions:**
- Dark theme with teal/cyan accents (premium, modern aesthetic vs. reference site's Google Sites look)
- Data-driven architecture: all content in siteData.js, no HTML editing needed for content updates
- No framework dependency: pure HTML/CSS/JS for Cloudflare Pages compatibility
- Glassmorphism cards with backdrop-filter for depth and visual richness
- IntersectionObserver for scroll animations (no library dependency)

**Known placeholders:**
- Profile image: using SVG placeholder (replace with actual photo at `assets/images/profile.jpg`)
- Certifications: sample entries (update in siteData.js)
- Awards: sample entries (update in siteData.js)
- Google Scholar ID: needs real URL in contact page
