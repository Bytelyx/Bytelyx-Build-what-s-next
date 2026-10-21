import React, { useState } from 'react';
import { SpecialCard } from './SpecialCard';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function OurPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'James Carter',
      role: 'Marketing Director, Innolystic',
      quote: '“FikraTech’s intelligent digital tools transformed how we operate, saving hours of manual workflow and driving our productivity forward.”',
      avatar: '/images/projects/ourPartner1.avif',
      rating: 5,
    },
    {
      name: 'Emily Zhang',
      role: 'CEO, FutureSync Global',
      quote: '“The team at FikraTech delivered outstanding results, elevating our platform performance and operational efficiency beyond what we imagined!”',
      avatar: '/images/projects/ourPartner2.avif',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Founder & CTO, NexGen Ventures',
      quote: '“FikraTech’s engineering excellence, transparency, and agility helped us build and launch our mission-critical fintech solution ahead of schedule.”',
      avatar: '/images/projects/ourPartner3.avif',
      rating: 5,
    },
  ];

  const prev = () => {
    setCurrentIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const next = () => {
    setCurrentIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  };

  return (
    <section className="mb-20 max-w-7xl mx-auto px-4 w-full" aria-label="Partner Testimonials">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#05C3DE] bg-[#307FE2]/10 border border-[#307FE2]/20 mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent from-white via-white to-white/70 bg-gradient-to-b">
            From Our{' '}
          </span>
          <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
            Partners
          </span>
        </h2>
        <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
          Our clients’ success is our greatest achievement. Here’s what founders, teams, and partners say about working with FikraTech.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <SpecialCard className="p-8 md:p-12 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute -top-20 -left-20 size-48 rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Stars */}
          <div className="flex gap-1 mb-6 text-amber-400">
            {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="text-base sm:text-lg md:text-xl font-light text-white/90 leading-relaxed mb-8 italic">
            {testimonials[currentIndex].quote}
          </p>

          {/* Author Details */}
          <div className="flex items-center gap-4">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              className="size-14 rounded-full object-cover border-2 border-[#307FE2]/40"
            />
            <div>
              <h3 className="text-base font-bold text-white">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-xs text-[#05C3DE] font-medium">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </SpecialCard>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="size-10 rounded-full border border-white/10 bg-[#0A1825] hover:bg-[#15212C] text-white flex items-center justify-center transition cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-gradient-to-r from-[#307FE2] to-[#05C3DE]' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="size-10 rounded-full border border-white/10 bg-[#0A1825] hover:bg-[#15212C] text-white flex items-center justify-center transition cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
