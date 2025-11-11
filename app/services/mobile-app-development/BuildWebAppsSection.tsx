'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BuildMobileAppsSection() {
  return (
    <section className="bg-gradient-to-br from-[#0c2a7a] via-[#1445cc] to-[#0e36a2] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Ready to start building?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
          We’ll schedule a free call to understand your vision, explore its technical possibilities, and provide a realistic timeline and budget. No sales pitch — just honest guidance to see if we’re the right fit for your project.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-10 py-5 shadow-xl hover:bg-[#FFA500] transition-all text-base sm:text-lg group"
          >
            Book a free consultation call
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* What to Expect */}
          <div className="mt-16 sm:mt-20 pt-8 border-t border-white/20">
            <p className="text-sm text-white/70 text-center mb-8">What happens after you reach out:</p>
            <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-12 max-w-3xl mx-auto">
              <div className="text-center flex-1 min-w-[200px]">
                <div className="text-2xl sm:text-3xl font-extrabold mb-2">24 Hours</div>
                <div className="text-sm text-white/80">We'll respond to your inquiry and schedule a call</div>
              </div>
              <div className="h-12 w-px bg-white/30 hidden sm:block" />
              <div className="text-center flex-1 min-w-[200px]">
                <div className="text-2xl sm:text-3xl font-extrabold mb-2">3-5 Days</div>
                <div className="text-sm text-white/80">You'll get a detailed proposal with timeline & costs</div>
              </div>
              <div className="h-12 w-px bg-white/30 hidden sm:block" />
              <div className="text-center flex-1 min-w-[200px]">
                <div className="text-2xl sm:text-3xl font-extrabold mb-2">Week 1</div>
                <div className="text-sm text-white/80">If you approve, we kick off with discovery & wireframes</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
