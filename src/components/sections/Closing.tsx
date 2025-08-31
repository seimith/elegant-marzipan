"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';

const Closing = () => {
  const { content } = useCopy();
  const closingContent = content.closing;

  return (
    <section id="closing" className="py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          {closingContent.heading}
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
          {closingContent.subheading}
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl mb-12">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {closingContent.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <a 
            href="#pricing" 
            className="px-8 py-4 bg-white text-purple-700 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all shadow-lg"
          >
            {closingContent.cta.primary}
          </a>
          <a 
            href="#" 
            className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-medium text-lg hover:bg-white/10 transition-all"
          >
            {closingContent.cta.secondary}
          </a>
        </div>
        
        <div className="mt-12 text-sm text-white/70">
          <p>{closingContent.footnote}</p>
        </div>
      </div>
    </section>
  );
};

export default Closing;
