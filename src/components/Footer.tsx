import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#why-me', label: 'Why Me' },
  { href: '/#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200/80 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">

        <div className="border-t border-gray-200/80 mt-8 pt-8 text-sm text-gray-500 font-light text-center md:flex md:justify-between">
          <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Jirapat Kantaros. All Rights Reserved.</p>
          <a href="mailto:wanwanjirapatkantaros@gmail.com" className="underline hover:text-amber-800 transition-colors">
            wanwanjirapatkantaros@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
} 