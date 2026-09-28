import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneRaw = '923059555630';
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(
    'Hello CoreSudo Labs! I would like to inquire about software development services.'
  )}`;

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#4A4A4A] flex flex-col font-sans selection:bg-[#0F4C4C] selection:text-[#F7F5F0]">
      {/* 1. Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. About Section (Company Bio & Founder Nasir Iqbal) */}
        <About />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Speed Dial */}
      <aside aria-label="Direct WhatsApp Contact">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group focus-visible:outline-2 focus-visible:outline-[#0F4C4C]"
          aria-label="Direct Chat on WhatsApp with CoreSudo Labs"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-semibold text-xs tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
