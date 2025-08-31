"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { useCopy, ContentSet } from '../../content/CopyContext';

// Card component for the hero section
function Card({title, desc}: {title: string; desc: string}){
  return (
    <div className="rounded-2xl border border-slate-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-900"/>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

const Hero = () => {
  const { content, activeCopySet, availableCopySets, switchCopySet } = useCopy();
  const heroContent = content.hero;
  
  // Support URL query parameter for variant testing if needed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const q = new URLSearchParams(window.location.search);
      const v = q.get("copySet");
      if (v && availableCopySets.includes(v as ContentSet)) switchCopySet(v as ContentSet);
    }
  }, [availableCopySets, switchCopySet]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            {(heroContent as any).badge || "Governance-first group investing"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            {(heroContent as any).headline || heroContent.heading}
          </h1>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed">{(heroContent as any).subhead || heroContent.subheading}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a 
              href={(heroContent.cta?.primary as any)?.href || "#signup"} 
              className="rounded-xl bg-black px-5 py-3 text-white text-sm font-medium hover:bg-slate-900"
            >
              {(heroContent.cta?.primary as any)?.text || heroContent.cta?.primary || "Get Started"}
            </a>
            <a 
              href={(heroContent.cta?.secondary as any)?.href || "#how"} 
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium hover:bg-slate-50"
            >
              {(heroContent.cta?.secondary as any)?.text || heroContent.cta?.secondary || "Learn More"}
            </a>
          </div>
          <div className="mt-8 text-sm text-slate-500">
            <span className="font-medium text-slate-700">Copy Set:</span>
            <div className="mt-3 flex gap-2">
              {availableCopySets.map(set => (
                <button
                  key={set}
                  onClick={() => switchCopySet(set)}
                  className={`rounded-full border px-3 py-1 ${activeCopySet===set?"bg-black text-white border-black":"border-slate-300 text-slate-700 hover:bg-slate-50"}`}
                  aria-label={`Switch hero copy to ${set}`}
                >{set}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-6">
            <div className="grid grid-cols-2 gap-4 h-full">
            {/* <Card key={0} title="" desc="" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
