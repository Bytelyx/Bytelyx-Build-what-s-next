import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Clock,
  Copy,
  Check,
  Calculator,
  ShieldCheck
} from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Project blueprint estimator modules
const projectTypes = [
  { id: 'web', name: 'Web Application / Portal', baseWeeks: 4, multiplier: 1.0 },
  { id: 'mobile', name: 'Mobile App (iOS & Android)', baseWeeks: 6, multiplier: 1.2 },
  { id: 'enterprise', name: 'Enterprise Cloud System', baseWeeks: 8, multiplier: 1.5 },
  { id: 'ai', name: 'AI & Autonomous Agentic Suite', baseWeeks: 5, multiplier: 1.3 },
];

const featureAddons = [
  { id: 'auth', label: 'Auth, RBAC & Multi-Tenant', weeks: 1 },
  { id: 'realtime', label: 'Real-Time Telemetry / WebSockets', weeks: 1.5 },
  { id: 'payments', label: 'Escrow & Stripe Connect Billing', weeks: 1.5 },
  { id: 'ai_rag', label: 'Custom RAG & Autonomous AI Agents', weeks: 2 },
  { id: 'hipaa', label: 'HIPAA & Civic Security Hardening', weeks: 2 },
  { id: 'design_sys', label: 'Bespoke Figma UI/UX Design System', weeks: 1.5 },
];

