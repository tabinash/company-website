'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin, Link2, Mail } from 'lucide-react';

// Sample blog post data - you'll replace this with dynamic data
const blogPost = {
  id: 1,
  title: 'Building Scalable Web Applications with Next.js 14',
  excerpt: 'Learn how to leverage the latest features in Next.js 14 to build performant and scalable web applications that your users will love.',
  image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=80',
  category: 'Development',
  tags: ['Next.js', 'React', 'Web Development', 'Performance'],
  date: '2025-01-15',
  readTime: '8 min read',
  author: {
    name: 'Brijesh Gupta',
    role: 'Lead Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    bio: 'Full-stack developer with 10+ years of experience building scalable web applications.'
  }
};

// Related posts
const relatedPosts = [
  {
    id: 2,
    title: 'The Future of AI in Software Development',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&auto=format&fit=crop&q=80',
    category: 'AI & ML',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Best Practices for API Design in 2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80',
    category: 'Backend',
    readTime: '10 min read'
  },
  {
    id: 4,
    title: 'Mobile App Development Trends to Watch',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop&q=80',
    category: 'Mobile',
    readTime: '7 min read'
  }
];

const leadership = [
  {
    id: 1,
    name: 'Brijesh Gupta',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    bio: 'Visionary leader with 15+ years of experience building world-class software products and teams.',
    linkedin: 'https://linkedin.com',
    email: 'brijesh@company.com'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
    bio: 'Tech innovator specializing in scalable architectures and cutting-edge development practices.',
    linkedin: 'https://linkedin.com',
    email: 'sarah@company.com'
  },
  {
    id: 3,
    name: 'Michael Roberts',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Engineering leader passionate about building high-performing teams and quality software.',
    linkedin: 'https://linkedin.com',
    email: 'michael@company.com'
  }
];

