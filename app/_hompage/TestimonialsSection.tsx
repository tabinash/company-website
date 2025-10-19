'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Mark Simmons',
    website: 'ESPN',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    rating: 5.0,
    review: 'Very hard-working company with the best pricing. They managed to finish a very challenging job that was quite complicated. They kept working to rectify any issues. Overall, very happy with their service and will use them to develop further.'
  },
  {
    id: 2,
    name: 'Kevin McIntosh',
    website: 'Power Auto Media',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    rating: 5.0,
    review: 'Excellent work! Extremely knowledgeable and professional. I plan on hiring them again for future WordPress and Magento projects.'
  },
  {
    id: 3,
    name: 'Shamlul Mowla',
    website: 'Prankdial & Ghostcall',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    rating: 5.0,
    review: 'Outstanding communication with a talented group of project managers, business analysts, tech leads, designers, and programmers. They followed Agile Scrum with daily updates. Clean code structure and organized approach. Most recommended.'
  },
  {
    id: 4,
    name: 'David Chen',
    website: 'Ecommerce Solutions',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    rating: 5.0,
    review: 'Professional team with great attention to detail. They transformed our outdated website into a modern, user-friendly platform. Very satisfied with the results.'
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    website: 'Digital Marketing Co',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    rating: 5.0,
    review: "Best development team I've worked with. They understood our vision perfectly and delivered beyond expectations. Communication throughout the project was excellent."
  },
  {
    id: 6,
    name: 'Michael Brown',
    website: 'Mobile Apps Dev',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 5.0,
    review: 'Exceptional quality and professionalism. They handled complex requirements with ease and provided valuable suggestions that significantly improved our final product.'
  }
];

export default function Testimonials() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const startScroll = containerTop - windowHeight * 0.2;
      const endScroll = containerTop + containerHeight - windowHeight * 1.2;
      const progress = (scrollY - startScroll) / (endScroll - startScroll);

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${testimonials.length * 100}vh` }}
    >
      <div className="sticky top-0 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-center">
            
            {/* Left Header */}
            <div>
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 py-2 text-sm font-bold text-neutral-900 shadow-sm">
                  <svg className="size-4 text-[#FFB800]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  CLIENT TESTIMONIALS
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Loved by businesses
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc] mt-2">
                  worldwide
                </span>
              </h2>

              <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                Join hundreds of satisfied clients who trust us to deliver exceptional software solutions.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-neutral-900">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-neutral-900">4.9★</div>
                  <div className="text-sm text-gray-600 mt-1">Average Rating</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-neutral-900">97%</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                </div>
              </div>

              {/* Client Avatars */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 5).map((t) => (
                    <div key={t.id} className="relative size-10 rounded-full overflow-hidden ring-4 ring-white shadow-sm">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  and many more...
                </div>
              </div>
            </div>

            {/* Right Stacking Cards */}
            <div className="relative h-[500px] flex items-center">
              <div className="relative w-full h-[460px] max-w-2xl">
                {testimonials.map((testimonial, index) => {
                  let cardProgress;

                  if (index === 0) {
                    cardProgress = 1;
                  } else {
                    const adjustedIndex = index - 1;
                    const totalCards = testimonials.length - 1;
                    const cardStart = adjustedIndex / totalCards;
                    const cardEnd = (adjustedIndex + 1) / totalCards;
                    const rawProgress = Math.max(0, Math.min(1,
                      (scrollProgress - cardStart) / (cardEnd - cardStart)
                    ));
                    cardProgress = 1 - Math.pow(1 - rawProgress, 3);
                  }

                  const translateY = (1 - cardProgress) * 100;
                  const scale = 0.90 + cardProgress * 0.10;
                  const stackOffset = index * 14;
                  const opacity = Math.min(1, cardProgress * 2);

                  return (
                    <div
                      key={testimonial.id}
                      className="absolute inset-0 transition-all duration-500 ease-out"
                      style={{
                        transform: `translateY(calc(${stackOffset}px + ${translateY}%)) scale(${scale})`,
                        opacity: opacity,
                        zIndex: index,
                      }}
                    >
                      <article className="bg-gray-50 rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-xl transition-shadow group relative overflow-hidden">
                        {/* Subtle corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFB800]/10 to-transparent rounded-bl-[80px]" />

                        {/* Header with profile */}
                        <div className="relative flex items-start gap-4 mb-5">
                          <div className="relative size-12 rounded-full overflow-hidden ring-2 ring-white shadow-sm flex-shrink-0">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-neutral-900">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {testimonial.website}
                            </p>
                          </div>

                          {/* Stars */}
                          <div className="flex items-center gap-0.5 flex-shrink-0">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="size-4 text-[#FFB800] fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                        </div>

                        {/* Quote */}
                        <div className="text-[#FFB800] text-3xl leading-none font-serif opacity-25 mb-3">
                          ❝
                        </div>

                        {/* Review */}
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {testimonial.review}
                        </p>

                        {/* Hover ring */}
                        <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-neutral-300 transition pointer-events-none" />
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
            <span className="text-xs font-semibold uppercase tracking-wider">Scroll Down</span>
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}