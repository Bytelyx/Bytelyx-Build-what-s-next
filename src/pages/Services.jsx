import React, { useState } from 'react';
import { SpecialCard } from '../components/SpecialCard';
import { Accordion } from '../components/Accordion';
import { OurPartners } from '../components/OurPartners';
import { ReadyToStart } from '../components/ReadyToStart';
import { Cpu, Sparkles, Layers, Code2, CheckCircle2 } from 'lucide-react';

export function Services() {
  const [activeCodeTab, setActiveCodeTab] = useState('automation');

  const businessFaqs = [
    {
      question: 'What types of processes can you automate?',
      answer: 'We automate sales, HR, finance, inventory, customer support, and many more business workflows tailored to your needs.',
    },
    {
      question: 'Do you integrate with existing tools like ERP or CRM systems?',
      answer: 'Yes, we can integrate with tools like Salesforce, HubSpot, SAP, Odoo, and custom systems.',
    },
    {
      question: 'Is business automation suitable for small businesses?',
      answer: 'Absolutely. Even small teams benefit from automation to save time and reduce errors.',
    },
    {
      question: 'Will automation require staff retraining?',
      answer: 'We design intuitive systems and provide training if needed, ensuring a smooth transition.',
    },
  ];

  const uiFaqs = [
    {
      question: 'What tools do you use for UI/UX design?',
      answer: 'We primarily use Figma, Adobe XD, and tools for prototyping and usability testing.',
    },
    {
      question: 'Do you conduct user research?',
      answer: 'Yes, user research and persona development are integral to our UX process.',
    },
    {
      question: "Can you redesign my current product's interface?",
      answer: 'Definitely. We can conduct a UX audit and redesign based on your goals and user pain points.',
    },
    {
      question: 'Will I get interactive prototypes?',
      answer: 'Yes, we deliver clickable prototypes to help you visualize interactions before development.',
    },
  ];

  const mobileFaqs = [
    {
      question: 'Do you build native or cross-platform apps?',
      answer: 'We build both, depending on your project needs—using Swift/Kotlin or frameworks like Flutter and React Native.',
    },
    {
      question: 'Can you help with app store publishing?',
      answer: 'Yes, we handle the publishing process on the App Store and Google Play.',
    },
    {
      question: 'Will my app work offline?',
      answer: 'Offline functionality can be included depending on your requirements.',
    },
    {
      question: 'Can I update content on my app without code?',
      answer: 'Yes, we can build a content management panel that allows non-technical teams to make changes.',
    },
  ];

  const softwareFaqs = [
    {
      question: 'What technologies do you use?',
      answer: 'We use Node.js, NestJS, Laravel, Python, React, Next.js, PostgreSQL, MongoDB, and more—based on your project needs.',
    },
    {
      question: 'Can you maintain or update existing software?',
      answer: 'Yes, we can audit, refactor, or take over maintenance of your existing systems.',
    },
    {
      question: 'Do you offer post-launch support?',
      answer: 'Absolutely. We offer long-term maintenance, monitoring, and optimization packages.',
    },
    {
      question: 'How do you ensure security?',
      answer: 'We follow best practices like code audits, encryption, authentication layers, and secure hosting environments.',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 pt-8 pb-16 md:py-20 text-center flex flex-col items-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] blur-[100px]" />

        <div className="bottomBorder mx-auto mb-4 flex w-fit items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
          <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
          <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
            Our Expertise
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          <span className="bg-clip-text text-transparent from-white via-white to-white/70 bg-gradient-to-b">
            Digital Services for the Next Era of{' '}
          </span>
          <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
            Business
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-foreground/75 font-light max-w-3xl mx-auto leading-relaxed mb-12">
          Fikratech empowers businesses in the digital economy through automation, UX, app development, and smart software. We focus on secure, scalable, and well-designed solutions.
        </p>

        {/* Hero Code Snippet Visual */}
        <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0A141E]/90 backdrop-blur-xl shadow-2xl p-4 md:p-6 text-left font-mono text-xs md:text-sm text-foreground/80 overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500/80" />
              <span className="size-3 rounded-full bg-yellow-500/80" />
              <span className="size-3 rounded-full bg-green-500/80" />
              <span className="ms-2 text-xs text-foreground/50">fikratech-core-service.js</span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveCodeTab('automation')}
                className={`px-3 py-1 rounded-md text-xs transition cursor-pointer ${
                  activeCodeTab === 'automation' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'
                }`}
              >
                Automation
              </button>
              <button
                type="button"
                onClick={() => setActiveCodeTab('api')}
                className={`px-3 py-1 rounded-md text-xs transition cursor-pointer ${
                  activeCodeTab === 'api' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'
                }`}
              >
                Cloud API
              </button>
              <button
                type="button"
                onClick={() => setActiveCodeTab('cloud')}
                className={`px-3 py-1 rounded-md text-xs transition cursor-pointer ${
                  activeCodeTab === 'cloud' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'
                }`}
              >
                Architecture
              </button>
            </div>
          </div>

          <pre className="text-foreground/90 overflow-x-auto leading-relaxed">
            <code>
              {activeCodeTab === 'automation' && `// Automated Workflow Pipeline Config
import { FikraAutomationEngine, StreamRouter } from '@fikratech/automation';

export const enterprisePipeline = new FikraAutomationEngine({
  triggers: ['onTransactionInitiated', 'onKYCVerification'],
  latencyBudget: '150ms',
  failoverPolicy: 'ZeroDataLoss',
  integrations: ['SAP-ERP', 'Salesforce-CRM', 'Regulatory-Gateway']
});

enterprisePipeline.dispatch({
  status: 'ACTIVE',
  mode: 'AI_RECONCILIATION_ENABLED',
  encryption: 'AES_256_GCM'
});`}
              {activeCodeTab === 'api' && `// High-Performance Microservice Gateway
import Fastify from 'fastify';
import { MetricsCollector } from '@fikratech/telemetry';

export async function routes(app) {
  app.register(MetricsCollector, { sampleRate: 1.0 });

  app.post('/api/v2/settlement', async (request, reply) => {
    const { batchId, payload } = request.body;
    const result = await app.ledger.processInstantSettlement(batchId, payload);
    return reply.status(200).send({ success: true, timestamp: Date.now() });
  });
}`}
              {activeCodeTab === 'cloud' && `// Multi-Region Resilient Infrastructure
export const cloudClusterSpec = {
  region: 'me-central-1', // UAE & Jordan Endpoints
  nodes: 12,
  autoScaling: { min: 4, max: 64, cpuThreshold: 0.75 },
  disasterRecovery: { replication: 'SYNC', rpo: '0s', rto: '<15s' },
  security: ['SOC2_COMPLIANT', 'PCI_DSS_LEVEL_1', 'ISO_27001']
};`}
            </code>
          </pre>
        </div>
      </section>

      {/* 2. CORE SERVICES SECTIONS */}
      <div className="w-full max-w-7xl mx-auto px-4 space-y-24 my-10">
        {/* Service 1: Business Automation */}
        <div id="business-automation" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SpecialCard className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="size-11 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <Cpu className="size-6" />
              </span>
              <h2 className="text-3xl font-bold text-white">
                Business Automation
              </h2>
            </div>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-light mb-8">
              Fikratech empowers businesses by automating manual, time-consuming workflows through custom software, integrations, and AI-driven systems. Whether you're streamlining internal operations, digitizing processes, or connecting your existing tools—we help you save time, cut costs, and scale smarter.
            </p>

            {/* Visual SVGs */}
            <div className="p-6 rounded-2xl bg-[#15212C]/60 border border-white/10 flex flex-wrap items-center justify-around gap-4">
              <img src="/images/services/cross.svg" alt="Cross" className="size-8" />
              <img src="/images/services/pie-1.svg" alt="Pie 1" className="size-10" />
              <img src="/images/services/pie-2.svg" alt="Pie 2" className="size-10" />
              <img src="/images/services/pie-3.svg" alt="Pie 3" className="size-10" />
              <img src="/images/services/hand-pointer.svg" alt="Pointer" className="size-10" />
              <img src="/images/services/arrow-down.svg" alt="Arrow" className="size-8" />
            </div>
          </SpecialCard>

          {/* FAQs for Business Automation */}
          <div className="pt-2">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-primary" />
              <span>Automation FAQs</span>
            </h3>
            <Accordion items={businessFaqs} />
          </div>
        </div>

        {/* Service 2: UI/UX Design */}
        <div id="ui-design" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SpecialCard className="p-8 md:p-10 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="size-11 rounded-2xl bg-[#05C3DE]/15 border border-[#05C3DE]/30 flex items-center justify-center text-[#05C3DE]">
                <Sparkles className="size-6" />
              </span>
              <h2 className="text-3xl font-bold text-white">
                UI/UX Design
              </h2>
            </div>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-light mb-8">
              We craft seamless, visually stunning, and user-friendly interfaces tailored for both web and mobile platforms. Our philosophy harmonizes innovation with practicality, ensuring that every digital product we create is not only aesthetically pleasing but also incredibly easy to navigate and interact with.
            </p>

            {/* Visual SVGs */}
            <div className="p-6 rounded-2xl bg-[#15212C]/60 border border-white/10 flex flex-wrap items-center justify-around gap-4">
              <img src="/images/services/chart.svg" alt="Chart" className="h-12 w-auto" />
              <img src="/images/services/arrow-1.svg" alt="Arrow 1" className="size-8" />
              <img src="/images/services/radial-progress.svg" alt="Progress" className="size-12" />
            </div>
          </SpecialCard>

          {/* FAQs for UI/UX */}
          <div className="pt-2 lg:order-1">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-primary" />
              <span>UI/UX FAQs</span>
            </h3>
            <Accordion items={uiFaqs} />
          </div>
        </div>

        {/* Service 3: Mobile App Development */}
        <div id="mobile-development" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SpecialCard className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="size-11 rounded-2xl bg-[#7784F8]/15 border border-[#7784F8]/30 flex items-center justify-center text-[#7784F8]">
                <Layers className="size-6" />
              </span>
              <h2 className="text-3xl font-bold text-white">
                Mobile App Development
              </h2>
            </div>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-light mb-8">
              Fikratech specializes in crafting scalable and high-performance mobile applications for both iOS and Android platforms. We take your ideas from initial concept to successful launch, ensuring that each app we develop is not only technically robust but also visually stunning and finely tuned for optimal performance and UX.
            </p>

            {/* Visual SVGs */}
            <div className="p-6 rounded-2xl bg-[#15212C]/60 border border-white/10 flex flex-wrap items-center justify-around gap-4">
              <img src="/images/services/play.svg" alt="Play" className="size-10" />
              <img src="/images/services/arrow-2.svg" alt="Arrow 2" className="size-8" />
              <img src="/images/services/chart-2.svg" alt="Chart 2" className="h-12 w-auto" />
            </div>
          </SpecialCard>

          {/* FAQs for Mobile */}
          <div className="pt-2">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-primary" />
              <span>Mobile FAQs</span>
            </h3>
            <Accordion items={mobileFaqs} />
          </div>
        </div>

        {/* Service 4: Software Development */}
        <div id="software-development" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SpecialCard className="p-8 md:p-10 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="size-11 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <Code2 className="size-6" />
              </span>
              <h2 className="text-3xl font-bold text-white">
                Software Development
              </h2>
            </div>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-light mb-8">
              At Fikratech, we specialize in creating everything from intuitive internal dashboards to comprehensive platforms that are not only reliable and secure but also scalable to meet your business needs. Our team utilizes cutting-edge technology stacks and adheres to clean coding practices and agile development methodologies to ensure top-notch software solutions.
            </p>

            {/* Visual SVGs */}
            <div className="p-6 rounded-2xl bg-[#15212C]/60 border border-white/10 flex flex-wrap items-center justify-around gap-4">
              <img src="/images/services/radial-progress-2.svg" alt="Radial Progress" className="size-12" />
              <img src="/images/services/landscape.svg" alt="Landscape" className="h-10 w-auto" />
              <img src="/images/services/arrow-3.svg" alt="Arrow 3" className="size-8" />
            </div>
          </SpecialCard>

          {/* FAQs for Software */}
          <div className="pt-2 lg:order-1">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-primary" />
              <span>Software FAQs</span>
            </h3>
            <Accordion items={softwareFaqs} />
          </div>
        </div>
      </div>

      {/* 3. PARTNERS TESTIMONIALS */}
      <div className="w-full mt-16">
        <OurPartners />
      </div>

      {/* 4. READY TO START */}
      <ReadyToStart />
    </div>
  );
}

export default Services;
