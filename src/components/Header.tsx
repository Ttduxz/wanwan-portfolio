import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10 border-b border-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
        <Link href="/" className="font-bold text-2xl tracking-widest font-['Playfair_Display'] hover:text-gray-500 transition">
          JIRAPAT KANTAROS
        </Link>
        <nav className="hidden md:flex gap-10 text-base font-light tracking-wider">
          <Link href="/" className="hover:text-gray-500 transition">ABOUT</Link>
          <Link href="/portfolio" className="hover:text-gray-500 transition">PORTFOLIO</Link>
          <Link href="/why-me" className="hover:text-gray-500 transition">WHY ME</Link>
          <Link href="/contact" className="hover:text-gray-500 transition">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
} 