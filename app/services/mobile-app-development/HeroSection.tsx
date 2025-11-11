'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Smartphone } from 'lucide-react';
import laptop from "../../../assets/mobileapp.png";

export default function HeroSection() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 py-2 shadow-sm">
                                <Smartphone className="size-4 text-[#1445cc]" />
                                <span className="text-xs sm:text-sm font-bold text-neutral-900">Mobile App Development</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-[1.1] tracking-tight">
                                Build a mobile app people actually want to use
                                <span className="block text-[#1445cc] mt-2 text-lg sm:text-xl md:text-2xl font-semibold">
                                    Flutter & React Native experts based in Nepal
                                </span>
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                             We don’t just build apps — we build growth engines. Every mobile solution we create is tailored to help you engage customers, streamline operations, and scale efficiently. Using Flutter and React Native, we ensure rapid development, stunning interfaces, and robust performance without compromise.    </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-8 py-4 shadow-lg hover:brightness-95 transition-all text-sm sm:text-base group"
                                >
                                    Let's discuss your app idea
                                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-300 text-neutral-700 font-semibold px-8 py-4 hover:border-neutral-400 hover:bg-neutral-50 transition-all text-sm sm:text-base"
                                >
                                    See apps we've built
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative flex justify-center items-center lg:justify-end">
                            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
                                <Image
                                    src={laptop}
                                    alt="Mobile App Interface Preview"
                                    width={500}
                                    height={550}
                                    className="drop-shadow-2xl w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

                        {/* Left - Heading with Background */}
                        <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FFF7E9] to-[#FFE8B8] p-6 sm:p-8 md:p-10 shadow-lg">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight">
                                We know what makes apps successful—and what makes them fail
                            </h2>
                        </div>

                        {/* Right - Description */}
                        <div className="space-y-5 sm:space-y-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                            <p>
                                Here's the truth: most apps get deleted within the first week. Users have zero patience for slow loading, confusing navigation, or apps that crash. We've spent years studying why some apps get daily opens while others gather digital dust.
                            </p>

                            

                            <p>
                                We use Flutter and React Native because they let us build for both iOS and Android simultaneously—cutting your development time by half and keeping costs reasonable. And yes, they perform just as well as fully native apps when built correctly (which we do).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
