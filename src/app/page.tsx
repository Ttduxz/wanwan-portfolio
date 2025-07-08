'use client';

import Image from "next/image";
import Link from "next/link";
import DynamicSections from "@/components/DynamicSections";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main className="font-sans bg-gradient-to-b from-[#fefefe] to-[#faf9f6] text-gray-800">
        {/* Hero Section */}
        <section 
          id="home" 
          className="relative overflow-hidden min-h-screen flex items-center py-16 md:py-20"
        >
          <div 
            aria-hidden="true"
            className="hidden md:block absolute top-0 -left-1/4 w-[50rem] h-[50rem] bg-amber-400/20 rounded-full filter blur-3xl opacity-30"
          ></div>
           <div 
            aria-hidden="true"
            className="hidden md:block absolute -bottom-1/4 right-0 w-[30rem] h-[30rem] bg-orange-400/20 rounded-full filter blur-3xl opacity-40"
          ></div>
          <div className="container mx-auto px-6 sm:px-12 relative z-10">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-gray-800 leading-tight">
                    {language === 'en' ? (
                      <>Welcome to <br /> My Website</>
                    ) : (
                      <>欢迎来到<br />我的网站</>
                    )}
                  </h1>
                  <p className="mt-4 text-base md:text-lg text-gray-600 uppercase tracking-widest font-light">
                    {language === 'en' ? '— A Creative based in Chiang Mai' : '一我在清迈工作和生活'}
                  </p>
                  <div className="mt-8 flex flex-col items-center lg:items-start">
                    <div className="grid grid-cols-2 gap-3 md:hidden w-full max-w-xs">
                      <Link href="/#about" className="border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                        {language === 'en' ? 'About Me' : '关于我'}
                      </Link>
                      <Link href="/#portfolio" className="border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                        {language === 'en' ? 'Portfolio' : '作品集'}
                      </Link>
                      <Link href="/#brands" className="border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                        {language === 'en' ? 'Brands' : '合作品牌'}
                      </Link>
                      <Link href="/#contact" className="bg-amber-800 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-900 transition-colors duration-300 text-center">
                        {language === 'en' ? 'Contact Me' : '联系我'}
                      </Link>
                    </div>
                    <div className="hidden md:flex gap-4">
                      <Link href="/#portfolio" className="bg-amber-800 text-white rounded-full px-8 py-3 font-semibold shadow-md hover:shadow-lg hover:bg-amber-900 transition-all duration-300">
                        {language === 'en' ? 'View My Work' : '查看我的作品'}
                      </Link>
                      <Link href="/#contact" className="border border-amber-800 text-amber-800 rounded-full px-8 py-3 font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300">
                        {language === 'en' ? 'Contact Me' : '联系方式'}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-8 lg:mt-0">
                  <Image
                    src="/profilev2.png"
                    alt="Jirapat Kantaros Profile"
                    width={400}
                    height={533}
                    className="rounded-lg shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        <DynamicSections language={language} />
        <section className="py-12 bg-amber-800/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-amber-900/80 md:whitespace-nowrap">
              {language === 'en'
                ? '"Your brand has a story. I craft the words and visuals to make sure your audience listens."'
                : '“您的品牌有一个故事。我用文字和视觉确保您的受众能够倾听。”'}
            </h3>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}
