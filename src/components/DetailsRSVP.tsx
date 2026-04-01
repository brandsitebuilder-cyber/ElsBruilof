import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function DetailsRSVP() {
  const { language } = useLanguage();
  const t = content[language].details;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    cellphone: '',
    dietary: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Check if the response is JSON before reading it
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        if (!response.ok) {
          setError(data.error || t.form.genericError);
          return;
        }
      } else {
        // Handle non-JSON responses (like 404 or 500 HTML pages)
        if (!response.ok) {
          setError(t.form.networkError);
          return;
        }
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("RSVP Error:", err);
      setError(t.form.networkError);
    }
  };

  const handleCellphoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    setFormData({ ...formData, cellphone: value });
  };

  return (
    <section id="details" className="py-32 md:py-48 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 lg:col-start-2 space-y-24"
          >
            <div>
              <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
                {t.attireSubtitle}
              </h3>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-text uppercase tracking-[0.15em] mb-8">
                {t.attireTitle}
              </h2>
              <div className="w-12 h-[1px] bg-brand-accent mb-12"></div>
              
              <p className="text-brand-text/70 font-light mb-8 leading-[2] text-sm md:text-base tracking-wide">{t.attireIntro}</p>
              <ul className="space-y-4 text-brand-text/70 font-light list-none">
                {t.attireList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-accent mr-4 mt-1">✦</span>
                    <span className="leading-[2] text-sm md:text-base tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
                {t.dietarySubtitle}
              </h3>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-text uppercase tracking-[0.15em] mb-8">
                {t.dietaryTitle}
              </h2>
              <div className="w-12 h-[1px] bg-brand-accent mb-12"></div>
              <p className="text-brand-text/70 font-light leading-[2] text-sm md:text-base tracking-wide">{t.dietaryText}</p>
            </div>
          </motion.div>

          {/* RSVP Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-brand-fill p-10 md:p-16">
              <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
                {t.rsvpSubtitle}
              </h3>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-text uppercase tracking-[0.15em] mb-8">
                {t.rsvpTitle}
              </h2>
              <div className="w-12 h-[1px] bg-brand-accent mb-12"></div>
              
              <p className="text-brand-text/70 font-light mb-12 leading-[2] text-sm md:text-base tracking-wide">{t.rsvpText}</p>

              {isSubmitted ? (
                <div className="text-center py-12 border border-brand-accent/20">
                  <h3 className="font-[Pinyon_Script] text-4xl text-brand-accent mb-4">{t.thankYou}</h3>
                  <p className="text-brand-text/70 font-light tracking-wide uppercase text-xs">
                    {language === 'en' ? "Your RSVP has been received." : "U RSVP is ontvang."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      placeholder=" " 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="peer w-full border-b border-brand-text/20 bg-transparent py-3 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text placeholder-transparent" 
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs uppercase tracking-[0.2em] text-brand-text/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-accent">{t.form.name}</label>
                  </div>

                  <div className="relative">
                    <input 
                      type="tel" 
                      id="cellphone" 
                      required 
                      placeholder={t.form.cellphonePlaceholder}
                      value={formData.cellphone}
                      onChange={handleCellphoneChange}
                      className="peer w-full border-b border-brand-text/20 bg-transparent py-3 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text placeholder-transparent" 
                    />
                    <label htmlFor="cellphone" className="absolute left-0 -top-3.5 text-xs uppercase tracking-[0.2em] text-brand-text/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-accent">{t.form.cellphone}</label>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="text" 
                      id="dietary" 
                      placeholder=" " 
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      className="peer w-full border-b border-brand-text/20 bg-transparent py-3 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text placeholder-transparent" 
                    />
                    <label htmlFor="dietary" className="absolute left-0 -top-3.5 text-xs uppercase tracking-[0.2em] text-brand-text/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-accent">{t.form.dietary}</label>
                  </div>
                  
                  <div className="relative">
                    <textarea 
                      id="message" 
                      rows={1} 
                      placeholder=" " 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="peer w-full border-b border-brand-text/20 bg-transparent py-3 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text placeholder-transparent resize-none"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs uppercase tracking-[0.2em] text-brand-text/50 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-accent">{t.form.message}</label>
                  </div>
                  
                  {error && (
                    <p className="text-red-500 text-xs uppercase tracking-wider text-center">{error}</p>
                  )}

                  <button type="submit" className="w-full border border-brand-accent text-brand-text hover:bg-brand-accent hover:text-white transition-all duration-300 py-4 uppercase tracking-[0.2em] text-xs mt-12">
                    {t.form.submit}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
