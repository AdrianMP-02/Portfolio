import PageWrapper from '@/components/PageWrapper';
import { getAllPosts, getAllTags } from '@/lib/blog';
import BlogClient from './BlogClient';

// Server Component - obtiene datos en el servidor
export default function BlogPage() {
  // Obtener datos del sistema MDX en el servidor
  const allPosts = getAllPosts();
  const allCategories = getAllTags();

  return (
    <PageWrapper>
      <BlogClient
        initialPosts={allPosts}
        initialCategories={allCategories}
      />
    </PageWrapper>
  );
}
