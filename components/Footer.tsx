'use client';

import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  MessageCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const services = [
  { label: 'Mobile Application', href: '/services/mobile' },
  { label: 'Website Development', href: '/services/web' },
  { label: 'Staff Leasing', href: '/services/staff-leasing' },
  { label: 'Digital Marketing', href: '/services/marketing' },
  { label: 'UI/UX Design', href: '/services/design' },
  { label: 'Ecommerce Solutions', href: '/services/ecommerce' }
];

const quickLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Portfolio', href: '/portfolio' }
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Contact', href: '/contact' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: MessageCircle, href: 'https://wa.me/9779851195578', label: 'WhatsApp' }
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden rounded-t-[40px] md:rounded-t-[60px]">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-10 pb-10 border-b border-white/10">
          
          {/* Left - Brand & Description */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
              Sphiron Tech
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
              Building innovative digital solutions for businesses across Nepal and beyond. Transform your ideas into reality with our expert team.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+9779851195578" 
                className="flex items-center gap-3 text-sm text-white/90 hover:text-white transition group"
              >
                <div className="grid place-items-center size-9 rounded-lg bg-white/10 group-hover:bg-white/20 transition flex-shrink-0">
                  <Phone className="size-4" />
                </div>
                <span>+977 9851195578</span>
              </a>
              <a 
                href="mailto:info@esignature.com.np" 
                className="flex items-center gap-3 text-sm text-white/90 hover:text-white transition group"
              >
                <div className="grid place-items-center size-9 rounded-lg bg-white/10 group-hover:bg-white/20 transition flex-shrink-0">
                  <Mail className="size-4" />
                </div>
                <span>info@esignature.com.np</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <div className="grid place-items-center size-9 rounded-lg bg-white/10 flex-shrink-0">
                  <MapPin className="size-4" />
                </div>
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Middle - Services */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-white/90">
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="text-sm text-white/70 hover:text-white transition flex items-start gap-2"
                >
                  <span className="mt-1.5 inline-block size-1.5 rounded-full bg-[#FFB800] flex-shrink-0" />
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Newsletter & Social */}
          <div className="lg:col-span-3">
            {/* Newsletter */}
            <div className="mb-8">
              <h3 className="text-sm font-bold mb-2 uppercase tracking-wider text-white/90">
                Newsletter
              </h3>
              <p className="text-xs text-white/60 mb-4">
                Get updates and insights delivered to your inbox
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/20 outline-none focus:border-[#FFB800] transition placeholder:text-white/40"
                />
                <button className="px-4 py-2 bg-[#FFB800] text-neutral-900 text-sm rounded-lg font-semibold hover:brightness-95 transition whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider text-white/90">
                Follow Us
              </h3>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid place-items-center size-9 rounded-lg bg-white/10 hover:bg-[#FFB800] hover:text-neutral-900 transition"
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-white/10">
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-white/90">
              Company
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-white/90">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-white/90">
              Industries
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/industries/healthcare" className="text-sm text-white/70 hover:text-white transition">Healthcare</Link></li>
              <li><Link href="/industries/travel" className="text-sm text-white/70 hover:text-white transition">Travel & Tourism</Link></li>
              <li><Link href="/industries/finance" className="text-sm text-white/70 hover:text-white transition">Banking & Finance</Link></li>
              <li><Link href="/industries/retail" className="text-sm text-white/70 hover:text-white transition">Retail & Ecommerce</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-white/90">
              Support
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/support" className="text-sm text-white/70 hover:text-white transition">Help Center</Link></li>
              <li><Link href="/privacy" className="text-sm text-white/70 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-white/70 hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="text-sm text-white/70 hover:text-white transition">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2025 E-Signature Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}