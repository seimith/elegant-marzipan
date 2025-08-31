"use client";

import React from 'react';
// import Image from 'next/image';
import { useCopy } from '../../content/CopyContext';

const Testimonial = () => {
  const { content } = useCopy();
  const testimonialContent = content.testimonial;
  
  // Add avatars to testimonials
  const avatars = ["👩🏽‍💼", "👨🏻‍💼", "👩🏻‍💼"];
  const testimonials = testimonialContent.testimonials.map((testimonial, index) => ({
    ...testimonial,
    avatar: avatars[index % avatars.length]
  }));

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold uppercase tracking-wider">{testimonialContent.tagline}</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            {testimonialContent.heading}
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 relative">
          <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-8xl text-purple-200">&quot;</div>
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-light italic text-gray-700 mb-8">
              {testimonialContent.featured.quote}
            </p>
            
            <div className="flex items-center">
              <div className="h-16 w-16 bg-purple-200 rounded-full flex items-center justify-center text-3xl">
                👨🏽‍💼
              </div>
              <div className="ml-4">
                <h4 className="font-bold">{testimonialContent.featured.name}</h4>
                <p className="text-gray-600">{testimonialContent.featured.title}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-purple-600 text-4xl mb-4">&quot;</div>
              <p className="italic mb-8">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
