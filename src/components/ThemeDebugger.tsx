'use client';

import { useEffect, useState } from 'react';

export default function ThemeDebugger() {
  const [htmlClasses, setHtmlClasses] = useState('');
  const [bodyClasses, setBodyClasses] = useState('');

  useEffect(() => {
    const updateClasses = () => {
      setHtmlClasses(document.documentElement.classList.toString());
      setBodyClasses(document.body.classList.toString());
    };

    // Initial update
    updateClasses();

    // Update on class changes
    const observer = new MutationObserver(updateClasses);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-20 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="mb-2">
        <strong>HTML Classes:</strong>
        <div className="text-yellow-300">{htmlClasses || 'none'}</div>
      </div>
      <div>
        <strong>Body Classes:</strong>
        <div className="text-green-300">{bodyClasses || 'none'}</div>
      </div>
    </div>
  );
}
