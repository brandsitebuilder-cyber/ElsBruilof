import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function Gallery() {
  const { language } = useLanguage();
  const t = content[language].gallery;

  const galleryImages = [
    "https://drive.google.com/thumbnail?id=1sz67Qtxr0pcStWZ8YALxl4_Y3DjNjYwH&sz=w1000",
    "https://drive.google.com/thumbnail?id=1sZPD11696Z7w3johpbZ1-_9N6iM-TcFl&sz=w1000",
    "https://drive.google.com/thumbnail?id=1n3mpQNLxoudHwuPdda-sipkJyOJueP8b&sz=w1000",
    "https://drive.google.com/thumbnail?id=1ZJ5xP93qyMdntUbPlQQZlITTFZipifLT&sz=w1000",
    "https://drive.google.com/thumbnail?id=1Kc27A5dpUxm0g0ejaJgOu2x5uyzIPEKY&sz=w1000",
    "https://drive.google.com/thumbnail?id=15nwNbZlvVfg8KPlAh2_rKRRffugFw6FF&sz=w1000",
    "https://drive.google.com/thumbnail?id=1-ubc2_Ua5yLUDJMKw4vIsVJxx4W51l7v&sz=w1000",
    "https://drive.google.com/thumbnail?id=1sXK_B9BkMi8q6c8jSp5FrdC_XhuYnvo3&sz=w1000",
    "https://drive.google.com/thumbnail?id=1hn94cvDdF84uBaOw3Lt2Hzgab6fUhcYc&sz=w1000",
    "https://drive.google.com/thumbnail?id=1XF25Ncsuv6f_5avdWcin7sD3abH7FDv0&sz=w1000",
    "https://drive.google.com/thumbnail?id=1U84HDFdvwBkAIxO5gVVi-mBSzA8RbzyA&sz=w1000",
    "https://drive.google.com/thumbnail?id=1Tn1pEPiXAT-PYpz0t7yfRskZLc7B36KV&sz=w1000",
    "https://drive.google.com/thumbnail?id=1C7Ol3ZUKJTL0kfS0uwXN02GbEHTiBxg8&sz=w1000",
    "https://drive.google.com/thumbnail?id=144qGJiY4hW52MlkRUF44ztuF0F5w-Fn1&sz=w1000"
  ];

  return (
    <section id="gallery" className="py-32 md:py-48 bg-brand-bg text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
            {t.subtitle}
          </h3>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-text uppercase tracking-[0.15em] mb-8">
            {t.title}
          </h2>
          <div className="w-px h-16 bg-brand-accent/50 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          {galleryImages.map((src, i) => {
            // Create an asymmetrical layout
            let colSpan = "md:col-span-6";
            let marginTop = "";
            
            const patternIndex = i % 4;
            
            if (patternIndex === 0) {
              colSpan = "md:col-span-5 md:col-start-2";
            } else if (patternIndex === 1) {
              colSpan = "md:col-span-4 md:col-start-8";
              marginTop = "md:mt-32";
            } else if (patternIndex === 2) {
              colSpan = "md:col-span-6 md:col-start-1";
            } else if (patternIndex === 3) {
              colSpan = "md:col-span-4 md:col-start-8";
              marginTop = "md:-mt-32";
            }

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: (i % 4) * 0.2 }}
                className={`${colSpan} ${marginTop} overflow-hidden`}
              >
                <img 
                  src={src} 
                  alt={`Gallery ${i + 1}`} 
                  className="w-full h-auto hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
