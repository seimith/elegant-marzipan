"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';
import { ProblemSolutionContent } from '../../types/copyTypes';

const ProblemSolution = () => {
  const { content } = useCopy();
  const psContent = content.problemSolution as ProblemSolutionContent;
  
  // Early return if no content
  if (!psContent) return null;

  return (
    <section id="solution" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{psContent.problem?.title || 'Common Challenges'}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            {psContent.problem?.points?.[0] || 'Organizations face numerous challenges with their current processes.'}
          </p>
          <ul className="mt-6 list-disc pl-5 text-slate-700 space-y-2">
            {psContent.problem?.points?.slice(1).map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{psContent.solution?.title || 'Our Solution'}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            {psContent.solution?.points?.[0] || 'Our platform solves these problems with an innovative approach.'}
          </p>
          <ul className="mt-6 list-disc pl-5 text-slate-700 space-y-2">
            {psContent.solution?.points?.slice(1).map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
