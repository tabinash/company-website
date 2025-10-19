'use client';

import React from 'react';
import Image from 'next/image';
import { Rocket, Eye, Linkedin, Mail } from 'lucide-react';

// Team data
const leadership = [
  {
    id: 1,
    name: 'Brijesh Gupta',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    bio: 'Visionary leader with 15+ years of experience building world-class software products and teams.',
    linkedin: 'https://linkedin.com',
    email: 'brijesh@company.com'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
    bio: 'Tech innovator specializing in scalable architectures and cutting-edge development practices.',
    linkedin: 'https://linkedin.com',
    email: 'sarah@company.com'
  },
  {
    id: 3,
    name: 'Michael Roberts',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Engineering leader passionate about building high-performing teams and quality software.',
    linkedin: 'https://linkedin.com',
    email: 'michael@company.com'
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
                <div className="relative h-[400px] lg:h-[500px]">
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
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFB800] rounded-2xl -z-10 opacity-20" />
            </div>

            {/* Story Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Sphiron Tech began as a small group of engineers and product builders in Kathmandu with a single goal: help companies turn ideas into reliable digital products. Over time we've grown into a collaborative product studio that designs, engineers, and ships web and mobile applications for clients locally and abroad.
                </p>
                <p>
                  We focus on practical product outcomes — clear roadmaps, iterative delivery, and measurable results. Our team blends product design, frontend and backend engineering, and operational know-how so teams can move faster without sacrificing quality.
                </p>
                <p>
                  Today Sphiron Tech partners with startups and businesses across industries, helping them launch customer-facing apps, scale platforms, and improve engineering practices. We believe good software starts with understanding users, not only technology.
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
                  <div className="flex items-start gap-4 mb-4">
                    <div className="grid place-items-center size-12 rounded-full bg-[#FFB800] shadow-lg flex-shrink-0">
                      <Rocket className="size-6 text-neutral-900" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-1">
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
                  <div className="flex items-start gap-4 mb-4">
                    <div className="grid place-items-center size-12 rounded-full bg-[#FFB800] shadow-lg flex-shrink-0">
                      <Eye className="size-6 text-neutral-900" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-1">
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
                <div className="relative h-[400px] lg:h-[500px]">
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
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFB800] rounded-2xl -z-10 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= How We Work ================= */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              How We Work
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
              We follow a pragmatic product process that emphasizes discovery, rapid experimentation, and iterative delivery — so teams see value early and often.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 md:p-10 shadow-lg">
            <img
              src="https://cdn.prod.website-files.com/62c41df069f3e62476a3ccbe/6369dceca698032a3cfc3e46_H3-8Yw5wkjW0mQTgluIQDHRbfVzXi5uaSWUnclBBelGgKHPy9GQRMwRlec4pQ7EDQ3GeCyQZa1MV3sB1hVFo9pwoVmdFDgz2lld6ud78VFkO5tcluyWobQmu_yZ4-KBhZ_K7S4gSvKnCA6p3zV21lPXbpRmk56SgPM06KNX7WHm0ldiaJ25GbXUbcAcKYA.webp"
              alt="How We Work - Workflow"
              className="w-full h-auto object-fill"
            />
          </div>

          {/* Process Steps */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your goals and users' },
              { step: '02', title: 'Design', desc: 'Create intuitive experiences' },
              { step: '03', title: 'Development', desc: 'Build with best practices' },
              { step: '04', title: 'Delivery', desc: 'Ship and iterate continuously' }
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="text-5xl font-extrabold text-[#FFB800] opacity-90 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-neutral-300 transition pointer-events-none" />
              </div>
            ))}
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
              <div className="relative px-6 md:px-10 lg:px-14 py-12 lg:py-16 text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Meet Our Team
                </h1>
                <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed max-w-3xl">
                  A diverse group of passionate individuals committed to building exceptional software and creating lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Cards */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
            <div className="mb-10">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 py-2 text-sm font-bold text-neutral-900 shadow-sm">
                  LEADERSHIP
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
                Our Leadership Team
              </h2>
              <p className="mt-3 text-gray-600 text-base md:text-lg max-w-3xl">
                Experienced leaders driving innovation and excellence across the organization
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((member) => (
                <LeadershipCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
            <div className="relative rounded-2xl bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc] overflow-hidden shadow-2xl text-center">
              <div 
                className="pointer-events-none absolute right-0 top-0 h-[140%] w-[60%] -translate-y-1/5 translate-x-1/6 rounded-full"
                style={{
                  background: 'radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 70%)'
                }}
              />
              <div className="relative px-6 md:px-10 lg:px-14 py-12 lg:py-16 text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Want to Join Our Team?
                </h2>
                <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl mx-auto">
                  We're always looking for talented individuals who are passionate about technology and innovation.
                </p>
                <div className="mt-8">
                  <a
                    href="/careers"
                    className="inline-flex items-center gap-4 rounded-full bg-white text-[#0f2f99] font-semibold px-8 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:brightness-[0.98] transition"
                  >
                    VIEW OPEN POSITIONS
                    <span className="grid place-items-center rounded-full bg-[#FFB800] text-[#0e254f] size-10 shadow-[0_6px_16px_rgba(255,184,0,0.45)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  );
};

// ================= Leadership Card =================
function LeadershipCard({ member }: { member: typeof leadership[0] }) {
  return (
    <article className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
        <p className="text-sm text-[#0e36a2] font-semibold mt-1">{member.role}</p>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">{member.bio}</p>
        <div className="mt-4 flex items-center gap-2">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="grid place-items-center size-9 rounded-lg bg-gray-100 hover:bg-[#0A66C2] text-gray-700 hover:text-white transition"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="grid place-items-center size-9 rounded-lg bg-gray-100 hover:bg-neutral-900 text-gray-700 hover:text-white transition"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default AboutAndTeam;
