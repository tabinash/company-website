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


          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3">
 
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Enterprise Software Solutions
              </h1>
              
              <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
                Custom enterprise software tailored to your organization's unique needs. From CRM and ERP systems to workflow automation and business intelligence solutions.
              </p>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-[#0e36a2]">100+</div>
                  <div className="text-sm text-gray-600 mt-1">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#0e36a2]">99.9%</div>
                  <div className="text-sm text-gray-600 mt-1">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#0e36a2]">24/7</div>
                  <div className="text-sm text-gray-600 mt-1">Support</div>
                </div>
              </div>
            </div>

            {/* Right Image - 2 columns */}
            <div className="lg:col-span-2">
              <div className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
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
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              What We Build
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Enterprise-grade software solutions designed for scale and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="size-8" />,
                title: 'CRM Systems',
                desc: 'Customer relationship management platforms to track sales, manage leads, and improve customer service.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <Database className="size-8" />,
                title: 'ERP Solutions',
                desc: 'Enterprise resource planning systems integrating finance, HR, inventory, and operations.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: <Zap className="size-8" />,
                title: 'Workflow Automation',
                desc: 'Automate business processes, approvals, and routine tasks to improve efficiency.',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: <BarChart3 className="size-8" />,
                title: 'Business Intelligence',
                desc: 'Data analytics and reporting tools to make informed decisions based on real-time insights.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: <Lock className="size-8" />,
                title: 'Document Management',
                desc: 'Secure document storage, version control, and collaboration systems for enterprises.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: <Building2 className="size-8" />,
                title: 'Custom Solutions',
                desc: 'Tailored software built specifically for your unique business processes and requirements.',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-6 md:p-7 shadow-lg hover:shadow-xl transition-all group">
                <div className={`inline-grid place-items-center size-16 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features - Alternating Layout */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="mb-10">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 py-2 text-sm font-bold text-neutral-900 shadow-sm">
                KEY FEATURES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Built for Enterprise Needs
            </h2>
          </div>

          <div className="space-y-16">
            {/* Feature 1 - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Scalable Architecture
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Our enterprise solutions are built to scale with your business. Whether you have 10 users or 10,000, our systems handle growth seamlessly without performance degradation.
                </p>
                <ul className="space-y-3">
                  {['Microservices architecture', 'Cloud-native deployment', 'Auto-scaling capabilities', 'Load balancing & optimization'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="size-5 text-[#FFB800] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
                  alt="Scalable"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Feature 2 - Image Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
                  alt="Security"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Enterprise-Grade Security
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Security is not an afterthought. We implement industry-standard security practices and compliance measures to protect your sensitive business data.
                </p>
                <ul className="space-y-3">
                  {['Role-based access control', 'Data encryption at rest & in transit', 'Regular security audits', 'Compliance with industry standards'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="size-5 text-[#FFB800] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3 - Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Seamless Integration
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Our solutions integrate smoothly with your existing tools and systems. We work with legacy systems, third-party APIs, and modern cloud platforms.
                </p>
                <ul className="space-y-3">
                  {['REST & GraphQL APIs', 'Third-party integrations', 'Legacy system connectivity', 'Real-time data synchronization'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="size-5 text-[#FFB800] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
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
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Implementation Process
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              A structured approach to delivering enterprise software
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { phase: 'Discovery & Planning', desc: 'Requirements gathering, system analysis, and project planning' },
              { phase: 'Design & Prototyping', desc: 'UI/UX design, database schema, and system architecture' },
              { phase: 'Development & Testing', desc: 'Agile development with continuous testing and quality assurance' },
              { phase: 'Deployment & Training', desc: 'Staged rollout, user training, and knowledge transfer' },
              { phase: 'Support & Optimization', desc: 'Ongoing maintenance, updates, and performance optimization' }
            ].map((step, idx) => (
              <div key={idx} className="relative pl-8 pb-10 last:pb-0">
                {/* Vertical line */}
                {idx !== 4 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gray-300" />
                )}
                
                {/* Circle */}
                <div className="absolute left-0 top-1 size-8 rounded-full bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] grid place-items-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.phase}</h3>
                  <p className="text-sm text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc] overflow-hidden shadow-2xl">
            <div 
              className="pointer-events-none absolute right-0 top-0 h-[140%] w-[60%] -translate-y-1/5 translate-x-1/6 rounded-full"
              style={{
                background: 'radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 70%)'
              }}
            />
            
            <div className="relative px-6 md:px-10 lg:px-14 py-12 lg:py-16 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Ready to Build Your Enterprise Solution?
              </h2>
              <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl mx-auto">
                Let's discuss your requirements and create a custom solution for your business
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 rounded-full bg-white text-[#0f2f99] font-semibold px-8 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:brightness-[0.98] transition"
                >
                  START YOUR PROJECT
                  <span className="grid place-items-center rounded-full bg-[#FFB800] text-[#0e254f] size-10 shadow-[0_6px_16px_rgba(255,184,0,0.45)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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