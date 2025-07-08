'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  language: 'en' | 'zh';
  setLanguage: (lang: 'en' | 'zh') => void;
}

const navLinks = [
  { href: '/#about', labelEn: 'ABOUT', labelZh: '关于我' },
  { href: '/#portfolio', labelEn: 'PORTFOLIO', labelZh: '作品集' },
  { href: '/#brands', labelEn: 'BRANDS', labelZh: '合作品牌' },
  { href: '/#contact', labelEn: 'CONTACT', labelZh: '联系我' },
];

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <Link href="/#home" className="hover:opacity-80 transition">
            <Image src="/logo.webp" alt="JK Logo" width={60} height={60} priority className="rounded-full" />
          </Link>
          {/* Language switcher for mobile */}
          <div className="md:hidden flex items-center ml-2">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              title={language === 'en' ? 'Switch to 中文' : 'Switch to English'}
              aria-label={language === 'en' ? 'Switch to 中文' : 'Switch to English'}
              className="select-none cursor-pointer bg-transparent border-none p-0 m-0 hover:scale-110 transition-transform"
              style={{background: 'none'}}
            >
              {language === 'en'
                ? (
                  <img
                    src="/uk.jpeg"
                    alt="UK flag"
                    width={32}
                    height={32}
                    className="inline-block align-middle border border-gray-300 shadow-sm mr-1"
                    style={{objectFit: 'cover', marginTop: '-2px'}}
                  />
                )
                : (
                  <img
                    src="/china-flag.jpeg"
                    alt="China flag"
                    width={32}
                    height={32}
                    className="inline-block align-middle border border-gray-300 shadow-sm ml-1"
                    style={{objectFit: 'cover', marginTop: '-2px'}}
                  />
                )}
            </button>
          </div>
        </div>
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
        <nav className="hidden md:flex gap-10 text-base font-light tracking-wider items-center">
          {navLinks.map((link) => (
            <Link
              key={link.labelEn}
              href={link.href}
              className="relative hover:text-gray-500 transition"
            >
              {language === 'en' ? link.labelEn : link.labelZh}
            </Link>
          ))}
          <div className="ml-6 flex items-center">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              title={language === 'en' ? 'Switch to 中文' : 'Switch to English'}
              aria-label={language === 'en' ? 'Switch to 中文' : 'Switch to English'}
              className="select-none cursor-pointer bg-transparent border-none p-0 m-0 hover:scale-110 transition-transform"
              style={{background: 'none'}}
            >
              {language === 'en'
                ? (
                  <img
                    src="/uk.jpeg"
                    alt="UK flag"
                    width={32}
                    height={32}
                    className="inline-block align-middle border border-gray-300 shadow-sm mr-1"
                    style={{objectFit: 'cover', marginTop: '-2px'}}
                  />
                )
                : (
                  <img
                    src="/china-flag.jpeg"
                    alt="China flag"
                    width={32}
                    height={32}
                    className="inline-block align-middle border border-gray-300 shadow-sm ml-1"
                    style={{objectFit: 'cover', marginTop: '-2px'}}
                  />
                )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
} 