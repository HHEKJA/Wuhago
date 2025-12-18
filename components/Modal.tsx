import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
  transparentBg?: boolean;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  maxWidth = 'max-w-lg',
  transparentBg = false
}) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300); // Wait for animation
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return ReactDOM.createPortal(
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div 
        className={`${transparentBg ? 'bg-transparent' : 'bg-surface border border-border-line'} p-10 rounded-3xl w-full ${maxWidth} relative shadow-2xl transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'} max-h-[90vh] overflow-y-auto`}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-dim hover:text-contrast transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 z-50"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {title && (
            <div className={`${transparentBg ? 'hidden' : 'block'} text-center mb-6`}>
                <h3 className="font-display text-3xl font-bold text-contrast mb-2">{title}</h3>
            </div>
        )}
        
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;