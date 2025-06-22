import Image from "next/image";
import Link from "next/link";
import DynamicSections from "@/components/DynamicSections";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="font-sans bg-gradient-to-b from-[#fefcf8] to-[#fcf7ed] text-gray-800">
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center py-16 md:py-20"
      >
        <div className="container mx-auto px-6 sm:px-12">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-gray-800 leading-tight">
                  Welcome to <br /> My Portfolio
                </h1>
                <p className="mt-4 text-base md:text-lg text-gray-600 uppercase tracking-widest font-light">
                  — A Creative based in Chiang Mai
                </p>
                
                {/* --- CTA Buttons --- */}
                <div className="mt-8 flex flex-col items-center lg:items-start">
                  {/* Mobile: 4-button grid */}
                  <div className="grid grid-cols-2 gap-3 md:hidden w-full max-w-xs">
                    <Link href="/#about" className="border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                      About Me
                    </Link>
                    <Link href="/#portfolio" className="border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                      Portfolio
                    </Link>
                    <Link href="/#why-me" className="border border-amber-800 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300 text-center">
                      Why Me
                    </Link>
                    <Link href="/#contact" className="bg-amber-800 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-900 transition-colors duration-300 text-center">
                      Contact Me
                    </Link>
                  </div>
  
                  {/* Desktop: 2-button row */}
                  <div className="hidden md:flex gap-4">
                    <Link href="/#portfolio" className="bg-amber-800 text-white rounded-full px-8 py-3 font-semibold shadow-md hover:shadow-lg hover:bg-amber-900 transition-all duration-300">
                      View My Work
                    </Link>
                    <Link href="/#contact" className="border border-amber-800 text-amber-800 rounded-full px-8 py-3 font-semibold hover:bg-amber-800 hover:text-white transition-colors duration-300">
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 lg:mt-0">
                <Image
                  src="/profile.webp"
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
      
      <DynamicSections />

      {/* Banner Section */}
      <section className="py-12 bg-amber-800/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-amber-900/80">
            &quot;Your brand has a story. I craft the words and visuals to make sure your audience listens.&quot;
          </h3>
        </div>
      </section>
    </main>
  );
}
