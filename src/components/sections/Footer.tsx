"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';

const Footer = () => {
  const { content } = useCopy();
  const footerContent = content.footer;
  const footerLinks = footerContent.links;

  // const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section with Logo and Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-700">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="font-bold text-2xl mb-4">{footerContent.companyName}</div>
            <p className="text-gray-400 mb-6">
              {footerContent.tagline}
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, i) => (
                <a 
                  href="#" 
                  key={i}
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <div className="text-lg">{
                    social === 'twitter' ? '𝕏' : 
                    social === 'facebook' ? 'f' :
                    social === 'instagram' ? '📷' :
                    social === 'linkedin' ? 'in' : ''
                  }</div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section with Copyright and Legal Links */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            {footerContent.legal.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerContent.legal.links.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-500 hover:text-white text-sm">{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
