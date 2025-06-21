'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-10 border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-24">
        <Link href="/" className="hover:opacity-80 transition">
          <Image src="/logo.png" alt="JK Logo" width={80} height={80} priority className="rounded-full" />
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