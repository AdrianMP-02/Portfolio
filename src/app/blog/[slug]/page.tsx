import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag, Share2, BookOpen, User } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { ShareButton } from '@/components/ShareButton';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              Volver al blog
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Adrián Martín Pereira</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime} min de lectura</span>
                </div>
              </div>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-gray-300 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Share2 size={16} />
                <span className="text-sm">Compartir:</span>
              </div>
              <div className="flex gap-3">
                <ShareButton platform="twitter" title={post.title} />
                <ShareButton platform="linkedin" title={post.title} />
                <ShareButton platform="facebook" title={post.title} />
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <MDXRemote source={post.content} />
                </div>
              </div>

              {/* Author Section */}
              <div className="mt-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Sobre el autor</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Desarrollador apasionado por crear experiencias web increíbles.
                      Me encanta compartir conocimiento y aprender de la comunidad.
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href="/about"
                        className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                      >
                        Más sobre mí
                      </Link>
                      <Link
                        href="/projects"
                        className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                      >
                        Ver proyectos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <RelatedPosts currentSlug={slug} tags={post.tags} />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <SidebarCard
                  title="En este artículo"
                  icon={<BookOpen className="text-blue-400" size={20} />}
                >
                  <nav className="space-y-2">
                    <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm py-1">
                      Introducción
                    </a>
                    <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm py-1">
                      Desarrollo
                    </a>
                    <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm py-1">
                      Conclusiones
                    </a>
                  </nav>
                </SidebarCard>

                {/* Tags */}
                <SidebarCard
                  title="Tags relacionados"
                  icon={<Tag className="text-purple-400" size={20} />}
                >
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600/50 transition-colors cursor-pointer border border-gray-600 hover:border-gray-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </SidebarCard>
              </div>
            </aside>
          </article>
        </div>
      </div>
    </div>
  );
}

interface SidebarCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SidebarCard = ({ title, icon, children }: SidebarCardProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
};

interface RelatedPostsProps {
  currentSlug: string;
  tags: string[];
}

const RelatedPosts = ({ currentSlug, tags }: RelatedPostsProps) => {
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => post.tags.some(tag => tags.includes(tag)))
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <BookOpen className="text-blue-400" size={24} />
        Artículos relacionados
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('es-ES')}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
