'use client';

import { projects } from "@/app/portfolio/data";
import ProjectCarousel from "./ProjectCarousel";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="w-full px-4 md:px-8 max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Portfolio</h2>
          <p className="text-lg text-gray-500 mt-4">A collection of my recent work</p>
        </header>
        
        <div className="space-y-20">
          {projects.map((project) => (
            <div key={project.id}>
              <h3 className="text-3xl font-['Playfair_Display'] font-bold mb-2 text-center">{project.title}</h3>
              <p className="text-md text-gray-500 mb-6 text-center">{project.category}</p>
              <ProjectCarousel images={project.images} title={project.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 