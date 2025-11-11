'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Smartphone, Globe, Lightbulb, Users, Building2 } from 'lucide-react';

type Service = {
  id: number;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Mobile App Design & Development',
    icon: <Smartphone className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop',
    description: 'Native & cross-platform mobile apps built with performance and user experience at the core. From iOS and Android to Flutter and React Native solutions.',
  },
  {
    id: 2,
    title: 'Web Design (UI/UX) & Development',
    icon: <Globe className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
    description: 'Modern, responsive websites and web applications that convert visitors into customers. Built with the latest technologies for speed and scalability.',
  },
  {
    id: 3,
    title: 'Digital Transformation',
    icon: <Lightbulb className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop',
    description: 'Transform your business with digital solutions. We help organizations modernize operations, improve efficiency, and leverage technology for growth.',
  },
  {
    id: 4,
    title: 'IT Consulting',
    icon: <Users className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop',
    description: 'Expert guidance on technology strategy, architecture decisions, and implementation planning. We help you make informed IT decisions aligned with business goals.',
  },
  {
    id: 5,
    title: 'Enterprise Software Solutions',
    icon: <Building2 className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop',
    description: 'Custom enterprise software tailored to your organization\'s needs. From CRM and ERP systems to workflow automation and business intelligence solutions.',
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleService = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const activeService = SERVICES.find(service => service.id === expandedId);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Services to Grow Your Business
          </h2>
          <p className="mt-2 sm:mt-3 max-w-3xl text-gray-600 text-sm sm:text-base md:text-lg">
            We design and build conversion-focused web and mobile products that help businesses scale and succeed.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Left: Service Cards */}
          <div className="space-y-2.5 sm:space-y-3">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isExpanded={expandedId === service.id}
                onToggle={() => toggleService(service.id)}
              />
            ))}
          </div>

          {/* Right: Visual Display */}
          <div className="hidden lg:block sticky top-8 h-fit">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-[500px]">
                <Image
                  src={activeService ? activeService.image : 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop'}
                  alt={activeService ? activeService.title : 'Our Services'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent" />
                {activeService && (
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="grid place-items-center rounded-full bg-[#FFB800] text-neutral-900 size-12 shadow-lg">
                        {activeService.icon}
                      </span>
                      <h3 className="text-2xl font-bold">{activeService.title}</h3>
                    </div>
                    <p className="text-white/90 text-sm">
                      {activeService.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  service, 
  isExpanded, 
  onToggle 
}: { 
  service: Service; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  return (
    <div 
      className={`rounded-2xl border-2 transition-all duration-300 ${
        isExpanded 
          ? 'border-[#FFB800] shadow-lg bg-white' 
          : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md'
      }`}
    >
      {/* Header Button */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3.5 sm:p-4 md:p-5 text-left group"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className={`grid place-items-center rounded-full size-8 sm:size-9 md:size-10 transition-colors ${
            isExpanded
              ? 'bg-[#FFB800] text-neutral-900'
              : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
          }`}>
            {service.icon}
          </span>
          <h3 className="text-sm sm:text-base font-semibold text-neutral-900">
            {service.title}
          </h3>
        </div>

        <div className={`grid place-items-center rounded-full size-6 sm:size-7 transition-all flex-shrink-0 ${
          isExpanded
            ? 'bg-[#FFB800] text-neutral-900 rotate-45'
            : 'bg-gray-200 text-gray-600'
        }`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-3.5 sm:px-4 md:px-5 pb-4 sm:pb-5 pt-1 border-t border-gray-100">
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}