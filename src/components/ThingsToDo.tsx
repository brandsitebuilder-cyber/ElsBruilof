import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function ThingsToDo() {
  const { language } = useLanguage();
  const t = content[language].thingsToDo;

  return (
    <section id="things-to-do" className="py-32 md:py-48 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
            {t.subtitle}
          </h3>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-text uppercase tracking-[0.15em] mb-8">
            {t.title}
          </h2>
          <div className="w-px h-16 bg-brand-accent/50 mx-auto mb-16"></div>
          <p className="font-light text-brand-text/70 leading-[2] tracking-wide text-sm md:text-base max-w-2xl mx-auto">
            {t.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {t.list.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="border-l border-brand-accent/30 pl-6"
            >
              <h4 className="font-serif text-lg text-brand-text mb-3 tracking-wide">{item.name}</h4>
              <p className="font-light text-sm text-brand-text/60 leading-[2] tracking-wide">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
