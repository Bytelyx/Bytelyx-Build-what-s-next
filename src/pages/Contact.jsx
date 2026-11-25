import React, { useEffect, useRef, useState } from 'react';
import { Check, CheckCircle2, ChevronDown, Paperclip, Plus, X } from 'lucide-react';
import './Contact.css';
import TrustedBy from '../components/TrustedBy';

const TRUSTED_LOGOS = [
  { name: 'Al-Qudrah', src: '/images/home/trustedBy/image1-2.svg' },
  { name: 'Dubai Sports Council', src: '/images/home/trustedBy/image6.svg' },
  { name: 'Dar Exchange', src: '/images/home/trustedBy/image3-2.svg' },
  { name: 'Dinarak', src: '/images/home/trustedBy/image4-2.svg' },
  { name: 'ZwiftPay', src: '/images/home/trustedBy/image5-2.svg' },
  { name: 'Decca', src: '/images/home/trustedBy/decca.avif' },
  { name: 'Hawelli', src: '/images/home/trustedBy/hawelli.avif' },
  { name: 'Zamzam', src: '/images/home/trustedBy/zamzam.avif' },
  { name: 'Cham', src: '/images/home/trustedBy/cham.avif' },
];

const TOPIC_OPTIONS = [
  'General',
  'Business Automation',
  'Software Development',
  'Mobile App Development',
  'UI/UX Design',
];

const CONTACT_FAQS = [
  {
    question: 'What services does Bytelyx offer?',
    answer:
      'We specialize in end-to-end digital solutions including custom software development, mobile app development (iOS & Android), UI/UX design, and business process automation.',
  },
  {
    question: 'How do I start a project with Bytelyx?',
    answer:
      'Simply reach out via our contact form or WhatsApp. We’ll schedule a discovery call to understand your vision, requirements, and timeline, then provide a detailed proposal.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We partner with fintech, government institutions, enterprise logistics, car rental platforms, sports management, and innovative startups across the UAE, Jordan, and globally.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope. An MVP typically takes 6–10 weeks, while comprehensive enterprise systems are delivered in phased agile sprints over 3–6 months.',
  },
  {
    question: 'Can Bytelyx support ongoing updates and maintenance?',
    answer:
      'Yes, we provide dedicated post-launch support, continuous maintenance, performance monitoring, and iterative feature enhancements.',
  },
];

const SIDE_TICKS = Array.from({ length: 12 });

