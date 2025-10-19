'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import logo from "../assets/logo.png"

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const servicesLinks = [
    { href: '/services/mobile-app-development', label: 'Mobile App Development', desc: 'Native & cross-platform apps' },
    { href: '/services/web-development', label: 'Web Development', desc: 'Modern websites & web apps' },
    { href: '/services/digital-transformation', label: 'Digital Transformation', desc: 'Modernize your business' },
    { href: '/services/it-consulting', label: 'IT Consulting', desc: 'Expert technology guidance' },
    { href: '/services/enterprise-solutions', label: 'Enterprise Solutions', desc: 'Custom business software' },
  ];

  // Hover intent helpers
  const openMenu = (key: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveDropdown(null), 180);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={logo}
              alt="E-Signature Logo"
              width={150}
              height={35}
              className="scale-130 object-cover transition-transform duration-500"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-700 hover:text-neutral-900 transition relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB800] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openMenu('services')}
              onMouseLeave={scheduleClose}
              onFocus={() => openMenu('services')}
              onBlur={scheduleClose}
            >
              <button
                className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-neutral-900 transition"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'services'}
                aria-controls="services-menu"
              >
                <span>Services</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Invisible bridge */}
              <div
                className="absolute left-0 top-full w-[460px] h-3"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                aria-hidden
              />

              <div
                id="services-menu"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                className={`absolute top-full left-0 mt-3 w-[460px] bg-white shadow-xl rounded-2xl border border-gray-200 p-4 transition-all duration-200 ${
                  activeDropdown === 'services'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
                role="menu"
              >
                <div className="space-y-1">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition group"
                    >
                      <div className="flex-1">
                        <div className="font-bold text-sm text-neutral-900 group-hover:text-[#0c2a7a] transition">
                          {link.label}
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5">
                          {link.desc}
                        </div>
                      </div>
                      <ArrowRight className="size-4 text-gray-400 group-hover:text-[#FFB800] transition mt-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About - Direct Link */}
            <Link
              href="/about"
              className="text-sm font-semibold text-gray-700 hover:text-neutral-900 transition relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB800] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/portfolio"
              className="text-sm font-semibold text-gray-700 hover:text-neutral-900 transition relative group"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB800] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/demo"
              className="text-sm font-semibold text-gray-700 hover:text-neutral-900 transition relative group"
            >
              Demo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB800] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/blog"
              className="text-sm font-semibold text-gray-700 hover:text-neutral-900 transition relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB800] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold text-gray-700 hover:text-neutral-900 transition relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFB800] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-6 py-3 hover:brightness-95 transition-all shadow-lg"
            >
              GET A QUOTE
              <span className="grid place-items-center rounded-full bg-black/10 size-7">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden grid place-items-center size-10 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6 text-neutral-900" />
            ) : (
              <Menu className="size-6 text-neutral-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
              >
                Services
                <ChevronDown
                  className={`size-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                />
              </button>
              {activeDropdown === 'services' && (
                <div className="ml-4 mt-1 space-y-1">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About - Direct Link */}
            <Link
              href="/about"
              className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/portfolio"
              className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>

            <Link
              href="/demo"
              className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </Link>

            <Link
              href="/blog"
              className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-6 py-3 hover:brightness-95 transition-all shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                GET A QUOTE
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;