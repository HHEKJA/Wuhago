import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';

interface NavbarProps {
  onOrderClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onLogoClick: () => void;
  user: { name: string } | null;
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onOrderClick, 
  onLoginClick, 
  onLogoutClick, 
  onLogoClick,
  user, 
  toggleTheme, 
  isDark 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border-line py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center group z-50" onClick={(e) => { e.preventDefault(); onLogoClick(); setIsMobileMenuOpen(false); }}>
              <div className="grid grid-cols-1 grid-rows-1">
                <img 
                  src="https://i.ibb.co/68yM8g7/Logo-2.png" 
                  alt="Wuhago" 
                  className={`col-start-1 row-start-1 h-12 w-auto transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`} 
                />
                <img 
                  src="cap-04.png" 
                  alt="Wuhago" 
                  className={`col-start-1 row-start-1 h-12 w-auto transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`} 
                />
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-10 items-center">
              <button onClick={() => scrollTo('segments')} className="text-base font-medium text-dim hover:text-primary transition-colors hover:scale-105 transform duration-200">{t.nav.segments}</button>
              <button onClick={() => scrollTo('sensor')} className="text-base font-medium text-dim hover:text-primary transition-colors hover:scale-105 transform duration-200">{t.nav.sensor}</button>
              <button onClick={() => scrollTo('how-it-works')} className="text-base font-medium text-dim hover:text-primary transition-colors hover:scale-105 transform duration-200">{t.nav.howItWorks}</button>
              <button onClick={() => scrollTo('about')} className="text-base font-medium text-dim hover:text-primary transition-colors hover:scale-105 transform duration-200">{t.nav.about}</button>
            </div>
            
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Language Switcher */}
              <button 
                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-surface border border-transparent hover:border-border-line transition-all text-sm font-bold text-contrast"
              >
                <span className={`material-symbols-outlined text-lg ${language === 'en' ? 'text-primary' : 'text-dim'}`}>language</span>
                <span>{language === 'en' ? 'EN' : 'አማ'}</span>
              </button>

              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-surface transition-colors text-dim hover:text-contrast mr-1"
                aria-label="Toggle theme"
              >
                <span className="material-symbols-outlined block">{isDark ? 'light_mode' : 'dark_mode'}</span>
              </button>

              {user ? (
                 <div className="flex items-center gap-4 pl-2">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-contrast hidden lg:block">{user.name}</span>
                   </div>
                   <button 
                    onClick={onLogoutClick}
                    className="text-dim hover:text-red-500 font-medium text-sm transition-colors"
                   >
                     Logout
                   </button>
                 </div>
              ) : (
                <>
                  <button 
                    onClick={onLoginClick}
                    className="bg-surface/30 backdrop-blur-md border border-border-line/50 text-contrast font-bold px-6 py-2.5 rounded-xl hover:bg-surface/50 hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-sm hover:shadow-primary/10 mr-2"
                  >
                    {t.nav.login}
                  </button>

                  <button 
                    onClick={onOrderClick}
                    className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-xl font-bold text-base transition-all shadow-[0_0_20px_rgba(55,185,199,0.3)] hover:shadow-[0_0_30px_rgba(55,185,199,0.5)] hover:scale-105 active:scale-95"
                  >
                    {t.nav.order}
                  </button>
                </>
              )}
            </div>

            {/* Mobile Actions (Log In + Hamburger) */}
            <div className="md:hidden flex items-center gap-3">
              {user ? (
                 <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                    {user.name.charAt(0)}
                 </div>
              ) : (
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLoginClick();
                  }}
                  className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-[0_0_15px_rgba(55,185,199,0.2)]"
                >
                  {t.nav.login}
                </button>
              )}
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-contrast hover:bg-surface rounded-lg transition-colors z-50"
              >
                <span className="material-symbols-outlined text-3xl">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col pt-24 pb-8 px-6 ${
            isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-6 overflow-y-auto h-full">
            {user && (
              <div className="bg-surface rounded-2xl p-5 border border-border-line flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                     <h3 className="font-bold text-contrast">{user.name}</h3>
                     <button onClick={() => { onLogoutClick(); setIsMobileMenuOpen(false); }} className="text-xs text-red-500 font-medium">Log out</button>
                  </div>
              </div>
            )}

            {/* Mobile Links */}
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollTo('segments')} className="text-2xl font-display font-bold text-contrast py-3 text-left border-b border-border-line/50 hover:text-primary transition-colors">{t.nav.segments}</button>
              <button onClick={() => scrollTo('sensor')} className="text-2xl font-display font-bold text-contrast py-3 text-left border-b border-border-line/50 hover:text-primary transition-colors">{t.nav.sensor}</button>
              <button onClick={() => scrollTo('how-it-works')} className="text-2xl font-display font-bold text-contrast py-3 text-left border-b border-border-line/50 hover:text-primary transition-colors">{t.nav.howItWorks}</button>
              <button onClick={() => scrollTo('about')} className="text-2xl font-display font-bold text-contrast py-3 text-left border-b border-border-line/50 hover:text-primary transition-colors">{t.nav.about}</button>
            </div>

            <div className="flex-1"></div>

            {/* Mobile Controls Box */}
            <div className="bg-surface rounded-2xl p-5 border border-border-line space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-dim font-medium">Theme</span>
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-background border border-border-line text-contrast flex items-center gap-2 px-4"
                >
                  <span className="material-symbols-outlined text-lg">{isDark ? 'light_mode' : 'dark_mode'}</span>
                  <span className="text-sm font-bold">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-dim font-medium">Language</span>
                <button 
                  onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                  className="p-2 rounded-lg bg-background border border-border-line text-contrast flex items-center gap-2 px-4"
                >
                  <span className="material-symbols-outlined text-lg">language</span>
                  <span className="text-sm font-bold">{language === 'en' ? 'English' : 'አማርኛ'}</span>
                </button>
              </div>
            </div>

            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOrderClick();
              }}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20"
            >
              Order Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;