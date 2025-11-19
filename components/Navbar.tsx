import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-bearo-dark/80 backdrop-blur-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00D64F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M2 17L12 22L22 17" stroke="#00D64F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M2 12L12 17L22 12" stroke="#00D64F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-2xl font-bold tracking-tighter text-white">BEARO</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white/80">
          <a href="#payments" className="hover:text-bearo-green transition-colors">Payments</a>
          <a href="#banking" className="hover:text-bearo-green transition-colors">Banking</a>
          <a href="#investing" className="hover:text-bearo-green transition-colors">Stocks</a>
        </div>

        {/* CTA */}
        <div>
           <Button variant="white" className="hidden sm:block">Download</Button>
        </div>
      </div>
    </nav>
  );
};