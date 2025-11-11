'use client';

import Image from 'next/image';
import Link from 'next/link';
import laptop from "../../../assets/digital-transformation.png"; // Update with your image

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
                                Transform your business for the digital age
                                <span className="block text-[#1445cc] mt-2 text-lg md:text-xl font-semibold">
                                    Streamline operations, reduce costs, and scale faster
                                </span>
                            </h1>

                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Manual processes and outdated systems slow your business down. Digital transformation replaces time-consuming workflows with automated solutions that save hours, reduce errors, and give you real-time insights. We help businesses modernize their operations with custom software, cloud platforms, and integrated systems that work together seamlessly.
                            </p>

                            <button className="inline-flex items-center gap-4 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-8 md:px-10 py-3 md:py-4 shadow-[0_10px_30px_rgba(255,184,0,0.25)] hover:brightness-[0.95] transition-all text-base md:text-lg w-full sm:w-auto">
                                Start your transformation
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
                                <Image
                                    src={laptop}
                                    alt="Digital Transformation Concept"
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
                                Digital transformation isn't just about <span className="text-[#0f2f99]">technology</span>—it's about <span className="text-[#0f2f99]">better business outcomes</span>
                            </h2>
                        </div>

                        {/* Right Content - Description Text */}
                        <div className="space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed">
                            <p>
                                Spreadsheets, paper forms, and disconnected systems create bottlenecks. Staff spend hours on repetitive tasks instead of growing your business. Critical data is scattered across different platforms, making decisions harder.
                            </p>

                            <p>
                                At Sphiron Tech, we digitize manual processes and build custom solutions that fit your specific workflows. Whether it's automating inventory management, creating customer portals, or integrating your existing systems, we design software that solves real operational challenges.
                            </p>

                            <p>
                                From restaurants digitizing their ordering systems to manufacturers tracking production in real-time, we've helped businesses across industries work smarter. See how{' '}
                                <Link href="#" className="text-[#0f2f99] font-semibold hover:text-[#1445cc] transition-colors underline decoration-2 underline-offset-2">
                                    digital transformation
                                </Link>{' '}
                                can streamline your operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}