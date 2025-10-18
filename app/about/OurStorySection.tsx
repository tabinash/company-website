'use client';

const OurStorySection = () => {
    return (
        <section className="py-12 lg:py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Left Content - Static Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop&auto=format"
                                alt="Modern office building with glass facade"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content - Story Text */}
                    <div className="space-y-6 lg:pl-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
                            Our story
                        </h2>

                        <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                            <p className="text-justify">
                                Sphiron Tech began as a small group of engineers and product builders in Kathmandu with a single goal: help companies turn ideas into reliable digital products. Over time we've grown into a collaborative product studio that designs, engineers, and ships web and mobile applications for clients locally and abroad.
                            </p>

                            <p className="text-justify">
                                We focus on practical product outcomes — clear roadmaps, iterative delivery, and measurable results. Our team blends product design, frontend and backend engineering, and operational know-how so teams can move faster without sacrificing quality.
                            </p>

                            <p className="text-justify">
                                Today Sphiron Tech partners with startups and businesses across industries, helping them launch customer-facing apps, scale platforms, and improve engineering practices. We believe good software starts with understanding users, not only technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStorySection;
