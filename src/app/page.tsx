"use client";

import Hero from '../components/sections/Hero';
import ProblemSolution from '../components/sections/ProblemSolution';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import Closing from '../components/sections/Closing';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Closing />
      <Footer />
    </div>
  );
}
