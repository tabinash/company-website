'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Building2, Database, Lock, Zap, Users, BarChart3 } from 'lucide-react';

export default function EnterpriseSoftwarePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero with Side Image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Enterprise Software Solutions
              </h1>

              <p className="mt-4 sm:mt-5 md:mt-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Every business is unique — and your software should be too.
We create custom-built applications designed around your specific workflows and challenges. From intuitive user experiences to seamless integrations, our solutions are crafted to scale as your business grows — using modern technologies like Java Spring Boot, React, and PostgreSQL.
              </p>

              {/* Key Points */}
              <div className="mt-6 sm:mt-7 md:mt-8 space-y-2.5 sm:space-y-3">
                {[
                  'Custom-built for your business processes',
                  'Scalable architecture that grows with you',
                  'Modern tech stack for reliability'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <Check className="size-4 sm:size-5 text-[#FFB800] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image - 2 columns */}
            <div className="lg:col-span-2">
              <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80"
                  alt="Enterprise Software"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build - Icon Grid */}
     {/* What We Build - Icon Grid */}
<section className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
    <div className="text-center mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
        Enterprise Solutions We Build
      </h2>
      <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
        Custom software designed around your business workflows and processes
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {[
        {
          icon: <Users className="size-6 sm:size-7 md:size-8" />,
          title: 'Customer Management',
          desc: 'Track customer information, communication history, and sales pipelines in one centralized system built for your team.',
          color: 'from-blue-500 to-blue-600'
        },
        {
          icon: <Database className="size-6 sm:size-7 md:size-8" />,
          title: 'Inventory & Stock Control',
          desc: 'Monitor stock levels, track product movement, generate alerts, and manage suppliers with real-time data.',
          color: 'from-purple-500 to-purple-600'
        },
        {
          icon: <Zap className="size-6 sm:size-7 md:size-8" />,
          title: 'Process Automation',
          desc: 'Replace manual spreadsheets and paperwork with automated workflows that save time and reduce mistakes.',
          color: 'from-orange-500 to-orange-600'
        },
        {
          icon: <BarChart3 className="size-6 sm:size-7 md:size-8" />,
          title: 'Business Dashboards',
          desc: 'See your key metrics at a glance with custom reports and visual dashboards tailored to your business.',
          color: 'from-green-500 to-green-600'
        },
        {
          icon: <Lock className="size-6 sm:size-7 md:size-8" />,
          title: 'Internal Portals',
          desc: 'Employee portals for HR, time tracking, document access, and internal communications.',
          color: 'from-red-500 to-red-600'
        },
        {
          icon: <Building2 className="size-6 sm:size-7 md:size-8" />,
          title: 'Industry-Specific Tools',
          desc: 'Restaurant POS systems, farm management software, hotel booking platforms, and other specialized solutions.',
          color: 'from-indigo-500 to-indigo-600'
        }
      ].map((item, idx) => (
        <div key={idx} className="rounded-xl sm:rounded-2xl bg-white p-5 sm:p-6 md:p-7 shadow-lg hover:shadow-xl transition-all group">
          <div className={`inline-grid place-items-center size-14 sm:size-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 sm:mb-4 shadow-md group-hover:scale-110 transition-transform`}>
            {item.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Key Features - Alternating Layout */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="mb-8 sm:mb-10">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-neutral-900 shadow-sm">
                KEY FEATURES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Built for Business Growth
            </h2>
          </div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {/* Feature 1 - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                  Scalable & Reliable
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
                  We build systems that handle growth. Whether you're starting with 5 users or planning for 5000, our architecture is designed to scale without requiring expensive rewrites.
                </p>
                <ul className="space-y-2.5 sm:space-y-3">
                  {['Clean, maintainable code structure', 'Database optimization for performance', 'Cloud deployment options', 'Efficient resource utilization'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 sm:gap-3">
                      <Check className="size-4 sm:size-5 text-[#FFB800] flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[240px] sm:h-[280px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
                  alt="Scalable"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Feature 2 - Image Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
              <div className="order-2 lg:order-1 relative h-[240px] sm:h-[280px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
                  alt="Security"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                  Secure & Protected
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
                  Your business data needs protection. We implement security best practices including user authentication, role-based access, and data encryption to keep your information safe.
                </p>
                <ul className="space-y-2.5 sm:space-y-3">
                  {['User authentication and authorization', 'Role-based access control', 'Data encryption and secure storage', 'Regular security updates'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 sm:gap-3">
                      <Check className="size-4 sm:size-5 text-[#FFB800] flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3 - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                  Easy Integration
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
                  Connect your new system with existing tools. We build APIs and integrations to work with payment gateways, accounting software, and other business applications you already use.
                </p>
                <ul className="space-y-2.5 sm:space-y-3">
                  {['RESTful API development', 'Third-party service integration', 'Import/export functionality', 'Real-time data synchronization'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 sm:gap-3">
                      <Check className="size-4 sm:size-5 text-[#FFB800] flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[240px] sm:h-[280px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
                  alt="Integration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process - Vertical Timeline */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Our Development Process
            </h2>
            <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              A structured approach to building your enterprise software
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { phase: 'Discovery & Planning', desc: 'We understand your business processes, challenges, and goals to design the right solution' },
              { phase: 'Design & Architecture', desc: 'Create UI mockups, database design, and system architecture tailored to your needs' },
              { phase: 'Development & Testing', desc: 'Build features iteratively with regular demos and thorough testing at each stage' },
              { phase: 'Deployment & Training', desc: 'Launch the system and train your team to use it effectively' },
              { phase: 'Support & Maintenance', desc: 'Ongoing technical support, bug fixes, and feature enhancements as needed' }
            ].map((step, idx) => (
              <div key={idx} className="relative pl-7 sm:pl-8 pb-8 sm:pb-10 last:pb-0">
                {/* Vertical line */}
                {idx !== 4 && (
                  <div className="absolute left-[13px] sm:left-[15px] top-7 sm:top-8 bottom-0 w-0.5 bg-gray-300" />
                )}

                {/* Circle */}
                <div className="absolute left-0 top-1 size-7 sm:size-8 rounded-full bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] grid place-items-center text-white font-bold text-xs sm:text-sm">
                  {idx + 1}
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-900 mb-2">{step.phase}</h3>
                  <p className="text-xs sm:text-sm text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc] overflow-hidden shadow-2xl">
            <div
              className="pointer-events-none absolute right-0 top-0 h-[140%] w-[60%] -translate-y-1/5 translate-x-1/6 rounded-full"
              style={{
                background: 'radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 70%)'
              }}
            />

            <div className="relative px-5 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-12 lg:py-16 text-white text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Ready to Build Your Enterprise Solution?
              </h2>
              <p className="mt-3 sm:mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Let's discuss your requirements and create custom software that fits your business
              </p>

              <div className="mt-6 sm:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 sm:gap-4 rounded-full bg-white text-[#0f2f99] font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:brightness-[0.98] transition text-sm sm:text-base"
                >
                  START YOUR PROJECT
                  <span className="grid place-items-center rounded-full bg-[#FFB800] text-[#0e254f] size-8 sm:size-9 md:size-10 shadow-[0_6px_16px_rgba(255,184,0,0.45)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="sm:w-4 sm:h-4">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}