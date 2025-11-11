'use client';

import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import ecommerceImage from "@/assets/ecommerce.jpg"


type Industry = {
  id: string;
  title: string;
  subtitle: string;
  img: string | StaticImageData;
  theme: 'dark' | 'light';
};

const INDUSTRIES: Industry[] = [
  {
    id: 'travel',
    title: 'TRAVEL & HOSPITALITY',
    subtitle: 'Seamless Guest Experiences',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop',
    theme: 'dark',
  },
  {
    id: 'publishing',
    title: 'PUBLISHING & MEDIA',
    subtitle: 'Digital Content Solutions',
    img: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1400&auto=format&fit=crop',
    theme: 'light',
  },
  {
    id: 'poultry',
    title: 'POULTRY & LIVESTOCK',
    subtitle: 'Smart Farm Management',
    img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1400&auto=format&fit=crop',
    theme: 'dark',
  },
  {
    id: 'retail',
    title: 'RETAIL & ECOMMERCE',
    subtitle: 'Scalable Sales Solutions',
    img: ecommerceImage,
    theme: 'light',
  },
  {
    id: 'restaurant',
    title: 'RESTAURANT & DINING',
    subtitle: 'Modern Dining Technology',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
    theme: 'dark',
  },
  {
    id: 'automobile',
    title: 'AUTOMOBILE',
    subtitle: 'Connected Vehicle Systems',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop',
    theme: 'light',
  },
];

export default function Industries() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>('[data-card]');
    const delta = firstCard ? firstCard.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * delta, behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Industries We Serve
            </h2>
            <p className="mt-2 sm:mt-3 max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">
              Delivering tailored software solutions across diverse industries with expertise in modern technologies and platforms.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 sm:gap-3 mt-1">
            <button
              aria-label="Previous"
              onClick={() => scrollByCards(-1)}
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 grid place-items-center rounded-full border-2 border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="-ml-px sm:w-[18px] sm:h-[18px]">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByCards(1)}
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 grid place-items-center rounded-full border-2 border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-px sm:w-[18px] sm:h-[18px]">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollerRef}
          className="mt-6 sm:mt-8 flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="list"
          aria-label="Industries"
        >
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  const isDark = industry.theme === 'dark';
  
  return (
    <article
      data-card
      role="listitem"
      className="snap-start relative min-w-[240px] sm:min-w-[280px] md:min-w-[320px] h-[320px] sm:h-[360px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Background Image - Full Card */}
      <div className="absolute inset-0">
        <Image
          src={industry.img}
          alt={industry.title}
          fill
          sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />
      </div>

      {/* Overlay - Different for Dark vs Light */}
      {isDark ? (
        // DARK THEME: Strong gradient from dark color to transparent
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/95 via-indigo-950/80 to-transparent" />
      ) : (
        // LIGHT THEME: Subtle white gradient from top
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white/95 via-white/85 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className={`absolute inset-0 p-5 sm:p-6 md:p-7 flex flex-col justify-between z-10 ${
        isDark ? 'text-white' : 'text-neutral-900'
      }`}>
        <div>
          <h3 className={`text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.08em] uppercase ${
            isDark ? 'text-white/90' : 'text-neutral-700'
          }`}>
            {industry.title}
          </h3>
          <p className={`mt-1.5 sm:mt-2 text-base sm:text-lg md:text-xl font-semibold leading-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {industry.subtitle}
          </p>
        </div>
      </div>

      {/* Hover Ring */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-neutral-400 transition-all" />
    </article>
  );
}