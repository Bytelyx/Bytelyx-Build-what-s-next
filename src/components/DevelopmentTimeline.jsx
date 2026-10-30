import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Compass, Code2, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function DevelopmentTimeline() {
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand the business, audience, project requirements, and desired outcomes.',
      description: 'We initiate every engagement with thorough alignment—defining core objectives, user personas, technical constraints, and measurable success milestones.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Design',
      tagline: 'Shape the user experience, interface, architecture, and technical direction.',
      description: 'We create intuitive wireframes, responsive UI prototypes, design systems, and software architecture diagrams before writing production code.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Develop',
      tagline: 'Build responsive, maintainable, and functional digital solutions.',
      description: 'Engineering reliable code with modern frameworks, clean modular structure, robust data schemas, and high-performance API integrations.',
      icon: Code2,
    },
    {
      number: '04',
      title: 'Deliver',
      tagline: 'Test, refine, deploy, and support the agreed solution.',
      description: 'Rigorous cross-device testing, performance audits, automated deployment, and structured handover with ongoing maintenance readiness.',
      icon: Rocket,
    },
  ];

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // Animate progress line on scroll
      if (progressBarRef.current && containerRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'bottom 80%',
              scrub: 0.8,
            },
          }
        );
      }

      // Stagger reveal of step cards
      if (stepRefs.current.length > 0) {
        gsap.fromTo(
          stepRefs.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Desktop Horizontal Timeline Track */}
      <div className="hidden lg:block relative mb-12">
        <div className="h-1 w-full bg-[#E7E9F2] rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-gradient-to-r from-[#08085B] via-[#3027D9] to-[#5145FF] origin-left rounded-full"
          />
        </div>
      </div>

      {/* Grid of Steps: Horizontal on Desktop, Vertical on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              ref={(el) => (stepRefs.current[index] = el)}
              className="relative bg-white rounded-2xl p-7 border border-[#E7E9F2] shadow-[0_4px_24px_-6px_rgba(8,8,91,0.04)] hover:shadow-[0_16px_36px_-12px_rgba(48,39,217,0.12)] hover:border-[#3027D9]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step indicator node */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F6F7FC] border border-[#E7E9F2] flex items-center justify-center text-[#3027D9] group-hover:bg-[#3027D9] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="font-mono text-sm font-extrabold text-[#08085B] bg-[#F6F7FC] px-3 py-1 rounded-full border border-[#E7E9F2]">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#08085B] transition-colors mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#3027D9] mb-3 leading-snug">
                  {step.tagline}
                </p>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F6F7FC] flex items-center gap-1.5 text-[11px] font-semibold text-[#667085] group-hover:text-[#08085B] transition-colors">
                <span>Phase {index + 1} of 4</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
