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

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined event tracking functions
export const analytics = {
  // Contact form events
  contactFormStart: () => trackEvent('contact_form_start', 'engagement'),
  contactFormComplete: () => trackEvent('contact_form_complete', 'engagement'),
  contactFormError: (error: string) => trackEvent('contact_form_error', 'engagement', error),

  // Project interactions
  projectView: (projectName: string) => trackEvent('project_view', 'projects', projectName),
  projectCodeClick: (projectName: string) => trackEvent('project_code_click', 'projects', projectName),
  projectLiveClick: (projectName: string) => trackEvent('project_live_click', 'projects', projectName),

  // Blog interactions
  blogPostView: (postTitle: string) => trackEvent('blog_post_view', 'blog', postTitle),
  blogShare: (postTitle: string, platform: string) => trackEvent('blog_share', 'blog', `${postTitle} - ${platform}`),

  // Navigation events
  navClick: (section: string) => trackEvent('nav_click', 'navigation', section),
  socialClick: (platform: string) => trackEvent('social_click', 'social', platform),

  // Download events
  cvDownload: () => trackEvent('cv_download', 'downloads'),
};

// GDPR-compliant analytics (for EU users)
export const enableAnalytics = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('analytics_consent', 'true');
    initGA();
  }
};

export const disableAnalytics = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('analytics_consent', 'false');
    // Disable GA
    if (GA_MEASUREMENT_ID && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        storage: 'none',
      });
    }
  }
};

export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics_consent') === 'true';
};
