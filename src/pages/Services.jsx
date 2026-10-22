import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ReadyToStart } from '../components/ReadyToStart';
import {Cpu, Sparkles, Layers, Code2,} from 'lucide-react';
import businessAutomationImage from '../assets/Business.png';
import uiUxDesignImage from '../assets/ui.png';
import softwareDevelopment from '../assets/softwaredevelopment.png';
import mobileApp from '../assets/mobileapp.png';

const serviceCardClass ='group relative isolate grid min-h-[320px] grid-cols-1 items-center gap-5 overflow-hidden rounded-[28px] border border-[#1B4770]/70 bg-gradient-to-br from-[#0A1D33] via-[#041326] to-[#020A15] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition-all duration-500 ease-out before:pointer-events-none before:absolute before:-right-16 before:-top-20 before:z-0 before:size-64 before:rounded-full before:bg-cyan-400/[0.07] before:blur-3xl before:transition-all before:duration-700 hover:-translate-y-2 hover:border-cyan-300/70 hover:shadow-[0_22px_60px_rgba(0,195,255,0.16)] hover:before:bg-cyan-300/[0.14] md:grid-cols-2 md:gap-6 lg:min-h-[350px] lg:p-7';
const iconBaseClass ='flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_26px_rgba(0,195,255,0.24)]';
const imageBaseClass ='relative h-auto max-h-[180px] w-full max-w-[220px] object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.25)] transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2';

