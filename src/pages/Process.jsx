import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowUpRight, Compass, Layers, Clock, Code2, ShieldCheck, Rocket, LineChart, Wrench, Sparkles, } from 'lucide-react';
import { SpecialCard } from '../components/SpecialCard';
import { ReadyToStart } from '../components/ReadyToStart';

gsap.registerPlugin(ScrollTrigger);
// Step icons
const stepIcons = {
  A1: Compass,
  A2: Layers,
  A3: Clock,
  B1: Code2,
  B2: ShieldCheck,
  B3: Rocket,
  B4: LineChart,
  B5: Wrench,
};

// Process steps
const phaseSteps = [
  {
    id: 'A1',
    phase: 'A',
    title: 'Specifications & Planning',
    description:
      'We define your goals, understand your users, and turn your vision into a clear product roadmap.',
  },
  {
    id: 'A2',
    phase: 'A',
    title: 'Designs, Wireframe & Prototype',
    description:
      'We shape ideas into intuitive user journeys, polished interfaces, and interactive prototypes.',
  },
  {
    id: 'A3',
    phase: 'A',
    title: 'Estimates & Timeline',
    description:
      'We map milestones, resources, budgets, and delivery timelines before development begins.',
  },
  {
    id: 'B1',
    phase: 'B',
    title: 'Build',
    description:
      'Our engineering team transforms approved designs into scalable, reliable, production-ready software.',
  },
  {
    id: 'B2',
    phase: 'B',
    title: 'Test',
    description:
      'We validate every experience through functional, performance, compatibility, and security testing.',
  },
  {
    id: 'B3',
    phase: 'B',
    title: 'Deploy',
    description:
      'We launch your product with carefully managed releases, cloud infrastructure, and live monitoring.',
  },
  {
    id: 'B4',
    phase: 'B',
    title: 'Measure',
    description:
      'We turn real-world usage and performance data into meaningful product improvements.',
  },
  {
    id: 'B5',
    phase: 'B',
    title: 'Maintain',
    description:
      'We keep your product secure, stable, and evolving with proactive support and continuous updates.',
  },
];

