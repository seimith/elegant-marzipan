"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';

const Nav = () => {
  const { content } = useCopy();
  const navContent = content.nav;

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-black"></div>
          <span className="font-semibold tracking-tight text-slate-900">{navContent.logo}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {navContent.links.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-slate-900">{link.text}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* <a 
            href={navContent.cta.secondary.href} 
            className="hidden sm:inline-block rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            {navContent.cta.secondary.text}
          </a> */}
          <a 
            href={navContent.cta.primary.href} 
            className="inline-block rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-slate-900"
          >
            {navContent.cta.primary.text}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
