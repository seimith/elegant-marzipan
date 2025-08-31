"use client";

import React from 'react';
import Image from 'next/image';
import { useCopy } from '../../content/CopyContext';

const Features = () => {
  const { content } = useCopy();
  const featuresContent = content.features;
  
  // Add icons to the features from JSON
  const icons = ["📱", "📊", "👥", "☁️", "🔒", "🛟"];
  const features = featuresContent.featureList.map((feature, index) => ({
    ...feature,
    icon: icons[index % icons.length]
  }));

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold uppercase tracking-wider">{featuresContent.tagline}</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            {featuresContent.heading}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {featuresContent.subheading}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
