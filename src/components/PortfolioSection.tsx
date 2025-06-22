'use client';

import { portfolioImages } from "@/app/portfolio/data";
import ProjectCarousel from "./ProjectCarousel";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white text-gray-800 lg:min-h-screen flex flex-col justify-center">
      {/* Main Portfolio Header */}
      <div className="container mx-auto px-4 md:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Portfolio</h2>
        <p className="text-lg text-gray-500 mt-4">A collection of my recent work</p>
      </div>
      
      {/* A single, full-width carousel for all projects */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20">
        <ProjectCarousel images={portfolioImages} title="Portfolio Work" />
      </div>
    </section>
  );
} 