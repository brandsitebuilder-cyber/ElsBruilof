import React, { useEffect } from 'react';
import Accommodation from '../components/Accommodation';
import ThingsToDo from '../components/ThingsToDo';
import FAQ from '../components/FAQ';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';

export default function Details() {
  const { language } = useLanguage();
  const t = content[language].nav;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="font-serif text-4xl md:text-6xl tracking-widest text-brand-text mb-4 uppercase">
          {t.accommodation} & {t.thingsToDo}
        </h1>
        <div className="w-24 h-px bg-brand-accent mx-auto"></div>
      </div>
      <Accommodation />
      <ThingsToDo />
      <FAQ />
    </div>
  );
}
