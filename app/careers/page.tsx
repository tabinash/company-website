"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
    FiUsers,
    FiHeart,
    FiTrendingUp,
    FiCoffee,
    FiGlobe,
    FiZap,
    FiAward,
    FiClock,
    FiMapPin,
    FiDollarSign,
    FiCode,
    FiPenTool,
    FiSettings,
    FiSmartphone,
    FiBarChart,
    FiArrowRight,
    FiCalendar,
    FiCheck
} from 'react-icons/fi';

const CareersPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('all');

    const companyPerks = [
        {
            icon: FiHeart,
            title: "Health & Wellness",
            description: "Comprehensive health insurance and wellness programs",
            color: "bg-red-500"
        },
        {
            icon: FiTrendingUp,
            title: "Career Growth",
            description: "Clear career progression paths and skill development",
            color: "bg-emerald-500"
        },
        {
            icon: FiCoffee,
            title: "Work-Life Balance",
            description: "Flexible working hours and remote work options",
            color: "bg-blue-500"
        },
        {
            icon: FiGlobe,
            title: "Global Exposure",
            description: "Work on international projects and expand your horizons",
            color: "bg-purple-500"
        },
        {
            icon: FiZap,
            title: "Latest Technology",
            description: "Access to cutting-edge tools and technologies",
            color: "bg-yellow-500"
        },
        {
            icon: FiAward,
            title: "Recognition & Rewards",
            description: "Performance bonuses and achievement recognition",
            color: "bg-[#f46036]"
        }
    ];

    const openPositions = [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            department: "development",
            location: "Kathmandu, Nepal",
            type: "Full-time",
            experience: "3-5 years",
            salary: "NPR 80,000 - 120,000",
            skills: ["React", "Node.js", "MongoDB", "TypeScript"],
            description: "Join our development team to build scalable web applications and SaaS platforms for clients worldwide.",
            posted: "2 days ago"
        },
        {
            id: 2,
            title: "UI/UX Designer",
            department: "design",
            location: "Kathmandu, Nepal",
            type: "Full-time",
            experience: "2-4 years",
            salary: "NPR 60,000 - 90,000",
            skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
            description: "Create beautiful and intuitive user experiences for web and mobile applications.",
            posted: "1 week ago"
        },
        {
            id: 3,
            title: "Digital Marketing Specialist",
            department: "marketing",
            location: "Kathmandu, Nepal",
            type: "Full-time",
            experience: "2-3 years",
            salary: "NPR 50,000 - 75,000",
            skills: ["SEO", "Google Ads", "Social Media", "Content Marketing"],
            description: "Drive digital marketing campaigns and help clients grow their online presence.",
            posted: "3 days ago"
        },
        {
            id: 4,
            title: "Mobile App Developer",
            department: "development",
            location: "Kathmandu, Nepal",
            type: "Full-time",
            experience: "2-4 years",
            salary: "NPR 70,000 - 100,000",
            skills: ["React Native", "Flutter", "iOS", "Android"],
            description: "Develop cross-platform mobile applications for various industry verticals.",
            posted: "5 days ago"
        },
        {
            id: 5,
            title: "Project Manager",
            department: "management",
            location: "Kathmandu, Nepal",
            type: "Full-time",
            experience: "4-6 years",
            salary: "NPR 90,000 - 130,000",
            skills: ["Agile", "Scrum", "Project Planning", "Team Leadership"],
            description: "Lead cross-functional teams to deliver high-quality projects on time and within budget.",
            posted: "1 week ago"
        },
        {
            id: 6,
            title: "DevOps Engineer",
            department: "development",
            location: "Kathmandu, Nepal / Remote",
            type: "Full-time",
            experience: "3-5 years",
            salary: "NPR 85,000 - 115,000",
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
            description: "Build and maintain scalable infrastructure for our growing portfolio of applications.",
            posted: "4 days ago"
        }
    ];

    const departments = [
        { id: 'all', name: 'All Positions', icon: FiUsers },
        { id: 'development', name: 'Development', icon: FiCode },
        { id: 'design', name: 'Design', icon: FiPenTool },
        { id: 'marketing', name: 'Marketing', icon: FiBarChart },
        { id: 'management', name: 'Management', icon: FiSettings }
    ];

    const filteredPositions = selectedDepartment === 'all'
        ? openPositions
        : openPositions.filter(pos => pos.department === selectedDepartment);

    const getJobIcon = (department: string) => {
        switch (department) {
            case 'development': return FiCode;
            case 'design': return FiPenTool;
            case 'marketing': return FiBarChart;
            case 'management': return FiSettings;
            default: return FiUsers;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-200 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-20 left-20 w-48 h-48 bg-red-200 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center bg-[#f46036] rounded-full px-6 py-3 w-fit mx-auto mb-8">
                            <FiHeart className="h-6 w-6 text-white mr-3" />
                            <span className="text-white font-medium">Join Our Team</span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-medium text-blue-900 mb-6">
                            Build Your Career with
                            <span className="text-[#f46036] block">
                                Nepal's Digital Innovators
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Join a team of passionate professionals creating digital solutions that matter. We're looking for talented individuals who want to make a real impact in Nepal's growing tech ecosystem.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-blue-900">15+</div>
                                <div className="text-sm text-gray-600">Team Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-blue-900">6</div>
                                <div className="text-sm text-gray-600">Open Positions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-blue-900">5+</div>
                                <div className="text-sm text-gray-600">Departments</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-semibold text-blue-900">100%</div>
                                <div className="text-sm text-gray-600">Remote Friendly</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                            Why Choose Navexis as Your Career Destination?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We believe in creating an environment where talent thrives, innovation flourishes, and careers grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {companyPerks.map((perk, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                                <div className={`w-16 h-16 ${perk.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <perk.icon className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{perk.title}</h3>
                                <p className="text-gray-600 text-sm">{perk.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                            Open Positions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Find the perfect role that matches your skills and passion
                        </p>
                    </div>

                    {/* Department Filter */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white rounded-full p-2 shadow-md border border-gray-200">
                            <div className="flex space-x-2">
                                {departments.map((dept) => (
                                    <button
                                        key={dept.id}
                                        onClick={() => setSelectedDepartment(dept.id)}
                                        className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${selectedDepartment === dept.id
                                                ? 'bg-[#f46036] text-white shadow-lg'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }`}
                                    >
                                        <dept.icon className="h-4 w-4" />
                                        <span>{dept.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredPositions.map((job) => {
                            const JobIcon = getJobIcon(job.department);
                            return (
                                <div key={job.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                                <JobIcon className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                                                <p className="text-sm text-gray-600 capitalize">{job.department}</p>
                                            </div>
                                        </div>
                                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                                            {job.posted}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-6 text-sm">{job.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <FiMapPin className="h-4 w-4" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <FiClock className="h-4 w-4" />
                                            <span>{job.type}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <FiTrendingUp className="h-4 w-4" />
                                            <span>{job.experience}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <FiDollarSign className="h-4 w-4" />
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-medium text-gray-900 mb-3">Required Skills:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {job.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/careers/apply/${job.id}`}
                                        className="bg-[#f46036] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#e55530] transition-colors inline-flex items-center space-x-2 group"
                                    >
                                        <span>Apply Now</span>
                                        <FiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Company Culture */}
            <section className="py-20 bg-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-white mb-6">
                            Life at Navexis
                        </h2>
                        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                            More than just a workplace - we're a community of innovators, creators, and problem solvers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Collaborative Environment",
                                description: "Open office culture with cross-team collaboration",
                                icon: FiUsers,
                                stats: "15+ Team Members"
                            },
                            {
                                title: "Learning & Development",
                                description: "Regular training sessions and conference attendance",
                                icon: FiTrendingUp,
                                stats: "20+ Hours/Month"
                            },
                            {
                                title: "Flexible Working",
                                description: "Remote work options and flexible schedules",
                                icon: FiClock,
                                stats: "100% Remote Friendly"
                            },
                            {
                                title: "Innovation Time",
                                description: "Dedicated time for personal projects and exploration",
                                icon: FiZap,
                                stats: "20% Innovation Time"
                            }
                        ].map((culture, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                                    <div className="w-16 h-16 bg-[#f46036] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <culture.icon className="h-8 w-8 text-white" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-4">{culture.title}</h3>
                                    <p className="text-blue-100 mb-6 text-sm">{culture.description}</p>

                                    <div className="bg-white/10 rounded-xl p-3">
                                        <div className="text-sm font-medium text-blue-200">{culture.stats}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                            How to Join Us
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our simple and transparent hiring process
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Apply Online",
                                description: "Submit your application through our career portal",
                                icon: FiSmartphone
                            },
                            {
                                step: "02",
                                title: "Initial Screening",
                                description: "Phone/video call to discuss your background and interests",
                                icon: FiUsers
                            },
                            {
                                step: "03",
                                title: "Technical Interview",
                                description: "Technical assessment and problem-solving discussion",
                                icon: FiCode
                            },
                            {
                                step: "04",
                                title: "Final Interview",
                                description: "Cultural fit and final discussion with team leads",
                                icon: FiCheck
                            }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                                        <step.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f46036] text-white text-sm font-medium px-3 py-1 rounded-full">
                                        {step.step}
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;