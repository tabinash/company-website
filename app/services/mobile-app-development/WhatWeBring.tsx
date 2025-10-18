import { FC } from 'react';
import { ChevronDown } from 'lucide-react';

const WhatWeBring: FC = () => {
    return (
        <section className="py-12 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Heading */}
                <h2 className="text-4xl font-normal text-center text-gray-900 mb-16">
                    What <span className="text-blue-600">Sphiron Tech</span> Brings To The Table
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {/* Feature 1 */}
                    <div className="text-center space-y-4">

                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
                            Experienced Product Teams
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Our engineers and product designers have years of experience building native Android, iOS, and cross-platform apps that scale.
                        </p>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronDown className="w-6 h-6 mx-auto" />
                        </button>
                    </div>

                    {/* Feature 2 */}
                    <div className="text-center space-y-4">

                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
                            Proven Delivery
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            We focus on outcomes — shipping polished releases and building long-term relationships with clients.
                        </p>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronDown className="w-6 h-6 mx-auto" />
                        </button>
                    </div>

                    {/* Feature 3 */}
                    <div className="text-center space-y-4">

                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
                            Customer-first Approach
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            We collaborate closely with your team to ensure the product we build aligns with your users and business goals.
                        </p>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronDown className="w-6 h-6 mx-auto" />
                        </button>
                    </div>

                    {/* Feature 4 */}
                    <div className="text-center space-y-4">


                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
                            Design & Brand Fit
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Whether you're an established business or an early-stage startup, we craft experiences that reflect your brand and delight users.
                        </p>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <ChevronDown className="w-6 h-6 mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeBring;