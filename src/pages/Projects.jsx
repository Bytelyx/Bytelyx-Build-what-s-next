import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ReadyToStart } from '../components/ReadyToStart';
import { projectsData } from '../data/projectsData';
import lawish from '../assets/lawish.png';

import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const FILTER_TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'private', label: 'Private Projects' },
  { id: 'government', label: 'Government Projects' },
];

export function Projects() {
  const navigate = useNavigate();

  // Hero animation refs
  const heroHeadingRef = useRef(null);
  const heroSubtitleRef = useRef(null);

  // Projects showcase ref
  const showcaseListRef = useRef(null);

  const [activeTab, setActiveTab] = useState('all');

  // Filter projects
  const filteredProjects = projectsData.filter((p) => {
    if (activeTab === 'all') return true;
    return p.type === activeTab;
  });

  const handleOpenProject = (projectName) => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.lenis && typeof window.lenis.scrollTo === 'function') {
      window.lenis.scrollTo(0, { immediate: true, force: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    navigate(`/projects/view/${projectName}`);
  };

  // HERO GSAP ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      if (heroHeadingRef.current) {
        heroTl.fromTo(
          heroHeadingRef.current,
          {
            opacity: 0,
            y: 35,
            scale: 0.98,
          },
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
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          '-=0.7'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // PROJECT CARD SCROLLTRIGGER - SAME AS HOME PAGE
  useEffect(() => {
    const container = showcaseListRef.current;
    if (!container) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let refreshFrame = 0;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const projectCards = gsap.utils.toArray('.gsap-project-card');
      if (!projectCards.length) return;

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
            ease: 'none',
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
    }, container);

    refreshFrame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    const handleResize = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(refreshFrame);
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [activeTab]);

  return (
    <div className="projects-page">
      {/* 1. HERO SECTION */}
      <section
        className="relative isolate mx-auto w-full max-w-7xl overflow-hidden px-4 pt-4 text-center md:px-10 lg:px-8 lg:pt-6 xl:px-14 xl:pt-10 2xl:px-24 2.5xl:px-32 3xl:container 3xl:px-48"
        aria-label="Hero"
      >
        <div className="pointer-events-none absolute -top-20 left-1/2 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] opacity-75 blur-[100px] md:w-[900px]" />

        <h1
          ref={heroHeadingRef}
          className="relative z-10 mx-auto w-full text-3xl font-medium leading-tight md:text-5xl lg:mb-2 lg:w-4/5 lg:text-5xl 2xl:text-7xl 3xl:mb-16 2.5xl:mb-12"
        >
          <span className="block bg-gradient-to-b from-foreground-from via-white to-foreground-to bg-clip-text py-2 text-transparent">
            Solutions That{' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Deliver Results.
            </span>
          </span>
        </h1>

        <div className="group relative isolate space-y-6 py-4 pb-8 md:pb-10 lg:space-y-12 lg:py-8 lg:pb-12 3xl:space-y-16">
          <p
            ref={heroSubtitleRef}
            className="relative z-10 mx-auto mb-6 max-w-2xl text-xs font-light leading-6 text-white/90 md:text-xl lg:mb-6 lg:text-base 3xl:mb-12"
          >
            From business automation platforms to consumer mobile apps, Bytelyx creates digital experiences that solve real-world challenges. Here’s a look at our work—and the impact it’s had.
          </p>

          <div className="pointer-events-none absolute -bottom-36 left-1/2 z-0 size-40 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#81a1f9_0%,_#6ac8ff_44%,_#6ee2fc_54%,_#245bf1_100%)] opacity-70 blur-2xl transition-transform duration-1000 group-hover:scale-125 lg:-bottom-40 lg:size-48 lg:blur-3xl xl:-bottom-80 xl:size-80 xl:blur-[100px]" />

          <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-64 w-3/4 -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(48,127,226,0.45)_0%,_rgba(5,195,222,0.25)_35%,_transparent_75%)] opacity-90 blur-[60px]" />

          <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6DA5FF] to-transparent shadow-[0_-2px_10px_rgba(80,150,255,0.4)]" />
        </div>
      </section>

      {/* 3. INNOVATION THROUGH PROJECTS SHOWCASE */}
      <section
        className="3xl:container 2.5xl:px-32 3xl:px-48 mx-auto mt-4 mb-16 w-full max-w-7xl space-y-10 px-4 md:mt-6 md:mb-16 md:px-10 lg:mt-8 lg:px-8 xl:mt-10 xl:px-14 2xl:px-24"
        aria-label="Innovation Through Projects"
      >
        {/* Section Header */}
        <div className="m-auto flex flex-col items-center justify-center gap-2 text-center lg:gap-4 xl:gap-6">
          <div className="bottomBorder flex items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
            <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
            <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
              Our works
            </span>
          </div>

          {/* Project Category Filter */}
          <div
            className="relative m-auto mt-4 flex w-fit rounded-full border border-white/15 bg-[#FFFFFF14] p-1.5 backdrop-blur-md"
            role="tablist"
            aria-label="Project categories"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer rounded-full px-6 py-2 text-xs font-medium transition ${
                    isActive
                      ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky Stacking Project Cards - Exact Home Page Design */}
        <div ref={showcaseListRef} className="relative space-y-0">
          {filteredProjects.length === 0 ? (
            <div className="projects-empty-state">
              No projects found in this category.
            </div>
          ) : (
            filteredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                role="button"
                tabIndex={0}
                aria-label={`View ${proj.titleEn} case study`}
                onClick={() => handleOpenProject(proj.name)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenProject(proj.name);
                  }
                }}
                className="
                  gsap-project-card
                  group
                  sticky
                  top-20
                  z-0
                  flex
                  h-[65vh]
                  min-h-[420px]
                  max-h-[650px]
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  pe-3
                  shadow-2xl
                  transition-all
                  duration-700
                  sm:h-[70vh]
                  sm:min-h-[480px]
                  md:top-24
                  md:h-[75vh]
                  lg:h-[82vh]
                "
                style={{
                  backgroundColor: proj.bgColor,
                  zIndex: idx + 1,
                }}
              >
                {/* Radial Center Glow */}
                <div
                  className="pointer-events-none absolute -z-10 h-full w-full opacity-70 blur-[5rem] transition duration-700 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${proj.bgLight}, transparent)`,
                  }}
                />

                {/* Decorative Stickers (Lawish / Sahab) */}
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
                <div className="relative -z-10 -mt-4 w-[17rem] duration-1000 ease-in-out group-hover:scale-[106%] sm:w-[24rem] md:w-[34rem] lg:w-[42rem] xl:w-[48rem] 3xl:w-[56rem]">
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
                        className="absolute left-[2.25rem] top-[0.4rem] h-[78%] w-[78%] rounded-t-md object-cover object-left-top sm:left-[3rem] md:left-[3.8rem] md:top-[0.7rem] lg:left-[4.5rem] lg:rounded-t-lg xl:left-[5.6rem] xl:top-[1rem] 3xl:left-[6.8rem] 3xl:top-[1.2rem]"
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
                <div className="absolute bottom-0 left-0 z-20 flex h-14 w-full items-center justify-between border-t border-white/10 bg-[#09090952] px-4 shadow-[0px_-2px_40px_0px_rgba(209,209,209,0),0px_-2px_10px_0px_rgba(217,217,217,0.11)] backdrop-blur-[22px] duration-700 ease-in-out md:h-20 md:px-6 lg:h-24 lg:translate-y-24 lg:group-hover:translate-y-0 xl:h-28 xl:px-8">
                  <div className="min-w-0 space-y-1">
                    <span className="block truncate bg-gradient-to-b from-foreground-from to-foreground-to bg-clip-text text-sm font-semibold text-transparent sm:text-lg md:text-2xl xl:text-3xl">
                      {proj.titleEn}
                    </span>

                    <p className="text-[0.6rem] font-light text-white/70 sm:text-xs md:text-sm">
                      {proj.categoryEn}
                    </p>
                  </div>

                  <div className="ms-2 flex shrink-0 gap-2">
                    {(proj.badgesEn || []).slice(0, 3).map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="hidden rounded-md border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 lg:inline-block"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 5. READY TO START */}
      <ReadyToStart />
    </div>
  );
}

export default Projects;