import React from 'react';

const items = [
  "PAYMENTS INSTANT", "NO FEES", "BITCOIN", "STOCKS", "DIRECT DEPOSIT", 
  "CASH CARD", "BOOSTS", "SECURE", "BEARO", "FAST"
];

export const Ticker: React.FC = () => {
  return (
    <div className="bg-bearo-green py-4 overflow-hidden whitespace-nowrap border-y-4 border-black">
      <div className="inline-flex animate-[scroll_20s_linear_infinite]">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="mx-8 text-black font-black text-2xl md:text-4xl italic tracking-tighter uppercase flex items-center gap-8">
            <span>{item}</span>
            <span className="w-3 h-3 bg-black rounded-full block"></span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};