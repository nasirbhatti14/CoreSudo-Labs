import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Briefcase, 
  Linkedin, 
  Github,
  Globe,
  Mail, 
  CheckCircle,
  ExternalLink,
  Sparkles,
  Award
} from 'lucide-react';
import founderFallbackImage from '../assets/images/founder_nasir_iqbal_1790547737645.jpg';

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<string>('/founder.jpg');

  const handleImageError = () => {
    if (currentPhoto === '/founder.jpg') {
      // Try fallback bundled image
      setCurrentPhoto(founderFallbackImage);
    } else {
      // If even fallback fails, show monogram
      setImageError(true);
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F5F0] border-t border-[#DDD8CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0F4C4C] uppercase mb-3">
            <span>About CoreSudo Labs</span>
            <span aria-hidden="true" className="text-[#7A9A8B]">·</span>
            <span>Vision &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight font-display text-balance">
            Rooted in engineering discipline, committed to client success.
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          
          {/* Part A: Company Bio */}
          <div className="bg-[#EFEBE3] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#DDD8CC]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F4C4C] uppercase tracking-wider">
                  <Terminal className="w-4 h-4 text-[#7A9A8B]" />
                  <span>The Company</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] font-display">
                  A software development company focused on quality, longevity, and reliable delivery.
                </h3>

                <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  CoreSudo Labs is a software development company building web, backend, and AI-powered solutions for clients. We believe that modern businesses deserve robust, transparently engineered software that operates reliably under real-world conditions.
                </p>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                  Rather than delivering fragile, temporary fixes or bloated boilerplate, our approach centers on clean software architecture, rigorous API design, and pragmatic automation. From the initial architecture blueprint to production deployment and monitoring, we deliver systems engineered to perform and scale smoothly.
                </p>

                {/* Company Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#DDD8CC]">
                  <div className="space-y-1">
                    <div className="font-semibold text-sm text-[#1C1C1C]">Reliable Delivery</div>
                    <div className="text-xs text-[#4A4A4A]">Clean milestones, clear timelines, predictable releases.</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-sm text-[#1C1C1C]">Code Quality</div>
                    <div className="text-xs text-[#4A4A4A]">Maintainable, typed, and thoroughly tested implementations.</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-sm text-[#1C1C1C]">Client Partnership</div>
                    <div className="text-xs text-[#4A4A4A]">Direct engineering access with transparent communication.</div>
                  </div>
                </div>
              </div>

              {/* Company Highlights Visual Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#F7F5F0] rounded-2xl p-6 sm:p-8 border border-[#DDD8CC] space-y-5 text-left shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0F4C4C]">
                    Core Competencies
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-[#0F4C4C]/10 text-[#0F4C4C] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1C1C]">Full-Stack Web Engineering</h4>
                        <p className="text-xs text-[#4A4A4A] mt-0.5">Modern component architecture with seamless responsive experiences.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-[#0F4C4C]/10 text-[#0F4C4C] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1C1C]">High-Throughput Backends</h4>
                        <p className="text-xs text-[#4A4A4A] mt-0.5">Optimized database querying, API rate handling, and secure authentication.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-[#0F4C4C]/10 text-[#0F4C4C] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1C1C]">Intelligent Automation</h4>
                        <p className="text-xs text-[#4A4A4A] mt-0.5">Connecting enterprise workflows with modern AI APIs and automated data pipelines.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DDD8CC] flex items-center justify-between text-xs text-[#4A4A4A]">
                    <span>Headquarters &amp; Remote Operations</span>
                    <span className="font-semibold text-[#0F4C4C]">Global Clients</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Part B: Founder Section */}
          <div className="bg-[#EFEBE3] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#DDD8CC]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Photo placeholder (circular image) */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative group">
                  {/* Circular Image Frame with deep teal border accent */}
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#0F4C4C] shadow-md bg-[#F7F5F0] relative">
                    {!imageError ? (
                      <img
                        src={currentPhoto}
                        alt="Nasir Iqbal - Founder of CoreSudo Labs"
                        referrerPolicy="no-referrer"
                        onError={handleImageError}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#E5DFD4] text-[#0F4C4C]">
                        <span className="text-4xl font-bold font-display">NI</span>
                        <span className="text-xs mt-1 text-[#4A4A4A]">Nasir Iqbal</span>
                      </div>
                    )}
                  </div>

                  {/* Founder Status Marker */}
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#0F4C4C] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#7A9A8B]" />
                    <span>Founder &amp; Lead Engineer</span>
                  </div>
                </div>
              </div>

              {/* Founder Details & Bio */}
              <div className="md:col-span-8 space-y-5 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F4C4C] uppercase tracking-wider">
                  <Code2 className="w-4 h-4 text-[#7A9A8B]" />
                  <span>Founder &amp; Technical Lead</span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] font-display">
                    Nasir Iqbal
                  </h3>
                  <p className="text-sm font-medium text-[#7A9A8B] mt-1">
                    Founder of CoreSudo Labs · Backend &amp; Python Developer
                  </p>
                </div>

                {/* Founder Short Bio */}
                <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
                  Backend/Python developer and founder of <strong className="font-semibold text-[#1C1C1C]">CoreSudo Labs</strong>, with hands-on experience in software development and a focus on building reliable, scalable solutions.
                </p>

                <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                  Nasir combines strong fundamentals in computer science and software architecture with hands-on development expertise in Python, FastAPI, Django, database management, and asynchronous systems. Through CoreSudo Labs, he directs technical solutions for clients, emphasizing maintainable codebases, robust integrations, and high operational reliability.
                </p>

                {/* Key Skills & Contact links */}
                <div className="pt-4 border-t border-[#DDD8CC] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#4A4A4A]">
                    <span className="px-2.5 py-1 bg-[#F7F5F0] border border-[#DDD8CC] rounded-md">Python &amp; FastAPI</span>
                    <span className="px-2.5 py-1 bg-[#F7F5F0] border border-[#DDD8CC] rounded-md">RESTful APIs</span>
                    <span className="px-2.5 py-1 bg-[#F7F5F0] border border-[#DDD8CC] rounded-md">Modern Web &amp; React</span>
                    <span className="px-2.5 py-1 bg-[#F7F5F0] border border-[#DDD8CC] rounded-md">Applied AI</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href="https://www.linkedin.com/in/nasir-iqbal-se"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#F7F5F0] bg-[#0F4C4C] hover:bg-[#0A3737] transition-colors"
                      aria-label="Nasir Iqbal on LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#7A9A8B]" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="https://nasir-iqbal.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1C1C1C] bg-[#F7F5F0] hover:bg-[#EFEBE3] border border-[#DDD8CC] transition-colors"
                      aria-label="Nasir Iqbal's Personal Portfolio Website"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#0F4C4C]" />
                      <span>Portfolio</span>
                    </a>

                    <a
                      href="https://github.com/nasirbhatti14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1C1C1C] bg-[#F7F5F0] hover:bg-[#EFEBE3] border border-[#DDD8CC] transition-colors"
                      aria-label="Nasir Iqbal on GitHub"
                    >
                      <Github className="w-3.5 h-3.5 text-[#0F4C4C]" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
