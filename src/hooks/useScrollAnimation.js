import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-based animations using IntersectionObserver
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Root margin around viewport, default '0px'
 * @param {boolean} options.once - Whether to animate only once, default true
 * @param {boolean} options.enabled - Whether animations are enabled, default true
 * @returns {React.RefObject} - Ref to attach to element
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
    enabled = true,
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class to trigger animations
          entry.target.classList.add('is-visible');
          
          // Stop observing if animation should play only once
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          // Remove visible class to replay animation when scrolling out
          entry.target.classList.remove('is-visible');
        }
      });
    }, {
      threshold: Array.isArray(threshold) ? threshold : [threshold],
      rootMargin,
    });

    // Observe the element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, once, enabled]);

  return ref;
};

export default useScrollAnimation;
