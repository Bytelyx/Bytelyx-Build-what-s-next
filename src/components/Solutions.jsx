import React, { useState } from 'react';
import { 
  Zap, 
  Workflow, 
  Cpu, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  TrendingUp,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const solutions = [
  {
    id: 'modernize-workflows',
    title: 'Modernize Complex Workflows',
    headline: 'Eliminate Legacy Bottlenecks & Accelerate Engineering Cadence',
    description: 'We deconstruct slow, brittle monolithic legacy systems into resilient, event-driven microservices. Our refactoring strategies preserve operational continuity while boosting throughput, test coverage, and team delivery velocity.',
    icon: Workflow,
    accent: '#863bff',
    metrics: [
      { label: 'Deployment Frequency', value: '10x Faster' },
      { label: 'Technical Debt Reduction', value: '-65%' },
      { label: 'System Fault Tolerance', value: '99.99%' },
    ],
    features: [
      'Zero-downtime strangler-fig migration from legacy codebases to modern clouds',
      'Distributed event streaming architectures with Kafka and Redis Pub/Sub',
      'Automated end-to-end regression testing and CI/CD deployment pipelines',
      'Comprehensive API gateway governance and backwards-compatible contracts'
    ]
  },
  {
    id: 'digital-experiences',
    title: 'Elevate Digital Experiences',
    headline: 'Sub-80ms Fluidity & Conversion-Optimized Product Ergonomics',
    description: 'Every interaction directly shapes user trust. We design and engineer web and mobile interfaces that merge mathematical visual balance, lightning-fast edge response times, and WCAG AA accessibility.',
    icon: Zap,
    accent: '#47bfff',
    metrics: [
      { label: 'Edge Latency', value: '< 80ms' },
      { label: 'Interaction Frame Rate', value: '60 FPS' },
      { label: 'Core Web Vitals', value: '100 / 100' },
    ],
    features: [
      'Server-driven UI architectures optimized for instant first-contentful paint',
      'Tokenized design systems unifying web, mobile, and administrative consoles',
      'Tactile micro-interaction physics and predictive optimistic UI states',
      'Frictionless checkout, onboarding, and multi-step enterprise user flows'
    ]
  },
  {
    id: 'automate-processes',
    title: 'Automate Enterprise Processes',
    headline: 'Autonomous AI Swarms & Knowledge-Base Intelligence',
    description: 'We integrate production-grade generative AI and deterministic automated workflows into your enterprise stack, orchestrating autonomous agentic swarms that safely resolve complex tasks without manual intervention.',
    icon: Cpu,
    accent: '#7e14ff',
    metrics: [
      { label: 'Manual Effort Saved', value: '80%+' },
      { label: 'Inference Response', value: '< 1.2s' },
      { label: 'Accuracy Benchmark', value: '99.2%' },
    ],
    features: [
      'Private Retrieval-Augmented Generation (RAG) with tenant-isolated embeddings',
      'Autonomous multi-agent swarms with human-in-the-loop review guards',
      'Document parsing, optical invoice telemetry, and automated reconciliation',
      'Custom LLM fine-tuning and domain-specific prompt engineering pipelines'
    ]
  },
  {
    id: 'cloud-scale',
    title: 'Build Scalable Cloud Applications',
    headline: 'Elastic Cloud Infrastructure Prepared for Global Demand Spikes',
    description: 'From rapid initial launch to global multi-region expansion, we build serverless and containerized cloud systems that automatically adapt to traffic surges while keeping computing overhead lean and predictable.',
    icon: Cloud,
    accent: '#863bff',
    metrics: [
      { label: 'High Availability SLA', value: '99.98%' },
      { label: 'Elastic Scale', value: '1M+ Concurrent' },
      { label: 'Cloud Cost Efficiency', value: '-35%' },
    ],
    features: [
      'Multi-region Kubernetes clusters with automated health-check failover',
      'Infrastructure as Code (Terraform) enabling deterministic environment spin-up',
      'SOC2 and HIPAA compliance hardening with encrypted data at rest and in transit',
      'Real-time APM telemetry, distributed OpenTelemetry tracing, and alerting'
    ]
  }
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const currentSolution = solutions.find((s) => s.id === activeTab) || solutions[0];
  const Icon = currentSolution.icon;

  return (
    <section 
      id="solutions" 
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#06040a] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Cyber Mesh Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#863bff]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#47bfff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0a1a] border border-[#863bff]/30 text-[#ede6ff] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#47bfff]" />
            <span>Targeted Business Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5">
            How BYTELYX Drives{' '}
            <span className="bg-gradient-to-r from-[#863bff] via-[#aa3bff] to-[#47bfff] bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>

          <p className="text-[#9d96b8] max-w-2xl text-base sm:text-lg leading-relaxed font-sans">
            We partner with forward-thinking enterprises to modernize outdated architectures, delight users with exceptional interfaces, automate repetitive work, and build software prepared for future scale.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {solutions.map((item) => {
            const ItemIcon = item.icon;
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#863bff] to-[#47bfff] text-white shadow-lg shadow-[#863bff]/25 font-semibold'
                    : 'bg-[#0d0a1a] border border-white/10 text-[#9d96b8] hover:text-white hover:border-white/20'
                }`}
              >
                <ItemIcon className="w-4 h-4" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Feature Spotlight Card */}
        <div className="rounded-3xl bg-[#0d0a1a] border border-[#863bff]/25 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden text-left">
          {/* Subtle Ambient Radial Highlight */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] opacity-25 pointer-events-none"
            style={{ backgroundColor: currentSolution.accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Solution Detail & Feature List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div 
                  className="p-3 rounded-2xl bg-white/5 border border-white/10"
                  style={{ color: currentSolution.accent }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#47bfff]">
                  ENTERPRISE CAPABILITY
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {currentSolution.headline}
              </h3>

              <p className="text-sm sm:text-base text-[#9d96b8] leading-relaxed font-sans">
                {currentSolution.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#ede6ff]">
                  Key Engineering Milestones
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSolution.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f8f7fc]">
                      <CheckCircle2 className="w-4 h-4 text-[#47bfff] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-[#863bff] border border-white/15 transition-all duration-300"
                >
                  <span>Explore Architecture For Your Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Architectural Metrics & Live Telemetry Badge */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#06040a]/80 border border-white/10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono text-[#9d96b8] uppercase">
                    Architectural Impact
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Performance
                  </span>
                </div>

                <div className="space-y-5">
                  {currentSolution.metrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-xs font-sans text-[#9d96b8]">
                        {m.label}
                      </span>
                      <span className="text-lg sm:text-xl font-bold font-mono text-white">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-[#6e6787]">
                  BYTELYX Engineering Benchmark Standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
