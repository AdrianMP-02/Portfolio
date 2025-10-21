import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: number;
  author: string;
}

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Calcular tiempo de lectura aproximado (250 palabras por minuto)
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 250);

        return {
          slug,
          title: data.title || 'Sin título',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || content.substring(0, 150) + '...',
          content,
          tags: data.tags || [],
          readTime,
          author: data.author || 'Adrián Martín',
        };
      });

    // Ordenar posts por fecha (más recientes primero)
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 250);

    return {
      slug,
      title: data.title || 'Sin título',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      content,
      tags: data.tags || [],
      readTime,
      author: data.author || 'Andrés García',
    };
  } catch {
    return null;
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const allTags = posts.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
}
