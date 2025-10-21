'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGA, trackPageView, hasAnalyticsConsent } from '@/lib/analytics';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize GA only if user has given consent
    if (hasAnalyticsConsent()) {
      initGA();
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (hasAnalyticsConsent() && pathname) {
      const title = document.title;
      const url = window.location.href;
      trackPageView(url, title);
    }
  }, [pathname]);

  // Don't render anything - this is just for tracking
  return null;
}
