'use client';

import { useState } from 'react';
import Image from 'next/image';

const recommendations = [
  {
    id: 1,
    name: 'Roy Sherfan',
    title: 'Computer Scientist, Web Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/in/roysherfan',
    testimonial: 'Exceptional project manager who goes the extra mile. His attention to detail and strategic planning skills are truly impressive, with an innate ability to keep everyone focused on the end goal.'
  },
  {
    id: 2,
    name: 'Kevin McIntosh',
    title: 'Director, Creative Marketing',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/in/kevinmcintosh',
    testimonial: 'Personable and professional, always exceeding expectations. While we no longer outsource, I highly recommend Brijesh and his team to lead any project, big or small.'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    title: 'Marketing Director, Tech Innovations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/in/sarahjohnson',
    testimonial: 'Their dedication to quality and attention to detail is unmatched. They delivered our project on time and exceeded all expectations.'
  },
  {
    id: 4,
    name: 'Michael Chen',
    title: 'CTO, Digital Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://www.linkedin.com/in/michaelchen',
    testimonial: 'Remarkable technical expertise. They transformed our vision into reality and provided innovative solutions to complex challenges.'
  }
];

export default function Recommendation() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(recommendations.length / itemsPerPage);

  const scrollTo = (dir: 1 | -1) => {
    setCurrentPage((prev) => {
      const next = prev + dir;
      if (next < 0) return totalPages - 1;
      if (next >= totalPages) return 0;
      return next;
    });
  };

  const current = recommendations.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Client Testimonials
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600 text-base md:text-lg">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <button
              onClick={() => scrollTo(-1)}
              aria-label="Previous"
              className="h-10 w-10 md:h-12 md:w-12 grid place-items-center rounded-full border-2 border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-ml-px">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => scrollTo(1)}
              aria-label="Next"
              className="h-10 w-10 md:h-12 md:w-12 grid place-items-center rounded-full border-2 border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-px">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {current.map((rec) => (
            <article
              key={rec.id}
              className="relative rounded-2xl bg-white p-6 md:p-7 shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FFB800]/10 to-transparent rounded-bl-[100px]" />

              {/* Header */}
              <div className="relative flex items-start gap-4">
                <div className="relative size-14 rounded-full overflow-hidden ring-2 ring-gray-100 flex-shrink-0">
                  <Image
                    src={rec.image}
                    alt={rec.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-neutral-900">
                    {rec.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 line-clamp-1">
                    {rec.title}
                  </p>
                </div>
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 grid place-items-center size-9 rounded-lg bg-[#0077B5] text-white hover:bg-[#005885] transition"
                  aria-label="LinkedIn"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Quote mark */}
              <div className="my-5 text-[#FFB800] text-4xl leading-none font-serif opacity-30">
                ❝
              </div>

              {/* Testimonial */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {rec.testimonial}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="size-4 text-[#FFB800] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-neutral-300 transition pointer-events-none" />
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`transition-all duration-300 rounded-full ${
                i === currentPage
                  ? 'w-8 h-2 bg-neutral-900'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}