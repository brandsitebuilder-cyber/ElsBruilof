import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';

// Bold the word "swart" (case-insensitive) for dress-code emphasis
function highlightSwart(text: string) {
  return text.split(/(swart)/gi).map((part, i) =>
    /swart/i.test(part) ? <strong key={i} className="font-bold">{part}</strong> : part
  );
}

type Attendance = '' | 'alone' | 'withPartner';

type RsvpForm = {
  attendance: Attendance;
  name: string;
  partnerName: string;
  cellphone: string;
  email: string;
  mainCourse: string;
  dietary: string;
  partnerMainCourse: string;
  partnerDietary: string;
};

// Single source of truth for a blank form: used for the initial state and the
// "submit another RSVP" reset, so a new field can never be forgotten in one place.
const emptyForm: RsvpForm = {
  attendance: '',
  name: '',
  partnerName: '',
  cellphone: '',
  email: '',
  mainCourse: '',
  dietary: '',
  partnerMainCourse: '',
  partnerDietary: ''
};

export default function DetailsRSVP() {
  const { language } = useLanguage();
  const t = content[language].details;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formData, setFormData] = useState<RsvpForm>(emptyForm);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Loch Lynne Wine Estate, Koeberg Rd, Durbanville, Cape Town, 7550');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        if (!response.ok) {
          setError(data.error || t.form.genericError);
          return;
        }
      } else {
        if (!response.ok) {
          setError(t.form.networkError);
          return;
        }
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("RSVP Error:", err);
      setError(t.form.networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCellphoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, cellphone: value });
  };

  // "Ek kom alleen" clears anything already captured for a partner, so a phantom
  // partner meal can never be submitted or emailed for a solo guest.
  const updateAttendance = (value: Attendance) => {
    setFormData(prev => value === 'alone'
      ? { ...prev, attendance: value, partnerName: '', partnerMainCourse: '', partnerDietary: '' }
      : { ...prev, attendance: value });
  };

  return (
    <section id="details" className="pt-8 pb-24 md:pt-12 md:pb-36 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Dress Code Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 lg:col-start-2 space-y-12"
          >
            <div>
              <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4 whitespace-pre-line">
                {t.attireSubtitle}
              </h3>
              <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.15em] mb-8 inline-block bg-black text-brand-accent px-6 py-3">
                {highlightSwart(t.attireTitle)}
              </h2>
              <div className="w-12 h-[1px] bg-brand-accent mb-12"></div>
              
              <p className="text-brand-text/80 font-normal mb-8 leading-[2] text-sm md:text-base tracking-wide">
                {highlightSwart(t.attireIntro)}
              </p>
              <ul className="space-y-6 text-brand-text/70 font-light list-none">
                {t.attireList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-accent mr-4 mt-1">✦</span>
                    <span className="leading-[2] text-sm md:text-base tracking-wide">{highlightSwart(item)}</span>
                  </li>
                ))}
              </ul>

              {/* Dress code visual example */}
              <div className="mt-10 border border-brand-accent/30 bg-brand-fill p-4">
                <img 
                  src="/dress-code.png" 
                  alt="Kleredrag voorbeeld: swart formele drag"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <p className="text-center text-brand-text font-medium text-sm md:text-base tracking-wide mt-4 leading-relaxed">
                  {highlightSwart(t.attireReminder)}
                </p>
              </div>
            </div>

            {/* Venue & Directions Card */}
            <div className="pt-8 border-t border-brand-accent/20">
              <h3 className="font-[Pinyon_Script] text-3xl md:text-4xl text-brand-accent mb-2">
                Ligging
              </h3>
              <h4 className="font-serif text-xl text-brand-text uppercase tracking-widest mb-4">
                Loch Lynne Wynlandgoed
              </h4>
              <p className="text-brand-text/70 font-light text-xs md:text-sm tracking-wide leading-relaxed mb-6">
                Koeberg Rd, Durbanville, Kaapstad, 7550
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href="https://maps.google.com/?q=Loch+Lynne+Wine+Estate+Durbanville"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-brand-accent text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-brand-accent/90 transition-colors"
                >
                  <MapPin size={14} />
                  <span>Google Maps</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>

                <a 
                  href="https://waze.com/ul?q=Loch%20Lynne%20Wine%20Estate%20Durbanville"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 border border-brand-accent/60 text-brand-text px-4 py-2 text-xs uppercase tracking-widest hover:bg-brand-accent/10 transition-colors"
                >
                  <Navigation size={14} className="text-brand-accent" />
                  <span>Waze</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center space-x-1.5 border border-brand-accent/40 text-brand-text/80 px-3 py-2 text-xs uppercase tracking-widest hover:border-brand-accent transition-colors"
                  title="Kopieer adres"
                >
                  {copiedAddress ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  <span>{copiedAddress ? 'Gekopieer!' : 'Kopieer Adres'}</span>
                </button>
              </div>
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
            <div className="bg-brand-fill p-8 md:p-14 border border-brand-accent/20">
              {isSubmitted ? (
                <div>
                  <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
                    {language === 'en' ? 'Thank You' : 'Baie Dankie'}
                  </h3>
                  <h2 className="font-serif text-3xl md:text-4xl text-brand-text uppercase tracking-[0.15em] mb-8">
                    {language === 'en' ? 'RSVP Confirmed' : 'RSVP Bevestig'}
                  </h2>
                  <div className="w-12 h-[1px] bg-brand-accent mb-10"></div>

                  <div className="text-center py-10 px-6 border border-brand-accent/30 bg-brand-bg/50">
                    <p className="font-serif text-2xl text-brand-accent mb-3">
                      {t.thankYou}
                    </p>
                    <p className="text-brand-text/80 font-light tracking-wide text-sm md:text-base leading-relaxed">
                      {language === 'en'
                        ? 'Your RSVP has been successfully received. We look forward to celebrating this special day with you!'
                        : 'U RSVP is suksesvol ontvang. Ons sien baie uit daarna om hierdie spesiale dag saam met u te vier!'}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData(emptyForm);
                    }}
                    className="mt-8 text-xs uppercase tracking-widest text-brand-accent hover:underline font-light block mx-auto transition-all"
                  >
                    {language === 'en' ? 'Submit another RSVP' : 'Dien \'n ander RSVP in'}
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-[Pinyon_Script] text-4xl md:text-5xl text-brand-accent mb-4">
                    {t.rsvpSubtitle}
                  </h3>
                  <h2 className="font-serif text-3xl md:text-4xl text-brand-text uppercase tracking-[0.15em] mb-8">
                    {t.rsvpTitle}
                  </h2>
                  <div className="w-12 h-[1px] bg-brand-accent mb-10"></div>
                  
                  <div className="text-brand-text/80 font-light mb-10 leading-[2] text-sm md:text-base tracking-wide whitespace-pre-line">
                    {t.rsvpText}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Volle Naam */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-brand-text/70 font-medium">
                      {t.form.name} <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text text-sm" 
                    />
                  </div>

                  {/* Selfoonnommer */}
                  <div className="space-y-2">
                    <label htmlFor="cellphone" className="block text-xs uppercase tracking-[0.15em] text-brand-text/70 font-medium">
                      {t.form.cellphone} <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="cellphone" 
                      required 
                      placeholder="082 123 4567"
                      value={formData.cellphone}
                      onChange={handleCellphoneChange}
                      className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text text-sm placeholder:text-brand-text/30" 
                    />
                  </div>

                  {/* E-pos */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-brand-text/70 font-medium">
                      {t.form.email}
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text text-sm" 
                    />
                  </div>

                  {/* Bywoning: alleen of met 'n metgesel */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs uppercase tracking-[0.15em] text-brand-text/70 font-medium leading-relaxed">
                      {t.form.attendanceLabel} <span className="text-brand-accent">*</span>
                    </label>
                    <div className="space-y-3">
                      {([
                        { value: 'alone' as Attendance, label: t.form.attendanceAlone },
                        { value: 'withPartner' as Attendance, label: t.form.attendanceWithPartner }
                      ]).map((option) => (
                        <label key={option.value} className="flex items-start space-x-3 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="attendance"
                            required
                            value={option.value}
                            checked={formData.attendance === option.value}
                            onChange={() => updateAttendance(option.value)}
                            className="mt-1 accent-[#998357] cursor-pointer"
                          />
                          <span className="text-xs text-brand-text/80 font-light leading-relaxed group-hover:text-brand-text transition-colors">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* U hoofgereg-keuse */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs uppercase tracking-[0.15em] text-brand-text/70 font-medium leading-relaxed">
                      {formData.attendance === 'withPartner' ? t.form.guestMainCourseLabel : t.form.mainCourseLabel} <span className="text-brand-accent">*</span>
                    </label>
                    <div className="space-y-3">
                      {t.form.mainCourseOptions.map((option, index) => (
                        <label key={index} className="flex items-start space-x-3 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="mainCourse"
                            required
                            value={option}
                            checked={formData.mainCourse === option}
                            onChange={(e) => setFormData({ ...formData, mainCourse: e.target.value })}
                            className="mt-1 accent-[#998357] cursor-pointer"
                          />
                          <span className="text-xs text-brand-text/80 font-light leading-relaxed group-hover:text-brand-text transition-colors">
                            <strong className="font-semibold text-brand-text/90 mr-1">{index + 1}.</strong> {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Dieetvereistes */}
                  <div className="space-y-2 pt-2">
                    <label htmlFor="dietary" className="block text-xs uppercase tracking-[0.15em] text-brand-text/70 font-medium leading-relaxed">
                      {formData.attendance === 'withPartner' ? t.form.guestDietaryLabel : t.form.dietary}
                    </label>
                    <textarea 
                      id="dietary" 
                      rows={2}
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Metgesel se besonderhede — slegs wanneer "Ek bring 'n metgesel" gekies is */}
                  {formData.attendance === 'withPartner' && (
                    <>
                      <div className="border-t border-brand-accent/20 pt-6 mt-4 space-y-2">
                        <label htmlFor="partnerName" className="block text-xs uppercase tracking-[0.15em] text-brand-text/70 font-medium leading-relaxed">
                          {t.form.partnerName} <span className="text-brand-accent">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="partnerName" 
                          required
                          value={formData.partnerName}
                          onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                          className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text text-sm" 
                        />
                      </div>

                      <div className="border-t border-brand-accent/20 pt-6 mt-4 space-y-3">
                        <label className="block text-xs uppercase tracking-[0.15em] text-brand-text/70 font-medium leading-relaxed">
                          {t.form.partnerMainCourseLabel} <span className="text-brand-accent">*</span>
                        </label>
                        <div className="space-y-3">
                          {t.form.mainCourseOptions.map((option, index) => (
                            <label key={index} className="flex items-start space-x-3 cursor-pointer group">
                              <input 
                                type="radio" 
                                name="partnerMainCourse"
                                required
                                value={option}
                                checked={formData.partnerMainCourse === option}
                                onChange={(e) => setFormData({ ...formData, partnerMainCourse: e.target.value })}
                                className="mt-1 accent-[#998357] cursor-pointer"
                              />
                              <span className="text-xs text-brand-text/80 font-light leading-relaxed group-hover:text-brand-text transition-colors">
                                <strong className="font-semibold text-brand-text/90 mr-1">{index + 1}.</strong> {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Metgesel se dieetvereistes */}
                      <div className="space-y-2 pt-2">
                        <label htmlFor="partnerDietary" className="block text-xs uppercase tracking-[0.15em] text-brand-text/70 font-medium leading-relaxed">
                          {t.form.partnerDietary}
                        </label>
                        <textarea 
                          id="partnerDietary" 
                          rows={2}
                          value={formData.partnerDietary}
                          onChange={(e) => setFormData({ ...formData, partnerDietary: e.target.value })}
                          className="w-full border-b border-brand-text/20 bg-transparent py-2 focus:outline-none focus:border-brand-accent transition-colors font-light text-brand-text text-sm resize-none"
                        ></textarea>
                      </div>
                    </>
                  )}

                  {error && (
                    <p className="text-red-500 text-xs uppercase tracking-wider text-center pt-2">{error}</p>
                  )}

                  {/* Dress code reminder */}
                  <div className="border border-brand-accent/40 bg-brand-bg p-4 text-center">
                    <p className="text-brand-text font-medium text-sm tracking-wide leading-relaxed">
                      {highlightSwart(t.form.dressCodeNote)}
                    </p>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full border border-brand-accent text-brand-text hover:bg-brand-accent hover:text-white transition-all duration-300 py-4 uppercase tracking-[0.2em] text-xs mt-8 font-medium disabled:opacity-60 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Stuur tans...' : t.form.submit}
                  </button>
                </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
