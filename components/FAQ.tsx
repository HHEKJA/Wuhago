import React, { useState } from 'react';
import { useLanguage } from '../App';

interface FAQProps {
  onContactClick: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onContactClick }) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-surface/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-contrast tracking-wide uppercase">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-background border border-border-line rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>
                    play_arrow
                  </span>
                  <span className="font-bold text-contrast text-lg group-hover:text-primary transition-colors">
                    {item.q}
                  </span>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 pl-14 text-dim leading-relaxed border-t border-transparent">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={onContactClick}
            className="inline-flex items-center gap-2 text-contrast font-bold border-b-2 border-primary pb-1 hover:text-primary hover:border-accent transition-all"
          >
            {t.faq.cta}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;