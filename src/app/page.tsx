import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-white via-[#fdfaf3] to-[#fcf7ed] text-gray-800">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10 border-b border-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
          <div className="font-bold text-2xl tracking-widest font-['Playfair_Display']">JIRAPAT KANTAROS</div>
          <nav className="hidden md:flex gap-10 text-base font-light tracking-wider">
            <a href="#portfolio" className="hover:text-gray-500 transition">PORTFOLIO</a>
            <a href="#about" className="hover:text-gray-500 transition">ABOUT</a>
            <a href="#contact" className="hover:text-gray-500 transition">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
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

      {/* Footer */}
      <footer className="w-full border-t border-[#f5f5f5] py-8 mt-8 bg-white/70 text-center text-sm font-light tracking-wider">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Jirapat Kantaros</span>
          <span>Contact: <a href="wanwanjirapatkantaros@gmail.com" className="underline hover:text-gray-500">wanwanjirapatkantaros@gmail.com</a></span>
        </div>
      </footer>
    </main>
  );
}
