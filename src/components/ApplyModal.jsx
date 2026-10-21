import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, CheckCircle, UploadCloud } from 'lucide-react';

export function ApplyModal({ isOpen, onClose, jobRole }) {
  const { isRtl } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    notes: '',
    fileName: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
    }, 3000);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#0A141E] p-6 md:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Glow ambient background */}
        <span className="pointer-events-none absolute -left-20 -top-24 -z-10 h-40 w-full bg-[radial-gradient(ellipse_at_center,_#203756,_#05c5de00)] blur-3xl" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 end-5 size-9 rounded-full bg-white/10 hover:bg-white/20 text-foreground flex items-center justify-center transition cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <CheckCircle className="size-16 text-primary mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-2">
              {isRtl ? 'تم استلام طلبك بنجاح!' : 'Application Submitted!'}
            </h3>
            <p className="text-sm text-foreground/75 max-w-xs mb-6">
              {isRtl
                ? 'شكراً لاهتمامك بالانضمام إلى فريق فكرة تك. سنقوم بمراجعة سيرتك الذاتية والتواصل معك قريباً.'
                : 'Thank you for your interest in joining FikraTech. Our talent team will review your application and be in touch soon.'}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold transition hover:opacity-90"
            >
              {isRtl ? 'إغلاق' : 'Close'}
            </button>
          </div>
        ) : (
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20 mb-2">
              {jobRole}
            </span>
            <h3 className="text-2xl font-bold text-white mb-1">
              {isRtl ? 'التقديم على الوظيفة' : 'Apply for this Role'}
            </h3>
            <p className="text-xs text-foreground/60 mb-6">
              {isRtl ? 'املأ الحقول أدناه وسنتواصل معك خلال 48 ساعة.' : 'Fill in your details below and we’ll get back to you.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground/80 mb-1">
                  {isRtl ? 'الاسم الكامل *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isRtl ? 'أدخل اسمك الكامل' : 'John Doe'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-foreground/80 mb-1">
                    {isRtl ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/80 mb-1">
                    {isRtl ? 'رقم الهاتف *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/80 mb-1">
                  {isRtl ? 'رابط معرض الأعمال / GitHub / LinkedIn' : 'Portfolio / GitHub / LinkedIn URL'}
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/80 mb-1">
                  {isRtl ? 'السيرة الذاتية (CV / Resume) *' : 'Resume / CV *'}
                </label>
                <label className="flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-white/20 bg-[#15212C]/60 hover:bg-[#15212C] hover:border-primary/50 transition cursor-pointer">
                  <UploadCloud className="size-6 text-primary mb-1" />
                  <span className="text-xs text-foreground/80">
                    {formData.fileName || (isRtl ? 'انقر لرفع ملف PDF أو DOCX' : 'Click to upload PDF or DOCX')}
                  </span>
                  <input
                    type="file"
                    required={!formData.fileName}
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/80 mb-1">
                  {isRtl ? 'رسالة تعريفية أو ملاحظات إضافية' : 'Cover Note (Optional)'}
                </label>
                <textarea
                  rows={3}
                  placeholder={isRtl ? 'أخبرنا باختصار عن شغفك وخبراتك...' : 'Tell us about your background and why you want to join...'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#15212C] border border-white/10 text-white placeholder-foreground/40 text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-primary to-primary-to text-white text-sm font-semibold hover:opacity-95 shadow-lg shadow-primary/25 transition cursor-pointer"
              >
                {isRtl ? 'إرسال طلب التوظيف' : 'Submit Application'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ApplyModal;
