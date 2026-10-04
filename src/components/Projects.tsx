import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import proteinFarmUiImage from '../assets/images/protein_farm_ui_1790550179044.jpg';

interface Project {
  id: string;
  title: string;
  clientSubtitle: string;
  tagline: string;
  description: string;
  liveUrl: string;
  tags: string[];
  highlights: string[];
  imageSrc: string;
}

export const Projects: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>('/protein-farm.jpg');

  const handleImageError = () => {
    if (currentImage === '/protein-farm.jpg') {
      setCurrentImage(proteinFarmUiImage);
    } else {
      setImageError(true);
    }
  };

  const projects: Project[] = [
    {
      id: 'protein-farm',
      title: 'Protein Farm',
      clientSubtitle: 'Noor Muhammad Protein Farm',
      tagline: 'Poultry Farm Commercial Platform for Eggs & Chicken Distribution',
      description:
        'A dedicated, modern poultry farm web platform developed to streamline the commercial sales and distribution of fresh farm eggs and healthy chickens. Designed with an accessible, high-performance catalog, clear product specifications, and direct client ordering channels.',
      liveUrl: 'https://noor-muhammad-protein-farm.netlify.app/',
      tags: ['Web Development', 'Commercial Agriculture', 'Responsive UI', 'Direct Ordering'],
      highlights: [
        'Organized product catalog for fresh poultry eggs & live chickens',
        'Direct WhatsApp & phone integration for instantaneous buyer inquiry',
        'Mobile-first responsive architecture optimized for all screen sizes',
        'Fast-loading frontend engineered for reliability across low-bandwidth networks',
      ],
      imageSrc: currentImage,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F7F5F0] border-t border-[#DDD8CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0F4C4C] uppercase mb-3">
            <span>Portfolio &amp; Case Studies</span>
            <span aria-hidden="true" className="text-[#7A9A8B]">·</span>
            <span>Delivered Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight font-display text-balance">
            Real software built for real businesses.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
            Take a look at production applications delivered by CoreSudo Labs, engineered with clean user interfaces, resilient codebases, and practical business utility.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#EFEBE3] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#DDD8CC] shadow-xs transition-all duration-300 hover:border-[#7A9A8B]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Visual Preview Column - Full view with slight zoom out and browser window mockup */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden border border-[#DDD8CC] bg-[#0c221e] shadow-md group">
                    
                    {/* Browser Mockup Chrome Bar */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#081714] border-b border-[#1f3e36]/60 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        <span className="ml-2 font-mono text-[11px] text-[#7A9A8B] truncate max-w-[200px] sm:max-w-none">
                          noor-muhammad-protein-farm.netlify.app
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#25D366] font-medium shrink-0">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                        <span className="hidden sm:inline">Live Deployment</span>
                      </div>
                    </div>

                    {/* Screenshot Frame - 100% Full View, Zoomed-Out with subtle padding */}
                    <div className="aspect-[1897/918] w-full overflow-hidden bg-[#0a1b18] p-1.5 sm:p-2.5 flex items-center justify-center">
                      {!imageError ? (
                        <img
                          src={project.imageSrc}
                          alt={`${project.title} - Poultry farm web platform preview`}
                          referrerPolicy="no-referrer"
                          onError={handleImageError}
                          className="w-full h-full object-contain rounded-lg transition-transform duration-500 scale-[0.98] group-hover:scale-[1]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#0a1b18] text-[#7A9A8B]">
                          <Layers className="w-12 h-12 mb-2 text-[#7A9A8B]" />
                          <span className="font-bold text-lg text-white">{project.title}</span>
                          <span className="text-xs text-[#a0b8b2]">Live Commercial Web Platform</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-6 text-left">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#7A9A8B] mb-1">
                      {project.clientSubtitle}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1C1C] font-display">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#0F4C4C] mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4A4A]">
                        <CheckCircle2 className="w-4 h-4 text-[#0F4C4C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium bg-[#F7F5F0] border border-[#DDD8CC] rounded-md text-[#1C1C1C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Direct Action Link */}
                  <div className="pt-4 border-t border-[#DDD8CC] flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#F7F5F0] bg-[#0F4C4C] hover:bg-[#0A3737] shadow-xs transition-colors duration-200"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4 text-[#7A9A8B]" />
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4A4A4A] hover:text-[#0F4C4C] transition-colors"
                    >
                      <span>Need a similar system?</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
