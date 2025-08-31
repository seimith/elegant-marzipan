"use client";

import React from 'react';
// import Image from 'next/image';
import { useCopy } from '../../content/CopyContext';

const Hero = () => {
  const { content } = useCopy();
  const heroContent = content.hero;

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {heroContent.heading}
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90">
          {heroContent.subheading}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a 
            href="#pricing" 
            className="px-8 py-3 bg-white text-purple-600 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all shadow-lg"
          >
            {heroContent.cta.primary}
          </a>
          <a 
            href="#how-it-works" 
            className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-medium text-lg hover:bg-white/10 transition-all"
          >
            {heroContent.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