export function Contact() {
  const formCardRef = useRef(null);
  const fullNameInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const topicContainerRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    company: '',
    email: '',
    topic: 'General',
    message: '',
  });
  const [attachment, setAttachment] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState(null);
  const [openFaqIndices, setOpenFaqIndices] = useState([]);
  const [yesActive, setYesActive] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (topicContainerRef.current && !topicContainerRef.current.contains(event.target)) {
        setIsTopicOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsTopicOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'info.bytelyx@gmail.com';
  const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE || '918592943588';

  const handleCardMouseMove = (e) => {
    if (!formCardRef.current) return;
    const rect = formCardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleFieldChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (!file) {
      setAttachment(null);
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, attachment: 'File must be 10 MB or smaller.' }));
      return;
    }
    setErrors((prev) => ({ ...prev, attachment: undefined }));
    setAttachment(file);
  };

  const clearAttachment = (e) => {
    e.stopPropagation();
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Full Name is required.';
    }
    const phoneDigits = formData.phone.replace(/[^\d]/g, '');
    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone Number is required.';
    } else if (!/^[+\d\s()-]{7,20}$/.test(formData.phone.trim()) || phoneDigits.length < 7) {
      nextErrors.phone = 'Enter a valid phone number.';
    }
    if (!formData.company.trim()) {
      nextErrors.company = 'Company Name is required.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.topic.trim()) {
      nextErrors.topic = 'Topic is required.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildDispatchLinks = (payload) => {
    const summary = [
      `Topic: ${payload.topic}`,
      `Full Name: ${payload.fullName}`,
      `Phone Number: ${payload.phone}`,
      `Company Name: ${payload.company}`,
      `Email: ${payload.email}`,
      payload.attachmentName ? `Attachment: ${payload.attachmentName}` : null,
      '',
      'Message:',
      payload.message,
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoSubject = encodeURIComponent(`[${payload.topic}] Contact Inquiry from ${payload.fullName}`);
    const mailtoBody = encodeURIComponent(summary);
    return {
      mailtoUrl: `mailto:${contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`,
      whatsappUrl: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(summary)}`,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const snapshot = {
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      topic: formData.topic,
      message: formData.message.trim(),
      attachmentName: attachment ? attachment.name : null,
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedPayload(snapshot);
    }, 550);
  };

  const handleReset = () => {
    setSubmittedPayload(null);
    setFormData({
      fullName: '',
      phone: '',
      company: '',
      email: '',
      topic: 'General',
      message: '',
    });
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setErrors({});
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndices((prev) => (prev.includes(idx) ? [] : [idx]));
  };

  const handleReadyYesClick = () => {
    setYesActive(true);
    setTimeout(() => {
      setYesActive(false);
      if (formCardRef.current) {
        formCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setTimeout(() => {
        fullNameInputRef.current?.focus();
      }, 450);
    }, 320);
  };

  const dispatchLinks = submittedPayload ? buildDispatchLinks(submittedPayload) : null;

  return (
    <div className="contact-page">
      {/* 1. HERO AREA */}
      <section className="contact-hero" aria-label="Contact introduction">
        <div className="contact-hero-ambient" aria-hidden="true" />

        <h1 className="contact-hero-title">
          <span className="contact-hero-title-gradient">
            Get in Touch with <span className="contact-hero-brand">Bytelyx</span>
          </span>
        </h1>

        <div className="contact-hero-subwrap">
          <p className="contact-hero-subtitle">
            We’re excited to hear about your ideas and challenges. Drop us a message and let’s create solutions that move the world forward.
          </p>
          <div className="contact-hero-bottom-glow" aria-hidden="true" />
          <div className="contact-hero-divider" aria-hidden="true" />
        </div>
      </section>

      {/* 2. CONTACT FORM SECTION */}
      <section className="contact-form-stage" aria-label="Contact form">
        {/* Left decorative horizontal tick lines */}
        <div className="contact-side-ticks" aria-hidden="true">
          {SIDE_TICKS.map((_, idx) => (
            <div key={`left-tick-${idx}`} className="contact-tick-line" />
          ))}
        </div>

        {/* Outer frame */}
        <div className="contact-form-outer">
          <div className="contact-form-card-wrap">
            <div
              ref={formCardRef}
              onMouseMove={handleCardMouseMove}
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
              className="contact-form-card"
            >
              {/* Mouse spotlight */}
              <div
                className="pointer-events-none absolute -z-10 h-32 w-32 rounded-full bg-[radial-gradient(at_center,_#20375699,_#05c5de00)] blur-xl transition-opacity duration-300"
                style={{
                  left: `${mousePos.x}px`,
                  top: `${mousePos.y}px`,
                  opacity: isCardHovered ? 1 : 0,
                  transform: 'translate(-50%, -50%)',
                }}
                aria-hidden="true"
              />

              {/* Top/bottom subtle border gradient mask */}
              <div className="contact-form-card-border-mask" aria-hidden="true" />

              {/* Subtle top-left blue ambient glow */}
              <span className="contact-form-card-ambient" aria-hidden="true" />

              <div className="contact-form-inner">
                {submittedPayload ? (
                  <div className="flex min-h-[600px] flex-col items-center justify-center py-10 text-center">
                    <CheckCircle2 className="mb-4 size-14 text-[#327ee2]" />
                    <h2 className="mb-2 text-2xl font-semibold text-white">
                      Message Sent Successfully
                    </h2>
                    <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#818B95]">
                      Your message has been prepared for our team. We will get back to you shortly at{' '}
                      <span className="text-white/90">{submittedPayload.email}</span>.
                    </p>

                    <div className="mb-6 w-full rounded-xl border border-white/10 bg-[#5F5F5F1A] p-4 text-left text-xs text-[#cbd5e1] space-y-1.5">
                      <div>
                        <span className="text-white/50">Name:</span> {submittedPayload.fullName}
                      </div>
                      <div>
                        <span className="text-white/50">Company:</span> {submittedPayload.company}
                      </div>
                      <div>
                        <span className="text-white/50">Topic:</span> {submittedPayload.topic}
                      </div>
                      {submittedPayload.attachmentName && (
                        <div>
                          <span className="text-white/50">Attachment:</span> {submittedPayload.attachmentName}
                        </div>
                      )}
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:flex-row">
                      <a
                        href={dispatchLinks.mailtoUrl}
                        className="contact-submit-btn flex-1 text-center no-underline"
                      >
                        Send via Email App
                      </a>
                      <a
                        href={dispatchLinks.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-[42px] flex-1 items-center justify-center rounded-md border border-white/15 bg-[#15212C] px-3 py-1.5 text-sm font-medium text-white transition hover:border-[#327ee2]/60"
                      >
                        Send via WhatsApp
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-5 text-xs font-medium text-white/60 transition hover:text-white cursor-pointer bg-transparent border-0"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Row 1: Full Name & Phone Number */}
                    <div className="contact-form-grid-row">
                      <div className="contact-field-group">
                        <label htmlFor="contact-full-name" className="contact-field-label">
                          Full Name<span className="contact-required-star"> *</span>
                        </label>
                        <div className={`contact-input-box ${errors.fullName ? 'is-error' : ''}`}>
                          <input
                            ref={fullNameInputRef}
                            id="contact-full-name"
                            name="full_name"
                            type="text"
                            required
                            placeholder="Write here"
                            value={formData.fullName}
                            onChange={handleFieldChange('fullName')}
                            aria-invalid={Boolean(errors.fullName)}
                            className="contact-input-el"
                          />
                        </div>
                        {errors.fullName && (
                          <span className="contact-error-text">{errors.fullName}</span>
                        )}
                      </div>

                      <div className="contact-field-group">
                        <label htmlFor="contact-phone" className="contact-field-label">
                          Phone Number<span className="contact-required-star"> *</span>
                        </label>
                        <div className={`contact-input-box ${errors.phone ? 'is-error' : ''}`}>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="Write here"
                            value={formData.phone}
                            onChange={handleFieldChange('phone')}
                            aria-invalid={Boolean(errors.phone)}
                            className="contact-input-el"
                          />
                        </div>
                        {errors.phone && (
                          <span className="contact-error-text">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Company Name & Email */}
                    <div className="contact-form-grid-row">
                      <div className="contact-field-group">
                        <label htmlFor="contact-company" className="contact-field-label">
                          Company Name<span className="contact-required-star"> *</span>
                        </label>
                        <div className={`contact-input-box ${errors.company ? 'is-error' : ''}`}>
                          <input
                            id="contact-company"
                            name="company_name"
                            type="text"
                            required
                            placeholder="Write here"
                            value={formData.company}
                            onChange={handleFieldChange('company')}
                            aria-invalid={Boolean(errors.company)}
                            className="contact-input-el"
                          />
                        </div>
                        {errors.company && (
                          <span className="contact-error-text">{errors.company}</span>
                        )}
                      </div>

                      <div className="contact-field-group">
                        <label htmlFor="contact-email" className="contact-field-label">
                          Email<span className="contact-required-star"> *</span>
                        </label>
                        <div className={`contact-input-box ${errors.email ? 'is-error' : ''}`}>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="Write here"
                            value={formData.email}
                            onChange={handleFieldChange('email')}
                            aria-invalid={Boolean(errors.email)}
                            className="contact-input-el"
                          />
                        </div>
                        {errors.email && (
                          <span className="contact-error-text">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Topic * */}
                    <div className="contact-field-group" ref={topicContainerRef}>
                      <label id="contact-topic-label" htmlFor="contact-topic" className="contact-field-label">
                        Topic<span className="contact-required-star"> *</span>
                      </label>
                      <div className={`contact-input-box ${errors.topic ? 'is-error' : ''}`}>
                        <button
                          id="contact-topic"
                          type="button"
                          role="combobox"
                          aria-labelledby="contact-topic-label"
                          aria-expanded={isTopicOpen}
                          aria-haspopup="listbox"
                          aria-invalid={Boolean(errors.topic)}
                          onClick={() => setIsTopicOpen((prev) => !prev)}
                          className="contact-select-trigger"
                          style={{
                            color: formData.topic === 'General' ? '#9ca3af' : '#e3e3e3',
                          }}
                        >
                          <span>{formData.topic}</span>
                          <ChevronDown
                            className={`contact-select-chevron ${isTopicOpen ? 'is-open' : ''}`}
                            aria-hidden="true"
                          />
                        </button>

                        {isTopicOpen && (
                          <ul
                            role="listbox"
                            aria-labelledby="contact-topic-label"
                            className="contact-select-menu"
                          >
                            {TOPIC_OPTIONS.map((opt) => {
                              const selected = formData.topic === opt;
                              return (
                                <li key={opt} role="option" aria-selected={selected}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setFormData((prev) => ({ ...prev, topic: opt }));
                                      setErrors((prev) => ({ ...prev, topic: undefined }));
                                      setIsTopicOpen(false);
                                    }}
                                    className={`contact-select-option ${selected ? 'is-selected' : ''}`}
                                  >
                                    <span>{opt}</span>
                                    {selected && <Check className="size-3.5 text-[#327ee2]" />}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                      {errors.topic && (
                        <span className="contact-error-text">{errors.topic}</span>
                      )}
                    </div>

                    {/* Row 4: Attachments */}
                    <div className="contact-field-group">
                      <label htmlFor="contact-attachments" className="contact-field-label">
                        Attachments
                      </label>
                      <div
                        className={`contact-input-box ${errors.attachment ? 'is-error' : ''}`}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          ref={fileInputRef}
                          id="contact-attachments"
                          name="attachments"
                          type="file"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                          className="contact-file-trigger"
                          aria-label="Select a file"
                        >
                          <span
                            className="truncate"
                            style={{ color: attachment ? '#e3e3e3' : '#9ca3af' }}
                          >
                            {attachment ? attachment.name : 'Select a file'}
                          </span>
                          {attachment ? (
                            <span
                              role="button"
                              tabIndex={0}
                              onClick={clearAttachment}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  clearAttachment(e);
                                }
                              }}
                              aria-label="Remove selected file"
                              className="ml-2 inline-flex items-center text-white/60 hover:text-white"
                            >
                              <X className="size-4" />
                            </span>
                          ) : (
                            <Paperclip className="ml-2 size-3.5 shrink-0 text-white/30 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                          )}
                        </button>
                      </div>
                      {errors.attachment && (
                        <span className="contact-error-text">{errors.attachment}</span>
                      )}
                    </div>

                    {/* Row 5: Message * */}
                    <div className="contact-field-group">
                      <label htmlFor="contact-message" className="contact-field-label">
                        Message<span className="contact-required-star"> *</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        placeholder="Enter your questions, feedback or suggestions..."
                        value={formData.message}
                        onChange={handleFieldChange('message')}
                        aria-invalid={Boolean(errors.message)}
                        className={`contact-textarea-el ${errors.message ? 'is-error' : ''}`}
                      />
                      {errors.message && (
                        <span className="contact-error-text">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom divider line & downward subtle blue glow */}
          <div className="contact-form-bottom-line-wrap" aria-hidden="true">
            <div className="contact-form-bottom-line" />
            <div className="contact-form-bottom-glow" />
          </div>
        </div>

        {/* Right decorative horizontal tick lines */}
        <div className="contact-side-ticks" aria-hidden="true">
          {SIDE_TICKS.map((_, idx) => (
            <div key={`right-tick-${idx}`} className="contact-tick-line" />
          ))}
        </div>
      </section>

      {/* 3. TRUSTED BY SECTION */}
      <section className="contact-trusted-section" aria-label="Trusted by Innovators and Industry Leaders">
        <div className="contact-trusted-inner">
          <TrustedBy />
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="contact-faq-section" aria-label="Frequently asked questions">
        <div className="contact-section-header">
          <div className="contact-pill-badge">
            <span className="contact-pill-dot" aria-hidden="true" />
            <span className="contact-pill-text">Got Questions?</span>
          </div>

          <h2 className="contact-faq-heading">Frequently asked questions</h2>

          <p className="contact-faq-subtitle">
            Find quick answers to the most common questions about our services, process, and how we can help bring your ideas to life.
          </p>
        </div>

        <div className="contact-faq-list">
          {CONTACT_FAQS.map((item, idx) => {
            const isOpen = openFaqIndices.includes(idx);
            return (
              <div key={item.question} className="contact-faq-item">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(idx)}
                    className="contact-faq-trigger"
                  >
                    <span>{item.question}</span>
                    <span className={`contact-faq-icon-box ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                      <Plus className="size-4" />
                    </span>
                  </button>
                </h3>

                <div className={`contact-faq-answer-grid ${isOpen ? 'is-open' : ''}`}>
                  <div className="contact-faq-answer-inner">
                    <p className="contact-faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. READY TO START SECTION */}
      <section className="contact-ready-wrapper" aria-label="Ready to Start">
        <div className="contact-ready-top">
          <div className="contact-ready-top-glow" aria-hidden="true" />

          <div className="contact-section-header mt-12">
            <div className="contact-pill-badge">
              <span className="contact-pill-dot" aria-hidden="true" />
              <span className="contact-pill-text">idea to project</span>
            </div>

            <h2 className="contact-ready-heading">Ready to Start</h2>

            <p className="contact-faq-subtitle">
              Take the first step toward innovation.{' '}
              <br className="hidden sm:inline" />
              Say Yes, and let’s build something extraordinary together.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReadyYesClick}
            aria-label="Say YES to start your project"
            className={`contact-yes-pill ${yesActive ? 'is-active' : ''}`}
          >
            <span className="contact-yes-label">YES</span>
            <div className="contact-yes-knob" aria-hidden="true">
              <div className="contact-yes-knob-inner" />
            </div>
          </button>
        </div>

        <div className="contact-ready-bottom" aria-hidden="true">
          <div className="contact-ready-bottom-glow" />
        </div>
      </section>
    </div>
  );
}

export default Contact;
