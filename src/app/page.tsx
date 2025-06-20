import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-white via-[#fdfaf3] to-[#fcf7ed] text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-28 pb-12 max-w-7xl mx-auto px-6 sm:px-12 gap-8 md:gap-0">
        {/* Left: Content */}
        <section className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-12">
          <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold mb-4 leading-tight">Welcome to<br />My portfolio</h1>
          <p className="text-md text-gray-500 mb-10 tracking-widest">— BASED IN CHIANG MAI</p>
          <p className="text-base leading-relaxed mb-10 font-light max-w-md">
            A graphic design student majored in Visual Communication Design. I'm interested in challenging myself to gain new knowledges and developing my creativity in fun and creative designs. I consider myself as a hard-working and easy to adapt. I hope my abilities able to contribute to the growth of your firm.
          </p>
          <div>
            <h3 className="text-xl font-['Playfair_Display'] font-bold mb-6">EDUCATION</h3>
            <ul className="text-sm space-y-4 text-gray-600">
              <li>
                <span className="font-semibold text-gray-800">2017 – 2020</span><br />
                Atisa Dipamkara Vocational HighSchool<br />
                Multimedia
              </li>
              <li>
                <span className="font-semibold text-gray-800">2020</span><br />
                Multimedia Nusantara University<br />
                Visual Communication Design
              </li>
            </ul>
          </div>
        </section>
        {/* Right: Image */}
        <section className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md aspect-[3/4] flex items-center justify-center">
            <img
              src="/profile.png"
              alt="JIRAPAT KANTAROS Portrait"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </section>
      </div>
      
      {/* About Me Section (appended below) */}
      <div className="flex flex-col items-center justify-center pt-12 pb-12 max-w-3xl mx-auto px-6 sm:px-12">
        <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight">About Me</h1>
        <section className="mb-10">
          <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">My Story</h2>
          <p className="text-base leading-relaxed font-light mb-4 text-center">
            Hi! I'm Jirapat Kantaros, a graphic design student based in Chiang Mai. My journey in design began with a love for art and storytelling. Over the years, I've developed a passion for visual communication and enjoy using design to solve problems and inspire others. I believe that good design is not just about aesthetics, but about making meaningful connections.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">My Design Philosophy</h2>
          <p className="text-base leading-relaxed font-light mb-4 text-center">
            I am inspired by simplicity, clarity, and the power of color. My approach is to create designs that are both beautiful and functional, always keeping the user's experience in mind. I love experimenting with new styles and techniques, and I am always eager to learn and grow as a designer.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">Beyond Design</h2>
          <p className="text-base leading-relaxed font-light text-center">
            When I'm not designing, you can find me exploring new cafes, traveling, or capturing moments with my camera. I also enjoy reading, music, and spending time with friends and family. These experiences fuel my creativity and help me bring fresh perspectives to my work.
          </p>
        </section>
      </div>
    </main>
  );
}
