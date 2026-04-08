/**
 * siteData.js — Central data store for the entire portfolio.
 *
 * HOW TO UPDATE CONTENT:
 * 1. Edit the relevant section below (e.g., add a new award to `awards`)
 * 2. Save the file — changes appear immediately on page reload
 * 3. No HTML editing required
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
    email: "",
    profileImage: null, // Replace with: "assets/images/profile.jpg"
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sumeerpeta/",
    },
    googleScholar: "https://scholar.google.com/citations?user=SUMEER_SCHOLAR_ID",
  },

  /* ────────────────────────────────────────────────────────────────────────
     NAVIGATION
     ──────────────────────────────────────────────────────────────────────── */
  navigation: [
    { label: "Home",           href: "index.html" },
    { label: "Experience",     href: "pages/experience.html" },
    { label: "Education",      href: "pages/education.html" },
    { label: "Publications",   href: "pages/publications.html" },
    { label: "Awards",         href: "pages/awards.html" },
    { label: "Judging",        href: "pages/judging.html" },
    { label: "Mentoring",      href: "pages/mentoring.html" },
    { label: "Contact",        href: "pages/contact.html" },
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
      icon: "🏆",
      title: "Awards & Recognition",
      description: "Multiple Globee Gold, Titan Gold/Platinum, and other prestigious awards recognizing excellence in information technology, customer experience, and technical leadership.",
      link: "pages/awards.html",
      linkText: "View all awards",
    },
    {
      icon: "📚",
      title: "Research & Publications",
      description: "Published researcher with 42+ citations and h-index of 4. Research spans AI in healthcare, federated learning, cloud architectures, LLM evaluation, and real-time personalization in CMS. Author of a book published on Amazon.",
      link: "pages/publications.html",
      linkText: "View all publications",
    },
    {
      icon: "⚖️",
      title: "Judging & Peer Review",
      description: "Serves as judge for Globee Awards, Devpost Hackathons, and HackHarvard. Peer reviewer for Q1 journals, Google Scholar journals, and 15+ IEEE conference papers. Session Chair at International Conference of Emerging Technology.",
      link: "pages/judging.html",
      linkText: "View judging roles",
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Master of Science in Computer Science from Southern Illinois University Edwardsville (GPA 4.0/4.0), and Bachelor of Engineering from Osmania University.",
      link: "pages/education.html",
      linkText: "View education details",
    },
    {
      icon: "🤝",
      title: "Memberships & Mentoring",
      description: "Fellow of Soft Computing Research Society, IETE, and BCS. Senior Member of IEEE. ADP Top Mentor and HackHarvard Mentor. Book chapters reviewer for Manning Publishers.",
      link: "pages/mentoring.html",
      linkText: "View details",
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
     PUBLICATIONS (from Google Scholar + EB1A PDF)
     ──────────────────────────────────────────────────────────────────────── */
  publications: {
    stats: {
      totalCitations: "42+",
      hIndex: 4,
      i10Index: 1,
    },
    bookAuthor: {
      title: "Book Author",
      description: "Published book available on Amazon.",
      link: "https://www.amazon.com",
      linkText: "View Book on Amazon",
    },
    papers: [
      {
        title: "Federated Learning for Privacy-Preserving Big Data Analytics in Cloud Environments",
        authors: "A Shirdi, SB Peta, N Sajanraj, S Acharya",
        venue: "2025 Global Conference on Emerging Technology (GINOTECH), 1-8",
        year: 2025,
        citations: 10,
        role: "Co-Author",
        tags: ["Federated Learning", "Cloud", "Privacy"],
      },
      {
        title: "Balancing Technology and Privacy: Securing Patient Data in Healthcare Under HIPAA Regulations",
        authors: "S Agarwal, SB Peta",
        venue: "Authorea Preprints",
        year: 2024,
        citations: 8,
        role: "Co-Author",
        tags: ["Healthcare", "Privacy", "HIPAA"],
      },
      {
        title: "Leveraging Multiple LLM Evaluators for Scalable and Fair Language Model Assessments",
        authors: "JIJ and S. B. Peta V. Koc, K. Alang",
        venue: "International Conference on Metaverse and Current Trends in Computing (ICMCTC)",
        year: 2025,
        citations: 7,
        role: "Co-Author",
        tags: ["LLM", "AI/ML", "NLP"],
      },
      {
        title: "Scalable Cloud Architectures for Efficient Processing of Multi-Structured Big Data",
        authors: "K Alang, SB Peta, RR Pai, B Patil",
        venue: "2025 Global Conference on Emerging Technology (GINOTECH), 1-6",
        year: 2025,
        citations: 5,
        role: "Co-Author",
        tags: ["Cloud Architecture", "Big Data"],
      },
      {
        title: "Predictive Clickstream Analytics for Real-Time Personalization in Content Management Systems",
        authors: "SB Peta, K Alang, D Naruka, B Bisi",
        venue: "2025 International Conference on Computing Technologies (ICOCT), 1-7",
        year: 2025,
        citations: 4,
        role: "Primary Author",
        tags: ["Personalization", "CMS", "Analytics"],
      },
      {
        title: "From Notes to Billing: Large Language Models in Revolutionizing Medical Documentation and Healthcare Administration",
        authors: "S Agarwal, SB Peta",
        venue: "Sch J App Med Sci 8, 1558-1566",
        year: 2025,
        citations: 3,
        role: "Co-Author",
        tags: ["LLM", "Healthcare", "AI"],
      },
      {
        title: "A Framework for Intelligent Cloud Systems: Enabling Secure, Policy-Driven, and Sustainable AI",
        authors: "SB Peta et al.",
        venue: "2025 Conference Publication",
        year: 2025,
        citations: 2,
        role: "Co-Author",
        tags: ["Cloud", "AI", "Security"],
      },
      {
        title: "Enhancing Smart City Infrastructures",
        authors: "SB Peta (Primary Author)",
        venue: "IEEE Conference",
        year: 2025,
        citations: 1,
        role: "Primary Author",
        tags: ["Smart Cities", "IoT"],
      },
      {
        title: "AI for Code",
        authors: "SB Peta et al.",
        venue: "IEEE Conference",
        year: 2025,
        citations: 1,
        role: "Co-Author",
        tags: ["AI", "Software Engineering"],
      },
      {
        title: "Privacy-Preserving Generative AI",
        authors: "SB Peta et al.",
        venue: "IEEE Conference",
        year: 2025,
        citations: 0,
        role: "Co-Author",
        tags: ["Generative AI", "Privacy"],
      },
    ],
    journals: [
      { title: "IJCNIS", role: "Primary Author" },
      { title: "TechRxiv", role: "Co-Author" },
      { title: "Sch J App Med Sci", role: "Co-Author" },
      { title: "Sch J Eng Tech", role: "Co-Author" },
    ],
    recognition: [
      "Best paper announced at IEEE International Conference",
      "Outstanding contributions recognized at CCWC 2026",
      "Four research teams win best paper awards at IEEE WCONF 2025",
      "IEEE I2ITCON 2025 recognizes cutting-edge research",
    ],
  },

  /* ────────────────────────────────────────────────────────────────────────
     AWARDS & RECOGNITION (from EB1A PDF)
     ──────────────────────────────────────────────────────────────────────── */
  awards: {
    categories: [
      {
        name: "Globee Awards — Technology",
        items: [
          { name: "IT Professional of the Year", level: "Bronze" },
          { name: "Professional of the Year | IT Software", level: "Bronze" },
          { name: "Customer Experience Champion", level: "Gold" },
          { name: "Achievement in Multichannel Support", level: "Gold" },
          { name: "Customer Service Engagement Individual of the Year", level: "Gold" },
          { name: "Creative Mind for Customer Excellence", level: "Gold" },
          { name: "Lifetime Achievement in Customer Excellence", level: "Bronze" },
        ],
      },
      {
        name: "Globee Golden Bridge Awards",
        items: [
          { name: "Information Technology Engineer of the Year", level: "Bronze" },
          { name: "Information Technology Professional of the Year", level: "Gold" },
        ],
      },
      {
        name: "Titan Awards",
        items: [
          { name: "Information Technology — Technical Professional of the Year", level: "Gold" },
          { name: "Business Technology Solutions — Technology Professional of the Year", level: "Silver" },
          { name: "Business Technology Solutions — Content Management Solution", level: "Silver" },
        ],
      },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────────
     MEMBERSHIPS
     ──────────────────────────────────────────────────────────────────────── */
  memberships: {
    fellow: [
      "Soft Computing Research Society",
      "IETE",
      "BCS",
    ],
    seniorMember: [
      "IEEE",
    ],
  },

  /* ────────────────────────────────────────────────────────────────────────
     JUDGING & PEER REVIEW (from EB1A PDF)
     ──────────────────────────────────────────────────────────────────────── */
  judging: {
    awards: [
      { name: "Globee Awards Business", icon: "🏆" },
      { name: "Globee Awards Customer Excellence", icon: "🏆" },
      { name: "Globee Awards Technology", icon: "🏆" },
    ],
    hackathons: [
      { name: "Judge — Devpost (4 hackathons)", icon: "💻" },
      { name: "Judge at HackHarvard, Harvard University, Cambridge — 2025", icon: "🎓" },
    ],
    peerReview: [
      "2 Q1 Journal articles (Editors of Method X)",
      "2 Google Scholarly article journals (IJGIS)",
      "15 Conference papers including ICCTWC, INCSST, and Emerging in Computing Technologies",
    ],
    sessionChair: [
      "International Conference of Emerging Technology",
    ],
    bookReview: [
      "Manning Publishers — 2 Books: Dr. Harvey and the Eight Fallacies and Grokking AI Applications",
    ],
  },

  /* ────────────────────────────────────────────────────────────────────────
     MENTORING (from EB1A PDF)
     ──────────────────────────────────────────────────────────────────────── */
  mentoring: [
    { name: "ADP Top Mentor", description: "Recognized as a top mentor on ADPList platform, providing guidance on technology leadership and career development.", icon: "⭐" },
    { name: "HackHarvard Mentor 2024", description: "Mentored student teams at HackHarvard hackathon at Harvard University, Cambridge.", icon: "🎓" },
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
