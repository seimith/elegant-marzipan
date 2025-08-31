"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';

interface TestimonialFeatured {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const Testimonial = () => {
  const { content } = useCopy();
  const testimonialContent = content.testimonial as any;
  
  // Extract featured testimonial data with fallbacks
  const featured: TestimonialFeatured = {
    quote: testimonialContent?.featured?.quote || "Vault saved us from endless group chats and spreadsheets. No more arguments — just clear, simple investing together.",
    name: testimonialContent?.featured?.name || "David Anderson",
    title: testimonialContent?.featured?.title || "CTO, Global Innovations",
    image: testimonialContent?.featured?.image || "/placeholder-person.jpg"
  };

  return (
    <section id="testimonial" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
              {testimonialContent?.tagline || "From our users"}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              {testimonialContent?.heading || "Trusted by investment groups nationwide"}
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              See why investment clubs and property syndicates choose our platform to manage their groups.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  className="h-14 w-14 rounded-full object-cover" 
                  src={featured.image} 
                  alt={featured.name} 
                />
                <div>
                  <h3 className="font-semibold text-slate-900">{featured.name}</h3>
                  <p className="text-sm text-slate-600">{featured.title}</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                {'★'.repeat(5)}
              </div>
              <blockquote className="text-lg text-slate-700 leading-relaxed">
                "{featured.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
