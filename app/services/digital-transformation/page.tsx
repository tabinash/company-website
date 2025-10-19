'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Lightbulb, TrendingUp, Shield, Zap } from 'lucide-react';

export default function DigitalTransformationPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          {/* Back Button */}
         

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80"
                alt="Digital Transformation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c2a7a]/95 via-[#0e36a2]/90 to-[#1445cc]/85" />
              <div 
                className="pointer-events-none absolute right-0 top-0 h-[140%] w-[60%] -translate-y-1/5 translate-x-1/6 rounded-full"
                style={{
                  background: 'radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 70%)'
                }}
              />
            </div>

            <div className="relative px-6 md:px-10 lg:px-14 py-12 lg:py-16 text-white">
              <div className="max-w-3xl">
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Digital Transformation
                </h1>
                <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
                  Transform your business with modern digital solutions. We help organizations modernize operations, improve efficiency, and leverage technology for sustainable growth.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/15 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 py-2 text-sm font-bold text-neutral-900 shadow-sm">
                  OVERVIEW
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Modernize Your Business
              </h2>
              <div className="mt-6 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Digital transformation is more than just adopting new technology—it's about rethinking how your business operates and delivers value to customers.
                </p>
                <p>
                  We help organizations navigate the complex journey of digital change, from strategy and planning to implementation and adoption. Our approach focuses on practical, measurable outcomes that drive real business value.
                </p>
                <p>
                  Whether you're looking to automate manual processes, improve customer experiences, or unlock insights from your data, we work with you to identify opportunities and implement solutions that fit your business.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative h-[400px] lg:h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80"
                    alt="Team collaboration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFB800] rounded-2xl -z-10 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              What We Offer
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Comprehensive digital transformation services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="size-6" />,
                title: 'Process Automation',
                desc: 'Streamline operations and reduce manual work with intelligent automation solutions.'
              },
              {
                icon: <Lightbulb className="size-6" />,
                title: 'Digital Strategy',
                desc: 'Develop a clear roadmap for digital transformation aligned with business goals.'
              },
              {
                icon: <Zap className="size-6" />,
                title: 'Legacy Modernization',
                desc: 'Upgrade outdated systems to modern, scalable platforms without disruption.'
              },
              {
                icon: <Shield className="size-6" />,
                title: 'Change Management',
                desc: 'Support your team through transition with training and adoption programs.'
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid place-items-center size-14 rounded-xl bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] text-white mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 py-2 text-sm font-bold text-neutral-900 shadow-sm">
                OUR APPROACH
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              How We Work
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Assess & Strategize',
                desc: 'We start by understanding your current state, challenges, and goals. Together we define a clear digital transformation roadmap.'
              },
              {
                num: '02',
                title: 'Implement & Integrate',
                desc: 'We deploy solutions in phases, ensuring minimal disruption to operations while integrating with existing systems.'
              },
              {
                num: '03',
                title: 'Train & Optimize',
                desc: 'We support your team with training and continuously optimize processes based on real-world usage and feedback.'
              }
            ].map((step, idx) => (
              <div key={idx} className="rounded-2xl bg-gray-50 p-6 md:p-8 shadow-lg">
                <div className="text-6xl font-extrabold text-[#FFB800] opacity-20 mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative h-[400px] lg:h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
                    alt="Business growth"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FFB800] rounded-2xl -z-10 opacity-20" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Benefits You'll See
              </h2>
              <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
                Digital transformation delivers measurable results across your organization:
              </p>

              <div className="mt-6 space-y-4">
                {[
                  'Increased operational efficiency and reduced costs',
                  'Better customer experiences and satisfaction',
                  'Faster decision-making with real-time data insights',
                  'Improved employee productivity and collaboration',
                  'Greater agility to adapt to market changes',
                  'Competitive advantage through innovation'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 grid place-items-center size-6 rounded-full bg-[#FFB800] flex-shrink-0">
                      <Check className="size-4 text-neutral-900" />
                    </div>
                    <p className="text-gray-700 text-base md:text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl mx-auto">
                Let's discuss how digital transformation can help you achieve your business goals
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 rounded-full bg-white text-[#0f2f99] font-semibold px-8 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:brightness-[0.98] transition"
                >
                  GET STARTED
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