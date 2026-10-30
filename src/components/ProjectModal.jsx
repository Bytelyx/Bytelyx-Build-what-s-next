import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Activity, ShieldCheck, Layers, Terminal, Sparkles } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/80 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-slate-950 border border-white/20 shadow-2xl shadow-blue-950/60 p-6 sm:p-8 md:p-10 my-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ backgroundColor: project.accentColor || '#38BDF8' }}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 z-10"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
              PROJECT #{project.number}
            </span>
            <span className="text-xs font-medium text-slate-300 bg-slate-800/80 border border-white/10 px-3 py-1 rounded-full">
              {project.category} Architecture
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Production Ready
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-cyan-300 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Telemetry Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 mb-8">
          {project.metrics?.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium uppercase font-mono">
                {m.label}
              </span>
              <span className="text-lg font-bold font-mono text-white">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Content Body: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Left: Overview & Key Features */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-sm font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>System Architecture Overview</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Core Capabilities & Workflows</span>
              </h3>
              <ul className="space-y-2.5">
                {project.features?.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Architecture Chips & Tech Stack Spec */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-4">
              <h3 className="text-sm font-mono font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Technical Stack Chips</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.architecture?.map((arch, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
                  >
                    {arch}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Testing Suite:</span>
                  <span className="text-slate-200 font-mono">Jest, Playwright E2E</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>CI/CD Pipeline:</span>
                  <span className="text-slate-200 font-mono">GitHub Actions / Docker</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Hosting / Edge:</span>
                  <span className="text-slate-200 font-mono">AWS ECS / Vercel Edge</span>
                </div>
              </div>
            </div>

            {/* Quick Live Interactive Simulation Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 to-cyan-950/40 border border-cyan-500/20 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-semibold text-cyan-300 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Need a Similar Custom Build?</span>
              </div>
              BYTELYX delivers full source code ownership, comprehensive architecture blueprints, and CI/CD pipelines.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/bytelyx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-white/15 hover:border-cyan-400/40 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Inspect on GitHub</span>
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                onClose();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
            >
              <span>Request System Blueprint</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
