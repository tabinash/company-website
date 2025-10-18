'use client';

import Image from 'next/image';
import Link from 'next/link';
import laptop from "../../../assets/image copy 2.png";

export default function HeroAndReasonsCombined() {
    return (
        <div className="space-y-24">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white min-h-screen flex items-center py-12 md:py-16 lg:py-0">
                {/* Blue Circle in Top Right Corner (hide on small screens) */}
                <div className="absolute hidden lg:block top-[-200px] right-12 w-[900px] h-[900px] bg-[#1445cc] rounded-full transform translate-x-1/4 -translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 md:space-y-8 max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-tight tracking-tight">
                                Build scalable websites that convert
                                <span className="block text-[#1445cc] mt-2 text-lg md:text-xl font-semibold">
                                    Fast, secure, and built for growth with Sphiron Tech
                                </span>
                            </h1>

                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                We owe who we are today to our team of creative designers,
                                dedicated scrum masters, and the best web developers in Nepal. For
                                years, they have explored and implemented all the domains of tools
                                and technologies related to their respective fields. This dedication and
                                skill set make us a top choice among web development agencies in
                                Nepal. It also solidifies our reputation as the best in Nepal's website
                                development landscape.
                            </p>

                            <button className="inline-flex items-center gap-4 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-8 md:px-10 py-3 md:py-4 shadow-[0_10px_30px_rgba(255,184,0,0.25)] hover:brightness-[0.95] transition-all text-base md:text-lg w-full sm:w-auto">
                                Book your free consultation
                                <span className="grid place-items-center rounded-full bg-white text-[#0f2f99] size-9 shadow-sm">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="relative flex justify-center items-center lg:justify-end mt-8 lg:mt-0">
                            <div className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-2xl">
                                {/* Replace this div with your actual Image component */}

                                
                                <Image
                                    src={laptop}
                                    alt="Website Design Preview on iMac"
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

            {/* Reasons Section */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                        {/* Left Content - Heading with Background */}
                        <div className="rounded-2xl bg-gradient-to-br from-[#FFF7E9] to-[#FFE8B8] p-10 lg:p-12 shadow-lg">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight">
                                Why companies choose <span className="text-[#0f2f99]">Sphiron Tech</span> for Web Development
                            </h2>
                        </div>

                        {/* Right Content - Description Text */}
                        <div className="space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed">
                            <p>
                                We go beyond the traditional approach and look to satisfy your
                                audience and goals more than just satisfying you.
                            </p>

                            <p>
                                At Sphiron Tech, we design and build web platforms that help businesses grow — from ecommerce stores to customer portals and marketing websites. Our team focuses on performance, accessibility, and conversion.
                            </p>

                            <p>
                                Just don't take our words - our proven record says it all. We have
                                served businesses of all kinds with their kind of challenges and
                                objectives. Check out{' '}
                                <Link href="#" className="text-[#0f2f99] font-semibold hover:text-[#1445cc] transition-colors underline decoration-2 underline-offset-2">
                                    our portfolio
                                </Link>{' '}
                                to check our past projects and their stories.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};