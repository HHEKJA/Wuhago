import React from 'react';
import { useLanguage } from '../App';

interface OrderMethodsProps {
  onOrderClick: () => void;
}

const OrderMethods: React.FC<OrderMethodsProps> = ({ onOrderClick }) => {
  const { t } = useLanguage();

  return (
    <section id="order" className="py-32 bg-background transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration to match other sections */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-surface to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-midnight/10 border border-midnight/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-midnight opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-midnight"></span>
            </span>
            <span className="text-midnight text-xs font-bold tracking-widest uppercase">{t.sensor.badge}</span>
          </div>
          
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{t.orderMethods.badge}</span>
          <h2 className="text-5xl font-display font-bold text-contrast mb-6">{t.orderMethods.title}</h2>
          <p className="text-dim text-lg max-w-2xl mx-auto">
            {t.orderMethods.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group relative block p-8 rounded-2xl bg-surface border border-border-line opacity-60 hover:opacity-100 hover:border-midnight/30 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl overflow-hidden text-left cursor-default">
            <div className="absolute top-4 right-4">
               <span className="material-symbols-outlined text-border-line group-hover:text-midnight/50 transition-colors">lock</span>
            </div>
            <div className="absolute -bottom-6 -right-6 text-[8rem] font-bold text-contrast/5 group-hover:text-midnight/5 transition-colors font-display">1</div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-background dark:bg-[#1A2C4E] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-dim group-hover:text-midnight shadow-sm border border-border-line">
                <span className="material-symbols-outlined text-3xl">language</span>
              </div>
              <h3 className="font-bold text-xl text-contrast mb-2">{t.orderMethods.web.title}</h3>
              <p className="text-base text-dim">{t.orderMethods.web.desc}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative block p-8 rounded-2xl bg-surface border border-border-line opacity-60 hover:opacity-100 hover:border-midnight/30 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl overflow-hidden text-left cursor-default">
             <div className="absolute top-4 right-4">
               <span className="material-symbols-outlined text-border-line group-hover:text-midnight/50 transition-colors">lock</span>
            </div>
            <div className="absolute -bottom-6 -right-6 text-[8rem] font-bold text-contrast/5 group-hover:text-midnight/5 transition-colors font-display">2</div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-background dark:bg-[#1A2C4E] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-dim group-hover:text-midnight shadow-sm border border-border-line">
                <span className="material-symbols-outlined text-3xl">dialpad</span>
              </div>
              <h3 className="font-bold text-xl text-contrast mb-2">{t.orderMethods.ussd.title}</h3>
              <p className="text-base text-dim">{t.orderMethods.ussd.desc}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative block p-8 rounded-2xl bg-surface border border-border-line opacity-60 hover:opacity-100 hover:border-midnight/30 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl overflow-hidden text-left cursor-default">
             <div className="absolute top-4 right-4">
               <span className="material-symbols-outlined text-border-line group-hover:text-midnight/50 transition-colors">lock</span>
            </div>
            <div className="absolute -bottom-6 -right-6 text-[8rem] font-bold text-contrast/5 group-hover:text-midnight/5 transition-colors font-display">3</div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-background dark:bg-[#1A2C4E] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-dim group-hover:text-midnight shadow-sm border border-border-line">
                <span className="material-symbols-outlined text-3xl">send</span>
              </div>
              <h3 className="font-bold text-xl text-contrast mb-2">{t.orderMethods.telegram.title}</h3>
              <p className="text-base text-dim">{t.orderMethods.telegram.desc}</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative block p-8 rounded-2xl bg-surface border border-border-line opacity-60 hover:opacity-100 hover:border-midnight/30 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl overflow-hidden text-left cursor-default">
             <div className="absolute top-4 right-4">
               <span className="material-symbols-outlined text-border-line group-hover:text-midnight/50 transition-colors">lock</span>
            </div>
            <div className="absolute -bottom-6 -right-6 text-[8rem] font-bold text-contrast/5 group-hover:text-midnight/5 transition-colors font-display">4</div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-background dark:bg-[#1A2C4E] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-dim group-hover:text-midnight shadow-sm border border-border-line">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <h3 className="font-bold text-xl text-contrast mb-2">{t.orderMethods.call.title}</h3>
              <p className="text-base text-dim">{t.orderMethods.call.desc}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
            <button 
                onClick={onOrderClick}
                className="group bg-surface border border-border-line hover:border-midnight hover:bg-midnight/5 text-contrast px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-midnight/20 flex items-center gap-3"
            >
                <span className="material-symbols-outlined text-midnight group-hover:scale-110 transition-transform">notifications</span>
                <span>{t.orderMethods.updateCta}</span>
            </button>
        </div>

        {/* Contact Us Section */}
        <div className="mt-24">
            <div className="bg-surface/40 dark:bg-surface/10 backdrop-blur-2xl border border-white/20 dark:border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                
                <div className="relative z-10 text-center">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-contrast mb-4">{t.orderMethods.contactUsTitle}</h3>
                     <p className="text-dim mb-10 max-w-xl mx-auto">{t.orderMethods.contactUsDesc}</p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                         <a href="tel:+251940888899" className="flex items-center gap-4 bg-background/60 hover:bg-background/90 border border-border-line rounded-2xl p-4 md:p-6 transition-all group/item w-full md:w-auto justify-center min-w-[280px] hover:scale-105 shadow-sm hover:shadow-lg">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div className="text-left">
                                <p className="text-dim text-xs font-bold uppercase tracking-wider">{t.orderMethods.callUs}</p>
                                <p className="text-contrast text-xl font-bold font-display">+251 94 088 8899</p>
                            </div>
                         </a>

                         <a href="mailto:info@wuhago.com" className="flex items-center gap-4 bg-background/60 hover:bg-background/90 border border-border-line rounded-2xl p-4 md:p-6 transition-all group/item w-full md:w-auto justify-center min-w-[280px] hover:scale-105 shadow-sm hover:shadow-lg">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div className="text-left">
                                <p className="text-dim text-xs font-bold uppercase tracking-wider">{t.orderMethods.emailUs}</p>
                                <p className="text-contrast text-xl font-bold font-display">info@wuhago.com</p>
                            </div>
                         </a>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default OrderMethods;