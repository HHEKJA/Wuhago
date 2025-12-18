import React from 'react';
import { useLanguage } from '../App';

interface SensorProps {
  onViewSpecsClick: () => void;
}

const Sensor: React.FC<SensorProps> = ({ onViewSpecsClick }) => {
  const { t } = useLanguage();

  return (
    <section id="sensor" className="py-32 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,153,255,0.15)_0%,rgba(5,11,25,0)_60%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        {/* Left: Graphic */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="relative w-full aspect-square max-w-lg mx-auto hover:scale-105 transition-transform duration-700">
            {/* Outer Rings */}
            <div className="absolute inset-0 rounded-full border border-border-line flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-midnight/30 border-t-transparent animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-border-line"></div>
              
              {/* Inner Circle Main */}
              <div className="w-[75%] h-[75%] rounded-full bg-gradient-to-br from-surface to-background shadow-[0_0_80px_rgba(9,87,91,0.2)] border border-border-line flex items-center justify-center relative z-10 group">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_50%)]"></div>
                
                {/* Center Content */}
                <div className="w-1/2 h-1/2 rounded-full bg-background dark:bg-[#081020] shadow-inner flex items-center justify-center border border-border-line group-hover:border-midnight/50 transition-colors">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-midnight text-6xl block mb-2 animate-pulse shadow-primary">hourglass_top</span>
                    <span className="text-sm font-mono text-midnight tracking-widest uppercase">{t.sensor.badge}</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Status Cards */}
              <div className="absolute top-12 right-0 bg-surface/90 backdrop-blur-md border border-border-line p-5 rounded-xl shadow-xl transform translate-x-4 -translate-y-4 animate-float">
                <div className="text-sm text-dim uppercase tracking-wider mb-1">{t.sensor.status}</div>
                <div className="text-xl font-bold text-midnight font-mono">{t.sensor.dev}</div>
              </div>
              
              <div className="absolute bottom-20 left-0 bg-surface/90 backdrop-blur-md border border-border-line p-5 rounded-xl shadow-xl transform -translate-x-4 translate-y-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-sm text-dim uppercase tracking-wider mb-1">{t.sensor.release}</div>
                <div className="text-lg font-bold text-contrast font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-midnight shadow-[0_0_10px_rgba(9,87,91,0.5)]"></span> Q4 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <span className="text-midnight font-mono text-sm tracking-[0.2em] uppercase mb-4 block">{t.sensor.badge}</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-contrast mb-8">{t.sensor.title}</h2>
          <p className="text-dim text-lg md:text-xl mb-12 leading-relaxed font-light">
            {t.sensor.desc}
          </p>
          
          <ul className="space-y-6 mb-12">
            <li className="flex items-start text-dim hover:text-contrast transition-colors">
              <div className="bg-surface p-1 rounded-full mr-4 text-dim">
                <span className="material-symbols-outlined text-lg">check</span>
              </div>
              <span className="text-base">{t.sensor.feature1}</span>
            </li>
            <li className="flex items-start text-dim hover:text-contrast transition-colors">
              <div className="bg-surface p-1 rounded-full mr-4 text-dim">
                <span className="material-symbols-outlined text-lg">check</span>
              </div>
              <span className="text-base">{t.sensor.feature2}</span>
            </li>
            <li className="flex items-start text-dim hover:text-contrast transition-colors">
              <div className="bg-surface p-1 rounded-full mr-4 text-dim">
                <span className="material-symbols-outlined text-lg">check</span>
              </div>
              <span className="text-base">{t.sensor.feature3}</span>
            </li>
          </ul>
          
          <button 
            onClick={onViewSpecsClick}
            className="bg-midnight text-white font-bold px-8 py-4 rounded-xl hover:bg-midnight/90 transition-all inline-flex items-center gap-2 hover:scale-105 shadow-lg shadow-midnight/20"
          >
            {t.sensor.cta}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sensor;