import React, { useState } from 'react';
import { SpecialCard } from '../components/SpecialCard';
import { Accordion } from '../components/Accordion';
import { TrustedBy } from '../components/TrustedBy';
import { ReadyToStart } from '../components/ReadyToStart';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    company: '',
    email: '',
    service: 'Business Automation',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const contactFaqs = [
    {
      question: 'What services does FikraTech offer?',
      answer: 'We specialize in end-to-end digital solutions including custom software development, mobile app development (iOS & Android), UI/UX design, and business process automation.',
    },
    {
      question: 'How do I start a project with FikraTech?',
      answer: 'Simply reach out via our contact form or WhatsApp. We’ll schedule a discovery call to understand your vision, requirements, and timeline, then provide a detailed proposal.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We partner with fintech, government institutions, enterprise logistics, car rental platforms, sports management, and innovative startups across the UAE, Jordan, and globally.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope. An MVP typically takes 6–10 weeks, while comprehensive enterprise systems are delivered in phased agile sprints over 3–6 months.',
    },
    {
      question: 'Can FikraTech support ongoing updates and maintenance?',
      answer: 'Yes, we provide dedicated post-launch support, continuous maintenance, performance monitoring, and iterative feature enhancements.',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 pt-8 pb-14 md:py-16 text-center flex flex-col items-center">
        {/* Glow ambient */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,_#20375699,_#05c5de00)] blur-[100px]" />

        <div className="bottomBorder mx-auto mb-4 flex w-fit items-center rounded-full border-t border-white/10 bg-[#0A1825] px-3 py-1">
          <span className="me-2 size-1.5 rounded-full bg-gradient-to-t from-primary-from to-primary-to shadow-sm" />
          <span className="bg-gradient-to-b from-[#307FE2] to-[#05C3DE] bg-clip-text py-1 text-[0.6rem] font-semibold text-transparent md:text-xs">
            Get in touch
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          <span className="bg-clip-text text-transparent from-white via-white to-white/70 bg-gradient-to-b">
            Get in Touch with{' '}
          </span>
          <span className="bg-gradient-to-r from-[#307FE2] to-[#05C3DE] bg-clip-text text-transparent">
            FikraTech
          </span>
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 font-light max-w-2xl mx-auto leading-relaxed mb-8">
          We’re excited to hear about your ideas and challenges. Drop us a message and let’s create solutions that move the world forward.
        </p>
      </section>

      {/* 2. CONTACT FORM & INFO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <SpecialCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Direct Channels
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="size-11 rounded-2xl bg-[#307FE2]/15 border border-[#307FE2]/30 flex items-center justify-center text-[#05C3DE] shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Direct Phone</h4>
                    <a href="tel:+971567347233" className="text-foreground/80 hover:text-[#05C3DE] transition font-medium block">
                      +971 56 734 7233
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-11 rounded-2xl bg-[#307FE2]/15 border border-[#307FE2]/30 flex items-center justify-center text-[#05C3DE] shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Address</h4>
                    <a href="mailto:info@fikratech.com" className="text-foreground/80 hover:text-[#05C3DE] transition font-medium block">
                      info@fikratech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-11 rounded-2xl bg-[#307FE2]/15 border border-[#307FE2]/30 flex items-center justify-center text-[#05C3DE] shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Dubai Head Office</h4>
                    <address className="not-italic text-foreground/75 leading-relaxed text-xs">
                      (1) - Abu Baker Al Siddique St - Deira, Dubai, AE
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-11 rounded-2xl bg-[#307FE2]/15 border border-[#307FE2]/30 flex items-center justify-center text-[#05C3DE] shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Jordan Branch</h4>
                    <address className="not-italic text-foreground/75 leading-relaxed text-xs">
                      (2) - Alabdali street, Amman, JO
                    </address>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/+971567347233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#15212C] hover:bg-[#1E2E3E] text-white border border-white/15 hover:border-[#307FE2]/40 font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="size-4 text-emerald-400" />
                  <span>Chat via WhatsApp Directly</span>
                </a>
              </div>
            </SpecialCard>
          </div>

          {/* Right: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <SpecialCard className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send us a Message
              </h3>
              <p className="text-xs md:text-sm text-foreground/70 mb-8 font-light">
                A senior technical architect will respond within 24 hours with an actionable roadmap.
              </p>

              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <CheckCircle2 className="size-16 text-[#05C3DE] mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-foreground/70 max-w-sm mb-6">
                    Your message has been received. Our team will review your specifications and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#15212C] text-white text-xs font-semibold hover:bg-white/10 border border-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Write here"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-[#307FE2] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Write here"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-[#307FE2] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Write here"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-[#307FE2] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Write here"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-[#307FE2] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                      Topic / Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15212C] border border-white/10 text-white text-sm focus:outline-none focus:border-[#307FE2] transition"
                    >
                      <option value="Business Automation">Business Automation</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Software Development">Software Development</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground/80 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Enter your questions, feedback or suggestions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-[#307FE2] resize-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#307FE2] to-[#05C3DE] text-white text-sm font-semibold hover:opacity-95 shadow-lg shadow-cyan-500/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="size-4" />
                  </button>
                </form>
              )}
            </SpecialCard>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="w-full max-w-4xl mx-auto px-4 my-16">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs font-light text-[#818B95] md:text-sm">
            Find quick answers to the most common questions about our services, process, and how we can help bring your ideas to life.
          </p>
        </div>
        <Accordion items={contactFaqs} />
      </section>

      {/* 4. TRUSTED BY LOGO STRIP */}
      <div className="w-full">
        <TrustedBy />
      </div>

      {/* 5. READY TO START */}
      <ReadyToStart />
    </div>
  );
}

export default Contact;
