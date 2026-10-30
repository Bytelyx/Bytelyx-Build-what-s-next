import React from 'react';
import { 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const phases = [
  {
    step: '01',
    title: 'Discovery',
    tagline: 'Requirements, Audits & Alignment',
    description: 'We analyze your core business objectives, audit existing legacy systems, interview stakeholders, and define clear technical criteria and performance benchmarks.',
    icon: Search,
    color: '#863bff'
  },
  {
    step: '02',
    title: 'Strategy',
    tagline: 'System Architecture & Roadmapping',
    description: 'We draft the technical blueprint: database schemas, API contracts, cloud infrastructure requirements, security posture, and a sprint-by-sprint release roadmap.',
    icon: Compass,
    color: '#47bfff'
  },
  {
    step: '03',
    title: 'Design',
    tagline: 'UI/UX Prototypes & Design Systems',
    description: 'We craft intuitive wireframes, responsive UI prototypes, and tokenized design systems in Figma, ensuring effortless user journeys before a single line of code is written.',
    icon: Palette,
    color: '#7e14ff'
  },
  {
    step: '04',
    title: 'Development',
    tagline: 'Modular Engineering & Clean Code',
    description: 'Our senior engineering pods build your application in fast, iterative sprints using modern frameworks, strict static typing, and automated CI pipelines.',
    icon: Code2,
    color: '#863bff'
  },
  {
    step: '05',
    title: 'Testing',
    tagline: 'Rigorous Audits & Security Hardening',
    description: 'We execute comprehensive unit, integration, and end-to-end tests alongside automated security vulnerability scans, concurrency load testing, and cross-browser QA.',
    icon: ShieldCheck,
    color: '#47bfff'
  },
  {
    step: '06',
    title: 'Deployment',
    tagline: 'Zero-Downtime Launch & Telemetry',
    description: 'We execute zero-downtime production deployment, configure real-time APM telemetry and alerting, and establish smooth knowledge transfer with ongoing SLA support.',
    icon: Rocket,
    color: '#7e14ff'
  }
];

export default function Process() {
  return (
    <section 
      id="process" 
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#06040a] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Ambient Violet Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#863bff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0a1a] border border-[#863bff]/30 text-[#ede6ff] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#47bfff]" />
            <span>Delivery Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5">
            From First Concept to{' '}
            <span className="bg-gradient-to-r from-[#863bff] via-[#aa3bff] to-[#47bfff] bg-clip-text text-transparent">
              Production Reality
            </span>
          </h2>

          <p className="text-[#9d96b8] max-w-2xl text-base sm:text-lg leading-relaxed font-sans">
            A disciplined, transparent, six-phase software engineering lifecycle engineered to eliminate ambiguity, de-risk deployments, and maintain predictable velocity.
          </p>
        </div>

        {/* 6-Phase Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.step}
                className="group relative rounded-3xl p-8 bg-[#0d0a1a] border border-white/10 hover:border-[#863bff]/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_16px_36px_rgba(134,59,255,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#47bfff]">
                      PHASE {phase.step}
                    </span>
                    <div 
                      className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: phase.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-[#ede6ff] transition-colors">
                    {phase.title}
                  </h3>

                  <p className="text-xs font-mono text-[#863bff] mb-4">
                    {phase.tagline}
                  </p>

                  <p className="text-sm text-[#9d96b8] leading-relaxed font-sans">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-[#6e6787]">
                  <span>BYTELYX SPRINT CADENCE</span>
                  <span>PHASE {index + 1} OF 6</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
