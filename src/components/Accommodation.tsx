import React from 'react';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { motion } from 'motion/react';

export default function Accommodation() {
  const { language } = useLanguage();
  const t = content[language].accommodation;

  return (
    <section id="accommodation" className="py-32 md:py-48 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {t.intro && (
            <p className="text-sm md:text-base font-light text-brand-text/70 max-w-3xl mx-auto leading-[2] tracking-wide">
              {t.intro}
            </p>
          )}
        </motion.div>

        {/* Accommodation Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 max-w-4xl mx-auto"
        >
          <div className="overflow-x-auto border border-brand-text/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-brand-text/20 bg-brand-fill/50 text-brand-text/70 uppercase tracking-[0.15em] text-xs">
                  {t.tableHeaders.map((header, i) => (
                    <th key={i} className="py-5 px-6 font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-light text-brand-text/80 text-sm tracking-wide divide-y divide-brand-text/10">
                {t.tableData.map((row, i) => (
                  <tr key={i} className="hover:bg-brand-fill/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-brand-text">{row[0]}</td>
                    <td className="py-4 px-6 text-brand-text/70">{row[1]}</td>
                    <td className="py-4 px-6">
                      <a href={`https://${row[2]}`} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline transition-all">
                        {row[2]}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start max-w-5xl mx-auto">
          {/* Vervoerwenke */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-brand-text uppercase tracking-[0.15em] mb-8">{t.transportTitle}</h3>
            <div className="w-12 h-[1px] bg-brand-accent mb-8"></div>
            <ul className="space-y-4 text-brand-text/70 font-light list-none">
              {t.transportList.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-brand-accent mr-4 mt-1">✦</span>
                  <span className="leading-[2] tracking-wide text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Aanbevole Pendeldienste */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-6"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-brand-text uppercase tracking-[0.15em] mb-8">{t.shuttleTitle}</h3>
            <div className="w-12 h-[1px] bg-brand-accent mb-8"></div>
            <div className="overflow-x-auto border border-brand-text/10">
              <table className="w-full text-left border-collapse">
                <tbody className="font-light text-brand-text/80 text-sm tracking-wide divide-y divide-brand-text/10">
                  {t.shuttleData.map((row, i) => (
                    <tr key={i} className="hover:bg-brand-fill/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-brand-text">{row[0]}</td>
                      <td className="py-3 px-4">
                        <a href={`https://${row[1]}`} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline transition-all">
                          {row[1]}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
