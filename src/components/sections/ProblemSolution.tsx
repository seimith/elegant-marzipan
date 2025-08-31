"use client";

import React from 'react';
import { useCopy } from '../../content/CopyContext';

const ProblemSolution = () => {
  const { content } = useCopy();
  const psContent = content.problemSolution;

  return (
    <section id="solution" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{psContent.problem.title}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            {psContent.problem.points[0]}
          </p>
          <ul className="mt-6 list-disc pl-5 text-slate-700 space-y-2">
            {psContent.problem.points.slice(1).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{psContent.solution.title}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            {psContent.solution.points[0]}
          </p>
          <ul className="mt-6 list-disc pl-5 text-slate-700 space-y-2">
            {psContent.solution.points.slice(1).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
