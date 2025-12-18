import React from 'react';
import { useLanguage } from '../App';

interface SegmentsProps {
  onOrderClick: () => void;
}

const Segments: React.FC<SegmentsProps> = ({ onOrderClick }) => {
  const { t } = useLanguage();

  return (
    <section id="segments" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{t.segments.badge}</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-contrast mb-6">{t.segments.title}</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto md:mx-0"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Homes */}
          <div className="relative group rounded-3xl p-10 bg-surface border border-border-line hover:border-primary/40 shadow-xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full group-hover:from-primary/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-background dark:bg-[#1A2C4E] rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white shadow-sm">
                <span className="material-symbols-outlined text-3xl">home</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-contrast">{t.segments.homes.title}</h3>
              <p className="text-dim mb-10 h-24 leading-relaxed text-base group-hover:text-contrast transition-colors">
                {t.segments.homes.desc}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-border-line">
                <span className="text-sm font-bold font-mono text-primary uppercase tracking-wider">{t.segments.homes.price}</span>
                <button onClick={onOrderClick} className="w-10 h-10 rounded-full border border-border-line flex items-center justify-center text-contrast group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all hover:scale-110">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Businesses */}
          <div className="relative group rounded-3xl p-10 bg-surface border border-border-line hover:border-primary/40 shadow-xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full group-hover:from-accent/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-background dark:bg-[#1A2C4E] rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:bg-accent group-hover:text-white shadow-sm">
                <span className="material-symbols-outlined text-3xl">business</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-contrast">{t.segments.businesses.title}</h3>
              <p className="text-dim mb-10 h-24 leading-relaxed text-base group-hover:text-contrast transition-colors">
                {t.segments.businesses.desc}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-border-line">
                <span className="text-sm font-bold font-mono text-primary uppercase tracking-wider">{t.segments.businesses.price}</span>
                <button onClick={onOrderClick} className="w-10 h-10 rounded-full border border-border-line flex items-center justify-center text-contrast group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all hover:scale-110">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Institutions */}
          <div className="relative group rounded-3xl p-10 bg-surface border border-border-line hover:border-primary/40 shadow-xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full group-hover:from-purple-500/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-background dark:bg-[#1A2C4E] rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-500 group-hover:text-white shadow-sm">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-contrast">{t.segments.institutions.title}</h3>
              <p className="text-dim mb-10 h-24 leading-relaxed text-base group-hover:text-contrast transition-colors">
                {t.segments.institutions.desc}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-border-line">
                <span className="text-sm font-bold font-mono text-primary uppercase tracking-wider">{t.segments.institutions.price}</span>
                <button onClick={onOrderClick} className="w-10 h-10 rounded-full border border-border-line flex items-center justify-center text-contrast group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all hover:scale-110">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segments;