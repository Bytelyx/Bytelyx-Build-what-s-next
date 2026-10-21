import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import { TrustedBy } from '../components/TrustedBy';
import { SpecialCard } from '../components/SpecialCard';
import { DiamondScene } from '../components/DiamondScene';
import { HeroScene } from '../components/HeroScene';
import { ReadyToStart } from '../components/ReadyToStart';
import { projectsData } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const navigate = useNavigate();
  const mainRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroCtaRef = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);

  const [projectTab, setProjectTab] = useState('private');
  const [achievementsHovered, setAchievementsHovered] = useState(false);
  const [visionHovered, setVisionHovered] = useState(false);
  const [puzzleHovered, setPuzzleHovered] = useState(false);
  const [mobileHovered, setMobileHovered] = useState(false);

  const privateProjects = projectsData.filter((p) => p.type === 'private');
  const governmentProjects = projectsData.filter((p) => p.type === 'government');
  const activeProjects = projectTab === 'private' ? privateProjects : governmentProjects;

  // Trigger celebration confetti
  const triggerConfetti = (e) => {
    setAchievementsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 70,
      origin: { x, y },
      colors: ['#05c3de', '#307fe2', '#6366f1', '#facc15', '#4ade80'],
      disableForReducedMotion: true,
    });
  };

  // GSAP Animations and ScrollTriggers
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animation
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (heroHeadingRef.current) {
        heroTl.fromTo(
          heroHeadingRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, delay: 0.1 }
        );
      }

      if (heroSubtitleRef.current) {
        heroTl.fromTo(
          heroSubtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        );
      }

      if (heroCtaRef.current) {
        heroTl.fromTo(
          heroCtaRef.current,
          { opacity: 0, scale: 0.85, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.4)' },
          '-=0.6'
        );
      }

      // 2. Section Scroll Reveals
      const revealSections = document.querySelectorAll('.gsap-reveal-section');
      revealSections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Staggered Bento Story Cards
      const bentoCards = document.querySelectorAll('.gsap-bento-card');
      if (bentoCards.length > 0) {
        gsap.fromTo(
          bentoCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.gsap-bento-grid',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 4. Staggered Offer Cards
      const offerCards = document.querySelectorAll('.gsap-offer-card');
      if (offerCards.length > 0) {
        gsap.fromTo(
          offerCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.gsap-offer-grid',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 5. Achievement Numeric Counter Animation
      if (stat1Ref.current && stat2Ref.current && stat3Ref.current) {
        const statsObj = { count1: 0, count2: 0, count3: 0 };
        ScrollTrigger.create({
          trigger: stat1Ref.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(statsObj, {
              count1: 100,
              count2: 15,
              count3: 20,
              duration: 2.2,
              ease: 'power2.out',
              onUpdate: () => {
                if (stat1Ref.current) stat1Ref.current.innerText = `${Math.floor(statsObj.count1)}%`;
                if (stat2Ref.current) stat2Ref.current.innerText = `${Math.floor(statsObj.count2)}+`;
                if (stat3Ref.current) stat3Ref.current.innerText = `${Math.floor(statsObj.count3)}+`;
              },
            });
          },
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="flex w-full flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="relative mx-auto mb-16 w-full max-w-7xl isolate overflow-hidden px-4 pt-4 text-center md:px-10 lg:px-8 lg:pt-6 xl:px-14 xl:pt-10 2xl:px-24 2.5xl:px-32 3xl:container 3xl:px-48" aria-label="Hero">
        {/* Three.js Interactive Particle Background */}
        <HeroScene />

        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] opacity-75 blur-[100px] md:w-[900px]" />

        {/* Main Heading */}
        <h1
          ref={heroHeadingRef}
          className="relative z-10 mx-auto w-full text-3xl font-medium leading-tight md:text-5xl lg:mb-2 lg:w-4/5 lg:text-5xl 2xl:text-7xl 3xl:mb-16 2.5xl:mb-12"
        >
          <span className="block bg-gradient-to-b from-foreground-from via-white to-foreground-to bg-clip-text py-2 text-transparent">
            Bringing Your Vision to Life with{' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Unmatched Expertise.
            </span>
          </span>
        </h1>

        {/* Subtitle & CTA */}
        <div className="group relative isolate space-y-6 py-4 pb-10 md:pb-14 lg:space-y-12 lg:py-8 lg:pb-16 3xl:space-y-16">
          <p
            ref={heroSubtitleRef}
            className="relative z-10 mx-auto mb-8 max-w-2xl text-xs font-light leading-6 text-white/90 md:text-xl lg:mb-8 lg:text-base 3xl:mb-16"
          >
            We build exceptional digital products that bring ideas to life.
          </p>

          {/* Glowing Discover Services CTA Button */}
          <div ref={heroCtaRef} className="relative z-10 inline-block">
            <Link
              to="/services"
              className="relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full border border-white/20 bg-gradient-to-r from-[#307FE2] to-[#05C3DE] px-6 py-3.5 text-xs font-medium text-white shadow-[0_0_20px_rgba(48,127,226,0.3)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(48,127,226,0.5),0_0_60px_rgba(5,195,222,0.3)] md:px-8 md:py-4 md:text-lg lg:px-6 lg:py-3 lg:text-sm xl:px-8 xl:py-4"
            >
              {/* Spinning gradient ray */}
              <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-transparent bg-clip-border">
                <div className="absolute -left-36 h-20 w-64 origin-right animate-spin rounded-full bg-gradient-to-b from-white/30 to-transparent duration-5000" />
              </div>

              {/* Sparkle Stars */}
              <div className="relative flex items-center">
                <span className="animate-pulse text-white">
                  <svg viewBox="0 0 24 24" className="size-4 fill-current">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                </span>
                <span className="ms-1 size-2 animate-ping text-cyan-200">
                  <svg viewBox="0 0 24 24" className="size-2 fill-current">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                </span>
              </div>

              <span className="relative z-10 font-semibold tracking-wide">
                Discover Services
              </span>

              {/* Bottom Light Glow */}
              <div className="pointer-events-none absolute -bottom-6 left-0 z-20 h-10 w-full bg-white/20 blur-lg" />
            </Link>
          </div>

          {/* Radial Light Orb & Horizontal Beam */}
          <div className="pointer-events-none absolute -bottom-36 left-1/2 z-0 size-40 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#81a1f9_0%,_#6ac8ff_44%,_#6ee2fc_54%,_#245bf1_100%)] opacity-70 blur-2xl transition-transform duration-1000 group-hover:scale-125 lg:-bottom-40 lg:size-48 lg:blur-3xl xl:-bottom-80 xl:size-80 xl:blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-64 w-3/4 -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(48,127,226,0.45)_0%,_rgba(5,195,222,0.25)_35%,_transparent_75%)] opacity-90 blur-[60px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6DA5FF] to-transparent shadow-[0_-2px_10px_rgba(80,150,255,0.4)]" />
        </div>
      </section>

      {/* 2. TRUSTED BY INNOVATORS */}
      <div className="w-full">
        <TrustedBy />
      </div>

      {/* 3. THE STORY OF FIKRATECH */}
      <section className="gsap-reveal-section 3xl:container 2.5xl:px-32 3xl:px-48 mx-auto mt-20 w-full max-w-7xl space-y-10 px-4 md:px-10 lg:my-24 lg:px-8 xl:mb-20 xl:mt-32 xl:space-y-16 xl:px-14 2xl:px-24" aria-label="The Story of FikraTech">
        {/* Section Header */}
        <div className="m-auto flex flex-col items-center justify-center gap-2 text-center lg:gap-4 xl:gap-6">
          <div className="bottomBorder flex items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
            <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
            <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
              What is FikraTech
            </span>
          </div>

          <h2 className="bg-gradient-to-b from-foreground-from to-foreground-to bg-clip-text text-2xl font-medium text-transparent md:text-4xl lg:text-5xl xl:text-6xl">
            The Story of{' '}
            <span className="bg-gradient-to-b from-primary-from to-primary-to bg-clip-text text-transparent">
              FikraTech
            </span>
          </h2>

          <p className="max-w-3xl text-[0.85rem] font-light text-[#818B95] md:text-lg lg:text-sm xl:text-base xl:leading-6">
            More than a tech company — we are your innovation partner. Discover how FikraTech blends expertise, passion, and technology to redefine digital success.
          </p>
        </div>

        {/* 12-Column Bento Grid */}
        <div className="gsap-bento-grid grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-4 xl:gap-8">
          {/* Card 1: What is FikraTech? */}
          <SpecialCard className="gsap-bento-card group col-span-12 flex flex-col items-start p-6 md:p-8 lg:col-span-4">
            <h3 className="mb-3 font-bold text-white md:text-3xl lg:text-base xl:mb-5 xl:text-2xl">
              What is FikraTech?
            </h3>

            <p className="text-start text-xs font-light leading-5 text-[#828282] md:text-xl lg:text-xs xl:text-sm xl:leading-7">
              We are a global technology partner that transforms bold ideas into smart, scalable solutions empowering businesses to grow, connect, and lead in the digital era.
            </p>

            {/* Concentric Rotating Squircle Rings with FikraTech Logo */}
            <div className="relative m-auto mt-4 flex size-40 items-center justify-center md:mt-8 md:size-64 lg:size-44 xl:size-56">
              <span className="absolute z-10 ms-3 size-[40%] rounded-[35%] transition-transform duration-500 group-hover:scale-110">
                <img
                  src="/images/home/story/image1.svg"
                  alt="FikraTech Symbol"
                  className="h-full w-full object-contain"
                />
              </span>

              {/* Concentric Gradient Rings */}
              <span className="absolute size-[60%] rounded-[35%] border-2 border-[#307FE2]/50 opacity-90 transition-transform duration-700 group-hover:rotate-45" />
              <span className="absolute size-[75%] rounded-[35%] border-2 border-[#05C3DE]/40 opacity-70 transition-transform duration-700 group-hover:-rotate-45" />
              <span className="absolute size-[90%] rounded-[35%] border-2 border-[#307FE2]/30 opacity-40 transition-transform duration-700 group-hover:rotate-90" />
              <span className="absolute size-[105%] rounded-[35%] border-2 border-[#05C3DE]/20 opacity-20 transition-transform duration-700 group-hover:-rotate-90" />
            </div>
          </SpecialCard>

          {/* Card 2: Our Vision */}
          <div
            className="gsap-bento-card col-span-12 lg:col-span-8"
            onMouseEnter={() => setVisionHovered(true)}
            onMouseLeave={() => setVisionHovered(false)}
          >
            <SpecialCard className="group/vision flex h-full flex-col items-start p-6 transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] md:p-8">
              <h3 className="mb-3 font-bold text-white md:text-3xl lg:text-base xl:mb-5 xl:text-2xl">
                Our Vision
              </h3>

              <p className="max-w-2xl text-start text-xs font-light leading-5 text-[#828282] md:text-xl lg:text-xs xl:text-sm xl:leading-7">
                At FikraTech, we believe technology has no borders. Our vision is to create a future where ideas, people, and businesses are seamlessly connected — building a smarter, more unified world.
              </p>

              {/* World Map with interactive network overlay */}
              <div className="relative m-auto mt-4 flex h-[12rem] w-full max-w-[42rem] items-center justify-center overflow-hidden md:h-[18rem] lg:h-[14rem] xl:h-[18rem]">
                <img
                  src="/images/home/story/image2.svg"
                  alt="FikraTech Global Vision Map"
                  className={`relative z-10 h-full w-full object-contain transition-all duration-700 ${
                    visionHovered ? 'brightness-125 drop-shadow-[0_0_18px_rgba(5,195,222,0.25)]' : ''
                  }`}
                />

                {/* Network Constellation Nodes */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 689 290"
                  preserveAspectRatio="xMidYMid meet"
                  className={`pointer-events-none absolute inset-0 z-20 h-full w-full transition-opacity duration-500 ${
                    visionHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <defs>
                    <mask id="fikra-continent-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="689" height="290">
                      <image href="/images/home/story/image2.svg" x="0" y="0" width="689" height="290" preserveAspectRatio="none" />
                    </mask>
                  </defs>
                  <g mask="url(#fikra-continent-mask)">
                    {Array.from({ length: 36 }, (_, row) =>
                      Array.from({ length: 80 }, (_, col) => {
                        const x = col * 8.6 + (row % 2) * 4.3 + 5;
                        const y = row * 7.5 + 5;
                        const visible = (row * 13 + col * 17) % 4 !== 0;
                        if (!visible || x > 684 || y > 286) return null;
                        const cyan = (row + col) % 3 === 0;

                        return (
                          <circle
                            key={`${row}-${col}`}
                            cx={x}
                            cy={y}
                            r={cyan ? 1.6 : 1.1}
                            fill={cyan ? '#05C3DE' : '#307FE2'}
                            className="animate-pulse"
                            style={{ animationDelay: `${((row * 2 + col) % 10) * 100}ms` }}
                          />
                        );
                      })
                    )}
                  </g>
                </svg>

                {/* Subtle Radial Atmosphere */}
                <div
                  className={`pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(48,127,226,0.2),transparent_70%)] transition-opacity duration-700 ${
                    visionHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </SpecialCard>
          </div>

          {/* Card 3: What We Do */}
          <SpecialCard className="gsap-bento-card group col-span-12 flex flex-col items-start p-6 md:p-8 lg:col-span-3">
            <h3 className="mb-3 font-bold text-white md:text-3xl lg:text-base xl:mb-5 xl:text-2xl">
              What We Do
            </h3>

            <p className="text-start text-xs font-light leading-5 text-[#828282] md:text-xl lg:text-[0.65rem] lg:leading-4 xl:text-xs xl:leading-5">
              At FikraTech, we turn ideas into smart, scalable digital solutions. From intuitive apps to powerful platforms, we design, develop, and deliver technology that drives real impact.
            </p>

            {/* Marquee Tags */}
            <div className="my-5 w-full space-y-3 overflow-hidden xl:space-y-4">
              {[
                ['App Development', 'Web Platforms', 'IT Consulting', 'Fintech Solutions', 'Edtech Solutions'],
                ['Business Automation', 'Data Analytics', 'Custom Software', 'Business Automation', 'Data Analytics'],
                ['App Development', 'Web Platforms', 'IT Consulting', 'Fintech Solutions', 'Edtech Solutions'],
              ].map((items, rowIndex) => (
                <div key={rowIndex} className="w-full overflow-hidden">
                  <div
                    className={`flex w-max gap-2 ${
                      rowIndex === 1 ? 'animate-marquee-reverse' : 'animate-marquee-slow'
                    }`}
                  >
                    {[0, 1].map((copy) => (
                      <div key={copy} aria-hidden={copy === 1 ? 'true' : undefined} className="flex shrink-0 gap-2">
                        {items.map((item, idx) => (
                          <span
                            key={`${item}-${idx}`}
                            className="shrink-0 rounded-lg border border-primary/40 bg-primary/10 px-2.5 py-1 text-[0.65rem] font-medium text-white shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SpecialCard>

          {/* Card 4: Our Achievements */}
          <div
            className="gsap-bento-card col-span-12 lg:col-span-6"
            onMouseEnter={triggerConfetti}
            onMouseLeave={() => setAchievementsHovered(false)}
          >
            <SpecialCard className="group relative isolate flex h-full flex-col items-start overflow-hidden p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_35px_rgba(48,127,226,0.18)] md:p-8">
              <h3 className="relative z-10 mb-3 font-bold text-white md:text-3xl lg:text-base xl:mb-5 xl:text-2xl">
                Our Achievements
              </h3>

              <p className="relative z-10 text-start text-xs font-light leading-5 text-[#828282] md:text-xl lg:text-xs xl:text-sm xl:leading-7">
                Every number tells a story of challenges overcome, partnerships built, and dreams realized. Our achievements are not just milestones; they are a reflection of the trust our clients place in us and the passion that drives us forward.
              </p>

              {/* Numeric Counters */}
              <div className="relative z-10 m-auto mt-4 flex w-full justify-around py-8 md:py-10">
                <div className="text-center">
                  <span
                    ref={stat1Ref}
                    className="block bg-gradient-to-b from-primary-from to-primary-to bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-4xl xl:text-5xl"
                  >
                    100%
                  </span>
                  <p className="mt-1 text-xs text-foreground/80 md:text-base">
                    Client Satisfaction
                  </p>
                </div>

                <div className="text-center">
                  <span
                    ref={stat2Ref}
                    className="block bg-gradient-to-b from-primary-from to-primary-to bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-4xl xl:text-5xl"
                  >
                    15+
                  </span>
                  <p className="mt-1 text-xs text-foreground/80 md:text-base">
                    Projects Launched
                  </p>
                </div>

                <div className="text-center">
                  <span
                    ref={stat3Ref}
                    className="block bg-gradient-to-b from-primary-from to-primary-to bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-4xl xl:text-5xl"
                  >
                    20+
                  </span>
                  <p className="mt-1 text-xs text-foreground/80 md:text-base">
                    Experts
                  </p>
                </div>
              </div>
            </SpecialCard>
          </div>

          {/* Card 5: Our Values */}
          <SpecialCard className="gsap-bento-card group col-span-12 flex flex-col items-start p-6 md:p-8 lg:col-span-3">
            <h3 className="mb-3 font-bold text-white md:text-3xl lg:text-base xl:mb-5 xl:text-2xl">
              Our Values
            </h3>

            <p className="text-start text-xs font-light leading-5 text-[#828282] md:text-xl lg:text-xs xl:text-sm xl:leading-7">
              We innovate with purpose, act with integrity, deliver with excellence, grow through collaboration, and always push beyond limits.
            </p>

            {/* Three.js 3D Interactive Diamond Scene */}
            <div className="relative mt-auto flex h-44 w-full flex-none items-center justify-center overflow-visible transition-all duration-700 group-hover:brightness-125 md:h-52 lg:h-40 xl:h-48">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(5,195,222,0.2),transparent_65%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
              <DiamondScene />
            </div>
          </SpecialCard>
        </div>
      </section>

      {/* 4. WHAT WE OFFER */}
      <section className="gsap-reveal-section 3xl:container 2.5xl:px-32 3xl:px-48 mx-auto w-full max-w-7xl space-y-10 overflow-hidden px-4 py-10 pt-20 md:px-10 lg:px-8 xl:space-y-16 xl:px-14 2xl:px-24" aria-label="What We Offer">
        {/* Section Header */}
        <div className="m-auto flex flex-col items-center justify-center gap-2 text-center lg:gap-4 xl:gap-6">
          <div className="bottomBorder flex items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
            <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
            <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
              Unlocking Potential
            </span>
          </div>

          <h2 className="bg-gradient-to-b from-foreground-from to-foreground-to bg-clip-text text-2xl font-medium text-transparent md:text-4xl lg:text-5xl xl:text-6xl">
            What We{' '}
            <span className="bg-gradient-to-b from-primary-from to-primary-to bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          <p className="max-w-3xl text-[0.85rem] font-light text-[#818B95] md:text-lg lg:text-sm xl:text-base xl:leading-6">
            We craft digital tools, platforms, and systems that power your ambitions. Whether you need a sleek app, scalable software, or IT infrastructure — we make it happen, beautifully.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="gsap-offer-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Business Automation (Puzzle) */}
          <div
            onMouseEnter={() => setPuzzleHovered(true)}
            onMouseLeave={() => setPuzzleHovered(false)}
            className="gsap-offer-card h-full"
          >
            <SpecialCard className="group flex h-full min-h-[22rem] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#307FE2]/50 hover:shadow-[0_12px_35px_rgba(48,127,226,0.15)]">
              {/* 4 Puzzle SVGs */}
              <div className="relative mx-auto h-40 w-full max-w-[15rem] overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <span
                  className={`absolute left-4 top-4 w-28 transition-transform duration-500 ${
                    puzzleHovered ? '-translate-x-1 -translate-y-1' : ''
                  }`}
                >
                  <img src="/images/home/offer/Puzzle/image1.svg" alt="Puzzle piece 1" className="w-full object-contain" />
                </span>
                <span
                  className={`absolute left-4 top-16 w-28 transition-transform duration-500 ${
                    puzzleHovered ? '-translate-x-1 translate-y-1' : ''
                  }`}
                >
                  <img src="/images/home/offer/Puzzle/image2.svg" alt="Puzzle piece 2" className="w-full object-contain" />
                </span>
                <span
                  className={`absolute left-16 top-16 w-28 transition-transform duration-500 ${
                    puzzleHovered ? 'translate-x-1 translate-y-1' : ''
                  }`}
                >
                  <img src="/images/home/offer/Puzzle/image3.svg" alt="Puzzle piece 3" className="w-full object-contain" />
                </span>
                <span
                  className={`absolute left-16 top-4 w-28 transition-transform duration-500 ${
                    puzzleHovered ? 'translate-x-1 -translate-y-1' : ''
                  }`}
                >
                  <img src="/images/home/offer/Puzzle/image4.svg" alt="Puzzle piece 4" className="w-full object-contain" />
                </span>
              </div>

              <div className="mt-4 space-y-2 text-start">
                <h3 className="text-base font-semibold text-white">Business Automation</h3>
                <p className="text-xs font-light leading-relaxed text-[#828282]">
                  FikraTech provides business automation solutions to save time and money, streamlining operations for clients.
                </p>
              </div>
            </SpecialCard>
          </div>

          {/* 2. UI/UX Design */}
          <div className="gsap-offer-card h-full">
            <SpecialCard className="group flex h-full min-h-[22rem] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#307FE2]/50 hover:shadow-[0_12px_35px_rgba(48,127,226,0.15)]">
              {/* Layered UI SVGs */}
              <div className="relative mx-auto flex h-40 w-full items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110">
                <div className="flex flex-col gap-2">
                  <img src="/images/home/offer/uiUx/image1.svg" alt="UI icon" className="w-10 object-contain" />
                  <img src="/images/home/offer/uiUx/image2.svg" alt="UI elements" className="w-16 object-contain" />
                  <div className="flex gap-2">
                    <img src="/images/home/offer/uiUx/image3.svg" alt="UI button" className="w-12 object-contain" />
                    <img src="/images/home/offer/uiUx/image4.svg" alt="UI badge" className="w-4 object-contain" />
                  </div>
                  <div className="relative h-12 w-16">
                    <img src="/images/home/offer/uiUx/image5.svg" alt="UI card" className="h-full w-full object-contain" />
                    <span className="absolute inset-0 h-full w-full">
                      <img src="/images/home/offer/uiUx/image6.svg" alt="UI overlay" className="h-full w-full object-contain" />
                    </span>
                    <span className="absolute inset-0 h-full w-full">
                      <img src="/images/home/offer/uiUx/image7.svg" alt="UI cursor" className="h-full w-full object-contain" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-start">
                <h3 className="text-base font-semibold text-white">UI/UX Design</h3>
                <p className="text-xs font-light leading-relaxed text-[#828282]">
                  Fikratech crafts seamless user experiences and stunning interfaces that feel natural, intuitive, and unforgettable.
                </p>
              </div>
            </SpecialCard>
          </div>

          {/* 3. Mobile App Development */}
          <div
            onMouseEnter={() => setMobileHovered(true)}
            onMouseLeave={() => setMobileHovered(false)}
            className="gsap-offer-card h-full"
          >
            <SpecialCard className="group flex h-full min-h-[22rem] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#307FE2]/50 hover:shadow-[0_12px_35px_rgba(48,127,226,0.15)]">
              {/* Mobile Wireframe Mockups */}
              <div className="relative mx-auto h-40 w-full overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <span className="absolute left-2 top-4 w-24">
                  <img src="/images/home/offer/mobile/Clippath1.svg" alt="Mobile mask" className="w-full object-contain" />
                </span>
                <span className="absolute left-2 top-4 w-24">
                  <img src="/images/home/offer/mobile/Clippath2.svg" alt="Mobile frame" className="w-full object-contain" />
                </span>
                <span className={`absolute left-16 top-16 w-6 transition-transform duration-500 ${mobileHovered ? 'translate-x-1' : ''}`}>
                  <img src="/images/home/offer/mobile/arrow1.svg" alt="Arrow 1" className="w-full object-contain" />
                </span>
                <span className="absolute left-12 top-2 w-32">
                  <img src="/images/home/offer/mobile/Frame21.svg" alt="Screen 1" className="w-full object-contain" />
                </span>
                <span className="absolute left-12 top-2 w-32">
                  <img src="/images/home/offer/mobile/Frame22.svg" alt="Screen 2" className="w-full object-contain" />
                </span>
                <span className={`absolute left-28 top-12 w-5 transition-transform duration-500 ${mobileHovered ? '-translate-x-1' : ''}`}>
                  <img src="/images/home/offer/mobile/arrow2.svg" alt="Arrow 2" className="w-full object-contain" />
                </span>
                <span className="absolute left-24 top-2 w-28">
                  <img src="/images/home/offer/mobile/Frame11.svg" alt="Screen 3" className="w-full object-contain" />
                </span>
                <span className="absolute left-24 top-2 w-28">
                  <img src="/images/home/offer/mobile/Frame12.svg" alt="Screen 4" className="w-full object-contain" />
                </span>
              </div>

              <div className="mt-4 space-y-2 text-start">
                <h3 className="text-base font-semibold text-white">Mobile App Development</h3>
                <p className="text-xs font-light leading-relaxed text-[#828282]">
                  Fikratech is known for its mobile app development, showcasing expertise across iOS and Android ecosystems.
                </p>
              </div>
            </SpecialCard>
          </div>

          {/* 4. Software Development */}
          <div className="gsap-offer-card h-full">
            <SpecialCard className="group flex h-full min-h-[22rem] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#307FE2]/50 hover:shadow-[0_12px_35px_rgba(48,127,226,0.15)]">
              {/* Software Architecture SVG */}
              <div className="relative mx-auto flex h-40 w-full items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/images/home/offer/image1.svg"
                  alt="Software development architecture"
                  className="w-full object-contain"
                />
              </div>

              <div className="mt-4 space-y-2 text-start">
                <h3 className="text-base font-semibold text-white">Software Development</h3>
                <p className="text-xs font-light leading-relaxed text-[#828282]">
                  FikraTech excels in creating innovative and creative web platforms tailored to meet diverse enterprise needs.
                </p>
              </div>
            </SpecialCard>
          </div>
        </div>
      </section>

      {/* 5. INNOVATION THROUGH PROJECTS */}
      <section className="gsap-reveal-section 3xl:container 2.5xl:px-32 3xl:px-48 mx-auto my-16 w-full max-w-7xl space-y-10 px-4 md:px-10 lg:px-8 xl:px-14 2xl:px-24" aria-label="Innovation Through Projects">
        <div className="m-auto flex flex-col items-center justify-center gap-2 text-center lg:gap-4 xl:gap-6">
          <div className="bottomBorder flex items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
            <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
            <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
              Proof of Excellence
            </span>
          </div>

          <h2 className="bg-gradient-to-b from-foreground-from to-foreground-to bg-clip-text text-2xl font-medium text-transparent md:text-4xl lg:text-5xl xl:text-6xl">
            Innovation Through{' '}
            <span className="bg-gradient-to-b from-primary-from to-primary-to bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="max-w-3xl text-[0.85rem] font-light text-[#818B95] md:text-lg lg:text-sm xl:text-base xl:leading-6">
            Every project is a story of success. Dive into our portfolio where challenges turn into achievements, and visions are brought to life with precision and creativity.
          </p>

          {/* Tab Filter */}
          <div className="relative m-auto mt-4 flex w-fit rounded-full border border-white/15 bg-[#FFFFFF14] p-1.5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setProjectTab('private')}
              className={`cursor-pointer rounded-full px-6 py-2 text-xs font-medium transition ${
                projectTab === 'private'
                  ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Private Projects
            </button>

            <button
              type="button"
              onClick={() => setProjectTab('government')}
              className={`cursor-pointer rounded-full px-6 py-2 text-xs font-medium transition ${
                projectTab === 'government'
                  ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Government Projects
            </button>
          </div>
        </div>

        {/* Sticky Stacking Project Cards */}
        <div className="relative space-y-8 lg:space-y-16">
          {activeProjects.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => navigate(`/projects/view/${proj.name}`)}
              className="group relative z-0 flex h-72 cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-white/10 pe-5 shadow-2xl transition-all duration-700 md:h-[30rem] lg:sticky lg:top-24 lg:h-[82vh]"
              style={{
                backgroundColor: proj.bgColor,
                top: `${96 + idx * 8}px`,
              }}
            >
              {/* Radial Center Glow */}
              <div
                className="pointer-events-none absolute -z-10 h-full w-full opacity-70 blur-[5rem] transition duration-700 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, ${proj.bgLight}, transparent)`,
                }}
              />

              {/* Decorative Stickers (Sahab) */}
              {proj.id === 'sahab' && (
                <>
                  <div className="pointer-events-none absolute end-[2rem] top-[3rem] w-16 md:end-[5rem] md:top-[6rem] md:w-32 lg:top-1/3 lg:w-36 xl:end-64 xl:w-52">
                    <img
                      src="/images/projects/sahab/sahab2.svg"
                      alt="Sahab Decor 2"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="pointer-events-none absolute start-[2rem] top-[1rem] h-40 w-20 md:top-20 md:w-40 lg:start-44 lg:top-1/3 lg:w-52 xl:start-52 xl:w-64">
                    <img
                      src="/images/projects/sahab/sahab1.svg"
                      alt="Sahab Decor 1"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </>
              )}

              {/* Device Mockup with Project Screenshot */}
              <div className="relative -z-10 -mt-4 w-[20rem] duration-1000 ease-in-out group-hover:scale-[106%] md:w-[34rem] lg:w-[42rem] xl:w-[48rem] 3xl:w-[56rem]">
                {proj.device === 'imac' ? (
                  <div className="relative w-full">
                    <img
                      src={
                        Array.isArray(proj.projectImage)
                          ? proj.projectImage[0]
                          : proj.projectImage
                      }
                      alt={proj.titleEn}
                      className="absolute left-[6.5%] top-[6.5%] h-[58%] w-[87%] rounded-t-sm object-cover object-top"
                    />
                    <img
                      src="/images/projects/iMac.svg"
                      alt="iMac Mockup"
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative w-full">
                    <img
                      src={
                        Array.isArray(proj.projectImage)
                          ? proj.projectImage[0]
                          : proj.projectImage
                      }
                      alt={proj.titleEn}
                      className="absolute left-[2.25rem] top-[0.4rem] h-[78%] w-[78%] rounded-t-md object-cover object-left-top md:left-[3.8rem] md:top-[0.7rem] lg:left-[4.5rem] lg:rounded-t-lg xl:left-[5.6rem] xl:top-[1rem] 3xl:left-[6.8rem] 3xl:top-[1.2rem]"
                    />
                    <img
                      src="/images/projects/MacbookPro.svg"
                      alt="Macbook Pro Mockup"
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Glassmorphic Project Info Bar */}
              <div className="absolute bottom-0 left-0 z-20 flex h-14 w-full items-center justify-between border-t border-white/10 bg-[#09090952] px-6 shadow-[0px_-2px_40px_0px_rgba(209,209,209,0),0px_-2px_10px_0px_rgba(217,217,217,0.11)] backdrop-blur-[22px] duration-700 ease-in-out md:h-20 lg:h-24 lg:translate-y-24 lg:group-hover:translate-y-0 xl:h-28 xl:px-8">
                <div className="space-y-1">
                  <span className="block bg-gradient-to-b from-foreground-from to-foreground-to bg-clip-text text-sm font-semibold text-transparent md:text-2xl xl:text-3xl">
                    {proj.titleEn}
                  </span>
                  <p className="text-[0.65rem] font-light text-white/70 md:text-sm">
                    {proj.categoryEn}
                  </p>
                </div>

                <div className="flex gap-2">
                  {(proj.badgesEn || []).slice(0, 3).map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="hidden rounded-md border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 sm:inline-block"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. READY TO START CTA */}
      <ReadyToStart />

      <style>{`
        @keyframes marqueeTrack {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeTrackReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-slow {
          animation: marqueeTrack 24s linear infinite;
          will-change: transform;
        }
        .animate-marquee-reverse {
          animation: marqueeTrackReverse 24s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

export default Home;
