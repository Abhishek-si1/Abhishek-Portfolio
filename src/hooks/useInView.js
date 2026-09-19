import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, inView]. `inView` flips to true the first time the element
 * scrolls into view and stays true (used to trigger one-shot fade-in animations).
 * Replaces the IntersectionObserver block that was copy-pasted in six components.
 */
export default function useInView({ threshold = 0.1 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
