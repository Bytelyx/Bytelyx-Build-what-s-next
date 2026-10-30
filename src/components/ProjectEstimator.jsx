import React, { useState } from 'react';
import {
  Calculator,
  Sliders,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  Layers,
  Cpu
} from 'lucide-react';

const projectTypes = [
  { id: 'web', name: 'Web Application / Portal', baseWeeks: 4, multiplier: 1.0 },
  { id: 'mobile', name: 'Cross-Platform Mobile App', baseWeeks: 6, multiplier: 1.2 },
  { id: 'enterprise', name: 'Enterprise Cloud System', baseWeeks: 8, multiplier: 1.5 },
  { id: 'ai', name: 'AI & Autonomous Agentic Suite', baseWeeks: 5, multiplier: 1.3 },
];

const featureAddons = [
  { id: 'auth', label: 'Auth, RBAC & Multi-Tenant Orgs', weeks: 1 },
  { id: 'realtime', label: 'Real-Time Telemetry / WebSockets', weeks: 1.5 },
  { id: 'payments', label: 'Stripe Escrow & Billing Engine', weeks: 1.5 },
  { id: 'ai_rag', label: 'Custom RAG & Autonomous AI Agents', weeks: 2 },
  { id: 'hipaa', label: 'HIPAA / Civic Security Hardening', weeks: 2 },
  { id: 'design_sys', label: 'Bespoke Figma UI/UX Design System', weeks: 1.5 },
];

export default function ProjectEstimator({ onScopeSelect }) {
  const [selectedType, setSelectedType] = useState('web');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'design_sys']);
  const [timelineSpeed, setTimelineSpeed] = useState('standard'); // 'standard' or 'accelerated'

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];
  const featureWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = featureAddons.find((f) => f.id === featId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);

  const totalBaseWeeks = Math.round((currentType.baseWeeks + featureWeeks) * currentType.multiplier);
  const sprintCount = Math.ceil(totalBaseWeeks / 2);
  const estimatedDeliveryWeeks = timelineSpeed === 'accelerated' ? Math.max(3, Math.round(totalBaseWeeks * 0.7)) : totalBaseWeeks;

  const handleApplyScope = (e) => {
    e.preventDefault();
    const scopeSummary = {
      type: currentType.name,
      features: selectedFeatures.map((id) => featureAddons.find((f) => f.id === id)?.label).filter(Boolean),
      estimatedWeeks: estimatedDeliveryWeeks,
      sprints: sprintCount,
      speed: timelineSpeed === 'accelerated' ? 'Accelerated Sprint' : 'Standard Sprint',
    };

    if (onScopeSelect) {
      onScopeSelect(scopeSummary);
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1D] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium tracking-wide uppercase mb-3 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope Blueprint</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive Project{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Estimator & Timeline
            </span>
          </h2>

          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Select your architectural parameters, choose core technical addons, and forecast engineering sprints before scheduling your kick-off.
          </p>
        </div>

        {/* Estimator Card Interface */}
        <div className="rounded-3xl backdrop-blur-2xl bg-slate-900/80 border border-white/15 p-6 sm:p-10 shadow-2xl shadow-blue-950/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Configurator Options */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Step 1: Core Platform */}
              <div>
                <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Step 1 &bull; Core Project Paradigm
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => {
                    const isSelected = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-blue-600/20 border-cyan-400 text-white shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                            : 'bg-slate-950/60 border-white/10 text-slate-300 hover:border-white/20 hover:bg-slate-850'
                        }`}
                      >
                        <span className="text-sm font-bold block mb-1">{type.name}</span>
                        <span className="text-[11px] font-mono text-cyan-400">
                          Base ~{type.baseWeeks} Weeks
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: High-Performance Addons */}
              <div>
                <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Step 2 &bull; Architectural Modules & Addons
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featureAddons.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-colors ${
                          isChecked
                            ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200 shadow-sm'
                            : 'bg-slate-950/40 border-white/10 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <span className="truncate pr-2">{feat.label}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                            isChecked
                              ? 'bg-cyan-400 border-cyan-400 text-slate-950'
                              : 'border-white/20 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Velocity Tier */}
              <div>
                <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Step 3 &bull; Engineering Velocity
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setTimelineSpeed('standard')}
                    className={`flex-1 p-3.5 rounded-xl border text-left transition-all ${
                      timelineSpeed === 'standard'
                        ? 'bg-blue-600/20 border-cyan-400 text-white'
                        : 'bg-slate-950/50 border-white/10 text-slate-400'
                    }`}
                  >
                    <span className="text-xs font-bold block">Standard Agile Cadence</span>
                    <span className="text-[10px] text-slate-400">Regular 2-week dual-sprints</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTimelineSpeed('accelerated')}
                    className={`flex-1 p-3.5 rounded-xl border text-left transition-all ${
                      timelineSpeed === 'accelerated'
                        ? 'bg-cyan-600/20 border-cyan-400 text-white'
                        : 'bg-slate-950/50 border-white/10 text-slate-400'
                    }`}
                  >
                    <span className="text-xs font-bold block text-cyan-300 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" /> High-Velocity Dedicated Pod
                    </span>
                    <span className="text-[10px] text-slate-400">Up to 30% faster sprint delivery</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Live Calculated Estimate Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-cyan-500/30 text-left shadow-xl shadow-cyan-950/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Live Scope Calculation
                  </span>
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    DYNAMIC
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Estimated Turnaround:</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                        {estimatedDeliveryWeeks}
                      </span>
                      <span className="text-sm font-semibold text-cyan-300">Weeks</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-mono">Agile Sprints:</span>
                      <span className="text-base font-bold text-white font-mono">{sprintCount} Sprints</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-mono">Engineering Tier:</span>
                      <span className="text-base font-bold text-cyan-300 font-mono">Full Pod Dedicated</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[11px] text-slate-400 block font-mono mb-2">Deliverables Included:</span>
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>100% Full Source Code & IP Ownership</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Production Cloud CI/CD Automation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Interactive UI/UX Prototypes & Design Tokens</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Post-Launch 30-Day Hypercare Warranty</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Auto-fills Contact */}
              <button
                type="button"
                onClick={handleApplyScope}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Deploy Scope to Enquiry Form</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
