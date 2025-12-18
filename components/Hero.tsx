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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none animate-pulse-slow"></div>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      
      {/* Ripple Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/20 animate-ripple"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/20 animate-ripple" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/20 animate-ripple" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated Flowing Water Background */}
      {/* Blend modes adjusted: multiply for light background, screen for dark background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-accent/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-3 bg-surface border border-border-line rounded-full px-5 py-2 mb-10 backdrop-blur-md hover:bg-surface/80 transition-colors cursor-default shadow-sm">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm font-medium tracking-wide text-primary uppercase">{t.hero.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-7xl md:text-[9rem] font-bold mb-8 text-contrast leading-[0.9] tracking-tighter text-glow transition-all duration-700 hover:scale-[1.01] cursor-default">
          {t.hero.title}
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-xl text-dim mb-14 font-light leading-relaxed">
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
            className="border border-dim/20 hover:bg-surface text-contrast font-medium px-10 py-4 rounded-full text-lg transition-all flex items-center gap-3 hover:scale-105 group"
          >
            <span className="material-symbols-outlined text-primary group-hover:text-accent transition-colors">play_circle</span>
            {t.hero.watchDemo}
          </button>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;