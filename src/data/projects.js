
export const projectsData = [
  {
    id: 'anara-govt-job-portal',
    number: '01',
    title: 'Anara (Karnataka Govt Job Portal)',
    category: 'Enterprise',
    filterCategory: 'Enterprise',
    secondaryCategory: 'Web',
    tagline: 'High-throughput employment gateway, localized job tracking, and civic application engine.',
    description: 'A resilient civic technology portal designed to withstand massive traffic spikes during recruitment windows, with bilingual Kannada/English localization.',
    tags: ['GovTech', 'High Throughput', 'Civic Tech'],
    architecture: ['FastAPI / Python', 'React', 'PostgreSQL', 'ElasticSearch', 'CDN Caching'],
    accentColor: '#38BDF8',
    gradient: 'from-cyan-500/30 via-blue-600/20 to-transparent',
    metrics: [
      { label: 'Peak Concurrency', value: '500K+ Users' },
      { label: 'Search Latency', value: '18ms Index' },
      { label: 'Localization', value: 'Kannada + English' }
    ],
    features: [
      'High-throughput application intake engine capable of handling 50k requests/min',
      'Sub-20ms ElasticSearch index for localized district and category filters',
      'Automated hall ticket and admit card PDF generation pipeline',
      'Civic identity integration with anti-tamper barcode watermarks'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-anara'
  },
  {
    id: 'taskpro-marketplace',
    number: '02',
    title: 'Taskpro (On-Demand Worker Platform)',
    category: 'Enterprise',
    filterCategory: 'Enterprise',
    secondaryCategory: 'AI',
    tagline: 'A three-way marketplace connecting clients, freelancers, and administrators.',
    description: 'A multi-tenant gig marketplace featuring financial escrow workflows, milestone tracking, and intelligent AI-powered task matching.',
    tags: ['Multi-Tenant', 'Escrow Fintech', 'Marketplace', 'AI Matching'],
    architecture: ['Next.js 14', 'Microservices', 'Escrow Smart Logic', 'Tailwind', 'Stripe Connect'],
    accentColor: '#38BDF8',
    gradient: 'from-blue-600/30 via-indigo-500/20 to-transparent',
    metrics: [
      { label: 'Tenant Modes', value: 'Client / Worker / Admin' },
      { label: 'Escrow Security', value: 'Escrow Workflow' },
      { label: 'Match Accuracy', value: 'AI Scored' }
    ],
    features: [
      'Three dedicated interfaces customized for Clients, Freelancers, and Super Admins',
      'Automated milestone escrow release tied to deliverable review deadlines',
      'AI-driven skill matching algorithm pairing job specs to contractor portfolios',
      'Dispute resolution audit room with tamper-proof messaging records'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-taskpro'
  },
  {
    id: 'pt-portal-os',
    number: '03',
    title: 'PT Portal (Personal Trainer & Client OS)',
    category: 'Mobile',
    filterCategory: 'Mobile',
    secondaryCategory: 'Web',
    tagline: 'Real-time progress trackers, client regimen management, and automated booking.',
    description: 'A mobile-first health and performance operating system connecting fitness coaches with clients through dynamic regimen charts and one-tap bookings.',
    tags: ['Fitness Tech', 'Mobile OS', 'Real-Time Sync'],
    architecture: ['React Native', 'GraphQL', 'Supabase', 'Chart.js', 'Push Engine'],
    accentColor: '#38BDF8',
    gradient: 'from-cyan-500/30 via-blue-600/20 to-transparent',
    metrics: [
      { label: 'Daily Engagement', value: '84% Retention' },
      { label: 'Sync Speed', value: '< 15ms Supabase' },
      { label: 'Platform', value: 'iOS & Android' }
    ],
    features: [
      'Interactive body composition and progressive overload trajectory charts',
      'Custom exercise and macro regimen builder with video guide embeds',
      'One-tap calendar rescheduling with trainer slot synchronization',
      'Real-time trainer chat with voice memos and workout video feedback'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-pt-portal'
  },
  {
    id: 'lawish-films',
    number: '04',
    title: 'Lawish Films (Cinematic Showcase)',
    category: 'Web',
    filterCategory: 'Web',
    secondaryCategory: 'AI',
    tagline: 'A cinematic digital showcase crafted for premium visual storytelling.',
    description: 'A visually immersive creative portfolio featuring full-bleed visuals, cinematic transitions, and secure client media delivery.',
    tags: ['Creative Studio', 'WebGL Cinema', 'High Performance'],
    architecture: ['React', 'GSAP / WebGL', 'Cloudinary CDN', 'HLS Video Streaming', 'Tailwind'],
    accentColor: '#60A5FA',
    gradient: 'from-blue-600/30 via-sky-500/20 to-transparent',
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Video Quality', value: '4K HLS 60fps' },
      { label: 'Media Vault', value: 'Encrypted Delivery' }
    ],
    features: [
      'Adaptive bitrate 4K video canvas with cinematic audio controls',
      'Interactive reel showcase with magnetic cursor physics and frame scrubbing',
      'Private client delivery vaults with password protection and batch asset download',
      'Sub-second page transitions powered by GSAP FLIP choreography'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-lawish'
  },
  {
    id: 'soukariyam-catering-events',
    number: '05',
    title: 'Soukariyam (Catering & Event OS)',
    category: 'Web',
    filterCategory: 'Web',
    secondaryCategory: 'Mobile',
    tagline: 'Multi-tier booking, bespoke menu builder, and vendor event workflow.',
    description: 'A comprehensive banquet and hospitality management engine featuring real-time menu recipe costing, vendor checklist workflows, and client quote generation.',
    tags: ['Hospitality', 'Dynamic Pricing', 'Vendor Engine'],
    architecture: ['React Native / Web', 'Node.js', 'MongoDB', 'Dynamic Pricing Engine', 'Tailwind'],
    accentColor: '#818CF8',
    gradient: 'from-indigo-600/30 via-blue-500/20 to-transparent',
    metrics: [
      { label: 'Quote Velocity', value: '3x Faster' },
      { label: 'Menu Catalog', value: '400+ Dishes' },
      { label: 'Event Capacity', value: '10K+ Guests' }
    ],
    features: [
      'Interactive visual menu builder with per-plate real-time margin calculations',
      'Multi-tier venue calendar tracking simultaneous banquet bookings',
      'Live vendor task assignments with automated day-of-event push alerts',
      'Milestone payment scheduler with automated deposit receipts'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-soukariyam'
  },
  {
    id: 'solmare-jewellery',
    number: '06',
    title: 'Solmare (Jewellery E-commerce)',
    category: 'Web',
    filterCategory: 'Web',
    secondaryCategory: 'E-commerce',
    tagline: 'Where timeless elegance meets a seamless digital shopping experience.',
    description: 'A premium jewellery e-commerce experience designed to showcase exquisite collections through elegant product storytelling, refined visuals, and a seamless online shopping journey.',
    tags: ['E-commerce', 'Luxury Branding', 'Online Shopping'],
    architecture: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Payment Integration'],
    accentColor: '#263B2D',
    gradient: 'from-amber-500/30 via-yellow-600/20 to-transparent',
    metrics: [
      { label: 'Store Experience', value: 'Premium UI' },
      { label: 'Shopping', value: 'Seamless Checkout' },
      { label: 'Platform', value: 'Responsive Web' }
    ],
    features: [
      'Elegant jewellery collection and category browsing',
      'Detailed product pages with high-quality product imagery',
      'Shopping cart and streamlined checkout experience',
      'Responsive luxury storefront optimized for desktop and mobile'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-solmare'
  }
];

export const projectFilterCategories = [
  { id: 'All', label: 'All Projects', count: 6 },
  { id: 'Web', label: 'Web Development', count: 4 },
  { id: 'Mobile', label: 'Mobile Apps', count: 1 },
  { id: 'Enterprise', label: 'Enterprise Systems', count: 2 },
  { id: 'AI', label: 'AI & Intelligent', count: 2 }
];
