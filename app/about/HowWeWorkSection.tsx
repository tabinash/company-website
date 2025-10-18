'use client';

import Image from 'next/image';
import workimage from "../../assets/howwework.svg"

const HowWeWorkSection = () => {
    return (
        <section className="py-12 lg:py-20 bg-gray-50">
            <div className="container px-6 lg:px-20">

                {/* Header - Left Aligned */}
                <div className="mb-8 lg:mb-12">
                    <h2 className="text-4xl font-medium text-blue-600 mb-4">
                        How we work
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                        We follow a pragmatic product process that emphasizes discovery, rapid experimentation, and iterative delivery — so teams see value early and often.
                    </p>
                </div>

                {/* SVG Workflow Diagram */}
                <div className="flex justify-center">
                    <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-sm">
                        <Image
                            src={workimage}
                            alt="How We Work - Workflow Diagram"
                            width={900}
                            height={600}
                            className="w-full max-w-5xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkSection;