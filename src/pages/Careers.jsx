import React, { useState } from 'react';
import { SpecialCard } from '../components/SpecialCard';
import { ApplyModal } from '../components/ApplyModal';
import { ReadyToStart } from '../components/ReadyToStart';
import { Briefcase, ArrowRight, Sparkles, Users, Award, Shield, Compass } from 'lucide-react';

export function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openApply = (role) => {
    setSelectedJob(role);
    setModalOpen(true);
  };

  const jobPositions = [
    {
      id: 'flutter-dev',
      title: 'Flutter Developer',
      team: 'Mobile Team',
      type: 'Full-time • Hybrid / Remote',
      desc: 'Build high-performance, beautiful cross-platform mobile apps for top fintech and enterprise clients.',
      tags: ['Flutter', 'Dart', 'Bloc', 'REST APIs', 'Clean Architecture'],
    },
    {
      id: 'react-dev',
      title: 'Senior React Developer',
      team: 'Web Team',
      type: 'Full-time • Remote',
      desc: 'Architect fluid web platforms, interactive dashboards, and design systems with modern JavaScript & Tailwind.',
      tags: ['React.js', 'Vite', 'Tailwind CSS', 'Redux', 'TypeScript/ES6'],
    },
    {
      id: 'ai-dev',
      title: 'AI Solutions Engineer',
      team: 'Data Science',
      type: 'Full-time • Hybrid',
      desc: 'Integrate LLMs, computer vision, and automated workflow intelligence into our client enterprise software suite.',
      tags: ['Python', 'OpenAI', 'LangChain', 'FastAPI', 'Automation'],
    },
    {
      id: 'devops-engineer',
      title: 'DevOps & Cloud Engineer',
      team: 'DevOps Team',
      type: 'Full-time • Remote',
      desc: 'Manage CI/CD pipelines, Docker Kubernetes clusters, cloud security, and ensure 99.99% high availability.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    },
    {
      id: 'product-designer',
      title: 'Lead UI/UX Product Designer',
      team: 'Design Team',
      type: 'Full-time • Hybrid / Remote',
      desc: 'Craft intuitive interfaces, design systems, and delightful interaction prototypes in Figma.',
      tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    },
    {
      id: 'backend-dev',
      title: 'Node.js Backend Developer',
      team: 'Backend Team',
      type: 'Full-time • Remote',
      desc: 'Design secure microservices, high-throughput APIs, PostgreSQL/MongoDB schemas, and compliance ledgers.',
      tags: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'Microservices'],
    },
  ];

  const culturalPillars = [
    {
      title: 'We hire thinkers, not followers.',
      desc: 'We’re a team of curious minds who challenge assumptions and solve real problems — together.',
      icon: Compass,
    },
    {
      title: 'Your ideas matter here.',
      desc: 'Whether you’re leading a team or just joined, smart ideas get heard, built, and launched.',
      icon: Sparkles,
    },
    {
      title: 'You’re trusted to lead.',
      desc: 'We don’t micromanage. You’ll have the space and trust to lead, create, and grow on your terms.',
      icon: Shield,
    },
    {
      title: 'Growth is built-in.',
      desc: 'You’ll level up constantly — through challenges, feedback, and the freedom to experiment.',
      icon: Award,
    },
    {
      title: 'It’s fun here — for real.',
      desc: 'Chill vibes, smart conversations, shared playlists… and yeah, we get a lot of serious work done too.',
      icon: Users,
    },
  ];

  return (
    <div className="flex w-full flex-col items-center">
      {/* 1. Hero Section */}
      <section className="relative mx-auto mb-16 w-full max-w-7xl isolate overflow-hidden px-4 pt-6 text-center md:px-10 lg:px-8 lg:pt-10 xl:px-14 xl:pt-16 2xl:px-24">
        {/* Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 z-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] opacity-75 blur-[100px]" />

        <div className="bottomBorder mx-auto mb-4 flex w-fit items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
          <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
          <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
            We are Hiring
          </span>
        </div>

        <h1 className="relative z-10 mx-auto w-full text-3xl font-medium leading-tight md:text-5xl lg:text-5xl xl:text-6xl">
          <span className="bg-gradient-to-b from-foreground-from via-white to-foreground-to bg-clip-text text-transparent">
            Help us Make Work{' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Frictionless
            </span>
          </span>
        </h1>

        <p className="relative z-10 mx-auto mt-4 max-w-2xl text-xs font-light leading-relaxed text-[#818B95] md:text-lg lg:text-base">
          Become a part of our expanding team at FikraTech, where we inspire individuals to elevate their productivity to new heights.
        </p>
      </section>

      {/* 2. Timeline Moments */}
      <section className="3xl:container mx-auto my-12 w-full max-w-7xl px-4 md:px-10 lg:px-8 xl:px-14 2xl:px-24">
        <div className="text-center mb-10">
          <h2 className="text-xl font-bold text-white md:text-3xl">
            A look at the moments that shaped us
          </h2>
          <p className="mt-2 text-xs font-light text-[#818B95] md:text-sm">
            From our founding vision to delivering mission-critical platforms across global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SpecialCard className="p-6 md:p-8 flex flex-col justify-between">
            <span className="text-xs font-semibold text-[#05c5de]">2022 • Founding</span>
            <h3 className="mt-2 text-lg font-bold text-white">Seed Concept</h3>
            <p className="mt-3 text-xs font-light text-[#828282] leading-relaxed">
              We proudly presented our initial product concept, assembling a focused team of engineers and designers determined to redefine digital delivery.
            </p>
          </SpecialCard>

          <SpecialCard className="p-6 md:p-8 flex flex-col justify-between">
            <span className="text-xs font-semibold text-[#05c5de]">2024 • Expansion</span>
            <h3 className="mt-2 text-lg font-bold text-white">Regional Scaling</h3>
            <p className="mt-3 text-xs font-light text-[#828282] leading-relaxed">
              Scaled across the UAE and Jordan, launching mission-critical fintech remittance compliance engines and enterprise portals for industry leaders.
            </p>
          </SpecialCard>

          <SpecialCard className="p-6 md:p-8 flex flex-col justify-between">
            <span className="text-xs font-semibold text-[#05c5de]">2026 • Innovation</span>
            <h3 className="mt-2 text-lg font-bold text-white">Next Generation</h3>
            <p className="mt-3 text-xs font-light text-[#828282] leading-relaxed">
              Pioneering automated business pipelines, intelligent AI microservices, and human-centric software for forward-thinking global partners.
            </p>
          </SpecialCard>
        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="3xl:container mx-auto my-16 w-full max-w-7xl px-4 md:px-10 lg:px-8 xl:px-14 2xl:px-24">
        <div className="mb-10 text-center">
          <div className="bottomBorder mx-auto mb-3 flex w-fit items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
            <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-xs font-semibold text-transparent">
              Open Positions
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white md:text-4xl">
            Join the{' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs font-light text-[#818B95] md:text-sm">
            At FikraTech, we deeply appreciate innovative ideas, meaningful impact, and the talented individuals who bring them to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobPositions.map((job) => (
            <SpecialCard key={job.id} className="p-6 flex flex-col justify-between group hover:border-[#307FE2]/50 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-full bg-[#307FE2]/15 px-3 py-1 text-[0.65rem] font-medium text-[#05C3DE] border border-[#307FE2]/30">
                    {job.team}
                  </span>
                  <span className="text-[0.65rem] text-white/50">{job.type}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#05C3DE] transition-colors">
                  {job.title}
                </h3>

                <p className="mt-2.5 text-xs font-light text-[#828282] leading-relaxed">
                  {job.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[0.65rem] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => openApply(job.title)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#307FE2] to-[#05C3DE] py-2.5 text-xs font-semibold text-white shadow-md shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/25 cursor-pointer"
              >
                <span>Apply for Job</span>
                <ArrowRight className="size-3.5" />
              </button>
            </SpecialCard>
          ))}
        </div>
      </section>

      {/* 4. The FikraTech Mindset */}
      <section className="3xl:container mx-auto my-16 w-full max-w-7xl px-4 md:px-10 lg:px-8 xl:px-14 2xl:px-24">
        <div className="mb-10 text-center">
          <div className="bottomBorder mx-auto mb-3 flex w-fit items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
            <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-xs font-semibold text-transparent">
              Our Culture
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white md:text-4xl">
            The FikraTech{' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Mindset
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs font-light text-[#818B95] md:text-sm">
            We’re not just building tech — we’re building a culture. Our mindset drives everything from how we collaborate to how we innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {culturalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <SpecialCard key={idx} className="p-6 md:p-8 flex flex-col items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#307FE2]/20 to-[#05C3DE]/10 border border-[#05C3DE]/30 text-[#05C3DE]">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-xs font-light leading-relaxed text-[#828282]">
                    {pillar.desc}
                  </p>
                </div>
              </SpecialCard>
            );
          })}
        </div>
      </section>

      {/* 5. Ready to Start */}
      <ReadyToStart />

      {/* Apply Modal */}
      <ApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobRole={selectedJob}
      />
    </div>
  );
}

export default Careers;
