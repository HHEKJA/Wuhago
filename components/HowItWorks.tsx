import React from 'react';
import { useLanguage } from '../App';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-32 bg-surface relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
           <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{t.howItWorks.badge}</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-contrast mb-6">{t.howItWorks.title}</h2>
           <p className="text-dim text-lg max-w-2xl mx-auto">
             {t.howItWorks.subtitle}
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[16%] w-[68%] h-0.5 bg-gradient-to-r from-transparent via-border-line to-transparent z-0"></div>

           {/* Step 1 */}
           <div className="relative z-10 text-center group">
              <div className="w-24 h-24 mx-auto bg-background border border-border-line rounded-full flex items-center justify-center text-4xl font-display font-bold text-primary mb-8 shadow-lg group-hover:scale-110 group-hover:border-primary group-hover:text-white group-hover:bg-primary transition-all duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold text-contrast mb-4">{t.howItWorks.step1}</h3>
              <p className="text-dim leading-relaxed px-4">
                {t.howItWorks.step1Desc}
              </p>
           </div>

           {/* Step 2 */}
           <div className="relative z-10 text-center group">
              <div className="w-24 h-24 mx-auto bg-background border border-border-line rounded-full flex items-center justify-center text-4xl font-display font-bold text-primary mb-8 shadow-lg group-hover:scale-110 group-hover:border-primary group-hover:text-white group-hover:bg-primary transition-all duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold text-contrast mb-4">{t.howItWorks.step2}</h3>
              <p className="text-dim leading-relaxed px-4">
                {t.howItWorks.step2Desc}
              </p>
           </div>

           {/* Step 3 */}
           <div className="relative z-10 text-center group">
              <div className="w-24 h-24 mx-auto bg-background border border-border-line rounded-full flex items-center justify-center text-4xl font-display font-bold text-primary mb-8 shadow-lg group-hover:scale-110 group-hover:border-primary group-hover:text-white group-hover:bg-primary transition-all duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold text-contrast mb-4">{t.howItWorks.step3}</h3>
              <p className="text-dim leading-relaxed px-4">
                {t.howItWorks.step3Desc}
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;