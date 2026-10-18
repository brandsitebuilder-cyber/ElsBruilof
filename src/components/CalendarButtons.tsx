import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Calendar, Download, Check } from 'lucide-react';

export default function CalendarButtons() {
  const { language } = useLanguage();
  const [downloaded, setDownloaded] = useState(false);

  const labels = {
    af: {
      google: 'Google Kalender',
      ics: 'Apple / Outlook (.ics)',
      title: 'Voeg by Kalender'
    },
    en: {
      google: 'Google Calendar',
      ics: 'Apple / Outlook (.ics)',
      title: 'Add to Calendar'
    }
  };

  const t = labels[language] || labels.af;

  // Event details — 15:00 vir 15:30 SAST (UTC+2), guests seated by 15:30
  const eventTitle = 'Ané & Lourens Troue';
  const eventLocation = 'Loch Lynne Wine Estate, Durbanville';
  const eventDetails =
    'Saterdag, 21 November 2026 — 15:00 vir 15:30. Wees asseblief teen 15:30 in u sitplekke. Kleredrag: Slegs Swart (streng formeel).';

  // Google Calendar URL (13:00Z = 15:00 SAST)
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=20261121T130000Z/20261121T220000Z&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;

  // Generate .ics file for download
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ane and Lourens Wedding//ZA',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:ane-lourens-troue-20261121@elsbruilof.co.za',
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDetails}`,
      `LOCATION:${eventLocation}`,
      'DTSTART:20261121T130000Z',
      'DTEND:20261121T220000Z',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Ane_en_Lourens_Troue.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-3">
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 border border-brand-accent/60 text-brand-text hover:bg-brand-accent hover:text-white transition-all duration-300 px-5 py-2.5 uppercase tracking-widest text-[11px] font-light"
      >
        <Calendar size={14} className="text-brand-accent group-hover:text-white" />
        <span>{t.google}</span>
      </a>

      <button
        onClick={handleDownloadIcs}
        className="inline-flex items-center space-x-2 border border-brand-accent/60 text-brand-text hover:bg-brand-accent hover:text-white transition-all duration-300 px-5 py-2.5 uppercase tracking-widest text-[11px] font-light"
      >
        {downloaded ? <Check size={14} className="text-green-600" /> : <Download size={14} />}
        <span>{t.ics}</span>
      </button>
    </div>
  );
}
