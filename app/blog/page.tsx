'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react';

// Import blog data - In real app, import from your data file:
// import { blogPosts, categories } from '@/lib/blog-data';

// Sample blog data (replace with actual import)
const blogPosts = [
  {
    id: 1,
    slug: 'building-scalable-web-applications-nextjs-14',
    title: 'Building Scalable Web Applications with Next.js 14',
    excerpt: 'Learn how to leverage the latest features in Next.js 14 to build performant and scalable web applications that your users will love.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    category: 'Development',
    date: '2025-01-15',
    readTime: '8 min read',
    author: {
      name: 'Brijesh Gupta',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80'
    },
    featured: true
  },
  {
    id: 2,
    slug: 'future-of-ai-in-software-development',
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we write code, test applications, and deliver software products.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
    category: 'AI & ML',
    date: '2025-01-12',
    readTime: '6 min read',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80'
    },
    featured: false
  },
  {
    id: 3,
    slug: 'best-practices-api-design-2025',
    title: 'Best Practices for API Design in 2025',
    excerpt: 'A comprehensive guide to designing RESTful and GraphQL APIs that are intuitive, scalable, and developer-friendly.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    category: 'Backend',
    date: '2025-01-10',
    readTime: '10 min read',
    author: {
      name: 'Michael Roberts',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
    },
    featured: false
  },
  {
    id: 4,
    slug: 'mobile-app-development-trends-2025',
    title: 'Mobile App Development Trends to Watch',
    excerpt: 'Stay ahead of the curve with these emerging trends in mobile app development, from cross-platform frameworks to progressive web apps.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    category: 'Mobile',
    date: '2025-01-08',
    readTime: '7 min read',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
    },
    featured: false
  },
  {
    id: 5,
    slug: 'optimizing-database-performance-at-scale',
    title: 'Optimizing Database Performance at Scale',
    excerpt: 'Learn proven strategies for optimizing database queries, indexing, and architecture to handle millions of users.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
    category: 'Database',
    date: '2025-01-05',
    readTime: '12 min read',
    author: {
      name: 'David Kumar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
    },
    featured: false
  },
  {
    id: 6,
    slug: 'ui-ux-design-principles-saas-products',
    title: 'UI/UX Design Principles for SaaS Products',
    excerpt: 'Master the essential design principles that make SaaS products intuitive, engaging, and conversion-focused.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80',
    category: 'Design',
    date: '2025-01-03',
    readTime: '9 min read',
    author: {
      name: 'Lisa Park',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&auto=format&fit=crop&q=80'
    },
    featured: false
  }
];

const categories = ['All', 'Development', 'AI & ML', 'Backend', 'Mobile', 'Database', 'Design'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600&auto=format&fit=crop"
                alt="Blog hero"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c2a7a]/95 via-[#0e36a2]/90 to-[#1445cc]/85" />
              {/* Soft radial highlight */}
              <div 
                className="pointer-events-none absolute right-0 top-0 h-[140%] w-[60%] -translate-y-1/5 translate-x-1/6 rounded-full"
                style={{
                  background: 'radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(255,255,255,0.0) 70%)'
                }}
              />
            </div>

            {/* Content */}
            <div className="relative px-6 md:px-10 lg:px-14 py-12 lg:py-16 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                
                {/* Left Content */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    Insights & Expertise
                  </h1>
                  <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
                    Explore the latest in software development, technology trends, and industry best practices from our team of experts.
                  </p>
                </div>

                {/* Right Visual Element */}
                <div className="relative hidden lg:block h-[200px]">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md">
                    {/* Decorative circles */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/5 ring-1 ring-white/10" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-white/10 blur-sm" />
                    
                    {/* Floating category badges */}
                    <div className="absolute right-24 top-12 bg-white text-neutral-900 rounded-xl shadow-lg px-4 py-2 text-sm font-bold">
                      Development
                    </div>
                    <div className="absolute right-12 top-32 bg-[#FFB800] text-neutral-900 rounded-xl shadow-lg px-4 py-2 text-sm font-bold">
                      AI & ML
                    </div>
                    <div className="absolute right-32 bottom-16 bg-white text-neutral-900 rounded-xl shadow-lg px-4 py-2 text-sm font-bold">
                      Design
                    </div>

                    {/* Yellow dots */}
                    <span className="absolute right-16 top-24 size-3 rounded-full bg-[#FFB800]" />
                    <span className="absolute right-40 top-40 size-3 rounded-full bg-[#FFB800]" />
                    <span className="absolute right-20 bottom-24 size-3 rounded-full bg-[#FFB800]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Rounded outline */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/15 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchQuery && (
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
                Featured Article
              </h2>
            </div>
            <FeaturedPostCard post={featuredPost} />
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {regularPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function FeaturedPostCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
        <div className="relative h-[300px] lg:h-auto overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFB800] px-3 py-1.5 text-xs font-bold text-neutral-900 shadow-lg">
              <Tag className="size-3" />
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight group-hover:text-[#0e36a2] transition">
            {post.title}
          </h3>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="relative size-10 rounded-full overflow-hidden ring-2 ring-gray-200">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-neutral-900">{post.author.name}</p>
              <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {post.readTime}
                </span>
              </div>
            </div>
            <ArrowRight className="size-5 text-neutral-900 group-hover:translate-x-1 transition" />
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogPostCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <article className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden group h-full flex flex-col">
        <div className="relative h-[220px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold text-neutral-900 shadow-sm">
              <Tag className="size-3 text-[#FFB800]" />
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg md:text-xl font-bold text-neutral-900 leading-tight group-hover:text-[#0e36a2] transition line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
            <div className="relative size-8 rounded-full overflow-hidden ring-2 ring-gray-100">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-neutral-900">{post.author.name}</p>
              <div className="flex items-center gap-2 text-xs text-gray-600 mt-0.5">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            <ArrowRight className="size-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition flex-shrink-0" />
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-neutral-300 transition pointer-events-none" />
      </article>
    </Link>
  );
}