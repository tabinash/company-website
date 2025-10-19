'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Code, Smartphone, Globe } from 'lucide-react';
import { useState } from 'react';

// Demo projects data
const demoProjects = [  {
    id: 6,
    title: 'Restaurant and Dining',
    category: 'Website',
    description: 'Elegant restaurant and dining website featuring delicious menus, reservation system, gallery, and a warm dining experience.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://sphiron-thakali.vercel.app/',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Restaurant UI'],
    icon: <Globe className="size-5" />
  },
  {
    id: 1,
    title: 'Travel Agency Website',
    category: 'Website',
    description: 'Modern travel agency website with tour packages, destination browsing, booking functionality, and customer testimonials.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://sphiron-travel-agency.vercel.app/hompage1',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design'],
    icon: <Globe className="size-5" />
  },
  {
    id: 2,
    title: 'Travel Agency Website v2',
    category: 'Website',
    description: 'Alternative design for travel agency platform featuring different layout, color scheme, and user experience approach.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://sphiron-travel-agency.vercel.app/',
    technologies: ['Next.js', 'React', 'Modern UI', 'Tour Booking'],
    icon: <Globe className="size-5" />
  },
  {
    id: 3,
    title: 'Furniture E-Commerce',
    category: 'Web Application',
    description: 'Full-featured furniture e-commerce store with product catalog, shopping cart, product filters, and modern UI design.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://sphiron-furniture.vercel.app/',
    technologies: ['Next.js', 'React', 'E-Commerce', 'Product Catalog'],
    icon: <Globe className="size-5" />
  },
  {
    id: 4,
    title: 'Automobile Showroom',
    category: 'Website',
    description: 'Professional automobile showroom website with vehicle listings, detailed specifications, image galleries, and contact forms.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://sphiron-showroom.vercel.app/',
    technologies: ['Next.js', 'React', 'Image Gallery', 'Modern UI'],
    icon: <Code className="size-5" />
  },
  {
    id: 5,
    title: 'Hotel Booking Website',
    category: 'Web Application',
    description: 'Hotel booking platform with room listings, availability calendar, reservation system, and guest management features.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://sphiron-hotel.vercel.app/',
    technologies: ['Next.js', 'React', 'Booking System', 'Tailwind CSS'],
    icon: <Globe className="size-5" />
  },

];


const categories = ['All', 'Web Application', 'Website'];

export default function DemoPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? demoProjects 
    : demoProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80"
                alt="Demo projects"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c2a7a]/95 via-[#0e36a2]/90 to-[#1445cc]/85" />
              <div 
                className="pointer-events-none absolute right-0 top-0 h-[140%] w-[60%] -translate-y-1/5 translate-x-1/6 rounded-full"
                style={{
                  background: 'radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 70%)'
                }}
              />
            </div>

            <div className="relative px-6 md:px-10 lg:px-14 py-12 lg:py-16 text-white">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Live Demo Projects
                </h1>
                <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
                  Explore our demo applications and see what we can build for you. Each project showcases different technologies and capabilities.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/15 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-gray-600">Filter by:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-[#FFB800] text-neutral-900 shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <DemoProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#0c2a7a] via-[#0e36a2] to-[#1445cc] overflow-hidden shadow-2xl">
            <div 
              className="pointer-events-none absolute right-0 top-0 h-[140%] w-[60%] -translate-y-1/5 translate-x-1/6 rounded-full"
              style={{
                background: 'radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 70%)'
              }}
            />
            
            <div className="relative px-6 md:px-10 lg:px-14 py-12 lg:py-16 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Want Something Like This?
              </h2>
              <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl mx-auto">
                Let's discuss your project and build something amazing together
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 rounded-full bg-white text-[#0f2f99] font-semibold px-8 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:brightness-[0.98] transition"
                >
                  START YOUR PROJECT
                  <span className="grid place-items-center rounded-full bg-[#FFB800] text-[#0e254f] size-10 shadow-[0_6px_16px_rgba(255,184,0,0.45)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DemoProjectCard({ project }: { project: typeof demoProjects[0] }) {
  return (
    <article className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold text-neutral-900 shadow-sm">
            {project.icon}
            {project.category}
          </span>
        </div>

        {/* View Demo Button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFB800] text-neutral-900 font-semibold px-4 py-2 text-sm shadow-lg hover:brightness-95 transition"
          >
            View Demo
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900 leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="inline-block px-2 py-1 rounded-md bg-gray-100 text-xs font-semibold text-gray-700">
              {tech}
            </span>
          ))}
        </div>

        {/* View Link */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e36a2] hover:text-[#0c2a7a] transition"
          >
            View Live Demo
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}