
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center">
        <img 
          src="/Logo.png" 
          alt="Miles Electro Technologies" 
          className="h-12 w-auto object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="text-primary font-black text-xl tracking-tighter">MILES</span>
          <span className="text-secondary font-black text-xl tracking-tighter">ELECTRO</span>
        </div>
        <span className="text-accent text-[9px] font-bold tracking-[0.3em] uppercase opacity-80">Technologies</span>
      </div>
    </div>
  );
};

export default Logo;
