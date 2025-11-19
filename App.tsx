import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { Ticker } from './components/Ticker';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-black text-white selection:bg-bearo-green selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <Ticker />
        
        <div id="payments">
          <FeatureSection 
            title="Payments" 
            description="Send and receive money instantly. It's free, fast, and safe. No bear hugs required." 
            imageType="payments"
            align="left"
            theme="black"
          />
        </div>

        <div id="banking">
          <FeatureSection 
            title="The Bear Card" 
            description="The only debit card you can customize with your own signature. Get instant discounts with Bear Boosts." 
            imageType="card"
            align="right"
            theme="white"
          />
        </div>

        <div id="investing">
          <FeatureSection 
            title="Investing" 
            description="Whether you're a bull or a bear, you can invest in stocks and Bitcoin with as little as $1." 
            imageType="investing"
            align="left"
            theme="green"
          />
        </div>

        {/* CTA Section */}
        <section className="py-32 bg-black relative overflow-hidden text-center">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
           <div className="container mx-auto px-6 relative z-10">
              <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
                 Join the <span className="text-bearo-green">Bearo</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                 <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                    Download for iOS
                 </button>
                 <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
                    Download for Android
                 </button>
              </div>
           </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default App;