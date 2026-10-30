import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Layout, Smartphone, TrendingUp, Compass, Cpu, 
  Check, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Code2,
  Layout,
  Smartphone,
  TrendingUp,
  Compass,
  Cpu,
};

export default function ServiceCard({ service, index }) {
  const IconComponent = iconMap[service.iconName] || Code2;
  const isFeatured = service.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative bg-white rounded-2xl p-7 sm:p-8 border border-[#E7E9F2] shadow-[0_4px_24px_-6px_rgba(8,8,91,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(48,39,217,0.12)] hover:border-[#3027D9]/40 transition-all duration-300 flex flex-col justify-between ${
        isFeatured ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-white to-[#F6F7FC]/40' : ''
      }`}
    >
      {/* Subtle top card glow on hover */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3027D9]/0 group-hover:via-[#3027D9]/60 to-transparent transition-all duration-500" />

      <div>
        {/* Top Header: Icon, Pillar & Index Number */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#F6F7FC] border border-[#E7E9F2] flex items-center justify-center text-[#3027D9] group-hover:bg-[#3027D9] group-hover:text-white transition-all duration-300 shadow-2xs">
              <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#08085B] bg-[#F6F7FC] px-2.5 py-1 rounded-md border border-[#E7E9F2]">
              {service.pillar}
            </span>
          </div>

          <span className="font-mono text-xs font-semibold text-[#667085]/60 group-hover:text-[#3027D9] transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#08085B] transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-xs font-semibold text-[#3027D9] mb-3">
          {service.tagline}
        </p>
        <p className="text-sm text-[#667085] leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Capabilities List */}
        <div className="space-y-2 mb-6 pt-4 border-t border-[#F6F7FC]">
          {service.capabilities.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#111827]">
              <div className="mt-0.5 rounded-full p-0.5 bg-[#F6F7FC] text-[#3027D9] shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span className="leading-tight text-[#4B5563]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech tags & Link */}
      <div className="pt-4 border-t border-[#E7E9F2]/60">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F6F7FC] text-[#667085] border border-[#E7E9F2]/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#3027D9] group-hover:text-[#08085B] transition-colors"
        >
          <span>Enquire about this capability</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
