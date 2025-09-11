import { Metadata } from 'next';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultMetadata = {
  title: 'Adrián Martín Pereira - Desarrollador Web Junior',
  description: 'Desarrollador Web Junior especializado en PHP, MySQL, WordPress con Elementor y Node.js. Becario en MadisonMK creando soluciones web eficientes.',
  keywords: ['Desarrollador Web', 'PHP', 'MySQL', 'WordPress', 'Node.js', 'JavaScript', 'Frontend', 'Backend', 'Portfolio'],
  author: 'Adrián Martín Pereira',
  url: 'https://adrian-martin-pereira.vercel.app',
  image: '/og-image.jpg',
};

export function generateMetadata({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
  keywords = defaultMetadata.keywords,
  author = defaultMetadata.author,
  url = defaultMetadata.url,
  image = defaultMetadata.image,
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps = {}): Metadata {
  const fullTitle = title === defaultMetadata.title ? title : `${title} | Adrián Martín Pereira`;

  return {
    metadataBase: new URL(url),
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'es_ES',
      url,
      title: fullTitle,
      description,
      siteName: 'Adrián Martín Pereira Portfolio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime && {
        publishedTime,
        modifiedTime,
        authors: [author],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@AdrianMP02',
    },
    verification: {
      google: 'google-verification-code',
    },
    alternates: {
      canonical: url,
      languages: {
        'es-ES': url,
      },
    },
    other: {
      'msapplication-TileColor': '#1e40af',
      'theme-color': '#1e40af',
    },
  };
}

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
