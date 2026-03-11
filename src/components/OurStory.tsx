import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { images } from '../assets';
import { motion } from 'motion/react';

export default function OurStory() {
  const { language } = useLanguage();
  const t = content[language].story;

  return (
    <section id="story" className="py-32 md:py-48 bg-brand-fill">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={images.story} 
                alt="Our Story" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 space-y-12 flex flex-col items-center"
          >
            <div className="text-center">
              <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
                {t.subtitle}
              </h3>
              <h2 className="font-serif text-4xl md:text-6xl text-brand-text uppercase tracking-[0.15em] mb-8">
                {t.title}
              </h2>
              <div className="w-12 h-[1px] bg-brand-accent mx-auto mb-12"></div>
            </div>
            
            <div className="space-y-8 text-brand-text/70 leading-[2] font-light text-sm md:text-base tracking-wide text-justify [text-align-last:center]">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
              <p className="font-serif italic text-brand-text text-lg text-center">{t.p4}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
