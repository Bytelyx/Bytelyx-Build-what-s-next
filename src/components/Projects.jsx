import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  ArrowUpRight,
  Terminal,
  X,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Sparkles,
  Layers
} from 'lucide-react';
import { projectsData, projectFilterCategories } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

// Interactive Project Details Modal
function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#0d0a1a] border border-[#863bff]/30 rounded-3xl p-6 sm:p-10 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer"
          aria-label="Close Case Study"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#47bfff] mb-4">
          <span className="border border-[#47bfff]/30 bg-[#47bfff]/10 px-3 py-1 rounded-full">
            CASE STUDY #{project.number}
          </span>
          <span>{project.category}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-2">
          {project.title}
        </h2>
        <p className="text-sm font-sans text-[#9d96b8] mb-6">
          {project.tagline}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#06040a] border border-white/10 mb-8">
          {project.metrics?.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[10px] font-mono text-[#9d96b8] uppercase tracking-wider">
                {m.label}
              </span>
              <span className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#ede6ff] mb-2 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#863bff]" />
                <span>System Architecture Overview</span>
              </h3>
              <p className="text-sm font-sans text-[#9d96b8] leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#ede6ff] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#47bfff]" />
                <span>Core Capabilities & Workflows</span>
              </h3>
              <ul className="space-y-2">
                {project.features?.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f8f7fc]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47bfff] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-2xl bg-[#06040a] border border-white/10 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#ede6ff] flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#863bff]" />
                <span>Technology Stack</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.architecture?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-[#ede6ff]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#06040a] border border-white/10 text-xs text-[#9d96b8] space-y-2">
              <div className="font-semibold text-white flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Engineering Standards</span>
              </div>
              <p className="leading-relaxed">
                Architected with automated CI/CD pipelines, strict typing, end-to-end regression testing, and zero-downtime rolling deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <span className="text-xs font-mono text-[#6e6787]">
            BYTELYX Production Systems Showcase
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2 rounded-full bg-gradient-to-r from-[#863bff] to-[#47bfff] text-white text-xs font-semibold hover:opacity-95 transition-all text-center"
            >
              Request Similar Build
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return (
      project.filterCategory === activeCategory ||
      project.secondaryCategory === activeCategory ||
      project.tags.includes(activeCategory)
    );
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-showcase-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-10 bg-[#06040a] border-t border-white/10 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0a1a] border border-[#863bff]/30 text-[#ede6ff] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#47bfff]" />
            <span>Portfolio Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Proven Architectures &bull;{' '}
            <span className="bg-gradient-to-r from-[#863bff] via-[#aa3bff] to-[#47bfff] bg-clip-text text-transparent">
              Production Work
            </span>
          </h2>

          <p className="text-[#9d96b8] max-w-2xl text-sm sm:text-base leading-relaxed mb-8 font-sans">
            Explore our curated showcase of enterprise software systems, cross-platform mobile platforms, and high-performance digital products.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full border border-white/10 bg-[#0d0a1a]">
            {projectFilterCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#863bff] to-[#47bfff] text-white shadow-md font-semibold'
                      : 'text-[#9d96b8] hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-showcase-card group flex flex-col justify-between rounded-3xl bg-[#0d0a1a] border border-white/10 hover:border-[#863bff]/40 p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_16px_36px_rgba(134,59,255,0.12)] text-left"
            >
              <div>
                {/* Project Number & Discipline */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-white border border-[#863bff]/30 bg-[#863bff]/10 px-2.5 py-0.5 rounded-full">
                      #{project.number}
                    </span>
                    <span className="text-xs font-mono text-[#47bfff]">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#6e6787] border border-white/10 px-2 py-0.5 rounded-full">
                    Production
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-[#ede6ff] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#9d96b8] leading-relaxed mb-6 font-sans">
                  {project.tagline}
                </p>

                {/* Architecture Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.architecture?.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-[#ede6ff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Strip: Primary Metric & Modal Inspection Trigger */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#6e6787] uppercase">
                    {project.metrics?.[0]?.label}
                  </span>
                  <span className="text-xs font-bold font-mono text-white">
                    {project.metrics?.[0]?.value}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-[#863bff] border border-white/10 transition-all cursor-pointer"
                >
                  <span>Inspect Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
