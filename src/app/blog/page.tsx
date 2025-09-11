import Link from 'next/link';
import { Calendar, Clock, Tag, BookOpen, ArrowRight, Search } from 'lucide-react';
import { getAllPosts, getAllTags } from '@/lib/blog';

export default function Blog() {
  const posts = getAllPosts();
  const tags = getAllTags();

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mis pensamientos, aprendizajes y actualizaciones de proyectos
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="text-white" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-white">
                ¡Próximamente contenido increíble!
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Estoy preparando artículos fascinantes sobre desarrollo web, tutoriales paso a paso
                y mis experiencias creando proyectos. Mientras tanto, puedes explorar mis proyectos
                y conocer más sobre mi trabajo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/projects"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                >
                  <ArrowRight size={20} />
                  Ver Proyectos
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800/50"
                >
                  Contáctame
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mis pensamientos, aprendizajes y actualizaciones de proyectos. Un espacio donde
            comparto conocimiento y experiencias del mundo del desarrollo.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-8">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* About Blog */}
              <SidebarCard
                title="Sobre este blog"
                icon={<BookOpen className="text-blue-400" size={20} />}
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  Aquí comparto mis experiencias como desarrollador, tutoriales prácticos,
                  actualizaciones de proyectos y reflexiones sobre tecnología y programación.
                </p>
              </SidebarCard>

              {/* Tags */}
              {tags.length > 0 && (
                <SidebarCard
                  title="Tags populares"
                  icon={<Tag className="text-purple-400" size={20} />}
                >
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600/50 transition-colors cursor-pointer border border-gray-600 hover:border-gray-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </SidebarCard>
              )}

              {/* Newsletter */}
              <SidebarCard
                title="Mantente actualizado"
                icon={<Calendar className="text-green-400" size={20} />}
              >
                <p className="text-gray-400 text-sm mb-4">
                  Suscríbete para recibir notificaciones de nuevos artículos.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="adrian.m.p.02022002@gmail.com"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm">
                    Suscribirse
                  </button>
                </div>
              </SidebarCard>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

interface BlogPostCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    readTime: number;
  };
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <article className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="p-8">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            {post.readTime} min de lectura
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-gray-700/50 text-blue-400 px-3 py-1 rounded-full text-sm border border-gray-600"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-gray-500 text-sm px-3 py-1">
                +{post.tags.length - 3} más
              </span>
            )}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
          >
            Leer más
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
};

interface SidebarCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SidebarCard = ({ title, icon, children }: SidebarCardProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
};
