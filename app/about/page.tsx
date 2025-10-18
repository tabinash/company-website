'use client';

import React from 'react';
import Image from 'next/image';
import { Rocket, Eye } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="space-y-0">

            {/* Our Story Section */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left Content - Image */}
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
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>

                            {/* Decorative accent */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFB800] rounded-2xl -z-10 opacity-20" />
                        </div>

                        {/* Right Content - Story Text */}
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

            {/* Mission & Vision Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        {/* Left Side - Mission and Vision Cards */}
                        <div className="space-y-6">
                            {/* Our Mission */}
                            <div className="relative rounded-2xl bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] p-6 md:p-8 shadow-lg group overflow-hidden">
                                {/* Subtle highlight */}
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

                            {/* Our Vision */}
                            <div className="relative rounded-2xl bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] p-6 md:p-8 shadow-lg group overflow-hidden">
                                {/* Subtle highlight */}
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

                        {/* Right Side - Image */}
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
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>

                            {/* Decorative accent */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFB800] rounded-2xl -z-10 opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">

                    {/* Header */}
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
                            How We Work
                        </h2>
                        <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
                            We follow a pragmatic product process that emphasizes discovery, rapid experimentation, and iterative delivery — so teams see value early and often.
                        </p>
                    </div>

                    {/* Workflow Diagram */}
                    <div className="rounded-2xl bg-white p-6 md:p-10 shadow-lg">
                        <div className="relative w-full ">
                            <img
                                src="https://cdn.prod.website-files.com/62c41df069f3e62476a3ccbe/6369dceca698032a3cfc3e46_H3-8Yw5wkjW0mQTgluIQDHRbfVzXi5uaSWUnclBBelGgKHPy9GQRMwRlec4pQ7EDQ3GeCyQZa1MV3sB1hVFo9pwoVmdFDgz2lld6ud78VFkO5tcluyWobQmu_yZ4-KBhZ_K7S4gSvKnCA6p3zV21lPXbpRmk56SgPM06KNX7WHm0ldiaJ25GbXUbcAcKYA.webp"
                                alt="How We Work - Workflow"
                                className="w-full h-auto object-fill"
                            />

                        </div>
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
                                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.desc}
                                </p>
                                {/* Hover accent */}
                                <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-neutral-300 transition pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;