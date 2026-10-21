import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SpecialCard } from '../components/SpecialCard';
import { ReadyToStart } from '../components/ReadyToStart';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'UI/UX Design', 'Engineering', 'Fintech', 'Strategy'];

  const articles = [
    {
      id: 1,
      slug: 'ux-ui-design-patterns-2024',
      title: 'The Best Collections of Real UX/UI Design Patterns | 2024',
      category: 'UI/UX Design',
      image: '/images/blog-1.avif',
      readTime: '4 min',
      date: 'Oct 21, 2024',
      author: 'Razan Halaweh',
      authorRole: 'Senior UI/UX Designer',
      summary: 'Explore the best real-world UX/UI design patterns. Learn how human-centric design drives business success, higher conversion, and emotional connection.',
    },
    {
      id: 2,
      slug: 'collaborative-opportunities-enterprise',
      title: 'Exploring Opportunities for Strategic Tech Collaboration',
      category: 'Strategy',
      image: '/images/blog-2.avif',
      readTime: '6 min',
      date: 'Sep 15, 2024',
      author: 'FikraTech Team',
      authorRole: 'Tech Advisory',
      summary: 'In an interconnected economy, strategic tech partnerships drive sustainable innovation, operational resilience, and shared long-term growth.',
    },
    {
      id: 3,
      slug: 'fintech-remittance-compliance',
      title: 'Architecting High-Speed Financial Compliance Platforms',
      category: 'Fintech',
      image: '/images/blog-3.avif',
      readTime: '5 min',
      date: 'Aug 28, 2024',
      author: 'Systems Team',
      authorRole: 'Fintech Architecture',
      summary: 'How rule-based AML screening, real-time sanctions scanning, and automated reporting streamline cross-border remittance platforms.',
    },
    {
      id: 4,
      slug: 'mobile-app-performance-flutter',
      title: 'Achieving 60 FPS in Production Flutter Applications',
      category: 'Engineering',
      image: '/images/blog-4.avif',
      readTime: '7 min',
      date: 'Jul 19, 2024',
      author: 'Mobile Team',
      authorRole: 'Mobile Lead',
      summary: 'Key architectural principles for reducing jank, optimizing widget rebuilds, and delivering buttery-smooth user interactions on mobile.',
    },
    {
      id: 5,
      slug: 'business-automation-roi',
      title: 'Measuring Real ROI in Enterprise Workflow Automation',
      category: 'Strategy',
      image: '/images/blog-5.avif',
      readTime: '5 min',
      date: 'Jun 12, 2024',
      author: 'Automation Lab',
      authorRole: 'Solutions Architect',
      summary: 'Replacing manual data entry and repetitive workflows with automated systems saves thousands of human hours each quarter.',
    },
    {
      id: 6,
      slug: 'design-systems-scale',
      title: 'Building Maintainable Design Systems with Tailwind & Figma',
      category: 'UI/UX Design',
      image: '/images/blog-6.avif',
      readTime: '6 min',
      date: 'May 04, 2024',
      author: 'Design Guild',
      authorRole: 'UI Specialist',
      summary: 'A unified token library between Figma variables and Tailwind CSS creates zero-friction handoffs and pixel-perfect production code.',
    },
    {
      id: 7,
      slug: 'microservices-resilience',
      title: 'Building Resilient Microservices with Node.js and Redis',
      category: 'Engineering',
      image: '/images/blog-7.avif',
      readTime: '8 min',
      date: 'Apr 22, 2024',
      author: 'Backend Team',
      authorRole: 'Infrastructure',
      summary: 'Patterns for circuit breaking, exponential backoff, distributed caching, and zero-downtime rolling deployments.',
    },
    {
      id: 8,
      slug: 'ai-driven-interfaces',
      title: 'The Next Wave of AI-Augmented User Experiences',
      category: 'Engineering',
      image: '/images/blog-8.avif',
      readTime: '5 min',
      date: 'Mar 17, 2024',
      author: 'AI Innovation Unit',
      authorRole: 'ML Engineer',
      summary: 'How ambient computing, predictive input, and context-aware interfaces are transforming everyday software ergonomics.',
    },
    {
      id: 9,
      slug: 'security-in-financial-systems',
      title: 'Security-by-Design: Protecting Modern Financial Ledgers',
      category: 'Fintech',
      image: '/images/blog-9.avif',
      readTime: '6 min',
      date: 'Feb 10, 2024',
      author: 'Security Advisory',
      authorRole: 'InfoSec Engineer',
      summary: 'Implementing end-to-end encryption, multi-party computation, and zero-trust verification in high-value remittance networks.',
    },
    {
      id: 10,
      slug: 'future-of-cross-platform',
      title: 'Cross-Platform or Native? The Definitive 2024 Assessment',
      category: 'Engineering',
      image: '/images/blog-10.avif',
      readTime: '7 min',
      date: 'Jan 25, 2024',
      author: 'FikraTech Mobile',
      authorRole: 'Engineering Director',
      summary: 'When to choose Flutter, React Native, or Native Swift/Kotlin based on project timelines, budget, and performance criteria.',
    },
    {
      id: 11,
      slug: 'user-research-methodologies',
      title: 'User Research on a Budget: High-Impact Qualitative Testing',
      category: 'UI/UX Design',
      image: '/images/blog-11.avif',
      readTime: '5 min',
      date: 'Jan 08, 2024',
      author: 'Razan Halaweh',
      authorRole: 'Senior UI/UX Designer',
      summary: 'Tactical interview scripts, remote usability labs, and cognitive walkthroughs that uncover actionable product insights quickly.',
    },
    {
      id: 12,
      slug: 'agile-delivery-rituals',
      title: 'Agile Delivery in Practice: Inside FikraTech Sprint Rituals',
      category: 'Strategy',
      image: '/images/blog-12.avif',
      readTime: '4 min',
      date: 'Dec 18, 2023',
      author: 'Project Delivery',
      authorRole: 'Scrum Lead',
      summary: 'How transparent burndowns, integrated Figma-GitHub boards, and collaborative retrospectives ensure reliable on-time delivery.',
    },
  ];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="flex w-full flex-col items-center">
      {/* 1. Hero Section */}
      <section className="relative mx-auto mb-14 w-full max-w-7xl isolate overflow-hidden px-4 pt-6 text-center md:px-10 lg:px-8 lg:pt-10 xl:px-14 xl:pt-16 2xl:px-24">
        {/* Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 z-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] opacity-75 blur-[100px]" />

        <div className="bottomBorder mx-auto mb-4 flex w-fit items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
          <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
          <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
            FikraTech Insights
          </span>
        </div>

        <h1 className="relative z-10 mx-auto w-full text-3xl font-medium leading-tight md:text-5xl lg:text-5xl xl:text-6xl">
          <span className="bg-gradient-to-b from-foreground-from via-white to-foreground-to bg-clip-text text-transparent">
            Ideas That Shape the Future{' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Forward
            </span>
          </span>
        </h1>

        <p className="relative z-10 mx-auto mt-4 max-w-2xl text-xs font-light leading-relaxed text-[#818B95] md:text-lg lg:text-base">
          Discover valuable insights, expert tips, and industry trends. Our blog keeps you informed, inspired, and ready for what’s next.
        </p>

        {/* Categories Bar */}
        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-medium transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white shadow-md shadow-cyan-500/20'
                  : 'border border-white/10 bg-[#0A1825] text-white/70 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Blog Articles Grid */}
      <section className="3xl:container mx-auto my-8 w-full max-w-7xl px-4 md:px-10 lg:px-8 xl:px-14 2xl:px-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group block h-full focus:outline-none"
            >
              <SpecialCard className="flex h-full flex-col justify-between overflow-hidden p-5 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[#307FE2]/50 group-hover:shadow-[0_12px_35px_rgba(48,127,226,0.15)]">
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-2xl bg-[#030E18]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[0.65rem] font-medium text-[#05C3DE] backdrop-blur-md border border-white/10">
                      {article.category}
                    </div>
                  </div>

                  {/* Meta (Date & Reading Time) */}
                  <div className="flex items-center gap-4 text-[0.7rem] text-white/50 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {article.readTime} read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white transition-colors group-hover:text-[#05C3DE] leading-snug">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-2 text-xs font-light text-[#828282] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                {/* Author & Read More Arrow */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex size-6 items-center justify-center rounded-full bg-white/10 text-white/70">
                      <User className="size-3.5" />
                    </div>
                    <span className="text-[0.7rem] font-medium text-white/70">
                      {article.author}
                    </span>
                  </div>

                  <span className="flex items-center gap-1 text-[0.7rem] font-medium text-[#05C3DE] transition-transform duration-300 group-hover:translate-x-1">
                    Read article <ArrowRight className="size-3" />
                  </span>
                </div>
              </SpecialCard>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Ready to Start CTA */}
      <ReadyToStart />
    </div>
  );
}

export default Blog;
