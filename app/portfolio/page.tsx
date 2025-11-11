import { FC } from 'react';
import Image from 'next/image';
import organicbazarImage from "@/assets/organicbazzar.png"
import dgclickimage from "@/assets/dgclick.png" // Assumed path for the new DG Click image
import benchmarkimage from "@/assets/benchmark.png"
import poultryImage from "@/assets/poultry.png"
import dairyimage from "@/assets/dairy.png"
import medtrakerimage from "@/assets/medtracker.png"
import digitalImage from "@/assets/digital.jpg"
import { StaticImageData } from 'next/image';

interface PortfolioItem {
    id: number;
    title: string;
    company: string;
    description: string; // Added description field
    image: string | StaticImageData;
    color: string;
    lightColor: string;
    isUpcoming?: boolean; // Optional flag for 'Coming Soon' projects
}

const portfolioData: PortfolioItem[] = [
    {
        id: 1,
        title: "Benchmark",
        company: "Digital Education Platform for Publication House",
        description: "We built this mobile application to digitize educational resources in Nepal, providing educators with seamless, interactive access to learning materials.",
        image: benchmarkimage,
        color: "bg-blue-600",
        lightColor: "bg-blue-100 text-blue-600"
    },
    {
        id: 2,
        title: "IELTS Exam Prep",
        company: "Web-based Computer IELTS Test Practice",
        description: "A comprehensive, web-based platform for digiting the IELTS examination practice. It offers users a realistic test environment to build confidence and skills.",
        image: organicbazarImage,
        color: "bg-purple-600",
        lightColor: "bg-purple-100 text-purple-600"
    },
    {
        id: 3,
        title: "Poultry",
        company: "Enterprise Solution for Poultry Farming",
        description: "A comprehensive mobile app modernizing farming in Nepal. It offers an end-to-end digital system to track every insight, provide advanced analytics, ensure efficient production, and manage all transaction records digitally.",
        image: poultryImage,
        color: "bg-green-600",
        lightColor: "bg-green-100 text-green-600"
    },
    {
        id: 4,
        title: "Organic Bazaar",
        company: "Online E-commerce for Organic Produce",
        description: "A dedicated e-commerce mobile app connecting local organic farmers directly to consumers, making fresh, high-quality organic products easily accessible across the region.",
        image: organicbazarImage,
        color: "bg-yellow-600",
        lightColor: "bg-yellow-100 text-yellow-600"
    },
    {
        id: 5,
        title: "DG Click",
        company: "Custom Design & Printing E-commerce",
        description: "An innovative e-commerce app for a printing design studio, offering a vast range of customizable products—from Apparel (T-Shirts, Hoodies) and Business Materials (Banners, Visiting Cards) to Accessories (Mugs, Keychains) and Home & Living items (Canvas Prints, Frames).",
        image: dgclickimage, // Correct image variable
        color: "bg-red-600", // The circle background color
        lightColor: "bg-amber-100 text-amber-600" 
    },
    {
        id: 6,
        title: "Digital Dairy",
        company: "Coming Soon: Dairy Management Mobile App",
        description: "Digitizing the dairy industry in Nepal. A mobile app for farmers to get all their dairy sales and records at their fingertips.",
        image: dairyimage,
        color: "bg-gray-400",
        lightColor: "bg-gray-100 text-gray-600",
        isUpcoming: true
    },
    {
        id: 7,
        title: "Med Tracker",
        company: "Coming Soon: Medicine Reminder App",
        description: "A dedicated mobile app for people to track and set reminders for their medicine, ensuring better health compliance.",
        image: medtrakerimage,
        color: "bg-pink-600",
        lightColor: "bg-pink-100 text-pink-600",
        isUpcoming: true
    }
];

const PortfolioShowcase: FC = () => {
    return (
        <section className="relative bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {/* Small Label */}
                        <div className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">
                            OUR WORK
                        </div>

                        {/* Main Heading (Natural, Human-Written Tone) */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                            <span className="text-[#1445cc]">Transforming Ideas:</span>{' '}
                            Real Solutions That Drive Digital Change
                        </h2>

                        {/* Description (Updated and Cleaned) */}
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                            We are digital innovators, not just developers. Our portfolio is a testament to solving complex, real-world challenges across education, agritech, and e-commerce. Every mobile and web solution we deliver is designed for tangible efficiency and maximum business impact.
                        </p>

                         
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-6 sm:mt-8 lg:mt-0">
                        <div className="relative h-[60vh] rounded-2xl overflow-hidden">
                            <img
                                src={digitalImage.src}
                                alt="Project Showcase"
                                className="w-full h-full object-cover"
                            />
                        </div>


                        {/* Decorative Elements */}
                        <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-blue-100 rounded-full -z-10 blur-2xl"></div>
                        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-100 rounded-full -z-10 blur-xl"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-3 md:mb-4">
                        Our Portfolio
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our latest projects, including innovative solutions we've delivered and what we're building next.
                    </p>
                </div>

                {/* Portfolio Items */}
                <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
                    {portfolioData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={item.id}
                                className={`relative flex flex-col items-center min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:min-h-[420px] ${isEven ? 'lg:flex-row lg:justify-start' : 'lg:flex-row lg:justify-end'}`}
                            >
                                {/* Large Circle Background */}
                                <div
                                    className={`absolute top-0 ${isEven ? 'left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0' : 'left-1/2 -translate-x-1/2 lg:right-0 lg:left-auto lg:translate-x-0'} w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] xl:w-[450px] xl:h-[450px] ${item.color} rounded-full flex justify-center items-center shadow-xl`}
                                >
                                    {/* Laptop/Monitor inside circle */}
                                    <div className="relative w-[70%] sm:w-[75%] md:w-[80%] h-[70%] sm:h-[75%] md:h-[80%]">
                                        <img
                                            src={typeof item.image === 'string' ? item.image : item.image.src}
                                            alt={`${item.title} showcase`}
                                            className="w-full h-full object-contain scale-180 rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className={`relative z-20 mt-56 sm:mt-64 md:mt-72 lg:mt-0 ${isEven ? 'lg:ml-[260px] xl:ml-[280px]' : 'lg:mr-[260px] xl:mr-[280px]'
                                        } w-full max-w-lg lg:max-w-md xl:max-w-lg bg-white rounded-2xl shadow-2xl p-5 sm:p-6 md:p-7 lg:p-8 mx-4 sm:mx-0`}
                                >
                                    {/* Small decorative circle */}
                                    <div className={`w-9 h-9 sm:w-10 sm:h-10 ${item.lightColor.split(' ')[0]} rounded-full mb-3 sm:mb-4 flex items-center justify-center`}>
                                        <div className={`w-6 h-6 sm:w-7 sm:h-7 border-3 ${item.color.replace('bg-', 'border-')} border-t-transparent rounded-full`}></div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2 sm:mb-3">
                                        <span className={`${item.lightColor} px-2 sm:px-2.5 md:px-3 py-1 rounded-xl text-lg sm:text-xl md:text-2xl font-bold`}>
                                            {item.title}
                                        </span>
                                        <span className="text-neutral-900 block mt-1.5 sm:mt-2 text-base sm:text-lg md:text-xl font-semibold"> {item.company}</span>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                                        {item.description}
                                    </p>

                                    {/* Call to action */}
                                   
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcase;