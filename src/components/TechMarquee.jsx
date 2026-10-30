import React from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Database,
  Cloud,
  Server,
  Zap,
  Shield,
  Workflow,
  Sparkles,
  GitBranch,
  Boxes
} from 'lucide-react';

const techStack = [
  { name: 'React 19', category: 'Frontend', icon: Code2, color: 'text-cyan-400' },
  { name: 'Next.js 14', category: 'Framework', icon: Zap, color: 'text-white' },
  { name: 'Node.js', category: 'Runtime', icon: Server, color: 'text-emerald-400' },
  { name: 'Python / FastAPI', category: 'Backend & AI', icon: Cpu, color: 'text-blue-400' },
  { name: 'TypeScript', category: 'Language', icon: Code2, color: 'text-sky-400' },
  { name: 'AWS Cloud', category: 'Infrastructure', icon: Cloud, color: 'text-amber-400' },
  { name: 'Docker & K8s', category: 'Containers', icon: Boxes, color: 'text-cyan-300' },
  { name: 'PostgreSQL', category: 'Database', icon: Database, color: 'text-blue-300' },
  { name: 'Tailwind CSS', category: 'Styling', icon: Layers, color: 'text-cyan-400' },
  { name: 'GraphQL', category: 'API Layer', icon: Workflow, color: 'text-pink-400' },
  { name: 'PyTorch', category: 'Deep Learning', icon: Cpu, color: 'text-orange-400' },
  { name: 'OpenAI Agents', category: 'Intelligence', icon: Sparkles, color: 'text-emerald-300' },
  { name: 'Redis Telemetry', category: 'In-Memory', icon: Zap, color: 'text-red-400' },
  { name: 'Supabase', category: 'Backend as a Service', icon: Database, color: 'text-teal-400' },
];

export default function TechMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section id="stack" className="relative py-20 bg-[#0A0F1D] border-y border-white/10 overflow-hidden">
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute inset-0 bg-radial-oceanic opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium tracking-wide uppercase mb-3 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
          <Boxes className="w-3.5 h-3.5" />
          <span>Modern Engineering Ecosystem</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Battle-Tested Tech Stack & High-Throughput Engines
        </h3>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-2">
          We leverage the world's most resilient frameworks and edge runtimes to guarantee speed, zero downtime, and limitless horizontal scaling.
        </p>
      </div>

      {/* Infinite Logo Carousel */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0A0F1D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0A0F1D] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {marqueeItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/40 hover:bg-slate-800/80 transition-all duration-300 shadow-md group shrink-0 select-none cursor-default"
              >
                <div className={`p-2 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform ${tech.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
