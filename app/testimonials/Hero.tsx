'use client';

import testimonialHero from "../../assets/testimonial_image_new.png"; // Update with your actual image path

export default function Hero() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Section - Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl  font-normal leading-tight">
                            We Stop Only At <span className="text-[#1748c5]">Our Client's Satisfaction</span>
                        </h1>

                        <p className="text-gray-600 text-lg italic">
                            "We all need people who will give us feedback. That's how we improve." – Bill Gates
                        </p>

                        <p className="text-gray-700 text-base leading-relaxed">
                            Our clients are our most important asset, and their honest feedback is our way of chasing perfection. We go above and beyond to meet their expectations and transform their ideas into reality.
                        </p>

                        <p className="text-gray-700 text-base">
                            Explore what our clients had to say about our work.
                        </p>

                        {/* Optional CTA Button */}

                    </div>

                    {/* Right Section - Illustration */}
                    <div className="relative">
                        {/* Blue Circle Background */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1748c5] rounded-full -z-10"></div>

                        {/* Illustration Image */}
                        <div className="relative z-10">
                            <img
                                src={testimonialHero.src}
                                alt="Client Satisfaction Illustration"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Decorative Elements - Stars */}
                        <div className="absolute top-10 right-10 text-white text-2xl animate-pulse">⭐</div>
                        <div className="absolute top-32 right-5 text-white text-xl animate-pulse delay-100">⭐</div>
                        <div className="absolute bottom-20 right-20 text-white text-lg animate-pulse delay-200">⭐</div>
                    </div>

                </div>
            </section>

            {/* Additional sections can go here */}
        </div>
    );
}