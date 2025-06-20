import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-white via-[#fdfaf3] to-[#fcf7ed] text-gray-800">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10 border-b border-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
          <Link href="/" className="font-bold text-2xl tracking-widest font-['Playfair_Display'] hover:text-gray-500 transition">JIRAPAT KANTAROS</Link>
          <nav className="hidden md:flex gap-10 text-base font-light tracking-wider">
            <Link href="/" className="hover:text-gray-500 transition">ABOUT</Link>
            <Link href="/portfolio" className="hover:text-gray-500 transition">PORTFOLIO</Link>
            <Link href="/contact" className="hover:text-gray-500 transition">CONTACT</Link>
          </nav>
        </div>
      </header>

      {/* Portfolio Section */}
      <section className="w-full px-8 py-32 max-w-6xl mx-auto pt-32">
        <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-10 leading-tight">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              {/* Replace with real project image */}
              <span className="text-gray-400">Project Image</span>
            </div>
            <div className="text-lg font-light">Project Title 1</div>
          </div>
          {/* Portfolio Item 2 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Project Image</span>
            </div>
            <div className="text-lg font-light">Project Title 2</div>
          </div>
          {/* Portfolio Item 3 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Project Image</span>
            </div>
            <div className="text-lg font-light">Project Title 3</div>
          </div>
          {/* Add more items as needed */}
        </div>
      </section>

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