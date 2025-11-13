'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import tatoImage from "@/assets/tattoo.png";
import nadeemImage from "@/assets/nadeem.png";
import hariImage from "@/assets/hari.jpg";
import bunchatImage from "@/assets/bunchat.jpg";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: StaticImageData;
  review: string;
  project: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kamal Singh Limbu",
    role: "Owner",
    company: "Teyung Tattoo",
    image: tatoImage,
    review: "Sphiron Tech did an excellent job creating our studio website. They were professional, easy to work with, and delivered exactly what we needed. The attention to detail and understanding of our creative industry was outstanding.",
    project: "Studio Website"
  },
  {
    id: 2,
    name: "Menuka Giri",
    role: "Owner",
    company: "Bunchat Collection",
    image: bunchatImage,
    review: "They built our ecommerce platform, and it's been perfect for showcasing our traditional clothing. Professional, on-time, and understood our vision clearly.",
    project: "E-commerce Platform"
  },
  {
    id: 3,
    name: "Nadeem Mansuri",
    role: "Owner",
    company: "Benchmark",
    image: nadeemImage,
    review: "We had a great experience working with this team. The communication was smooth, and the final product was delivered with excellent quality. The app performance exceeded our expectations.",
    project: "Mobile App"
  },
  {
    id: 4,
    name: "Hari Aryal",
    role: "Owner",
    company: "Aryal Agro Research",
    image: hariImage,
    review: "The Poultry Management System simplified our daily operations. It's user-friendly, reliable, and perfectly suited to our business needs. Outstanding support throughout the process.",
    project: "Management System"
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-12">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Real Stories,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc]">
              Happy Clients
            </span>
          </h2>
          <p className="mt-2 sm:mt-3 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg">
            Trusted by businesses across Nepal. Delivering results that matter.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Featured Testimonial */}
            <div
              key={currentTestimonial.id}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover animate-fade-in"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 via-neutral-900/75 to-neutral-900/90" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,54,162,0.25)_0%,transparent_60%)]" />
              </div>

              {/* Content */}
              <div className="relative px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white">

                {/* Quote Icon */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-[#FFB800] text-neutral-900 shadow-lg animate-fade-in">
                    <Quote className="size-4 sm:size-5" fill="currentColor" />
                  </div>
                </div>

                {/* Review Text - Center */}
                <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed text-white/95 animate-fade-in">
                    "{currentTestimonial.review}"
                  </p>
                </div>

                {/* Author Info - Center */}
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="relative size-14 sm:size-16 rounded-full overflow-hidden ring-3 ring-white/20 shadow-lg mb-3">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mb-2.5">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </p>

                  {/* Project Badge */}
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#FFB800]/90 text-neutral-900 text-xs font-semibold shadow-lg">
                    {currentTestimonial.project}
                  </span>
                </div>
              </div>

              {/* Decorative Ring */}
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 grid place-items-center size-9 sm:size-10 rounded-full bg-white/90 backdrop-blur-sm text-neutral-900 shadow-lg hover:bg-white transition-all hover:scale-110 z-10"
            >
              <ChevronLeft className="size-4 sm:size-5" />
            </button>

            <button
              onClick={goToNext}
              aria-label="Next testimonial"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 grid place-items-center size-9 sm:size-10 rounded-full bg-white/90 backdrop-blur-sm text-neutral-900 shadow-lg hover:bg-white transition-all hover:scale-110 z-10"
            >
              <ChevronRight className="size-4 sm:size-5" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`transition-all ${
                  index === currentIndex
                    ? 'w-7 sm:w-8 h-2 bg-[#FFB800] shadow-lg'
                    : 'size-2 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fade In Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}