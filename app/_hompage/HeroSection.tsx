"use client"

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'TypeScript', color: '#3178C6' }
];

const showcaseImages = [
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
];

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative background elements */}

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            {/* Badge */}
           

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Full-Stack Development Partner
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Transforming ideas into powerful digital solutions with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc] font-bold">
                  4+ years of excellence
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              We craft exceptional mobile and web applications that drive growth, enhance user experiences, and deliver measurable results for businesses across the globe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-3 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-6 py-3 shadow-lg hover:brightness-95 transition-all">
                Start Your Project
                <span className="grid place-items-center rounded-full bg-black/10 size-8">
                  <ArrowRight className="size-4" />
                </span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-300 text-neutral-700 font-semibold px-6 py-3 hover:bg-neutral-50 hover:border-neutral-400 transition-all">
                View Our Work
              </button>
            </div>

            {/* Tech Stack */}
            <div className="pt-4">
              <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider mb-4">
                Technologies We Master
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group"
                  >
                    <div
                      className="size-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-neutral-900 transition">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Scrolling Showcase */}
<div className="hidden md:flex relative h-[500px] md:h-[600px] items-center justify-center lg:justify-end">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0e36a2]/5 via-transparent to-[#FFB800]/5 rounded-3xl" />

            {/* Scrolling container */}
            <div className="relative w-full max-w-md h-full">
              <div className="relative h-full overflow-hidden rounded-2xl">
                {/* Scrolling images */}
                <div className="animate-scroll-vertical space-y-6">
                  {[...showcaseImages, ...showcaseImages].map((img, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
                    >
                      <Image
                        src={img}
                        alt={`Project showcase ${idx + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient overlays for fade effect */}
              {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" /> */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" /> */}
            </div>

       
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .animate-scroll-vertical {
          animation: scroll-vertical 25s linear infinite;
        }
      `}</style>
    </section>
  );
}