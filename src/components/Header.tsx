'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'ABOUT' },
  { href: '/portfolio', label: 'PORTFOLIO' },
  { href: '/why-me', label: 'WHY ME' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10 border-b border-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
        <Link href="/" className="font-bold text-2xl tracking-widest font-['Playfair_Display'] hover:text-gray-500 transition">
          JIRAPAT KANTAROS
        </Link>
        <nav className="hidden md:flex gap-10 text-base font-light tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative hover:text-gray-500 transition ${
                  isActive ? 'text-gray-900' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gray-900"></span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
} 