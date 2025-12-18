import React from 'react';
import { useLanguage } from '../App';

interface FooterProps {
  onOrderClick: () => void;
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ onOrderClick, isDark }) => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionIds = ['segments', 'sensor', 'how-it-works', 'about'];

  return (
    <footer className="bg-surface dark:bg-[#020610] border-t border-border-line pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-8">
            <div className="mb-8 w-fit">
              <div className="grid grid-cols-1 grid-rows-1">
                <img 
                  src="cap-03.png" 
                  alt="Wuhago" 
                  className={`col-start-1 row-start-1 h-10 w-auto transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`} 
                />
                <img 
                  src="cap-04.png" 
                  alt="Wuhago" 
                  className={`col-start-1 row-start-1 h-10 w-auto transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`} 
                />
              </div>
            </div>
            <p className="text-dim text-sm leading-relaxed mb-8 whitespace-pre-line max-w-2xl">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-contrast hover:bg-primary hover:text-white hover:scale-110 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-contrast hover:bg-primary hover:text-white hover:scale-110 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-contrast hover:bg-primary hover:text-white hover:scale-110 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-contrast hover:bg-primary hover:text-white hover:scale-110 transition-all">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.08-.18 2.72-.02 5.45-.29 8.16-.62 5.92-6.47 9.87-12.27 8.11-3.69-1.12-6.26-4.66-6.19-8.54.04-3.61 2.49-6.87 6.06-7.85.9-.25 1.85-.3 2.78-.18v4.16c-1.32-.43-2.83-.2-4.03.62-1.63 1.12-2.18 3.32-1.25 5.09.96 1.83 3.19 2.68 5.16 1.95 1.54-.57 2.64-2.02 2.7-3.66.04-2.71.01-5.42.01-8.13.01-2.52.01-5.04.01-7.56.73-.02 1.47-.02 2.2-.02z"/>
                 </svg>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-4 lg:pl-12">
            <h4 className="font-bold text-contrast mb-8 uppercase text-xs tracking-[0.2em] text-primary">{t.footer.company}</h4>
            <ul className="space-y-4 text-sm text-dim">
              {t.footer.companyLinks.map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => scrollTo(sectionIds[i])} 
                    className="hover:text-primary transition-colors hover:translate-x-1 inline-block text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-line pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-dim">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-contrast transition-colors">Data Privacy</a>
            <a href="#" className="hover:text-contrast transition-colors">Legal Notice</a>
            <a href="#" className="hover:text-contrast transition-colors">Cookie Consent</a>
          </div>
          <div>
            © 2024 Wuhago. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;