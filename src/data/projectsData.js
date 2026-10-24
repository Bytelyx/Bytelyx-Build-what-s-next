import anara from '../assets/anara.png';
import lawish from '../assets/lawish.png';
import taskpro from '../assets/Taskpro.png';
import catering from '../assets/catering.png';
import ptportal from '../assets/PT-portal.png';

export const projectsData = [
  
{
  id: 'lawish-films',
  name: 'lawish-films',
  type: 'private',

  titleEn: 'Lawish Films Photography',
  categoryEn: 'Portfolio for a Photography and videography',

  descriptionEn: 'A mission-critical enterprise platform built for remittance, money transfer compliance, real-time transaction processing, and auditing across multi-tier regulatory environments.',

  // Cinematic photography background
  bgColor: '#08090D',
  bgLight: '#D6A66A33',

  projectImage: lawish,

  badgesEn: [
    'Photography',
    'Videography',
    'Creative Portfolio'
  ],

  device: 'macbook',
  isSecondBg: false,

  clientLogo: '/images/projects/sahab/sahab-logo.svg',
  heroImage: '/images/projects/sahab/sahab-bg2.avif',

  overviewEn: 'Sahab provides end-to-end automation for financial remittance compliance, anti-money laundering (AML) detection, and automated reporting to central financial authorities.',

  timelineSvg: '/images/projects/sahab/sahab-timeline.svg',

  modules: [
    {
      titleEn: 'Remittance Verification',
      descEn: 'Automated identity and sanction list scanning in milliseconds.',
      image: '/images/projects/sahab/features1.avif'
    },
    {
      titleEn: 'Ledger Synchronization',
      descEn: 'High-speed immutable audit trail connecting banking endpoints.',
      image: '/images/projects/sahab/features2.avif'
    },
    {
      titleEn: 'Compliance Engine',
      descEn: 'Rule-based algorithmic screening for cross-border limits.',
      image: '/images/projects/sahab/features3.avif'
    },
    {
      titleEn: 'Audit Reporting',
      descEn: 'Automated regulatory PDF & XBRL generation with digital signatures.',
      image: '/images/projects/sahab/features4.avif'
    }
  ],

  outcomes: [
    {
      stat: '99.99%',
      labelEn: 'System Uptime'
    },
    {
      stat: '4x',
      labelEn: 'Faster Approvals'
    },
    {
      stat: 'Zero',
      labelEn: 'Compliance Breaches'
    }
  ]
},

  
{
  id: 'takspro',
  name: 'taskpro',
  type: 'private',

  titleEn: 'TaskPro',
  categoryEn: 'Freelance Worker Booking App',

  descriptionEn: 'An intuitive freelance worker booking application connecting customers with skilled professionals through seamless booking, worker management, and real-time service tracking.',

  // Background matched to the blue dashboard image
  bgColor: '#050A18',
  bgLight: '#2855C766',

  projectImage: taskpro,

  badgesEn: [
    'Worker Booking',
    'Freelance Platform',
    'Service Management'
  ],

  device: 'imac',
  isSecondBg: false,

  clientLogo: '/images/projects/dar/darLogo.svg',
  heroImage: '/images/projects/dar/hero.avif',

  overviewEn: 'TaskPro connects customers with freelance workers through an intuitive booking platform, simplifying service discovery, appointment scheduling, and worker management.',

  modules: [
    {
      titleEn: 'Worker Discovery',
      descEn: 'Find and explore available freelance workers by service and location.',
      image: '/images/projects/dar/features-1.avif'
    },
    {
      titleEn: 'Booking Management',
      descEn: 'Manage service bookings, schedules, and customer requests.',
      image: '/images/projects/dar/features-2.avif'
    },
    {
      titleEn: 'Worker Dashboard',
      descEn: 'Help workers manage their bookings and track service activity.',
      image: '/images/projects/dar/features-3.avif'
    }
  ],

  outcomes: [
    {
      stat: 'Easy',
      labelEn: 'Worker Discovery'
    },
    {
      stat: 'Fast',
      labelEn: 'Service Booking'
    },
    {
      stat: 'Simple',
      labelEn: 'Booking Management'
    }
  ]
},

  
{
  id: 'soukariyam-events',
  name: 'soukariyamevents',
  type: 'private',

  titleEn: 'Soukariyam Events',
  categoryEn: 'Catering and Event Management',

  descriptionEn: 'A premium catering and event management platform offering customized event planning, catering services, wedding arrangements, and memorable celebrations.',

  // Background matched to the catering image
  bgColor: '#080D0A',
  bgLight: '#B88A3B44',

  projectImage: catering,

  badgesEn: [
    'Catering Services',
    'Event Management',
    'Wedding Planning'
  ],

  device: 'macbook',
  isSecondBg: false,

  heroImage: '/images/projects/soukariyam/soukariyam-hero.avif',

  overviewEn: 'Soukariyam Events provides catering and event management services for weddings, corporate functions, and special occasions, creating memorable experiences through thoughtful planning and quality service.',

  modules: [
    {
      titleEn: 'Event Planning',
      descEn: 'Organize and manage weddings, celebrations, and corporate events.',
      image: '/images/projects/soukariyam/features1.avif'
    },
    {
      titleEn: 'Catering Services',
      descEn: 'Explore food menus, catering packages, and customized dining experiences.',
      image: '/images/projects/soukariyam/features2.avif'
    },
    {
      titleEn: 'Event Reservations',
      descEn: 'Manage event inquiries, bookings, and customer requirements.',
      image: '/images/projects/soukariyam/features3.avif'
    }
  ],

  outcomes: [
    {
      stat: 'Custom',
      labelEn: 'Event Experiences'
    },
    {
      stat: 'Premium',
      labelEn: 'Catering Services'
    },
    {
      stat: 'Seamless',
      labelEn: 'Event Management'
    }
  ]
},

  {
    id: 'carIsta',
    name: 'carIsta',
    type: 'private',
    titleEn: 'CarIsta',
    categoryEn: 'Car Rental System',
    descriptionEn: 'Comprehensive digital fleet management, customer reservation portal, and IoT vehicle tracking platform engineered for high-volume automotive rental companies.',
    bgColor: '#090C11',
    bgLight: '#848D9366',
    projectImage: '/images/projects/alqudrah.avif',
    badgesEn: ['Fleet IoT', 'Booking Portal', 'Enterprise Resource Planning'],
    device: 'imac',
    isSecondBg: false,
    heroImage: '/images/projects/qudrah/qudrahHero.avif',
    overviewEn: 'Al Qudrah simplifies fleet operations through real-time GPS telemetry, paperless digital rental contracts, maintenance tracking, and dynamic pricing.',
    modules: [
      { titleEn: 'Vehicle Telemetry', descEn: 'Live fuel, odometer, and vehicle health monitoring.', image: '/images/projects/qudrah/Features1.avif' },
      { titleEn: 'Mobile Check-in / Out', descEn: 'Damage inspection with photo capture and e-signature directly on tablet.', image: '/images/projects/qudrah/Features2.avif' },
      { titleEn: 'Automated Billing', descEn: 'Toll road integration, traffic violation matching, and payment deduction.', image: '/images/projects/qudrah/Features3.avif' }
    ],
    outcomes: [
      { stat: '3,000+', labelEn: 'Vehicles Managed'},
      { stat: '75%', labelEn: 'Reduction in Check-in Time'},
      { stat: 'Zero', labelEn: 'Lost Revenue on Tolls'}
    ]
  },
  
{
  id: 'ptportal',
  name: 'ptportal',
  type: 'private',

  titleEn: 'PT Portal',
  categoryEn: 'Personal Trainer App',

  descriptionEn: 'A personal trainer fitness platform for tracking workouts, monitoring progress, managing training plans, and helping users achieve their fitness goals.',

  // Background matched to the fitness dashboard image
  bgColor: '#080E0D',
  bgLight: '#246B493D',

  projectImage: ptportal,

  badgesEn: [
    'Fitness Tracking',
    'Personal Training',
    'Workout Analytics'
  ],

  device: 'mobile',
  isSecondBg: false,

  clientLogo: '/images/projects/dinarak/dinarakLogo.svg',
  heroImage: '/images/projects/dinarak/dinarakHero.avif',

  timelineSvg: '/images/projects/dinarak/dinarakTimeLine.svg',

  overviewEn: 'PT Portal helps users manage workout routines, track fitness progress, monitor training performance, and stay connected with personal trainers through an intuitive fitness application.',

  modules: [
    {
      titleEn: 'Workout Tracking',
      descEn: 'Track exercises, workout sessions, and daily fitness activity.',
      image: '/images/projects/dinarak/image4.avif'
    },
    {
      titleEn: 'Progress Analytics',
      descEn: 'Monitor fitness improvements, performance metrics, and training goals.',
      image: '/images/projects/dinarak/image5.avif'
    },
    {
      titleEn: 'Personal Training',
      descEn: 'Manage training plans, exercise schedules, and trainer interactions.',
      image: '/images/projects/dinarak/image6.avif'
    }
  ],

  outcomes: [
    {
      stat: 'Smart',
      labelEn: 'Workout Tracking'
    },
    {
      stat: 'Live',
      labelEn: 'Progress Monitoring'
    },
    {
      stat: 'Personal',
      labelEn: 'Training Plans'
    }
  ]
},

  
{
  id: 'anara',
  name: 'anaraskillsfoundation',
  type: 'government',
  titleEn: 'Anara Skills Foundation',
  categoryEn: 'Skill Development',
  descriptionEn: 'To identify and bridge the skill gaps of unemployed youth across India, enhancing their employability and positioning our nation as a global',
  
  bgColor: '#080D27',
  bgLight: '#182B65',
  bgImage: '/images/projects/anara/anara-bg.avif',
  projectImage: anara,

  badgesEn: ['Skill Development', 'Education', 'Career Growth'],
  device: 'imac',
  isSecondBg: true,

  clientLogo: '/images/projects/anara/anara-logo.svg',
  heroImage: '/images/projects/anara/anara-hero.avif',

  overviewEn: 'Anara Skills Foundation helps bridge skill gaps and improve employability through skill development and career training.',

  modules: [
    {
      titleEn: 'Skill Assessment',
      descEn: 'Identify skill gaps and evaluate learner capabilities.',
      image: '/images/projects/anara/features1.avif'
    },
    {
      titleEn: 'Learning Programs',
      descEn: 'Structured training programs to develop practical skills.',
      image: '/images/projects/anara/features2.avif'
    },
    {
      titleEn: 'Career Development',
      descEn: 'Support learners in building career-ready skills.',
      image: '/images/projects/anara/features3.avif'
    }
  ],

  outcomes: [
    { stat: 'Skills', labelEn: 'Enhanced Employability' },
    { stat: 'Training', labelEn: 'Career Development' },
    { stat: 'Growth', labelEn: 'Youth Empowerment' }
  ]
},
];