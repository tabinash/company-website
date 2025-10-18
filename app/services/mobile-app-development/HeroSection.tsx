import Image from 'next/image';
import { FC } from 'react';
import laptop from "../../../assets/image copy 2.png"
const HeroSection: FC = () => {
    return (
        <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
                            We build mobile apps users love
                            <span className="block text-blue-600 mt-2 text-lg md:text-base">Secure, scalable iOS & Android apps — from idea to launch</span>
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            Sphiron Tech is a Kathmandu-based product studio that designs and develops native and cross-platform mobile apps for startups and enterprises. We combine product thinking with engineering discipline to deliver performant apps, reliable backends, and smooth app-store launches.
                        </p>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg">
                            Get a free consultation
                        </button>
                    </div>

                    {/* Right Image with Blue Circle Background */}
                    <div className="relative flex justify-center items-center lg:justify-end">
                        {/* Large Blue Circle Background (hidden on small screens) */}
                        <div className="absolute hidden lg:block right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[700px] lg:h-[700px] bg-blue-600 rounded-full -z-10 translate-x-32"></div>

                        {/* Laptop Image */}
                        <div className="relative z-10 w-full max-w-2xl">
                            <Image
                                src={laptop}
                                alt="Website Design Preview on iMac"
                                width={500}
                                height={550}
                                className=" drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;