import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#why-me', label: 'Why Me' },
  { href: '/#contact', label: 'Contact' },
];

const socialLinks = [
    { href: '#', label: 'LinkedIn' },
    { href: '#', label: 'Behance' },
    { href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200/80 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/#home">
                <Image src="/logo.png" alt="JK Logo" width={48} height={48} className="rounded-full hover:opacity-80 transition-opacity" />
            </Link>
          </div>
          
          {/* Nav Links (hidden on mobile) */}
          <div className="hidden md:flex flex-col gap-2 text-base font-light tracking-wider">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-amber-800 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-2 text-base font-light tracking-wider">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-amber-800 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

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