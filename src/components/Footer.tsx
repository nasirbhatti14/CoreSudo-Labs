import React from 'react';
import { Linkedin, MessageSquare, Mail, Phone, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const phoneRaw = '923059555630';
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(
    'Hello CoreSudo Labs! I would like to discuss a software development project.'
  )}`;
  const linkedInUrl = 'https://www.linkedin.com/company/coresudo-labs';

  return (
    <footer className="bg-[#EFEBE3] border-t border-[#DDD8CC] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-center gap-3 cursor-pointer group"
            >
              <Logo size={36} />
              <span className="text-xl font-bold tracking-tight text-[#1C1C1C] font-display">
                CoreSudo <span className="text-[#0F4C4C]">Labs</span>
              </span>
            </a>
            
            <p className="text-sm text-[#4A4A4A] max-w-md leading-relaxed">
              CoreSudo Labs is a software development agency specializing in modern web applications, high-performance backend engineering, and intelligent AI automation solutions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CoreSudo Labs on LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#F7F5F0] border border-[#DDD8CC] flex items-center justify-center text-[#4A4A4A] hover:text-[#0F4C4C] hover:border-[#0F4C4C] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CoreSudo Labs on WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#F7F5F0] border border-[#DDD8CC] flex items-center justify-center text-[#4A4A4A] hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href="mailto:coresudolabs@gmail.com"
                aria-label="Email CoreSudo Labs"
                className="w-9 h-9 rounded-lg bg-[#F7F5F0] border border-[#DDD8CC] flex items-center justify-center text-[#4A4A4A] hover:text-[#0F4C4C] hover:border-[#0F4C4C] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="tel:923059555630"
                aria-label="Call CoreSudo Labs"
                className="w-9 h-9 rounded-lg bg-[#F7F5F0] border border-[#DDD8CC] flex items-center justify-center text-[#4A4A4A] hover:text-[#0F4C4C] hover:border-[#0F4C4C] transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="text-[#4A4A4A] hover:text-[#0F4C4C] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="text-[#4A4A4A] hover:text-[#0F4C4C] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, '#projects')}
                  className="text-[#4A4A4A] hover:text-[#0F4C4C] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="text-[#4A4A4A] hover:text-[#0F4C4C] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-[#4A4A4A] hover:text-[#0F4C4C] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Quick Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C]">
              Core Offerings
            </h4>
            <ul className="space-y-2.5 text-sm text-[#4A4A4A]">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#0F4C4C] transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#0F4C4C] transition-colors"
                >
                  Backend &amp; API Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#0F4C4C] transition-colors"
                >
                  AI &amp; Machine Learning (AI/ML)
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#0F4C4C] transition-colors"
                >
                  AI &amp; Automation Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#0F4C4C] transition-colors"
                >
                  Custom Software Development
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="mt-14 pt-8 border-t border-[#DDD8CC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A4A4A]">
          <div>
            &copy; {currentYear} CoreSudo Labs. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Built with precision for reliable production.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#0F4C4C] hover:text-[#0A3737] font-semibold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
