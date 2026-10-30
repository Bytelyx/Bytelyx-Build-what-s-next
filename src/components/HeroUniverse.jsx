import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, Activity, Terminal } from 'lucide-react';
import Hero3D from './Hero3D';

gsap.registerPlugin(ScrollTrigger);

// 6 Specialized Animated Service Icons
const services = [
  {
    id: 'web-dev',
    title: 'Website Development',
    tag: 'Next.js 14 & SPAs',
    desktopPos: 'top-2 -left-2 lg:top-6 lg:-left-6',
    curveAnchor: { x: 120, y: 70 },
    color: '#4F7DFF',
    accentBg: 'from-blue-600/20 via-indigo-900/30 to-[#15102D]',
    iconSvg: (
      <svg viewBox="0 0 44 44" className="w-7 h-7" fill="none">
        {/* Browser Frame */}
        <rect x="3" y="5" width="38" height="34" rx="6" stroke="#4F7DFF" strokeWidth="2" fill="#0D1127" fillOpacity="0.8" />
        <line x1="3" y1="13" x2="41" y2="13" stroke="#4F7DFF" strokeWidth="1.2" strokeOpacity="0.5" />
        {/* Window controls */}
        <circle cx="8" cy="9" r="1.5" fill="#EF4444" />
        <circle cx="13" cy="9" r="1.5" fill="#F59E0B" />
        <circle cx="18" cy="9" r="1.5" fill="#10B981" />
        {/* Animated code lines */}
        <rect x="8" y="18" width="16" height="2.5" rx="1.2" fill="#4F7DFF" className="animate-pulse" />
        <rect x="12" y="24" width="22" height="2.5" rx="1.2" fill="#8A3FFC" />
        <rect x="8" y="30" width="14" height="2.5" rx="1.2" fill="#38BDF8" />
        {/* Cursor blink */}
        <rect x="24" y="29.5" width="2" height="4" fill="#B9A0FF" className="animate-ping" />
      </svg>
    ),
  },
  {
    id: 'ai-solutions',
    title: 'Artificial Intelligence',
    tag: 'LLMs & Agentic Swarms',
    desktopPos: 'top-2 -right-2 lg:top-6 lg:-right-6',
    curveAnchor: { x: 480, y: 70 },
    color: '#8A3FFC',
    accentBg: 'from-violet-600/25 via-purple-900/30 to-[#15102D]',
    iconSvg: (
      <svg viewBox="0 0 44 44" className="w-7 h-7" fill="none">
        {/* Hexagonal Processor Frame */}
        <polygon points="22,4 38,13 38,31 22,40 6,31 6,13" stroke="#8A3FFC" strokeWidth="2" fill="#0D1127" fillOpacity="0.8" />
        {/* Central Core */}
        <circle cx="22" cy="22" r="5" fill="#4F7DFF" fillOpacity="0.6" stroke="#B9A0FF" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="2.5" fill="#38BDF8" className="animate-ping" />
        {/* Neural Synapses */}
        <line x1="22" y1="17" x2="22" y2="8" stroke="#8A3FFC" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="26" y1="24" x2="34" y2="29" stroke="#8A3FFC" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="18" y1="24" x2="10" y2="29" stroke="#8A3FFC" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="22" cy="8" r="2" fill="#4F7DFF" />
        <circle cx="34" cy="29" r="2" fill="#8A3FFC" />
        <circle cx="10" cy="29" r="2" fill="#B9A0FF" />
      </svg>
    ),
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    tag: 'Design Systems & Tokens',
    desktopPos: 'top-1/2 -left-4 sm:-left-8 lg:-left-12 -translate-y-1/2',
    curveAnchor: { x: 80, y: 280 },
    color: '#B9A0FF',
    accentBg: 'from-purple-600/20 via-indigo-900/30 to-[#15102D]',
    iconSvg: (
      <svg viewBox="0 0 44 44" className="w-7 h-7" fill="none">
        {/* Layer 1 (Back) */}
        <rect x="6" y="8" width="24" height="22" rx="4" stroke="#8A3FFC" strokeWidth="1.5" strokeDasharray="3 3" fill="#15102D" fillOpacity="0.6" />
        {/* Layer 2 (Front) */}
        <rect x="14" y="14" width="24" height="22" rx="4" stroke="#B9A0FF" strokeWidth="2" fill="#0D1127" fillOpacity="0.85" />
        <circle cx="14" cy="14" r="2" fill="#4F7DFF" />
        <circle cx="38" cy="14" r="2" fill="#4F7DFF" />
        <circle cx="14" cy="36" r="2" fill="#4F7DFF" />
        <circle cx="38" cy="36" r="2" fill="#4F7DFF" />
        {/* Vector Pen Cursor */}
        <polygon points="26,22 34,31 30,32 33,38 31,39 28,33 25,36" fill="#38BDF8" className="animate-pulse" />
      </svg>
    ),
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud & Digital Solutions',
    tag: 'AWS & Microservices',
    desktopPos: 'top-1/2 -right-4 sm:-right-8 lg:-right-12 -translate-y-1/2',
    curveAnchor: { x: 520, y: 280 },
    color: '#4F7DFF',
    accentBg: 'from-cyan-600/20 via-blue-900/30 to-[#15102D]',
    iconSvg: (
      <svg viewBox="0 0 44 44" className="w-7 h-7" fill="none">
        {/* Cloud Body */}
        <path
          d="M13 28C9.5 28 7 25.5 7 22C7 18.8 9.3 16.3 12.4 16C13.5 11.5 17.5 8 22.5 8C27 8 30.7 10.8 32.2 14.8C35.5 15.3 38 18.2 38 21.8C38 25.2 35.3 28 32 28L13 28Z"
          stroke="#4F7DFF"
          strokeWidth="2"
          fill="#0D1127"
          fillOpacity="0.85"
        />
        {/* Server Nodes Beneath */}
        <rect x="12" y="32" width="20" height="4" rx="2" stroke="#8A3FFC" strokeWidth="1.2" fill="#15102D" />
        <circle cx="16" cy="34" r="1" fill="#38BDF8" />
        <circle cx="28" cy="34" r="1" fill="#10B981" />
        {/* Data Sync Line */}
        <line x1="22" y1="28" x2="22" y2="32" stroke="#B9A0FF" strokeWidth="1.5" className="animate-pulse" />
      </svg>
    ),
  },
  {
    id: 'app-dev',
    title: 'App Development',
    tag: 'iOS & Android Engines',
    desktopPos: 'bottom-4 -left-2 lg:bottom-8 lg:-left-6',
    curveAnchor: { x: 120, y: 480 },
    color: '#5821CE',
    accentBg: 'from-indigo-600/25 via-purple-900/30 to-[#15102D]',
    iconSvg: (
      <svg viewBox="0 0 44 44" className="w-7 h-7" fill="none">
        {/* Smartphone Shell */}
        <rect x="11" y="4" width="22" height="36" rx="5" stroke="#8A3FFC" strokeWidth="2" fill="#0D1127" fillOpacity="0.85" />
        {/* Dynamic Island / Speaker */}
        <rect x="18" y="7" width="8" height="2" rx="1" fill="#4F7DFF" />
        {/* Screen Ripple App Tile */}
        <rect x="17" y="16" width="10" height="10" rx="3" fill="#4F7DFF" fillOpacity="0.7" stroke="#38BDF8" strokeWidth="1.2" />
        <circle cx="22" cy="21" r="7" stroke="#B9A0FF" strokeWidth="1" strokeDasharray="2 2" className="animate-spin" />
        {/* Home Bar */}
        <line x1="17" y1="36" x2="27" y2="36" stroke="#8A3FFC" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tag: 'SEO & Conversion Funnels',
    desktopPos: 'bottom-4 -right-2 lg:bottom-8 lg:-right-6',
    curveAnchor: { x: 480, y: 480 },
    color: '#38BDF8',
    accentBg: 'from-blue-600/20 via-violet-900/30 to-[#15102D]',
    iconSvg: (
      <svg viewBox="0 0 44 44" className="w-7 h-7" fill="none">
        {/* Graph Card */}
        <rect x="4" y="6" width="36" height="32" rx="5" stroke="#38BDF8" strokeWidth="1.5" fill="#0D1127" fillOpacity="0.85" />
        {/* Rising Bar Chart */}
        <rect x="9" y="24" width="4" height="10" rx="1.5" fill="#5821CE" />
        <rect x="16" y="19" width="4" height="15" rx="1.5" fill="#8A3FFC" />
        <rect x="23" y="14" width="4" height="20" rx="1.5" fill="#4F7DFF" />
        <rect x="30" y="10" width="4" height="24" rx="1.5" fill="#38BDF8" />
        {/* Ascending Trend Line */}
        <polyline points="11,23 18,18 25,13 32,8" stroke="#B9A0FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="8" r="2.5" fill="#38BDF8" className="animate-ping" />
      </svg>
    ),
  },
];

export default function HeroUniverse() {
  const containerRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    // GSAP Orchestration: Phases 1 to 5
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Phase 1 — Initial appearance (Center 3D canvas fades & scales in)
      tl.fromTo(
        '.universe-center-core',
        { scale: 0.78, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 }
      )
        // Phase 2 — Globe Activation & Rings Emerge
        .fromTo(
          '.universe-connection-line',
          { strokeDashoffset: 600, opacity: 0 },
          { strokeDashoffset: 0, opacity: 0.7, duration: 1.4, stagger: 0.08 },
          '-=0.6'
        )
        // Phase 3 — Services Emerge (staggered curved outward burst)
        .fromTo(
          '.service-orbit-pod',
          { scale: 0.4, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          '-=1.0'
        );

      // Phase 4 — Floating Antigravity Coordinated Oscillations
      gsap.to('.service-orbit-pod-float-1', {
        y: -9,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.service-orbit-pod-float-2', {
        y: 8,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });

      // Phase 5 — Smooth Scroll Scrubbing inside dedicated container
      gsap.to('.universe-scroll-proxy', {
        scale: 1.08,
        y: 40,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: 0.75,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto my-6 sm:my-10 px-2 sm:px-4 select-none universe-scroll-proxy"
    >
      {/* Outer High-Tech Universe Frame */}
      <div className="relative rounded-3xl sm:rounded-[36px] bg-[#080816]/90 border border-violet-500/20 backdrop-blur-2xl shadow-[0_0_60px_rgba(88,33,206,0.25)] p-4 sm:p-8 lg:p-10 overflow-hidden">
        {/* Subtle Ambient Radial Glows (Deep Indigo & Violet) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#5821CE]/20 via-[#8A3FFC]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Dynamic Curved SVG Connection Lines Layer */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 600 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A3FFC" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#4F7DFF" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 6 Curved Beams radiating from Globe Epicenter (300, 300) to each Service Anchor */}
          <path
            d="M 300 300 Q 220 180 140 100"
            className="universe-connection-line"
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth={hoveredService === 'web-dev' ? 3 : 1.5}
            strokeDasharray="6 4"
            filter="url(#glowFilter)"
          />
          <path
            d="M 300 300 Q 380 180 460 100"
            className="universe-connection-line"
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth={hoveredService === 'ai-solutions' ? 3 : 1.5}
            strokeDasharray="6 4"
            filter="url(#glowFilter)"
          />
          <path
            d="M 300 300 Q 200 290 90 300"
            className="universe-connection-line"
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth={hoveredService === 'ui-ux' ? 3 : 1.5}
            strokeDasharray="6 4"
            filter="url(#glowFilter)"
          />
          <path
            d="M 300 300 Q 400 290 510 300"
            className="universe-connection-line"
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth={hoveredService === 'cloud-solutions' ? 3 : 1.5}
            strokeDasharray="6 4"
            filter="url(#glowFilter)"
          />
          <path
            d="M 300 300 Q 220 420 140 500"
            className="universe-connection-line"
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth={hoveredService === 'app-dev' ? 3 : 1.5}
            strokeDasharray="6 4"
            filter="url(#glowFilter)"
          />
          <path
            d="M 300 300 Q 380 420 460 500"
            className="universe-connection-line"
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth={hoveredService === 'digital-marketing' ? 3 : 1.5}
            strokeDasharray="6 4"
            filter="url(#glowFilter)"
          />
        </svg>

        {/* Central 3D Canvas Container */}
        <div className="universe-center-core relative w-full flex items-center justify-center z-10">
          <Hero3D activeService={hoveredService} />
        </div>

        {/* 6 Orbiting Animated Service Pods (Positioned around the Globe) */}
        <div className="relative md:absolute md:inset-0 pointer-events-none z-20">
          {/* Desktop & Tablet Orbital Arrangement */}
          <div className="hidden md:block absolute inset-0">
            {services.map((svc, idx) => {
              const floatClass = idx % 2 === 0 ? 'service-orbit-pod-float-1' : 'service-orbit-pod-float-2';
              const isHovered = hoveredService === svc.id;

              return (
                <div
                  key={svc.id}
                  className={`absolute ${svc.desktopPos} pointer-events-auto transition-transform duration-300 ${floatClass}`}
                  onMouseEnter={() => setHoveredService(svc.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className={`service-orbit-pod group flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl backdrop-blur-xl bg-[#15102D]/80 border transition-all duration-300 shadow-xl cursor-pointer ${
                      isHovered
                        ? 'border-[#4F7DFF] bg-[#15102D]/95 scale-105 shadow-[0_0_30px_rgba(79,125,255,0.4)]'
                        : 'border-white/10 hover:border-violet-400/50 hover:bg-[#15102D]/90'
                    }`}
                  >
                    {/* Custom Micro-Animated Vector Icon */}
                    <div
                      className={`p-2 rounded-xl bg-gradient-to-br ${svc.accentBg} border border-white/10 group-hover:scale-110 transition-transform duration-300 shrink-0`}
                    >
                      {svc.iconSvg}
                    </div>

                    {/* Label & Technical Subtitle */}
                    <div className="flex flex-col text-left pr-2">
                      <span className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {svc.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 tracking-wide">
                        {svc.tag}
                      </span>
                    </div>

                    {/* Indicator Dot */}
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 transition-all ${
                        isHovered ? 'bg-[#38BDF8] animate-ping' : 'bg-violet-400/50'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Responsive Grid (Graceful Stack below Globe, zero overflow) */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pointer-events-auto">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="service-orbit-pod flex items-center gap-3 p-3 rounded-2xl bg-[#15102D]/80 border border-white/10 shadow-lg text-left"
              >
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {svc.iconSvg}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white tracking-tight">
                    {svc.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {svc.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Status / Orbit Control Bar */}
        <div className="relative mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-semibold uppercase tracking-wider">
              BYTELX DIGITAL UNIVERSE &bull; 6 ACTIVE NODES
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden sm:inline">Three.js WebGL Core &bull; GSAP Scrubbed</span>
            <a
              href="#services"
              className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition-colors group"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
