'use client';

import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/#about', label: 'ABOUT' },
  { href: '/#portfolio', label: 'PORTFOLIO' },
  { href: '/#why-me', label: 'WHY ME' },
  { href: '/#contact', label: 'CONTACT' },
];

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
          <Link href="/#home" className="hover:opacity-80 transition">
            <Image src="/logo.png" alt="JK Logo" width={60} height={60} priority className="rounded-full" />
          </Link>

          {/* Mobile Contact Info */}
          <div className="md:hidden flex items-center gap-4">
            <a href="#" title="Add on LINE" className="hover:opacity-80 transition-opacity">
              <Image src="/line_icon.svg" alt="LINE" width={26} height={26} />
            </a>
            <a href="mailto:wanwanjirapatkantaros@gmail.com" title="Email me" className="hover:opacity-80 transition-opacity">
              <Image src="/email.svg" alt="Email" width={26} height={26} />
            </a>
            <a href="tel:0659626152" title="Call me" className="hover:opacity-80 transition-opacity">
                <Image src="/phone_logo.svg" alt="Phone" width={24} height={24} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-base font-light tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative hover:text-gray-500 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
} 