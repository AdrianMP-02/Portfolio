import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function GET() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const fullPath = path.join(postsDirectory, name);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 250);

        return {
          slug: name.replace(/\.md$/, ''),
          title: data.title || 'Sin título',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || content.substring(0, 150) + '...',
          content,
          tags: data.tags || [],
          readTime,
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));

    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: 'Error loading blog posts' }, { status: 500 });
  }
}