export function Services() {
  const heroHeadingRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const codeLinesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      if (heroHeadingRef.current) {
        heroTl.fromTo(
          heroHeadingRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            delay: 0.1,
          }
        );
      }

      if (heroSubtitleRef.current) {
        heroTl.fromTo(
          heroSubtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Reveal code editor lines on scroll.
  useEffect(() => {
    const container = codeLinesRef.current;
    if (!container) return;

    const lines = container.querySelectorAll('.code-editor-line');
    if (!lines.length) return;

    gsap.set(lines, { autoAlpha: 0, y: 8 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(lines, {
          autoAlpha: 1,
          y: 0,
          duration: 0.32,
          stagger: 0.16,
          ease: 'power2.out',
          clearProps: 'transform,visibility,opacity',
        });

        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      {/* SERVICES HERO SECTION */}
      <section className="relative isolate mx-auto mb-16 w-full max-w-7xl overflow-hidden px-4 pt-4 text-center md:px-10 lg:px-8 lg:pt-6 xl:px-14 xl:pt-10 2xl:px-24 2.5xl:px-32 3xl:container 3xl:px-48" aria-label="Hero">
        <div className="pointer-events-none absolute -top-20 left-1/2 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] opacity-75 blur-[100px] md:w-[900px]" />
        <h1 ref={heroHeadingRef} className="relative z-10 mx-auto w-full text-3xl font-medium leading-tight md:text-5xl lg:mb-2 lg:w-4/5 lg:text-5xl 2xl:text-7xl 3xl:mb-16 2.5xl:mb-12">
          <span className="block bg-gradient-to-b from-foreground-from via-white to-foreground-to bg-clip-text py-2 text-transparent">
            Bringing Your Vision to Life with{' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Unmatched Expertise.
            </span>
          </span>
        </h1>

        <div className="group relative isolate space-y-6 py-4 pb-10 md:pb-14 lg:space-y-12 lg:py-8 lg:pb-16 3xl:space-y-16">
          <p ref={heroSubtitleRef} className="relative z-10 mx-auto mb-8 max-w-2xl text-xs font-light leading-6 text-white/90 md:text-xl lg:mb-8 lg:text-base 3xl:mb-16">
            We build exceptional digital products that bring ideas to life.
          </p>
          <div className="pointer-events-none absolute -bottom-36 left-1/2 z-0 size-40 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#81a1f9_0%,_#6ac8ff_44%,_#6ee2fc_54%,_#245bf1_100%)] opacity-70 blur-2xl transition-transform duration-1000 group-hover:scale-125 lg:-bottom-40 lg:size-48 lg:blur-3xl xl:-bottom-80 xl:size-80 xl:blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-64 w-3/4 -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(48,127,226,0.45)_0%,_rgba(5,195,222,0.25)_35%,_transparent_75%)] opacity-90 blur-[60px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#6DA5FF] to-transparent shadow-[0_-2px_10px_rgba(80,150,255,0.4)]" />
        </div>
      </section>


      {/* CODE EDITOR SECTION */}
      <section aria-label="Fikratech Code Editor" className="relative mb-16 w-full"
        style={{
          width: 'calc(100% - 32px)',
          maxWidth: '1435px',
          marginInline: 'auto',
        }}>
        <div style={{ position: 'relative', isolation: 'isolate', height: '405px', overflow: 'hidden', borderRadius: '22px 22px 0 0', borderTop: '1px solid rgba(255,255,255,0.07)', borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)', borderBottom: 'none', background: '#050C15',}}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#050C15', zIndex: 0, }}>
            <div style={{ position: 'absolute', width: '1200px', height: '310px', left: '-120px', bottom: '-75px', transform: 'rotate(-35deg)', background: 'linear-gradient(90deg, transparent 2%, rgba(21,49,72,.65) 24%, rgba(50,111,161,.8) 48%, rgba(8,23,37,.9) 68%, transparent 88%)', filter: 'blur(18px)', }}/>
            <div style={{ position: 'absolute', width: '1000px', height: '3px', left: '-140px', bottom: '88px', transform: 'rotate(-35deg)', background:'linear-gradient(90deg, transparent, rgba(111,197,255,.9), rgba(154,221,255,.65), transparent)', boxShadow: '0 0 16px rgba(74,168,235,.65)',}}/>
            <div style={{position: 'absolute', width: '1050px', height: '330px', right: '-250px', top: '-105px', transform: 'rotate(-35deg)', background:'linear-gradient(90deg, transparent, rgba(8,28,43,.8) 30%, rgba(18,48,67,.7) 55%, transparent 90%)', filter: 'blur(12px)',}}/>
            <div style={{position: 'absolute', width: '950px', height: '3px', right: '-240px', top: '185px', transform: 'rotate(-35deg)', background: 'linear-gradient(90deg, transparent, rgba(41,104,143,.8), rgba(76,160,207,.65), transparent)',}}/>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,12,21,.06) 0%, rgba(5,12,21,.04) 55%, #050C15 100%)',}}/>
          </div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100%', overflow: 'hidden', }}>
            <div style={{ position: 'relative',flex: '1 1 auto',width: 'calc(100% - 20px)',maxWidth: 'calc(100% - 20px)', marginTop: '10px', overflow: 'hidden', borderRadius: '15px 15px 0 0', border: '1px solid rgba(255,255,255,.07)', borderBottom: 'none', background: 'rgba(0,0,0,.97)', boxShadow: '0 16px 55px rgba(0,0,0,.32)',}}>
              <div style={{ display: 'flex', alignItems: 'center',gap: '6px', height: '62px', padding: '0 20px', borderBottom: '1px solid rgba(255,255,255,.09)',}}>
                <span style={{ width: 19, height: 19, borderRadius: '50%', background: '#D92F23' }} />
                <span style={{ width: 19, height: 19, borderRadius: '50%', background: '#E9A037' }} />
                <span style={{ width: 19, height: 19, borderRadius: '50%', background: '#65CC45' }} />
              </div>

              <div style={{ padding: '19px 19px 28px' }}>
                <div
                  ref={codeLinesRef}
                  style={{width: '82%', maxWidth: '680px', marginInline: 'auto', overflow: 'hidden',borderRadius: '8px',border: '1px solid rgba(255,255,255,.07)', background: 'rgba(13,16,22,.94)', padding: '8px 12px 12px',fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',fontSize: '13px', lineHeight: '1.68', color: '#E5E7EB',}}>
                  {[
                    <><span style={{ color: '#7B8491' }}>// Welcome to Fikratech</span></>,
                    <><span style={{ color: '#EC4899' }}>const</span> idea = <span style={{ color: '#7DD3FC' }}>&quot;Your bold idea&quot;</span>;</>,
                    <><span style={{ color: '#EC4899' }}>const</span> team = <span style={{ color: '#818CF8' }}>buildTeam</span>([<span style={{ color: '#7DD3FC' }}>&quot;Design&quot;</span>, <span style={{ color: '#7DD3FC' }}>&quot;Development&quot;</span>, <span style={{ color: '#7DD3FC' }}>&quot;AI&quot;</span>, <span style={{ color: '#7DD3FC' }}>&quot;Cloud&quot;</span>]);</>,
                    <><span style={{ color: '#EC4899' }}>const</span> product = <span style={{ color: '#818CF8' }}>launchProduct</span>({'{'}</>,
                    <>  idea,</>,
                    <><span style={{ color: '#D9A441' }}>  strategy</span>: <span style={{ color: '#818CF8' }}>defineStrategy</span>(idea),</>,
                    <><span style={{ color: '#D9A441' }}>  design</span>: <span style={{ color: '#818CF8' }}>craftUI</span>(idea),</>,
                    <><span style={{ color: '#D9A441' }}>  code</span>: <span style={{ color: '#818CF8' }}>writeCleanCode</span>(),</>,
                    <><span style={{ color: '#D9A441' }}>  deploy</span>: <span style={{ color: '#818CF8' }}>toCloud</span>(<span style={{ color: '#7DD3FC' }}>&quot;AWS&quot;</span>)</>,
                    <>{'});'}</>,
                    <><span style={{ color: '#6D7785' }}>if (product.success) {'{'}</span></>,
                    <><span style={{ color: '#6D7785' }}>  console.log(</span><span style={{ color: '#244C63' }}>&quot;🚀 Your product is live – powered by Fikratech.&quot;</span><span style={{ color: '#6D7785' }}>);</span></>,
                    <><span style={{ color: '#293746' }}>{'}'}</span></>,
                  ].map((line, index) => (
                    <div
                      key={index}
                      className="code-editor-line"
                      style={{ display: 'grid',gridTemplateColumns: '26px max-content', columnGap: '8px', whiteSpace: 'pre', minHeight: '21px', }}>
                      <span style={{ color: '#A3AAB5', textAlign: 'right', userSelect: 'none' }}>
                        {index + 1}
                      </span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: 'absolute',pointerEvents: 'none', inset: 'auto 0 0',height: '105px',background: 'linear-gradient(0deg, #000 0%, rgba(0,0,0,.84) 25%, rgba(0,0,0,.42) 57%, transparent 100%)', }}/>
            </div>
          </div>

          <div style={{ position: 'absolute', zIndex: 3, pointerEvents: 'none', inset: 'auto 0 0', height: '115px', background: 'linear-gradient(0deg, #050C15 0%, rgba(5,12,21,.84) 25%, rgba(5,12,21,.3) 65%, transparent 100%)', }} />
        </div>
      </section>


      {/* OUR SERVICES */}
      <section aria-labelledby="our-services-heading" className="relative mx-auto mb-16 mt-2 w-full max-w-[1435px] px-4 py-8 sm:px-6 md:px-10 lg:px-12" style={{ width: 'calc(100% - 32px)' }}>
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/60 bg-cyan-500/5 px-5 py-2 text-sm font-semibold text-cyan-300">
            <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00d9ff]" />
            Our Services
          </div>

          <h2 id="our-services-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our{' '}
            <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-lg">
            Practical digital solutions designed to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* 1. Business Automation */}
          <article className={serviceCardClass}>
            <div className="relative z-10 flex min-w-0 flex-col justify-center">
              <div className="mb-4 flex flex-col items-start gap-3 xl:flex-row xl:items-center">
                <span className={`${iconBaseClass} border border-blue-400/60 bg-gradient-to-br from-blue-500/30 to-indigo-800/60 text-blue-300`}>
                  <Cpu size={25} />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 xl:text-xl">
                  Business Automation
                </h3>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                Fikratech empowers businesses by automating manual, time-consuming workflows through custom software, integrations, and AI-driven systems. Whether you're streamlining internal operations, digitizing processes, or connecting your existing tools—we help you save time, cut costs, and scale smarter.
              </p>
            </div>
            <div className="relative z-10 flex min-h-[210px] min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[radial-gradient(ellipse_at_center,rgba(20,115,180,0.18),rgba(3,15,29,0.2)_68%)] p-3 md:min-h-[240px]">
              <div className="absolute inset-4 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:bg-cyan-400/20" />
              <img
                src={businessAutomationImage}
                alt="Business Automation"
                loading="lazy"
                className="relative block h-[160px] w-full max-w-[240px] object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.25)] transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2"
              />
            </div>
          </article>

          {/* 2. UI/UX Design */}
          <article className={serviceCardClass}>
            <div className="relative z-10 flex min-w-0 flex-col justify-center">
              <div className="mb-4 flex flex-col items-start gap-3 xl:flex-row xl:items-center">
                <span className={`${iconBaseClass} border border-cyan-400/60 bg-gradient-to-br from-cyan-400/20 to-blue-700/50 text-cyan-300`}>
                  <Sparkles size={25} />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 xl:text-xl">
                  UI/UX Design
                </h3>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                We craft seamless, visually stunning, and user-friendly interfaces tailored for both web and mobile platforms. Our philosophy harmonizes innovation with practicality, ensuring that every digital product we create is not only aesthetically pleasing but also incredibly easy to navigate and interact with.
              </p>
            </div>
            <div className="relative z-10 flex min-h-[210px] min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[radial-gradient(ellipse_at_center,rgba(20,115,180,0.18),rgba(3,15,29,0.2)_68%)] p-3 md:min-h-[240px]">
              <div className="absolute inset-2 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-500/20" />
              <img
                src={uiUxDesignImage}
                alt="UI/UX Design"
                loading="lazy"
                className={`${imageBaseClass} group-hover:rotate-1`}
              />
            </div>
          </article>

          {/* 3. Mobile App Development */}
          <article className={serviceCardClass}>
            <div className="relative z-10 flex min-w-0 flex-col justify-center">
              <div className="mb-4 flex flex-col items-start gap-3 xl:flex-row xl:items-center">
                <span className={`${iconBaseClass} border border-violet-400/60 bg-gradient-to-br from-violet-500/30 to-indigo-700/60 text-violet-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]`}>
                  <Layers size={25} />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 xl:text-xl">
                  Mobile App Development
                </h3>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                Fikratech specializes in crafting scalable and high-performance mobile applications for both iOS and Android platforms. We take your ideas from initial concept to successful launch, ensuring each app is technically robust, visually stunning, and optimized for performance and user experience.
              </p>
            </div>
            <div className="relative z-10 flex min-h-[210px] min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[radial-gradient(ellipse_at_center,rgba(20,115,180,0.18),rgba(3,15,29,0.2)_68%)] p-3 md:min-h-[240px]">
              <div className="absolute inset-2 rounded-full bg-violet-500/10 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-500/20" />
              <img
                src={mobileApp}
                alt="Mobile App Development"
                loading="lazy"
                className={`${imageBaseClass} group-hover:rotate-1`}
              />
            </div>
          </article>

          {/* 4. Software Development */}
          <article className={serviceCardClass}>
            <div className="relative z-10 flex min-w-0 flex-col justify-center">
              <div className="mb-4 flex flex-col items-start gap-3 xl:flex-row xl:items-center">
                <span className={`${iconBaseClass} border border-cyan-400/60 bg-gradient-to-br from-cyan-400/20 to-blue-700/50 text-cyan-300`}>
                  <Code2 size={25} />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 xl:text-xl">
                  Software Development
                </h3>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                At Fikratech, we create everything from intuitive internal dashboards to comprehensive platforms that are reliable, secure, and scalable. Our team uses modern technology stacks, clean coding practices, and agile development methodologies to deliver software solutions tailored to your business needs.
              </p>
            </div>
            <div className="relative z-10 flex min-h-[210px] min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[radial-gradient(ellipse_at_center,rgba(20,115,180,0.18),rgba(3,15,29,0.2)_68%)] p-3 md:min-h-[240px]">
              <div className="absolute inset-2 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-500/20" />
              <img
                src={softwareDevelopment}
                alt="Software Development"
                loading="lazy"
                className={`${imageBaseClass} group-hover:-rotate-1`}
              />
            </div>
          </article>
        </div>
      </section>


      {/* FREQUENTLY ASKED QUESTIONS */}
      <section aria-labelledby="faq-heading" className="relative mx-auto mb-20 mt-4 w-full max-w-[1100px] overflow-hidden px-4 py-12 sm:px-6 md:px-10 lg:py-16">
        <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-[80%] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-20 -z-10 size-48 rounded-full bg-blue-600/[0.08] blur-[90px]" />
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-gradient-to-r from-cyan-400/[0.10] to-blue-500/[0.08] px-5 py-2 shadow-[0_0_25px_rgba(0,195,222,0.06)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan-300" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Got Questions?
            </span>
          </div>
          <h2 id="faq-heading" className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Frequently Asked
            <span className="mt-1 block bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            Everything you need to know about our services, process, and how we can bring your ideas to life.
          </p>
          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/60" />
            <span className="size-1.5 rotate-45 border border-cyan-300 bg-cyan-400/30" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/60" />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-[900px] space-y-4">
          {[
            {
              question: "What services does Fikratech offer?",
              answer:
                "Fikratech offers business automation, UI/UX design, mobile app development, and custom software development to help businesses build efficient digital solutions.",
            },
            {
              question: "How can business automation help my company?",
              answer:
                "Business automation can reduce repetitive manual work, minimize errors, improve productivity, and streamline workflows using custom software, integrations, and AI-driven systems.",
            },
            {
              question: "Can you automate our existing business processes?",
              answer:
                "Yes. We can understand your current workflows and explore suitable automation solutions and integrations based on your business requirements and existing tools.",
            },
            {
              question: "Do you design websites and mobile app interfaces?",
              answer:
                "Yes. Our UI/UX design service focuses on intuitive layouts, user-friendly navigation, consistent visual design, and smooth experiences across web and mobile platforms.",
            },
            {
              question: "Will my website or app work on different devices?",
              answer:
                "We consider responsive layouts and different screen sizes during design and development, helping your digital product deliver a consistent experience across supported devices.",
            },
            {
              question: "Do you develop apps for both Android and iOS?",
              answer:
                "We provide mobile app development for Android and iOS. The recommended approach and supported features depend on your project requirements and technical needs.",
            },
            {
              question: "Can you develop a custom mobile app for my business idea?",
              answer:
                "Yes. We can discuss your idea, target users, required features, and business goals to plan a mobile application suited to your needs.",
            },
            {
              question: "What types of custom software can you build?",
              answer:
                "We can develop tailored digital solutions such as business dashboards, internal tools, workflow platforms, and other web-based software based on your requirements.",
            },
            {
              question: "Can you integrate new software with our existing tools?",
              answer:
                "Integration possibilities depend on the tools, APIs, and systems involved. We assess your existing setup to identify practical ways to connect systems and improve workflows.",
            },
            {
              question: "Will the software be scalable as my business grows?",
              answer:
                "We consider maintainability, architecture, performance, and future requirements during development so the solution can be designed to support your expected growth.",
            },
            {
              question: "How much does a project with Fikratech cost?",
              answer:
                "Pricing depends on the project scope, complexity, features, integrations, and timeline. Share your requirements with us so we can discuss a suitable solution and estimate.",
            },
            {
              question: "How do I start a project with Fikratech?",
              answer:
                "Contact our team and explain your idea, business goals, and required features. We can discuss your needs, explore possible solutions, and determine the next steps together.",
            },
          ].map((faq, index) => (
            <details key={faq.question} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0B1D31]/95 via-[#071729]/95 to-[#04101E]/95 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-cyan-400/35 hover:shadow-[0_12px_35px_rgba(0,195,222,0.07)] open:border-cyan-400/35 open:shadow-[0_12px_40px_rgba(0,195,222,0.08)]">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent opacity-0 transition-opacity duration-500 group-open:opacity-100" />
              <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.13] to-blue-500/[0.08] text-xs font-bold tracking-wider text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:shadow-[0_0_18px_rgba(0,195,222,0.12)] group-open:border-cyan-300/40 group-open:bg-cyan-400/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-sm font-medium leading-6 text-slate-200 transition-colors duration-300 group-hover:text-white group-open:text-cyan-200 sm:text-base">
                  {faq.question}
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.03] text-slate-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300 group-open:rotate-180 group-open:border-cyan-400/30 group-open:bg-cyan-400/10 group-open:text-cyan-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="mx-4 mb-5 ml-[68px] border-l-2 border-cyan-400/25 pl-4 pr-2 sm:mx-6 sm:ml-[76px] sm:pl-5">
                    <p className="pb-1 text-sm leading-7 text-slate-400 sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
        <div className="mt-9 text-center">
          <p className="text-sm text-slate-500">
            Still have questions?
            <span className="ml-1 font-medium text-cyan-300">
              Let's talk about your project.
            </span>
          </p>
        </div>
      </section>


      {/* READY TO START */}
      <ReadyToStart />
    </div>
  );
}

export default Services;