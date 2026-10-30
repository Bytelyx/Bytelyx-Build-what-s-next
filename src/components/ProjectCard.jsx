import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import ProjectMockup from './ProjectMockup';

export default function ProjectCard({ project, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl border border-[#E7E9F2] shadow-[0_4px_24px_-6px_rgba(8,8,91,0.04)] hover:shadow-[0_24px_48px_-15px_rgba(8,8,91,0.12)] hover:border-[#3027D9]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Top Banner & Visual Area */}
      <div className="p-6 sm:p-7 pb-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F6F7FC] text-[#3027D9] border border-[#E7E9F2]">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#08085B]/5 text-[#08085B]">
              <Sparkles className="w-3 h-3 text-[#3027D9]" />
              {project.badge}
            </span>
          </div>
          <span className="font-mono text-xs text-[#667085] font-semibold">
            {project.number}
          </span>
        </div>

        {/* Mockup Preview Window */}
        <div className="h-64 sm:h-72 w-full transition-transform duration-500 group-hover:scale-[1.02]">
          <ProjectMockup projectId={project.id} />
        </div>
      </div>

      {/* Card Info & Meta */}
      <div className="p-6 sm:p-7 pt-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#08085B] transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-[#667085] leading-relaxed mb-6">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#F6F7FC]">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F6F7FC] text-[#111827] border border-[#E7E9F2]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#08085B] bg-[#F6F7FC] border border-[#E7E9F2] group-hover:bg-[#3027D9] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-2xs"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
