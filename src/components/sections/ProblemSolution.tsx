"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';

const ProblemSolution = () => {
  const { content } = useCopy();
  const psContent = content.problemSolution;

  return (
    <section id="problem-solution" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold uppercase tracking-wider">{psContent.tagline}</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            {psContent.heading}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h3 className="text-2xl font-bold text-red-800 mb-4">{psContent.problem.title}</h3>
            <ul className="space-y-4">
              {psContent.problem.points.map((item: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-red-500 flex-shrink-0">✖</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solution Side */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-4">{psContent.solution.title}</h3>
            <ul className="space-y-4">
              {psContent.solution.points.map((item: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-green-500 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
