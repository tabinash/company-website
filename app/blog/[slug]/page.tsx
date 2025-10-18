import React from 'react'
import { notFound } from 'next/navigation'
import { findPostBySlug } from '../posts'

export default function PostPage({ params } : { params: { slug: string } }){
  const post = findPostBySlug(params.slug);
  if(!post) return notFound();

  return (
    <main className="container mx-auto px-6 lg:px-20 py-12">
      <article className="max-w-4xl mx-auto">
        <div className="h-64 overflow-hidden rounded-xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="mt-8">
          <div className="text-sm text-indigo-600 font-semibold">{post.category} • {post.date}</div>
          <h1 className="mt-3 text-3xl font-bold text-heading">{post.title}</h1>

          <div className="prose max-w-none mt-6">
            {/* render minimal markdown-like content */}
            {post.content.split('\n').map((line, i) => (
              line.startsWith('##') ? <h2 key={i}>{line.replace('##','').trim()}</h2> : <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
