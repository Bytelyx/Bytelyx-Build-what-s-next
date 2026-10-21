import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLenis } from '../hooks/useLenis';

export function Layout({ children }) {
  const { pathname, hash } = useLocation();

  // Initialize Lenis smooth scroll synced with GSAP
  useLenis();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-[#030E18] text-foreground flex flex-col justify-between selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">
      {/* Sticky Header with exact reference styling and container */}
      <div className="3xl:container 2.5xl:px-32 3xl:px-48 px-4 md:px-10 lg:px-8 xl:px-14 2xl:px-24 sticky -top-5 z-40 pt-6 2xl:-top-7 2xl:pt-8 w-full max-w-7xl mx-auto">
        <Header />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 mt-6 md:mt-10 min-h-screen w-full">
        {children}
      </main>

      {/* Footer Container */}
      <div className="3xl:container 2.5xl:px-32 3xl:px-48 px-4 md:px-10 lg:px-8 xl:px-14 2xl:px-24 w-full max-w-7xl mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
