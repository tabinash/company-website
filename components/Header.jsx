// Updated responsive Header with right-to-left drawer (mobile)
// Tailwind styling, clean modern aesthetic

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const servicesLinks = [
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/digital-transformation", label: "Digital Transformation" },
  // { href: "/services/it-consulting", label: "IT Consulting" },
  { href: "/services/enterprise-solutions", label: "Enterprise Solutions" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={140} height={20} priority className="scale-140" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          <NavItem href="/" label="Home" />
          <Dropdown label="Services" links={servicesLinks} />
          <NavItem href="/about" label="About" />
          <NavItem href="/portfolio" label="Portfolio" />
          <NavItem href="/demo" label="Demo" />
          <NavItem href="/blog" label="Blog" />
          <NavItem href="/contact" label="Contact" />
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-3 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-6 py-3 hover:brightness-95 transition shadow-md"
        >
          GET A QUOTE
          <ArrowRight className="size-4" />
        </Link>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Right Drawer Menu */}
      <div className={`fixed inset-0 z-[999] transition ${drawerOpen ? "visible" : "invisible"}`}>
        {/* Backdrop */}
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${drawerOpen ? "opacity-100" : "opacity-0"}`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-xl p-5 flex flex-col transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-6">
            <Image src={logo} alt="logo" width={120} height={30} />
            <button onClick={() => setDrawerOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
              <X className="size-6" />
            </button>
          </div>

          <MobileLink href="/" label="Home" onClick={() => setDrawerOpen(false)} />

          {/* Mobile Services Dropdown */}
          <button
            onClick={() => setMobileServices(!mobileServices)}
            className="flex items-center justify-between py-3 text-sm font-semibold text-gray-700 w-full"
          >
            Services
            <ChevronDown className={`size-4 transition ${mobileServices && "rotate-180"}`} />
          </button>
          {mobileServices && (
            <div className="ml-3 space-y-2 mb-3">
              {servicesLinks.map((link) => (
                <MobileLink key={link.href} href={link.href} label={link.label} onClick={() => setDrawerOpen(false)} />
              ))}
            </div>
          )}

          <MobileLink href="/about" label="About" onClick={() => setDrawerOpen(false)} />
          <MobileLink href="/portfolio" label="Portfolio" onClick={() => setDrawerOpen(false)} />
          <MobileLink href="/demo" label="Demo" onClick={() => setDrawerOpen(false)} />
          <MobileLink href="/blog" label="Blog" onClick={() => setDrawerOpen(false)} />
          <MobileLink href="/contact" label="Contact" onClick={() => setDrawerOpen(false)} />

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-5 py-3 shadow-md"
          >
            GET A QUOTE
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

/* Components */
function NavItem({ href, label }) {
  return (
    <Link href={href} className="hover:text-black transition relative group">
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FFB800] group-hover:w-full transition-all"></span>
    </Link>
  );
}

function Dropdown({ label, links }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 hover:text-black transition">
        {label} <ChevronDown className="size-4" />
      </button>
      <div className="absolute left-0 top-full mt-3 w-56 bg-white shadow-xl rounded-xl border border-gray-200 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileLink({ href, label, onClick }) {
  return (
    <Link href={href} className="block py-2 text-sm font-medium text-gray-700 hover:text-black" onClick={onClick}>
      {label}
    </Link>
  );
}