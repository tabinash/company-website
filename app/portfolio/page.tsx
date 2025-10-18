import { FC } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface PortfolioItem {
    id: number;
    title: string;
    company: string;
    image: string;
    color: string;
    lightColor: string;
}

const portfolioData: PortfolioItem[] = [
    {
        id: 1,
        title: "DEWA",
        company: "Dubai Electricity & Water Authority",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
        color: "bg-green-600",
        lightColor: "bg-green-100 text-green-600"
    },
    {
        id: 2,
        title: "TechCorp",
        company: "Technology Solutions Provider",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
        color: "bg-blue-600",
        lightColor: "bg-blue-100 text-blue-600"
    },
    {
        id: 3,
        title: "FinBank",
        company: "Digital Banking Platform",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
        color: "bg-purple-600",
        lightColor: "bg-purple-100 text-purple-600"
    },
    {
        id: 4,
        title: "HealthPlus",
        company: "Medical Services Application",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
        color: "bg-red-600",
        lightColor: "bg-red-100 text-red-600"
    }
];

const PortfolioShowcase: FC = () => {
    return (
        <section className="relative bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Small Label */}
                        <div className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-[0.08em]">
                            Projects
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                            <span className="text-[#1445cc]">Our Projects:</span>{' '}
                            Innovative Solutions and Delivered Excellence
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Showcasing some of our recent work where we helped businesses transform digitally.
                        </p>

                        {/* Optional CTA Button */}
                        <div className="pt-2">
                            <button className="inline-flex items-center gap-4 rounded-full bg-[#1445cc] text-white font-semibold px-8 py-4 shadow-[0_10px_30px_rgba(20,69,204,0.25)] hover:brightness-[0.95] transition-all text-base md:text-lg">
                                <span>View All Projects</span>
                                <span className="grid place-items-center rounded-full bg-[#FFB800] text-[#0e254f] size-9 shadow-[0_6px_16px_rgba(255,184,0,0.45)]">
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-8 lg:mt-0">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop&auto=format"
                                alt="Project Showcase"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full -z-10 blur-2xl"></div>
                        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-24 md:h-24 bg-purple-100 rounded-full -z-10 blur-xl"></div>
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
                        Explore our latest projects and see how we've delivered solutions that make a difference.
                    </p>
                </div>

                {/* Portfolio Items */}
                <div className="space-y-16 md:space-y-24 lg:space-y-32">
                    {portfolioData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={item.id}
                                className="relative flex flex-col lg:flex-row lg:justify-start items-center min-h-[500px] md:min-h-[600px]"
                            >
                                {/* Large Circle Background */}
                                <div
                                    className={`absolute top-0 ${isEven ? 'left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0' : 'left-1/2 -translate-x-1/2 lg:right-0 lg:left-auto'} w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] ${item.color} rounded-full flex justify-center items-center`}
                                >
                                    {/* Laptop/Monitor inside circle */}
                                    <div className="relative w-[70%] md:w-[80%] h-[70%] md:h-[80%]">
                                        <img
                                            src={item.image}
                                            alt={`${item.title} showcase`}
                                            className="w-full h-full object-contain rounded-md"
                                        />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className={`relative z-20 mt-64 md:mt-80 lg:mt-0 ${isEven ? 'lg:ml-auto lg:ml-[350px] xl:ml-[400px]' : 'lg:mr-auto lg:mr-[350px] xl:mr-[400px]'
                                        } w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 mx-4 sm:mx-0`}
                                >
                                    {/* Small decorative circle */}
                                    <div className={`w-10 h-10 md:w-12 md:h-12 ${item.lightColor.split(' ')[0]} rounded-full mb-4 md:mb-6 flex items-center justify-center`}>
                                        <div className={`w-7 h-7 md:w-8 md:h-8 border-4 ${item.color.replace('bg-', 'border-')} border-t-transparent rounded-full`}></div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 md:mb-4">
                                        <span className={`${item.lightColor} px-2 md:px-3 py-1 rounded-xl text-xl md:text-2xl lg:text-3xl font-bold`}>
                                            {item.title}
                                        </span>
                                        <span className="text-neutral-900 block mt-2 text-lg md:text-xl lg:text-2xl font-semibold"> {item.company}</span>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                        A comprehensive digital solution designed to enhance user experience
                                        and streamline business operations with cutting-edge technology.
                                    </p>

                                    {/* Call to action */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-neutral-900 hover:text-[#1445cc] transition-colors"
                                    >
                                        View Project
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                    </a>
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