// Process details
const phaseDetails = {
  A1: {
    title: 'Specifications & Planning',
    paragraph:
      'We begin with an in-depth discovery process aimed at defining the full scope of the project. This includes understanding your users, business objectives, and functional requirements. Our team collaborates closely with stakeholders to ensure no detail is overlooked. We identify what problems the product solves, how users will interact with it, and what success looks like. From this, we produce a detailed specifications document and roadmap that drives the entire project forward with clarity and purpose.',
    subtitle: 'What we do:',
    items: [
      'Facilitate discovery workshops to capture all business & functional needs',
      'Define user personas, user journeys, and core functionalities',
      'Recommend optimal technology stack and cloud system architecture',
      'Prioritize features using the 80/20 principle for value-first delivery',
      'Plan for future scalability, integrations, and third-party dependencies',
    ],
    outcome: 'A clearly defined technical and functional foundation',
    tools: ['Notion', 'Miro', 'Jira', 'Confluence'],
  },

  A2: {
    title: 'Designs, Wireframe & Prototype',
    paragraph:
      'After defining scope, we move into a highly visual phase where ideas become tangible. Our UI/UX designers build user flows and wireframes that outline how users interact with your product. These evolve into high-fidelity prototypes that look and behave like the real application. This step is critical for validating user experience and aligning stakeholders before development begins.',
    subtitle: 'What we create:',
    items: [
      'Low-fidelity wireframes for layout and structural hierarchy',
      'User journey maps to guide smooth navigation and interaction flow',
      'High-fidelity clickable prototypes simulating the final product',
      'Interactive component design system for unified cross-platform branding',
    ],
    outcome: 'Validated, interactive prototypes and design system',
    tools: ['Figma', 'Adobe XD', 'Illustrator', 'Principle'],
  },

  A3: {
    title: 'Estimates & Timeline',
    paragraph:
      'With approved designs and complete specifications, we construct a granular sprint roadmap. We break down the product backlog into two-week milestones, allocate specialized engineering resources, define test suites, and outline risk-mitigation contingencies.',
    subtitle: 'Sprint planning:',
    items: [
      'Granular story estimation and resource allocation',
      'Two-week agile sprint schedules and release milestones',
      'Risk assessment, security audit planning, and third-party SLA buffers',
      'Transparent budget breakdown and clear project sign-offs',
    ],
    outcome: 'Predictable delivery roadmap with clear milestones',
    tools: ['Linear', 'Jira', 'GitHub Projects', 'Slack'],
  },

  B1: {
    title: 'Build',
    paragraph:
      'Our engineers transform designs and architectures into clean, robust, production-ready code. Following test-driven development (TDD) and clean architecture, frontend and backend specialists work synchronously across rapid sprint cycles.',
    subtitle: 'Engineering execution:',
    items: [
      'Clean, modular component architecture using modern frameworks',
      'Scalable microservice APIs and resilient database schemas',
      'Automated CI/CD deployment pipelines with strict linting and code checks',
      'Daily asynchronous standups and bi-weekly milestone demos',
    ],
    outcome: 'High-performance, maintainable code engineered to scale',
    tools: ['React', 'Node.js', 'Flutter', 'PostgreSQL', 'Docker'],
  },

  B2: {
    title: 'Test',
    paragraph:
      'Quality assurance is integrated into every phase, not treated as an afterthought. We conduct automated unit tests, cross-browser audits, mobile hardware checks, performance profiling, and rigorous security penetration evaluations.',
    subtitle: 'Verification procedures:',
    items: [
      'Automated unit, integration, and end-to-end regression suites',
      'Cross-platform testing on real iOS and Android physical devices',
      'Lighthouse performance audits, latency profiling, and load tests',
      'Security vulnerability scans and OWASP compliance auditing',
    ],
    outcome: 'Reliable software with thoroughly tested functionality',
    tools: ['Jest', 'Cypress', 'Playwright', 'Postman', 'Sentry'],
  },

  B3: {
    title: 'Deploy',
    paragraph:
      'Launch day is executed with precision. We set up zero-downtime rolling deployments, configure CDN edge caching, publish iOS and Android builds to app store tracks, and initiate real-time infrastructure telemetry.',
    subtitle: 'Release operations:',
    items: [
      'Zero-downtime cloud deployments on AWS / GCP infrastructures',
      'Apple App Store and Google Play Store submission and review handling',
      'DNS routing, SSL certificates, and Cloudflare CDN caching',
      'Real-time error tracking and automated alert dispatching',
    ],
    outcome: 'A carefully managed launch ready for real-world users',
    tools: ['AWS', 'Cloudflare', 'App Store Connect', 'Google Play Console'],
  },

  B4: {
    title: 'Measure',
    paragraph:
      'Launch is just the starting line. We analyze real user analytics, conversion funnels, API latencies, server utilization, and user retention to uncover optimization opportunities and guide continuous iteration.',
    subtitle: 'Performance tracking:',
    items: [
      'Product telemetry and user engagement funnel analytics',
      'Server performance, throughput metrics, and database query profiling',
      'Qualitative user feedback review and feature heatmaps',
      'Data-driven recommendations for next iteration cycles',
    ],
    outcome: 'Actionable data intelligence driving ongoing growth',
    tools: ['Google Analytics 4', 'Mixpanel', 'Datadog', 'Hotjar'],
  },

  B5: {
    title: 'Maintain',
    paragraph:
      'Software is a living product. We provide proactive monitoring, routine dependency updates, security patches, SLA-backed emergency responses, and continuous feature expansion.',
    subtitle: 'Ongoing maintenance:',
    items: [
      '24/7 server and uptime health monitoring',
      'Routine security audits and dependency upgrades',
      'Dedicated SLA support and rapid bug resolution',
      'Roadmap refinement for future phases and feature builds',
    ],
    outcome: 'Peace of mind, high availability, and sustained longevity',
    tools: ['Sentry', 'PagerDuty', 'Grafana', 'New Relic'],
  },
};

