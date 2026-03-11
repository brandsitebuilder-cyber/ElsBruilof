import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function Schedule() {
  const { language } = useLanguage();
  const t = content[language].schedule;

  return (
    <section id="schedule" className="py-32 md:py-48 bg-brand-fill">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
            {t.subtitle}
          </h3>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-text uppercase tracking-[0.15em] mb-8">
            {t.title}
          </h2>
          <div className="w-px h-16 bg-brand-accent/50 mx-auto mb-20"></div>
          
          <div className="space-y-16">
            {t.items.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
                <div className="text-2xl md:text-3xl font-serif text-brand-text md:w-48 md:text-right tracking-widest">
                  {item.time}
                </div>
                <div className="hidden md:block w-px h-12 bg-brand-accent/30"></div>
                <div className="text-sm md:text-base font-light text-brand-text/70 uppercase tracking-[0.3em] md:w-64 md:text-left">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
