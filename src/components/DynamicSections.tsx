'use client';

import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import('@/components/AboutSection'));
const WhyMeSection = dynamic(() => import('@/components/WhyMeSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));

const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'), {
  loading: () => <div className="min-h-[800px]" />,
});

export default function DynamicSections() {
  return (
    <>
      <AboutSection />
      <section className="py-12 bg-amber-800/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-amber-900/80">
            &quot;I enjoy bringing ideas to life and believe good work comes from both creativity and consistency.&quot;
          </h3>
        </div>
      </section>
      <PortfolioSection />
      <WhyMeSection />
      <ContactSection />
    </>
  );
} 