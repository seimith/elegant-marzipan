"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';

interface PricingTierProps { 
  name: string; 
  price: string; 
  description: string; 
  features: string[]; 
  cta: string | { text: string; href: string; }; 
  featured?: boolean;
  highlight?: boolean; 
}

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  cta, 
  featured = false,
  highlight = false
}: PricingTierProps) => {
  return (
    <div className={`flex flex-col h-full rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 ${featured ? 'relative z-10 scale-105' : ''}`}>
      {featured && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-center text-sm font-medium text-white">
          Recommended
        </div>
      )}
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
        <div className="mt-6">
          <p className="text-4xl font-semibold text-slate-900">{price}</p>
          <p className="text-sm text-slate-500">per month, billed annually</p>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-100 pt-8">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex gap-3 text-sm">
              <svg className="h-5 w-5 flex-shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-1 items-end">
        <a 
          href={typeof cta === 'object' ? cta.href : '#signup'} 
          className={`inline-block w-full rounded-xl px-4 py-3 text-center font-medium ${featured || highlight ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
        >
          {typeof cta === 'object' ? cta.text : cta}
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const { content } = useCopy();
  const pricingContent = content.pricing;
  
  // Early return if no content
  if (!pricingContent) return null;

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            {pricingContent.tagline}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{pricingContent.heading}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-700">{pricingContent.subheading}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {(pricingContent.plans || pricingContent.tiers)?.map((plan, index: number) => (
            <PricingTier
              key={index}
              name={plan.name}
              price={typeof plan.price === 'string' ? plan.price : `$${plan.price}`}
              description={plan.description || `${plan.name} tier for investment groups`}
              features={plan.features}
              cta={plan.cta}
              featured={plan.featured || false}
              highlight={plan.highlight || plan.popular || false}
            />
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-slate-500">
          {pricingContent.footnote}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