// Main component
export function Process() {
  const [activePhase, setActivePhase] = useState(null);
  const mainRef = useRef(null);
  const detailCardRef = useRef(null);
  const currentDetail = activePhase
    ? phaseDetails[activePhase]
    : null;

  // Main gsap animation
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.gsap-step-card');

      gsap.fromTo(
        cards,
        {
          autoAlpha: 0,
          y: 48,
          scale: 0.96,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.11,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-step-grid',
            start: 'top 86%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.gsap-section-heading',
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-section-heading',
            start: 'top 90%',
            once: true,
          },
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Detail card animation
  useEffect(() => {
    if (!activePhase || !detailCardRef.current) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const card = detailCardRef.current;

    if (reduceMotion) {
      gsap.set(
        [
          card,
          ...card.querySelectorAll(
            '.gsap-detail-header, .gsap-detail-content, .gsap-detail-outcome, .gsap-detail-item, .gsap-detail-tool'
          ),
        ],
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          scale: 1,
        }
      );

      return undefined;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      timeline.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 24,
          scale: 0.99,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
        }
      );

      timeline.fromTo(
        '.gsap-detail-header',
        {
          autoAlpha: 0,
          y: 12,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
        },
        '-=0.25'
      );

      timeline.fromTo(
        '.gsap-detail-content',
        {
          autoAlpha: 0,
          y: 12,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
        },
        '-=0.2'
      );

      timeline.fromTo(
        '.gsap-detail-outcome',
        {
          autoAlpha: 0,
          y: 10,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
        },
        '-=0.15'
      );

      timeline.fromTo(
        '.gsap-detail-item',
        {
          autoAlpha: 0,
          x: 10,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.045,
        },
        '-=0.2'
      );

      timeline.fromTo(
        '.gsap-detail-tool',
        {
          autoAlpha: 0,
          y: 8,
          scale: 0.97,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
          stagger: 0.04,
        },
        '-=0.15'
      );
    }, card);

    return () => ctx.revert();
  }, [activePhase]);

  // Step selection
  const handleStepSelect = (stepId) => {
    setActivePhase((previous) =>
      previous === stepId ? null : stepId
    );
  };

  // Premium compact card
  const renderDetailPanel = () => {
    if (!activePhase || !currentDetail) return null;

    const DetailIcon = stepIcons[activePhase] || Sparkles;

    const stepNumber = String(
      phaseSteps.findIndex(
        (step) => step.id === activePhase
      ) + 1
    ).padStart(2, '0');

    return (
      <div ref={detailCardRef} key={`detail-${activePhase}`} className="gsap-detail-card w-full min-w-0">
        <SpecialCard className="group relative !flex !w-full !flex-col !overflow-hidden !rounded-2xl sm:!rounded-3xl !border !border-cyan-400/20 !bg-[#091522] !p-0 shadow-[0_15px_55px_rgba(0,0,0,0.35)]">
          {/* Subtile aacent */}
          <div className="absolute left-0 top-0 z-20 h-[2px] w-full bg-gradient-to-r from-[#307FE2] via-[#05C3DE] to-cyan-300" />
          <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-cyan-400/[0.06] blur-[85px]" />
          {/* Compact header */}
          <div className="gsap-detail-header relative border-b border-white/[0.07] bg-gradient-to-r from-[#10243A] via-[#0B1B2A] to-[#091522] px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/[0.08] text-cyan-300 sm:size-14 sm:rounded-2xl">
                  <DetailIcon size={25} strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-cyan-400/25 bg-cyan-400/10 px-2 py-1 text-[9px] font-bold tracking-wider text-cyan-300">
                      STEP {activePhase}
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                      {activePhase.startsWith('A')
                        ? 'Phase 01 · Discovery'
                        : 'Phase 02 · Engineering'}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold leading-tight text-white sm:text-xl">
                    {currentDetail.title}
                  </h3>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2 sm:px-3">
                <span className="text-lg font-bold text-cyan-300 sm:text-xl">
                  {stepNumber}
                </span>
                <span className="h-6 w-px bg-white/15" />
                <span className="text-[8px] font-semibold uppercase leading-3 tracking-wider text-slate-400 sm:text-[9px]">
                  OF 08
                  <br />
                  STEPS
                </span>
              </div>
            </div>
          </div>

          {/* Compact main content */}
          <div className="relative z-10 p-4 sm:p-6 lg:p-7">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
              {/* Overview */}
              <div className="gsap-detail-content rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-4 w-1 rounded-full bg-gradient-to-b from-[#307FE2] to-[#05C3DE]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300">
                    Overview
                  </span>
                </div>
                <p className="text-xs font-light leading-6 text-slate-300 sm:text-[13px] sm:leading-7">
                  {currentDetail.paragraph}
                </p>
              </div>
              {/* What we do */}
              <div className="gsap-detail-content rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <Check size={14} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {currentDetail.subtitle}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {currentDetail.items.map((item, index) => (
                    <li key={`${activePhase}-${index}`} className="gsap-detail-item flex items-start gap-2.5 text-xs leading-5 text-slate-300">
                      <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-300">
                        <Check size={9} />
                      </span>
                      <span className="min-w-0">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom information */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="gsap-detail-outcome relative flex items-center gap-3 overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-r from-[#0B2635] to-[#0A1C2A] p-3.5 sm:p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                  <Check size={17} />
                </div>
                <div className="min-w-0">
                  <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-300">
                    Deliverable & Outcome
                  </span>
                  <p className="text-xs font-medium leading-5 text-white">
                    {currentDetail.outcome}
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="gsap-detail-content flex flex-col justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5 sm:p-4">
                <span className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Tools & Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentDetail.tools.map((tool) => (
                    <span key={tool} className="gsap-detail-tool rounded-md border border-cyan-400/15 bg-[#10243A] px-2.5 py-1.5 text-[10px] font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-200 sm:text-[11px]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
              <span className="text-[8px] font-bold tracking-[0.16em] text-slate-500 sm:text-[9px]">
                BYTELYX CORE LIFECYCLE
              </span>
              <span className="inline-flex items-center gap-1.5 text-[8px] font-bold tracking-wider text-cyan-400/75 sm:text-[9px]">
                <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#05C3DE]" />
                BUILDING WHAT&apos;S NEXT
              </span>
            </div>
          </div>
        </SpecialCard>
      </div>
    );
  };

  // MAIN JSX
  return (
    <div ref={mainRef} className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-[#050B14] text-white">
      {/* Hero Section */}
      <section className="relative isolate mx-auto mb-16 w-full max-w-7xl overflow-hidden px-4 pt-4 text-center md:px-10 lg:px-8 lg:pt-6 xl:px-14 xl:pt-10 2xl:px-24" aria-label="Process introduction">
        <div className="pointer-events-none absolute -top-20 left-1/2 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] opacity-75 blur-[100px] md:w-[900px]" />
        <h1 className="relative z-10 mx-auto w-full text-3xl font-medium leading-tight md:text-5xl lg:mb-2 lg:w-4/5 lg:text-5xl 2xl:text-7xl">
          <span className="block bg-gradient-to-b from-foreground-from via-white to-foreground-to bg-clip-text py-2 text-transparent">
            A Transparent Process. A Reliable{' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Partner.
            </span>
          </span>
        </h1>
        <div className="group relative isolate space-y-6 py-4 pb-10 md:pb-14 lg:space-y-12 lg:py-8 lg:pb-16">
          <p className="relative z-10 mx-auto mb-8 max-w-2xl text-xs font-light leading-6 text-white/90 md:text-xl lg:mb-8 lg:text-base">
            From the first conversation to final launch, we follow a clear, collaborative process that keeps your project on track and your vision at the center.
          </p>
          <div className="pointer-events-none absolute -bottom-36 left-1/2 z-0 size-40 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#81a1f9_0%,_#6ac8ff_44%,_#6ee2fc_54%,_#245bf1_100%)] opacity-70 blur-2xl transition-transform duration-1000 group-hover:scale-125 lg:-bottom-40 lg:size-48 lg:blur-3xl xl:-bottom-80 xl:size-80 xl:blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-64 w-3/4 -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(48,127,226,0.45)_0%,_rgba(5,195,222,0.25)_35%,_transparent_75%)] opacity-90 blur-[60px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6DA5FF] to-transparent shadow-[0_-2px_10px_rgba(80,150,255,0.4)]" />
        </div>
      </section>

      {/* Process section */}
      <section className="relative isolate w-full overflow-hidden px-6 pb-36 md:px-12 lg:px-16 xl:px-20">
        <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 size-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(48,127,226,0.18),transparent_70%)] blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 size-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(5,195,222,0.16),transparent_70%)] blur-[130px]" />
        <div className="mx-auto w-full max-w-7xl">

          {/* Section Header */}
          <div className="gsap-section-heading mb-16 flex flex-col items-center justify-center text-center">
            <div className="bottomBorder mb-4 inline-flex items-center rounded-full border border-white/10 bg-[#0A1825] px-3.5 py-1.5 shadow-sm">
              <span className="me-2 size-2 rounded-full bg-[#05C3DE] shadow-[0_0_8px_#05c3de]" />
              <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-xs font-semibold uppercase tracking-wider text-transparent">
                ByteLyx Methodology
              </span>
            </div>
            <h2 className="mb-5 text-3xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
              From Vision to{' '}
              <span className="bg-gradient-to-r from-[#307FE2] via-[#65ddf7] to-[#05C3DE] bg-clip-text text-transparent">
                Production.
              </span>
            </h2>
            <p className="max-w-3xl text-xs font-light leading-relaxed text-[#818B95] md:text-base">
              Every great product starts with an idea. We engineer clarity through an iterative, transparent 8-step lifecycle ensuring high velocity and zero friction.
            </p>
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0A1825]/90 px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
              <span className="bg-gradient-to-b from-white to-cyan-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                08
              </span>
              <div className="border-l border-white/10 pl-4 text-left">
                <p className="text-xs font-semibold text-white">
                  Defined Milestones
                </p>
                <p className="text-[11px] text-slate-400">
                  One Continuous Flow
                </p>
              </div>
            </div>
          </div>

          {/* Phase bars */}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#307FE2]/30 bg-[#0A1825]/80 px-4 py-4 shadow-[0_4px_20px_rgba(48,127,226,0.1)] backdrop-blur-md sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="h-6 w-1 shrink-0 rounded-full bg-gradient-to-b from-[#307FE2] to-[#65DDF7] shadow-[0_0_8px_#307FE2]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#307FE2] sm:text-xs">
                  Phase 01: Discovery, Architecture & Planning
                </span>
              </div>
              <span className="shrink-0 rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300">
                03 Steps
              </span>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#05C3DE]/30 bg-[#0A1825]/80 px-4 py-4 shadow-[0_4px_20px_rgba(5,195,222,0.1)] backdrop-blur-md sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="h-6 w-1 shrink-0 rounded-full bg-gradient-to-b from-[#05C3DE] to-[#307FE2] shadow-[0_0_8px_#05C3DE]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#05C3DE] sm:text-xs">
                  Phase 02: Engineering, Deployment & Longevity
                </span>
              </div>
              <span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300">
                05 Steps
              </span>
            </div>
          </div>

          {/* Srep grid + inline detail panel */}
          <div className="gsap-step-grid mb-16 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {phaseSteps.map((step, index) => {
              const isActive = activePhase === step.id;
              const Icon = stepIcons[step.id] || Sparkles;
              return (
                <React.Fragment key={step.id}>
                  {/* Step card */}
                  <div className="gsap-step-card h-full min-w-0">
                    <SpecialCard className={`group relative !flex !h-full !min-h-[340px] sm:!min-h-[390px] w-full !flex-col !overflow-hidden !p-0 transition-all duration-500 ease-out hover:-translate-y-2 ${isActive
                      ? '!border-[#05C3DE] !shadow-[0_0_25px_rgba(5,195,222,0.35),0_10px_30px_rgba(48,127,226,0.2)]'
                      : 'hover:!border-[#307FE2]/50 hover:!shadow-[0_0_24px_rgba(48,127,226,0.2)]'
                      }`}>
                      {/* Active accent */}
                      {isActive && (
                        <div className="pointer-events-none absolute left-0 top-0 z-30 h-[3px] w-full bg-gradient-to-r from-[#307FE2] via-[#05C3DE] to-cyan-300 shadow-[0_0_12px_#05C3DE]" />
                      )}

                      {/* Icon header */}
                      <div className="relative flex h-[145px] min-h-[145px] w-full shrink-0 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-[#10243A] via-[#0A1825] to-[#07111D] sm:h-[165px] sm:min-h-[165px]">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,195,222,0.16),transparent_65%)]" />
                        <div className="pointer-events-none absolute inset-0 opacity-30">
                          <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent" />
                        </div>
                        {/* Step number */}
                        <span className="absolute right-4 top-4 z-20 flex h-7 min-w-9 items-center justify-center rounded-lg border border-white/10 bg-[#0A1825]/90 px-2 text-[11px] font-bold tracking-wider text-cyan-300 shadow-lg sm:right-5 sm:top-5">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        {/* Centered icon */}
                        <div className="relative z-10 mt-5 flex size-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-300 shadow-[0_0_35px_rgba(5,195,222,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/[0.14] group-hover:shadow-[0_0_45px_rgba(5,195,222,0.25)] sm:size-20">
                          <Icon size={30} strokeWidth={1.5} className="sm:hidden"/>
                          <Icon size={36} strokeWidth={1.5} className="hidden sm:block"/>
                        </div>
                      </div>
                      {/* CARD CONTENT */}
                      <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
                        <div className="flex-1">
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400">
                            {step.phase === 'A'
                              ? 'Discovery & Strategy'
                              : 'Engineering & Growth'}
                          </p>
                          <h3 className="mb-3 line-clamp-2 text-base font-semibold leading-relaxed text-white transition-colors duration-300 group-hover:text-cyan-100">
                            {step.title}
                          </h3>
                          <p className="text-xs font-light leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300 sm:text-[13px]">
                            {step.description}
                          </p>
                        </div>
                        {/* EXPLORE BUTTON */}
                        <button type="button" onClick={() => handleStepSelect(step.id)} aria-expanded={isActive} aria-controls={
                            isActive
                              ? `detail-${step.id}`
                              : undefined
                          } aria-pressed={isActive} aria-label={`${isActive ? 'Close' : 'Explore'} step ${index + 1}: ${step.title}`} className={`mt-5 flex w-full items-center justify-between border-t border-white/10 pt-4 text-left transition-colors duration-300 ${isActive
                            ? 'text-cyan-300'
                            : 'text-slate-400 hover:text-cyan-300'
                            }`}>
                          <span className="text-xs font-bold uppercase tracking-wider">
                            {isActive
                              ? 'Close Details'
                              : 'Explore Step'}
                          </span>
                          <ArrowUpRight size={17} className={`transition-transform duration-300 ${isActive
                              ? 'rotate-45'
                              : 'group-hover:-translate-y-1 group-hover:translate-x-1'
                              }`}/>
                        </button>
                      </div>
                    </SpecialCard>
                  </div>
                  {/* EXPANDED DETAIL PANEL*/}
                  {isActive && (
                    <div id={`detail-${step.id}`} className="col-span-full w-full min-w-0">
                      {renderDetailPanel()}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* READY TO START */}
      <ReadyToStart />
    </div>
  );
}

export default Process;
