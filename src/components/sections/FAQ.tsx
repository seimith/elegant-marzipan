"use client";

import React, { useState } from 'react';

// FAQ item component with expandable/collapsible functionality
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-200">
      <button 
        className="flex w-full items-start justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-slate-900">{question}</span>
        <span className="ml-6 flex h-7 items-center">
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
        <div className="prose prose-slate prose-a:text-blue-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

// Main FAQ component
const FAQ = () => {
  // These would typically come from your copy context
  const faqs = [
    {
      question: "What is Vault?",
      answer: "Vault helps you and your friends, family, or peers pool money into a legally distinct investment group and manage everything from agreements to cash flow in one place. We’re not a fund, and we don’t give investment advice—everything stays in your control."
    },
    {
      question: "Do I need to be an investment expert to use Vault?",
      answer: "Not at all. Vault handles the legal setup, governance, and tax filings so your group can focus on deciding what to invest in."
    },
    {
      question: "What types of investments can we make?",
      answer: "Vault is asset-agnostic — your group can invest in real estate, startups, stocks, art, or any other legal asset."
    },
    {
      question: "How is my money kept safe?",
      answer: "Each group has a dedicated bank account with transparent contributions and distributions. Funds are kept separate from Vault's operations and other groups."
    },
    {
      question: "How does Vault prevent disputes within the group?",
      answer: "All decisions — from new deals to exits — are made through built-in real-time voting. Your group agrees on rules up front with a custom operating agreement, so expectations are clear."
    },
    {
      question: "What about taxes and compliance?",
      answer: "Vault automates filings, fees, and K-1 generation so you don't get stuck with paperwork."
    },
    {
      question: "How much does Vault cost?",
      answer: "Vault keeps pricing simple: a flat fee for setup and compliance, a monthly fee for administration, and a small additional charge for off-schedule distributions (like exits), based on asset class."
    },
    {
      question: "Who owns the assets — me, my group, or Vault?",
      answer: "Your group owns the assets. Vault is just the infrastructure that makes it possible."
    },
    {
      question: "Can I leave a group once I've joined?",
      answer: "Yes. Each group's operating agreement defines the process for exiting, transferring ownership, or cashing out."
    },
    {
      question: "How do I start a group?",
      answer: "Sign up, create a group, invite members, and Vault will walk you through legal setup, bank account creation, and governance rules. You can be up and running in days, not weeks."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50" id="faq">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            Everything you need to know about Vault
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
