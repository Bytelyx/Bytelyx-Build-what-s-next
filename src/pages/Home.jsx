import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
import TrustedBy from '../components/TrustedBy';
import { SpecialCard } from '../components/SpecialCard';
import { HeroScene } from '../components/HeroScene';
import { ReadyToStart } from '../components/ReadyToStart';
import { projectsData } from '../data/projectsData';
import Logo from "../assets/logo-01.png";
import lawish from '../assets/lawish.png';

gsap.registerPlugin(ScrollTrigger);


function PremiumServiceVisual({ type, label }) {
  const common = (
    <defs>
      <linearGradient id={`metal-${type}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F5FCFF" />
        <stop offset="38%" stopColor="#65DDF7" />
        <stop offset="72%" stopColor="#307FE2" />
        <stop offset="100%" stopColor="#182C59" />
      </linearGradient>
      <linearGradient id={`glass-${type}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".8" />
        <stop offset="45%" stopColor="#75DFF8" stopOpacity=".28" />
        <stop offset="100%" stopColor="#307FE2" stopOpacity=".12" />
      </linearGradient>
      <radialGradient id={`orb-${type}`}>
        <stop offset="0%" stopColor="#7CF1FF" stopOpacity=".9" />
        <stop offset="100%" stopColor="#307FE2" stopOpacity=".05" />
      </radialGradient>
      <filter id={`shadow-${type}`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>
  );
  return (
    <div className={`service-visual service-visual-${type} relative mx-auto flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl`}>
      <div className="service-orbit service-orbit-one" />
      <div className="service-orbit service-orbit-two" />
      <svg viewBox="0 0 280 170" role="img" aria-label={label} className="service-art relative z-10 h-full w-full overflow-visible">
        {common}
        <ellipse cx="140" cy="139" rx="72" ry="10" fill="#05C3DE" opacity=".18" filter={`url(#shadow-${type})`} />
        {type === 'puzzle' && <>
          <path d="M72 52 L111 30 L151 52 L111 75 Z" fill={`url(#metal-${type})`} stroke="#B7F5FF" strokeOpacity=".75" />
          <path d="M72 52 L111 75 L111 120 L72 96 Z" fill="#2365B5" stroke="#82E9FF" strokeOpacity=".6" />
          <path d="M111 75 L151 52 L151 96 L111 120 Z" fill="#15366E" stroke="#82E9FF" strokeOpacity=".65" />
          <path d="M131 76 L170 54 L209 76 L170 99 Z" fill={`url(#glass-${type})`} stroke="#A9F4FF" strokeWidth="1.5" />
          <path d="M131 76 L170 99 L170 128 L131 105 Z" fill="#174A8B" stroke="#5FD8F7" />
          <path d="M170 99 L209 76 L209 105 L170 128 Z" fill="#10264F" stroke="#5FD8F7" />
          <path d="M82 51 L111 35 L140 51" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity=".8" />
        </>}
        {type === 'ui' && <>
          <g transform="translate(68 25) rotate(-7 70 55)">
            <rect x="5" y="7" width="130" height="94" rx="10" fill="#050F24" stroke="#4CA6E8" strokeWidth="2" />
            <rect x="12" y="14" width="116" height="80" rx="6" fill={`url(#glass-${type})`} />
            <rect x="22" y="24" width="36" height="7" rx="3.5" fill="#DDFBFF" />
            <rect x="22" y="38" width="66" height="4" rx="2" fill="#6ACDEB" opacity=".7" />
            <rect x="22" y="51" width="48" height="27" rx="5" fill="#307FE2" opacity=".8" />
            <rect x="77" y="51" width="40" height="5" rx="2.5" fill="#E5FAFF" opacity=".9" />
            <rect x="77" y="62" width="33" height="4" rx="2" fill="#74DFF7" opacity=".8" />
            <rect x="77" y="72" width="26" height="4" rx="2" fill="#74DFF7" opacity=".5" />
          </g>
          <path d="M186 107 L202 123 L210 109 L220 106 Z" fill="#F4FCFF" stroke="#5ACDEB" strokeWidth="2" />
          <circle cx="205" cy="48" r="18" fill={`url(#orb-${type})`} />
        </>}
        {type === 'mobile' && <>
          <g transform="translate(74 17) rotate(-9 43 66)">
            <rect x="5" y="4" width="74" height="132" rx="14" fill="#070F20" stroke="#A2F1FF" strokeWidth="2" />
            <rect x="11" y="11" width="62" height="118" rx="10" fill={`url(#glass-${type})`} />
            <rect x="31" y="16" width="22" height="3" rx="1.5" fill="#DDFBFF" opacity=".8" />
            <rect x="19" y="32" width="46" height="32" rx="6" fill="#307FE2" />
            <circle cx="32" cy="43" r="7" fill="#8AF0FF" />
            <path d="M22 58 L33 49 L42 56 L51 45 L62 58" stroke="#E6FCFF" strokeWidth="2" fill="none" />
            <rect x="19" y="73" width="42" height="5" rx="2.5" fill="#E9FBFF" />
            <rect x="19" y="83" width="33" height="4" rx="2" fill="#80DDF4" />
            <rect x="19" y="96" width="42" height="20" rx="6" fill="#1F69C3" stroke="#70DDF6" />
          </g>
          <g transform="translate(143 35) rotate(9 43 60)">
            <rect x="4" y="4" width="70" height="116" rx="13" fill="#0A1830" stroke="#438FD9" strokeWidth="2" />
            <rect x="10" y="11" width="58" height="102" rx="8" fill="#102B52" />
            <circle cx="39" cy="43" r="17" fill={`url(#orb-${type})`} />
            <path d="M25 44 L35 54 L54 32" stroke="#B7F8FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <rect x="19" y="71" width="40" height="5" rx="2.5" fill="#DFFAFF" />
            <rect x="19" y="82" width="29" height="4" rx="2" fill="#69D5F2" />
          </g>
        </>}
        {type === 'marketing' && <>
          <path d="M54 122 L90 93 L122 105 L163 62 L204 76 L229 39" fill="none" stroke="#05C3DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M54 122 L90 93 L122 105 L163 62 L204 76 L229 39 L229 132 L54 132 Z" fill="#307FE2" opacity=".15" />
          {[[54, 122], [90, 93], [122, 105], [163, 62], [204, 76], [229, 39]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="8" fill="#0A1C38" stroke="#A4F4FF" strokeWidth="2" /><circle cx={x} cy={y} r="3" fill="#74E9FF" /></g>)}
          <rect x="80" y="28" width="120" height="20" rx="10" fill={`url(#glass-${type})`} stroke="#6ADDF5" strokeOpacity=".65" />
          <circle cx="94" cy="38" r="3" fill="#8DF4FF" />
          <rect x="103" y="35" width="73" height="5" rx="2.5" fill="#E5FCFF" opacity=".8" />
          <rect x="69" y="139" width="142" height="3" rx="1.5" fill="#307FE2" opacity=".5" />
        </>}
        {type === 'ai' && <>
          <g stroke="#56DDF7" strokeOpacity=".75" strokeWidth="1.5">
            <path d="M140 83 L91 42 L188 42 L140 83 L82 112 L199 112 L188 42 L199 112 L91 42 L82 112" />
            <path d="M140 83 L140 27 M140 83 L140 139 M140 83 L48 79 M140 83 L232 79" />
          </g>
          {[[140, 83, 18], [91, 42, 10], [188, 42, 10], [82, 112, 10], [199, 112, 10], [140, 27, 7], [140, 139, 7], [48, 79, 7], [232, 79, 7]].map(([x, y, r], i) => <g key={i}><circle cx={x} cy={y} r={r + 4} fill="#05C3DE" opacity=".12" /><circle cx={x} cy={y} r={r} fill={i === 0 ? '#5DEBFF' : '#1B4D8F'} stroke="#C2F8FF" strokeWidth="1.5" />{i === 0 && <circle cx={x} cy={y} r="7" fill="#F1FFFF" />}</g>)}
          <ellipse cx="140" cy="83" rx="37" ry="55" stroke="#5CE4FF" strokeOpacity=".4" strokeDasharray="4 5" fill="none" />
        </>}
      </svg>
    </div>
  );
}


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
      // 1. Hero entrance animation
      const heroTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      if (heroHeadingRef.current) {
        heroTl.fromTo(
          heroHeadingRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            delay: 0.1,
          }
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
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.4)',
          },
          '-=0.6'
        );
      }

      // 2. Section reveal animations
      const revealSections = gsap.utils.toArray(
        '.gsap-reveal-section'
      );

      revealSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Bento cards
      const bentoCards = gsap.utils.toArray('.gsap-bento-card');

      if (bentoCards.length) {
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

      // 4. Stack only the What We Offer cards.
      const offerSection = document.querySelector(
        '.gsap-offer-stack-section'
      );
      const offerGrid = offerSection?.querySelector(
        '.gsap-offer-grid'
      );
      const offerCards = offerSection
        ? gsap.utils.toArray(
          offerSection.querySelectorAll('.gsap-offer-card')
        )
        : [];

      if (offerSection && offerGrid && offerCards.length) {
        const getCardOffsets = () => {
          const gridRect = offerGrid.getBoundingClientRect();

          return offerCards.map((card) => {
            const cardRect = card.getBoundingClientRect();

            return (
              gridRect.left +
              gridRect.width / 2 -
              (cardRect.left + cardRect.width / 2)
            );
          });
        };

        gsap.set(offerCards, {
          transformOrigin: '50% 50%',
          zIndex: (index) => index + 1,
        });

        const stackTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: offerGrid,
            start: 'top 70%',
            end: '+=450',
            scrub: 1,
            pin: false,
            invalidateOnRefresh: true,
          },
        });

        offerCards.forEach((card, index) => {
          stackTimeline.to(
            card,
            {
              x: () => getCardOffsets()[index],
              y: (index - (offerCards.length - 1) / 2) * 7,
              rotation:
                (index - (offerCards.length - 1) / 2) * 5,
              scale: 0.88,
              zIndex: index + 1,
              duration: 1,
              ease: 'power2.inOut',
            },
            0
          );
        });

        // Recalculate the stack after viewport size changes.
        ScrollTrigger.addEventListener(
          'refreshInit',
          () => gsap.set(offerCards, { x: 0, y: 0, rotation: 0, scale: 1 })
        );
      }
    }, mainRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Project cards: zoom smoothly as each card enters the viewport.
  // This separate effect also re-runs when the Private/Government tab changes.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectCards = gsap.utils.toArray('.gsap-project-card');

      projectCards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0.88,
            opacity: 0.65,
            transformOrigin: 'center center',
          },
          {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, mainRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [projectTab]);

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
            Building What's Next {' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Shaping Tomorrow's Digital World.
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

      {/* 3. THE STORY OF BYTELYX */}
      <section className="gsap-reveal-section 3xl:container 2.5xl:px-32 3xl:px-48 mx-auto mt-20 w-full max-w-7xl space-y-10 px-4 md:px-10 lg:my-24 lg:px-8 xl:mb-20 xl:mt-32 xl:space-y-16 xl:px-14 2xl:px-24" aria-label="The Story of FikraTech">
        {/* Section Header */}
        <div className="m-auto flex flex-col items-center justify-center gap-2 text-center lg:gap-4 xl:gap-6">
          <div className="bottomBorder flex items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
            <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
            <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
              What is ByteLyx
            </span>
          </div>

          <h2 className="bg-gradient-to-b from-foreground-from to-foreground-to bg-clip-text text-2xl font-medium text-transparent md:text-4xl lg:text-5xl xl:text-6xl">
            The Story of{' '}
            <span className="bg-gradient-to-b from-primary-from to-primary-to bg-clip-text text-transparent">
              ByteLyx
            </span>
          </h2>

          <p className="max-w-3xl text-[0.85rem] font-light text-[#818B95] md:text-lg lg:text-sm xl:text-base xl:leading-6">
            More than a software company — ByteLyx turns innovative ideas into powerful digital solutions.
          </p>
        </div>

        {/* 12-Column Bento Grid */}
        <div className="gsap-bento-grid grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-4 xl:gap-8">
          {/* Card 1: What is FikraTech? */}
          <SpecialCard className="gsap-bento-card group col-span-12 flex flex-col items-start p-6 md:p-8 lg:col-span-4">
            <h3 className="mb-3 font-bold text-white md:text-3xl lg:text-base xl:mb-5 xl:text-2xl">
              What is ByteLyx?
            </h3>

            <p className="text-start text-xs font-light leading-5 text-[#828282] md:text-xl lg:text-xs xl:text-sm xl:leading-7">
              We are a global technology partner that transforms bold ideas into smart, scalable solutions empowering businesses to grow, connect, and lead in the digital era.
            </p>

            {/* Concentric Rotating Squircle Rings with FikraTech Logo */}
            <div className="relative m-auto mt-4 flex size-40 items-center justify-center md:mt-8 md:size-64 lg:size-44 xl:size-56">

              <span className="absolute z-10 flex size-[55%] items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img
                  src={Logo}
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
                At ByeLyx, we believe technology has no borders. Our vision is to create a future where ideas, people, and businesses are seamlessly connected — building a smarter, more unified world.
              </p>

              {/* World Map with interactive network overlay */}
              <div className="relative m-auto mt-4 flex h-[12rem] w-full max-w-[42rem] items-center justify-center overflow-hidden md:h-[18rem] lg:h-[14rem] xl:h-[18rem]">
                <img
                  src="/images/home/story/image2.svg"
                  alt="FikraTech Global Vision Map"
                  className={`relative z-10 h-full w-full object-contain transition-all duration-700 ${visionHovered ? 'brightness-125 drop-shadow-[0_0_18px_rgba(5,195,222,0.25)]' : ''
                    }`}
                />

                {/* Network Constellation Nodes */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 689 290"
                  preserveAspectRatio="xMidYMid meet"
                  className={`pointer-events-none absolute inset-0 z-20 h-full w-full transition-opacity duration-500 ${visionHovered ? 'opacity-100' : 'opacity-0'
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
                  className={`pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(48,127,226,0.2),transparent_70%)] transition-opacity duration-700 ${visionHovered ? 'opacity-100' : 'opacity-0'
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
              At ByteLyx, we turn ideas into smart, scalable digital solutions. From intuitive apps to powerful platforms, we design, develop, and deliver technology that drives real impact.
            </p>

            {/* Marquee Tags */}
            <div className="my-5 w-full space-y-3 overflow-hidden xl:space-y-4">
              {[
                ['App Development', 'Full Stack Development', 'Frontend', 'Backend', 'Digital Marketing', 'AI',],
                ['ReactJS', 'Flutter', 'Vite', 'TailwindCSS', 'GSAP', 'ThreeJS', 'Framer-Motion'],
                ['NodeJS', 'ExpressJS', 'MongoDB', 'GIT', 'GitHub', 'Dart'],
              ].map((items, rowIndex) => (
                <div key={rowIndex} className="w-full overflow-hidden">
                  <div
                    className={`flex w-max gap-2 ${rowIndex === 1 ? 'animate-marquee-reverse' : 'animate-marquee-slow'
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

            {/* Silver faceted diamond — inline SVG so it renders without a Three.js dependency */}
            <div className="relative mt-auto flex h-44 w-full flex-none items-center justify-center overflow-visible transition-all duration-700 md:h-52 lg:h-40 xl:h-48">
              {/* Soft spotlight behind the diamond */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(210,220,245,0.24),rgba(105,125,165,0.10)_35%,transparent_70%)] opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:bg-[radial-gradient(ellipse_at_center,rgba(235,242,255,0.52),rgba(130,165,235,0.26)_38%,transparent_72%)] group-hover:opacity-100" />
              <svg
                viewBox="0 0 240 180"
                role="img"
                aria-label="Silver faceted diamond"
                className="relative z-10 h-full w-full max-w-[220px] overflow-visible drop-shadow-[0_8px_18px_rgba(205,215,240,0.24)] transition-all duration-700 group-hover:scale-105 group-hover:brightness-150 group-hover:drop-shadow-[0_0_34px_rgba(225,235,255,1)]"
              >
                <defs>
                  <linearGradient id="diamondTop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F9FAFF" />
                    <stop offset="55%" stopColor="#DDE1EC" />
                    <stop offset="100%" stopColor="#9299AA" />
                  </linearGradient>
                  <linearGradient id="diamondLeft" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D5D9E4" />
                    <stop offset="100%" stopColor="#737B8E" />
                  </linearGradient>
                  <linearGradient id="diamondRight" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F1F3FA" />
                    <stop offset="100%" stopColor="#8B91A2" />
                  </linearGradient>
                  <linearGradient id="diamondPoint" x1="0" y1="0" x2="0.9" y2="1">
                    <stop offset="0%" stopColor="#AEB4C3" />
                    <stop offset="100%" stopColor="#555D70" />
                  </linearGradient>
                  <filter id="diamondGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" />
                  </filter>
                </defs>

                {/* Faint halo and tiny floating sparkles */}
                <ellipse cx="120" cy="91" rx="77" ry="49" fill="#DCE5FF" opacity="0.16" filter="url(#diamondGlow)" className="transition-all duration-700 group-hover:fill-[#F0F5FF] group-hover:opacity-90" />
                <g fill="#DDE6FA" opacity="0.7">
                  <circle cx="39" cy="38" r="2.2" />
                  <circle cx="65" cy="17" r="1.6" />
                  <circle cx="184" cy="22" r="2.1" />
                  <circle cx="207" cy="45" r="2.8" />
                  <circle cx="171" cy="8" r="1.3" />
                </g>

                {/* Outer silhouette */}
                <path d="M43 62 L73 29 L165 27 L198 62 L120 151 Z" fill="#8B91A2" />
                {/* Upper crown facets */}
                <path d="M43 62 L73 29 L91 62 Z" fill="url(#diamondLeft)" />
                <path d="M73 29 L165 27 L150 62 L91 62 Z" fill="url(#diamondTop)" />
                <path d="M165 27 L198 62 L150 62 Z" fill="#C7CCD8" />
                {/* Bright central table and crown */}
                <path d="M91 62 L104 35 L145 35 L159 62 Z" fill="#FFFFFF" opacity="0.96" />
                <path d="M104 35 L145 35 L151 46 L99 46 Z" fill="#FFFFFF" />
                {/* Lower facets */}
                <path d="M43 62 L91 62 L120 151 Z" fill="#8B91A2" />
                <path d="M91 62 L159 62 L120 151 Z" fill="url(#diamondPoint)" />
                <path d="M159 62 L198 62 L120 151 Z" fill="#6D7486" />
                <path d="M91 62 L120 81 L120 151 Z" fill="#AEB4C2" opacity="0.78" />
                <path d="M120 81 L159 62 L120 151 Z" fill="#737B8E" opacity="0.68" />
                <path d="M43 62 L91 62 L75 78 Z" fill="#C4C9D5" opacity="0.7" />
                <path d="M159 62 L198 62 L164 78 Z" fill="#B7BDCC" opacity="0.55" />
              </svg>
            </div>
          </SpecialCard>
        </div>
      </section>

      {/* 4. WHAT WE OFFER */}
      <section
        className="hidden md:block gsap-reveal-section gsap-offer-stack-section 3xl:container 2.5xl:px-32 3xl:px-48 mx-auto mb-30 w-full max-w-7xl space-y-10 overflow-visible px-4 pt-20 pb-40 md:mb-32 md:px-10 md:pb-48 lg:px-8 xl:space-y-16 xl:px-14 xl:pb-56 2xl:px-24"
        aria-label="What We Offer"
      >        {/* Section Header */}
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

        {/* Five service cards in one horizontal row */}
        <div className="gsap-offer-stack-viewport w-full overflow-visible pb-4">
          <div
            className="gsap-offer-grid relative !grid min-w-[1200px] !grid-cols-5 gap-6"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
              gridAutoFlow: 'column',
              minWidth: '1200px',
            }}
          >
            {/* 1. Business Automation (Puzzle) */}
            <div
              onMouseEnter={() => setPuzzleHovered(true)}
              onMouseLeave={() => setPuzzleHovered(false)}
              className="gsap-offer-card h-full"
            >
              <SpecialCard className="group flex h-full min-h-[22rem] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#307FE2]/50 hover:shadow-[0_12px_35px_rgba(48,127,226,0.15)]">
                <PremiumServiceVisual type="puzzle" label="Premium 3D full-stack development illustration" />

                <div className="mt-4 space-y-2 text-start">
                  <h3 className="text-base font-semibold text-white">Full Stack Development</h3>
                  <p className="text-xs font-light leading-relaxed text-[#828282]">
                    We build complete MERN stack applications with powerful frontend experiences and reliable backend systems.
                  </p>
                </div>
              </SpecialCard>
            </div>

            {/* 2. UI/UX Design */}
            <div className="gsap-offer-card h-full">
              <SpecialCard className="group flex h-full min-h-[22rem] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#307FE2]/50 hover:shadow-[0_12px_35px_rgba(48,127,226,0.15)]">
                <PremiumServiceVisual type="ui" label="Premium 3D user interface design illustration" />

                <div className="mt-4 space-y-2 text-start">
                  <h3 className="text-base font-semibold text-white">UI/UX Design</h3>
                  <p className="text-xs font-light leading-relaxed text-[#828282]">
                    ByteLyx crafts seamless user experiences and stunning interfaces that feel natural, intuitive, and unforgettable.
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
                <PremiumServiceVisual type="mobile" label="Premium 3D mobile app illustration" />

                <div className="mt-4 space-y-2 text-start">
                  <h3 className="text-base font-semibold text-white">Mobile App Development</h3>
                  <p className="text-xs font-light leading-relaxed text-[#828282]">
                    We create smooth, responsive Flutter applications for Android and IOS devices.
                  </p>
                </div>
              </SpecialCard>
            </div>

            {/* 4. Software Development */}
            <div className="gsap-offer-card h-full">
              <SpecialCard className="group flex h-full min-h-[22rem] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#307FE2]/50 hover:shadow-[0_12px_35px_rgba(48,127,226,0.15)]">
                <PremiumServiceVisual type="marketing" label="Premium 3D digital marketing analytics illustration" />

                <div className="mt-4 space-y-2 text-start">
                  <h3 className="text-base font-semibold text-white">Digital Marketing</h3>
                  <p className="text-xs font-light leading-relaxed text-[#828282]">
                    We help businesses grow through strategic digital campaigns, SEO, and online engagement.
                  </p>
                </div>
              </SpecialCard>
            </div>

            {/* 5. Artificial Intelligence */}
            <div className="gsap-offer-card h-full">
              <SpecialCard className="group flex h-full min-h-[22rem] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#307FE2]/50 hover:shadow-[0_12px_35px_rgba(48,127,226,0.15)]">
                <PremiumServiceVisual type="ai" label="Premium 3D artificial intelligence network illustration" />
                <div className="mt-4 space-y-2 text-start">
                  <h3 className="text-base font-semibold text-white">Artificial Intelligence</h3>
                  <p className="text-xs font-light leading-relaxed text-[#828282]">
                    We build intelligent AI-powered solutions that automate tasks and turn data into useful insights.
                  </p>
                </div>
              </SpecialCard>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INNOVATION THROUGH PROJECTS */}

      <section
        className="gsap-reveal-section 3xl:container 2.5xl:px-32 3xl:px-48 mx-auto mt-24 mb-16 w-full max-w-7xl space-y-10 px-4 md:mt-20 md:mb-16 md:px-10 lg:mt-24 lg:px-8 xl:mt-32 xl:px-14 2xl:px-24"
        aria-label="Innovation Through Projects"
      >
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
              className={`cursor-pointer rounded-full px-6 py-2 text-xs font-medium transition ${projectTab === 'private'
                ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white shadow-md'
                : 'text-white/70 hover:text-white'
                }`}
            >
              Private Projects
            </button>

            <button
              type="button"
              onClick={() => setProjectTab('government')}
              className={`cursor-pointer rounded-full px-6 py-2 text-xs font-medium transition ${projectTab === 'government'
                ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white shadow-md'
                : 'text-white/70 hover:text-white'
                }`}
            >
              Government Projects
            </button>
          </div>
        </div>

        {/* Sticky Stacking Project Cards */}
        <div className="relative space-y-6 lg:space-y-0">
          {activeProjects.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => navigate(`/projects/view/${proj.name}`)}
              className="gsap-project-card group relative z-0 flex h-72 cursor-pointer items-center justify-center overflow-hidden rounded-3xl border border-white/10 pe-5 shadow-2xl transition-all duration-700 md:h-[30rem] lg:sticky lg:top-24 lg:h-[82vh]"
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
              {proj.id === 'lawish' && (
                <>
                  <div className="pointer-events-none absolute end-[2rem] top-[3rem] w-16 md:end-[5rem] md:top-[6rem] md:w-32 lg:top-1/3 lg:w-36 xl:end-64 xl:w-52">
                    <img
                      src={lawish}
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
        /* Premium animated visuals for all five service cards */
        .service-visual {
          isolation: isolate;
          position: relative;
          border: 1px solid rgba(105, 165, 230, 0.10);
          background: radial-gradient(ellipse at 50% 48%, rgba(48, 127, 226, 0.14), rgba(5, 195, 222, 0.035) 45%, transparent 75%);
          transition: background 450ms ease, border-color 450ms ease, box-shadow 450ms ease;
        }
        .service-visual::before {
          content: "";
          position: absolute;
          z-index: 0;
          inset: 14%;
          border-radius: 9999px;
          pointer-events: none;
          background: radial-gradient(circle, rgba(5, 195, 222, 0.22), rgba(48, 127, 226, 0.12) 42%, transparent 72%);
          filter: blur(20px);
          opacity: 0.72;
          animation: serviceGlowPulse 3.6s ease-in-out infinite alternate;
        }
        .service-orbit {
          position: absolute;
          border: 1px solid rgba(90, 220, 250, 0.18);
          border-radius: 50%;
          pointer-events: none;
          transform: rotate(-18deg);
          animation: serviceOrbit 12s linear infinite;
        }
        .service-orbit-one { width: 190px; height: 72px; }
        .service-orbit-two { width: 220px; height: 94px; transform: rotate(42deg); animation-direction: reverse; opacity: .55; }
        .service-art { filter: drop-shadow(0 8px 12px rgba(0, 0, 0, .22)); animation: serviceFloat 4s ease-in-out infinite; }
        .service-visual-puzzle .service-art { animation-duration: 4.3s; }
        .service-visual-ui .service-art { animation-name: serviceFloatRotate; animation-duration: 5s; }
        .service-visual-mobile .service-art { animation-duration: 3.8s; }
        .service-visual-marketing .service-art { animation-name: serviceFloatScale; animation-duration: 4.2s; }
        .service-visual-ai .service-art { animation-duration: 3.5s; }
        .gsap-offer-card:hover .service-art { filter: brightness(1.2) drop-shadow(0 0 14px rgba(5, 195, 222, .42)); }
        @keyframes serviceOrbit { to { rotate: 342deg; } }
        .service-visual img,
        .service-visual svg {
          position: relative;
          z-index: 1;
          transform-origin: center;
          filter: drop-shadow(0 0 8px rgba(48, 127, 226, 0.16));
          animation: serviceFloat 4s ease-in-out infinite;
          transition: filter 450ms ease;
        }
        .service-visual-puzzle img:nth-of-type(2n) { animation-delay: -1.1s; }
        .service-visual-puzzle img:nth-of-type(3n) { animation-delay: -2.1s; }
        .service-visual-ui img:nth-of-type(2n) { animation-delay: -1.4s; }
        .service-visual-ui img:nth-of-type(3n) { animation-delay: -2.2s; }
        .service-visual-mobile img:nth-of-type(2n) { animation-delay: -1.2s; }
        .service-visual-mobile img:nth-of-type(3n) { animation-delay: -2.4s; }
        .service-visual-ui img { animation-name: serviceFloatRotate; animation-duration: 5s; }
        .service-visual-mobile img { animation-duration: 3.8s; }
        .service-visual-marketing img { animation-name: serviceFloatScale; animation-duration: 4.2s; }
        .service-visual-ai svg { animation-duration: 3.5s; }
        .gsap-offer-card:hover .service-visual {
          border-color: rgba(5, 195, 222, 0.38);
          background: radial-gradient(ellipse at 50% 48%, rgba(48, 127, 226, 0.24), rgba(5, 195, 222, 0.09) 46%, transparent 76%);
          box-shadow: inset 0 0 24px rgba(48, 127, 226, 0.07), 0 0 25px rgba(5, 195, 222, 0.09);
        }
        .gsap-offer-card:hover .service-visual img,
        .gsap-offer-card:hover .service-visual svg {
          filter: brightness(1.28) drop-shadow(0 0 12px rgba(5, 195, 222, 0.38));
        }
        .gsap-offer-card:hover .service-visual::before { opacity: 1; animation-duration: 1.7s; }
        @keyframes serviceFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes serviceFloatRotate {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-6px) rotate(1deg); }
        }
        @keyframes serviceFloatScale {
          0%, 100% { transform: translateY(0) scale(0.97); }
          50% { transform: translateY(-6px) scale(1.03); }
        }
        @keyframes serviceGlowPulse {
          0% { opacity: 0.42; transform: scale(0.88); }
          100% { opacity: 0.95; transform: scale(1.12); }
        }
        @media (prefers-reduced-motion: reduce) {
          .service-visual::before,
          .service-visual img,
          .service-visual svg { animation: none !important; }
        }

        .gsap-offer-stack-section { position: relative; isolation: isolate; }
        .gsap-offer-stack-viewport { position: relative; }
        .gsap-offer-stack-grid { position: relative; }
        .gsap-offer-stack-section .gsap-offer-card { will-change: transform; backface-visibility: hidden; }
        @media (max-width: 767px) {
          .gsap-offer-stack-section { overflow: visible; }
        }

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