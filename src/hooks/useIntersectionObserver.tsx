import { useEffect, useRef } from 'react';

import { sectionThresholds } from '@/constants';

const useIntersectionObserver = (onIntersect: (id: string | null) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Exit early if we're on the server or the browser doesn't support IntersectionObserver
      return;
    }

    const currentRef = ref.current;
    const threshold = sectionThresholds[currentRef?.id ?? ''] ?? 0.5;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(currentRef?.id ?? null);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, onIntersect]);

  return ref;
};

export default useIntersectionObserver;
