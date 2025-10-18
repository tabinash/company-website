'use client';

import { useRef } from 'react';
import Image from 'next/image';

type Industry = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  theme: 'dark' | 'light';
};

const INDUSTRIES: Industry[] = [
  {
    id: 'travel',
    title: 'TRAVEL & TOURISM',
    subtitle: 'Seamless Journeys',
    img: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1400&auto=format&fit=crop',
    theme: 'dark',
  },
  {
    id: 'health',
    title: 'HEALTHCARE',
    subtitle: 'Smarter Care, Better Outcomes',
    img: 'https://images.unsplash.com/photo-1581594693700-5fd4b9f0bde5?q=80&w=1400&auto=format&fit=crop',
    theme: 'light',
  },
  {
    id: 'logistics',
    title: 'LOGISTICS & TRANSPORT',
    subtitle: 'Optimized Logistics',
    img: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1400&auto=format&fit=crop',
    theme: 'dark',
  },
  {
    id: 'banking',
    title: 'BANKING & FINANCE',
    subtitle: 'Secure. Reliable. Scalable',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop',
    theme: 'light',
  },
  {
    id: 'media',
    title: 'MEDIA & ENTERTAINMENT',
    subtitle: 'Improve Engagement',
    img: 'https://images.unsplash.com/photo-1516924962500-2b4b3b73c6b1?q=80&w=1400&auto=format&fit=crop',
    theme: 'dark',
  },
  {
    id: 'retail',
    title: 'RETAIL & ECOMMERCE',
    subtitle: 'Scalable Tech for Seamless Sales',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
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
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Industries We Cater to
            </h2>
            <p className="mt-3 max-w-3xl text-gray-600 text-base md:text-lg">
              Get what you are looking for to fulfill your software development and outsourcing needs,
              with our expertise on in‑demand technologies & platforms.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-1">
            <button
              aria-label="Previous"
              onClick={() => scrollByCards(-1)}
              className="h-10 w-10 md:h-12 md:w-12 grid place-items-center rounded-full border-2 border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-ml-px">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByCards(1)}
              className="h-10 w-10 md:h-12 md:w-12 grid place-items-center rounded-full border-2 border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-px">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollerRef}
          className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
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
      className="snap-start relative min-w-[260px] sm:min-w-[300px] md:min-w-[320px] h-[360px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Background Image - Full Card */}
      <div className="absolute inset-0">
        <Image
          src={industry.img}
          alt={industry.title}
          fill
          sizes="(max-width: 768px) 300px, 420px"
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
      <div className={`absolute inset-0 p-6 md:p-7 flex flex-col justify-between z-10 ${
        isDark ? 'text-white' : 'text-neutral-900'
      }`}>
        <div>
          <h3 className={`text-xs md:text-sm font-bold tracking-[0.08em] uppercase ${
            isDark ? 'text-white/90' : 'text-neutral-700'
          }`}>
            {industry.title}
          </h3>
          <p className={`mt-2 text-lg md:text-xl font-semibold leading-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {industry.subtitle}
          </p>
        </div>
      </div>

      {/* Hover Ring */}
      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-neutral-400 transition-all" />
    </article>
  );
}