import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative mx-auto w-[280px] h-[580px] sm:w-[320px] sm:h-[650px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden z-10 ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-zinc-800 rounded-b-2xl z-20 flex items-center justify-center">
        <div className="w-16 h-3 bg-black rounded-full opacity-50"></div>
      </div>
      
      {/* Status Bar */}
      <div className="absolute top-2 left-6 right-6 flex justify-between items-center z-20 text-[10px] text-white font-medium px-2">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full border border-white"></div>
          <div className="w-3 h-3 rounded-full border border-white bg-white"></div>
        </div>
      </div>

      {/* Screen Content */}
      <div className="w-full h-full bg-black text-white pt-10 relative overflow-hidden">
        {children}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-40 z-20"></div>
    </div>
  );
};