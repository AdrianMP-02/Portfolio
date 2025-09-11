'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  platform: 'twitter' | 'linkedin' | 'facebook';
  title: string;
}

export const ShareButton = ({ platform, title }: ShareButtonProps) => {
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
      };

      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const colors = {
    twitter: 'hover:text-blue-400',
    linkedin: 'hover:text-blue-600',
    facebook: 'hover:text-blue-500'
  };

  return (
    <button
      onClick={handleShare}
      className={`p-2 text-gray-600 dark:text-gray-400 ${colors[platform]} transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50`}
      title={`Compartir en ${platform}`}
    >
      <Share2 size={16} />
    </button>
  );
};
