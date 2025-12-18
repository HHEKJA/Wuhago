import React from 'react';
import { useLanguage } from '../App';

const Features: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="why-choose-us" className="py-32 bg-background relative transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-contrast mb-6">{t.features.titlePrefix} <span className="text-primary">{t.features.titleHighlight}</span></h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1: Fast Delivery */}
          <div className="glass-card p-10 rounded-2xl hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(55,185,199,0.1)]">
            <div className="mb-8 inline-flex p-4 rounded-full bg-background dark:bg-[#1A2C4E] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-black/5 dark:shadow-black/20 group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-contrast">{t.features.fastDelivery}</h3>
            <p className="text-dim leading-relaxed text-base group-hover:text-contrast transition-colors">
              {t.features.fastDeliveryDesc}
            </p>
          </div>
          
          {/* Feature 2: Pure Quality */}
          <div className="glass-card p-10 rounded-2xl hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(55,185,199,0.1)]">
            <div className="mb-8 inline-flex p-4 rounded-full bg-background dark:bg-[#1A2C4E] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-black/5 dark:shadow-black/20 group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">water_drop</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-contrast">{t.features.pureQuality}</h3>
            <p className="text-dim leading-relaxed text-base group-hover:text-contrast transition-colors">
              {t.features.pureQualityDesc}
            </p>
          </div>
          
          {/* Feature 3: Easy Payment */}
          <div className="glass-card p-10 rounded-2xl hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(55,185,199,0.1)]">
            <div className="mb-8 inline-flex p-4 rounded-full bg-background dark:bg-[#1A2C4E] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-black/5 dark:shadow-black/20 group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">payments</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-contrast">{t.features.easyPayment}</h3>
            <p className="text-dim leading-relaxed text-base group-hover:text-contrast transition-colors">
              {t.features.easyPaymentDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;