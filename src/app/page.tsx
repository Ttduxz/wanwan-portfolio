import Image from "next/image";
import Link from "next/link";
import DynamicSections from "@/components/DynamicSections";

export default function Home() {
  return (
    <main className="font-sans bg-gradient-to-b from-[#fefcf8] to-[#fcf7ed] text-gray-800">
      
      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full">
          {/* Left: Content */}
          <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left md:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-['Playfair_Display'] font-bold mb-4 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Welcome to<br />My portfolio</h1>
            <p className="text-md text-gray-500 mb-10 tracking-widest">— A CREATIVE BASED IN CHIANG MAI</p>
            
            {/* --- CTA Buttons --- */}
            <div className="w-full sm:w-auto">
              {/* Mobile: 4-button grid */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                <Link href="/#about" className="bg-transparent border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                  About Me
                </Link>
                <Link href="/#portfolio" className="bg-transparent border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                  Portfolio
                </Link>
                <Link href="/#why-me" className="bg-transparent border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                  Why Me
                </Link>
                <Link href="/#contact" className="bg-amber-800 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-900 transition-colors duration-300 text-center">
                  Contact Me
                </Link>
              </div>

              {/* Desktop: 2-button row */}
              <div className="hidden md:flex flex-col sm:flex-row items-center gap-4">
                <Link href="/#portfolio" className="bg-amber-800 text-white rounded-full px-8 py-3 font-semibold hover:bg-amber-900 transition-colors duration-300 text-center w-full sm:w-auto">
                  View My Work
                </Link>
                <Link href="/#contact" className="bg-transparent border border-amber-800 text-amber-800 rounded-full px-8 py-3 font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center w-full sm:w-auto">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="w-full md:w-2/5 flex items-start justify-center mt-8 md:mt-0 md:pt-20">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] flex items-center justify-center">
              <Image
                src="/profile.webp"
                alt="JIRAPAT KANTAROS Portrait"
                width={400}
                height={533}
                priority
                className="w-full h-full object-contain rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href="#about" className="flex flex-col items-center text-gray-500 opacity-75 hover:opacity-100 transition-opacity cursor-pointer animate-pulse">
                <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
                <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </a>
        </div>
      </section>
      
      <DynamicSections />

      {/* Banner Section */}
      <section className="py-12 bg-amber-800/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-amber-900/80">
            &quot;I enjoy bringing ideas to life and believe good work comes from both creativity and consistency.&quot;
          </h3>
        </div>
      </section>
    </main>
  );
}
