"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';
import { HowItWorksStep } from '../../types/copyTypes';

function StepCard({ number, title, description }: HowItWorksStep & { number: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900 font-semibold">
          {number}
        </div>
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

const HowItWorks = () => {
  const { content } = useCopy();
  const howContent = content.howItWorks;
  
  // Early return if no content
  if (!howContent) return null;

  const steps = howContent.steps.map((step: HowItWorksStep, index: number) => ({
    ...step,
    number: `0${index + 1}`
  }));

  return (
    <section className="relative overflow-hidden bg-white" id="how">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03),transparent_60%)]"></div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          {howContent.tagline && (
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              {howContent.tagline}
            </div>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{howContent.heading}</h2>
          {howContent.description && (
            <p className="mt-4 max-w-2xl mx-auto text-slate-700">{howContent.description}</p>
          )}
        </div>
        
        <div className="relative mt-16">
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step: HowItWorksStep & { number: string }, index: number) => (
                <StepCard 
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
