'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Users, Target, Cpu, GitBranch, MessageCircle, FileText } from 'lucide-react';

export default function ITConsultingPage() {
  return (
    <div className="bg-gray-50">
      {/* Compact Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-8 md:py-10">
         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                IT Consulting
              </h1>
              <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
                Expert guidance on technology strategy, architecture decisions, and implementation planning. We help you make informed IT decisions aligned with your business goals.
              </p>
            </div>

            <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80"
                alt="IT Consulting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Feature Section */}
      <section className="bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Strategic Technology Guidance
            </h2>
            <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
              Making the right technology decisions is critical to business success. Our IT consulting services provide you with expert advice and strategic guidance to navigate complex technology challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageCircle className="size-6" />,
                title: 'Independent Advice',
                desc: 'Unbiased recommendations focused on your best interests, not vendor sales.'
              },
              {
                icon: <Target className="size-6" />,
                title: 'Business-Aligned',
                desc: 'Technology decisions that support your business objectives and ROI.'
              },
              {
                icon: <FileText className="size-6" />,
                title: 'Actionable Plans',
                desc: 'Clear roadmaps and documentation you can actually implement.'
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="grid place-items-center size-12 rounded-lg bg-[#FFB800] text-neutral-900 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/85 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Different Layout */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Our Consulting Services
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg max-w-3xl">
              Comprehensive expertise to guide your technology decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Target className="size-6" />,
                title: 'Technology Strategy & Roadmapping',
                desc: 'Develop comprehensive IT strategies aligned with your business goals. We create actionable roadmaps that prioritize initiatives based on value, feasibility, and resource constraints.',
                points: ['3-5 year IT roadmaps', 'Budget planning & forecasting', 'Technology stack recommendations']
              },
              {
                icon: <Cpu className="size-6" />,
                title: 'Architecture Review & Design',
                desc: 'Evaluate your current systems and design scalable, maintainable architectures. We identify bottlenecks, security risks, and opportunities for optimization.',
                points: ['System architecture assessment', 'Performance optimization', 'Security & compliance review']
              },
              {
                icon: <GitBranch className="size-6" />,
                title: 'Technology Selection & Evaluation',
                desc: 'Navigate the complex landscape of tools, platforms, and vendors. We help you choose technologies that fit your specific needs, budget, and team capabilities.',
                points: ['Vendor comparison & selection', 'Build vs buy analysis', 'Migration planning']
              },
              {
                icon: <Users className="size-6" />,
                title: 'Team Augmentation & Mentoring',
                desc: 'Supplement your team with experienced consultants for specific projects or knowledge gaps. We work alongside your team, sharing knowledge and best practices.',
                points: ['Interim CTO/Tech Lead', 'Developer mentoring', 'Code review & quality assurance']
              }
            ].map((service, idx) => (
              <div key={idx} className="rounded-2xl bg-gray-50 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="grid place-items-center size-14 rounded-xl bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] text-white shadow-md flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="size-1.5 rounded-full bg-[#FFB800]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - Horizontal */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 py-2 text-sm font-bold text-neutral-900 shadow-sm">
                OUR PROCESS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              How We Engage
            </h2>
          </div>

          <div className="relative">
            {/* Timeline connector - hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
              {[
                { num: '1', title: 'Initial Discussion', desc: 'Free consultation to understand your needs and challenges' },
                { num: '2', title: 'Proposal & Scope', desc: 'Clear scope of work with timeline and deliverables' },
                { num: '3', title: 'Deep Dive', desc: 'Analysis, research, and stakeholder interviews' },
                { num: '4', title: 'Recommendations', desc: 'Detailed report with actionable next steps' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md relative z-10">
                    <div className="size-12 rounded-full bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] text-white grid place-items-center text-xl font-bold mb-4 mx-auto">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 text-center mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Card Grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Why Choose Our Consulting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Years of hands-on development experience',
              'Vendor-neutral recommendations',
              'Focus on practical, implementable solutions',
              'Clear documentation and knowledge transfer',
              'Flexible engagement models',
              'Ongoing support after recommendations'
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div className="mt-0.5 grid place-items-center size-6 rounded-full bg-[#FFB800] flex-shrink-0">
                  <Check className="size-4 text-neutral-900" />
                </div>
                <p className="text-gray-700 font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
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
                Need Expert IT Guidance?
              </h2>
              <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl mx-auto">
                Let's discuss your technology challenges and explore how we can help
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 rounded-full bg-white text-[#0f2f99] font-semibold px-8 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:brightness-[0.98] transition"
                >
                  SCHEDULE A CONSULTATION
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