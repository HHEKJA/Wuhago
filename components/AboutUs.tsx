import React from 'react';
import { useLanguage } from '../App';

const AboutUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <div className="inline-block mb-6">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary pb-1">{t.aboutUs.badge}</span>
             </div>
             
             <p className="text-2xl md:text-4xl text-dim font-light leading-relaxed mb-8">
                {t.aboutUs.p1}
             </p>
             
             <p className="text-2xl md:text-4xl text-contrast font-display font-bold leading-relaxed mb-10">
                {t.aboutUs.p2}
             </p>
             
             <div className="w-24 h-1 bg-primary mx-auto mb-10 rounded-full opacity-50"></div>
             
             <p className="text-lg md:text-xl text-dim leading-relaxed max-w-3xl mx-auto">
                {t.aboutUs.p3}
             </p>
        </div>
    </section>
  )
}

export default AboutUs;