'use client';

import { useEffect, useRef, useState } from 'react';
import testi from "../../assets/testi.webp"

// Testimonials sorted by review length (longest first)
const testimonials = [
  {
    id: 2,
    name: 'Kevin McIntosh',
    website: 'www.powerautomedia.com',
    image: '/testimonials/kevin-mcintosh.jpg',
    rating: 5.0,
    review:
      'Excellent work! Extremely knowledgeable and professional. I plan on hiring them again for future WordPress and Magento projects.'
  },
  {
    id: 4,
    name: 'David Chen',
    website: 'www.ecommerce-solutions.com',
    image: '/testimonials/david-chen.jpg',
    rating: 5.0,
    review:
      'Professional team with great attention to detail. They transformed our outdated website into a modern, user-friendly platform. Very satisfied with the results.'
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    website: 'www.digitalmarketing.co',
    image: '/testimonials/emily-rodriguez.jpg',
    rating: 5.0,
    review:
      "Best development team I've worked with. They understood our vision perfectly and delivered beyond expectations. The communication throughout the project was excellent."
  },
  {
    id: 6,
    name: 'Michael Brown',
    website: 'www.mobile-apps.dev',
    image: '/testimonials/michael-brown.jpg',
    rating: 5.0,
    review:
      'Exceptional quality and professionalism. They handled complex requirements with ease and provided valuable suggestions that improved valuable suggestions that improved our final product significantly.'
  },
  {
    id: 1,
    name: 'Mark Simmons',
    website: 'https://www.espn.com/',
    image: '/testimonials/mark-simmons.jpg',
    rating: 5.0,
    review:
      'Very hard-working company, and they were the best in price. They managed to finish a very challenging job that was quite complicated. Although there were many little bugs in the end product and it took a couple of days for us to find and correct them, they kept working to the end to rectify them. Overall, I am very happy with their service and will use them to develop it further.'
  },
  {
    id: 3,
    name: 'Shamlul Mowla',
    website: 'Prankdail & Ghostcall',
    image: '/testimonials/shamlul-mowla.jpg',
    rating: 5.0,
    review:
      'E-Signature is outstanding. Communication is exceptional with a talented group of project managers, business analysts, tech leads, designers, and programmers. They followed the Agile Scrum process with daily updates to keep me informed about the progress. I kept a close eye on the code committed, clean data structure, and organized code. Most recommended to everyone. Thanks'
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

      // Calculate progress when container is in view
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
      className="relative"
      style={{ height: `${testimonials.length * 100}vh` }}
    >
      {/* Sticky Container - This stays fixed on screen */}
      <div className="sticky top-0 min-h-screen flex items-center py-16 px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto">
          {/* Updated grid - Left takes less space, Right takes more */}
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">

            {/* Left Section - Speech Bubble with Text - Compact */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[380px] h-[380px] md:w-[350px] md:h-[380px] flex-shrink-0">
                {/* Speech Bubble Image */}
                <img
                  src={testi.src}
                  alt="Speech bubble background"
                  className="w-full h-full object-contain bg-white"
                />

                {/* Quotation Marks */}
                <div className="absolute top-7 left-12 text-[100px] text-black leading-none font-serif">
                  &ldquo;
                </div>
                <div className="absolute bottom-15 right-11 text-[100px] text-black leading-none font-serif rotate-180">
                  &rdquo;
                </div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                    What <span className="text-[#1748c5] text-4xl">our clients</span> <br />
                    <span className="font-medium text-gray-800">say about us</span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Section - Expanded Stacking Cards */}
            <div className="relative h-[500px] flex items-center w-full">
              <div className="relative w-full h-[450px] max-w-2xl mx-auto lg:mx-0">
                {testimonials.map((testimonial, index) => {
                  // First card (index 0) is always visible from start
                  // Other cards appear progressively
                  let cardProgress;

                  if (index === 0) {
                    // First card is always fully visible
                    cardProgress = 1;
                  } else {
                    // Other cards appear based on scroll with easing
                    const adjustedIndex = index - 1;
                    const totalCards = testimonials.length - 1;
                    const cardStart = adjustedIndex / totalCards;
                    const cardEnd = (adjustedIndex + 1) / totalCards;
                    const rawProgress = Math.max(0, Math.min(1,
                      (scrollProgress - cardStart) / (cardEnd - cardStart)
                    ));

                    // Apply easing for smoother animation (ease-out cubic)
                    cardProgress = 1 - Math.pow(1 - rawProgress, 3);
                  }

                  // Translate from bottom (100%) to stacked position
                  const translateY = (1 - cardProgress) * 120;

                  // Scale effect
                  const scale = 0.85 + cardProgress * 0.15;

                  // Stack offset - cards stack with offset
                  const stackOffset = index * 20;

                  // Opacity
                  const opacity = Math.min(1, cardProgress * 2);

                  // Rotation for entering effect
                  const rotation = (1 - cardProgress) * 2;

                  return (
                    <div
                      key={testimonial.id}
                      className="absolute inset-0 transition-all duration-700 ease-out will-change-transform  "
                      style={{
                        transform: `translateY(calc(${stackOffset}px + ${translateY}%)) scale(${scale}) rotate(${rotation}deg)`,
                        opacity: opacity,
                        zIndex: index,
                      }}
                    >
                      <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow h-auto">
                        {/* Content Section */}
                        <div className="flex items-start gap-4 lg:gap-6 mb-4 lg:mb-6">
                          {/* Profile Image */}
                          <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <span className="text-white text-xl lg:text-2xl font-bold">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>

                          {/* Review Text */}
                          <div className="flex-1">
                            <p className="text-gray-700 text-justify leading-relaxed text-sm lg:text-base">
                              {testimonial.review}
                            </p>
                          </div>
                        </div>

                        {/* Divider Line */}
                        <div className="border-t border-blue-600 w-2/3 mb-3 lg:mb-4"></div>

                        {/* Bottom Info */}
                        <div className="flex items-center justify-between">
                          <div>
                            {/* Rating Stars */}
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 fill-current"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              ))}
                              <span className="text-base lg:text-lg font-semibold ml-2">{testimonial.rating}</span>
                            </div>

                            {/* Name */}
                            <h3 className="text-base lg:text-lg font-bold text-blue-600">
                              {testimonial.name}
                            </h3>

                            {/* Website */}
                            <p className="text-xs lg:text-sm text-gray-600 italic">
                              {testimonial.website}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}