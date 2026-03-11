import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = content[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.landing, href: '#landing' },
    { name: t.story, href: '#story' },
    { name: t.invitation, href: '#invitation' },
    { name: t.schedule, href: '#schedule' },
    { name: t.dressCode, href: '#details' },
    { name: t.accommodation, href: '#accommodation' },
    { name: t.thingsToDo, href: '#things-to-do' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 md:-ml-8 lg:-ml-16 xl:-ml-20">
            <a href="#landing" className="font-serif text-2xl tracking-widest text-brand-text whitespace-nowrap">A & L</a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] lg:text-xs uppercase tracking-[0.1em] xl:tracking-[0.2em] hover:text-brand-accent transition-colors whitespace-nowrap">
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-2 lg:space-x-3 text-[10px] lg:text-xs uppercase tracking-[0.1em] xl:tracking-[0.2em] pl-2 lg:pl-4 xl:pl-6">
              <button 
                onClick={() => setLanguage('en')} 
                className={`transition-colors ${language === 'en' ? 'text-brand-text border-b border-brand-accent' : 'text-brand-text/40 hover:text-brand-text'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('af')} 
                className={`transition-colors ${language === 'af' ? 'text-brand-text border-b border-brand-accent' : 'text-brand-text/40 hover:text-brand-text'}`}
              >
                AF
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-text">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-bg absolute top-full left-0 w-full shadow-md py-8 px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] hover:text-brand-accent transition-colors block"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 pt-6 border-t border-brand-text/10">
            <button 
              onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }} 
              className={`text-xs uppercase tracking-[0.2em] transition-colors ${language === 'en' ? 'text-brand-text border-b border-brand-accent' : 'text-brand-text/40 hover:text-brand-text'}`}
            >
              EN
            </button>
            <button 
              onClick={() => { setLanguage('af'); setIsMobileMenuOpen(false); }} 
              className={`text-xs uppercase tracking-[0.2em] transition-colors ${language === 'af' ? 'text-brand-text border-b border-brand-accent' : 'text-brand-text/40 hover:text-brand-text'}`}
            >
              AF
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
