import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Terminal, 
  Eye, 
  Sparkles, 
  Lightbulb, 
  Code2, 
  CheckCircle2, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const principles = [
    {
      title: 'Architectural Clarity',
      lead: 'Complexity is accidental; clarity is intentional.',
      description: 'We believe that great software is defined by how effortlessly it can be understood, audited, and extended. We enforce modular service boundaries and explicit data contracts.',
      icon: Eye,
      accent: '#863bff'
    },
    {
      title: 'Engineering Rigor',
      lead: 'Predictable state machines and typed reliability.',
      description: 'We avoid brittle shortcuts. Every system is built using strict static typing, comprehensive automated test suites, and idempotent operations that thrive under load.',
      icon: Code2,
      accent: '#47bfff'
    },
    {
      title: 'Zero Accidental Debt',
      lead: 'Software engineered for long-term operational velocity.',
      description: 'We construct codebases designed to outlive organizational shifts. Modular components, clear documentation, and standard dependencies allow teams to scale without rewriting.',
      icon: ShieldCheck,
      accent: '#7e14ff'
    },
    {
      title: 'Human-Centered Utility',
      lead: 'Technology built for real human workflows.',
      description: 'Software succeeds only when people love using it. We design frictionless workflows, accessible ergonomic standards, and sub-80ms micro-interactions that elevate productivity.',
      icon: Sparkles,
      accent: '#47bfff'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#06040a] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-[#863bff]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0a1a] border border-[#863bff]/30 text-[#ede6ff] text-xs font-mono uppercase tracking-widest mb-4">
            <Terminal className="w-3.5 h-3.5 text-[#47bfff]" />
            <span>Engineering Perspective</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5">
            About <span className="bg-gradient-to-r from-[#863bff] via-[#aa3bff] to-[#47bfff] bg-clip-text text-transparent">BYTELYX</span>
          </h2>

          <p className="text-[#9d96b8] max-w-2xl text-base sm:text-lg leading-relaxed font-sans">
            BYTELYX is a modern software engineering and digital transformation studio. We build resilient, high-throughput digital systems designed to help forward-thinking organizations lead their markets.
          </p>
        </div>

        {/* Brand Mission Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#0d0a1a] border border-white/10 text-left space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#47bfff]">
              OUR FOUNDING THESIS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              "We believe modern software should be as resilient on the backend as it is elegant in the user's hand."
            </h3>
            <p className="text-sm sm:text-base text-[#9d96b8] leading-relaxed font-sans">
              Too much software today suffers from either technical fragility or disjointed, sluggish user interfaces. At BYTELYX, we eliminate this divide by uniting deep cloud architecture with award-grade product design.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#ede6ff]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#47bfff]" /> Clean Modular Code
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#47bfff]" /> Deterministic Testing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#47bfff]" /> Cloud-Native Scalability
              </span>
            </div>
          </div>

          {/* Right Highlight Card: Engineering Metrics */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#120c27] to-[#080512] border border-[#863bff]/30 space-y-6 text-left shadow-xl">
            <span className="text-xs font-mono text-[#9d96b8] uppercase tracking-wider block">
              Global Standards
            </span>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold font-mono text-white">100% Type-Safe</div>
                <div className="text-xs text-[#9d96b8] mt-0.5">TypeScript & Strict API Schemas</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold font-mono text-[#47bfff]">Zero Lock-In</div>
                <div className="text-xs text-[#9d96b8] mt-0.5">Open Standards, Docker & Cloud Native</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold font-mono text-white">Full-Lifecycle Support</div>
                <div className="text-xs text-[#9d96b8] mt-0.5">From Initial Discovery Through SLA Operations</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Engineering Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {principles.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#0d0a1a] border border-white/10 hover:border-[#863bff]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div 
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: item.accent }}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#ede6ff] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-[#47bfff] mb-3">
                    {item.lead}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9d96b8] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
