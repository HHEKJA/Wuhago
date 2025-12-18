import React from 'react';
import { useLanguage } from '../App';

interface HeroProps {
  onGetStartedClick: () => void;
  onWatchDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick, onWatchDemoClick }) => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background transition-colors duration-300">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Water Delivery Truck" 
            className="w-full h-full object-cover"
         />
         {/* Light Overlay for Text Readability matching the screenshot */}
         <div className="absolute inset-0 bg-white/80 dark:bg-black/60 backdrop-blur-[2px]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90 dark:from-black/90 dark:to-black/90"></div>
         
         {/* Radial gradient to focus center */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-3 bg-surface/80 border border-primary/20 rounded-full px-5 py-2 mb-8 backdrop-blur-md shadow-sm">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm font-bold tracking-wide text-primary uppercase">{t.hero.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold mb-6 text-midnight dark:text-white leading-[0.85] tracking-tighter drop-shadow-sm">
          {t.hero.title}
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-contrast/80 mb-12 font-medium leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button 
            onClick={onGetStartedClick}
            className="bg-primary text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-accent hover:shadow-[0_0_30px_rgba(55,185,199,0.4)] transition-all flex items-center gap-3 group hover:scale-105"
          >
            {t.hero.getStarted}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          
          <button 
            onClick={onWatchDemoClick}
            className="bg-white/50 dark:bg-black/50 backdrop-blur-md border border-contrast/10 text-contrast font-bold px-10 py-4 rounded-full text-lg transition-all flex items-center gap-3 hover:scale-105 group hover:bg-white/80 dark:hover:bg-black/80"
          >
            <span className="material-symbols-outlined text-primary group-hover:text-accent transition-colors">play_circle</span>
            {t.hero.watchDemo}
          </button>
        </div>
      </div>
      
      {/* Bottom Fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default Hero;