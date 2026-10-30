import React from 'react';
import { motion } from 'framer-motion';
import { Palette, ShieldCheck, Cpu, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const principles = [
    {
      title: 'Thoughtful Design',
      icon: Palette,
      lead: 'Aesthetics engineered with functional purpose.',
      description: 'We believe good design is not mere decoration. Every layout, typography decision, and interaction is crafted to communicate clarity, reduce user cognitive load, and elevate your brand.',
      metric: 'Form Follows Clarity',
    },
    {
      title: 'Reliable Development',
      icon: ShieldCheck,
      lead: 'Clean, maintainable, and predictable codebases.',
      description: 'We construct robust digital foundations using modular components, industry-standard patterns, and comprehensive typing paradigms that your team can confidently extend.',
      metric: 'Engineered For Longevity',
    },
    {
      title: 'Scalable Architecture',
      icon: Cpu,
      lead: 'Infrastructure that grows alongside your business.',
      description: 'From rapid prototypes to high-traffic software, we design data structures and API contracts that handle evolution without costly architectural rewrites.',
      metric: 'Built For Scale',
    },
    {
      title: 'User-Focused Experiences',
      icon: HeartHandshake,
      lead: 'Centered on real human workflows and needs.',
      description: 'Technology only succeeds when people love using it. We focus on frictionless workflows, accessible standards, and tactile micro-interactions that make interfaces genuinely enjoyable.',
      metric: 'Human-Centered Utility',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {principles.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="relative bg-white rounded-2xl p-8 sm:p-9 border border-[#E7E9F2] shadow-[0_4px_24px_-6px_rgba(8,8,91,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(8,8,91,0.08)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
          >
            {/* Subtle background geometric accent */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#3027D9]/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F6F7FC] border border-[#E7E9F2] flex items-center justify-center text-[#3027D9] group-hover:bg-[#3027D9] group-hover:text-white transition-all duration-300 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#667085] bg-[#F6F7FC] px-3 py-1 rounded-full border border-[#E7E9F2]">
                  {item.metric}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#08085B] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-[#3027D9] mb-3">
                {item.lead}
              </p>
              <p className="text-sm text-[#667085] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#F6F7FC] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3027D9]" />
              <span className="text-xs font-medium text-[#111827]">BYTELYX Core Principle</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
