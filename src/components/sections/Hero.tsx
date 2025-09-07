"use client";

import React, { useEffect } from 'react';
import { useCopy, ContentSet } from '../../content/CopyContext';
import Image from 'next/image'

// // Card component for the hero section
// function Card({title, desc}: {title: string; desc: string}){
//   return (
//     <div className="rounded-2xl border border-slate-200 p-4 hover:shadow-md transition-shadow">
//       <div className="flex items-center gap-2 mb-2">
//         <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-900"/>
//         <h3 className="font-semibold text-slate-900">{title}</h3>
//       </div>
//       <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
//     </div>
//   );
// }

const Hero = () => {
  const { content, availableCopySets, switchCopySet } = useCopy();
  const heroContent = content.hero;

  // Early return if no content
  if (!heroContent) return null;
  
  // Support URL query parameter for variant testing if needed
  useEffect(() => {
    function handleCopySetFromURL() {
      if (typeof window !== 'undefined') {
        const q = new URLSearchParams(window.location.search);
        const v = q.get("copySet");
        if (v && availableCopySets.includes(v as ContentSet)) {
          switchCopySet(v as ContentSet);
        }
      }
    }
    
    handleCopySetFromURL();
  }, [availableCopySets, switchCopySet]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            {heroContent.badge || "Governance-first group investing"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            {heroContent.headline || heroContent.heading || "Group investing without the group drama."}
          </h1>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed">
            {heroContent.subhead || heroContent.subheading || "Take the conflict out of group investing. Our platform ensures every contribution, payout, and decision is clear and auditable."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a 
              href={typeof heroContent.cta?.primary === 'string' ? 
                '#signup' : 
                (heroContent.cta?.primary?.href || '#signup')} 
              className="rounded-xl bg-black px-5 py-3 text-white text-sm font-medium hover:bg-slate-900"
            >
              {typeof heroContent.cta?.primary === 'string' ? 
                heroContent.cta?.primary : 
                (heroContent.cta?.primary?.text || 'Get Started')}
            </a>
            <a 
              href={typeof heroContent.cta?.secondary === 'string' ? 
                '#demo' : 
                (heroContent.cta?.secondary?.href || '#demo')} 
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium hover:bg-slate-50"
            >
              {typeof heroContent.cta?.secondary === 'string' ? 
                heroContent.cta?.secondary : 
                (heroContent.cta?.secondary?.text || 'Learn More')}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl bg-slate-100 shadow-xl ring-1 ring-slate-200 p-6 relative overflow-hidden">
            <Image 
              src="/vaultscreen.png" 
              alt="Screenshot of Vault"
              fill
              style={{ objectFit: 'cover', padding: '1rem' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
