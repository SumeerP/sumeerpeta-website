/**
 * siteData.js — Central data store for the entire portfolio.
 *
 * HOW TO UPDATE CONTENT:
 * 1. Edit the relevant section below (e.g., add a new job to `experience`)
 * 2. Save the file — changes appear immediately on page reload
 * 3. No HTML editing required
 *
 * DATA SCHEMA:
 * - personalInfo: Core identity (name, title, bio, links)
 * - navigation:   Menu items (label, href, icon)
 * - heroContent:  Home page hero section
 * - sections:     Home page summary cards
 * - experience:   Professional timeline
 * - education:    Academic background
 * - certifications: Professional certifications
 * - awards:       Awards & recognition
 * - publications: Research papers & articles
 * - skills:       Technical skill areas
 */

const siteData = {

  /* ────────────────────────────────────────────────────────────────────────
     PERSONAL INFO
     ──────────────────────────────────────────────────────────────────────── */
  personalInfo: {
    firstName: "Sumeer",
    lastName: "Peta",
    fullName: "Sumeer Basha Peta",
    title: "Senior Technology Leader",
    tagline: "Sr. Director, Technology — Retail Media, Marketing & Data Platforms",
    location: "Acton, Massachusetts",
    email: "", // Add your email if you want
    profileImage: null, // Replace with path: "assets/images/profile.jpg"
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sumeerpeta/",
    },
    googleScholar: "https://scholar.google.com/citations?user=SUMEER_SCHOLAR_ID",
  },

  /* ────────────────────────────────────────────────────────────────────────
     NAVIGATION
     ──────────────────────────────────────────────────────────────────────── */
  navigation: [
    { label: "Home",            href: "index.html" },
    { label: "Experience",      href: "pages/experience.html" },
    { label: "Education",       href: "pages/education.html" },
    { label: "Publications",    href: "pages/publications.html" },
    { label: "Certifications",  href: "pages/certifications.html" },
    { label: "Awards",          href: "pages/awards.html" },
    { label: "Contact",         href: "pages/contact.html" },
  ],

  /* ────────────────────────────────────────────────────────────────────────
     HERO CONTENT (Home page)
     ──────────────────────────────────────────────────────────────────────── */
  heroContent: {
    greeting: "Hello, I'm",
    description: "A seasoned technology executive with over a decade of experience driving digital transformation, building AI-powered platforms, and leading enterprise-scale MarTech and CMS architectures across Healthcare, Retail, and Financial services.",
    ctas: [
      {
        label: "Connect on LinkedIn",
        href: "https://www.linkedin.com/in/sumeerpeta/",
        style: "primary",
        icon: "🔗",
      },
      {
        label: "View Publications",
        href: "pages/publications.html",
        style: "outline",
        icon: "📄",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────────
     HOME PAGE SECTION CARDS
     ──────────────────────────────────────────────────────────────────────── */
  sections: [
    {
      icon: "💼",
      title: "Professional Experience",
      description: "Over a decade of leadership in digital technology transformation, specializing in MarTech, CMS platforms, AI/ML, and enterprise architecture across Healthcare, Retail, and Financial services.",
      link: "pages/experience.html",
      linkText: "View full experience",
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Master of Science in Computer Science from Southern Illinois University Edwardsville (GPA 4.0/4.0), and Bachelor of Engineering from Osmania University.",
      link: "pages/education.html",
      linkText: "View education details",
    },
    {
      icon: "📚",
      title: "Research & Publications",
      description: "Published researcher with 42+ citations and h-index of 4. Research focuses on AI in healthcare, federated learning, cloud architectures, and real-time personalization in content management systems.",
      link: "pages/publications.html",
      linkText: "View all publications",
    },
    {
      icon: "🏅",
      title: "Certifications",
      description: "Diverse array of certifications in AI, cloud computing, digital transformation, and enterprise architecture from leading organizations including Adobe, AWS, and Google.",
      link: "pages/certifications.html",
      linkText: "View all certifications",
    },
    {
      icon: "🏆",
      title: "Awards & Recognition",
      description: "Recognized as a thought leader in technology innovation, with contributions to peer-reviewed journals, conference keynotes, and industry publications.",
      link: "pages/awards.html",
      linkText: "View awards",
    },
    {
      icon: "⚡",
      title: "Expertise",
      description: "Deep expertise in Adobe Experience Cloud (AEM, AEP), composable architecture, AI/ML platforms, predictive analytics, MarTech integration, and digital customer experience design.",
      items: [
        "Adobe Experience Manager (AEM) & Adobe Experience Platform (AEP)",
        "AI/ML — Federated Learning, LLMs, Predictive Analytics",
        "Composable & Headless Architecture",
        "MarTech Strategy & Digital Transformation",
        "Cloud Platforms — AWS, Azure, GCP",
        "Strategic Technical Planning & Architectural Leadership",
      ],
    },
  ],

  /* ────────────────────────────────────────────────────────────────────────
     PROFESSIONAL EXPERIENCE
     ──────────────────────────────────────────────────────────────────────── */
  experience: [
    {
      company: "The Home Depot",
      role: "Sr. Director, Technology",
      department: "Retail Media, Marketing & Data Platforms",
      dates: "2024 — Present",
      description: "Leading technology strategy and execution for Retail Media, Marketing, and Data Platform initiatives. Driving innovation in customer experience through AI-powered personalization and data-driven marketing solutions at scale.",
      highlights: [
        "Spearheading the development of next-generation retail media and data platform capabilities",
        "Leading cross-functional teams to deliver AI-driven marketing technology solutions",
        "Driving strategic technology partnerships and vendor management",
      ],
    },
    {
      company: "CVS Health",
      role: "Lead Architect",
      department: "Digital CMS & Personalization",
      dates: "2020 — 2024",
      description: "Led the architectural vision for digital content management and personalization platforms, integrating Adobe Experience Platform (AEP) and Adobe Experience Manager (AEM) to revolutionize customer engagement for millions of healthcare consumers.",
      highlights: [
        "Architected the integration of AEP and AEM for enterprise-scale personalization",
        "Led a team of 30+ engineers delivering CMS modernization",
        "Achieved 40% improvement in content delivery performance",
        "Designed composable architecture patterns adopted across the organization",
      ],
    },
    {
      company: "Adobe",
      role: "Senior Technical Architect",
      department: "Digital Experience Solutions",
      dates: "2014 — 2020",
      description: "Delivered enterprise-scale Digital Experience solutions for Fortune 500 clients. Deep expertise in Adobe Experience Cloud products including AEM, AEP, Analytics, and Target.",
      highlights: [
        "Designed and delivered AEM implementations for global enterprise clients",
        "Led technical architecture workshops and readiness assessments",
        "Developed reusable solution accelerators reducing implementation time by 30%",
        "Mentored junior architects and contributed to internal knowledge sharing",
      ],
    },
    {
      company: "SapientNitro",
      role: "Senior Interactive Developer / Architect",
      department: "",
      dates: "2011 — 2014",
      description: "Developed interactive web applications and enterprise solutions for major brands. Progressed from senior developer to architect role, leading technical design for complex client projects.",
      highlights: [
        "Led frontend architecture for large-scale enterprise web applications",
        "Implemented responsive and accessible web experiences",
        "Collaborated with UX designers to translate designs into performant code",
      ],
    },
    {
      company: "Southern Illinois University Edwardsville",
      role: "Graduate Assistant / Research Fellow",
      department: "Computer Science",
      dates: "2008 — 2010",
      description: "Conducted research in computer science while assisting faculty with coursework and lab sessions. Contributed to mobile application development and academic research.",
      highlights: [
        "Published research in peer-reviewed conferences",
        "Developed mobile applications for educational purposes",
        "Achieved perfect 4.0 GPA in MS Computer Science program",
      ],
    },
  ],

  /* ────────────────────────────────────────────────────────────────────────
     EDUCATION
     ──────────────────────────────────────────────────────────────────────── */
  education: [
    {
      degree: "Master of Science (MS) in Computer Science",
      school: "Southern Illinois University Edwardsville",
      location: "Edwardsville, Illinois, USA",
      dates: "2009 — 2010",
      gpa: "4.0 / 4.0",
      description: "Focused on software engineering, algorithms, and mobile computing. Served as a Graduate Assistant and Research Fellow.",
      icon: "🎓",
    },
    {
      degree: "Bachelor of Engineering (BE) in Computer Science",
      school: "Osmania University",
      location: "Hyderabad, India",
      dates: "2004 — 2008",
      gpa: "",
      description: "Foundational education in computer science principles, data structures, databases, and software engineering.",
      icon: "🎓",
    },
  ],

  /* ────────────────────────────────────────────────────────────────────────
     PUBLICATIONS (from Google Scholar)
     ──────────────────────────────────────────────────────────────────────── */
  publications: {
    stats: {
      totalCitations: "42+",
      hIndex: 4,
      i10Index: 1,
    },
    papers: [
      {
        title: "Federated Learning for Privacy-Preserving Big Data Analytics in Cloud Environments",
        authors: "A Shirdi, SB Peta, N Sajanraj, S Acharya",
        venue: "2025 Global Conference on Emerging Technology (GINOTECH), 1-8",
        year: 2025,
        citations: 10,
        tags: ["Federated Learning", "Cloud", "Privacy"],
      },
      {
        title: "Balancing Technology and Privacy: Securing Patient Data in Healthcare Under HIPAA Regulations",
        authors: "S Agarwal, SB Peta",
        venue: "Authorea Preprints",
        year: 2024,
        citations: 8,
        tags: ["Healthcare", "Privacy", "HIPAA"],
      },
      {
        title: "Leveraging Multiple LLM Evaluators for Scalable and Fair Language Model Assessments",
        authors: "JIJ and S. B. Peta V. Koc, K. Alang",
        venue: "International Conference on Metaverse and Current Trends in Computing (ICMCTC)",
        year: 2025,
        citations: 7,
        tags: ["LLM", "AI/ML", "NLP"],
      },
      {
        title: "Scalable Cloud Architectures for Efficient Processing of Multi-Structured Big Data",
        authors: "K Alang, SB Peta, RR Pai, B Patil",
        venue: "2025 Global Conference on Emerging Technology (GINOTECH), 1-6",
        year: 2025,
        citations: 5,
        tags: ["Cloud Architecture", "Big Data"],
      },
      {
        title: "Predictive Clickstream Analytics for Real-Time Personalization in Content Management Systems",
        authors: "SB Peta, K Alang, D Naruka, B Bisi",
        venue: "2025 International Conference on Computing Technologies (ICOCT), 1-7",
        year: 2025,
        citations: 4,
        tags: ["Personalization", "CMS", "Analytics"],
      },
      {
        title: "From Notes to Billing: Large Language Models in Revolutionizing Medical Documentation and Healthcare Administration",
        authors: "S Agarwal, SB Peta",
        venue: "Sch J App Med Sci 8, 1558-1566",
        year: 2025,
        citations: 3,
        tags: ["LLM", "Healthcare", "AI"],
      },
      {
        title: "A Framework for Intelligent Cloud Systems: Enabling Secure, Policy-Driven, and Sustainable AI",
        authors: "SB Peta et al.",
        venue: "2025 Conference Publication",
        year: 2025,
        citations: 2,
        tags: ["Cloud", "AI", "Security"],
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────────
     CERTIFICATIONS
     Add your actual certifications here.
     ──────────────────────────────────────────────────────────────────────── */
  certifications: [
    {
      name: "Adobe Experience Manager Sites Architect",
      issuer: "Adobe",
      year: "",
      icon: "🏛️",
    },
    {
      name: "Adobe Experience Platform Expert",
      issuer: "Adobe",
      year: "",
      icon: "📊",
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "",
      icon: "☁️",
    },
    {
      name: "Google Cloud Professional Architect",
      issuer: "Google",
      year: "",
      icon: "🌐",
    },
    // Add more certifications as needed
  ],

  /* ────────────────────────────────────────────────────────────────────────
     AWARDS & RECOGNITION
     Add your actual awards here.
     ──────────────────────────────────────────────────────────────────────── */
  awards: [
    {
      name: "Top Technology Voice",
      organization: "LinkedIn",
      year: "2024",
      description: "Recognized among top voices in technology leadership on LinkedIn.",
      icon: "🏆",
    },
    {
      name: "Independent Researcher — IEEE",
      organization: "IEEE",
      year: "2024",
      description: "Verified researcher with IEEE.org email and published works in AI, MarTech, and Digital Customer Experience.",
      icon: "🔬",
    },
    // Add more awards as needed
  ],

  /* ────────────────────────────────────────────────────────────────────────
     SKILLS / EXPERTISE AREAS
     ──────────────────────────────────────────────────────────────────────── */
  skills: {
    categories: [
      {
        name: "Platforms & Products",
        items: ["Adobe Experience Manager (AEM)", "Adobe Experience Platform (AEP)", "Adobe Target", "Adobe Analytics", "CRM/CMS Integration"],
      },
      {
        name: "AI & Machine Learning",
        items: ["Federated Learning", "Large Language Models (LLMs)", "Predictive Analytics", "Natural Language Processing", "AI-Powered Personalization"],
      },
      {
        name: "Architecture & Cloud",
        items: ["Composable Architecture", "Headless CMS", "Microservices", "AWS", "Azure", "GCP", "Kubernetes"],
      },
      {
        name: "Leadership & Strategy",
        items: ["Digital Transformation", "Technical Team Leadership", "Vendor Management", "Solution Architecture", "Strategic Planning"],
      },
    ],
  },
};

// Make available as module or global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
