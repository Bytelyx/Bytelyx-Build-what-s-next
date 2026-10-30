import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, 
  ExternalLink, Sparkles, Layers, ShieldCheck 
} from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import ProjectMockup from '../components/ProjectMockup';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import { projectsData } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();

  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-36 pb-24 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-extrabold text-[#08085B] mb-4">Project Not Found</h1>
            <p className="text-sm text-[#667085] mb-6">
              The project case study you requested could not be located in our selected work directory.
            </p>
            <Button to="/projects" variant="primary" icon={ArrowLeft} iconPosition="left">
              Return to Selected Work
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  return (
    <PageTransition>
      <div className="pt-28 pb-24 min-h-screen relative overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] hero-radial-glow pointer-events-none -z-10" />
        <div className="absolute inset-0 subtle-grid opacity-40 pointer-events-none -z-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E7E9F2] mb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#667085] hover:text-[#3027D9] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F6F7FC] text-[#3027D9] border border-[#E7E9F2]">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#08085B]/5 text-[#08085B]">
                <Sparkles className="w-3 h-3 text-[#3027D9]" />
                {project.badge}
              </span>
            </div>
          </div>

          {/* Editorial Header */}
          <div className="max-w-4xl mb-12">
            <span className="font-mono text-sm font-extrabold text-[#3027D9] tracking-wider uppercase mb-3 block">
              Case Study &bull; Project {project.number}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] leading-[1.1]">
              {project.title}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-[#3027D9] font-medium leading-relaxed">
              {project.tagline}
            </p>
            <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Large Project Mockup Stage */}
          <div className="w-full h-[360px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden shadow-[0_12px_40px_-15px_rgba(8,8,91,0.08)] border border-[#E7E9F2] mb-16 bg-white">
            <ProjectMockup projectId={project.id} />
          </div>

          {/* Architecture & Statistics Bar */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 sm:p-8 bg-[#F6F7FC] rounded-2xl border border-[#E7E9F2] mb-16 shadow-2xs">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left sm:px-4 sm:border-r sm:last:border-none border-[#E7E9F2]">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">{stat.label}</span>
                  <span className="text-lg sm:text-xl font-extrabold text-[#08085B]">{stat.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Deep Dive: Overview & Problem Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16">
            <div className="lg:col-span-6 space-y-4 bg-white p-8 rounded-2xl border border-[#E7E9F2] shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#08085B]">
                <Layers className="w-4 h-4 text-[#3027D9]" />
                <span>Architecture &amp; Overview</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#111827]">
                Engineering Strategy
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                {project.fullOverview}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4 bg-white p-8 rounded-2xl border border-[#E7E9F2] shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#08085B]">
                <ShieldCheck className="w-4 h-4 text-[#3027D9]" />
                <span>Problem &amp; Objective</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#111827]">
                Purpose-Driven Problem Solving
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                {project.problemObjective}
              </p>
            </div>
          </div>

          {/* Core Architectural Features */}
          <div className="mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3027D9] block mb-2">
                Implementation Details
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                Core Features &amp; User Workflows
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[#E7E9F2] bg-white hover:border-[#3027D9]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F6F7FC] border border-[#E7E9F2] flex items-center justify-center text-[#3027D9] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#111827]">{feat.title}</h3>
                      <p className="text-xs sm:text-sm text-[#667085] mt-1.5 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Capabilities Breakdown */}
          <div className="p-8 sm:p-10 rounded-2xl border border-[#E7E9F2] bg-white mb-16 shadow-2xs">
            <h2 className="text-xl font-bold text-[#111827] mb-2">
              Technology Stack Leveraged
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mb-6">
              Production frameworks and modular libraries integrated within this project architecture:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#F6F7FC] text-[#08085B] border border-[#E7E9F2]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E7E9F2] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#667085]">
                <span className="font-semibold text-[#111827]">Deployment Status:</span> {project.demoStatus}
              </div>

              <div className="flex items-center gap-3">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#3027D9] hover:bg-[#08085B] transition-colors"
                  >
                    <span>Launch Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="px-3.5 py-2 rounded-xl text-xs font-medium text-[#667085] bg-[#F6F7FC] border border-[#E7E9F2]">
                    Demo coming soon
                  </span>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#08085B] bg-white border border-[#E7E9F2] hover:border-[#3027D9] hover:bg-[#F6F7FC] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#3027D9]" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Pagination to Next & Prev Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#E7E9F2] mb-16">
            <Link
              to={`/projects/${prevProject.id}`}
              className="p-5 rounded-xl border border-[#E7E9F2] bg-white hover:bg-[#F6F7FC] hover:border-[#3027D9]/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-4 h-4 text-[#667085] group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="text-[11px] text-[#667085] block">Previous Project</span>
                  <span className="text-sm font-bold text-[#111827] group-hover:text-[#3027D9] transition-colors">
                    {prevProject.title}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#667085]">{prevProject.number}</span>
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              className="p-5 rounded-xl border border-[#E7E9F2] bg-white hover:bg-[#F6F7FC] hover:border-[#3027D9]/30 transition-all flex items-center justify-between group text-right"
            >
              <span className="font-mono text-xs text-[#667085]">{nextProject.number}</span>
              <div className="flex items-center gap-3">
                <div>
                  <span className="text-[11px] text-[#667085] block">Next Project</span>
                  <span className="text-sm font-bold text-[#111827] group-hover:text-[#3027D9] transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#667085] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Final Callout to Contact */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#08085B] via-[#080866] to-[#3027D9] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-center sm:text-left space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">Need a Similar Digital Solution?</h3>
              <p className="text-sm text-blue-100/80 max-w-lg">
                Let's discuss how we can tailor a modern web application or business platform to your operational goals.
              </p>
            </div>
            <Button
              to="/contact"
              size="lg"
              className="bg-white text-[#08085B] hover:bg-blue-50 shadow-md shrink-0"
              icon={ArrowRight}
            >
              Start Your Project
            </Button>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
