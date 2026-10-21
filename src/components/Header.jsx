import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Process', path: '/process' },
    { label: 'Projects', path: '/projects' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact us', path: '/contact' },
  ];

  const isCurrent = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="relative z-50 flex items-center justify-between gap-8 rounded-full border border-white/10 bg-[#FFFFFF08] px-5 py-3 shadow-[0px_-2px_40px_0px_rgba(209,209,209,0),0px_-2px_10px_0px_rgba(217,217,217,0.11)] backdrop-blur-[22px] transition-all duration-300 2xl:px-8 3xl:px-10">
      {/* Brand Logo */}
      <Link
        to="/"
        className="group flex shrink-0 items-center transition-transform duration-300 hover:opacity-90"
        aria-label="FikraTech Home"
        onClick={() => setMobileMenuOpen(false)}
      >
        <img
          src="/images/logo.svg"
          alt="FikraTech"
          className="h-7 w-auto object-contain md:h-8 lg:h-8 xl:h-9 3xl:w-40"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block" aria-label="Main navigation">
        <ul className="flex items-center gap-6 py-1 text-sm font-medium lg:text-sm xl:gap-12 xl:text-base 2.4xl:py-2 3xl:text-lg">
          {navLinks.map(({ label, path }) => {
            const active = isCurrent(path);

            return (
              <li key={path}>
                <Link
                  to={path}
                  aria-current={active ? 'page' : undefined}
                  className={`relative block py-1 transition-all duration-200 ${
                    active
                      ? 'bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text font-semibold text-transparent'
                      : 'text-white/85 hover:text-white hover:bg-gradient-to-b hover:from-white hover:to-white/90'
                  }`}
                >
                  <span>{label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#307FE2] to-[#05C3DE] shadow-[0_0_8px_rgba(5,195,222,0.6)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        className="group flex size-7 flex-col justify-between p-1.5 lg:hidden focus:outline-none"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span
          className={`h-[2px] w-full bg-white transition-all duration-300 ${
            mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
          }`}
        />
        <span
          className={`h-[2px] w-full bg-white transition-opacity duration-200 ${
            mobileMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`h-[2px] w-full bg-white transition-all duration-300 ${
            mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
          }`}
        />
      </button>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav
          className="absolute left-0 right-0 top-full z-50 mt-3 flex flex-col gap-2 rounded-3xl border border-white/20 bg-[#030E18]/95 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ label, path }) => {
            const active = isCurrent(path);

            return (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                  active
                    ? 'border border-[#307FE2]/40 bg-[#307FE2]/15 text-[#05C3DE]'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}

      {/* Inner Gradient Border Effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full border border-white/10 opacity-30"
        style={{
          WebkitMask:
            'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      />
    </header>
  );
}

export default Header;
