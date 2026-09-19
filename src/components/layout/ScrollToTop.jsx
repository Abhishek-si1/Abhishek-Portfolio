import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Resets scroll to the top when navigating to a new page (e.g. opening a project),
 * which react-router doesn't do by itself. Skips back/forward navigation and
 * #hash links so those keep their own scroll behaviour.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP" || hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollToTop;
