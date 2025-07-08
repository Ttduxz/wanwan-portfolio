'use client';

import { portfolioImages } from "@/app/portfolio/data";
import ProjectCarousel from "./ProjectCarousel";
import AnimatedSection from "./AnimatedSection";

interface PortfolioSectionProps {
  language: 'en' | 'zh';
}

export default function PortfolioSection({ language }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="relative overflow-hidden py-20 bg-white text-gray-800 lg:min-h-screen flex flex-col justify-center pb-16 md:pb-0">
      <div className="relative z-10">
        <AnimatedSection>
          {/* Main Portfolio Header */}
          <div className="container mx-auto px-4 md:px-8 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
              {language === 'en' ? 'Portfolio' : '作品集'}
            </h2>
            <p className="text-lg text-gray-500 mt-4">
              {language === 'en' ? 'A collection of my recent work' : '近期作品集锦'}
            </p>
          </div>
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20">
            <ProjectCarousel images={portfolioImages} title={language === 'en' ? 'Portfolio Work' : '作品集'} language={language} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 