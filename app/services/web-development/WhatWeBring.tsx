'use client';

type Item = { title: string; desc: string };

const ITEMS: Item[] = [
  {
    title: 'Modern Tech Stack',
    desc:
      'We build with React, Next.js, Node.js, and TypeScript—proven technologies that deliver fast, maintainable, and scalable web applications.',
  },
  {
    title: 'Responsive Design',
    desc:
      'Every website we create works seamlessly across desktop, tablet, and mobile devices, ensuring your users have a great experience everywhere.',
  },
  {
    title: 'Performance Optimized',
    desc:
      'Fast loading times matter. We optimize images, code, and architecture to deliver websites that load quickly and rank well in search engines.',
  },
  {
    title: 'Clean, Maintainable Code',
    desc:
      'We write organized, well-documented code that makes future updates and feature additions straightforward, saving you time and money long-term.',
  },
];

export default function WhatWeBring() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
          What We Bring to Your <span className="text-[#1445cc]">Web Project</span>
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ITEMS.map((it) => (
            <article
              key={it.title}
              className="text-center px-4"
            >
              {/* small blue dash above titles */}
              <span className="mx-auto mb-4 block h-1 w-10 rounded bg-[#1445cc]" aria-hidden />
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 leading-snug">
                {it.title}
              </h3>
              <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                {it.desc}
              </p>

              {/* tiny chevron decorative */}
              <span className="mt-5 inline-flex items-center justify-center text-gray-400" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-70">
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