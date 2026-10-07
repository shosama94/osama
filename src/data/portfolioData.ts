export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'listening' | 'seo' | 'ads' | 'ecommerce' | 'creative';
  categoryLabel: string;
  tagline: string;
  objective: string;
  solution: string;
  impact: string;
  role: string;
  tools: string[];
  image: string;
  featured?: boolean;
  deliverables?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  summary: string;
  highlights: string[];
  tools: string[];
  badge?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  topic: string;
  verified: boolean;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Shaikh Osama',
    title: 'Digital Marketer · SEO Expert · Brand Experience Specialist',
    location: 'Gulshan-E-Iqbal, Karachi, Pakistan',
    email: 'shaikh.osaama@gmail.com',
    phone: '+92 340 2042125',
    phoneDisplay: '0340 2042125',
    linkedin: 'https://www.linkedin.com/in/shaikhosama94/',
    bio: 'Results-driven Digital Marketer with proven expertise across Search Engine Optimization, enterprise social media listening, multi-channel performance marketing, customer chat support, and e-commerce growth. Currently driving consumer sentiment intelligence and corporate brand health for K-Electric, backed by a technical foundation in Web Design & Development.',
    heroKicker: 'Digital Strategy & Brand Intelligence',
    headline: 'Bridging Data-Driven SEO, Brand Listening, and High-Converting Digital Strategies',
    subheadline: '3+ years executing end-to-end digital marketing initiatives for major utilities, luxury aesthetics clinics, real estate enterprises, and e-commerce fashion brands.'
  },

  stats: [
    { label: 'Years Experience', value: '3+', context: 'SEO, SMM & Brand Listening' },
    { label: 'Enterprise & Client Brands', value: '12+', context: 'Utility, Clinic, Fashion & B2B' },
    { label: 'Industry Certifications', value: '9+', context: 'HubSpot, Google, SEMrush, Yoast' },
    { label: 'Core Technical Stack', value: '15+', context: 'SAP S/4HANA, Meltwater, Shopify' },
  ],

  experiences: [
    {
      company: 'K-Electric',
      role: 'Social Media Listening & Brand Specialist',
      period: 'Oct 2025 – Present',
      duration: 'Current Role',
      location: 'Karachi, Pakistan',
      badge: 'Premier Power Utility',
      summary: 'Overseeing enterprise consumer sentiment tracking, crisis escalation handling, and brand reputation protection for Karachi’s sole electricity provider serving 30M+ citizens.',
      highlights: [
        'Utilize Meltwater enterprise intelligence to track consumer sentiment, monitor real-time trends, and extract actionable brand insights.',
        'Address public queries, customer grievances, and crisis escalations across digital channels to maintain corporate brand health.',
        'Manage end-to-end case-tracking workflows in SAP S/4HANA integrated with technical operations and field response teams.',
        'Actively monitor multi-platform online conversations to safeguard corporate brand equity during major weather events and grid load periods.'
      ],
      tools: ['Meltwater', 'SAP S/4HANA', 'Sentiment Analytics', 'Crisis Communications', 'Brand Reputation']
    },
    {
      company: 'Dr. Shaista Lodhi (SL Creative)',
      role: 'SEO & Social Media Marketing Manager',
      period: 'Jan 2023 – Sep 2025',
      duration: '2 Years 9 Months',
      location: 'Karachi, Pakistan',
      badge: 'Celebrity Aesthetic Clinic & Skincare',
      summary: 'Directed search engine optimization, Shopify e-commerce operations, and high-retention content marketing for high-profile medical aesthetics and skincare brand.',
      highlights: [
        'Spearheaded On-Page and Off-Page SEO architectures, boosting organic visibility for aesthetic treatments and proprietary skincare lines.',
        'Managed end-to-end Shopify website catalog, user journey UX, promotional landing pages, and FAQ content resources.',
        'Conceptualized and executed high-retention Instagram reels, story series, and creative promotional ad assets.',
        'Produced conversion-focused editorial content, client newsletters, and treatment educational copy that drove patient inquiries.'
      ],
      tools: ['Shopify', 'On-Page SEO', 'Off-Page SEO', 'Content Strategy', 'Social Media Marketing', 'Copywriting']
    },
    {
      company: 'Jinnah Builders (Bahria Town)',
      role: 'Digital Marketer & Web Developer',
      period: 'Jan 2022 – Dec 2022',
      duration: '1 Year',
      location: 'Karachi, Pakistan',
      badge: 'Premier Real Estate Development',
      summary: 'Orchestrated digital acquisition channels, targeted Meta lead generation funnels, and web development for prominent real estate projects in Bahria Town.',
      highlights: [
        'Formulated and ran targeted Facebook Lead Ads funnels that captured high-net-worth real estate buyer inquiries.',
        'Designed and developed commercial project websites ensuring responsive performance across mobile and desktop devices.',
        'Executed local and technical SEO initiatives targeting high-intent property investment search terms.',
        'Coordinated digital walkthrough promotions and promotional display creative collateral.'
      ],
      tools: ['Facebook Lead Ads', 'Web Design', 'Web Development', 'On-Page SEO', 'Off-Page SEO', 'Meta Ads Manager']
    },
    {
      company: 'Nakoosh (Women Clothing Brand)',
      role: 'SMM & SEO Specialist',
      period: 'June 2021 – Dec 2021',
      duration: '7 Months',
      location: 'Karachi, Pakistan',
      badge: 'Fashion E-Commerce',
      summary: 'Managed seasonal fashion launches, social media creative direction, and digital catalog optimization for ready-to-wear female apparel.',
      highlights: [
        'Executed comprehensive social media marketing strategies for festive Lawn, Maisori frock, and Chiffon collections.',
        'Produced engaging short-form creative posts, promotional story sequences, and customer engagement projects.',
        'Managed online store product pages, meta-tagging, image optimization, and keyword targeting.',
        'Monitored audience analytics to refine creative hooks, pricing promotions, and customer messaging.'
      ],
      tools: ['Social Media Marketing', 'SEO', 'Digital Content Editing', 'Catalog Management', 'Meta Ads']
    },
    {
      company: 'Digital Gravity',
      role: 'SEO Expert',
      period: 'Jan 2021 – April 2021',
      duration: '4 Months',
      location: 'Karachi, Pakistan',
      badge: 'Full-Service Digital Agency',
      summary: 'Executed technical search engine audits, authoritative backlink building initiatives, and content growth roadmaps for agency clients.',
      highlights: [
        'Conducted rigorous SEO technical site audits, indexing checks, and competitive keyword gap analyses.',
        'Executed white-hat guest posting and backlink acquisition initiatives to strengthen domain authority.',
        'Collaborated with content and technical teams to optimize metadata, internal link architecture, and search intent.'
      ],
      tools: ['SEO Audits', 'Keyword Research', 'Guest Posting', 'Backlink Building', 'On-Page SEO', 'Off-Page SEO']
    }
  ] as ExperienceItem[],

  internshipsAndVolunteering: [
    {
      organization: '3D Educators, Karachi',
      role: 'Social Media Marketing Intern',
      focus: 'Facebook Paid Ads, Freehand Ad Creatives, Page Handling & Data Entry'
    },
    {
      organization: 'Tehzeeb NGO',
      role: 'Digital Marketing Admin',
      focus: 'Karachi Community Event Marketing, Image Editing & Social Post Creation'
    },
    {
      organization: 'Karachi University',
      role: 'Invigilator (Entry Test 2021 – 2022)',
      focus: 'Campus examination protocol governance and student credential validation'
    },
    {
      organization: 'PARHLO Media',
      role: 'Website Audit & Media Creation',
      focus: 'Digital audience analysis, editorial review, and educational content production'
    },
    {
      organization: 'Hamdard University',
      role: 'Logo Creation (Pakistan Day)',
      focus: 'Creative commemorative branding and visual asset typography design'
    },
    {
      organization: 'Anchor Owais Rabbani Official',
      role: 'YouTube Channel Administrator',
      focus: 'Content scheduling, thumbnail design, video SEO, and audience community moderation'
    }
  ],

  projects: [
    {
      id: 'kelectric-listening',
      title: 'Enterprise Social Media Listening & Sentiment Operations',
      client: 'K-Electric (Karachi Power Utility)',
      category: 'listening',
      categoryLabel: 'Brand Intelligence',
      tagline: 'Safeguarding public brand equity for a 30M+ population utility via Meltwater & SAP S/4HANA.',
      objective: 'Establish a rapid-response brand listening mechanism to detect sentiment spikes, escalate customer grievances, and mitigate corporate reputation crises in real-time.',
      solution: 'Configured Meltwater sentiment dashboards tracking key consumer friction terms, integrated incident workflows into SAP S/4HANA for technical dispatch, and established cross-platform grievance resolution protocols.',
      impact: 'Maintained proactive brand health visibility across municipal power shifts, reducing escalation turnaround times and feeding critical customer feedback directly to operational leaders.',
      role: 'Social Media Listening & Brand Specialist',
      tools: ['Meltwater', 'SAP S/4HANA', 'Crisis Escalations', 'Customer Chat Support', 'Sentiment Analysis'],
      image: '/src/assets/images/kelectric_brand_intelligence_1791370801735.jpg',
      featured: true,
      deliverables: ['Meltwater Query Architecture', 'Escalation Playbooks', 'SAP Case Routing', 'Daily Sentiment Summaries']
    },
    {
      id: 'shaista-lodhi-aesthetic',
      title: 'Dermatology & Luxury Skincare E-Commerce Optimization',
      client: 'Dr. Shaista Lodhi (SL Creative)',
      category: 'ecommerce',
      categoryLabel: 'SEO & E-Commerce',
      tagline: 'Driving organic search visibility and Shopify conversions for premier medical aesthetics brand.',
      objective: 'Scale organic patient inquiries and e-commerce skincare product sales through search engine optimization, Shopify UX refinement, and high-retention content.',
      solution: 'Re-architected on-page content including procedural FAQs, structured treatment metadata, managed Shopify inventory and promotional discounts, and orchestrated creative marketing strategies.',
      impact: 'Significantly elevated non-branded search engine rankings for aesthetic clinical procedures in Karachi while creating a seamless digital shopping experience for celebrity skincare lines.',
      role: 'SEO & Social Media Marketing Manager',
      tools: ['Shopify', 'On-Page SEO', 'Off-Page SEO', 'Copywriting', 'Content Strategy', 'Meta Business Suite'],
      image: '/src/assets/images/shaista_creative_aesthetic_1791370820427.jpg',
      featured: true,
      deliverables: ['Treatment FAQ Documentation', 'Shopify Store Management', 'Creative Concepts', 'Technical SEO Roadmap']
    },
    {
      id: 'nakoosh-clothing-initiatives',
      title: 'Fashion E-Commerce Launch & Seasonal Ad Suites',
      client: 'Nakoosh (Women Ready-to-Wear)',
      category: 'creative',
      categoryLabel: 'Creative & Social',
      tagline: 'Multi-channel social strategies and product catalog assets driving female prêt collection sell-through.',
      objective: 'Position seasonal clothing drops (Maisori Frocks, Lawn, Chiffon, Black Collection) in front of modern Pakistani women through high-converting social creative content.',
      solution: 'Designed complete creative collateral, created social media promotional layouts, optimized product listings for search, and monitored audience engagement.',
      impact: 'Achieved high social engagement and direct customer orders across Facebook & Instagram channels, establishing strong brand recall for seasonal collections.',
      role: 'SMM & SEO Specialist',
      tools: ['Digital Content Editing', 'Social Ad Design', 'Instagram Marketing', 'Meta Ads', 'Adobe Photoshop'],
      image: '/src/assets/images/nakoosh_fashion_campaign_1791370854334.jpg',
      featured: true,
      deliverables: ['Seasonal Ad Suites', 'Product Banner Suites', 'Ad Copywriting', 'E-Commerce Product Copy']
    },
    {
      id: 'jinnah-builders-realestate',
      title: 'Bahria Town Real Estate Lead Generation Funnel',
      client: 'Jinnah Builders',
      category: 'ads',
      categoryLabel: 'Meta Lead Ads',
      tagline: 'Acquiring high-intent property investors through targeted Meta ads and custom web architecture.',
      objective: 'Generate verified investor leads for commercial and residential developments in Bahria Town Karachi with efficient cost-per-lead.',
      solution: 'Designed and deployed responsive landing pages, developed custom Facebook Lead Ads targeting diaspora and local investors, and aligned on-page SEO for high-value real estate keywords.',
      impact: 'Delivered consistent streams of qualified lead submissions to the sales desk while establishing a credible modern online real estate presence.',
      role: 'Digital Marketer & Web Developer',
      tools: ['Facebook Lead Ads', 'Meta Ads Manager', 'Web Design', 'Web Development', 'On-Page SEO'],
      image: '/src/assets/images/jinnah_builders_marketing_1791370838647.jpg',
      featured: true,
      deliverables: ['Meta Lead Ad Creatives', 'Responsive Web Layouts', 'Lead Form Automation', 'Investor Pitch Collateral']
    },
    {
      id: 'credkin-fintech-content',
      title: 'Credit Management & Fintech Educational Content Strategy',
      client: 'Credkin Financial',
      category: 'seo',
      categoryLabel: 'SEO & Content',
      tagline: 'Demystifying credit health and debt repair through authoritative blog strategy and visual infographics.',
      objective: 'Establish domain authority in the competitive credit counseling space with educational content that ranks and converts.',
      solution: 'Authored in-depth educational articles (Credit Repair, Streamlining Finances with Credit Management Companies), created clean educational infographics, and optimized keyword intent.',
      impact: 'Created evergreen search assets that educate consumers on credit platforms while funneling readers toward personalized financial advisory sessions.',
      role: 'Content Strategist & SEO Specialist',
      tools: ['SEO Content Strategy', 'Copywriting', 'Infographic Design', 'Keyword Research', 'SEMrush'],
      image: '/src/assets/images/kelectric_brand_intelligence_1791370801735.jpg',
      featured: false,
      deliverables: ['Long-form Research Articles', 'Credit Guide Infographic', 'Keyword Mapping Document']
    },
    {
      id: 'maryam-aesthetics-brand',
      title: 'Aesthetics Artistry Visual Identity & Logo System',
      client: 'Maryam Aesthetics Artistry (Karachi)',
      category: 'creative',
      categoryLabel: 'Brand Identity',
      tagline: 'Crafting a refined visual identity and typographic emblem for a boutique aesthetics practice.',
      objective: 'Develop a modern, memorable brand identity suitable for signage, digital social profiles, and client treatment collateral.',
      solution: 'Created custom typographic logomarks balancing clinical precision with artistic elegance, specifying color harmonies, icon marks, and social media watermarks.',
      impact: 'Enabled the clinic to launch with a unified, premium visual signature that instills immediate client trust.',
      role: 'Brand Designer',
      tools: ['Adobe Photoshop', 'Brand Identity', 'Typography', 'Logo Design', 'Vector Illustration'],
      image: '/src/assets/images/shaista_creative_aesthetic_1791370820427.jpg',
      featured: false,
      deliverables: ['Primary Brand Logomark', 'Vector Asset Suite', 'Social Profile Avatars', 'Usage Guidelines']
    }
  ] as ProjectItem[],

  certifications: [
    { name: 'Social Media Certified', issuer: 'HubSpot Academy', topic: 'Inbound Social Strategy, Ads & Community', verified: true },
    { name: 'Google Digital Unlocked / Certification', issuer: 'Google', topic: 'Digital Marketing Fundamentals & Search', verified: true },
    { name: 'Keyword Research Certification', issuer: 'SEMrush Academy', topic: 'Competitive Analysis & SERP Intelligence', verified: true },
    { name: 'Search Engine Optimization (SEO)', issuer: 'Lynda / LinkedIn Learning', topic: 'Technical SEO, Crawling & Indexation', verified: true },
    { name: 'SEO Certification', issuer: 'Yoast Academy', topic: 'WordPress Technical SEO & Structured Data', verified: true },
    { name: 'SEO Essentials Certification', issuer: 'Mangools Academy', topic: 'SERP Analysis, Keyword Tracking & Backlinks', verified: true },
    { name: 'Cisco Academy Certification', issuer: 'CISCO Networking Academy', topic: 'Digital Infrastructure & IT Systems', verified: true },
    { name: 'Content Marketing Foundations', issuer: 'Lynda / LinkedIn Learning', topic: 'Storytelling, Editorial Planning & Distribution', verified: true },
    { name: 'Digital Certification', issuer: 'BitDegree', topic: 'Modern Web & Performance Marketing', verified: true },
  ] as CertificationItem[],

  education: [
    {
      degree: 'Associate Degree in Web Design & Development',
      institution: 'Virtual University of Pakistan',
      score: '3.08 CGPA',
      period: 'Graduate',
      details: 'Final Year Project (FYP): Electrical Vehicle Web App Information System. Studied frontend web development, database systems, responsive UI design, and web architecture.'
    },
    {
      degree: 'Diploma, Advanced DIT (Information Technology)',
      institution: 'Computer Collegiate, Karachi',
      score: 'Certified',
      period: 'Advanced Professional',
      details: 'Comprehensive training in software applications, web administration, digital image manipulation, and computing systems.'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Intermediate Board, Karachi',
      score: 'Intermediate',
      period: 'Karachi, Pakistan',
      details: 'General Science & Information Systems foundations.'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Hamdard Public School, Karachi',
      score: 'Grade "A"',
      period: 'Karachi, Pakistan',
      details: 'Academic excellence with high marks in Computer Science and Mathematics.'
    }
  ],

  skillClusters: [
    {
      category: 'Search Engine Optimization',
      description: 'Comprehensive organic visibility, technical site health, and ranking optimization.',
      skills: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO Audits', 'Keyword Research', 'Competitor Gap Analysis', 'Guest Posting & Backlinks', 'SEO Metadata & Schema', 'Content Clustering']
    },
    {
      category: 'Brand Intelligence & Listening',
      description: 'Enterprise reputation monitoring, consumer sentiment analysis, and operational escalation.',
      skills: ['Meltwater Intelligence', 'Brand Reputation Protection', 'Sentiment Analysis', 'Crisis Mitigation', 'Customer Chat Support', 'Escalation Workflows', 'Multi-Platform Monitoring']
    },
    {
      category: 'Social Media & Performance Ads',
      description: 'Paid and organic multi-platform growth, lead funnels, and creative distribution.',
      skills: ['Meta Ads Manager', 'Facebook Lead Ads', 'Instagram Growth & Performance', 'Creative Art Direction', 'Audience Retargeting', 'LinkedIn Optimization', 'Community Engagement']
    },
    {
      category: 'E-Commerce & Website Architecture',
      description: 'Online store catalog optimization, conversion checkout flows, and web development.',
      skills: ['Shopify Store Management', 'WordPress CMS', 'Web Design & Development', 'HTML5 / CSS3 / JavaScript', 'Conversion Rate Optimization', 'Catalog Merchandising']
    },
    {
      category: 'Creative Production & Tools',
      description: 'Graphic design, digital layouts, presentation design, and brand collateral creation.',
      skills: ['Adobe Photoshop', 'Social Post Layouts', 'Digital Ad Design', 'Infographic Design', 'Brand Logo Creation', 'PowerPoint / Keynote Pitch Decks']
    },
    {
      category: 'Enterprise & AI-Assisted Workflows',
      description: 'Cross-functional enterprise tool management and modern AI productivity workflows.',
      skills: ['SAP S/4HANA Workflows', 'Google Analytics / Search Console', 'SEMrush & Yoast', 'AI-Assisted Copywriting', 'AI SERP Research', 'Automated Social Content Workflows']
    }
  ],

  clientLogos: [
    { name: 'K-Electric', category: 'Power Utility' },
    { name: 'Dr. Shaista Lodhi (SL Creative)', category: 'Aesthetics & Skincare' },
    { name: 'Jinnah Builders', category: 'Real Estate' },
    { name: 'Nakoosh', category: 'Fashion Retail' },
    { name: 'Digital Gravity', category: 'Digital Agency' },
    { name: 'Reliable Technical Services (RTS)', category: 'Engineering & Services' },
    { name: 'Denim Crafts', category: 'Apparel Export' },
    { name: 'Capital Health (CHSC)', category: 'Healthcare' },
    { name: 'Tehzeeb NGO', category: 'Social Welfare' },
    { name: 'Parhlo Media', category: 'Digital Publishing' }
  ]
};
