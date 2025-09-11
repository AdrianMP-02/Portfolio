'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import { Calendar, Clock, Search, BookOpen, Share2, User, Tag } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [email, setEmail] = useState('');

  // Mock de datos del blog
  const posts = [
    {
      slug: 'bienvenido-al-blog',
      title: 'Bienvenido a mi Blog de Desarrollo',
      excerpt: 'Un espacio donde comparto mis experiencias, aprendizajes y conocimientos sobre desarrollo web moderno.',
      date: '2024-01-15',
      readTime: '5',
      category: 'Personal',
      image: '/api/placeholder/600/300'
    },
    {
      slug: 'tutorial-portfolio-nextjs',
      title: 'Cómo crear un portfolio moderno con Next.js 15',
      excerpt: 'Guía completa para construir un portfolio profesional utilizando Next.js, TypeScript y Tailwind CSS.',
      date: '2024-01-10',
      readTime: '12',
      category: 'Tutorial',
      image: '/api/placeholder/600/300'
    }
  ];

  const categories = ['Personal', 'Tutorial', 'JavaScript', 'React', 'Next.js'];

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comparto mis experiencias, aprendizajes y conocimientos sobre desarrollo web,
              tecnologías modernas y mejores prácticas en programación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
              >
                <BookOpen size={20} />
                Sugerir Tema
              </Link>
              <Link
                href="/projects"
                className="text-gray-300 border border-gray-600 px-6 py-3 rounded-xl font-semibold"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Buscar artículos
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 text-gray-400" size={20} style={{ marginTop: '-10px' }} />
                  <input
                    type="text"
                    placeholder="Buscar por título o contenido..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Categoría
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Todas las categorías</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                  className={`px-3 py-1 rounded-full text-sm cursor-pointer border ${selectedCategory === category
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-gray-700/50 text-gray-300 border-gray-600'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Mantente actualizado</h3>
              <p className="text-gray-300 mb-4">Recibe notificaciones de nuevos artículos directamente en tu email.</p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:border-blue-500 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-sm">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPosts.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <Search size={64} className="mx-auto text-gray-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-400 mb-2">No se encontraron artículos</h3>
                <p className="text-gray-500">Intenta con otros términos de búsqueda o categorías.</p>
              </div>
            ) : (
              filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)
            )}
          </div>

          {/* Pagination would go here */}
        </div>
      </div>
    </PageWrapper>
  );
}

function BlogCard({ post }: { post: any }) {
  return (
    <article className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        {/* Image placeholder */}
        <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
          <BookOpen size={48} className="text-gray-400" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category and date */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Tag size={14} />
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} min
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-300 mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Author and share */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <span className="text-gray-300">Adrián Muñoz</span>
            </div>
            <button className="flex items-center gap-2 text-blue-400 font-semibold">
              Leer más →
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
