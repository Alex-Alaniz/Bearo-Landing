import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import { FeatureProps } from '../types';

export const FeatureSection: React.FC<FeatureProps> = ({ 
  title, 
  description, 
  imageType, 
  align = 'left',
  theme = 'black' 
}) => {
  
  const bgColor = theme === 'green' ? 'bg-bearo-green text-black' : (theme === 'white' ? 'bg-white text-black' : 'bg-black text-white');
  const accentColor = theme === 'green' ? 'text-black' : 'text-bearo-green';

  // Mock Phone Contents based on type
  const renderPhoneContent = () => {
    if (imageType === 'payments') {
      return (
        <div className="flex flex-col h-full bg-black text-white p-6">
          <div className="mt-12 text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 bg-cover bg-center border-4 border-bearo-green" style={{backgroundImage: 'url(https://picsum.photos/200/200)'}}></div>
            <h3 className="text-2xl font-bold">Sarah Bear</h3>
            <p className="text-bearo-green font-mono mt-1">$sarahbear</p>
          </div>
          <div className="mt-12 text-center">
            <div className="text-6xl font-bold">$50</div>
            <div className="text-zinc-500 mt-2">for dinner 🍕</div>
          </div>
          <div className="mt-auto pb-8">
            <button className="w-full py-4 bg-bearo-green text-black font-bold rounded-full text-lg">Pay $50</button>
          </div>
        </div>
      );
    }
    if (imageType === 'card') {
      return (
        <div className="flex flex-col h-full bg-white text-black p-6 relative">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="mt-20 mx-auto w-full aspect-[1.586] bg-black rounded-xl p-4 flex flex-col justify-between shadow-2xl rotate-90 scale-125 translate-y-20">
              <div className="flex justify-between items-start">
                 <div className="w-8 h-5 bg-yellow-400 rounded"></div>
                 <span className="text-white font-bold italic tracking-wider">VISA</span>
              </div>
              <div>
                 <div className="text-white font-mono text-sm tracking-[0.2em]">**** 4242</div>
              </div>
              <div className="flex justify-between items-end">
                 <span className="text-gray-400 text-xs uppercase">Bearo Card</span>
                 <div className="w-8 h-8 rounded-full border-2 border-bearo-green flex items-center justify-center text-bearo-green font-bold text-xs">B</div>
              </div>
           </div>
        </div>
      );
    }
    if (imageType === 'investing') {
       // Simple Line Chart SVG
       const points = "0,100 20,90 40,95 60,80 80,40 100,60 120,30 140,35 160,10 180,20 200,5";
       return (
        <div className="flex flex-col h-full bg-black text-white p-6">
           <div className="mt-8">
              <h2 className="text-3xl font-bold">Bitcoin</h2>
              <div className="text-4xl font-bold mt-2">$98,420.50</div>
              <div className="text-bearo-green text-sm font-bold flex items-center gap-1">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                 4.20%
              </div>
           </div>
           <div className="flex-1 flex items-center">
              <svg viewBox="0 0 200 120" className="w-full overflow-visible">
                 <polyline points={points} fill="none" stroke="#00D64F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                 <circle cx="200" cy="5" r="6" fill="white" />
              </svg>
           </div>
           <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="py-3 rounded-full bg-zinc-800 font-bold">Sell</button>
              <button className="py-3 rounded-full bg-bearo-green text-black font-bold">Buy</button>
           </div>
        </div>
       );
    }
    return null;
  };

  return (
    <section className={`py-24 min-h-screen flex items-center relative overflow-hidden ${bgColor}`}>
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b ${theme === 'black' ? 'from-black to-transparent' : (theme === 'white' ? 'from-white to-transparent' : 'from-bearo-green to-transparent')} z-10`}></div>
         {theme === 'black' && <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bearo-green/5 rounded-full blur-[120px]"></div>}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
             <h2 className={`text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight ${accentColor}`}>
               {title}
             </h2>
             <p className="text-lg md:text-xl font-medium opacity-80 max-w-lg mx-auto md:mx-0 leading-relaxed">
               {description}
             </p>
          </div>

          {/* Phone Visual */}
          <div className="flex-1 flex justify-center">
             <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-bearo-green/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <PhoneFrame className="transform transition-transform duration-500 hover:-translate-y-4 hover:rotate-1">
                  {renderPhoneContent()}
                </PhoneFrame>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};