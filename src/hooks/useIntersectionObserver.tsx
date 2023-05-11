import { useEffect, useRef } from 'react';

const useIntersectionObserver = (onIntersect: (id: string | null) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Exit early if we're on the server or the browser doesn't support IntersectionObserver
      return;
    }

    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(currentRef?.id ?? null);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
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
