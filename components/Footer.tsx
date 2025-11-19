import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-6 text-bearo-green">Bearo</h2>
            <p className="text-zinc-500 max-w-md mb-8">
              The number one finance app for bears and humans alike. 
              Send money, buy stocks, and hibernate with savings.
            </p>
            <div className="flex gap-4">
               <Button variant="white">App Store</Button>
               <Button variant="outline">Google Play</Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-zinc-400">Legal</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
              <li><a href="#" className="hover:text-white">Licenses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-zinc-400">Social</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-bearo-green">Twitter</a></li>
              <li><a href="#" className="hover:text-bearo-green">Instagram</a></li>
              <li><a href="#" className="hover:text-bearo-green">TikTok</a></li>
              <li><a href="#" className="hover:text-bearo-green">Twitch</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
           <p>&copy; 2024 Bearified, Inc. All rights reserved.</p>
           <p>Brokerage services by Bearo Investing LLC, member FINRA/SIPC.</p>
        </div>
      </div>
    </footer>
  );
};