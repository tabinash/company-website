'use client';

import React from 'react';
import abishekImage from "@/assets/abishek.png";
import amritImage from "@/assets/amrit.png";
import kishorImage from "@/assets/kishor.jpg";
import Image from 'next/image';
import { Rocket, Eye } from 'lucide-react';

// Team data
const leadership = [
  {
    id: 1,
    name: 'Abishek Tiwari',
    role: 'Mobile Application Engineer & Client Manager',
    image: abishekImage,
    bio: ' Abishek Tiwari Mobile Application Engineer & Client Manager Mobile application engineer with strong expertise in Flutter, React Native, and Java. Oversees client communications, understands project requirements, and ensures smooth delivery of software solutions that meet client expectations.',
    linkedin: 'https://linkedin.com',
    email: 'abishek@company.com'
  },
  {
    id: 2,
    name: 'Amrit Tiwari',
    role: 'Backend Engineer',
    image: amritImage,
    bio: 'Experienced backend engineer skilled in building scalable systems, designing robust architectures, and delivering solutions for fintech, healthcare, finance, and telecommunications.',
    linkedin: 'https://linkedin.com',
    email: 'amrit@company.com'
  },
  {
    id: 3,
    name: 'Kishor Upadhya',
    role: 'Frontend Engineer',
    image: kishorImage,
    bio: 'Frontend engineer passionate about creating intuitive and responsive web applications, with experience in telecommunications, healthcare, retail, and eCommerce.',
    linkedin: 'https://linkedin.com',
    email: 'kishor@company.com'
  }
];


