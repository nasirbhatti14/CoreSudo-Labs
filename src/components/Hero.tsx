import React, { useState } from 'react';
import { ArrowRight, Terminal, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import heroWorkspaceImage from '../assets/images/hero_dev_workspace_1790547751631.jpg';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Subtle editorial kicker (Unboxed text with typographic separator, zero pills) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0F4C4C] uppercase">
              <span>Software Engineering</span>
              <span aria-hidden="true" className="text-[#7A9A8B]">·</span>
              <span>Backend Architecture</span>
              <span aria-hidden="true" className="text-[#7A9A8B]">·</span>
              <span>AI Automation</span>
            </div>

            {/* Bold Headline with text-wrap balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1C1C] tracking-tight leading-[1.12] text-balance font-display">
              Building intelligent software solutions with engineering precision.
            </h1>

            {/* Short Tagline / Concrete Value Description */}
            <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl font-normal">
              CoreSudo Labs crafts resilient web applications, high-performance backend APIs, and tailored AI-driven automation systems to empower modern businesses.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-[#F7F5F0] bg-[#0F4C4C] hover:bg-[#0A3737] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99] whitespace-nowrap cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 text-[#7A9A8B]" />
              </a>

              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-[#1C1C1C] bg-[#EFEBE3] hover:bg-[#E5DFD4] border border-[#DDD8CC] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Markers - Clean unboxed metadata with separators */}
            <div className="pt-4 border-t border-[#DDD8CC]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#4A4A4A] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F4C4C]" />
                <span>Production-Grade Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F4C4C]" />
                <span>Reliable Delivery &amp; Maintenance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F4C4C]" />
                <span>Direct Engineering Communication</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#DDD8CC] bg-[#EFEBE3] shadow-md p-3 sm:p-4">
              
              {/* Studio Image Container */}
              <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-[#E5DFD4]">
                {!imageError ? (
                  <img
                    src={heroWorkspaceImage}
                    alt="CoreSudo Labs modern engineering workspace and development environment"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#EFEBE3] p-8 text-center">
                    <Terminal className="w-12 h-12 text-[#0F4C4C] mb-3" />
                    <p className="text-sm font-semibold text-[#1C1C1C]">CoreSudo Labs Engineering</p>
                    <p className="text-xs text-[#4A4A4A] mt-1">High-performance systems and backend APIs</p>
                  </div>
                )}

                {/* Subtle scrim for clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/40 via-transparent to-transparent pointer-events-none" />

                {/* Minimalist floating indicator inside image frame */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/95 px-3 py-2 rounded-lg bg-[#0F4C4C]/85 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7A9A8B] animate-pulse" />
                    <span className="font-medium">Active Client Deployments</span>
                  </div>
                  <span className="font-mono text-[11px] opacity-85">v2.4 Ready</span>
                </div>
              </div>

              {/* Engineering Highlights Bar Below Photo */}
              <div className="mt-4 pt-3 border-t border-[#DDD8CC] grid grid-cols-3 gap-2 text-center">
                <div className="px-2 py-1">
                  <div className="text-lg font-bold text-[#0F4C4C] font-mono">100%</div>
                  <div className="text-[11px] text-[#4A4A4A]">Custom Code</div>
                </div>
                <div className="px-2 py-1 border-x border-[#DDD8CC]">
                  <div className="text-lg font-bold text-[#0F4C4C] font-mono">REST/AI</div>
                  <div className="text-[11px] text-[#4A4A4A]">Integration</div>
                </div>
                <div className="px-2 py-1">
                  <div className="text-lg font-bold text-[#0F4C4C] font-mono">Fast</div>
                  <div className="text-[11px] text-[#4A4A4A]">Deployment</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
