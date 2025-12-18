import React from 'react';

const TrustedBadges: React.FC = () => {
  const badges = [
    { icon: 'science', text: 'Lab-Tested' },
    { icon: 'location_on', text: 'Live Tracking' },
    { icon: 'receipt_long', text: 'Digital Receipts' },
    { icon: 'payments', text: 'Fair Pricing' },
    { icon: 'verified_user', text: 'Verified Drivers' },
    { icon: 'support_agent', text: '24/7 Support' },
  ];

  return (
    <section className="py-8 bg-surface/50 border-y border-border-line backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-12">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center space-x-2 text-dim hover:text-primary transition-colors cursor-default group select-none">
              <div className="animate-float-sm" style={{ animationDelay: `${index * 0.15}s` }}>
                <span className="material-symbols-outlined text-2xl group-hover:scale-125 transition-transform duration-300 text-primary/80 group-hover:text-primary">
                  {badge.icon}
                </span>
              </div>
              <span className="font-bold text-sm md:text-base whitespace-nowrap tracking-tight">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBadges;