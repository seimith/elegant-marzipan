"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';

const Pricing = () => {
  const { content } = useCopy();
  const pricingContent = content.pricing;

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold uppercase tracking-wider">{pricingContent.tagline}</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            {pricingContent.heading}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {pricingContent.subheading}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingContent.plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.isPopular 
                  ? 'border-purple-500 shadow-lg shadow-purple-100' 
                  : 'border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500"> {plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-purple-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-medium ${
                  plan.isPopular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                } transition-colors`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">{pricingContent.custom.title}</h3>
          <p className="text-gray-600 mb-4">
            {pricingContent.custom.description}
          </p>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            {pricingContent.custom.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
