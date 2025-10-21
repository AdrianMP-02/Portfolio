'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import AnimationWrapper, { StaggerContainer, StaggerItem } from '@/components/AnimationWrapper';
import { Calendar, Clock, Search, BookOpen, User, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface BlogClientProps {
  initialPosts: BlogPost[];
  initialCategories: string[];
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 glass h-full flex flex-col justify-between">
      <Link href={`/blog/${post.slug}`} className="h-full flex flex-col">
        <div className="p-6 h-full flex flex-col justify-between">
          {/* Icon */}
          <div className="mb-4">
            <BookOpen size={48} className="text-gray-400 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" />
          </div>

          {/* Content */}
          <div className="flex-grow">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag: string) => (
                <span key={tag} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-md text-xs flex items-center gap-1">
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>

            <span className="text-gray-400 text-sm flex items-center gap-1 mb-2">
              <Calendar size={14} />
              {post.date}
            </span>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
              {post.title}
            </h3>

            <p className="text-gray-300 text-sm mb-4 flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </p>

            <p className="text-gray-300 leading-relaxed flex-grow">
              {post.excerpt}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <span className="text-gray-400 text-sm">
                  {post.author}
                </span>
              </div>
              <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                Leer más →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BlogClient({ initialPosts, initialCategories }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 6; // Para manejar muchos posts

  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || post.tags.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchTerm, selectedCategory]);

  // Paginación
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimationWrapper className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Comparto mis experiencias, aprendizajes y conocimientos sobre desarrollo web,
            tecnologías modernas y mejores prácticas en programación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <BookOpen size={20} />
              Sugerir Tema
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 border border-gray-600 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              Ver Proyectos
            </Link>
          </div>
        </AnimationWrapper>

        {/* Stats */}
        <AnimationWrapper className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
            <h3 className="text-2xl font-bold text-blue-400">{initialPosts.length}</h3>
            <p className="text-gray-400">Artículos publicados</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
            <h3 className="text-2xl font-bold text-purple-400">{initialCategories.length}</h3>
            <p className="text-gray-400">Categorías</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
            <h3 className="text-2xl font-bold text-green-400">{filteredPosts.length}</h3>
            <p className="text-gray-400">Resultados encontrados</p>
          </div>
        </AnimationWrapper>

        {/* Filters and Search */}
        <AnimationWrapper className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-12 glass hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Buscar artículos
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 text-gray-400 transition-colors duration-300" size={20} style={{ marginTop: '-10px' }} />
                <input
                  type="text"
                  placeholder="Buscar por título o contenido..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
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
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              >
                <option value="">Todas las categorías</option>
                {initialCategories.map((category: string) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <StaggerContainer className="flex flex-wrap gap-2 mt-4">
            {initialCategories.map((category: string) => (
              <StaggerItem key={category}>
                <button
                  onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                  className={`px-3 py-1 rounded-full text-sm cursor-pointer border transition-all duration-300 hover:scale-105 ${selectedCategory === category
                    ? 'bg-blue-600 text-white border-blue-500 shadow-lg'
                    : 'bg-gray-700/50 text-gray-300 border-gray-600 hover:border-blue-500/50 hover:bg-gray-600/50'
                    }`}
                >
                  {category}
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimationWrapper>

        {/* Blog Posts */}
        <AnimationWrapper>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {paginatedPosts.length === 0 ? (
              <div className="col-span-full text-center py-16 animate-fade-in">
                <Search size={64} className="mx-auto text-gray-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-400 mb-2">No se encontraron artículos</h3>
                <p className="text-gray-500">Intenta con otros términos de búsqueda o categorías.</p>
              </div>
            ) : (
              paginatedPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogCard post={post} />
                </StaggerItem>
              ))
            )}
          </StaggerContainer>
        </AnimationWrapper>

        {/* Pagination */}
        {totalPages > 1 && (
          <AnimationWrapper className="flex justify-center mt-12">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </AnimationWrapper>
        )}
      </div>
    </div>
  );
}
