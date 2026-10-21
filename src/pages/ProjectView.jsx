import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { DeviceMockup } from '../components/DeviceMockup';
import { SpecialCard } from '../components/SpecialCard';
import { OurPartners } from '../components/OurPartners';
import { ReadyToStart } from '../components/ReadyToStart';
import { ArrowLeft, Award, Zap, ShieldCheck } from 'lucide-react';

export function ProjectView() {
  const { name } = useParams();

  const project = projectsData.find((p) => p.name.toLowerCase() === name?.toLowerCase()) || projectsData[0];
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. PROJECT HERO BANNER */}
      <section
        className="relative w-full max-w-7xl mx-auto px-4 pt-4 pb-16 md:py-16 text-center flex flex-col items-center rounded-3xl border border-white/10 overflow-hidden my-4"
        style={{ backgroundColor: project.bgColor }}
      >
        {/* Glow ambient */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full blur-[90px] opacity-70"
          style={{ background: `radial-gradient(circle at center, ${project.bgLight}, transparent)` }}
        />

        {/* Back Link */}
        <div className="w-full flex justify-start mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-semibold text-foreground transition"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Client Logo & Title */}
        {project.clientLogo && (
          <div className="mb-4">
            <img
              src={project.clientLogo}
              alt={project.titleEn}
              className="h-10 md:h-12 w-auto mx-auto object-contain drop-shadow"
            />
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {(project.badgesEn || []).map((badge, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-foreground border border-white/15"
            >
              {badge}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3">
          {project.titleEn}
        </h1>
        <h2 className="text-base sm:text-xl font-semibold text-[#05C3DE] mb-6">
          {project.categoryEn}
        </h2>
        <p className="text-sm sm:text-base text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          {project.descriptionEn}
        </p>

        {/* Large Device Presentation */}
        <div className="w-full max-w-4xl mx-auto my-4 flex justify-center transform hover:scale-[1.02] transition duration-700">
          {project.heroImage ? (
            <img
              src={project.heroImage}
              alt={project.titleEn}
              className="w-full max-h-[500px] object-contain drop-shadow-2xl"
            />
          ) : (
            <DeviceMockup device={project.device} image={project.projectImage} />
          )}
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 my-16">
        <SpecialCard className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#05C3DE] bg-[#307FE2]/10 border border-[#307FE2]/20 mb-3">
                Project Overview
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Engineering Scalable Impact for {project.titleEn}
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-light mb-6">
                {project.overviewEn}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <Award className="size-5 text-[#05C3DE] shrink-0" />
                  <span className="text-xs text-foreground/75 font-medium">Certified Security Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="size-5 text-[#05C3DE] shrink-0" />
                  <span className="text-xs text-foreground/75 font-medium">Ultra-Low Latency</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-5 text-[#05C3DE] shrink-0" />
                  <span className="text-xs text-foreground/75 font-medium">99.9% Production Uptime</span>
                </div>
              </div>
            </div>

            {project.heroImage && (
              <div className="flex justify-center">
                <img
                  src={project.heroImage}
                  alt={project.titleEn}
                  className="rounded-2xl border border-white/10 max-h-72 w-auto object-cover shadow-2xl"
                />
              </div>
            )}
          </div>
        </SpecialCard>
      </section>

      {/* 3. SYSTEM MODULES (if available, e.g. Sahab) */}
      {project.modules && project.modules.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-4 my-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#05C3DE] bg-[#307FE2]/10 border border-[#307FE2]/20 mb-3">
              Architecture
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              System Modules
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.modules.map((mod, idx) => (
              <SpecialCard
                key={idx}
                className={`p-6 md:p-8 flex flex-col justify-between cursor-pointer transition ${
                  activeModuleIdx === idx ? 'border-[#307FE2] ring-1 ring-[#307FE2]/40' : ''
                }`}
                onClick={() => setActiveModuleIdx(idx)}
              >
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {mod.titleEn}
                  </h4>
                  <p className="text-xs md:text-sm text-foreground/75 leading-relaxed font-light mb-6">
                    {mod.descEn}
                  </p>
                </div>
                {mod.image && (
                  <div className="rounded-xl overflow-hidden border border-white/10 mt-auto">
                    <img src={mod.image} alt={mod.titleEn} className="w-full h-auto object-cover" />
                  </div>
                )}
              </SpecialCard>
            ))}
          </div>
        </section>
      )}

      {/* 4. CORE FEATURES */}
      {project.features && project.features.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-4 my-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#05C3DE] bg-[#307FE2]/10 border border-[#307FE2]/20 mb-3">
              Capabilities
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Core Features
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feat, idx) => (
              <SpecialCard key={idx} className="p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {feat.titleEn}
                  </h4>
                  <p className="text-sm text-foreground/75 leading-relaxed font-light mb-6">
                    {feat.descEn}
                  </p>
                </div>
                {feat.image && (
                  <div className="rounded-2xl overflow-hidden border border-white/10 mt-auto">
                    <img src={feat.image} alt={feat.titleEn} className="w-full h-auto object-cover" />
                  </div>
                )}
              </SpecialCard>
            ))}
          </div>
        </section>
      )}

      {/* 5. PROJECT OUTCOMES & IMPACT */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-4 my-16">
          <SpecialCard className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Project Outcomes & Measured Impact
            </h3>
            <p className="text-sm text-foreground/75 max-w-2xl mx-auto mb-10 font-light">
              Measurable production improvements achieved post-launch through robust technical engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {project.outcomes.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#15212C]/60 border border-white/10">
                  <span className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#307FE2] to-[#05C3DE] block mb-2">
                    {item.stat}
                  </span>
                  <p className="text-xs md:text-sm text-foreground/80 font-medium">
                    {item.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </SpecialCard>
        </section>
      )}

      {/* 6. PARTNERS TESTIMONIALS */}
      <div className="w-full mt-16">
        <OurPartners />
      </div>

      {/* 7. READY TO START */}
      <ReadyToStart />
    </div>
  );
}

export default ProjectView;
