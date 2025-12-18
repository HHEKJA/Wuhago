import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Segments from './components/Segments';
import Sensor from './components/Sensor';
import OrderMethods from './components/OrderMethods';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import TrustedBadges from './components/TrustedBadges';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import { translations } from './translations';

// Modal types
export type ModalType = 'order' | 'demo' | 'specs' | 'login' | 'register' | 'register-driver' | 'forgot-password' | 'settings' | null;

// Language Context
type Language = 'en' | 'am';
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en
});

export const useLanguage = () => useContext(LanguageContext);

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [driverStep, setDriverStep] = useState(1);
  const [forgotPasswordStep, setForgotPasswordStep] = useState(1);
  const [user, setUser] = useState<{name: string, phone: string} | null>(null);

  useEffect(() => {
    // Check system preference on mount
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
      // Uncomment to respect system pref by default, currently forcing light as per request
      // setIsDark(true);
      // document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    if (type === 'register-driver') {
      setDriverStep(1);
    }
    if (type === 'forgot-password') {
      setForgotPasswordStep(1);
    }
  };
  
  const closeModal = () => setActiveModal(null);

  const handleLogoClick = () => {
    closeModal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    // Mock login
    setUser({ name: "Abebe B.", phone: "+251 91 122 3344" });
    closeModal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setUser(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dashboard Button Handlers
  const handleSettings = () => {
    alert("User Settings: \n- Notifications enabled\n- Location tracking active\n- Profile editing coming soon");
  };

  const handleSupport = () => {
    openModal('order'); // Reusing order modal for contact options
  };

  const handleTopUp = () => {
    alert("Top Up Feature: \nConnect your Telebirr or CBE account to add funds.");
  };

  const handleHistory = () => {
    alert("Order History: \nNo previous orders found beyond recent activity.");
  };

  const handleAddLocation = () => {
    alert("Add Location: \nMap interface to pin new delivery location would open here.");
  };

  const t = translations[language];

  const driverSteps = [
    { num: 1, label: 'Personal\nInformation' },
    { num: 2, label: "Driver's License" },
    { num: 3, label: 'Vehicle\nInformation' },
    { num: 4, label: 'Guarantor\nInformation' },
    { num: 5, label: 'Documents' },
    { num: 6, label: 'Review & Submit' }
  ];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="font-sans antialiased text-contrast selection:bg-primary selection:text-white overflow-x-hidden text-[18px]">
        <Navbar 
          onOrderClick={() => openModal('order')} 
          onLoginClick={() => openModal('login')}
          onLogoutClick={handleLogout}
          onLogoClick={handleLogoClick}
          user={user}
          toggleTheme={toggleTheme} 
          isDark={isDark} 
        />
        
        {/* Main Content Area - Swaps between Landing Page and Dashboard */}
        <main>
          {user ? (
            <Dashboard 
              user={user} 
              onOrderClick={() => openModal('order')}
              onSettingsClick={handleSettings}
              onSupportClick={handleSupport}
              onTopUpClick={handleTopUp}
              onHistoryClick={handleHistory}
              onAddLocationClick={handleAddLocation}
            />
          ) : (
            <>
              <Hero 
                onGetStartedClick={() => {
                  const element = document.getElementById('segments');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                onWatchDemoClick={() => openModal('demo')} 
              />
              <TrustedBadges />
              <AboutUs />
              <Features />
              <HowItWorks />
              <Segments onOrderClick={() => openModal('order')} />
              <Sensor onViewSpecsClick={() => openModal('specs')} />
              <OrderMethods onOrderClick={() => openModal('order')} />
              <FAQ onContactClick={() => openModal('order')} />
            </>
          )}
        </main>

        {!user && <Footer onOrderClick={() => openModal('order')} isDark={isDark} />}

        {/* Modals */}
        <Modal isOpen={activeModal === 'order'} onClose={closeModal} title="Start Your Order">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
            </div>
            <p className="text-dim text-lg">Choose how you'd like to proceed with Wuhago.</p>
          </div>
          <div className="space-y-4">
            <button className="flex items-center justify-between w-full bg-primary hover:bg-accent text-white font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-primary/20">
              <span>Order Online</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="flex items-center justify-between w-full bg-surface hover:bg-black/5 dark:hover:bg-white/10 text-contrast font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] border border-border-line">
              <span>Call Support</span>
              <span className="material-symbols-outlined">call</span>
            </button>
            <button className="flex items-center justify-between w-full bg-surface hover:bg-black/5 dark:hover:bg-white/10 text-contrast font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] border border-border-line">
              <span>Chat on WhatsApp</span>
              <span className="material-symbols-outlined">chat</span>
            </button>
          </div>
        </Modal>

        <Modal isOpen={activeModal === 'login'} onClose={closeModal} title="" maxWidth="max-w-[380px]">
          <div className="px-1">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-display font-bold text-contrast mb-1">Login</h2>
              <p className="text-dim text-sm">Login to your account</p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-contrast uppercase tracking-wider">Phone Number</label>
                <div className="flex bg-background border border-border-line rounded-lg overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                  <div className="flex items-center gap-2 px-3 bg-surface border-r border-border-line">
                    <span className="text-lg">🇪🇹</span>
                    <span className="material-symbols-outlined text-dim text-base">unfold_more</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="09********"
                    className="w-full px-3 py-2.5 bg-transparent outline-none text-contrast placeholder:text-dim/50 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-contrast uppercase tracking-wider">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••"
                  className="w-full px-3 py-2.5 bg-background border border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-dim/50 text-sm font-medium"
                />
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => { closeModal(); openModal('forgot-password'); }}
                  className="text-primary hover:text-accent font-medium text-xs hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button 
                onClick={handleLogin}
                className="w-full bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
              >
                LOG IN
              </button>

              <div className="text-center pt-2 text-sm">
                <span className="text-dim">Don't have an account? </span>
                <button onClick={() => { closeModal(); openModal('register'); }} className="text-primary hover:text-accent font-bold hover:underline transition-all">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </Modal>

        {/* Forgot Password Modal */}
        <Modal isOpen={activeModal === 'forgot-password'} onClose={closeModal} title="" maxWidth="max-w-[380px]">
          <div className="px-1">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-display font-bold text-contrast mb-1">
                {forgotPasswordStep === 1 && "Forgot Password"}
                {forgotPasswordStep === 2 && "Verification"}
                {forgotPasswordStep === 3 && "Reset Password"}
                {forgotPasswordStep === 4 && "Success"}
              </h2>
              <p className="text-dim text-sm">
                {forgotPasswordStep === 1 && "Enter your phone number to receive a code"}
                {forgotPasswordStep === 2 && "Enter the 4-digit code sent to your phone"}
                {forgotPasswordStep === 3 && "Create a new secure password"}
                {forgotPasswordStep === 4 && "Your password has been reset successfully"}
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Step 1: Phone Input */}
              {forgotPasswordStep === 1 && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-contrast uppercase tracking-wider">Phone Number</label>
                    <div className="flex bg-background border border-border-line rounded-lg overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                      <div className="flex items-center gap-2 px-3 bg-surface border-r border-border-line">
                        <span className="text-lg">🇪🇹</span>
                        <span className="material-symbols-outlined text-dim text-base">unfold_more</span>
                      </div>
                      <input 
                        type="tel" 
                        placeholder="09********"
                        className="w-full px-3 py-2.5 bg-transparent outline-none text-contrast placeholder:text-dim/50 text-sm font-medium"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => setForgotPasswordStep(2)}
                    className="w-full bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    SEND CODE
                  </button>
                </>
              )}

              {/* Step 2: OTP Input */}
              {forgotPasswordStep === 2 && (
                <>
                  <div className="flex justify-center gap-3 mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <input 
                        key={i}
                        type="text" 
                        maxLength={1}
                        className="w-12 h-14 bg-surface border border-border-line rounded-lg text-center text-2xl font-bold text-contrast focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    ))}
                  </div>
                  <div className="text-center text-xs text-dim">
                    Didn't receive code? <button className="text-primary font-bold hover:underline">Resend</button>
                  </div>
                  <button 
                    onClick={() => setForgotPasswordStep(3)}
                    className="w-full bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    VERIFY
                  </button>
                </>
              )}

              {/* Step 3: New Password */}
              {forgotPasswordStep === 3 && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-contrast uppercase tracking-wider">New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••"
                      className="w-full px-3 py-2.5 bg-background border border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-dim/50 text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-contrast uppercase tracking-wider">Confirm Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••"
                      className="w-full px-3 py-2.5 bg-background border border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-dim/50 text-sm font-medium"
                    />
                  </div>
                  <button 
                    onClick={() => setForgotPasswordStep(4)}
                    className="w-full bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    RESET PASSWORD
                  </button>
                </>
              )}

              {/* Step 4: Success */}
              {forgotPasswordStep === 4 && (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h3 className="text-lg font-bold text-contrast mb-2">Password Reset!</h3>
                  <p className="text-dim text-sm mb-6">Your password has been changed successfully. You can now login with your new password.</p>
                  <button 
                    onClick={() => { closeModal(); openModal('login'); }}
                    className="w-full bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    BACK TO LOGIN
                  </button>
                </div>
              )}

              {/* Back Link */}
              {forgotPasswordStep < 4 && (
                 <div className="text-center pt-2 text-sm">
                   <button onClick={() => { if(forgotPasswordStep > 1) setForgotPasswordStep(forgotPasswordStep - 1); else { closeModal(); openModal('login'); } }} className="text-dim hover:text-contrast font-medium transition-all flex items-center justify-center gap-1 mx-auto">
                     <span className="material-symbols-outlined text-sm">arrow_back</span>
                     Back
                   </button>
                 </div>
              )}
            </form>
          </div>
        </Modal>

        <Modal isOpen={activeModal === 'register'} onClose={closeModal} title="" maxWidth="max-w-[420px]">
          <div className="px-1">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-display font-bold text-contrast mb-1">Register</h2>
              <p className="text-dim text-sm">Create a new account</p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-contrast uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full px-3 py-2.5 bg-background border border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-dim/50 text-sm font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-contrast uppercase tracking-wider">Phone Number</label>
                <div className="flex bg-background border border-border-line rounded-lg overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                  <div className="flex items-center gap-2 px-3 bg-surface border-r border-border-line">
                    <span className="text-lg">🇪🇹</span>
                    <span className="material-symbols-outlined text-dim text-base">unfold_more</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="09********"
                    className="w-full px-3 py-2.5 bg-transparent outline-none text-contrast placeholder:text-dim/50 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-contrast uppercase tracking-wider">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••"
                  className="w-full px-3 py-2.5 bg-background border border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-dim/50 text-sm font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-contrast uppercase tracking-wider">Confirm Password</label>
                <input 
                  type="password" 
                  placeholder="••••••"
                  className="w-full px-3 py-2.5 bg-background border border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-dim/50 text-sm font-medium"
                />
              </div>

              <button 
                onClick={handleLogin}
                className="w-full bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
              >
                CREATE ACCOUNT
              </button>

              <div className="relative py-1">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border-line"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-4 bg-surface text-dim">or</span>
                </div>
              </div>

              <button 
                onClick={() => { closeModal(); openModal('register-driver'); }}
                className="w-full bg-surface hover:bg-black/5 dark:hover:bg-white/10 border border-border-line text-contrast font-bold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span className="material-symbols-outlined text-dim text-lg">local_shipping</span>
                Register as Driver
              </button>

              <div className="text-center pt-2 text-sm">
                <span className="text-dim">Already have an account? </span>
                <button onClick={() => { closeModal(); openModal('login'); }} className="text-primary hover:text-accent font-medium hover:underline transition-all">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </Modal>

        <Modal isOpen={activeModal === 'register-driver'} onClose={closeModal} title="" maxWidth="max-w-[650px]">
          <div className="px-2">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-contrast mb-1">Register as a Driver</h2>
              <p className="text-dim text-sm">
                {driverStep === 1 && "Create your account with basic information"}
                {driverStep === 2 && "Enter your license information"}
                {driverStep === 3 && "Tell us about your water delivery vehicle"}
                {driverStep === 4 && "Provide your guarantor's contact details"}
                {driverStep === 5 && "Upload required documents"}
                {driverStep === 6 && "Review and submit your application"}
              </p>
            </div>

            {/* Stepper */}
            <div className="mb-6 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex justify-between items-start min-w-[500px] px-2">
                {driverSteps.map((step, idx) => {
                  const isActive = step.num === driverStep;
                  const isCompleted = step.num < driverStep;
                  
                  return (
                    <div key={idx} className="flex flex-col items-center gap-2 text-center w-20">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors 
                        ${isActive ? 'bg-primary text-white' : 
                          isCompleted ? 'bg-transparent text-primary border-2 border-primary' : 
                          'bg-surface text-dim border border-border-line'}`}>
                        {isCompleted ? <span className="material-symbols-outlined text-base font-bold">check</span> : step.num}
                      </div>
                      <span className={`text-[10px] leading-tight font-medium ${isActive || isCompleted ? 'text-primary' : 'text-dim'}`}>
                        {step.label.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-surface border border-border-line h-1.5 rounded-full mb-6 overflow-hidden">
               <div 
                 className="bg-primary h-full rounded-full transition-all duration-500 ease-out" 
                 style={{ width: `${(driverStep / 6) * 100}%` }}
               ></div>
            </div>
            
            {/* Step 1: Personal Information */}
            {driverStep === 1 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Beno Samuel"
                    className="w-full px-3 py-2.5 bg-surface border border-transparent focus:bg-background border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/50 text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">Phone Number</label>
                  <div className="flex bg-surface rounded-lg overflow-hidden border border-border-line focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                    <div className="flex items-center gap-2 px-3 border-r border-border-line">
                      <span className="text-lg">🇪🇹</span>
                      <span className="material-symbols-outlined text-dim text-base">unfold_more</span>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="+251 96 556 4436"
                      className="w-full px-3 py-2.5 bg-transparent outline-none text-contrast placeholder:text-contrast/50 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">Password</label>
                  <input 
                    type="password" 
                    placeholder="•••••••••••••"
                    className="w-full px-3 py-2.5 bg-surface border border-transparent focus:bg-background border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/30 text-lg tracking-widest font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">Confirm Password</label>
                  <input 
                    type="password" 
                    placeholder="•••••••••••••"
                    className="w-full px-3 py-2.5 bg-surface border border-transparent focus:bg-background border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/30 text-lg tracking-widest font-medium"
                  />
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => setDriverStep(2)}
                    className="w-full bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    CONTINUE
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Driver's License */}
            {driverStep === 2 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">Driver License Number</label>
                  <input 
                    type="text" 
                    placeholder="ET12536789"
                    className="w-full px-3 py-2.5 bg-surface border border-transparent focus:bg-background border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/50 text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">License Expiry Date</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="December 18th, 2025"
                      className="w-full px-3 py-2.5 bg-surface border border-transparent focus:bg-background border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/50 text-sm font-medium"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-dim pointer-events-none text-lg">calendar_today</span>
                  </div>
                </div>

                {/* Spacer to maintain approximate height */}
                <div className="h-16"></div>

                <div className="pt-4 flex gap-4">
                  <button 
                    onClick={() => setDriverStep(1)}
                    className="flex-1 bg-surface hover:bg-black/5 dark:hover:bg-white/10 text-contrast border border-border-line font-bold py-3 rounded-lg transition-all active:scale-[0.98] text-sm tracking-wide"
                  >
                    Previous
                  </button>
                  <button 
                    onClick={() => setDriverStep(3)}
                    className="flex-1 bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Vehicle Information */}
            {driverStep === 3 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">Vehicle Make</label>
                  <input 
                    type="text" 
                    placeholder="Isuzu"
                    className="w-full px-3 py-2.5 bg-surface border border-transparent focus:bg-background border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/50 text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">Vehicle Model</label>
                  <input 
                    type="text" 
                    placeholder="NPR"
                    className="w-full px-3 py-2.5 bg-surface border border-transparent focus:bg-background border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/50 text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">Vehicle Plate Number</label>
                  <input 
                    type="text" 
                    placeholder="AA-17846"
                    className="w-full px-3 py-2.5 bg-surface border border-transparent focus:bg-background border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/50 text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-contrast uppercase tracking-wider">Vehicle Capacity (Liters)</label>
                  <input 
                    type="number" 
                    placeholder="1000"
                    className="w-full px-3 py-2.5 bg-surface border border-transparent focus:bg-background border-border-line rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/50 text-sm font-medium"
                  />
                  <p className="text-[10px] text-dim">Minimum capacity is 1000 liters</p>
                </div>

                <div className="pt-4 flex gap-4">
                  <button 
                    onClick={() => setDriverStep(2)}
                    className="flex-1 bg-surface hover:bg-black/5 dark:hover:bg-white/10 text-contrast border border-border-line font-bold py-3 rounded-lg transition-all active:scale-[0.98] text-sm tracking-wide"
                  >
                    Previous
                  </button>
                  <button 
                    onClick={() => setDriverStep(4)}
                    className="flex-1 bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Guarantor Information */}
            {driverStep === 4 && (
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-contrast">Guarantor Name</label>
                  <input 
                    type="text" 
                    placeholder="Full name"
                    className="w-full px-4 py-3 bg-surface border border-transparent focus:bg-background border-border-line rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-contrast placeholder:text-contrast/50 text-base"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-contrast">Guarantor Phone Number</label>
                  <div className="flex bg-surface rounded-xl overflow-hidden border border-border-line focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                    <div className="flex items-center gap-2 px-3 border-r border-border-line bg-surface hover:bg-black/5 cursor-pointer">
                      <span className="text-xl">🇪🇹</span>
                      <span className="material-symbols-outlined text-contrast text-sm">unfold_more</span>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="09********"
                      className="w-full px-4 py-3 bg-transparent outline-none text-contrast placeholder:text-contrast/50 text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-contrast">Guarantor ID Document</label>
                  <p className="text-sm font-medium text-contrast">Upload Guarantor's ID (image or PDF)</p>
                  
                  <div className="border-2 border-dashed border-border-line rounded-2xl bg-surface/30 p-8 text-center hover:border-primary/50 hover:bg-surface/50 transition-all cursor-pointer group">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-contrast/5 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined text-2xl text-contrast group-hover:text-primary">cloud_upload</span>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-contrast mb-1">Choose files or drag and drop</h4>
                    <p className="text-xs text-dim mb-6">Image and pdfs</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors shadow-lg shadow-blue-600/20">
                      Choose File
                    </button>
                  </div>
                  
                  <div className="space-y-1 mt-2">
                    <p className="text-xs text-dim">Upload an image or PDF file</p>
                    <p className="text-xs text-dim">Upload your guarantor's government-issued ID.</p>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button 
                    onClick={() => setDriverStep(3)}
                    className="flex-1 bg-surface hover:bg-black/5 dark:hover:bg-white/10 text-contrast border border-border-line font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] text-sm tracking-wide"
                  >
                    Previous
                  </button>
                  <button 
                    onClick={() => setDriverStep(5)}
                    className="flex-1 bg-[#007CB0] hover:bg-[#006a96] text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {/* Step 5: Documents */}
            {driverStep === 5 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1 border-2 border-dashed border-border-line rounded-xl p-6 text-center hover:border-primary/50 cursor-pointer transition-colors bg-surface/50 hover:bg-surface">
                    <span className="material-symbols-outlined text-4xl text-dim mb-2 group-hover:text-primary">badge</span>
                    <p className="text-sm font-bold text-contrast">License Front</p>
                    <p className="text-[10px] text-dim mt-1">Click to upload</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1 border-2 border-dashed border-border-line rounded-xl p-6 text-center hover:border-primary/50 cursor-pointer transition-colors bg-surface/50 hover:bg-surface">
                     <span className="material-symbols-outlined text-4xl text-dim mb-2 group-hover:text-primary">badge</span>
                    <p className="text-sm font-bold text-contrast">License Back</p>
                    <p className="text-[10px] text-dim mt-1">Click to upload</p>
                  </div>
                  <div className="col-span-2 border-2 border-dashed border-border-line rounded-xl p-6 text-center hover:border-primary/50 cursor-pointer transition-colors bg-surface/50 hover:bg-surface">
                     <span className="material-symbols-outlined text-4xl text-dim mb-2 group-hover:text-primary">directions_car</span>
                    <p className="text-sm font-bold text-contrast">Vehicle Libres (Ownership)</p>
                    <p className="text-[10px] text-dim mt-1">Click to upload PDF or Image</p>
                  </div>
                </div>

                <div className="h-4"></div>

                <div className="pt-4 flex gap-4">
                  <button 
                    onClick={() => setDriverStep(4)}
                    className="flex-1 bg-surface hover:bg-black/5 dark:hover:bg-white/10 text-contrast border border-border-line font-bold py-3 rounded-lg transition-all active:scale-[0.98] text-sm tracking-wide"
                  >
                    Previous
                  </button>
                  <button 
                    onClick={() => setDriverStep(6)}
                    className="flex-1 bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    Review
                  </button>
                </div>
              </div>
            )}

            {/* Step 6: Review & Submit */}
            {driverStep === 6 && (
              <div className="text-center py-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-contrast mb-2">Ready to Submit!</h3>
                <p className="text-dim text-sm mb-8 max-w-sm mx-auto">Please review your information. By clicking submit, you confirm that all provided details are accurate and agree to our Driver Terms of Service.</p>
                
                <div className="space-y-3 mb-8 text-left max-w-sm mx-auto bg-surface p-4 rounded-xl border border-border-line">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary">person</span>
                    <span className="text-contrast">Personal Info Completed</span>
                  </div>
                   <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary">directions_car</span>
                    <span className="text-contrast">Vehicle Details Added</span>
                  </div>
                   <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                    <span className="text-contrast">Guarantor Verified</span>
                  </div>
                   <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <span className="text-contrast">Documents Uploaded</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setDriverStep(5)}
                    className="flex-1 bg-surface hover:bg-black/5 dark:hover:bg-white/10 text-contrast border border-border-line font-bold py-3 rounded-lg transition-all active:scale-[0.98] text-sm tracking-wide"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => { closeModal(); alert("Application Submitted! We will contact you soon."); }}
                    className="flex-[2] bg-primary hover:bg-[#2a9aa7] text-white font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                  >
                    SUBMIT APPLICATION
                  </button>
                </div>
              </div>
            )}

            <div className="text-center pt-2 text-sm mt-4">
              <span className="text-dim">Already have an account? </span>
              <button onClick={() => { closeModal(); openModal('login'); }} className="text-primary hover:text-accent font-bold hover:underline transition-all">
                Sign In
              </button>
            </div>
          </div>
        </Modal>

        <Modal isOpen={activeModal === 'demo'} onClose={closeModal} title="" maxWidth="max-w-5xl" transparentBg>
           <div className="bg-black border border-white/10 rounded-2xl w-full aspect-video overflow-hidden group relative">
              <div className="w-full h-full flex items-center justify-center bg-surface group-hover:bg-surface/80 transition-colors cursor-pointer">
                <div className="text-center">
                  <span className="material-symbols-outlined text-7xl text-contrast opacity-80 group-hover:scale-110 transition-transform duration-300">play_circle</span>
                  <p className="mt-4 text-dim">Video Placeholder</p>
                </div>
              </div>
           </div>
        </Modal>

        <Modal isOpen={activeModal === 'specs'} onClose={closeModal} title="Sensor Specifications">
           <div className="space-y-6">
              <div>
                <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Connectivity</h4>
                <ul className="text-dim space-y-2">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">wifi</span> GSM / GPRS Quad-band</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">sim_card</span> Embedded SIM (Global Roaming)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Power</h4>
                <ul className="text-dim space-y-2">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">battery_full</span> 5-Year Battery Life (Li-SOCl2)</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">bolt</span> Low power consumption mode</li>
                </ul>
              </div>
              <div>
                <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Physical</h4>
                <ul className="text-dim space-y-2">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">water_drop</span> IP68 Waterproof Rating</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">square_foot</span> Dimensions: 85mm x 40mm x 20mm</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-border-line">
                <button onClick={() => { closeModal(); openModal('order'); }} className="block w-full bg-contrast text-background hover:bg-dim font-bold py-3 rounded-xl text-center transition-colors">
                  Request Technical Sheet
                </button>
              </div>
            </div>
        </Modal>

      </div>
    </LanguageContext.Provider>
  );
};

export default App;