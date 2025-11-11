'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Smartphone, Zap, Shield, Layers, Code2, Palette, Users2, TrendingUp, CheckCircle2, ArrowRight, Apple, MonitorSmartphone } from 'lucide-react';

export default function MobileAppDevelopmentPage() {
  return (
    <div className="bg-white">

      {/* HERO SECTION - Business Outcome Focused */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 py-2 shadow-sm">
                <Smartphone className="size-4 text-[#1445cc]" />
                <span className="text-xs sm:text-sm font-bold text-neutral-900">iOS & Android Development</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-[1.1] tracking-tight">
                Mobile Apps That Users
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0c2a7a] via-[#1445cc] to-[#0e36a2] mt-2">
                  Actually Use Daily
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                From app store launch to 10,000+ downloads. We build mobile experiences that solve real problems, earn 5-star reviews, and keep users coming back.
              </p>

              {/* Key Metrics */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900">3-6 Months</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Concept to Launch</div>
                </div>
                <div className="h-12 w-px bg-gray-300" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900">Both Platforms</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">iOS + Android</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1445cc] text-white font-semibold px-8 py-4 shadow-lg hover:bg-[#0c2a7a] transition-all text-sm sm:text-base group"
                >
                  Get Free App Consultation
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-300 text-neutral-700 font-semibold px-8 py-4 hover:border-neutral-400 hover:bg-neutral-50 transition-all text-sm sm:text-base"
                >
                  View App Portfolio
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Phone Mockups */}
              <div className="absolute inset-0 flex items-center justify-center gap-4">
                {/* Left Phone - iOS */}
                <div className="relative w-[45%] max-w-[200px] transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-[9/19] bg-black rounded-[32px] p-2 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-[24px] overflow-hidden">
                      <div className="h-8 bg-black/10 flex items-center justify-center">
                        <div className="w-24 h-6 bg-black rounded-full" />
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="h-12 bg-white/20 rounded-lg" />
                        <div className="grid grid-cols-3 gap-2">
                          {[1,2,3,4,5,6].map((i) => (
                            <div key={i} className="aspect-square bg-white/30 rounded-lg" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Apple className="absolute -bottom-4 -right-4 size-8 text-neutral-900 bg-white rounded-full p-1.5 shadow-lg" />
                </div>

                {/* Right Phone - Android */}
                <div className="relative w-[45%] max-w-[200px] transform rotate-6 hover:rotate-0 transition-transform duration-300 mt-8">
                  <div className="relative aspect-[9/19] bg-neutral-900 rounded-[32px] p-2 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-[24px] overflow-hidden">
                      <div className="h-8 bg-black/10" />
                      <div className="p-4 space-y-3">
                        <div className="h-16 bg-white/20 rounded-lg" />
                        <div className="space-y-2">
                          {[1,2,3].map((i) => (
                            <div key={i} className="h-10 bg-white/30 rounded-lg" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <MonitorSmartphone className="absolute -bottom-4 -right-4 size-8 text-[#3DDC84] bg-white rounded-full p-1.5 shadow-lg" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APP TYPES WE BUILD */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900">
              Apps We Specialize In
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-specific expertise across different app categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Users2 className="size-6 sm:size-7" />,
                title: 'E-commerce & Marketplace Apps',
                desc: 'Product catalogs, shopping carts, payment integration, order tracking, and seller dashboards.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <TrendingUp className="size-6 sm:size-7" />,
                title: 'Business & Productivity',
                desc: 'CRM tools, team collaboration, task management, invoice tracking, and workflow automation.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: <Zap className="size-6 sm:size-7" />,
                title: 'On-Demand Services',
                desc: 'Booking platforms, real-time tracking, driver/service provider apps, and delivery management.',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: <Palette className="size-6 sm:size-7" />,
                title: 'Social & Community',
                desc: 'User profiles, feeds, messaging, content sharing, and engagement features.',
                color: 'from-pink-500 to-pink-600'
              },
              {
                icon: <Shield className="size-6 sm:size-7" />,
                title: 'FinTech & Banking',
                desc: 'Digital wallets, payment gateways, transaction history, and secure financial operations.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: <Layers className="size-6 sm:size-7" />,
                title: 'Custom Enterprise Apps',
                desc: 'Internal tools, employee portals, inventory systems, and business-specific solutions.',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((app, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`inline-grid place-items-center size-14 sm:size-16 rounded-xl bg-gradient-to-br ${app.color} text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  {app.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">{app.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY CHOICES - Why Flutter/React Native */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 mb-6">
                <Code2 className="size-4 text-[#1445cc]" />
                <span className="text-xs sm:text-sm font-bold text-[#1445cc]">TECHNOLOGY STACK</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 mb-6">
                Cross-Platform Development That Doesn't Compromise
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center size-12 rounded-lg bg-[#02569B] flex-shrink-0">
                    <span className="text-white font-bold text-lg">F</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Flutter (Dart)</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Google's UI toolkit for beautiful, natively compiled apps. Single codebase, 60fps performance, pixel-perfect designs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid place-items-center size-12 rounded-lg bg-[#61DAFB] flex-shrink-0">
                    <span className="text-neutral-900 font-bold text-lg">RN</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">React Native</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Facebook's framework for apps that feel truly native. Hot reload, huge ecosystem, JavaScript expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid place-items-center size-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex-shrink-0">
                    <span className="text-white font-bold text-lg">N+</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Native When Needed</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Swift/Kotlin for performance-critical features, AR/VR, complex animations, or platform-specific requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <p className="text-sm font-semibold text-neutral-900 mb-2">The Result?</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>70% faster development,</strong> <strong>40% lower costs,</strong> and one team managing both iOS and Android—without sacrificing quality or performance.
                </p>
              </div>
            </div>

            {/* Right Visual - Platform Comparison */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-600">Development Time</span>
                  <span className="text-xl font-bold text-[#1445cc]">↓ 70%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[30%] bg-gradient-to-r from-[#1445cc] to-[#0c2a7a] rounded-full" />
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm font-semibold text-gray-600">Code Reusability</span>
                  <span className="text-xl font-bold text-green-600">↑ 90%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" />
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm font-semibold text-gray-600">Performance</span>
                  <span className="text-xl font-bold text-orange-600">~95%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                </div>

                <div className="mt-8 pt-6 border-t border-gray-300">
                  <p className="text-xs text-gray-500 text-center">
                    * Compared to building separate native iOS and Android apps
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS - Visual Timeline */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4">
              From Idea to App Store
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven 5-phase process that's launched 50+ successful apps
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#1445cc] via-[#FFB800] to-[#20C997]" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {[
                {
                  phase: '1',
                  title: 'Discovery',
                  time: '1-2 weeks',
                  desc: 'User research, competitor analysis, feature planning, technical architecture',
                  color: 'from-[#1445cc] to-[#0c2a7a]'
                },
                {
                  phase: '2',
                  title: 'Design',
                  time: '2-3 weeks',
                  desc: 'Wireframes, interactive prototypes, user testing, visual design, design system',
                  color: 'from-[#FFB800] to-[#FFA500]'
                },
                {
                  phase: '3',
                  title: 'Development',
                  time: '6-12 weeks',
                  desc: 'Agile sprints, weekly demos, API integration, quality assurance, performance optimization',
                  color: 'from-[#20C997] to-[#17a589]'
                },
                {
                  phase: '4',
                  title: 'Testing',
                  time: '1-2 weeks',
                  desc: 'Device testing, security audit, beta testing, bug fixes, App Store prep',
                  color: 'from-purple-500 to-purple-700'
                },
                {
                  phase: '5',
                  title: 'Launch',
                  time: '1 week',
                  desc: 'Store submission, ASO optimization, monitoring, user feedback, ongoing updates',
                  color: 'from-pink-500 to-rose-600'
                }
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  <div className={`size-16 sm:size-20 rounded-full bg-gradient-to-br ${step.color} text-white grid place-items-center font-extrabold text-2xl sm:text-3xl shadow-lg mb-4 relative z-10`}>
                    {step.phase}
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 h-full">
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">{step.title}</h3>
                    <div className="text-xs font-semibold text-[#1445cc] mb-3">{step.time}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900">
              Why Choose Sphiron Tech
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              What sets our mobile app development apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {[
              {
                icon: <CheckCircle2 className="size-6" />,
                title: 'App Store Optimization Built-In',
                desc: 'We don\'t just build apps—we ensure they get discovered. Every app includes ASO strategies: keyword optimization, compelling screenshots, A/B tested descriptions, and review management.'
              },
              {
                icon: <Zap className="size-6" />,
                title: 'Performance-First Approach',
                desc: 'Sub-2-second load times, smooth 60fps animations, optimized battery usage. We profile every screen, optimize every asset, and benchmark against top apps in your category.'
              },
              {
                icon: <Shield className="size-6" />,
                title: 'Enterprise-Grade Security',
                desc: 'SSL pinning, encrypted local storage, secure API communication, OWASP compliance. Your users\' data is protected with bank-level security protocols.'
              },
              {
                icon: <Users2 className="size-6" />,
                title: 'Post-Launch Support Included',
                desc: 'First 3 months of maintenance free: bug fixes, minor updates, crash monitoring, performance tracking, and user feedback implementation.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#1445cc]/30 hover:shadow-lg transition-all">
                <div className="grid place-items-center size-12 rounded-lg bg-[#1445cc] text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[#0c2a7a] via-[#1445cc] to-[#0e36a2] text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-16 sm:py-20 md:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Let's discuss your idea and create an app that users love.
            Free consultation + project roadmap included.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-10 py-5 shadow-xl hover:bg-[#FFA500] transition-all text-base sm:text-lg group"
            >
              Schedule Free Consultation
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 text-white font-semibold px-10 py-5 hover:bg-white/10 transition-all text-base sm:text-lg"
            >
              See Our App Portfolio
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/70">
              Trusted by startups and enterprises across Nepal • Average 4.8★ app rating • 50+ apps launched
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
