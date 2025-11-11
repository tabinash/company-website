'use client';

import Image from "next/image";
import { Quote } from "lucide-react";
import tatoImage from "@/assets/tattoo.png";
import nadeemImage from "@/assets/nadeem.png";
import hariImage from "@/assets/hari.jpg";
import bunchatImage from "@/assets/bunchat.jpg";

const testimonials = [
  {
    id: 1,
    name: "Kamal Singh Limbu",
    role: "Owner • Teyung Tattoo 🎨",
    image: tatoImage,
    highlight: "Exceptional Problem-Solving",
    review:
      "Sphiron Tech did an excellent job creating our studio website. They were professional, easy to work with, and delivered exactly what we needed.",
  },
  {
    id: 2,
    name: "Menuka Giri",
    role: "Owner • Bunchat Collection 👗",
    image: bunchatImage,
    highlight: "Ecommerce Excellence",
    review:
      "They built our ecommerce platform, and it’s been perfect for showcasing our traditional clothing. Professional, on-time, and understood our vision clearly.",
  },
  {
    id: 3,
    name: "Nadeem Mansuri",
    role: "Owner • Benchmark 📱",
    image: nadeemImage,
    highlight: "Mobile App Mastery",
    review:
      "We had a great experience working with this team. The communication was smooth, and the final product was delivered with excellent quality.",
  },
  {
    id: 4,
    name: "Hari Aryal",
    role: "Owner • Aryal Agro Research 🌾",
    image: hariImage,
    highlight: "Enterprise Solutions",
    review:
      "The Poultry Management System simplified our daily operations. It’s user-friendly, reliable, and perfectly suited to our business needs.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50/10 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
         
          {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
           Real Stories,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc]">
             Happy Clients
            </span>
          </h2>
 

  
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col justify-between group"
            >
              {/* Blue Line Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#1445cc] rounded-t-2xl" />

              {/* Floating Quote Icon */}
              <Quote className="absolute top-6 right-6 text-[#1445cc]/10 w-10 h-10" />

              {/* Review */}
              <p className="text-gray-700 leading-relaxed mb-8 mt-4 italic">
                “{t.review}”
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#1445cc]/40 shadow-sm flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{t.role}</p>
                  <span className="inline-block bg-[#1445cc]/10 text-[#1445cc] font-medium text-xs px-3 py-1 rounded-full">
                    {t.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
