'use client';

import { useState } from 'react';
import Image from "next/image";
import { projects } from "@/app/portfolio/data";
import ProjectModal from './ProjectModal'; // We will create this component next

interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
}

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="portfolio" className="py-16 md:py-24">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-12 leading-tight text-center" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group block relative w-full aspect-[4/5] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-['Playfair_Display'] font-bold drop-shadow-lg">{project.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
} 