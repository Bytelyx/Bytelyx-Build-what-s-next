
import React, { useEffect, useState } from 'react';
import { SpecialCard } from './SpecialCard';
import { Star, Quote } from 'lucide-react';

export function OurPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'James Carter',
      role: 'Marketing Director, Innolystic',
      quote:
        '“Bytelyx’s intelligent digital tools transformed how we operate, saving hours of manual workflow and driving our productivity forward.”',
      avatar: '/images/projects/ourPartner1.avif',
      rating: 5,
    },
    {
      name: 'Emily Zhang',
      role: 'CEO, FutureSync Global',
      quote:
        '“The team at Bytelyx delivered outstanding results, elevating our platform performance and operational efficiency beyond what we imagined!”',
      avatar: '/images/projects/ourPartner2.avif',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Founder & CTO, NexGen Ventures',
      quote:
        '“Bytelyx’s engineering excellence, transparency, and agility helped us build and launch our mission-critical fintech solution ahead of schedule.”',
      avatar: '/images/projects/ourPartner3.avif',
      rating: 5,
    },
  ];

  // Automatically switch testimonial every 5 seconds.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <section
      className="relative mx-auto w-full overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        width: 'calc(100% - clamp(32px, 10vw, 180px))',
        maxWidth: '1240px',
      }}
      aria-label="Partner Testimonials"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[350px] rounded-full bg-[#307FE2]/[0.07] blur-[120px]" />

      {/* Section Heading */}
      <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#307FE2]/25 bg-[#307FE2]/10 px-5 py-2 text-xs font-semibold tracking-wider text-[#05C3DE] mb-6">
          <span className="size-1.5 rounded-full bg-[#05C3DE] animate-pulse" />
          TESTIMONIALS
        </span>

        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          <span className="bg-gradient-to-b from-white via-white to-white/65 bg-clip-text text-transparent">
            From Our{' '}
          </span>
          <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
            Partners
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          Our clients’ success is our greatest achievement. Here's what
          founders, teams, and partners say about working with Bytelyx.
        </p>

        <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#05C3DE]/70 to-transparent" />
      </div>

      {/* Testimonial Card */}
      <div
        className="relative z-10 mx-auto w-full"
        style={{ maxWidth: '920px' }}
      >
        <SpecialCard className="relative overflow-hidden !p-0">
          <div className="relative overflow-hidden rounded-[inherit] p-6 sm:p-10 lg:p-12">

            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[#307FE2]/10 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-[#05C3DE]/[0.07] blur-[90px]" />

            {/* Quote Icon & Rating */}
            <div className="relative mb-16 sm:mb-20 flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-[#307FE2]/25 bg-[#307FE2]/10">
                <Quote className="size-5 text-[#05C3DE]" />
              </div>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>

            {/* Quote Text */}
            <div className="relative min-h-[120px]">
              <p
                key={currentIndex}
                className="text-lg font-light italic leading-relaxed text-white/90 sm:text-xl lg:text-2xl animate-[fadeIn_0.7s_ease-out]"
              >
                {current.quote}
              </p>
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

            {/* Author Details */}
            <div className="relative flex flex-wrap items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="size-14 rounded-full border-2 border-[#307FE2]/40 object-cover sm:size-16"
                />

                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {current.name}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-[#05C3DE] sm:text-sm">
                    {current.role}
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold tracking-[0.2em] text-white/25">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
            </div>
          </div>
        </SpecialCard>

        {/* Automatic Progress Indicator */}
        <div className="mx-auto mt-9 flex max-w-[180px] items-center gap-2">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/10"
            >
              <div
                key={`${currentIndex}-${idx}`}
                className={`absolute inset-y-0 left-0 rounded-full ${
                  idx === currentIndex
                    ? 'w-full bg-gradient-to-r from-[#307FE2] to-[#05C3DE] animate-[testimonialProgress_5s_linear_forwards]'
                    : idx < currentIndex
                      ? 'w-full bg-[#307FE2]/60'
                      : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
          Client Stories
        </p>
      </div>

      {/* Bottom Decorative Line */}
      <div className="pointer-events-none relative mx-auto mt-20 h-px w-3/4 max-w-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Animations */}
      <style>{`
        @keyframes testimonialProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default OurPartners;
