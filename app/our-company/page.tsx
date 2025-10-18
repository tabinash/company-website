'use client';

import officeImage from "../../assets/image.png";
import teamImage from "../../assets/image.png";
import buildingImage from "../../assets/image.png";

// Team member images - update with your actual paths
import brijeshImg from "../../assets/image copy.png";
import ashishImg from "../../assets/image copy.png";
import rajanImg from "../../assets/image copy.png";
import kamalImg from "../../assets/image copy.png";

const teamMembers = [
    {
        id: 1,
        name: "Brijesh Gupta",
        position: "Founder, Director",
        image: brijeshImg
    },
    {
        id: 2,
        name: "Ashish Dhakal",
        position: "Account Manager",
        image: ashishImg
    },
    {
        id: 3,
        name: "Rajan Koirala",
        position: "Business Lead",
        image: rajanImg
    },
    {
        id: 4,
        name: "Kamal Aryal",
        position: "Development Lead",
        image: kamalImg
    }
];

export default function OurCompanyPage() {
    return (
        <div className="min-h-screen">
            <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="text-center space-y-8">
                    {/* Section Header */}
                    <p className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wide">
                        Introduction
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-gray-900 max-w-5xl mx-auto">
                        About Us | | Our Team & Vision | |{' '}
                        <span className="text-[#1748c5] font-semibold">
                            Connecting Clients and Growing Businesses
                        </span>
                    </h2>

                    {/* Description */}
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Founded in 2008, <span className="font-semibold">E-Signature Pvt. Ltd.</span> has grown to become Nepal’s largest full-service digital agency. Over the past 17 years, we’ve proudly delivered exceptional digital solutions to clients in Australia, the USA, the UK, and Canada.
                        </p>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Our team of 100+ creative developers and designers works together to drive innovation and deliver impactful results. We foster a professional yet friendly environment that encourages collaboration and visionary thinking.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="pt-6">
                        <button className="bg-[#1748c5] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg">
                            Learn More About Us
                        </button>
                    </div>
                </div>
            </section>

            {/* First Section - Hero */}
            <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Section - Office Image */}
                    <div className="order-2 lg:order-1">
                        <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[600px]">
                            <img
                                src={officeImage.src}
                                alt="E-Signature Team Meeting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Section - Text Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <h1 className="text-4xl  font-normal leading-tight text-gray-900">
                            At E-Signature, We Motivate, Push Boundaries, and Explore New Technologies.{' '}
                            <span className="text-[#1748c5] font-normal block mt-2">
                                We Grow Together.
                            </span>
                        </h1>

                        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                            <p>
                                Our web and{' '}
                                <a
                                    href="/services"
                                    className="text-[#1748c5] hover:underline font-medium transition"
                                >
                                    app development company
                                </a>{' '}
                                prides itself on our teams and clients. We are blessed with a highly skilled team sharing the same goal, i.e., commitment to excellence and customer satisfaction.
                            </p>

                            <p>
                                We assist our clients throughout their project's journey.
                            </p>

                            <p>
                                We won't leave you until your roots are strong enough to establish in the digital landscape.
                            </p>

                            <p>
                                Regular updates and feedback exchanges are our way of creating a successful product; we stand solid on this.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Second Section - Our Process */}
            <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Section - Team Image */}
                    <div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                            <img
                                src={teamImage.src}
                                alt="E-Signature Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Section - Text Content */}
                    <div className="space-y-6">
                        <p className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wide">
                            Our Process
                        </p>

                        <h2 className="text-3xl md:text-4xl  font-normal leading-tight text-gray-900">
                            Perfected Throughout The Last{' '}
                            <span className="text-[#1748c5] font-semibold">17 years.</span>
                        </h2>

                        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                            <p>
                                Experience is paramount. We follow a working mechanism developed through continuous learning and improvement for over 17 years.
                            </p>

                            <p>
                                We ensure you a smooth development of your product. We work to make it secure, responsive, functional, and performing well to satisfy the needs of your digital customer.
                            </p>

                            <p>
                                How can we effectively turn your concept into a complete assessment?
                            </p>
                        </div>

                        <div>
                            <a
                                href="/process"
                                className="inline-flex items-center gap-2 text-[#1748c5] font-semibold text-lg hover:underline transition group"
                            >
                                Discover our Process
                                <svg
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* Third Section - About Us */}


            {/* Fourth Section - Management Team */}
            <section className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto bg-gray-100">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl  font-normal text-gray-900">
                        Meet Our <span className="text-[#1748c5] font-semibold">Management Team</span>
                    </h2>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col items-center group"
                        >
                            {/* Profile Image with Dotted Background */}
                            <div className="relative mb-6">
                                {/* Dotted Background Circle */}
                                <div className="absolute inset-0 w-48 h-48 mx-auto">
                                    <svg className="w-full h-full" viewBox="0 0 200 200">
                                        <defs>
                                            <pattern id={`dots-${member.id}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                                <circle cx="5" cy="5" r="1.5" fill="#cbd5e0" />
                                            </pattern>
                                        </defs>
                                        <circle cx="100" cy="100" r="95" fill={`url(#dots-${member.id})`} />
                                    </svg>
                                </div>

                                {/* Profile Image */}
                                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={member.image.src}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}