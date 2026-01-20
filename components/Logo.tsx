
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
          {/* Hexagonal Shield Foundation (Civil) */}
          <path d="M24 2L42.1865 12.5V35.5L24 46L5.81347 35.5V12.5L24 2Z" fill="url(#civilGradient)" />
          
          {/* Electrical Bolt integrated into the 'M' structure */}
          <path d="M15 14H19L22 22L25 14H33L28 26H31L22 38L25 26H22L15 14Z" fill="url(#boltGradient)" />
          
          {/* HVAC Flow Lines wrapping around */}
          <path d="M36 18C38.5 20.5 38.5 27.5 36 30" stroke="url(#hvacGradient)" strokeWidth="3" strokeLinecap="round" />
          <path d="M39 21C40.5 22.5 40.5 25.5 39 27" stroke="url(#hvacGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

          <defs>
            <linearGradient id="civilGradient" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A4A4A" />
              <stop offset="1" stopColor="#2A2A2A" />
            </linearGradient>
            <linearGradient id="boltGradient" x1="24" y1="14" x2="24" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00AEEF" />
              <stop offset="1" stopColor="#003B73" />
            </linearGradient>
            <linearGradient id="hvacGradient" x1="37.5" y1="18" x2="37.5" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC107" />
              <stop offset="1" stopColor="#F29100" />
            </linearGradient>
          </defs>
        </svg>
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
