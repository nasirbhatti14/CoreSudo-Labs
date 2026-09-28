import React from 'react';
import { 
  Globe, 
  Server, 
  Bot, 
  Boxes, 
  ArrowRight,
  Database,
  Code,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  capabilities: string[];
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'web-dev',
      number: '01',
      icon: Globe,
      title: 'Web Development',
      description:
        'Modern, high-performance responsive web applications engineered for speed, clean UX, and cross-device compatibility. We build accessible, fast-loading client interfaces using modern frontend frameworks and robust state architectures.',
      capabilities: [
        'Single-Page Applications (SPA) & Portals',
        'Responsive, Mobile-First Interfaces',
        'Performance & Core Web Vitals Optimization',
        'Headless CMS & Dynamic Content Systems',
      ],
    },
    {
      id: 'backend-api',
      number: '02',
      icon: Server,
      title: 'Backend & API Development',
      description:
        'Resilient server architectures, high-throughput REST and GraphQL APIs, and reliable database structures. Built with Python, Node.js, and cloud-native standards to ensure secure, concurrent, and fault-tolerant operations.',
      capabilities: [
        'RESTful & GraphQL API Design',
        'Python (FastAPI, Django, Flask) & Node.js',
        'Relational & Document Database Schema Design',
        'Authentication, Security & Microservices',
      ],
    },
    {
      id: 'ai-automation',
      number: '03',
      icon: Bot,
      title: 'AI & Automation Solutions',
      description:
        'Intelligent process automations, LLM pipeline integrations, and custom autonomous agents designed to eliminate repetitive operational tasks and extract valuable insights from your organizational data.',
      capabilities: [
        'LLM & Generative AI Model Integrations',
        'Automated Data Extraction & ETL Pipelines',
        'Custom Workflow & Task Automations',
        'Internal Operational Bots & Assistants',
      ],
    },
    {
      id: 'custom-software',
      number: '04',
      icon: Boxes,
      title: 'Custom Software Development',
      description:
        'Tailored end-to-end software systems designed specifically around your business workflows. We transform complex functional requirements into maintainable, well-documented, and production-ready applications.',
      capabilities: [
        'End-to-End System Architecture',
        'Legacy Modernization & Tool Integration',
        'Enterprise Business Process Management',
        'Comprehensive Code Audits & Maintenance',
      ],
    },
  ];

  const handleConsultService = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const top = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: 'smooth',
      });
      // Optionally trigger custom event or let user know
      const messageField = document.getElementById('contact-message') as HTMLTextAreaElement | null;
      if (messageField && !messageField.value) {
        messageField.value = `Hi CoreSudo Labs, I am interested in discussing your ${serviceTitle} services for our project.`;
        messageField.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F7F5F0] border-t border-[#DDD8CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0F4C4C] uppercase mb-3">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true" className="text-[#7A9A8B]">·</span>
            <span>Client Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight font-display text-balance">
            Comprehensive software development tailored to your operational scale.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] leading-relaxed">
            From single-page web applications to distributed backend systems and autonomous AI workflows, we engineer purpose-built software with uncompromising code quality.
          </p>
        </div>

        {/* Services Grid (2x2 layout on desktop with single elevation depth) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#EFEBE3] rounded-2xl p-8 sm:p-10 border border-[#DDD8CC] transition-all duration-300 hover:border-[#7A9A8B] hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top card row: Icon + Editorial Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#F7F5F0] border border-[#DDD8CC] flex items-center justify-center text-[#0F4C4C] group-hover:bg-[#0F4C4C] group-hover:text-[#F7F5F0] transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#7A9A8B] tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#0F4C4C] transition-colors font-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4A4A4A] leading-relaxed text-sm sm:text-base mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Core Capabilities List */}
                  <div className="pt-4 border-t border-[#DDD8CC] mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#1C1C1C] mb-3">
                      Key Deliverables &amp; Focus
                    </div>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4A4A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7A9A8B] mt-1.5 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Interactive Card Action: Connect regarding this service */}
                <div className="pt-4 border-t border-[#DDD8CC]/70 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleConsultService(service.title)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F4C4C] hover:text-[#0A3737] group-hover:underline underline-offset-4 transition-all cursor-pointer"
                  >
                    <span>Inquire about {service.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Commitment Banner */}
        <div className="mt-16 rounded-2xl bg-[#EFEBE3] border border-[#DDD8CC] p-8 sm:p-10 text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F4C4C] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Engineering Standards</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1C1C1C] font-display">
                Need a dedicated technical partner for your next milestone?
              </h4>
              <p className="mt-2 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                Whether starting from zero or scaling an existing production codebase, CoreSudo Labs provides direct engineering collaboration without layers of middlemen.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <button
                type="button"
                onClick={() => handleConsultService('Custom Engineering')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#F7F5F0] bg-[#0F4C4C] hover:bg-[#0A3737] shadow-xs transition-colors cursor-pointer w-full sm:w-auto"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#7A9A8B]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
