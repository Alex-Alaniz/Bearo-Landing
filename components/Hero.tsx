import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import { Button } from './Button';
import { BackgroundEffects } from './VisualElements';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        {/* Big Text */}
        <h1 className="text-[15vw] leading-[0.85] font-extrabold tracking-tighter text-white mb-4 select-none">
          BEARO
        </h1>
        <p className="text-xl md:text-3xl font-bold uppercase tracking-widest text-bearo-green mb-12">
          Send Cash. Bearified.
        </p>

        {/* Phone Mockup Intersecting the Text */}
        <div className="relative mt-[-50px] md:mt-[-80px] animate-[float_8s_ease-in-out_infinite]">
          <PhoneFrame className="shadow-[0_0_100px_rgba(0,214,79,0.3)]">
            {/* Fake UI */}
            <div className="flex flex-col h-full">
              <div className="flex justify-center mt-8">
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-bearo-green">
                   <span className="text-3xl">🐻</span>
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-zinc-400 text-sm font-medium">Bear Balance</h3>
                <div className="text-5xl font-bold text-white mt-1">$1,250</div>
              </div>
              
              <div className="flex-1 flex items-center justify-center gap-8 px-8 mt-8">
                 <button className="w-16 h-16 rounded-full bg-bearo-green flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition-transform">
                    PAY
                 </button>
                 <button className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-bearo-green font-bold border border-zinc-700 hover:bg-zinc-700 transition-colors">
                    REQ
                 </button>
              </div>

              {/* Activity List */}
              <div className="bg-zinc-900 h-1/2 rounded-t-[2rem] p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center">P</div>
                    <div className="text-left">
                      <div className="font-bold text-sm">Pizza Night</div>
                      <div className="text-xs text-zinc-500">2m ago</div>
                    </div>
                  </div>
                  <div className="font-bold text-white">-$24.50</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">G</div>
                    <div className="text-left">
                      <div className="font-bold text-sm">Gas Money</div>
                      <div className="text-xs text-zinc-500">1h ago</div>
                    </div>
                  </div>
                  <div className="font-bold text-bearo-green">+$15.00</div>
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>

        {/* Store Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 mb-16">
            <Button variant="white" className="flex items-center gap-2">
              <span></span> App Store
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span>▶</span> Google Play
            </Button>
        </div>
        
        <div className="absolute bottom-10 animate-bounce text-zinc-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </div>
    </section>
  );
};