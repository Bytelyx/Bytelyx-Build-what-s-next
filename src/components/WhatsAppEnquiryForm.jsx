import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ShieldCheck } from 'lucide-react';

export default function WhatsAppEnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Website Development',
    budget: '$1,000 - $3,000',
    timeline: '1 - 2 Months',
    description: '',
    preferredContact: 'WhatsApp'
  });

  const [errors, setErrors] = useState({});
  const [isReadyInWhatsApp, setIsReadyInWhatsApp] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const [emailFallbackUrl, setEmailFallbackUrl] = useState('');

  const projectTypes = [
    'Website Development',
    'Web Application',
    'E-Commerce',
    'UI/UX Design',
    'Full-Stack Development',
    'Mobile App Development — Flutter',
    'Digital Marketing',
    'Marketing & Brand Growth',
    'AI Integration',
    'Custom Software',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $7,000',
    '$7,000 - $15,000',
    '$15,000+',
    'Flexible / Let\'s Discuss'
  ];

  const timelineOptions = [
    'Less than 1 Month',
    '1 - 2 Months',
    '2 - 4 Months',
    '4+ Months',
    'Flexible'
  ];

  const contactMethods = ['WhatsApp', 'Phone', 'Email'];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (minimum 2 characters).';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid work email address.';
    }
    if (!formData.projectType) {
      errs.projectType = 'Please select a project type.';
    }
    if (!formData.preferredContact) {
      errs.preferredContact = 'Please choose a preferred contact method.';
    }
    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = 'Please describe your project (minimum 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build formatted message
    const messageLines = [
      '🚀 *NEW PROJECT ENQUIRY — BYTELYX*',
      '',
      '*Client Information:*',
      `• Name: ${formData.fullName.trim()}`,
      `• Email: ${formData.email.trim()}`,
      `• Phone: ${formData.phone.trim() || 'Not provided'}`,
      `• Company: ${formData.company.trim() || 'Not provided'}`,
      '',
      '*Project Scope:*',
      `• Type: ${formData.projectType}`,
      `• Estimated Budget: ${formData.budget}`,
      `• Target Timeline: ${formData.timeline}`,
      `• Preferred Contact: ${formData.preferredContact}`,
      '',
      '*Project Description:*',
      formData.description.trim()
    ];

    const rawMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(rawMessage);
    const targetUrl = `https://wa.me/918592943588?text=${encodedMessage}`;

    // Construct secondary mailto link
    const mailtoSubject = encodeURIComponent(`[Project Enquiry] ${formData.projectType} — ${formData.fullName.trim()}`);
    const mailtoBody = encodeURIComponent(rawMessage);
    const mailtoUrl = `mailto:info.bytelyx@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setWhatsAppUrl(targetUrl);
    setEmailFallbackUrl(mailtoUrl);
    setIsReadyInWhatsApp(true);

    // Attempt opening in a new tab
    const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
    if (!win) {
      console.warn('Popup blocked by browser. Fallback button presented.');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-7 sm:p-10 border border-[#E7E9F2] shadow-[0_4px_24px_-6px_rgba(8,8,91,0.04)]">
      
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
          Project Enquiry Form
        </h2>
        <p className="text-sm text-[#667085] mt-1.5 leading-relaxed">
          Provide your specifications below. Submissions directly format an enquiry and open WhatsApp to initiate conversation with BYTELYX.
        </p>
      </div>

      {/* Action / Success Banner when WhatsApp is triggered */}
      {isReadyInWhatsApp && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-xl bg-blue-50 border border-blue-200 text-[#08085B] space-y-3"
        >
          <div className="flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#111827]">
                Your enquiry is ready in WhatsApp.
              </h4>
              <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
                Review the message in WhatsApp and press <strong>Send</strong> to share your enquiry directly with our engineering team at <strong>+91 8592943588</strong>.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open in WhatsApp</span>
            </a>

            <a
              href={emailFallbackUrl}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#08085B] bg-white border border-[#E7E9F2] hover:border-[#3027D9] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#3027D9]" />
              <span>Send via Email Fallback</span>
            </a>
          </div>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        
        {/* Full Name & Work Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
              Full Name <span className="text-[#3027D9]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Alexander Vance"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                  : 'border-[#E7E9F2] bg-white focus:border-[#3027D9] focus:ring-[#3027D9]/20'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-600">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
              Work Email <span className="text-[#3027D9]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alexander@company.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                  : 'border-[#E7E9F2] bg-white focus:border-[#3027D9] focus:ring-[#3027D9]/20'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
              Phone Number <span className="text-xs font-normal text-[#667085]">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl border border-[#E7E9F2] bg-white text-sm transition-all focus:border-[#3027D9] focus:ring-2 focus:ring-[#3027D9]/20 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
              Company Name <span className="text-xs font-normal text-[#667085]">(optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Vance Logistics Corp"
              className="w-full px-4 py-3 rounded-xl border border-[#E7E9F2] bg-white text-sm transition-all focus:border-[#3027D9] focus:ring-2 focus:ring-[#3027D9]/20 focus:outline-none"
            />
          </div>
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
            Project Type <span className="text-[#3027D9]">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E9F2] bg-white text-sm transition-all focus:border-[#3027D9] focus:ring-2 focus:ring-[#3027D9]/20 focus:outline-none"
          >
            {projectTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label htmlFor="budget" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
              Estimated Budget <span className="text-xs font-normal text-[#667085]">(optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#E7E9F2] bg-white text-sm transition-all focus:border-[#3027D9] focus:ring-2 focus:ring-[#3027D9]/20 focus:outline-none"
            >
              {budgetRanges.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
              Project Timeline <span className="text-xs font-normal text-[#667085]">(optional)</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#E7E9F2] bg-white text-sm transition-all focus:border-[#3027D9] focus:ring-2 focus:ring-[#3027D9]/20 focus:outline-none"
            >
              {timelineOptions.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <span className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
            Preferred Contact Method <span className="text-[#3027D9]">*</span>
          </span>
          <div className="flex flex-wrap gap-2.5">
            {contactMethods.map(method => (
              <label
                key={method}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                  formData.preferredContact === method
                    ? 'bg-[#08085B] text-white border-[#08085B] shadow-2xs'
                    : 'bg-[#F6F7FC] text-[#667085] border-[#E7E9F2] hover:bg-[#E7E9F2]'
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  checked={formData.preferredContact === method}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
          {errors.preferredContact && (
            <p className="mt-1.5 text-xs text-red-600">{errors.preferredContact}</p>
          )}
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="description" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
            Project Description <span className="text-[#3027D9]">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Outline your project scope, features, goals, or existing platforms to integrate..."
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
              errors.description
                ? 'border-red-400 bg-red-50/20 focus:ring-red-400'
                : 'border-[#E7E9F2] bg-white focus:border-[#3027D9] focus:ring-[#3027D9]/20'
            }`}
          />
          {errors.description && (
            <p className="mt-1.5 text-xs text-red-600">{errors.description}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#08085B] via-[#3027D9] to-[#5145FF] shadow-sm hover:shadow-lg hover:shadow-[#3027D9]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <span>Proceed to WhatsApp Enquiry</span>
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-center pt-1 text-[11px] text-[#667085]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#3027D9]" />
          <span>Client-side formatted &bull; WhatsApp will launch with prefilled message.</span>
        </div>
      </form>
    </div>
  );
}
