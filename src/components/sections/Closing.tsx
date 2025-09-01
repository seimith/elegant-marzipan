"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';
import { ClosingContent } from '../../types/copyTypes';

const Closing = () => {
  const { content } = useCopy();
  const closingContent = content.closing as ClosingContent;
  
  // Early return if no closing content
  if (!closingContent) return null;

  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[radial-gradient(ellipse_at_center,rgba(100,116,139,0.2),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            {"Ready to get started?"}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            {closingContent.heading || "Ready to transform your workflow?"}
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            {closingContent.description || "Join thousands of teams already using our platform to improve their productivity."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={typeof closingContent.cta?.primary === 'string' ? 
                '#signup' : 
                (closingContent.cta?.primary?.href || '#signup')}
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              {typeof closingContent.cta?.primary === 'string' ? 
                closingContent.cta?.primary : 
                (closingContent.cta?.primary?.text || 'Get Started Free')}
            </a>
            <a
              href={typeof closingContent.cta?.secondary === 'string' ? 
                '#how' : 
                (closingContent.cta?.secondary?.href || '#how')}
              className="rounded-xl border border-slate-600 bg-transparent px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              {typeof closingContent.cta?.secondary === 'string' ? 
                closingContent.cta?.secondary : 
                (closingContent.cta?.secondary?.text || 'Schedule Demo')}
            </a>
          </div>
          
          {closingContent.footnote && (
            <div className="mt-12 text-sm text-slate-400">
              <p>{closingContent.footnote}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Closing;
