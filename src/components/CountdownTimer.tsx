import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

export default function CountdownTimer() {
  const { language } = useLanguage();

  const labels = {
    af: {
      days: 'Dae',
      hours: 'Ure',
      minutes: 'Minute',
      seconds: 'Sekondes',
      title: 'Aftelling na die Troudag'
    },
    en: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      title: 'Countdown to the Wedding'
    }
  };

  const t = labels[language] || labels.af;

  // Target date: 21 November 2026, 15:30 SAST (UTC+2)
  const targetDate = new Date('2026-11-21T15:30:00+02:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="my-12 py-8 px-6 border-y border-brand-accent/20 max-w-2xl mx-auto">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-text/60 mb-6 font-light">
        {t.title}
      </p>
      <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl sm:text-5xl text-brand-text font-normal tracking-tight">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-accent mt-2 font-light">
            {t.days}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl sm:text-5xl text-brand-text font-normal tracking-tight">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-accent mt-2 font-light">
            {t.hours}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl sm:text-5xl text-brand-text font-normal tracking-tight">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-accent mt-2 font-light">
            {t.minutes}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl sm:text-5xl text-brand-text font-normal tracking-tight">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-accent mt-2 font-light">
            {t.seconds}
          </span>
        </div>
      </div>
    </div>
  );
}
