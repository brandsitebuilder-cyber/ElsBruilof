import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { Gift, ExternalLink, Copy, Check, Lock } from 'lucide-react';

export default function Registry() {
  const { language } = useLanguage();
  const t = content[language].registry;
  const [copied, setCopied] = useState(false);

  const handleCopyPassword = () => {
    navigator.clipboard.writeText("Kombuistee");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="registry" className="py-20 md:py-28 bg-brand-bg relative overflow-hidden border-t border-brand-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-accent block mb-3 font-medium">
            {t.subtitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-text font-normal tracking-wide">
            {t.title}
          </h2>
          <div className="w-16 h-px bg-brand-accent/30 mx-auto mt-6"></div>
        </div>

        {/* Introduction text */}
        <p className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto font-light leading-relaxed mb-10">
          {t.description}
        </p>

        {/* Registry Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-brand-accent/20 rounded-2xl p-8 md:p-12 shadow-sm max-w-xl mx-auto text-left relative">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-brand-accent/10">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-brand-accent/10 rounded-full text-brand-accent">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-brand-text font-medium">
                  Ané & Lourens Gift Registry
                </h3>
                <p className="text-xs text-brand-muted tracking-wider uppercase mt-0.5">
                  MyRegistry.com
                </p>
              </div>
            </div>
          </div>

          {/* Password info box */}
          <div className="bg-brand-bg/80 border border-brand-accent/20 rounded-xl p-5 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Lock className="w-4 h-4 text-brand-accent" />
                <div>
                  <span className="text-xs text-brand-muted block uppercase tracking-wider">
                    {t.passwordLabel}
                  </span>
                  <span className="font-mono text-base font-semibold text-brand-text tracking-wide">
                    Kombuistee
                  </span>
                </div>
              </div>
              <button
                onClick={handleCopyPassword}
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-brand-accent hover:bg-brand-accent/10 rounded-lg transition-colors border border-brand-accent/30"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-600">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copyPassword}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action Button */}
          <a
            href="https://www.myregistry.com/giftlist/anesoontobeels"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 py-4 px-6 bg-brand-accent text-white rounded-xl font-medium tracking-wider uppercase text-xs hover:bg-brand-accent/90 transition-all shadow-md hover:shadow-lg group"
          >
            <span>{t.openRegistry}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <p className="text-xs text-center text-brand-muted mt-4 font-light">
            {t.note}
          </p>
        </div>

      </div>
    </section>
  );
}
