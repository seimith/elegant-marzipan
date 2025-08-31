"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';

interface SocialLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: { name: string; href: string; }[];
}

const Footer = () => {
  const { content } = useCopy();
  const footerContent = content.footer as any;

  // Handle both footer structures (columns structure or links structure)
  const hasColumns = footerContent?.columns && Array.isArray(footerContent.columns);
  const hasLinks = footerContent?.links && Array.isArray(footerContent.links);
  const hasSocialLinks = footerContent?.socialLinks && Array.isArray(footerContent.socialLinks);
  
  return (
    <footer className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[radial-gradient(ellipse_at_top,rgba(100,116,139,0.15),transparent_70%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          <div className="rounded-3xl bg-slate-800/50 shadow-xl ring-1 ring-slate-700/50 p-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {/* Logo and intro */}
              <div className="col-span-2">
                <div className="text-xl font-semibold text-white">{footerContent?.companyName || 'Vault'}</div>
                <p className="mt-4 text-sm text-slate-300">
                  {footerContent?.description || footerContent?.tagline || 'Transforming the way investment groups collaborate.'}
                </p>
                
                {hasSocialLinks && (
                  <div className="mt-6 flex space-x-4">
                    {footerContent.socialLinks.map((social: SocialLink, index: number) => (
                      <a key={index} href={social.href} className="rounded-full bg-slate-700/70 p-2 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors">
                        <span className="sr-only">{social.name}</span>
                        {/* Icon placeholder using SVG for modern look */}
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation links - handle both structures */}
              {hasColumns && (
                <>
                  {footerContent.columns.map((column: FooterColumn, index: number) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
                        {column.title}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {column.links.map((link: { name: string; href: string }, linkIndex: number) => (
                          <li key={linkIndex}>
                            <a 
                              href={link.href} 
                              className="text-sm text-slate-300 hover:text-white transition-colors"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}

              {/* Alternative structure for links */}
              {hasLinks && !hasColumns && (
                <>
                  {footerContent.links.map((section: any, index: number) => (
                    <div key={index}>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
                        {section.title}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {section.links.map((link: { name: string; href: string }, linkIndex: number) => (
                          <li key={linkIndex}>
                            <a 
                              href={link.href} 
                              className="text-sm text-slate-300 hover:text-white transition-colors"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Bottom bar */}
            <div className="mt-12 border-t border-slate-700/50 pt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-slate-400">
                  &copy;{footerContent?.legal?.copyright || '2025 Vault. All rights reserved.'}
                </p>
                {footerContent?.legal?.links && (
                  <div className="mt-4 flex space-x-6 md:mt-0">
                    {footerContent.legal.links.map((link: { name: string; href: string }, index: number) => (
                      <a 
                        key={index} 
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
