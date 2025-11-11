'use client';

import Image from 'next/image';
import Link from 'next/link';
import laptop from "../../../assets/image copy 2.png";

export default function HeroAndReasonsCombined() {
    return (
        <div className="space-y-24">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white flex items-center py-12 sm:py-16 md:py-20 lg:py-24 min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[750px]">
                {/* Blue Circle in Top Right Corner (hide on small/medium screens) */}
                <div className="absolute hidden xl:block top-[-150px] right-8 w-[700px] h-[700px] bg-[#1445cc] rounded-full transform translate-x-1/4 -translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 max-w-2xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-[1.1] tracking-tight">
                                Build websites that drive results
                                <span className="block text-[#1445cc] mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                                    Modern web development with React, Next.js & Node.js
                                </span>
                            </h1>

                            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                Your website is often the first impression customers have of your business. We build fast, responsive, and user-friendly websites using modern technologies like React, Next.js, and Node.js. From corporate sites to complex web applications, we create digital experiences that look professional and perform reliably.
                            </p>

                            <button className="inline-flex items-center justify-center gap-3 sm:gap-4 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 shadow-[0_10px_30px_rgba(255,184,0,0.25)] hover:brightness-[0.95] transition-all text-sm sm:text-base md:text-lg w-full sm:w-auto">
                                Book your free consultation
                                <span className="grid place-items-center rounded-full bg-white text-[#0f2f99] size-8 sm:size-9 shadow-sm">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="sm:w-4 sm:h-4">
                                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="relative flex justify-center items-center lg:justify-end">
                            <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                                <Image
                                    src={laptop}
                                    alt="Website Design Preview on iMac"
                                    width={500}
                                    height={550}
                                    className="drop-shadow-2xl w-full h-auto object-contain"
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
                                Web development that focuses on <span className="text-[#0f2f99]">performance</span> and <span className="text-[#0f2f99]">user experience</span>
                            </h2>
                        </div>

                        {/* Right Content - Description Text */}
                        <div className="space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed">
                            <p>
                                A slow or confusing website costs you customers. Today's users expect fast loading times, smooth interactions, and intuitive navigation—regardless of their device or browser.
                            </p>

                            <p>
                                At Sphiron Tech, we build web platforms using modern frameworks like React and Next.js to deliver speed and reliability. Whether it's an ecommerce store, a business website, or a custom web application, we focus on clean code, responsive design, and optimal performance across all devices.
                            </p>

                            <p>
                                Our team has delivered projects across various industries, helping businesses establish their online presence and grow their digital capabilities. Check out{' '}
                                <Link href="#" className="text-[#0f2f99] font-semibold hover:text-[#1445cc] transition-colors underline decoration-2 underline-offset-2">
                                    our portfolio
                                </Link>{' '}
                                to see examples of our work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}