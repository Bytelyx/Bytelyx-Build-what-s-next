import React, { useState } from 'react';
import { SpecialCard } from '../components/SpecialCard';
import { OurPartners } from '../components/OurPartners';
import { ReadyToStart } from '../components/ReadyToStart';
import { Check } from 'lucide-react';

export function Process() {
  const [activePhase, setActivePhase] = useState('A1');

  const tools = [
    { name: 'Gmail', src: '/images/process/Gmail.svg' },
    { name: 'Teams', src: '/images/process/Teams.svg' },
    { name: 'WhatsApp', src: '/images/process/Whatsapp.svg' },
    { name: 'Figma', src: '/images/process/Figma.svg' },
    { name: 'GitHub', src: '/images/process/Github.svg' },
    { name: 'Discord', src: '/images/process/Discord.svg' },
    { name: 'Google Meet', src: '/images/process/GoogleMeet.svg' },
    { name: 'Zoom', src: '/images/process/Zoom.svg' },
  ];

  const phaseSteps = [
    { id: 'A1', phase: 'A', code: 'A1', title: 'Specifications & Planning' },
    { id: 'A2', phase: 'A', code: 'A2', title: 'Designs, Wireframe & Prototype' },
    { id: 'A3', phase: 'A', code: 'A3', title: 'Estimates & Timeline' },
    { id: 'B1', phase: 'B', code: 'B1', title: 'Build' },
    { id: 'B2', phase: 'B', code: 'B2', title: 'Test' },
    { id: 'B3', phase: 'B', code: 'B3', title: 'Deploy' },
    { id: 'B4', phase: 'B', code: 'B4', title: 'Measure' },
    { id: 'B5', phase: 'B', code: 'B5', title: 'Maintain' },
  ];

  const phaseDetails = {
    A1: {
      title: 'Specifications & Planning',
      paragraph: 'We begin with an in-depth discovery process aimed at defining the full scope of the project. This includes understanding your users, business objectives, and functional requirements. Our team collaborates closely with stakeholders to ensure no detail is overlooked. We identify what problems the product solves, how users will interact with it, and what success looks like. From this, we produce a detailed specifications document and roadmap that drives the entire project forward with clarity and purpose.',
      subtitle: 'What we do:',
      items: [
        'Facilitate discovery workshops to capture all business & functional needs',
        'Define user personas, user journeys, and core functionalities',
        'Recommend optimal technology stack and cloud system architecture',
        'Prioritize features using the 80/20 principle for value-first delivery',
        'Plan for future scalability, integrations, and third-party dependencies',
      ],
      outcome: 'Outcome: A clearly defined technical and functional foundation',
      tools: ['Notion', 'Miro', 'Jira', 'Confluence'],
    },
    A2: {
      title: 'Designs, Wireframe & Prototype',
      paragraph: 'After defining scope, we move into a highly visual phase where ideas become tangible. Our UI/UX designers build user flows and wireframes that outline how users interact with your product. These evolve into high-fidelity prototypes that look and behave like the real application. This step is critical for validating user experience and aligning stakeholders before development begins.',
      subtitle: 'What we create:',
      items: [
        'Low-fidelity wireframes for layout and structural hierarchy',
        'User journey maps to guide smooth navigation and interaction flow',
        'High-fidelity clickable prototypes simulating the final product',
        'Interactive component design system for unified cross-platform branding',
      ],
      outcome: 'Outcome: Validated, interactive prototypes and design system',
      tools: ['Figma', 'Adobe XD', 'Illustrator', 'Principle'],
    },
    A3: {
      title: 'Estimates & Timeline',
      paragraph: 'With approved designs and complete specifications, we construct a granular sprint roadmap. We break down the product backlog into two-week milestones, allocate specialized engineering resources, define test suites, and outline risk-mitigation contingencies.',
      subtitle: 'Sprint planning:',
      items: [
        'Granular story estimation and resource allocation',
        'Two-week agile sprint schedules and release milestones',
        'Risk assessment, security audit planning, and third-party SLA buffers',
        'Transparent budget breakdown and clear project sign-offs',
      ],
      outcome: 'Outcome: Predictable delivery roadmap with guaranteed momentum',
      tools: ['Linear', 'Jira', 'GitHub Projects', 'Slack'],
    },
    B1: {
      title: 'Build',
      paragraph: 'Our engineers transform designs and architectures into clean, robust, production-ready code. Following test-driven development (TDD) and clean architecture, frontend and backend specialists work synchronously across rapid sprint cycles.',
      subtitle: 'Engineering execution:',
      items: [
        'Clean, modular component architecture using modern frameworks',
        'Scalable microservice APIs and resilient database schemas',
        'Automated CI/CD deployment pipelines with strict linting and code checks',
        'Daily asynchronous standups and bi-weekly milestone demos',
      ],
      outcome: 'Outcome: High-performance, maintainable code engineered to scale',
      tools: ['React', 'Node.js', 'Flutter', 'PostgreSQL', 'Docker'],
    },
    B2: {
      title: 'Test',
      paragraph: 'Quality assurance is integrated into every phase, not treated as an afterthought. We conduct automated unit tests, cross-browser audits, mobile hardware checks, performance profiling, and rigorous security penetration evaluations.',
      subtitle: 'Verification procedures:',
      items: [
        'Automated unit, integration, and end-to-end regression suites',
        'Cross-platform testing on real iOS and Android physical devices',
        'Lighthouse performance audits, latency profiling, and load tests',
        'Security vulnerability scans and OWASP compliance auditing',
      ],
      outcome: 'Outcome: Rock-solid, battle-tested software free from regressions',
      tools: ['Jest', 'Cypress', 'Playwright', 'Postman', 'Sentry'],
    },
    B3: {
      title: 'Deploy',
      paragraph: 'Launch day is executed with precision. We set up zero-downtime rolling deployments, configure CDN edge caching, publish iOS and Android builds to app store tracks, and initiate real-time infrastructure telemetry.',
      subtitle: 'Release operations:',
      items: [
        'Zero-downtime cloud deployments on AWS / GCP infrastructures',
        'Apple App Store and Google Play Store submission and review handling',
        'DNS routing, SSL certificates, and Cloudflare CDN caching',
        'Real-time error tracking and automated alert dispatching',
      ],
      outcome: 'Outcome: Seamless, stress-free public launch to global users',
      tools: ['AWS', 'Cloudflare', 'App Store Connect', 'Google Play Console'],
    },
    B4: {
      title: 'Measure',
      paragraph: 'Launch is just the starting line. We analyze real user analytics, conversion funnels, API latencies, server utilization, and user retention to uncover optimization opportunities and guide continuous iteration.',
      subtitle: 'Performance tracking:',
      items: [
        'Product telemetry and user engagement funnel analytics',
        'Server performance, throughput metrics, and database query profiling',
        'Qualitative user feedback review and feature heatmaps',
        'Data-driven recommendations for next iteration cycles',
      ],
      outcome: 'Outcome: Actionable data intelligence driving ongoing growth',
      tools: ['Google Analytics 4', 'Mixpanel', 'Datadog', 'Hotjar'],
    },
    B5: {
      title: 'Maintain',
      paragraph: 'Software is a living product. We provide proactive monitoring, routine dependency updates, security patches, SLA-backed emergency responses, and continuous feature expansion.',
      subtitle: 'Ongoing maintenance:',
      items: [
        '24/7 server and uptime health monitoring',
        'Routine security audits and dependency upgrades',
        'Dedicated SLA support and rapid bug resolution',
        'Roadmap refinement for future phases and feature builds',
      ],
      outcome: 'Outcome: Peace of mind, high availability, and sustained longevity',
      tools: ['Sentry', 'PagerDuty', 'Grafana', 'New Relic'],
    },
  };

  const currentDetail = phaseDetails[activePhase] || phaseDetails.A1;

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 pt-8 pb-16 md:py-20 text-center flex flex-col items-center">
        {/* Glow orb */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] blur-[100px]" />

        <div className="bottomBorder mx-auto mb-4 flex w-fit items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
          <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
          <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
            How we Work
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          <span className="bg-clip-text text-transparent from-white via-white to-white/70 bg-gradient-to-b">
            A Transparent Process. A Reliable{' '}
          </span>
          <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
            Partner
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-foreground/75 font-light max-w-3xl mx-auto leading-relaxed mb-12">
          With Fikratech, you get clarity, communication, and momentum. We keep you involved and informed from planning to post-launch.
        </p>

        {/* Tools Strip */}
        <div className="w-full max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-6 p-4 rounded-2xl bg-[#0A141E]/80 border border-white/10 backdrop-blur-md">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-2 grayscale hover:grayscale-0 transition duration-300">
              <img src={tool.src} alt={tool.name} className="size-6 object-contain" />
              <span className="text-xs text-foreground/70 hidden sm:inline">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. IDEA-TO-IMPACT INTERACTIVE PROCESS */}
      <section className="w-full max-w-7xl mx-auto px-4 my-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-4">
            From Idea to Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent from-white via-white to-white/70 bg-gradient-to-b">
              Idea-to-Impact Process
            </span>
          </h2>
          <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
            We work side by side with you, transforming ideas into powerful solutions through collaboration, innovation, and expert craftsmanship.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 max-w-5xl mx-auto">
          {phaseSteps.map((step) => {
            const isActive = activePhase === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActivePhase(step.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs md:text-sm font-semibold transition cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white border-transparent shadow-lg shadow-cyan-500/25'
                    : 'bg-[#15212C] text-foreground/80 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                <span className="size-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                  {step.code}
                </span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Phase Detail Card */}
        <SpecialCard className="p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#307FE2]/20 text-[#05C3DE] border border-[#307FE2]/30">
              Phase {activePhase}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {currentDetail.title}
            </h3>
          </div>

          <p className="text-sm md:text-base text-foreground/85 leading-relaxed font-light mb-8">
            {currentDetail.paragraph}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">
                {currentDetail.subtitle}
              </h4>
              <ul className="space-y-3">
                {currentDetail.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-foreground/75 leading-relaxed">
                    <Check className="size-4 text-[#05C3DE] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div className="p-6 rounded-2xl bg-[#15212C]/60 border border-white/10 mb-6">
                <span className="text-xs uppercase tracking-wider text-[#05C3DE] font-semibold block mb-2">
                  Key Deliverable
                </span>
                <p className="text-sm font-medium text-white">
                  {currentDetail.outcome}
                </p>
              </div>

              <div>
                <span className="text-xs text-foreground/60 block mb-2">
                  Tools & Ecosystem:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentDetail.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-foreground/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SpecialCard>
      </section>

      {/* 3. PARTNERS TESTIMONIALS */}
      <div className="w-full mt-16">
        <OurPartners />
      </div>

      {/* 4. READY TO START */}
      <ReadyToStart />
    </div>
  );
}

export default Process;
