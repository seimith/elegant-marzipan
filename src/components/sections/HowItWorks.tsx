"use client";

import React from 'react';
// import Image from 'next/image';
import { useCopy } from '../../content/CopyContext';

const HowItWorks = () => {
  const { content } = useCopy();
  const howContent = content.howItWorks;
  
  // Add icons to the steps from JSON
  const icons = ['🔑', '⚙️', '📊', '✨'];
  const steps = howContent.steps.map((step, index) => ({
    ...step,
    icon: icons[index % icons.length],
    number: `0${index + 1}`
  }));

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold uppercase tracking-wider">{howContent.tagline}</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            {howContent.heading}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {howContent.subheading}
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
