'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/#about', label: 'ABOUT' },
  { href: '/#portfolio', label: 'PORTFOLIO' },
  { href: '/#why-me', label: 'WHY ME' },
  { href: '/#contact', label: 'CONTACT' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if user has scrolled down more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
        <Link href="/#home" className="hover:opacity-80 transition">
          <Image src="/logo.webp" alt="JK Logo" width={60} height={60} priority className="rounded-full" />
        </Link>

        {/* Mobile Contact Info */}
        <div className="md:hidden flex items-center gap-4">
          <a href="https://line.me/ti/p/wanwanjirapat" target="_blank" rel="noopener noreferrer" title="Add on LINE" className="hover:opacity-80 transition-opacity">
            <Image src="/line-me.png" alt="LINE" width={26} height={26} />
          </a>
          <a href="mailto:wanwanjirapatkantaros@gmail.com" title="Email me" className="hover:opacity-80 transition-opacity">
            <Image src="/email.svg" alt="Email" width={26} height={26} />
          </a>
          <a href="tel:0659626152" title="Call me" className="hover:opacity-80 transition-opacity">
              <Image src="/phone_icon.png" alt="Phone" width={20} height={20} />
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
  );
} 