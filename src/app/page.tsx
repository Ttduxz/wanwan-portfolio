import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-white via-[#fdfaf3] to-[#fcf7ed] text-gray-800">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-start justify-center min-h-screen pt-28 pb-12 max-w-7xl mx-auto px-6 sm:px-12 gap-8 md:gap-0">
        {/* Left: Content */}
        <section className="w-full md:w-3/5 flex flex-col justify-center items-start md:pr-12">
          <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold mb-4 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>Welcome to<br />My portfolio</h1>
          <p className="text-md text-gray-500 mb-10 tracking-widest">— BASED IN CHIANG MAI</p>
          <div className="border-l-2 border-amber-900 pl-6 space-y-8 text-gray-700">
            <p className="leading-relaxed">
              My name is Jirapat Kantaros. I graduated from Chiang Mai University, Faculty of Mass Communication. During my studies, I gained hands-on experience in areas like creative communication, media production, marketing planning, and basic project coordination.
            </p>
            <p className="leading-relaxed">
              I enjoy bringing ideas to life. Whether it&apos;s creating content, helping plan marketing campaigns, or working on visuals, I always do my best and pay attention to the details. I believe good work comes from creativity and consistency.
            </p>
            <p className="leading-relaxed">
              While at university, I interned with Minor International (anello brand), where I helped create marketing content. The internship helped me better understand how real marketing works. I was responsible for end-to-end tasks and had the opportunity to explore other areas like e-commerce and team coordination
            </p>
          </div>
        </section>
        {/* Right: Image */}
        <section className="w-full md:w-2/5 flex items-start justify-center md:pt-20">
          <div className="w-full max-w-md aspect-[3/4] flex items-center justify-center">
            <Image
              src="/profile.png"
              alt="JIRAPAT KANTAROS Portrait"
              width={400}
              height={533}
              className="w-full h-full object-contain rounded-2xl shadow-md"
            />
          </div>
        </section>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href="#about" className="flex flex-col items-center text-gray-500 opacity-75 hover:opacity-100 transition-opacity cursor-pointer animate-pulse">
                <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
                <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </a>
        </div>
      </div>
      
      {/* About Me Section (appended below) */}
      <div id="about" className="flex flex-col items-center justify-center pt-12 pb-12 max-w-3xl mx-auto px-6 sm:px-12">
        <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>About Me</h1>
        <section className="mb-10">
          <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">My Story</h2>
          <p className="text-base leading-relaxed font-light mb-4 text-center">
            Hi! I&apos;m Jirapat Kantaros, a graphic design student based in Chiang Mai. My journey in design began with a love for art and storytelling. Over the years, I&apos;ve developed a passion for visual communication and enjoy using design to solve problems and inspire others. I believe that good design is not just about aesthetics, but about making meaningful connections.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">My Design Philosophy</h2>
          <p className="text-base leading-relaxed font-light mb-4 text-center">
            I am inspired by simplicity, clarity, and the power of color. My approach is to create designs that are both beautiful and functional, always keeping the user&apos;s experience in mind. I love experimenting with new styles and techniques, and I am always eager to learn and grow as a designer.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">Beyond Design</h2>
          <p className="text-base leading-relaxed font-light text-center">
            When I&apos;m not designing, you can find me exploring new cafes, traveling, or capturing moments with my camera. I also enjoy reading, music, and spending time with friends and family. These experiences fuel my creativity and help me bring fresh perspectives to my work.
          </p>
        </section>
      </div>
    </main>
  );
}
