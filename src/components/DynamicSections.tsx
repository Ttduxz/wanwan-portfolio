'use client';

import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import('@/components/AboutSection'));
const BrandsSection = dynamic(() => import('@/components/BrandsSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'), {
  loading: () => <div className="min-h-[800px]" />,
});

interface DynamicSectionsProps {
  language: 'en' | 'zh';
}

export default function DynamicSections({ language }: DynamicSectionsProps) {
  return (
    <>
      <AboutSection language={language} />
      <section className="py-12 bg-amber-800/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-amber-900/80 md:whitespace-nowrap">
            {language === 'en'
              ? '"If you’re looking for someone who is dedicated, determined, and creative, this is the person you’re looking for."'
              : '“如果你正在寻找一个有责任心、有决心、有创意的人，那就是我。”'}
          </h3>
        </div>
      </section>
      <PortfolioSection language={language} />
      <BrandsSection language={language} />
      <ContactSection language={language} />
    </>
  );
} 