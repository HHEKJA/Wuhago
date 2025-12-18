import React from 'react';

const Partners: React.FC = () => {
  const partners = ['CELSIUS', 'NESTLÉ', 'DANONE', 'OASIS', 'AQUAFINA'];

  return (
    <div className="border-y border-white/5 bg-[#081020] py-12 relative overflow-hidden group">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">Trusted Partners</p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 group-hover:opacity-100 transition-all duration-700">
          {partners.map((partner) => (
            <span key={partner} className="font-display font-bold text-2xl tracking-widest text-white hover:text-primary transition-colors cursor-default">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;