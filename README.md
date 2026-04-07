# Sumeer Peta — Personal Portfolio Website

A modern, dark-themed personal portfolio website showcasing professional experience, education, publications, certifications, and awards.

**Live Site**: Hosted on Cloudflare Pages

---

## 🚀 Quick Start

No build step required — this is a static HTML/CSS/JS site.

```bash
# Serve locally
python3 -m http.server 3000
# or
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
sumeerpeta-website/
├── index.html                    # Home page
├── pages/
│   ├── experience.html           # Professional Experience timeline
│   ├── education.html            # Education details
│   ├── publications.html         # Research papers & citation stats
│   ├── certifications.html       # Professional certifications
│   ├── awards.html               # Awards & recognition
│   └── contact.html              # Contact / Connect
├── css/
│   ├── variables.css             # Design tokens (colors, fonts, spacing)
│   ├── base.css                  # CSS reset, typography, utilities
│   ├── components.css            # Navbar, hero, cards, footer styles
│   ├── pages.css                 # Page-specific layouts (timeline, grids)
│   └── animations.css            # Keyframes, scroll-reveal, hover effects
├── js/
│   ├── components/
│   │   ├── navbar.js             # Sticky nav with mobile hamburger
│   │   ├── hero.js               # Full-screen animated hero
│   │   ├── sectionCard.js        # Home page section summary cards
│   │   ├── footer.js             # Social links footer
│   │   └── pageHeader.js         # Inner page header with breadcrumb
│   ├── data/
│   │   └── siteData.js           # ⭐ ALL content data lives here
│   └── main.js                   # Scroll-reveal initialization
├── .gitignore
├── README.md                     # This file
└── DEVELOPMENT.md                # LLM-friendly development docs
```

---

## ✏️ How to Update Content

**All content is managed in a single file**: `js/data/siteData.js`

### Add a new job
Edit `siteData.experience` array — add a new object:
```js
{
  company: "Company Name",
  role: "Your Role",
  department: "Department",
  dates: "2024 — Present",
  description: "What you did",
  highlights: ["Achievement 1", "Achievement 2"],
}
```

### Add a publication
Edit `siteData.publications.papers` array:
```js
{
  title: "Paper Title",
  authors: "Author 1, Author 2",
  venue: "Journal or Conference Name",
  year: 2025,
  citations: 0,
  tags: ["AI", "Healthcare"],
}
```

### Add a certification
Edit `siteData.certifications` array:
```js
{
  name: "Certification Name",
  issuer: "Issuing Organization",
  year: "2025",
  icon: "🏅",
}
```

### Update profile photo
1. Place your photo at `assets/images/profile.jpg`
2. In `siteData.js`, set: `personalInfo.profileImage: "assets/images/profile.jpg"`

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0a0f1c` (deep navy) |
| Accent Primary | `#00d4aa` (teal) |
| Accent Secondary | `#0ea5e9` (sky blue) |
| Heading Font | Space Grotesk |
| Body Font | Inter |
| Card Style | Glassmorphism with backdrop-filter blur |

All design tokens are in `css/variables.css` — edit to change the entire look.

---

## 🌐 Deployment (Cloudflare Pages)

1. Push to GitHub
2. In Cloudflare Pages dashboard:
   - **Build command**: (none — static site)
   - **Output directory**: `/` (root)
3. Every push to `main` triggers auto-deployment

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `> 900px` | Desktop (full nav) |
| `768px — 900px` | Tablet (hamburger menu) |
| `< 768px` | Mobile (stacked layout) |
| `< 480px` | Small mobile (compact typography) |

---

## 🧩 Architecture

- **No framework** — pure HTML/CSS/JS for maximum portability
- **Data-driven** — change `siteData.js`, never touch HTML
- **Component-based** — each UI element is a reusable JS function
- **Scroll animations** — IntersectionObserver-based reveal system
- **Accessible** — ARIA labels, keyboard navigation, semantic HTML
