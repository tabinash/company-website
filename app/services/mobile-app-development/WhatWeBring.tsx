'use client';

type Item = { title: string; desc: string };

const ITEMS: Item[] = [
  {
    title: 'Both iOS & Android, One Team',
    desc:
      'Using Flutter or React Native, we build your app once and deploy to both app stores. This cuts development time in half and means you re not paying two separate teams.',
  },
  {
    title: 'Apps That Actually Work Fast',
    desc:
      'We test on real devices—old Android phones, the latest iPhones, tablets. If it loads slowly or stutters on any device, we fix it before you see it.',
  },
  {
    title: 'Designs People Understand',
    desc:
      'No confusing menus or hidden buttons. We follow iOS and Android design guidelines so your app feels familiar to users the moment they open it.',
  },
  {
    title: 'Built to Handle Growth',
    desc:
      'Starting with 100 users? Planning for 10,000? We structure the code and database so adding features or scaling up doesn t require rebuilding everything.',
  },
];

export default function WhatWeBring() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
          How we build <span className="text-[#1445cc]">mobile apps</span>
        </h2>
        <p className="text-center mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          No corporate jargon. Here's exactly what you get when you work with us.
        </p>

        {/* Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ITEMS.map((it) => (
            <article
              key={it.title}
              className="text-center px-3 sm:px-4"
            >
              {/* small blue dash above titles */}
              <span className="mx-auto mb-3 sm:mb-4 block h-1 w-8 sm:w-10 rounded bg-[#1445cc]" aria-hidden />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-900 leading-snug">
                {it.title}
              </h3>
              <p className="mt-3 sm:mt-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                {it.desc}
              </p>

              {/* tiny chevron decorative */}
              <span className="mt-4 sm:mt-5 inline-flex items-center justify-center text-gray-400" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="sm:w-4 sm:h-4 opacity-70">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}