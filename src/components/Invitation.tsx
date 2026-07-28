import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function Invitation() {
  const { language } = useLanguage();
  const t = content[language].invitation;

  return (
    <section id="invitation" className="py-32 md:py-48 bg-brand-bg text-center relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center opacity-[0.03] pointer-events-none">
        <span className="font-serif text-[40vw] text-brand-text leading-none select-none">A&L</span>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-brand-text/60 mb-16">
          {t.intro}
        </p>
        
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-text mb-12 uppercase tracking-[0.15em] leading-tight">
          {t.names.split('&').map((name, i) => (
            <React.Fragment key={name}>
              {name.trim()}
              {i === 0 && <span className="block text-3xl md:text-5xl my-6 font-[Pinyon_Script] text-brand-accent normal-case tracking-normal">&</span>}
            </React.Fragment>
          ))}
        </h2>
        
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-brand-text mb-20 font-light">
          {t.action}
        </p>
        
        <div className="w-px h-24 bg-brand-accent/50 mx-auto mb-20"></div>
        
        <p className="text-lg md:text-xl font-light text-brand-text/80 mb-20 leading-[2] max-w-2xl mx-auto">
          {t.message}
        </p>
        
        <ul className="inline-flex flex-col items-start space-y-4 mb-20 text-left max-w-xl mx-auto">
          <li className="flex items-center space-x-3 text-sm md:text-base uppercase tracking-[0.25em] font-light text-brand-text">
            <span className="w-2 h-2 rounded-full bg-brand-accent flex-shrink-0"></span>
            <span>SATERDAG, 21 NOVEMBER 2026</span>
          </li>
          <li className="flex items-center space-x-3 text-sm md:text-base uppercase tracking-[0.25em] font-light text-brand-text">
            <span className="w-2 h-2 rounded-full bg-brand-accent flex-shrink-0"></span>
            <span>15:30 VIR 16:00</span>
          </li>
          <li className="flex items-center space-x-3 text-sm md:text-base uppercase tracking-[0.25em] font-light text-brand-text/90">
            <span className="w-2 h-2 rounded-full bg-brand-accent flex-shrink-0"></span>
            <span>LOCH LYNNE WYNLANDGOED, DURBANVILLE</span>
          </li>
          <li className="flex items-center space-x-3 text-xs md:text-sm uppercase tracking-[0.2em] font-light text-brand-text/80">
            <span className="w-2 h-2 rounded-full bg-brand-accent flex-shrink-0"></span>
            <span>KLEREDRAG: FORMELE ELEGANSIE ("BLACK TIE")</span>
          </li>
        </ul>

        {t.closing && (
          <p className="text-2xl md:text-3xl font-[Pinyon_Script] text-brand-text/80 mb-20">
            {t.closing}
          </p>
        )}
        
        <a 
          href="#details" 
          className="inline-block border border-brand-accent text-brand-text hover:bg-brand-accent hover:text-white transition-all duration-300 px-12 py-4 uppercase tracking-[0.2em] text-xs"
        >
          Besonderhede & RSVP
        </a>
      </motion.div>
    </section>
  );
}