export default function Contact() {
  // Estimator state
  const [selectedType, setSelectedType] = useState('web');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'design_sys']);
  const [timelineSpeed, setTimelineSpeed] = useState('standard'); // 'standard' or 'accelerated'

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Full-Stack Web Development',
    budget: '$10k - $25k',
    message: '',
  });

  const [copiedChannel, setCopiedChannel] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Estimator Calculations
  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];
  const featureWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = featureAddons.find((f) => f.id === featId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);

  const totalBaseWeeks = Math.round((currentType.baseWeeks + featureWeeks) * currentType.multiplier);
  const sprintCount = Math.ceil(totalBaseWeeks / 2);
  const estimatedDeliveryWeeks = timelineSpeed === 'accelerated' ? Math.max(3, Math.round(totalBaseWeeks * 0.7)) : totalBaseWeeks;

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApplyScopeToMessage = () => {
    const blueprintText = `Estimated Project Blueprint:
- Paradigm: ${currentType.name}
- Modules: ${selectedFeatures.map((id) => featureAddons.find((f) => f.id === id)?.label).join(', ')}
- Delivery Timeline: ${estimatedDeliveryWeeks} Weeks (${sprintCount} Sprints, ${timelineSpeed === 'accelerated' ? 'Accelerated' : 'Standard'})

Project Goals & Notes: `;

    setFormData((prev) => ({
      ...prev,
      service: currentType.name,
      message: blueprintText,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedChannel(type);
    setTimeout(() => setCopiedChannel(null), 2500);
  };

  return (
    <section 
      id="contact" 
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#06040a] border-t border-white/10 overflow-hidden text-white"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#863bff]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0a1a] border border-[#863bff]/30 text-[#ede6ff] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#47bfff]" />
            <span>Direct Engineering Line</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5">
            Let&apos;s Engineer Your{' '}
            <span className="bg-gradient-to-r from-[#863bff] via-[#aa3bff] to-[#47bfff] bg-clip-text text-transparent">
              Next Breakthrough
            </span>
          </h2>

          <p className="text-[#9d96b8] max-w-2xl text-base sm:text-lg leading-relaxed font-sans">
            Have a project in mind, need architectural counsel, or want to explore an enterprise partnership? Talk directly to our technical founders and lead architects.
          </p>
        </div>

        {/* INTERACTIVE SCOPE & SPRINT ESTIMATOR PANEL */}
        <div className="rounded-3xl bg-[#0d0a1a] border border-[#863bff]/25 p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#47bfff]">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Interactive Scope & Timeline Estimator
                </h3>
                <p className="text-xs text-[#9d96b8] font-sans">
                  Select your architecture parameters to generate an instant sprint forecast
                </p>
              </div>
            </div>

            {/* Calculated Result Badge */}
            <div className="flex items-center gap-4 bg-[#06040a] border border-[#863bff]/30 px-4 py-2.5 rounded-2xl">
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-[#9d96b8] uppercase tracking-wider">Estimated Timeline</span>
                <span className="text-sm font-bold font-mono text-[#47bfff]">
                  {estimatedDeliveryWeeks} Weeks &bull; {sprintCount} Sprints
                </span>
              </div>
              <button
                type="button"
                onClick={handleApplyScopeToMessage}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#863bff] to-[#47bfff] text-white text-xs font-semibold hover:opacity-95 transition-opacity cursor-pointer shadow-md"
              >
                Apply to Message
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* 1. Project Type Selector */}
            <div>
              <span className="text-xs font-mono font-medium text-[#ede6ff] uppercase tracking-wider mb-3 block">
                1. System Paradigm
              </span>
              <div className="space-y-2">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-sans transition-all flex items-center justify-between cursor-pointer ${
                      selectedType === type.id
                        ? 'bg-[#863bff]/20 border border-[#863bff]/50 text-white font-semibold shadow-sm'
                        : 'bg-[#06040a] border border-white/5 text-[#9d96b8] hover:text-white hover:border-white/15'
                    }`}
                  >
                    <span>{type.name}</span>
                    <span className="font-mono text-[10px] text-[#47bfff]">~{type.baseWeeks}w</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Feature Addons */}
            <div>
              <span className="text-xs font-mono font-medium text-[#ede6ff] uppercase tracking-wider mb-3 block">
                2. Key Engineering Modules
              </span>
              <div className="space-y-2">
                {featureAddons.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-sans transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'bg-[#863bff]/20 border border-[#863bff]/50 text-white font-semibold shadow-sm'
                          : 'bg-[#06040a] border border-white/5 text-[#9d96b8] hover:text-white hover:border-white/15'
                      }`}
                    >
                      <span className="truncate pr-2">{feat.label}</span>
                      <span className="font-mono text-[10px] text-[#47bfff]">+{feat.weeks}w</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Sprint Velocity Mode */}
            <div>
              <span className="text-xs font-mono font-medium text-[#ede6ff] uppercase tracking-wider mb-3 block">
                3. Delivery Velocity
              </span>
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => setTimelineSpeed('standard')}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer ${
                    timelineSpeed === 'standard'
                      ? 'bg-[#863bff]/20 border-[#863bff]/50 text-white font-semibold shadow-sm'
                      : 'bg-[#06040a] border-white/5 text-[#9d96b8] hover:text-white hover:border-white/15'
                  }`}
                >
                  <div className="font-semibold text-white mb-1">Standard Agile Cadence</div>
                  <div className="text-[11px] text-[#9d96b8]">Bi-weekly sprints, comprehensive staging reviews.</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTimelineSpeed('accelerated')}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer ${
                    timelineSpeed === 'accelerated'
                      ? 'bg-[#47bfff]/20 border-[#47bfff]/50 text-white font-semibold shadow-sm'
                      : 'bg-[#06040a] border-white/5 text-[#9d96b8] hover:text-white hover:border-white/15'
                  }`}
                >
                  <div className="font-semibold text-white mb-1">Accelerated Sprint Pod</div>
                  <div className="text-[11px] text-[#9d96b8]">Dedicated engineering pod for expedited release (~30% faster).</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Channels Left + Contact Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Official Contact Badges & Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Live Availability Status Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0d0a1a] border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-xs font-mono font-medium tracking-wider uppercase text-emerald-400">
                  Engineering Pods Available
                </span>
              </div>
              <p className="text-sm text-[#9d96b8] leading-relaxed mb-4 font-sans">
                We accept a select number of high-impact enterprise partnerships each quarter to ensure direct founder-level architecture focus.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#ede6ff]">
                <Clock className="w-3.5 h-3.5 text-[#47bfff]" />
                <span>Typical response window: &lt; 2 business hours</span>
              </div>
            </div>

            {/* Direct Channel Badges */}
            <div className="space-y-3">
              {/* Email Badge */}
              <div className="group flex items-center justify-between p-4 rounded-2xl bg-[#0d0a1a] border border-white/10 hover:border-[#863bff]/40 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#863bff] border border-white/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#9d96b8] block">Direct Inquiry</span>
                    <a
                      href="mailto:hello@bytelyx.com"
                      className="text-sm font-semibold text-white hover:text-[#47bfff] transition-colors"
                    >
                      hello@bytelyx.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('hello@bytelyx.com', 'email')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-[#9d96b8] hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedChannel === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Badge */}
              <div className="group flex items-center justify-between p-4 rounded-2xl bg-[#0d0a1a] border border-white/10 hover:border-[#863bff]/40 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#47bfff] border border-white/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#9d96b8] block">Technical Hotline</span>
                    <a
                      href="tel:+919876543210"
                      className="text-sm font-semibold text-white hover:text-[#47bfff] transition-colors font-mono"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard('+91 98765 43210', 'phone')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-[#9d96b8] hover:text-white transition-colors cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedChannel === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Badge */}
              <a
                href="https://github.com/bytelyx"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#0d0a1a] border border-white/10 hover:border-[#863bff]/40 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-white border border-white/10 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#9d96b8] block">Open Source & Research</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#47bfff] transition-colors">
                      github.com/bytelyx
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#9d96b8] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* LinkedIn Badge */}
              <a
                href="https://linkedin.com/company/bytelyx"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#0d0a1a] border border-white/10 hover:border-[#863bff]/40 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#863bff] border border-white/10 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#9d96b8] block">Studio Network</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#47bfff] transition-colors">
                      linkedin.com/company/bytelyx
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#9d96b8] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0d0a1a] border border-[#863bff]/25 p-6 sm:p-10 shadow-2xl text-left">
              {submitted ? (
                <div className="py-14 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-sm text-[#9d96b8] max-w-md leading-relaxed font-sans">
                    Thank you. Your inquiry and scope requirements have been securely dispatched to the BYTELYX lead architect team. Expect a response in under 2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#ede6ff] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-[#06040a] border border-white/10 text-white placeholder-[#6e6787] text-sm focus:outline-none focus:border-[#863bff] transition-all"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#ede6ff] uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#06040a] border border-white/10 text-white placeholder-[#6e6787] text-sm focus:outline-none focus:border-[#863bff] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Organization / Company */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#ede6ff] uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Cloud Technologies"
                        className="w-full px-4 py-3 rounded-xl bg-[#06040a] border border-white/10 text-white placeholder-[#6e6787] text-sm focus:outline-none focus:border-[#863bff] transition-all"
                      />
                    </div>

                    {/* Budget Tier */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#ede6ff] uppercase tracking-wider mb-2">
                        Target Investment Tier
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#06040a] border border-white/10 text-white text-sm focus:outline-none focus:border-[#863bff] transition-all cursor-pointer"
                      >
                        <option value="$10k - $25k">$10k - $25k (Pilot / MVP)</option>
                        <option value="$25k - $50k">$25k - $50k (Full System Architecture)</option>
                        <option value="$50k - $100k+">$50k - $100k+ (Enterprise Flagship)</option>
                        <option value="Advisory / Retainer">Engineering Retainer / Advisory</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details / Blueprint */}
                  <div>
                    <label className="block text-[11px] font-mono text-[#ede6ff] uppercase tracking-wider mb-2">
                      Project Specification & Objectives *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your architectural goals, timeline, and key performance requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#06040a] border border-white/10 text-white placeholder-[#6e6787] text-sm focus:outline-none focus:border-[#863bff] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#863bff] via-[#7e14ff] to-[#47bfff] hover:opacity-95 shadow-[0_0_25px_rgba(134,59,255,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Blueprint...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Blueprint</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#9d96b8] pt-2 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#47bfff]" />
                    <span>Protected by enterprise NDA standards &bull; Zero spam guarantee</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
