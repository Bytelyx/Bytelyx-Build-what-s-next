import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export default function TechCapabilities() {
  const [activeCategory, setActiveCategory] = useState('all');

  const capabilities = [
    { name: 'React', category: 'frontend', role: 'Frontend Architecture & SPAs' },
    { name: 'JavaScript', category: 'frontend', role: 'Modern ES6+ Logic & Interaction' },
    { name: 'Node.js', category: 'backend', role: 'Asynchronous Server Runtimes' },
    { name: 'Express', category: 'backend', role: 'RESTful API & Middleware Services' },
    { name: 'MongoDB', category: 'backend', role: 'Document Database Schemas' },
    { name: 'Flutter', category: 'mobile', role: 'Cross-Platform Android & iOS' },
    { name: 'HTML & CSS', category: 'frontend', role: 'Semantic & Accessible Markup' },
    { name: 'Tailwind CSS', category: 'frontend', role: 'Design Systems & Responsive Layouts' },
    { name: 'GSAP', category: 'motion', role: 'Scroll-Driven & Orchestrated Animation' },
    { name: 'Three.js', category: 'motion', role: 'Interactive 3D Web Experiences' },
    { name: 'UI/UX Design', category: 'design', role: 'User Research, Wireframes & Systems' },
    { name: 'AI Integration', category: 'emerging', role: 'Practical API & Workflow Automation' },
    { name: 'Digital Marketing', category: 'growth', role: 'Campaign Strategy & Brand Positioning' },
  ];

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Data' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'motion', label: '3D & Motion' },
    { id: 'design', label: 'UI/UX' },
    { id: 'growth', label: 'Growth' },
  ];

  const filtered = activeCategory === 'all'
    ? capabilities
    : capabilities.filter(c => c.category === activeCategory || (activeCategory === 'motion' && ['frontend', 'motion'].includes(c.category)));

  return (
    <section className="py-24 bg-[#F6F7FC]/70 relative border-t border-[#E7E9F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E9F2] text-xs font-semibold uppercase tracking-wider text-[#3027D9] mb-4 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-[#3027D9]" />
            <span>Technical Breadth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827]">
            Technology &amp;{' '}
            <span className="bg-gradient-to-r from-[#08085B] via-[#3027D9] to-[#5145FF] bg-clip-text text-transparent">
              Capabilities.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            Modern, industry-tested technologies and strategic capabilities we leverage to engineer reliable digital products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E7E9F2]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#08085B] text-white shadow-sm'
                  : 'bg-white text-[#667085] border border-[#E7E9F2] hover:bg-[#F6F7FC] hover:text-[#111827]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Matrix of Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="bg-white p-5 rounded-xl border border-[#E7E9F2] shadow-2xs hover:shadow-md hover:border-[#3027D9]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#111827]">{item.name}</span>
                <span className="w-2 h-2 rounded-full bg-[#3027D9]" />
              </div>
              <p className="text-xs text-[#667085] leading-relaxed">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Framing Disclaimer / Note */}
        <div className="mt-12 pt-6 border-t border-[#E7E9F2] flex items-center justify-between text-xs text-[#667085]">
          <span>Relevant technologies and services tailored per project requirements.</span>
          <span className="text-[#3027D9] font-medium hidden sm:inline">Modular Architecture</span>
        </div>
      </div>
    </section>
  );
}
