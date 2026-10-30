import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Floating Antigravity Tech Badges for interactive magnetic canvas
const antigravityBadges = [
  { id: 'next', label: 'Next.js 14 & SPAs', icon: '⚡', basePos: { x: 12, y: 16 }, floatSpeed: 4.2 },
  { id: 'ai', label: 'Autonomous AI Agents', icon: '🤖', basePos: { x: 74, y: 14 }, floatSpeed: 3.6 },
  { id: 'cloud', label: 'Cloud-Native Microservices', icon: '🌐', basePos: { x: 8, y: 52 }, floatSpeed: 4.8 },
  { id: 'latency', label: '< 80ms Edge API Latency', icon: '🚀', basePos: { x: 78, y: 56 }, floatSpeed: 3.9 },
  { id: 'uptime', label: '99.98% Uptime Benchmark', icon: '🛡️', basePos: { x: 16, y: 84 }, floatSpeed: 5.1 },
  { id: 'tokens', label: 'Tokenized UI/UX Systems', icon: '🎨', basePos: { x: 72, y: 86 }, floatSpeed: 4.5 },
];

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const metricsRef = useRef(null);
  const antigravityFieldRef = useRef(null);

  // Magnetic offsets stored in state to ensure React purity
  const [magnetDeltas, setMagnetDeltas] = useState({});
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    // GSAP Entrance Choreography
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-pill-badge',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.15 }
      )
        .fromTo(
          headlineRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0 },
          '-=0.5'
        )
        .fromTo(
          subheadlineRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          '-=0.65'
        )
        .fromTo(
          ctaGroupRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          '-=0.55'
        )
        .fromTo(
          '.antigravity-interactive-stage',
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.1, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          metricsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        );

      // GSAP Parallax ScrollTrigger for hero background atmosphere
      gsap.to('.hero-ambient-orb', {
        y: 120,
        opacity: 0.25,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle magnetic cursor interaction over antigravity stage
  const handleMouseMove = (e) => {
    if (!antigravityFieldRef.current) return;
    const rect = antigravityFieldRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const newDeltas = {};
    for (const badge of antigravityBadges) {
      const badgePixelX = (badge.basePos.x / 100) * rect.width;
      const badgePixelY = (badge.basePos.y / 100) * rect.height;
      const distX = mouseX - badgePixelX;
      const distY = mouseY - badgePixelY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      // Gravitational attraction radius: 220px
      if (distance < 220) {
        const force = (220 - distance) / 220;
        newDeltas[badge.id] = {
          x: distX * 0.22 * force,
          y: distY * 0.22 * force,
        };
      } else {
        newDeltas[badge.id] = { x: 0, y: 0 };
      }
    }

    setIsInteracting(true);
    setMagnetDeltas(newDeltas);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
    setMagnetDeltas({});
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col justify-center items-center pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0A0F1D] bg-tech-grid"
    >
      {/* Background Ambient Radial Glows (Deep Oceanic & Electric Blues) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-indigo-600/10 rounded-full blur-[160px] pointer-events-none hero-ambient-orb" />
      <div className="absolute top-1/3 -left-36 w-[400px] h-[400px] bg-blue-900/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-36 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Top Status Pill Badge */}
        <div className="hero-pill-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl mb-6 shadow-[0_0_25px_rgba(56,189,248,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-xs font-mono tracking-wider font-semibold uppercase bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
            High-Velocity Software & AI Studio
          </span>
        </div>

        {/* Dynamic Floating Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl"
        >
          Engineering{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent underline decoration-cyan-400/30 decoration-wavy decoration-2">
            Scalable Software
          </span>{' '}
          at the Speed of Light.
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8"
        >
          BYTELYX architects enterprise cloud systems, hyper-performing mobile apps, and autonomous AI pipelines. Designed for global scale, crafted with mathematical precision.
        </p>

        {/* Dual CTAs */}
        <div
          ref={ctaGroupRef}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 shadow-[0_0_35px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Book a Call</span>
          </a>
        </div>

        {/* INTERACTIVE ANTIGRAVITY STAGE: Floating Magnetic Badges & Central Holographic Core */}
        <div
          ref={antigravityFieldRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="antigravity-interactive-stage relative w-full max-w-4xl h-[340px] sm:h-[380px] rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(15,23,42,0.8)] overflow-hidden flex items-center justify-center select-none"
        >
          {/* Subtle Stage Grid & Center Glow */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-400/20 to-transparent blur-3xl pointer-events-none" />

          {/* Holographic Orbital Rings */}
          <div className="relative flex items-center justify-center pointer-events-none">
            {/* Outer Ring */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-500/20 animate-[spin_24s_linear_infinite]" />
            {/* Middle Dashed Ring */}
            <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-blue-400/30 border-dashed animate-[spin_18s_linear_infinite_reverse]" />
            {/* Inner Pulsing Ring */}
            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-cyan-400/40 animate-pulse" />

            {/* Glowing Central Studio Core */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-600/40 via-slate-900 to-cyan-500/30 border border-cyan-400/50 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.4)] group">
              <span className="font-mono text-2xl sm:text-3xl font-black bg-gradient-to-br from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                BX
              </span>
              <span className="text-[9px] font-mono tracking-widest text-cyan-300 font-bold uppercase mt-0.5">
                ENGINE
              </span>
            </div>
          </div>

          {/* Floating Antigravity Tech Badges (React to Cursor Magnetic Gravity) */}
          {antigravityBadges.map((badge, idx) => {
            const delta = magnetDeltas[badge.id] || { x: 0, y: 0 };

            return (
              <div
                key={badge.id}
                style={{
                  left: `${badge.basePos.x}%`,
                  top: `${badge.basePos.y}%`,
                  transform: `translate(${delta.x}px, ${delta.y}px)`,
                  transition: isInteracting ? 'transform 0.12s ease-out' : 'transform 0.6s ease-out',
                  animation: `antigravity-float ${badge.floatSpeed}s ease-in-out infinite ${idx * 0.3}s`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer pointer-events-auto"
              >
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-xl bg-slate-900/80 border border-white/15 hover:border-cyan-400/50 shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-all text-xs sm:text-sm font-medium text-slate-200 hover:text-white">
                  <span className="text-sm sm:text-base">{badge.icon}</span>
                  <span className="font-mono text-xs">{badge.label}</span>
                </div>
              </div>
            );
          })}

          {/* Interactive Hint Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-900/70 px-3 py-1 rounded-full border border-white/5 pointer-events-none">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Interactive Antigravity Physics &bull; Hover to attract</span>
          </div>
        </div>

        {/* Metrics Strip */}
        <div
          ref={metricsRef}
          className="w-full max-w-4xl pt-10 mt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left"
        >
          <div className="flex flex-col">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
              99.98%
            </span>
            <span className="text-xs text-slate-400 font-medium mt-1">Uptime Benchmark</span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">
              &lt; 80ms
            </span>
            <span className="text-xs text-slate-400 font-medium mt-1">Edge API Latency</span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-blue-400 tracking-tight">
              7+
            </span>
            <span className="text-xs text-slate-400 font-medium mt-1">Flagship Systems</span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
              100%
            </span>
            <span className="text-xs text-slate-400 font-medium mt-1">On-Time Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