export default function BlogDetailPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-8 md:py-10">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-neutral-900 transition mb-6"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-3 py-1.5 text-xs font-bold text-neutral-900 shadow-sm">
              <Tag className="size-3 text-[#FFB800]" />
              {blogPost.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600">
              <Calendar className="size-4" />
              {new Date(blogPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-600">
              <Clock className="size-4" />
              {blogPost.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight max-w-4xl">
            {blogPost.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
            {blogPost.excerpt}
          </p>

          {/* Author & Share */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 pb-6">
            <div className="flex items-center gap-4">
              <div className="relative size-14 rounded-full overflow-hidden ring-2 ring-gray-200">
                <Image
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-base font-bold text-neutral-900">{blogPost.author.name}</p>
                <p className="text-sm text-gray-600">{blogPost.author.role}</p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <button className="grid place-items-center size-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
                <Share2 className="size-4" />
              </button>
              <button className="grid place-items-center size-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
                <Bookmark className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-0">
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Article Content */}
            <article className="lg:col-span-8">
              <div className="rounded-2xl bg-white p-6 md:p-10 shadow-lg">
                {/* Article body - Replace with your actual content */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 mt-0">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Next.js 14 brings groundbreaking features that revolutionize how we build modern web applications. In this comprehensive guide, we'll explore the latest capabilities and best practices for building scalable, performant applications.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 mt-10">Server Components</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Server Components are one of the most exciting features in Next.js 14. They allow you to render components on the server, reducing the JavaScript bundle size sent to the client and improving performance.
                  </p>

                  <div className="my-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6">
                    <div className="flex items-start gap-4">
                      <div className="grid place-items-center size-10 rounded-full bg-[#FFB800] flex-shrink-0">
                        <svg className="size-5 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-neutral-900 mb-2">Pro Tip</h4>
                        <p className="text-sm text-gray-700 leading-relaxed mb-0">
                          Always use Server Components by default and only opt into Client Components when you need interactivity or browser APIs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 mt-10">Performance Optimization</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Next.js 14 introduces several performance enhancements that make your applications blazingly fast. From improved caching strategies to better code splitting, these features ensure your users get the best experience possible.
                  </p>

                  <ul className="space-y-2 my-6">
                    <li className="flex items-start gap-3">
                      <svg className="size-5 text-[#FFB800] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                      </svg>
                      <span className="text-gray-700">Automatic image optimization with next/image</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="size-5 text-[#FFB800] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                      </svg>
                      <span className="text-gray-700">Built-in font optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="size-5 text-[#FFB800] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                      </svg>
                      <span className="text-gray-700">Improved code splitting strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="size-5 text-[#FFB800] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                      </svg>
                      <span className="text-gray-700">Enhanced caching mechanisms</span>
                    </li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 mt-10">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Next.js 14 provides developers with powerful tools to build modern, performant web applications. By leveraging Server Components, optimizing performance, and following best practices, you can create exceptional user experiences.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.toLowerCase()}`}
                        className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-gray-700 transition"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="relative size-16 rounded-full overflow-hidden ring-2 ring-gray-200 flex-shrink-0">
                      <Image
                        src={blogPost.author.avatar}
                        alt={blogPost.author.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-neutral-900">{blogPost.author.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{blogPost.author.role}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{blogPost.author.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Share Article */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">Share this article</h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2] hover:bg-[#1565C0] text-white font-semibold text-sm transition">
                      <Facebook className="size-4" />
                      Facebook
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2] hover:bg-[#1A8CD8] text-white font-semibold text-sm transition">
                      <Twitter className="size-4" />
                      Twitter
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm transition">
                      <Linkedin className="size-4" />
                      LinkedIn
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition">
                      <Link2 className="size-4" />
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                
                {/* Table of Contents */}
                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#introduction" className="block text-sm text-gray-700 hover:text-neutral-900 hover:translate-x-1 transition">
                      Introduction
                    </a>
                    <a href="#server-components" className="block text-sm text-gray-700 hover:text-neutral-900 hover:translate-x-1 transition">
                      Server Components
                    </a>
                    <a href="#performance" className="block text-sm text-gray-700 hover:text-neutral-900 hover:translate-x-1 transition">
                      Performance Optimization
                    </a>
                    <a href="#conclusion" className="block text-sm text-gray-700 hover:text-neutral-900 hover:translate-x-1 transition">
                      Conclusion
                    </a>
                  </nav>
                </div>

                {/* Newsletter */}
                <div className="rounded-2xl bg-gradient-to-br from-[#0c2a7a] to-[#1445cc] p-6 shadow-lg text-white">
                  <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm text-white/85 mb-4">
                    Get the latest insights delivered to your inbox
                  </p>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg px-4 py-2 text-sm text-neutral-900 placeholder:text-gray-400 mb-3 outline-none"
                  />
                  <button className="w-full rounded-lg bg-[#FFB800] hover:brightness-95 text-neutral-900 font-semibold py-2 text-sm transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-8">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="rounded-2xl bg-gray-50 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group h-full">
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold text-neutral-900 shadow-sm">
                        <Tag className="size-3 text-[#FFB800]" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-neutral-900 leading-tight group-hover:text-[#0e36a2] transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600">{post.readTime}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
            {/* Leadership Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="mb-10">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7E9] to-[#FFE8B8] px-4 py-2 text-sm font-bold text-neutral-900 shadow-sm">
                LEADERSHIP
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Our Leadership Team
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg max-w-3xl">
              Experienced leaders driving innovation and excellence across the organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


function LeadershipCard({ member }: { member: typeof leadership[0] }) {
  return (
    <article className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
        <p className="text-sm text-[#0e36a2] font-semibold mt-1">{member.role}</p>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">{member.bio}</p>

        {/* Social Links */}
        <div className="mt-4 flex items-center gap-2">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="grid place-items-center size-9 rounded-lg bg-gray-100 hover:bg-[#0A66C2] text-gray-700 hover:text-white transition"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="grid place-items-center size-9 rounded-lg bg-gray-100 hover:bg-neutral-900 text-gray-700 hover:text-white transition"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}