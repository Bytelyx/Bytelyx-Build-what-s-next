import anara from '../assets/anara.png';
import taskpro from '../assets/Taskpro.jpeg';
import ptportal from '../assets/PT-portal.png';
import lawish from '../assets/lawish.png';
import catering from '../assets/catering.png';
import solmare from '../assets/solmare.png';

import anaraHero from '../assets/project-overview/anara.png';
import taskproHero from '../assets/project-overview/taskpro.png';
import ptportalHero from '../assets/project-overview/pt-portal.png';
import lawishHero from '../assets/project-overview/lawish.png';
import soukaryamHero from '../assets/project-overview/soukaryam.png';
import solmareHero from '../assets/project-overview/solmare.png';

export const projectsData = [
  // 01 — ANARA
  {
    id: 'anara-govt-job-portal',
    name: 'anara',
    type: 'government',

    titleEn: 'Anara - Karnataka Govt Job Portal',
    categoryEn: 'Government Job Portal',
    clientEn: 'ANARA',
    liveLink: 'https://www.anaraskills.org/',
    timelineEn: '3 Months',
    yearEn: '2025',
    accentColor: '#F3D999',

    descriptionEn:
      'A government employment portal designed to help candidates discover Karnataka government job opportunities, explore recruitment information, and track application updates.',

    bgColor: '#100D09',
    bgLight: '#D4AF7244',

    projectImage: anara,
    heroImage: anaraHero,
    heroGlowColor: 'rgba(243, 217, 153, 0.36)',
    heroLineColor: '#F3D999',

    badgesEn: ['GovTech', 'Government Jobs', 'Career Portal'],

    device: 'imac',
    isSecondBg: true,

    overviewEn:
      'Anara provides a centralized platform for Karnataka government job opportunities, helping candidates discover vacancies and access recruitment-related information.',

    modules: [
      {
        titleEn: 'Job Discovery',
        descEn:
          'Explore government job opportunities and recruitment notifications in one place.',
      },
      {
        titleEn: 'Advanced Job Search',
        descEn:
          'Find opportunities using district, category, and recruitment-related filters.',
      },
      {
        titleEn: 'Application Information',
        descEn:
          'Access recruitment details, eligibility information, and application updates.',
      },
      {
        titleEn: 'Kannada and English',
        descEn:
          'Access localized information through Kannada and English language support.',
      },
    ],

    outcomes: [
      {
        stat: 'Centralized',
        labelEn: 'Job Discovery',
        descEn:
          'Centralized access to official Karnataka government recruitment notifications and updates.',
      },
      {
        stat: 'Bilingual',
        labelEn: 'Language Support',
        descEn:
          'Accessible across both Kannada and English interfaces for candidates statewide.',
      },
      {
        stat: 'Accessible',
        labelEn: 'Recruitment Information',
        descEn:
          'Fast district and category filtering with clear eligibility and application workflows.',
      },
      {
        stat: 'Reliable',
        labelEn: 'High Availability',
        descEn:
          'Engineered to stay responsive during peak recruitment surges.',
      },
    ],
  },

  // 02 — TASKPRO
  {
    id: 'taskpro-marketplace',
    name: 'taskpro',
    type: 'private',

    titleEn: 'Taskpro',
    categoryEn: 'On-Demand Worker Platform',
    clientEn: 'TASKPRO',
    liveLink: 'https://www.amazon.com/abhinraj-Taskpro/dp/B0DFWZY8GT',
    timelineEn: '3 Months',
    yearEn: '2024',
    accentColor: '#5ED436',

    descriptionEn:
      'An on-demand worker marketplace connecting customers with skilled professionals through service discovery, booking management, and worker coordination.',

    bgColor: '#050A18',
    bgLight: '#2855C766',

    projectImage: taskpro,
    heroImage: taskproHero,
    heroGlowColor: 'rgba(14, 165, 233, 0.40)',
    heroLineColor: '#38BDF8',

    badgesEn: [
      'Worker Booking',
      'Freelance Marketplace',
      'Service Management',
    ],

    device: 'imac',
    isSecondBg: false,

    overviewEn:
      'Taskpro connects customers, freelance workers, and administrators through a marketplace designed to simplify service discovery, booking, and worker management.',

    modules: [
      {
        titleEn: 'Client Dashboard',
        descEn:
          'Discover services, submit requests, and manage worker bookings.',
      },
      {
        titleEn: 'Worker Dashboard',
        descEn:
          'Allow workers to manage service requests, bookings, and their work activity.',
      },
      {
        titleEn: 'Admin Management',
        descEn:
          'Provide administrative tools to oversee platform activity and marketplace operations.',
      },
      {
        titleEn: 'Task Matching',
        descEn:
          'Support matching customer requirements with suitable worker skills.',
      },
    ],

    outcomes: [
      {
        stat: '3 Roles',
        labelEn: 'Connected Interfaces',
        descEn:
          'Dedicated client, worker, and admin dashboards operating in real time.',
      },
      {
        stat: 'Smart',
        labelEn: 'Worker Matching',
        descEn:
          'Pairs customer job specifications with verified worker availability and skills.',
      },
      {
        stat: 'Unified',
        labelEn: 'Booking Management',
        descEn:
          'Streamlined scheduling, status tracking, and completion workflows.',
      },
      {
        stat: 'Scalable',
        labelEn: 'Service Marketplace',
        descEn:
          'Built to scale seamlessly across multiple service categories and locations.',
      },
    ],
  },

  // 03 — PT PORTAL
  {
    id: 'pt-portal-os',
    name: 'ptportal',
    type: 'private',

    titleEn: 'PT Portal',
    categoryEn: 'Personal Trainer & Client Platform',
    clientEn: 'PT PORTAL',
    timelineEn: '2 Months',
    liveLink: 'https://www.amazon.com/abhinraj-PT-Portal/dp/B0CW1B2Q8M',
    yearEn: '2024',
    accentColor: '#5ED436',

    descriptionEn:
      'A fitness platform connecting personal trainers and clients through workout management, progress tracking, training plans, and performance monitoring.',

    bgColor: '#080E0D',
    bgLight: '#246B493D',

    projectImage: ptportal,
    heroImage: ptportalHero,
    heroGlowColor: 'rgba(34, 197, 94, 0.38)',
    heroLineColor: '#22C55E',

    badgesEn: [
      'Fitness Tracking',
      'Personal Training',
      'Workout Management',
    ],

    device: 'imac',
    isSecondBg: false,

    overviewEn:
      'PT Portal helps personal trainers manage clients and training programs while allowing users to monitor workouts, track fitness progress, and stay focused on their goals.',

    modules: [
      {
        titleEn: 'Workout Tracking',
        descEn:
          'Track exercises, workout sessions, and daily fitness activity.',
      },
      {
        titleEn: 'Progress Analytics',
        descEn:
          'Monitor fitness improvements, performance metrics, and training goals.',
      },
      {
        titleEn: 'Training Plans',
        descEn:
          'Create and manage personalized workout routines and exercise schedules.',
      },
      {
        titleEn: 'Trainer Management',
        descEn:
          'Connect trainers and clients through organized training and progress management.',
      },
    ],

    outcomes: [
      {
        stat: 'Smart',
        labelEn: 'Workout Tracking',
        descEn:
          'Structured exercise logs and daily session tracking for clients.',
      },
      {
        stat: 'Live',
        labelEn: 'Progress Monitoring',
        descEn:
          'Real-time visibility into strength gains, consistency, and milestones.',
      },
      {
        stat: 'Personal',
        labelEn: 'Training Plans',
        descEn:
          'Tailored routines assigned and updated effortlessly by coaches.',
      },
      {
        stat: 'Connected',
        labelEn: 'Coach-Client Sync',
        descEn:
          'Keeps trainers and clients aligned across every training cycle.',
      },
    ],
  },

  // 04 — LAWISH FILMS
  {
    id: 'lawish-films',
    name: 'lawish-films',
    type: 'private',

    titleEn: 'Lawish Films',
    categoryEn: 'Photography and Videography Portfolio',
    clientEn: 'LAWISH FILMS',
    timelineEn: '2 Months',
    yearEn: '2026',
    accentColor: '#5ED436',

    descriptionEn:
      'A cinematic creative portfolio designed to showcase photography, videography, and visual storytelling through an immersive digital experience.',

    bgColor: '#08090D',
    bgLight: '#D6A66A33',

    projectImage: lawish,
    heroImage: lawishHero,
    heroGlowColor: 'rgba(245, 158, 11, 0.36)',
    heroLineColor: '#F59E0B',

    badgesEn: ['Photography', 'Videography', 'Creative Portfolio'],

    device: 'imac',
    isSecondBg: false,

    overviewEn:
      'Lawish Films presents creative photography and videography work through a visually immersive portfolio experience focused on cinematic presentation and storytelling.',

    modules: [
      {
        titleEn: 'Cinematic Showcase',
        descEn:
          'Present photography and video projects through immersive visual layouts.',
      },
      {
        titleEn: 'Portfolio Gallery',
        descEn:
          'Organize creative work into an engaging portfolio experience.',
      },
      {
        titleEn: 'Video Presentation',
        descEn:
          'Showcase cinematic video content with an emphasis on visual quality.',
      },
      {
        titleEn: 'Creative Storytelling',
        descEn:
          'Build a distinctive digital presence around photography and filmmaking.',
      },
    ],

    outcomes: [
      {
        stat: 'Cinematic',
        labelEn: 'Visual Experience',
        descEn:
          'High-impact full-bleed visuals tailored for film and photography.',
      },
      {
        stat: 'Premium',
        labelEn: 'Portfolio Presentation',
        descEn:
          'Refined editorial layouts highlighting every shoot and frame.',
      },
      {
        stat: 'Creative',
        labelEn: 'Brand Storytelling',
        descEn:
          'Distinctive digital identity elevating client inquiries and bookings.',
      },
      {
        stat: 'Fast',
        labelEn: 'Media Delivery',
        descEn:
          'Optimized media loading across desktop and mobile displays.',
      },
    ],
  },

  // 05 — SOUKARIYAM
  {
    id: 'soukariyam-catering-events',
    name: 'soukariyam',
    type: 'private',

    titleEn: 'Soukariyam Events',
    categoryEn: 'Catering and Event Management',
    clientEn: 'SOUKARIYAM',
    timelineEn: '2 Months',
    yearEn: '2026',
    accentColor: '#5ED436',

    descriptionEn:
      'A catering and event management platform designed to present catering services, customized menus, wedding arrangements, and event planning solutions.',

    bgColor: '#080D0A',
    bgLight: '#B88A3B44',

    projectImage: catering,
    heroImage: soukaryamHero,
    heroGlowColor: 'rgba(230, 195, 122, 0.36)',
    heroLineColor: '#E6C37A',

    badgesEn: [
      'Catering Services',
      'Event Management',
      'Wedding Planning',
    ],

    device: 'imac',
    isSecondBg: false,

    overviewEn:
      'Soukariyam Events brings catering and event planning services together, helping customers explore menus, plan occasions, and make event-related inquiries.',

    modules: [
      {
        titleEn: 'Event Planning',
        descEn:
          'Organize weddings, celebrations, and corporate events.',
      },
      {
        titleEn: 'Catering Services',
        descEn:
          'Explore catering menus, food options, and customized dining experiences.',
      },
      {
        titleEn: 'Menu Management',
        descEn:
          'Present food selections and catering packages for different occasions.',
      },
      {
        titleEn: 'Event Reservations',
        descEn:
          'Manage event inquiries, booking requests, and customer requirements.',
      },
    ],

    outcomes: [
      {
        stat: 'Custom',
        labelEn: 'Event Experiences',
        descEn:
          'Bespoke menu and event configurations for weddings and celebrations.',
      },
      {
        stat: 'Premium',
        labelEn: 'Catering Services',
        descEn:
          'Clear showcase of culinary offerings and hospitality packages.',
      },
      {
        stat: 'Seamless',
        labelEn: 'Event Management',
        descEn:
          'Simplified inquiry and booking coordination for clients and teams.',
      },
      {
        stat: 'Responsive',
        labelEn: 'Cross-Device Access',
        descEn:
          'Smooth browsing and reservation experience on any screen size.',
      },
    ],
  },

  // 06 — SOLMARE
  {
    id: 'solmare-jewellery',
    name: 'solmare',
    type: 'private',

    titleEn: 'Solmare',
    categoryEn: 'Jewellery E-commerce Website',
    clientEn: 'SOLMARE',
    timelineEn: '2 Months',
    yearEn: '2026',
    accentColor: '#5ED436',

    descriptionEn:
      'A premium jewellery e-commerce website designed to showcase collections through elegant product presentation and a seamless online shopping experience.',

    bgColor: '#100D09',
    bgLight: '#D4AF7244',

    projectImage: solmare,
    heroImage: solmareHero,
    heroGlowColor: 'rgba(243, 217, 153, 0.36)',
    heroLineColor: '#F3D999',

    badgesEn: ['Jewellery', 'E-commerce', 'Luxury Branding'],

    device: 'imac',
    isSecondBg: false,

    overviewEn:
      'Solmare delivers a premium digital shopping experience for jewellery collections, combining refined visual presentation with product discovery and online shopping.',

    modules: [
      {
        titleEn: 'Jewellery Collections',
        descEn:
          'Explore jewellery collections through an elegant product browsing experience.',
      },
      {
        titleEn: 'Product Details',
        descEn:
          'Present jewellery products with detailed information and product imagery.',
      },
      {
        titleEn: 'Shopping Experience',
        descEn:
          'Support customers throughout their online product selection and shopping journey.',
      },
      {
        titleEn: 'Responsive Storefront',
        descEn:
          'Deliver a consistent shopping experience across desktop and mobile devices.',
      },
    ],

    outcomes: [
      {
        stat: 'Premium',
        labelEn: 'Store Experience',
        descEn:
          'Luxury aesthetic tailored to fine jewellery presentation.',
      },
      {
        stat: 'Elegant',
        labelEn: 'Product Presentation',
        descEn:
          'High-clarity product photography and detailed specification views.',
      },
      {
        stat: 'Responsive',
        labelEn: 'Shopping Experience',
        descEn:
          'Consistent, effortless checkout flow across desktop and mobile.',
      },
      {
        stat: 'Fast',
        labelEn: 'Catalog Browsing',
        descEn:
          'Instant collection filtering and smooth page transitions.',
      },
    ],
  },
];