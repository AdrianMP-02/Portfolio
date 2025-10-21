export function generateJsonLd(data: {
  type: 'Person' | 'WebSite' | 'Article' | 'BlogPosting';
  name?: string;
  description?: string;
  url?: string;
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  headline?: string;
  keywords?: string[];
}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': data.type,
  };

  switch (data.type) {
    case 'Person':
      return {
        ...baseData,
        name: data.name || 'Adrián Martín Pereira',
        jobTitle: 'Desarrollador Web Junior',
        description: data.description || 'Desarrollador Web especializado en PHP, MySQL, WordPress y Node.js',
        url: data.url || 'https://adrian-martin-pereira.vercel.app',
        image: data.image || '/profile-image.jpg',
        sameAs: [
          'https://github.com/AdrianMP-02',
          'https://www.linkedin.com/in/adrián-martín-pereira-167813222/',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'MadisonMK',
        },
        knowsAbout: [
          'Desarrollo Web',
          'PHP',
          'MySQL',
          'WordPress',
          'Node.js',
          'JavaScript',
          'HTML',
          'CSS',
          'Elementor',
        ],
      };

    case 'WebSite':
      return {
        ...baseData,
        name: data.name || 'Adrián Martín Pereira Portfolio',
        description: data.description || 'Portfolio personal de Adrián Martín Pereira, desarrollador web junior',
        url: data.url || 'https://adrian-martin-pereira.vercel.app',
        author: {
          '@type': 'Person',
          name: 'Adrián Martín Pereira',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${data.url || 'https://adrian-martin-pereira.vercel.app'}/blog?search={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      };

    case 'Article':
    case 'BlogPosting':
      return {
        ...baseData,
        headline: data.headline || data.name,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          '@type': 'Person',
          name: data.author || 'Adrián Martín Pereira',
        },
        publisher: {
          '@type': 'Person',
          name: 'Adrián Martín Pereira',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
        keywords: data.keywords?.join(', '),
      };

    default:
      return baseData;
  }
}
