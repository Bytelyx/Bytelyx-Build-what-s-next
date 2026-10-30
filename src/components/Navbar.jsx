import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [logoImgFailed, setLogoImgFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section highlight
      const sections = ['hero', 'services', 'solutions', 'about', 'process', 'projects', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-3 sm:py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Floating Glassmorphic Brand Container */}
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'backdrop-blur-2xl bg-[#06040a]/85 border border-[#863bff]/25 shadow-[0_12px_40px_rgba(6,4,10,0.85)]'
              : 'backdrop-blur-xl bg-[#06040a]/60 border border-white/10 shadow-lg'
          }`}
        >
          {/* Brand Logo with Clean White Circular Background */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none rounded-full"
            aria-label="BYTELYX Home"
          >
            {/* Logo in Clean White Circular Container */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-md shadow-[#863bff]/20 shrink-0 transition-transform duration-300 group-hover:scale-105">
              {!logoImgFailed ? (
                <img
                  src="/bytelyx-logo.png"
                  alt="BYTELYX Logo"
                  onError={() => setLogoImgFailed(true)}
                  className="h-full w-full object-contain"
                />
              ) : (
                <svg viewBox="0 0 48 46" className="w-5 h-5" fill="none">
                  <path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"/>
                </svg>
              )}
            </div>

            {/* Typography Wordmark */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#ede6ff] transition-colors">
                BYTELYX
              </span>
              <span className="hidden xl:inline-block px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-[#47bfff] bg-[#47bfff]/10 border border-[#47bfff]/20 rounded-full">
                Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#863bff]/20 border border-[#863bff]/40 shadow-sm'
                      : 'text-[#9d96b8] hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Prominent CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#863bff] via-[#7e14ff] to-[#47bfff] hover:opacity-95 shadow-[0_0_24px_rgba(134,59,255,0.4)] transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 rounded-3xl backdrop-blur-2xl bg-[#0a0714]/95 border border-[#863bff]/20 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-white bg-[#863bff]/20 border border-[#863bff]/30'
                        : 'text-[#9d96b8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#47bfff]" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#863bff] to-[#47bfff] shadow-lg"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
