import React from 'react'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Designing for Growth: UI patterns that convert',
    excerpt:
      'Practical UI patterns we use to increase clarity and conversions on SaaS dashboards and landing pages.',
    href: '/blog/designing-for-growth',
    image:
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&q=80',
    category: 'Design',
    date: 'Oct 1, 2025',
  },
  {
    id: 2,
    title: 'Scaling React Apps: architecture decisions that matter',
    excerpt:
      'How we structure large-scale React apps, file organization, and state management trade-offs.',
    href: '/blog/scaling-react-apps',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    category: 'Engineering',
    date: 'Sep 12, 2025',
  },
  {
    id: 3,
    title: 'From idea to App Store: a checklist',
    excerpt:
      'A practical checklist that covers product, design, engineering, and launch tasks for mobile apps.',
    href: '/blog/idea-to-appstore',
    image:
      'https://images.unsplash.com/photo-1610563166153-4f98e1d4cf4c?auto=format&fit=crop&w=1200&q=80',
    category: 'Product',
    date: 'Aug 18, 2025',
  },
  {
    id: 4,
    title: 'Performance budgets: keep your site fast',
    excerpt:
      'Introduce simple performance budgets and tools your team can use to stay fast over time.',
    href: '/blog/performance-budgets',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    category: 'Engineering',
    date: 'Jul 05, 2025',
  },
];



export default function BlogPage() {
  return (
    <main className="w-full">
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <h1 className="section-title">Insights from Sphiron Tech</h1>
            <p className="muted mt-3">Stories, guides, and lessons from building products, shipping features, and scaling teams.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-full border border-gray-200 text-sm bg-gray-50">All</button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-sm bg-white">Design</button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-sm bg-white">Engineering</button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-sm bg-white">Product</button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <Link href={post.href} className="block">
                  <div className="h-44 w-full overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="text-xs uppercase text-indigo-600 font-semibold">{post.category}</span>
                      <time className="text-xs">{post.date}</time>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-gray-900">{post.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>

                    <div className="mt-4">
                      <span className="text-indigo-600 font-medium">Read article →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
