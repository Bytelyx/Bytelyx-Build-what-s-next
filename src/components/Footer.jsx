import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-01.png';

export function Footer() {
  return (
    <footer className="relative grid grid-cols-2 gap-6 pt-20 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4 w-full">

      {/* Col 1: ByteLyx Brand & Social */}
      <div className="col-span-full text-center md:col-span-1 md:text-start">

        {/* Logo + Brand Name */}
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-3 mb-5 md:justify-start group transition-opacity hover:opacity-90"
          aria-label="ByteLyx"
        >
          <img
            src={Logo}
            alt="ByteLyx Logo"
            className="h-12 w-auto object-contain lg:h-14"
          />

          <span className="text-2xl font-bold tracking-wide text-white lg:text-3xl">
            ByteLyx
          </span>
        </Link>

        <p className="mb-6 font-light text-sm text-[#818B95] leading-relaxed max-w-sm mx-auto md:mx-0">
          Empowering Business Success with Innovative Solutions, Where Excellence Meets Technology
        </p>

        {/* Social Links */}
        <nav
          className="flex justify-center gap-2.5 md:justify-start"
          aria-label="Social media"
        >

          {/* WhatsApp */}
          <a
            href="https://wa.me/918592943588"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-[#05C3DE] hover:border-[#307FE2]/40 flex size-10 items-center justify-center rounded-xl bg-[#15212C] border border-white/10 transition transform hover:-translate-y-0.5 text-white/80"
          >
            <svg
              className="size-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.51c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.21-.17-.46-.29" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://ae.linkedin.com/company/bytelyx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#05C3DE] hover:border-[#307FE2]/40 flex size-10 items-center justify-center rounded-xl bg-[#15212C] border border-white/10 transition transform hover:-translate-y-0.5 text-white/80"
          >
            <svg
              className="size-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/bytelyx?mdxt=MXdpN2ZtbGhlcTZ1eA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#05C3DE] hover:border-[#307FE2]/40 flex size-10 items-center justify-center rounded-xl bg-[#15212C] border border-white/10 transition transform hover:-translate-y-0.5 text-white/80"
          >
            <svg
              className="size-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
          </a>

        </nav>
      </div>

      {/* Col 2 & 3: Quick Links & Services */}
      <div className="col-span-2 flex justify-around lg:px-10">

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-xl font-bold md:text-2xl">
            <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-2 text-transparent">
              Quick Links
            </span>
          </h4>

          <nav className="space-y-4 font-medium text-sm">
            <Link to="/projects" className="hover:text-[#05C3DE] text-white/80 block transition">
              Projects
            </Link>

            <Link to="/services" className="hover:text-[#05C3DE] text-white/80 block transition">
              Services
            </Link>

            <Link to="/process" className="hover:text-[#05C3DE] text-white/80 block transition">
              Process
            </Link>


            <Link to="/contact" className="hover:text-[#05C3DE] text-white/80 block transition">
              Contact us
            </Link>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-xl font-bold md:text-2xl">
            <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-2 text-transparent">
              Services
            </span>
          </h4>

          <nav className="space-y-4 text-sm font-medium">
            <Link to="/services#business-automation" className="hover:text-[#05C3DE] text-white/80 block transition">
              Digital Marketing
            </Link>

            <Link to="/services#software-development" className="hover:text-[#05C3DE] text-white/80 block transition">
              Web Development
            </Link>

            <Link to="/services#mobile-development" className="hover:text-[#05C3DE] text-white/80 block transition">
              Mobile App Development
            </Link>

            <Link to="/services#ui-ux-design" className="hover:text-[#05C3DE] text-white/80 block transition">
              UI/UX Design
            </Link>
          </nav>
        </div>
      </div>

      {/* Col 4: Interactive 3D ByteLyx Flip Card */}
      <div className="group [perspective:1000px] col-span-full min-h-56 lg:col-span-1 cursor-pointer">
        <div className="relative h-full min-h-56 w-full rounded-2xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">

          {/* Card Front */}
          <div className="rounded-3xl border border-white/10 bg-[#0A141E] p-6 backdrop-blur-xl absolute inset-0 overflow-hidden [backface-visibility:hidden] grid place-items-center">

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05c5de]/15 blur-3xl" />

            {/* Inner Border Glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent opacity-80"
              style={{
                background:
                  'linear-gradient(#0A141E, #0A141E) padding-box, linear-gradient(135deg, #307FE2, #05c5de, transparent 75%) border-box',
              }}
            />

            {/* Local Logo + ByteLyx Name */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <img
                  src={Logo}
                  alt="ByteLyx Logo"
                  className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <span className="text-2xl font-bold tracking-wide text-white">
                  ByteLyx
                </span>
              </div>

              <span className="text-xs text-white/60 font-light">
                Build What's Next
              </span>
            </div>
          </div>

          {/* Card Back: Contact Information */}
          <div className="border border-white/10 bg-[#0A141E] backdrop-blur-xl rounded-3xl p-5 text-sm absolute inset-0 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">

            {/* Inner Border Glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent opacity-80"
              style={{
                background:
                  'linear-gradient(#0A141E, #0A141E) padding-box, linear-gradient(135deg, #307FE2, #05c5de, transparent 75%) border-box',
              }}
            />

            {/* Background Grid */}
            <img
              src="/GRID.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute end-0 top-0 w-full max-w-md p-4 opacity-25"
            />

            <div className="relative z-10 space-y-2">
              <h4 className="text-base font-bold text-white tracking-wide">
                Get in touch
              </h4>

              <a
                href="tel:+918592943588"
                className="hover:text-[#05C3DE] transition font-medium text-xs block text-white/80"
              >
                +91-8592943588
              </a>

              <a
                href="mailto:info@fikratech.com"
                className="hover:text-[#05C3DE] transition font-medium text-xs block text-white/80 break-words"
              >
                info@bytekyx@gmail.com
              </a>

              <address className="block not-italic text-xs text-white/70 leading-relaxed pt-1">
                Kozhikode
              </address>

              <address className="block not-italic text-xs text-white/70 leading-relaxed">
                Kerala
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="col-span-full flex flex-wrap justify-center items-center gap-1 py-8 border-t border-white/10 mt-12 text-xs text-center text-white/60">
        <p>© 2026 ByteLyx. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;