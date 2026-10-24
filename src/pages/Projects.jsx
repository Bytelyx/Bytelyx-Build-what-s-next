import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrustedBy from '../components/TrustedBy';
import { DeviceMockup } from '../components/DeviceMockup';
import { OurPartners } from '../components/OurPartners';
import { ReadyToStart } from '../components/ReadyToStart';
import { projectsData } from '../data/projectsData';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = projectsData.filter((p) => {
    if (activeTab === 'all') return true;
    return p.type === activeTab;
  });

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 pt-8 pb-14 md:py-20 text-center flex flex-col items-center">
        {/* Glow ambient */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] blur-[100px]" />

        <div className="bottomBorder mx-auto mb-4 flex w-fit items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
          <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
          <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
            Proof of Excellence
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          <span className="bg-clip-text text-transparent from-white via-white to-white/70 bg-gradient-to-b">
            Solutions That Deliver{' '}
          </span>
          <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
            Results
          </span>
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 font-light max-w-3xl mx-auto leading-relaxed mb-8">
          From business automation platforms to consumer mobile apps, Fikratech creates digital experiences that solve real-world challenges. Here’s a look at our work—and the impact it’s had.
        </p>
      </section>

      {/* 2. TRUSTED BY CLIENT STRIP */}
      <div className="w-full">
        <TrustedBy />
      </div>

      {/* 3. PROJECTS SHOWCASE */}
      <section className="w-full max-w-7xl mx-auto px-4 my-14">
        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-16">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition cursor-pointer ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white shadow-lg shadow-cyan-500/25'
                : 'bg-[#15212C] text-foreground/75 hover:text-white border border-white/10'
            }`}
          >
            All Projects
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('private')}
            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition cursor-pointer ${
              activeTab === 'private'
                ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white shadow-lg shadow-cyan-500/25'
                : 'bg-[#15212C] text-foreground/75 hover:text-white border border-white/10'
            }`}
          >
            Private Projects
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('government')}
            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition cursor-pointer ${
              activeTab === 'government'
                ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white shadow-lg shadow-cyan-500/25'
                : 'bg-[#15212C] text-foreground/75 hover:text-white border border-white/10'
            }`}
          >
            Government Projects
          </button>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => navigate(`/projects/view/${proj.name}`)}
              className="group relative z-0 flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 lg:p-12 rounded-3xl border border-white/10 cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#307FE2]/50 hover:shadow-2xl hover:shadow-cyan-500/15"
              style={{ backgroundColor: proj.bgColor }}
            >
              {/* Radial glow */}
              <div
                className="absolute inset-0 -z-10 h-full w-full blur-[80px] pointer-events-none opacity-60 group-hover:opacity-100 transition duration-500"
                style={{ background: `radial-gradient(circle at center, ${proj.bgLight}, transparent)` }}
              />

              {/* Text Info */}
              <div className="w-full lg:w-1/2 z-10 mb-8 lg:mb-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {(proj.badgesEn || []).map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-foreground border border-white/15"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {proj.titleEn}
                </h3>
                <h4 className="text-base font-medium text-[#05C3DE] mb-4">
                  {proj.categoryEn}
                </h4>
                <p className="text-sm md:text-base text-foreground/75 font-light leading-relaxed mb-6 max-w-xl">
                  {proj.descriptionEn}
                </p>

                <div className="inline-flex items-center gap-2 text-[#05C3DE] font-semibold text-sm group-hover:underline">
                  <span>View Case Study</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Device Mockup */}
              <div className="w-full lg:w-1/2 flex justify-center z-10 transform group-hover:scale-105 transition duration-700">
                <DeviceMockup device={proj.device} image={proj.projectImage} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PARTNERS TESTIMONIALS */}
      <div className="w-full mt-16">
        <OurPartners />
      </div>

      {/* 5. READY TO START */}
      <ReadyToStart />
    </div>
  );
}

export default Projects;
