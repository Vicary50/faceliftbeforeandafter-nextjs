'use client';

import { useEffect, ReactNode } from 'react';
import Script from 'next/script';

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  useEffect(() => {
    // Initialize GLightbox when component mounts
    const initLightbox = () => {
      if (typeof window !== 'undefined' && (window as any).GLightbox) {
        // Destroy existing instance if any
        const existingLightbox = (window as any).lightboxInstance;
        if (existingLightbox && typeof existingLightbox.destroy === 'function') {
          existingLightbox.destroy();
        }

        // Create new instance
        const lightbox = (window as any).GLightbox({
          touchNavigation: true,
          loop: true,
          autoplayVideos: true,
          closeButton: true,
          keyboardNavigation: true,
          zoomable: true,
          draggable: true,
          skin: 'clean',
          closeOnClick: true // Close lightbox when clicking on image
        });

        // Store instance for later cleanup
        (window as any).lightboxInstance = lightbox;
      }
    };

    // Debounced lightbox reinitialization
    let reinitTimer: NodeJS.Timeout;
    const reinitLightbox = () => {
      clearTimeout(reinitTimer);
      reinitTimer = setTimeout(initLightbox, 100);
    };

    // Watch for new glightbox elements being added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList?.contains('glightbox') || node.querySelector?.('.glightbox')) {
              reinitLightbox();
            }
          }
        });

        // Also watch for class changes
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target as HTMLElement;
          if (target.classList.contains('glightbox')) {
            reinitLightbox();
          }
        }
      });
    });

    // Start observing the document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    // Initial setup
    const timer = setTimeout(initLightbox, 500);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const anchorEl = e.currentTarget as HTMLAnchorElement;
        const href = anchorEl.getAttribute('href') || anchorEl.href;
        if (href && href !== '#' && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const nav = document.getElementById('main-nav');
            const navHeight = nav ? nav.offsetHeight : 0;
            const targetPosition = (target as HTMLElement).offsetTop - navHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
        }
      });
    });

    return () => {
      clearTimeout(timer);
      clearTimeout(reinitTimer);
      observer.disconnect();
      // Cleanup lightbox on unmount
      const existingLightbox = (window as any).lightboxInstance;
      if (existingLightbox && typeof existingLightbox.destroy === 'function') {
        existingLightbox.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* External Scripts */}
      <Script
        src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"
        strategy="beforeInteractive"
      />
      <Script src="https://elfsightcdn.com/platform.js" async />

      {children}
    </>
  );
}
