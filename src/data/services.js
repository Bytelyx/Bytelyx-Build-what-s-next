export const servicesData = [
  {
    id: 'custom-software-development',
    number: '01',
    title: 'Custom Software Development',
    tagline: 'Tailored digital solutions engineered for complex business logic and high throughput.',
    description: 'We architect and build bespoke software systems engineered from the ground up to solve complex operational challenges, optimize internal workflows, and scale effortlessly with business growth.',
    technologies: ['TypeScript', 'Node.js', 'Python / FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis'],
    capabilities: [
      'Bespoke software architecture engineered for proprietary workflows',
      'Microservices infrastructure with decoupled, resilient services',
      'Fault-tolerant data processing pipelines and event-driven backends',
      'Extensive automated testing, continuous integration, and clean code governance'
    ],
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    accentColor: '#863bff',
    iconName: 'Code2',
    stats: 'Enterprise Scalability'
  },
  {
    id: 'web-application-development',
    number: '02',
    title: 'Web Application Development',
    tagline: 'Modern, high-performance web applications with instantaneous sub-80ms response times.',
    description: 'We develop modern web platforms utilizing cutting-edge frontend frameworks and distributed edge runtimes to deliver exceptional speed, search visibility, and flawless user experiences across all devices.',
    technologies: ['React 19', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'RESTful APIs', 'Vercel / AWS'],
    capabilities: [
      'Server-side rendered and static web applications with edge acceleration',
      'Real-time collaborative interfaces and WebSockets telemetry',
      'Complex dashboard portals, data visualizations, and administrative suites',
      'Rigorous Web Vitals optimization and accessibility compliance (WCAG 2.1)'
    ],
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    accentColor: '#47bfff',
    iconName: 'Layout',
    stats: 'Sub-80ms Edge Speed'
  },
  {
    id: 'mobile-app-development',
    number: '03',
    title: 'Mobile Application Development',
    tagline: 'Cross-platform iOS and Android applications with 60fps native touch mechanics.',
    description: 'We engineer intuitive mobile experiences that combine native performance, fluid gesture ergonomics, and offline-first data synchronization across iOS and Android ecosystems.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo EAS', 'GraphQL', 'SQLite'],
    capabilities: [
      'Unified cross-platform codebases delivering 60fps native touch fluidity',
      'Offline-first architecture with automatic background synchronization',
      'Biometric authentication, camera telemetry, and hardware integrations',
      'Automated App Store and Google Play deployment pipelines'
    ],
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    accentColor: '#7e14ff',
    iconName: 'Smartphone',
    stats: '60fps Native Feel'
  },
  {
    id: 'ui-ux-design',
    number: '04',
    title: 'UI/UX Design',
    tagline: 'Design systems, interactive prototypes, and human-centered digital experiences.',
    description: 'We merge cognitive ergonomics, brand narrative, and clean visual typography to craft digital interfaces that make complex enterprise workflows intuitive, effortless, and memorable.',
    technologies: ['Figma', 'Design Systems', 'Interactive Prototyping', 'Design Tokens', 'User Research', 'Micro-Interactions'],
    capabilities: [
      'Comprehensive user journey mapping and low-to-high fidelity wireframing',
      'Tokenized design systems built for scalable multi-team engineering',
      'Interactive motion prototypes with precise developer specification',
      'Usability testing, accessibility audits, and cognitive load reduction'
    ],
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    accentColor: '#863bff',
    iconName: 'Palette',
    stats: 'Award-Grade Systems'
  },
  {
    id: 'ai-automation-solutions',
    number: '05',
    title: 'AI & Automation Solutions',
    tagline: 'LLM integrations, autonomous AI agents, and intelligent workflow automation.',
    description: 'We implement practical artificial intelligence and automation into existing business operations, deploying autonomous agents and retrieval-augmented systems to eliminate repetitive manual overhead.',
    technologies: ['OpenAI / Anthropic APIs', 'LangChain', 'LlamaIndex', 'Vector DBs (Pinecone)', 'Python', 'PyTorch'],
    capabilities: [
      'Autonomous multi-agent workflows executing complex business logic',
      'Enterprise RAG pipelines with private semantic search embeddings',
      'Automated data extraction, document classification, and summary generation',
      'Predictive analytics and anomaly detection models'
    ],
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    accentColor: '#47bfff',
    iconName: 'Cpu',
    stats: 'Autonomous Workflows'
  },
  {
    id: 'cloud-solutions-api-integration',
    number: '06',
    title: 'Cloud Solutions & API Integration',
    tagline: 'Scalable cloud infrastructure, third-party integrations, and microservices.',
    description: 'We design and manage resilient cloud environments and secure API gateways, ensuring seamless communication between third-party SaaS services, databases, and core application servers.',
    technologies: ['AWS / GCP', 'Docker', 'Kubernetes', 'Terraform', 'GraphQL', 'REST Gateways', 'Kafka'],
    capabilities: [
      'Infrastructure as Code (IaC) with automated multi-environment provisioning',
      'High-throughput API gateway development and rate-limited integrations',
      'Zero-downtime CI/CD deployment pipelines and automated rollbacks',
      'Comprehensive distributed logging, APM telemetry, and cloud cost optimization'
    ],
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    accentColor: '#863bff',
    iconName: 'Cloud',
    stats: '99.98% High Availability'
  },
  {
    id: 'enterprise-software-solutions',
    number: '07',
    title: 'Enterprise Software Solutions',
    tagline: 'Secure, compliant, and multi-tenant architectures for growing organizations.',
    description: 'We deliver enterprise-grade digital systems equipped with strict role-based access control, comprehensive compliance posture (SOC2, HIPAA, GDPR), and multi-tenant isolation.',
    technologies: ['Enterprise Java / Node', 'PostgreSQL', 'Redis', 'OAuth2 / SAML SSO', 'Vault', 'Audit Pipelines'],
    capabilities: [
      'Multi-tenant data partitioning with tenant-level encryption keys',
      'Single Sign-On (SAML 2.0 / OIDC) and granular RBAC authorization rules',
      'Immutable audit logging and regulatory compliance hardening',
      'High-availability database clustering and automated disaster recovery'
    ],
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    accentColor: '#7e14ff',
    iconName: 'ShieldCheck',
    stats: 'SOC2 & HIPAA Ready'
  },
  {
    id: 'software-maintenance-support',
    number: '08',
    title: 'Software Maintenance & Support',
    tagline: 'Continuous monitoring, performance tuning, security patches, and SLA support.',
    description: 'We provide ongoing technical stewardship for mission-critical software, conducting proactive dependency upgrades, security audits, performance profiling, and guaranteed uptime response.',
    technologies: ['24/7 Monitoring', 'Datadog / Prometheus', 'Security Patching', 'Code Audits', 'Sentry', 'Telemetry'],
    capabilities: [
      'Proactive security vulnerability scanning and continuous patching',
      'Application performance profiling and database query optimization',
      '24/7 automated uptime telemetry and rapid incident triage',
      'Scheduled architectural reviews and long-term technical debt prevention'
    ],
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    accentColor: '#47bfff',
    iconName: 'Wrench',
    stats: 'Dedicated Stewardship'
  }
];
