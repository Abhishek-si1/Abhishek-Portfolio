import { useEffect, useState } from "react";

/**
 * Tracks which section (by element id) is currently near the top of the viewport.
 * `resetKey` (e.g. the route pathname) re-attaches the observer after navigation -
 * the old Navbar only observed once on mount, so highlighting broke after
 * visiting a project page and coming back.
 */
export default function useActiveSection(sectionIds, resetKey) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -80% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, resetKey]);

  return [activeSection, setActiveSection];
}
