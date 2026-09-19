import { useEffect, useRef, useState } from "react";

// Only on wide screens with a real mouse; a cursor follower makes no sense on touch.
const DESKTOP_QUERY = "(min-width: 769px) and (hover: hover) and (pointer: fine)";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], .btn, .card, .project-card, .skill-item, .social-link, .nav-link, .theme-toggle, .navbar-brand, .tech-tag, .project-link';

const HIDDEN_STYLE = { opacity: 0 };

/**
 * Custom cursor. Position is written straight to the DOM from a requestAnimationFrame
 * loop instead of React state, so moving the mouse no longer re-renders the component
 * on every frame (the previous version did, and restarted its animation loop on every move).
 */
const CursorFollower = () => {
  const [enabled, setEnabled] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);
  const dotRef = useRef(null);
  const trailRef = useRef(null);

  // Enable/disable if the viewport or pointer type changes.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const handleChange = (event) => setEnabled(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) return undefined;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let hovering = false;
    let visible = false;
    let frameId = null;

    const render = () => {
      const left = `${current.x}px`;
      const top = `${current.y}px`;
      dot.style.left = left;
      dot.style.top = top;
      trail.style.left = left;
      trail.style.top = top;
    };

    const setVisible = (next) => {
      visible = next;
      dot.style.opacity = next ? "1" : "0";
      trail.style.opacity = next ? "0.6" : "0";
    };

    const tick = () => {
      const easing = hovering ? 0.25 : 0.12; // lower = smoother but slower
      current.x += (target.x - current.x) * easing;
      current.y += (target.y - current.y) * easing;
      render();

      const settled =
        Math.abs(target.x - current.x) < 0.1 && Math.abs(target.y - current.y) < 0.1;
      frameId = settled ? null : requestAnimationFrame(tick);
    };

    const handleMouseMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visible) {
        // first move: appear at the pointer instead of sliding in from the corner
        current.x = target.x;
        current.y = target.y;
        render();
        setVisible(true);
      }
      if (frameId === null) frameId = requestAnimationFrame(tick);
    };

    const handleMouseOver = (event) => {
      const element = event.target instanceof Element ? event.target : null;
      hovering = Boolean(element && element.closest(INTERACTIVE_SELECTOR));
      dot.classList.toggle("cursor-hover", hovering);
      trail.classList.toggle("cursor-hover", hovering);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const root = document.documentElement;
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    root.addEventListener("mouseenter", handleMouseEnter);
    root.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      root.removeEventListener("mouseenter", handleMouseEnter);
      root.removeEventListener("mouseleave", handleMouseLeave);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-follower" style={HIDDEN_STYLE} />
      <div ref={trailRef} className="cursor-trail" style={HIDDEN_STYLE} />
    </>
  );
};

export default CursorFollower;
