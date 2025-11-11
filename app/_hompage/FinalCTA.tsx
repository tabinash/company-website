'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1445cc]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 sm:py-20 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 shadow-sm">
            <CheckCircle2 className="size-4 sm:size-5 text-[#FFB800]" />
            <span className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wide">
              Ready to Get Started?
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-5 sm:mb-6">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc]">
              Amazing Together
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
            From initial concept to final deployment, we're with you every step of the way.
            Let's turn your vision into a powerful digital solution that drives real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc] text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 shadow-[0_10px_40px_rgba(14,54,162,0.25)] hover:shadow-[0_15px_50px_rgba(14,54,162,0.35)] transition-all text-sm sm:text-base group"
            >
              Start Your Project
              <span className="grid place-items-center rounded-full bg-white/20 size-8 sm:size-9 group-hover:bg-white/30 transition-colors">
                <ArrowRight className="size-4 sm:size-5" />
              </span>
            </Link>

            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-300 text-neutral-700 font-semibold px-8 sm:px-10 py-4 sm:py-[18px] hover:bg-neutral-50 hover:border-neutral-400 transition-all text-sm sm:text-base"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 sm:mt-12 md:mt-16 pt-8 sm:pt-10 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] text-white shadow-md">
                  <svg className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-neutral-900">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>

              <div className="h-12 w-px bg-gray-300 hidden sm:block" />

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FFA500] text-neutral-900 shadow-md">
                  <svg className="size-5 sm:size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-neutral-900">4.9/5</div>
                  <div className="text-xs sm:text-sm text-gray-600">Client Rating</div>
                </div>
              </div>

              <div className="h-12 w-px bg-gray-300 hidden sm:block" />

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-gradient-to-br from-[#20C997] to-[#17a589] text-white shadow-md">
                  <svg className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-neutral-900">4+ Years</div>
                  <div className="text-xs sm:text-sm text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
