import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReadyToStart } from '../components/ReadyToStart';
import { Calendar, Clock, User, ArrowLeft, Share2, CheckCircle2 } from 'lucide-react';

export function BlogDetails() {
  const { slug } = useParams();

  const benefits = [
    {
      title: 'Higher User Satisfaction',
      desc: 'Smooth, frictionless digital experiences create happy users who are significantly more likely to return and recommend your software.',
    },
    {
      title: 'Increased Conversion Rates',
      desc: 'Thoughtful visual hierarchy and intuitive paths guide users naturally toward desired business actions.',
    },
    {
      title: 'Stronger Brand Loyalty',
      desc: 'Memorable, aesthetically refined experiences build meaningful emotional connections that keep clients coming back.',
    },
    {
      title: 'Reduced Development Costs',
      desc: 'Validating usability through prototypes from the start helps avoid costly engineering redesigns, refactors, and post-launch bug patches.',
    },
    {
      title: 'Competitive Advantage',
      desc: 'In crowded digital markets, an exceptional and responsive UI/UX sets your product miles apart from legacy competitors.',
    },
  ];

  return (
    <div className="flex w-full flex-col items-center">
      {/* Article Header */}
      <article className="relative mx-auto w-full max-w-4xl px-4 pt-6 md:px-8 lg:pt-10">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#05C3DE] transition hover:text-white mb-6"
        >
          <ArrowLeft className="size-3.5" /> Back to Insights
        </Link>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="rounded-full border border-[#307FE2]/30 bg-[#307FE2]/15 px-3 py-1 text-xs font-medium text-[#05C3DE]">
            UI/UX Design
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          The Best Collections of Real UX/UI Design Patterns | 2024
        </h1>

        {/* Author & Meta */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-4 text-xs text-white/70">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white font-bold">
              RH
            </div>
            <div>
              <p className="font-semibold text-white">Razan Halaweh</p>
              <p className="text-[0.7rem] text-white/50">Senior UI/UX Designer at FikraTech</p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5 text-[#05C3DE]" /> October 21, 2024
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-[#05C3DE]" /> 4 min read
            </span>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="my-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0A141E] shadow-2xl">
          <img
            src="/images/blogdetails.avif"
            alt="UI/UX Design Patterns"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Body Content */}
        <div className="space-y-8 text-sm font-light leading-relaxed text-[#D1D5DB] md:text-base md:leading-8">
          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl mb-3">
              Why Great UI/UX Design Shapes Digital Success
            </h2>
            <p>
              In today’s fast-moving digital world, users expect more than just a good-looking product — they expect an experience that feels effortless, intuitive, and meaningful. That’s where great UI/UX design comes into play. It’s no longer a “nice-to-have” — it’s the foundation of building digital products that truly connect with people.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0A141E]/80 p-6 md:p-8">
            <h3 className="text-lg font-bold text-white md:text-xl mb-2">
              What is the Difference Between UI and UX?
            </h3>
            <p className="mb-4">
              <strong>User Interface (UI)</strong> design is all about how a product looks: the colors, typography, buttons, iconography, and spacing that shape the visual presentation. A beautiful UI can attract users and establish an immediate sense of trust — but aesthetics alone are not enough.
            </p>
            <p>
              <strong>User Experience (UX)</strong> design goes deeper. It focuses on how the product feels to interact with. UX centers on user journeys, removing cognitive friction, and solving real problems with effortless steps. When UI and UX harmonize, the result is magical: products that are both visually captivating and genuinely useful.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl mb-3">
              Why UI/UX Design Matters More Than Ever
            </h2>
            <p>
              Modern users have infinite options at their fingertips. If an application feels confusing, slow, or frustrating, users will abandon it within seconds. Investing in human-centric design builds enduring trust, elevates your brand reputation, and directly drives business growth through increased retention and conversion velocity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl mb-4">
              Key Benefits of Purposeful UI/UX Design
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((b, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-[#0A141E] p-5">
                  <div className="flex items-center gap-2 mb-2 text-[#05C3DE]">
                    <CheckCircle2 className="size-4 shrink-0" />
                    <h4 className="font-semibold text-white text-sm">{b.title}</h4>
                  </div>
                  <p className="text-xs text-[#828282] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="text-lg font-bold text-white mb-2">
              Conclusion: Design is Not Just How It Looks — It’s How It Works
            </h3>
            <p className="italic text-white/80">
              “At its heart, UI/UX design is about empathy. It's about understanding real people — their goals, frustrations, and desires — and crafting experiences that feel natural and meaningful. At FikraTech, we’re passionate about creating designs that don’t just meet expectations, but exceed them — turning ideas into impactful digital realities.”
            </p>
          </div>
        </div>
      </article>

      {/* Ready to Start CTA */}
      <ReadyToStart />
    </div>
  );
}

export default BlogDetails;
