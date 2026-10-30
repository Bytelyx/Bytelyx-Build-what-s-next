import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Layout,
  Smartphone,
  Cpu,
  Palette,
  Cloud,
  ShieldCheck,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  X
} from 'lucide-react';
import { servicesData } from '../data/services';

gsap.registerPlugin(ScrollTrigger);

// Icon mapping dictionary
const iconMap = {
  Code2,
  Layout,
  Smartphone,
  Palette,
  Cpu,
  Cloud,
  ShieldCheck,
  Wrench
};

export default function Services() {
  const containerRef = useRef(null);
  const [activeDrawer, setActiveDrawer] = useState(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#06040a] text-white overflow-hidden border-t border-white/10"
    >
      {/* Background Ambient Violet Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#863bff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0a1a] border border-[#863bff]/30 text-[#ede6ff] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#47bfff]" />
            <span>Engineering Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5">
            Enterprise Solutions &bull;{' '}
            <span className="bg-gradient-to-r from-[#863bff] via-[#aa3bff] to-[#47bfff] bg-clip-text text-transparent">
              Engineered to Scale
            </span>
          </h2>

          <p className="text-[#9d96b8] max-w-2xl text-base sm:text-lg leading-relaxed font-sans">
            We provide full-lifecycle software development and digital transformation capabilities, turning complex technical challenges into clean, maintainable, and high-performance digital products.
          </p>
        </div>

        {/* 8-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Code2;
            const isExpanded = activeDrawer?.id === service.id;

            return (
              <div
                key={service.id}
                className={`service-card-item group relative rounded-3xl p-7 bg-[#0d0a1a] border border-white/10 hover:border-[#863bff]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_16px_36px_rgba(134,59,255,0.15)] ${
                  service.bentoSpan.includes('col-span-2') ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Subtle Hover Gradient Accent */}
                <div 
                  className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: service.accentColor }}
                />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold text-[#6e6787] uppercase tracking-wider">
                      {service.number} // CAPABILITY
                    </span>
                    <div 
                      className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: service.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#ede6ff] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono text-[#47bfff] mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#9d96b8] leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-[#ede6ff]"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-white/5 text-[10px] font-mono text-[#6e6787]">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Bar: Stats Badge & Capability Inspector Trigger */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#ede6ff]">
                    {service.stats}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveDrawer(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#863bff] hover:text-[#47bfff] transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Capability Specification Modal */}
      {activeDrawer && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveDrawer(null)}
        >
          <div 
            className="relative w-full max-w-2xl rounded-3xl bg-[#0e0a1f] border border-[#863bff]/30 p-6 sm:p-10 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setActiveDrawer(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#47bfff] bg-[#47bfff]/10 border border-[#47bfff]/20">
                {activeDrawer.number} // ARCHITECTURAL SPECIFICATION
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeDrawer.title}
            </h3>

            <p className="text-sm text-[#9d96b8] mb-6 leading-relaxed">
              {activeDrawer.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#ede6ff] mb-3">
                Core Engineering Capabilities
              </h4>
              <ul className="space-y-2.5">
                {activeDrawer.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#f8f7fc]">
                    <CheckCircle2 className="w-4 h-4 text-[#47bfff] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#ede6ff] mb-3">
                Supported Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeDrawer.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#ede6ff]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#9d96b8]">
                {activeDrawer.stats}
              </span>

              <a
                href="#contact"
                onClick={() => setActiveDrawer(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#863bff] to-[#47bfff] hover:opacity-95 transition-opacity"
              >
                <span>Request Custom Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
