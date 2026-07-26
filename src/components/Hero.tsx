import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { images } from '../assets';
import { motion } from 'motion/react';

export default function Hero() {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section id="landing" className="relative h-screen flex items-end pb-24 md:items-center md:pb-0 justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={images.hero} 
          alt="Ané & Lourens" 
          className="w-full h-full object-cover object-[center_30%] md:object-[center_40%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center text-white px-4 flex flex-col items-center"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-10 drop-shadow-lg">
          {t.names.split('&').map((name, i) => (
            <React.Fragment key={name}>
              {name.trim()}
              {i === 0 && <span className="block text-3xl md:text-5xl my-2 font-light italic text-brand-accent">&</span>}
            </React.Fragment>
          ))}
        </h1>
        {t.date && (
          <p className="text-sm md:text-lg uppercase tracking-[0.3em] mb-4 font-light drop-shadow-md">
            {t.date}
          </p>
        )}
        {t.venue && (
          <p className="text-xs md:text-sm uppercase tracking-widest mb-12 font-light drop-shadow-md">
            {t.venue}
          </p>
        )}
        <a 
          href="#details" 
          className="inline-block border border-brand-accent text-white hover:bg-brand-accent hover:text-brand-bg transition-all duration-300 px-10 py-4 uppercase tracking-widest text-sm"
        >
          {t.rsvpBtn}
        </a>
      </motion.div>
    </section>
  );
}
