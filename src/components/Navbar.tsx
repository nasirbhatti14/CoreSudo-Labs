import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-xs border-b border-[#DDD8CC]'
          : 'bg-[#F7F5F0] border-b border-[#DDD8CC]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark with Official Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            aria-label="CoreSudo Labs Home"
          >
            <Logo size={38} />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1C1C1C] font-display">
                CoreSudo <span className="text-[#0F4C4C] font-semibold">Labs</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links (Clean text with subtle underlines) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#0F4C4C] font-semibold'
                      : 'text-[#4A4A4A] hover:text-[#1C1C1C]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F4C4C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#F7F5F0] bg-[#0F4C4C] hover:bg-[#0A3737] transition-all duration-200 shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#7A9A8B]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#1C1C1C] hover:bg-[#EFEBE3] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F4C4C]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DDD8CC] bg-[#F7F5F0] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EFEBE3] text-[#0F4C4C] font-semibold'
                      : 'text-[#4A4A4A] hover:bg-[#EFEBE3] hover:text-[#1C1C1C]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#DDD8CC]">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold text-[#F7F5F0] bg-[#0F4C4C] hover:bg-[#0A3737] transition-colors shadow-xs"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#7A9A8B]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
