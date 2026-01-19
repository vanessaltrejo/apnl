'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import BlogPostCard from '@/components/BlogPostCard';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    // Correctly reference all posts for filtering
    return blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + POSTS_PER_PAGE);
  };

  return (
    <div className="w-full bg-white text-dark-blue">
      {/* Banner Section */}
      <section className="w-full h-40 relative overflow-hidden">
        <Image
          src="/images/image1.jpg"
          alt="Banner Blog"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>



      <main className="max-w-screen-xl mx-auto p-4 md:p-8">
        <section className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Blog Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-dark-blue text-center md:text-left flex-shrink-0 whitespace-nowrap">Nuestro Blog</h1>
          {/* Right: Search Bar */}
          <div className="w-full flex justify-center md:justify-end">
            <input
              type="text"
              placeholder="Buscar en el blog..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-2xl px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-primary-blue focus:border-primary-blue"
            />
          </div>
        </section>

        {/* Posts Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(0, visiblePosts).map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>

          {visiblePosts < filteredPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-primary-blue text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
              >
                Cargar Más
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
