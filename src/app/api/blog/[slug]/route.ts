import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 250);

    const post = {
      slug,
      title: data.title || 'Sin título',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      content,
      tags: data.tags || [],
      readTime,
    };

    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: 'Error loading blog post' }, { status: 500 });
  }
}
