import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-white via-[#fdfaf3] to-[#fcf7ed] text-gray-800">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10 border-b border-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
          <Link href="/" className="font-bold text-2xl tracking-widest font-['Playfair_Display'] hover:text-gray-500 transition">JIRAPAT KANTAROS</Link>
          <nav className="hidden md:flex gap-10 text-base font-light tracking-wider">
            <Link href="/" className="hover:text-gray-500 transition">PORTFOLIO</Link>
            <Link href="/about" className="hover:text-gray-500 transition">ABOUT</Link>
            <Link href="/contact" className="hover:text-gray-500 transition">CONTACT</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-28 pb-12 max-w-3xl mx-auto px-6 sm:px-12">
        <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight">About Me</h1>
        <section className="mb-10">
          <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">My Story</h2>
          <p className="text-base leading-relaxed font-light mb-4">
            Hi! I'm Jirapat Kantaros, a graphic design student based in Chiang Mai. My journey in design began with a love for art and storytelling. Over the years, I've developed a passion for visual communication and enjoy using design to solve problems and inspire others. I believe that good design is not just about aesthetics, but about making meaningful connections.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">My Design Philosophy</h2>
          <p className="text-base leading-relaxed font-light mb-4">
            I am inspired by simplicity, clarity, and the power of color. My approach is to create designs that are both beautiful and functional, always keeping the user's experience in mind. I love experimenting with new styles and techniques, and I am always eager to learn and grow as a designer.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-['Playfair_Display'] font-semibold mb-4">Beyond Design</h2>
          <p className="text-base leading-relaxed font-light">
            When I'm not designing, you can find me exploring new cafes, traveling, or capturing moments with my camera. I also enjoy reading, music, and spending time with friends and family. These experiences fuel my creativity and help me bring fresh perspectives to my work.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-[#f5f5f5] py-8 mt-8 bg-white/70 text-center text-sm font-light tracking-wider">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Jirapat Kantaros</span>
          <span>Contact: <a href="mailto:wanwanjirapatkantaros@gmail.com" className="underline hover:text-gray-500">wanwanjirapatkantaros@gmail.com</a></span>
        </div>
      </footer>
    </main>
  );
} 