const AboutAndTeam = () => {
  return (
    <div className="space-y-0">

      {/* ================= About Us Section ================= */}
     <section className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Image */}
      <div className="relative order-2 lg:order-1">
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80"
              alt="Modern office"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#FFB800] rounded-2xl -z-10 opacity-20" />
      </div>
      {/* Story Text */}
      <div className="order-1 lg:order-2">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
          Our Story
        </h2>
        <div className="mt-6 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Sphiron Tech started in 2021 with a simple mission: help businesses build digital products that actually work. What began as a small team of passionate engineers in Kathmandu has grown into a 6+member product studio that designs, develops, and delivers web and mobile applications for our clients.
          </p>
          <p>
            We've built our expertise across the full stack — from Flutter and React Native mobile apps to React and Next.js web platforms, backed by robust Java Spring Boot enterprise solutions. Every project we take on is driven by a focus on clean code, user-centered design, and practical outcomes that move businesses forward.
          </p>
          <p>
            Today, we partner with startups and established companies across different industries, helping them launch customer-facing applications, scale their platforms, and strengthen their engineering practices. We believe great software isn't just about technology — it starts with truly understanding the people who use it.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              {/* Mission */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] p-6 md:p-8 shadow-lg group overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-[#FFB800] shadow-lg flex-shrink-0">
                      <Rocket className="size-5 sm:size-6 text-neutral-900" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-1">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    Build reliable digital products that help businesses grow — by combining product design, engineering craftsmanship, and a customer-first process.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] p-6 md:p-8 shadow-lg group overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-[#FFB800] shadow-lg flex-shrink-0">
                      <Eye className="size-5 sm:size-6 text-neutral-900" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-1">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    To be a trusted partner for product teams worldwide — delivering software that is efficient, maintainable, and built around real user needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop"
                    alt="Team collaboration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#FFB800] rounded-2xl -z-10 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= How We Work ================= */}
      {/* ================= How We Work ================= */}
<section className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
    <div className="mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
        How We Work
      </h2>
      <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
        We follow a pragmatic product process that emphasizes discovery, rapid experimentation, and iterative delivery — so teams see value early and often.
      </p>
    </div>

    {/* Process Steps */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      
      {/* Requirement Gathering */}
      <div className="flex gap-4 group">
        <div className="flex flex-col items-center">
          <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-[#FFB800] text-neutral-900 shadow-lg flex-shrink-0">
            <svg className="size-5 sm:size-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-px h-8 bg-gray-300 mt-2" />
        </div>
        <div className="flex-1 pb-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#1445cc] mb-2">
            Requirement Gathering
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At the outset, we prioritize the collection of project requirements, resources, and vital information.
          </p>
        </div>
      </div>

      {/* Development */}
      <div className="flex gap-4 group">
        <div className="flex flex-col items-center">
          <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-[#FFB800] text-neutral-900 shadow-lg flex-shrink-0">
            <svg className="size-5 sm:size-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-px h-8 bg-gray-300 mt-2" />
        </div>
        <div className="flex-1 pb-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#1445cc] mb-2">
            Development
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We kickstart mobile application, web, and blockchain development using the latest tools and technologies, ensuring a transparent process.
          </p>
        </div>
      </div>

      {/* UI/UX Design */}
      <div className="flex gap-4 group">
        <div className="flex flex-col items-center">
          <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-[#FFB800] text-neutral-900 shadow-lg flex-shrink-0">
            <svg className="size-5 sm:size-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-px h-8 bg-gray-300 mt-2" />
        </div>
        <div className="flex-1 pb-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#1445cc] mb-2">
            UI/UX Design
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We employ cutting-edge design tools to craft captivating and user-friendly designs that leave a lasting impression.
          </p>
        </div>
      </div>

      {/* Quality Assurance */}
      <div className="flex gap-4 group">
        <div className="flex flex-col items-center">
          <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-[#FFB800] text-neutral-900 shadow-lg flex-shrink-0">
            <svg className="size-5 sm:size-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-px h-8 bg-gray-300 mt-2" />
        </div>
        <div className="flex-1 pb-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#1445cc] mb-2">
            Quality Assurance
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our company prioritizes quality, delivering 100% bug-free applications without any compromise.
          </p>
        </div>
      </div>

      {/* Prototype */}
      <div className="flex gap-4 group">
        <div className="flex flex-col items-center">
          <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-[#FFB800] text-neutral-900 shadow-lg flex-shrink-0">
            <svg className="size-5 sm:size-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-px h-8 bg-gray-300 mt-2" />
        </div>
        <div className="flex-1 pb-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#1445cc] mb-2">
            Prototype
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Once the design phase is complete, you'll receive a prototype that will pave the way for the product's development process.
          </p>
        </div>
      </div>

      {/* Deployment */}
      <div className="flex gap-4 group">
        <div className="flex flex-col items-center">
          <div className="grid place-items-center size-10 sm:size-12 rounded-full bg-[#FFB800] text-neutral-900 shadow-lg flex-shrink-0">
            <svg className="size-5 sm:size-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-[#1445cc] mb-2">
            Deployment
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Following a thorough trial and adherence to all processes, your app is primed for launch on either the App Store or Play Store.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= Team Section ================= */}
      <section className="bg-gray-50">
        {/* Hero */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c2a7a]/95 via-[#0e36a2]/90 to-[#1445cc]/85" />
              </div>
        
            </div>
          </div>
        </div>

        {/* Leadership Cards */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
            <div className="mb-8 sm:mb-10">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-neutral-900 shadow-sm">
                  LEADERSHIP
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
                Our Leadership Team
              </h2>
              <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl">
                Experienced leaders driving innovation and excellence across the organization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {leadership.map((member) => (
                <LeadershipCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        {/* <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
            <div className="relative rounded-2xl bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc] overflow-hidden shadow-2xl text-center">
              <div 
                className="pointer-events-none absolute right-0 top-0 h-[140%] w-[60%] -translate-y-1/5 translate-x-1/6 rounded-full"
                style={{
                  background: 'radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 70%)'
                }}
              />
              <div className="relative px-5 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-12 lg:py-16 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                  Want to Join Our Team?
                </h2>
                <p className="mt-3 sm:mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                  We're always looking for talented individuals who are passionate about technology and innovation.
                </p>
                <div className="mt-6 sm:mt-8">
                  <a
                    href="/careers"
                    className="inline-flex items-center gap-3 sm:gap-4 rounded-full bg-white text-[#0f2f99] font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:brightness-[0.98] transition"
                  >
                    VIEW OPEN POSITIONS
                    <span className="grid place-items-center rounded-full bg-[#FFB800] text-[#0e254f] size-8 sm:size-10 shadow-[0_6px_16px_rgba(255,184,0,0.45)]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="sm:w-[18px] sm:h-[18px]">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      </section>
    </div>
  );
};

// ================= Leadership Card =================
function LeadershipCard({ member }: { member: typeof leadership[0] }) {
  return (
    <article className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
      <div className="relative h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-neutral-900">{member.name}</h3>
        <p className="text-xs sm:text-sm text-[#0e36a2] font-semibold mt-1">{member.role}</p>
        <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">{member.bio}</p>
        
      </div>
    </article>
  );
}

export default AboutAndTeam;
