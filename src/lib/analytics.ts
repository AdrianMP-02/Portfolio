// Google Analytics 4 configuration and utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics measurement ID not found');
    return;
  }

  // Load gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_title: document.title,
      page_location: window.location.href,
    });
  `;
  document.head.appendChild(script2);
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag === 'undefined') return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: title,
    page_location: url,
  });
};

// Check analytics consent
export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics_consent') === 'true';
};
