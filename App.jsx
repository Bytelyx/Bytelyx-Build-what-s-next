import React, { useState, useEffect } from 'react';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Services from './components/Services';
import Solutions from './components/Solutions';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

/**
 * BYTELYX Premium 3D Software Company Website
 * Root Application Component
 */
export default function App() {
  const { scrollTo } = useLenis();
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  // Subtle ambient cursor glow on desktop pointer devices
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) return;
    setIsPointerDevice(true);

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigate = (targetId) => {
    scrollTo(`#${targetId}`);
  };

  return (
    <div className="relative min-h-screen bg-[#05070D] text-white font-sans selection:bg-[#7657FF] selection:text-white overflow-x-hidden">
      
      {/* Subtle Ambient Radial Cursor Follower (Desktop only) */}
      {isPointerDevice && (
        <div
          className="pointer-events-none fixed top-0 left-0 z-30 transition-transform duration-75 ease-out opacity-25 hidden lg:block"
          style={{
            transform: `translate3d(${cursorPos.x - 250}px, ${cursorPos.y - 250}px, 0)`,
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(118, 87, 255, 0.15) 0%, rgba(54, 216, 245, 0.05) 45%, transparent 70%)',
          }}
        />
      )}

      {/* 1. Transparent Glass Navbar with White Circular BYTELYX Logo */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Landmark Flow */}
      <main id="main-content" className="relative z-10 flex flex-col w-full">
        {/* 2. Hero Section: 100svh Three.js 3D Centerpiece, Editorial Typography, Italic Serif Accents */}
        <Hero onNavigate={handleNavigate} />

        {/* 3. Tech Stack Ecosystem Marquee */}
        <TechMarquee />

        {/* 4. Services: 8 Core Services in Asymmetrical Bento Grid with 3D Tilt */}
        <Services onNavigate={handleNavigate} />

        {/* 5. Solutions: 6 Business-Outcome Solutions with Light Gradient Transition */}
        <Solutions onNavigate={handleNavigate} />

        {/* 6. About: Split Layout with 6 Engineering Pillars & Real-time Three.js 3D Crystal */}
        <About onNavigate={handleNavigate} />

        {/* 7. Selected Work: 7 Projects Showcase with Deep-Dive Specifications Modal */}
        <Projects />

        {/* 8. Contact & WhatsApp Enquiry: Direct Channels, Enquiry Form & Official URL Generator */}
        <Contact />
      </main>

      {/* 9. Architectural Dark Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 10. Persistent Direct WhatsApp Quick Launcher */}
      <FloatingWhatsApp />

    </div>
  );
}
