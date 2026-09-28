import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle,
  ExternalLink,
  Clock,
  MapPin
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<FormData | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phoneDisplay = '+92 305 9555630';
  const phoneRaw = '923059555630';
  const primaryEmail = 'coresudolabs@gmail.com';
  const linkedInUrl = 'https://www.linkedin.com/company/coresudo-labs';
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(
    'Hello CoreSudo Labs! I would like to discuss a software development project.'
  )}`;

  const validate = (fieldValues = formData): FormErrors => {
    const errs: FormErrors = {};

    // Name validation
    if (!fieldValues.name.trim()) {
      errs.name = 'Please provide your full name or company name.';
    } else if (fieldValues.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fieldValues.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!emailRegex.test(fieldValues.email.trim())) {
      errs.email = 'Please provide a valid email address (e.g., name@domain.com).';
    }

    // Message validation
    if (!fieldValues.message.trim()) {
      errs.message = 'Please provide a brief message or project description.';
    } else if (fieldValues.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters so we can understand your requirements.';
    }

    return errs;
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validate();
    setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const validationErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: validationErrors[name as keyof FormErrors] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    const submittedPayload = { ...formData };
    setLastSubmitted(submittedPayload);

    // Prepare mailto link directed to coresudolabs@gmail.com
    const subject = encodeURIComponent(`Project Inquiry from ${submittedPayload.name} - CoreSudo Labs`);
    const body = encodeURIComponent(
      `Hi CoreSudo Labs Team,\n\nName / Organization: ${submittedPayload.name}\nEmail: ${submittedPayload.email}\n\nProject Requirements / Message:\n${submittedPayload.message}\n\n---\nSent via CoreSudo Labs Contact Portal`
    );
    const mailtoUrl = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
      setErrors({});

      // Open email client
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.error('Failed to trigger mail client', err);
      }
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(primaryEmail).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F5F0] border-t border-[#DDD8CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0F4C4C] uppercase mb-3">
            <span>Get In Touch</span>
            <span aria-hidden="true" className="text-[#7A9A8B]">·</span>
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight font-display text-balance">
            Let's discuss your next engineering milestone.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
            Have a project in mind, need backend architecture consultation, or looking to automate complex workflows? Reach out through our direct channels or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Column 1: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-[#EFEBE3] rounded-3xl p-8 sm:p-10 border border-[#DDD8CC] space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#1C1C1C] font-display">
                  Direct Contact Channels
                </h3>
                <p className="mt-2 text-sm text-[#4A4A4A] leading-relaxed">
                  Connect with CoreSudo Labs directly. We reply promptly to all inquiries during standard business hours.
                </p>
              </div>

              {/* Contact list */}
              <div className="space-y-6">
                
                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] border border-[#DDD8CC] flex items-center justify-center text-[#0F4C4C] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#7A9A8B]">
                      Phone / WhatsApp
                    </div>
                    <div className="text-base font-bold text-[#1C1C1C] font-mono tracking-tight">
                      {phoneDisplay}
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F4C4C] hover:text-[#0A3737] hover:underline cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Chat on WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-[#DDD8CC]">|</span>
                      <a
                        href={`tel:${phoneRaw}`}
                        className="text-xs font-medium text-[#4A4A4A] hover:text-[#1C1C1C]"
                      >
                        Direct Call
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] border border-[#DDD8CC] flex items-center justify-center text-[#0F4C4C] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#7A9A8B]">
                      Official Inquiries Email
                    </div>
                    <div className="text-base font-semibold text-[#1C1C1C] break-all">
                      {primaryEmail}
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href={`mailto:${primaryEmail}`}
                        className="text-xs font-semibold text-[#0F4C4C] hover:underline"
                      >
                        Send an Email
                      </a>
                      <span className="text-[#DDD8CC]">|</span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 text-xs text-[#4A4A4A] hover:text-[#1C1C1C] cursor-pointer"
                        title="Copy email to clipboard"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3 h-3 text-[#0F4C4C]" />
                            <span className="text-[#0F4C4C] font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] border border-[#DDD8CC] flex items-center justify-center text-[#0F4C4C] shrink-0 mt-0.5">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#7A9A8B]">
                      Company Profile
                    </div>
                    <div className="text-base font-semibold text-[#1C1C1C]">
                      CoreSudo Labs
                    </div>
                    <div className="pt-1">
                      <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F4C4C] hover:text-[#0A3737] hover:underline"
                      >
                        <span>Visit LinkedIn Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Clickable WhatsApp Card Banner */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-2xl bg-[#F7F5F0] border border-[#DDD8CC] hover:border-[#7A9A8B] transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1C1C1C] group-hover:text-[#0F4C4C] transition-colors">
                        Fastest Response on WhatsApp
                      </div>
                      <div className="text-xs text-[#4A4A4A]">
                        Click to start an instant conversation
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#7A9A8B] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Response SLA Note */}
              <div className="pt-4 border-t border-[#DDD8CC] flex items-center gap-2 text-xs text-[#4A4A4A]">
                <Clock className="w-4 h-4 text-[#7A9A8B]" />
                <span>Typical response time: Within a few hours on business days</span>
              </div>

            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-[#EFEBE3] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#DDD8CC] shadow-xs">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#1C1C1C] font-display">
                  Send a Direct Message
                </h3>
                <p className="mt-2 text-sm text-[#4A4A4A]">
                  Fill out the form below and we will review your project requirements and follow up with you.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-[#F7F5F0] border border-[#0F4C4C]/30 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#0F4C4C]/10 text-[#0F4C4C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#1C1C1C] font-display">
                      Inquiry Dispatched!
                    </h4>
                    <p className="text-sm text-[#4A4A4A] max-w-md mx-auto leading-relaxed mt-2">
                      Your message is directed straight to <strong className="text-[#0F4C4C] font-semibold">{primaryEmail}</strong>. If your email app did not open automatically, you can also send it directly via WhatsApp for an immediate response.
                    </p>
                  </div>

                  {/* Actions: Send via WhatsApp / Open Gmail */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {lastSubmitted && (
                      <a
                        href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent(
                          `Hello CoreSudo Labs! My name is ${lastSubmitted.name} (${lastSubmitted.email}).\n\nProject inquiry: ${lastSubmitted.message}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xs transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>Send to WhatsApp Now</span>
                      </a>
                    )}

                    <a
                      href={`mailto:${primaryEmail}?subject=${encodeURIComponent(
                        `Project Inquiry from ${lastSubmitted?.name || 'Client'} - CoreSudo Labs`
                      )}&body=${encodeURIComponent(
                        `Name: ${lastSubmitted?.name || ''}\nEmail: ${lastSubmitted?.email || ''}\n\nMessage:\n${lastSubmitted?.message || ''}`
                      )}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#F7F5F0] bg-[#0F4C4C] hover:bg-[#0A3737] shadow-xs transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-[#DDD8CC]">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setLastSubmitted(null);
                      }}
                      className="text-xs font-semibold text-[#4A4A4A] hover:text-[#0F4C4C] underline transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-sm font-semibold text-[#1C1C1C] mb-2"
                    >
                      Your Name or Organization <span className="text-[#0F4C4C]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. Alex Morgan or TechCorp"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#F7F5F0] border text-[#1C1C1C] placeholder:text-[#4A4A4A]/50 text-sm transition-colors duration-200 ${
                        touched.name && errors.name
                          ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                          : 'border-[#DDD8CC] focus:border-[#0F4C4C]'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-sm font-semibold text-[#1C1C1C] mb-2"
                    >
                      Email Address <span className="text-[#0F4C4C]">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#F7F5F0] border text-[#1C1C1C] placeholder:text-[#4A4A4A]/50 text-sm transition-colors duration-200 ${
                        touched.email && errors.email
                          ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                          : 'border-[#DDD8CC] focus:border-[#0F4C4C]'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label 
                      htmlFor="contact-message" 
                      className="block text-sm font-semibold text-[#1C1C1C] mb-2"
                    >
                      Message / Project Details <span className="text-[#0F4C4C]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      placeholder="Briefly describe what you're looking to build (e.g. backend API architecture, web app development, AI pipeline automation)..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#F7F5F0] border text-[#1C1C1C] placeholder:text-[#4A4A4A]/50 text-sm transition-colors duration-200 resize-y min-h-[120px] ${
                        touched.message && errors.message
                          ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                          : 'border-[#DDD8CC] focus:border-[#0F4C4C]'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#F7F5F0] bg-[#0F4C4C] hover:bg-[#0A3737] shadow-sm transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#F7F5F0] border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 text-[#7A9A8B]" />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-xs text-[#4A4A4A]">
                      We respect your privacy. No spam or unsolicited promotions ever.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
