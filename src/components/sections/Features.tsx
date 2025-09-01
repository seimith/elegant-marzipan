"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';
import { FeatureItem as FeatureItemType } from '../../types/copyTypes';

interface FeatureItemProps {
  icon?: string;
  title: string;
  description?: string;
  desc?: string;
}

const FeatureItem = ({ icon, title, description, desc }: FeatureItemProps) => (
  <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow bg-white">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
        <span className="text-xl">{icon}</span>
      </div>
    </div>
    <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{description || desc}</p>
  </div>
);

const Features = () => {
  const { content } = useCopy();
  const featuresContent = content?.features;
  
  // Early return if no content
  if (!featuresContent) return null;

  // Check which feature structure we have (items vs featureList)
  const featureItems = featuresContent?.items || featuresContent?.featureList || [];
  
  return (
    <section className="relative overflow-hidden bg-slate-50" id="features">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            {featuresContent?.tagline || "Key Features"}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {featuresContent?.heading || "Powerful Features For Successful Group Investing"}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-700">
            {featuresContent?.description || featuresContent?.subheading || "Everything you need to manage your investment group efficiently"}
          </p>
        </div>

        <div className="relative mt-16">
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featureItems?.map((feature: FeatureItemType, index: number) => (
                <FeatureItem 
                  key={index}
                  icon={feature.icon || '✨'}
                  title={feature.title}
                  description={feature.description || feature.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
