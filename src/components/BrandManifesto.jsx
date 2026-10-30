import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BrandManifesto() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.manifesto-word');
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.15, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: 0.6,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden border-y border-[#E7E9F2]"
    >
      {/* Subtle background ambient linear glow */}
      <div className="absolute inset-0 bg-radial from-[#F6F7FC] via-white to-white pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F7FC] border border-[#E7E9F2] text-xs font-semibold uppercase tracking-wider text-[#3027D9] mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#3027D9]" />
          <span>Brand Manifesto &bull; Building What&apos;s Next</span>
        </div>

        {/* Cinematic Headline with Staggered Word Reveal */}
        <div
          ref={textRef}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] text-[#111827] max-w-4xl mx-auto"
        >
          <span className="manifesto-word inline-block mr-3 text-[#08085B]">Technology</span>
          <span className="manifesto-word inline-block mr-3 text-[#667085]">is the</span>
          <span className="manifesto-word inline-block mr-3 text-[#08085B]">foundation.</span>
          <span className="manifesto-word inline-block mr-3 bg-gradient-to-r from-[#08085B] via-[#3027D9] to-[#5145FF] bg-clip-text text-transparent">Creativity</span>
          <span className="manifesto-word inline-block mr-3 text-[#667085]">is the</span>
          <span className="manifesto-word inline-block mr-3 text-[#3027D9]">difference.</span>
          <span className="manifesto-word inline-block mr-3 bg-gradient-to-r from-[#3027D9] to-[#5145FF] bg-clip-text text-transparent">Growth</span>
          <span className="manifesto-word inline-block mr-3 text-[#667085]">is the</span>
          <span className="manifesto-word inline-block mr-3 text-[#08085B]">goal.</span>
        </div>

        {/* Minimalist 4 Pillars Line */}
        <div className="mt-12 pt-8 border-t border-[#E7E9F2]/70 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold uppercase tracking-widest text-[#667085]">
          <span className="hover:text-[#08085B] transition-colors">Digital</span>
          <span className="w-1 h-1 rounded-full bg-[#3027D9]" />
          <span className="hover:text-[#08085B] transition-colors">Development</span>
          <span className="w-1 h-1 rounded-full bg-[#3027D9]" />
          <span className="hover:text-[#08085B] transition-colors">Design</span>
          <span className="w-1 h-1 rounded-full bg-[#3027D9]" />
          <span className="hover:text-[#08085B] transition-colors">Growth</span>
        </div>
      </div>
    </section>
  );
}
