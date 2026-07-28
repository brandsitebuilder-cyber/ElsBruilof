import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const { language } = useLanguage();
  const t = content[language].gallery;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-32 md:py-48 bg-brand-bg text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
            {t.subtitle}
          </h3>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl text-brand-text uppercase tracking-[0.06em] sm:tracking-[0.15em] mb-8 break-words max-w-full">
            {t.title}
          </h2>
          <div className="w-px h-16 bg-brand-accent/50 mx-auto"></div>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 text-left">
          {galleryImages.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.15 }}
              onClick={() => openLightbox(i)}
              className="relative group cursor-pointer overflow-hidden bg-brand-fill/40 border border-brand-text/10 break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Verlowingsfoto ${i + 1}`} 
                className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Sluit"
            >
              <X size={24} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 text-white/70 text-xs tracking-widest uppercase font-light">
              {selectedIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev Button */}
            <button 
              onClick={showPrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Vorige"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Lightbox Image */}
            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] relative flex items-center justify-center overflow-hidden"
            >
              <img 
                src={galleryImages[selectedIndex]} 
                alt={`Verlowingsfoto ${selectedIndex + 1}`} 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Next Button */}
            <button 
              onClick={showNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Volgende"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
