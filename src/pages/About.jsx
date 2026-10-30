import React from 'react';
import { 
  Target, Eye, Sparkles, Code2, ShieldCheck, 
  Layers, Cpu, ArrowRight, Lightbulb,
  Compass, Smartphone, TrendingUp, Check
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import DevelopmentTimeline from '../components/DevelopmentTimeline';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';

export default function About() {
  const coreValues = [
    {
      title: 'Clarity',
      desc: 'We prioritize clear architecture and transparent communication. Complexity is easy to create; clarity requires discipline.',
      icon: Eye,
    },
    {
      title: 'Creativity',
      desc: 'We believe thoughtful visual aesthetics and original problem-solving transform ordinary software into memorable brand experiences.',
      icon: Lightbulb,
    },
    {
      title: 'Functionality',
      desc: 'Every layout, interaction, and component must serve a practical user need. We design and build for real operational utility.',
      icon: Code2,
    },
    {
      title: 'Reliability',
      desc: 'We construct predictable, maintainable software systems using established engineering patterns and structured testing.',
      icon: ShieldCheck,
    },
    {
      title: 'Continuous Improvement',
      desc: 'Technology evolves constantly. We continuously refine our technical stack, development practices, and design thinking.',
      icon: TrendingUp,
    },
  ];

  const capabilitiesList = [
    {
      title: 'Full-Stack Web Development',
      desc: 'Modular frontend interfaces in React.js paired with robust backend APIs, authentication, and database schemas.',
      icon: Code2,
    },
    {
      title: 'UI/UX Design',
      desc: 'User research, wireframing, high-fidelity prototypes, and cohesive design systems engineered for usability.',
      icon: Layers,
    },
    {
      title: 'Flutter Mobile Development',
      desc: 'Cross-platform mobile applications for iOS and Android delivering native touch fluidity and responsive UI.',
      icon: Smartphone,
    },
    {
      title: 'Digital Marketing & Growth',
      desc: 'Strategic campaign planning, brand messaging, audience engagement, and performance-oriented positioning.',
      icon: TrendingUp,
    },
    {
      title: 'AI & Intelligent Solutions',
      desc: 'Practical API integrations, automated workflow routines, and intelligent software enhancements.',
      icon: Cpu,
    },
  ];

  return (
    <PageTransition>
      <div className="pt-28 pb-24 min-h-screen relative overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] hero-radial-glow pointer-events-none -z-10" />
        <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none -z-20" />

        {/* =========================================================================
            PAGE HEADER
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F7FC] border border-[#E7E9F2] text-xs font-semibold uppercase tracking-wider text-[#3027D9] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#3027D9]" />
              <span>About BYTELYX &bull; Building What&apos;s Next</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] leading-[1.12]">
              Technology With Purpose.{' '}
              <span className="bg-gradient-to-r from-[#08085B] via-[#3027D9] to-[#5145FF] bg-clip-text text-transparent">
                Design With Meaning.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#667085] leading-relaxed">
              BYTELYX is a modern digital solutions brand bringing development, design, mobile applications, digital marketing, and AI-enabled solutions together.
            </p>
          </div>
        </section>

        {/* =========================================================================
            OUR PERSPECTIVE, MISSION & VISION
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Our Perspective */}
            <div className="bg-white rounded-2xl p-8 border border-[#E7E9F2] shadow-[0_4px_24px_-6px_rgba(8,8,91,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F6F7FC] border border-[#E7E9F2] flex items-center justify-center text-[#3027D9] mb-6 shadow-2xs">
                  <Compass className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[#111827] mb-3">
                  Our Perspective
                </h2>
                <p className="text-sm text-[#667085] leading-relaxed">
                  &ldquo;We believe meaningful digital experiences begin with understanding people, solving the right problems, and using technology with purpose.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F6F7FC] text-xs font-semibold text-[#08085B]">
                Purpose-Driven Focus
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-2xl p-8 border border-[#E7E9F2] shadow-[0_4px_24px_-6px_rgba(8,8,91,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F6F7FC] border border-[#E7E9F2] flex items-center justify-center text-[#08085B] mb-6 shadow-2xs">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[#111827] mb-3">
                  Our Mission
                </h2>
                <p className="text-sm text-[#667085] leading-relaxed">
                  &ldquo;To create thoughtful digital solutions that help businesses build, connect, and move forward.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F6F7FC] text-xs font-semibold text-[#08085B]">
                Empowering Business Forward
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-2xl p-8 border border-[#E7E9F2] shadow-[0_4px_24px_-6px_rgba(8,8,91,0.04)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F6F7FC] border border-[#E7E9F2] flex items-center justify-center text-[#5145FF] mb-6 shadow-2xs">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-[#111827] mb-3">
                  Our Vision
                </h2>
                <p className="text-sm text-[#667085] leading-relaxed">
                  &ldquo;To contribute to a digital future where technology, design, and intelligent solutions work together seamlessly.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F6F7FC] text-xs font-semibold text-[#08085B]">
                Seamless Convergence
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            DEVELOPMENT PHILOSOPHY
           ========================================================================= */}
        <section className="bg-[#F6F7FC]/70 py-20 border-y border-[#E7E9F2] mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3027D9]">
                  Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                  How We Approach Digital Construction.
                </h2>
                <p className="text-base text-[#667085] leading-relaxed">
                  Thoughtful planning, accessible interfaces, maintainable code, responsive design, and careful testing shape every aspect of our work. We build software to be a lasting asset, not technical debt.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Thoughtful Planning', desc: 'Clarifying objectives, data models, and constraints before writing production code.' },
                  { title: 'Accessible Interfaces', desc: 'Ensuring fluid usability across all devices, screen widths, and user interactions.' },
                  { title: 'Maintainable Code', desc: 'Modular components, predictable state patterns, and clean separation of concerns.' },
                  { title: 'Rigorous Verification', desc: 'Testing edge cases, cross-browser behavior, and performance before delivery.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-[#E7E9F2] shadow-2xs">
                    <h3 className="text-sm font-bold text-[#08085B] mb-2">{item.title}</h3>
                    <p className="text-xs text-[#667085] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CORE VALUES (5 VALUES)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            badge="Guiding Principles"
            title="The Values That Guide"
            highlight="Our Work"
            description="The core standards that shape every decision, architectural choice, and creative execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white p-6 rounded-2xl border border-[#E7E9F2] shadow-2xs flex flex-col justify-between group hover:border-[#3027D9]/40 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F6F7FC] border border-[#E7E9F2] flex items-center justify-center text-[#3027D9] mb-4 shadow-2xs group-hover:bg-[#3027D9] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#111827] mb-2">{val.title}</h3>
                    <p className="text-xs text-[#667085] leading-relaxed">{val.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#F6F7FC] text-[10px] font-mono text-[#667085]">
                    0{idx + 1} &bull; BYTELYX Value
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            CAPABILITIES SHOWCASE
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            badge="End-to-End Capabilities"
            title="Comprehensive Services For"
            highlight="Modern Needs"
            description="From digital products to mobile experiences and strategic marketing, we deliver coordinated solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilitiesList.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-white p-7 rounded-2xl border border-[#E7E9F2] shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F6F7FC] border border-[#E7E9F2] flex items-center justify-center text-[#3027D9] mb-5 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">{cap.title}</h3>
                    <p className="text-xs text-[#667085] leading-relaxed">{cap.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#F6F7FC] flex items-center gap-1.5 text-xs text-[#3027D9] font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Active Capability</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            DEVELOPMENT PROCESS SECTION
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionHeading
            badge="Execution Framework"
            title="From First Thought to"
            highlight="Final Experience"
            description="Our disciplined, four-phase path from initial discovery through production deployment."
          />

          <DevelopmentTimeline />
        </section>

        {/* =========================================================================
            CTA SECTION
           ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#08085B] via-[#080866] to-[#3027D9] text-white p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Build What's Next?
              </h2>
              <p className="text-base text-blue-100/80 leading-relaxed">
                Whether you need a high-converting web platform, a Flutter mobile application, or digital growth positioning, let's start a conversation.
              </p>
              <div className="pt-2">
                <Button
                  to="/contact"
                  size="lg"
                  className="bg-white text-[#08085B] hover:bg-blue-50 shadow-md"
                  icon={ArrowRight}
                >
                  Let's Talk About Your Project
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
