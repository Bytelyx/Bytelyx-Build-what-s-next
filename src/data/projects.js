export const projectsData = [
  {
    id: 'car-rental-platform',
    number: '01',
    title: 'Car Rental Platform',
    category: 'Web',
    filterCategory: 'Web',
    secondaryCategory: 'Enterprise',
    tagline: 'Seamless vehicle discovery, booking pipeline, and real-time fleet telemetry.',
    description: 'An enterprise-scale mobility platform providing end-to-end car discovery, booking state machines, and real-time GPS telemetry for fleet operators.',
    tags: ['Full-Stack', 'Fleet Telemetry', 'Cloud Native'],
    architecture: ['Next.js 14', 'PostgreSQL', 'Redis Telemetry', 'Tailwind CSS', 'Stripe Connect'],
    accentColor: '#38BDF8',
    gradient: 'from-blue-600/30 via-cyan-500/20 to-transparent',
    metrics: [
      { label: 'Booking Latency', value: '< 240ms' },
      { label: 'Telemetry Sync', value: 'Real-Time GPS' },
      { label: 'Fleet Scale', value: '1,500+ Vehicles' }
    ],
    features: [
      'Instant vehicle catalog with multi-variant faceted filter',
      'Telemetry ingestion pipe with live vehicle status & battery/fuel level',
      'Automated KYC driver license validation engine',
      'Zero-friction reservation pipeline with integrated digital contract signing'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-car-rental'
  },
  {
    id: 'dr-appointment-booking',
    number: '02',
    title: 'Dr. Appointment Booking',
    category: 'Enterprise',
    filterCategory: 'Enterprise',
    secondaryCategory: 'Web',
    tagline: 'HIPAA-compliant patient management, tele-consultation, and doctor slot scheduler.',
    description: 'A clinical-grade healthcare hub featuring encrypted WebRTC video consultation, automated doctor slot coordination, and digital prescription dispatch.',
    tags: ['Healthcare', 'Tele-Health', 'HIPAA Compliant'],
    architecture: ['React', 'WebRTC', 'Node.js / Express', 'Socket.io', 'HIPAA Cloud'],
    accentColor: '#60A5FA',
    gradient: 'from-blue-500/30 via-indigo-500/20 to-transparent',
    metrics: [
      { label: 'Security Grade', value: 'HIPAA-Ready' },
      { label: 'Video Latency', value: '< 80ms WebRTC' },
      { label: 'Doctor Capacity', value: '450+ Clinics' }
    ],
    features: [
      'Encrypted end-to-end tele-consultation rooms with screen sharing',
      'Dynamic multi-doctor availability matrix with instant conflict avoidance',
      'Electronic Health Records (EHR) timeline with digital signature',
      'Automated reminder dispatch via WhatsApp, SMS, and Calendar push'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-dr-booking'
  },
  {
    id: 'anara-govt-job-portal',
    number: '03',
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
    id: 'soukariyam-catering-events',
    number: '04',
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
    id: 'lawish-films',
    number: '05',
    title: 'Lawish Films (Cinematic Showcase)',
    category: 'Web',
    filterCategory: 'Web',
    secondaryCategory: 'AI',
    tagline: 'Cinematic full-bleed visual portfolio with custom asset delivery workflows.',
    description: 'A visually arresting, Awwwards-style creative portfolio tailored for premier cinematographers with custom WebGL transitions and secure client media delivery.',
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
    id: 'pt-portal-os',
    number: '06',
    title: 'PT Portal (Personal Trainer & Client OS)',
    category: 'Mobile',
    filterCategory: 'Mobile',
    secondaryCategory: 'Web',
    tagline: 'Real-time progress trackers, client regimen management, and automated booking.',
    description: 'A mobile-first health and performance operating system connecting elite fitness coaches with clients through dynamic regimen charts and 1-tap bookings.',
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
      'Interactive body composition & progressive overload trajectory charts',
      'Custom exercise & macro regimen builder with video guide embeds',
      'One-tap calendar rescheduling with trainer slot synchronization',
      'Real-time trainer chat with voice memos and workout video feedback'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-pt-portal'
  },
  {
    id: 'taskpro-marketplace',
    number: '07',
    title: 'Taskpro (On-Demand Worker Platform)',
    category: 'Enterprise',
    filterCategory: 'Enterprise',
    secondaryCategory: 'AI',
    tagline: '3-way multi-tenant ecosystem (Client, Freelance Worker, Admin) with escrow and milestone tracking.',
    description: 'A high-integrity gig marketplace platform engineered with financial escrow contracts, milestone releases, and intelligent AI task matching.',
    tags: ['Multi-Tenant', 'Escrow Fintech', 'Marketplace', 'AI Matching'],
    architecture: ['Next.js 14', 'Microservices', 'Escrow Smart Logic', 'Tailwind', 'Stripe Connect'],
    accentColor: '#38BDF8',
    gradient: 'from-blue-600/30 via-indigo-500/20 to-transparent',
    metrics: [
      { label: 'Tenant Modes', value: 'Client / Worker / Admin' },
      { label: 'Escrow Security', value: '100% Guaranteed' },
      { label: 'Match Accuracy', value: '94% AI Scored' }
    ],
    features: [
      'Three dedicated interfaces customized for Clients, Freelancers, and Super Admins',
      'Automated milestone escrow release tied to deliverable review deadlines',
      'AI-driven skill matching algorithm pairing job specs to contractor portfolios',
      'Dispute resolution audit room with tamper-proof messaging records'
    ],
    githubUrl: 'https://github.com/bytelyx',
    demoUrl: '#demo-taskpro'
  }
];

export const projectFilterCategories = [
  { id: 'All', label: 'All Projects', count: 7 },
  { id: 'Web', label: 'Web Development', count: 5 },
  { id: 'Mobile', label: 'Mobile Apps', count: 2 },
  { id: 'Enterprise', label: 'Enterprise Systems', count: 4 },
  { id: 'AI', label: 'AI & Intelligent', count: 2 }
];
