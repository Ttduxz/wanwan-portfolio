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
      <PortfolioSection />
      <WhyMeSection />
      <ContactSection />
    </>
  );
} 