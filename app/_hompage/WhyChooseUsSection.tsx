'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandSuccessSection() {
  const highlights = [
    'Outcome-focused delivery: measurable impact',
    'Agile teams with fast iterations',
    'Local presence, global standards'
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Why companies choose{' '}
                Sphiron Tech

            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We combine practical engineering with product thinking to deliver projects that meet user needs and business goals.
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our teams work in short cycles, ensuring rapid feedback and predictable delivery.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {highlights.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 grid place-items-center size-6 rounded-full bg-[#FFB800] flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                    {text}
                  </span>
                </div>
              ))}
            </div>

   
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#FFB800]/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-[#0e36a2]/10 to-transparent rounded-full blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&auto=format"
                alt="Team working together"
                width={800}
                height={600}
                className="object-cover w-full group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center size-12 rounded-full bg-gradient-to-br from-[#FFB800] to-[#ff9500]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-neutral-900">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">97% Client Satisfaction</p>
                    <p className="text-xs text-gray-600">Based on 500+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}