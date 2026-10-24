
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-01.png';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Process', path: '/process' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact us', path: '/contact' },
  ];

  const isCurrent = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="
        relative z-[100] isolate
        flex w-full min-w-0 items-center
        justify-between gap-4
        rounded-full border border-white/10
        bg-[#07111B] px-4 py-3
        shadow-lg shadow-black/30
        sm:px-6 lg:px-8
      "
    >
      {/* Brand */}
      <Link
        to="/"
        aria-label="ByteLyx Home"
        onClick={() => setMobileMenuOpen(false)}
        className="group flex shrink-0 items-center gap-3"
      >
        {/* Circular Logo */}
        <span
          className="
    relative flex shrink-0 items-center
    justify-center overflow-hidden rounded-full
    border border-[#D4AF37]/60 bg-transparent
    shadow-[0_0_12px_rgba(212,175,55,0.2)]
    transition-all duration-300
    group-hover:scale-105
    group-hover:shadow-[0_0_22px_rgba(212,175,55,0.45)]
  "
          style={{ width: 52, height: 52 }}
        >
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute -right-1 -top-1
              rounded-full bg-[#D4AF37]/30 blur-md
              transition-colors duration-300
              group-hover:bg-[#D4AF37]/60
            "
            style={{ width: 28, height: 28 }}
          />

          <img
            src={logo}
            alt="ByteLyx"
            draggable="false"
            className="
              relative z-10 block shrink-0 object-contain
              transition-transform duration-300
              group-hover:scale-105
            "
            style={{
              width: 38,
              height: 38,
              minWidth: 38,
              maxWidth: 38,
              flexShrink: 0,
            }}
          />
        </span>

        {/* Brand Name */}
        <span
          className="
            whitespace-nowrap text-2xl font-extrabold
            tracking-wide text-white
            transition-colors duration-300
            group-hover:text-[#D4AF37]
            sm:text-3xl
          "
        >
          ByteLyx
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="hidden min-w-0 flex-1 justify-end lg:flex"
        aria-label="Main navigation"
      >
        <ul className="flex items-center gap-4 xl:gap-8">
          {navLinks.map(({ label, path }) => {
            const active = isCurrent(path);

            return (
              <li key={path} className="shrink-0">
                <Link
                  to={path}
                  aria-current={active ? 'page' : undefined}
                  className={`
                    relative block whitespace-nowrap py-2
                    text-sm font-medium transition-colors
                    duration-300 xl:text-base
                    ${active
                      ? 'text-[#D4AF37]'
                      : 'text-white/85 hover:text-[#D4AF37]'
                    }
                  `}
                >
                  {label}

                  <span
                    className={`
                      absolute bottom-0 left-0 h-0.5
                      rounded-full bg-[#D4AF37]
                      transition-all duration-300
                      ${active ? 'w-full' : 'w-0'}
                    `}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Toggle */}
      <button
        type="button"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        aria-controls="bytelyx-mobile-navigation"
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="
          flex size-10 shrink-0 flex-col
          items-center justify-center gap-[5px]
          rounded-full transition-colors
          hover:bg-white/10
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-[#D4AF37]
          lg:hidden
        "
      >
        <span
          className={`
            h-0.5 w-5 rounded-full bg-white
            transition-transform duration-300
            ${mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}
          `}
        />

        <span
          className={`
            h-0.5 w-5 rounded-full bg-white
            transition-opacity duration-200
            ${mobileMenuOpen ? 'opacity-0' : ''}
          `}
        />

        <span
          className={`
            h-0.5 w-5 rounded-full bg-white
            transition-transform duration-300
            ${mobileMenuOpen
              ? '-translate-y-[7px] -rotate-45'
              : ''
            }
          `}
        />
      </button>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <nav
          id="bytelyx-mobile-navigation"
          aria-label="Mobile navigation"
          className="
            absolute left-0 right-0 top-full z-[110] mt-3
            flex flex-col gap-1.5
            rounded-2xl border border-white/15
            bg-[#07111B] p-3
            shadow-[0_20px_45px_rgba(0,0,0,0.7)]
            lg:hidden
          "
        >
          {navLinks.map(({ label, path }) => {
            const active = isCurrent(path);

            return (
              <Link
                key={path}
                to={path}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  rounded-xl border px-4 py-3
                  text-base font-medium transition-colors
                  ${active
                    ? 'border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]'
                    : 'border-transparent text-white/90 hover:bg-white/5 hover:text-[#D4AF37]'
                  }
                `}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}

      {/* Subtle Border */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          rounded-full border border-white/5
        "
      />
    </header>
  );
}

export default Header;
